<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>ًApplication</title>
    </head>
    <body>
        <div id="app">
        </div>
        <div id="vue2">
            message:@{{ message }}
            <br>
            vue3Data: @{{ vue3Data }}
            <button @click="setVue3">click v2</button>
        </div>
        <div id="hibride">
            @{{ name }}
        </div>
        <div>
            test
            @{{ vm.$data.name }}
        </div>
        <div>
            test image
            <img width="100" src="{{ Vite::asset('resources/images/test.webp') }}">
        </div>


        @vite('resources/js/app.js')
        @vite('resources/js/vueInstant.js')

        {{-- @vite('resources/js/watermark.js', { username: '123'}) --}}

        <script type="module">
        import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.esm.browser.js'
        let vm = new Vue({
            el: '#vue2',
            data(){
                const vue3Data = window.vMountedInstance.$data.name
                return {
                    message: 'Hello CDN Vue2',
                    vue3Data,
                }
            },
            methods: {
                setVue3() {
                    console.log(('vMountedInstance', window.vMountedInstance));
                    this.vue3Data = "dfwewewefwefwefwefwef"

                    // this.$forceUpdate();
                }
            }
        })
        </script>
    </body>
</html>
