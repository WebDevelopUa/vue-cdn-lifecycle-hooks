Vue 3
---

Demo: [GitHub Pages](https://webdevelopua.github.io/ )

- [What is Vue.js?](https://v3.vuejs.org/guide/introduction.html)
- [Vue CDNJS](https://cdnjs.com/libraries/vue)
- [Vue UNPKG](https://unpkg.com/browse/vue@2.6.14/)
- [Vue.js 2 devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Vue.js 3 devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)

----

### Vue Lifecycle

1) Vue.createApp().mount()
    - ***beforeCreate Hook***
2) Init data & methods
3) Instance created
    - ***created Hook***
4) Compile template (el property)
    - ***beforeMount Hook***
5) Replace el property with compiled template
6) **MOUNTED** #1
7) Data changes
    - ***beforeUpdate Hook*** (used for debugging)
8) Apply changes to the template
    - ***updated Hook*** (used for debugging)
9) **MOUNTED** #2
10) .unmount()
    - ***beforeUnmount Hook***
11) Vue instance destroyed
    - ***unmounted Hook***
 
