<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Element Plus demo</title>
        @vite('resources/scss/app.scss')
    </head>
    <body >
        <div id="app">
            @section('content') @show
        </div>
        @vite('resources/js/app.js')
    </body>
</html>
