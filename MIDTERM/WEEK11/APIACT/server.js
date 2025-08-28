//Galang, Marius Kevin D.
//WD - 301

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Kevin Galang - WD301");
});

let users =  [
  { id: 1, name: 'Carmela', email: 'mela@gmail.com', age: 25, salary: 25000 },
  { id: 2, name: 'Joseph', email: 'joe@yahoo.com', age: 30, salary: 45000 },
  { id: 3, name: 'James', email: 'james@msn.com', age: 35, salary: 30000 },
  { id: 4, name: 'John', email: 'john@gmail.com', age: 40, salary: 25000 },
  { id: 5, name: 'Frank', email: 'frank@yahoo.com', age: 45, salary: 45000 },
  { id: 6, name: 'Alex', email: 'alex@msn.com', age: 21, salary: 33000 }
];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/api/users', (req, res) => {
  res.json({ count: users.length, users });
});

app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ message: `User with id ${id} not found.` });
  }
  res.json(user);
});

app.post('/api/users', (req, res) => {
  let { name, email, age, salary } = req.body;

  const nextId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;

  const newUser = { id: nextId, name, email, age, salary };
  users.push(newUser);

  res.status(201).json({
    message: 'User added successfully.',
    user: newUser,
    totalUsers: users.length
  });
});

app.delete('/api/delete/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = users.findIndex(u => u.id === id);

  if (idx === -1) {
    return res.status(404).json({ message: `User with id ${id} not found.` });
  }

  const removed = users.splice(idx, 1)[0];
  res.json({
    message: `User with id ${id} deleted successfully.`,
    deletedUser: removed,
    totalUsers: users.length
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

