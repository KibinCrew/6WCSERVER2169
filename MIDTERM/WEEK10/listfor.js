const ListRendering = {
    data(){
        return{
            todos: [
                {text: "Kumain"},
                {text: "Punta sa Gym"},
                {text: "Mag-aral ng mabuti"}
            ]
        }
    }
}
Vue.createApp(ListRendering).mount('#list-rendering')