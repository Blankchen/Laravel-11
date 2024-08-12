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
            @{{ message }}
        </div>
        @vite('resources/js/app.js')

        <script type="module">
        import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.esm.browser.js'
        let vm = new Vue({
            el: '#vue2',
            data(){
                return {
                    message: 'Hello CDN Vue2'
                }
            }
        })
        </script>
    </body>
</html>
