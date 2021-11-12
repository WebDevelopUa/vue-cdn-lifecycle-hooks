let viewModel1 = Vue.createApp({
    data() {
        return {
            message: "data() Message #1"
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

// Mount App #1 immediately; unmount in 12s
viewModel1.mount('#app1')
setTimeout(() => viewModel1.unmount(), 12000)

// Mount App #2 in 4s
setTimeout(() => viewModel2.mount('#app2'), 4000)
