Vue 3
---

Demo: [GitHub Pages](https://webdevelopua.github.io/vue-cdn-lifecycle-hooks/)

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
4) Compile Template (el property) - [String HTML => JS Object] - ***Virtual DOM (is a JS Object, copy of actual DOM)***
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
 
----

## [Vue builds](https://ru.vuejs.org/v2/guide/installation.html#%D0%9E%D0%B1%D1%8A%D1%8F%D1%81%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D1%85-%D1%81%D0%B1%D0%BE%D1%80%D0%BE%D0%BA)
