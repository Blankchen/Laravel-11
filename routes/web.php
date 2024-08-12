<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('main');
    // return view('welcome');
});


Route::get('/vite', function () {
    return view('app_vite');
    // return view('welcome');
});
