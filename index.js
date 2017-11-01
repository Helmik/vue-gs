var apps = [];


function init() {
    apps.push(new Vue({
        el: '#app',
        data: {
            message: 'Hello Panchito!'
        }
    }));

    apps.push(new Vue({
        el: '#app-2',
        data: {
            message: 'You loaded this page on:' + new Date()
        }
    }));

    apps.push(new Vue({
        el: '#app-3',
        data: {
            seen: true
        }
    }));

    apps.push(new Vue({
        el: '#app-4',
        data: {
            todos: [
                {text: 'Hello'},
                {text: 'World'},
                {text: '!'}
            ]
        }
    }));

    apps.push(new Vue({
        el: '#app-5',
        data: {
            message: 'Hello Vue.js'
        },
        methods: {
            reverseMessage: function() {
                this.message = this.message.split('').reverse().join('')
            }
        }
    }));
}
