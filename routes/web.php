<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Stevebauman\Location\Facades\Location;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $ip = getenv('HTTP_CLIENT_IP')?:
    getenv('HTTP_X_FORWARDED_FOR')?:
    getenv('HTTP_X_FORWARDED')?:
    getenv('HTTP_FORWARDED_FOR')?:
    getenv('HTTP_FORWARDED')?:
    getenv('REMOTE_ADDR');
    dd($ip);
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'date' => now(),
        //'ip' => Request::ip(),
        'userAgent' => Request::header('user-agent'),
        'location' =>  Location::get($ip), //Request::ip()
        'browser' => Agent::browser(),
        'browserVersion' => Agent::version(Agent::browser()),
        'platform' => Agent::platform(),
        'platformVersion' => Agent::version(Agent::platform()),
        'host' => Request::getHttpHost($ip),
        'isp' => gethostbyaddr($_SERVER['REMOTE_ADDR']),
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
