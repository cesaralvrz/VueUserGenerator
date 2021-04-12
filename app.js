const app = Vue.createApp({
    data(){
        return {
            firstName: 'August',
            lastName: 'Cole',
            email: 'coletrain@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        // async = función asíncrona
        async getUser() {
            // El operador await es usado para esperar a una Promise
            // Sólo puede ser usado dentro de una función async
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')