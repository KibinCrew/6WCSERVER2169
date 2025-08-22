const books = {

    data(){
        return{
            showBooks: true,
            btitle: 'HARREY POTTAH',
            bauthor: 'Kevin Galang',
            year: 1203
        }
    },

    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
};
Vue.createApp(books).mount('#books');