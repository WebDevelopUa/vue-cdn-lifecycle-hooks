let viewModel1 = Vue.createApp({
    data() {
        return {
            message: "data() Message #1 - [will be unmounted in 12s]"
        }
    },
    beforeCreate() {
        console.log('... beforeCreate() ... : ', this.message)
    },
    created() {
        console.log('... created() ... : ', this.message)
    },
    beforeMount() {
        console.log('... beforeMount() ... : ', this.$el)
    },
    mounted() {
        console.log('... mounted() ... : ', this.$el)
    },
    beforeUpdate() {
        console.log('... beforeUpdate() ...  ')
    },
    updated() {
        console.log('... updated() ...  ')
    },
    beforeUnmount() {
        console.log('... beforeUnmount() ...  ')
    },
    unmounted() {
        console.log('... unmounted() ...  ')
    },
    watch: {
        message() {
            this.message = 'Message updated!'
        }
    }
})

let viewModel2 = Vue.createApp({
    data() {
        return {
            message: "data() Message #2 - [with setTimeout()]"
        }
    }
})

let viewModel3 = Vue.createApp({
    data() {
        return {
            message: "data() Message #3 - [using String interpolation template]"
        }
    },
    template: `{{message}}`
})

let viewModel4 = Vue.createApp({
    data() {
        return {
            message: "data() Message #4 - [using Not compiled template]"
        }
    },
    render() {
        return Vue.h(
            'h3',
            this.message
        )
    }
})

// Mount App #1 immediately; unmount in 12s
viewModel1.mount('#app1')
setTimeout(() => viewModel1.unmount(), 12000)

// Mount App #2 in 4s
setTimeout(() => viewModel2.mount('#app2'), 4000)

// Mount App #3 in 3s
setTimeout(() => viewModel3.mount('#app3'), 3000)

// Mount App #4 in 5s
setTimeout(() => viewModel4.mount('#app4'), 5000)
