<?php

namespace App\Http\Controllers;

use App\Models\Logger;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoggerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $loggers = Logger::orderBy("id");
        $search = "";
        if (request()->has("search")) {
            $search = request("search");
            $loggers = $loggers->where('ip', 'like', '%' . $search . "%")
                ->orWhere('country', 'like', '%' . $search . "%")
                ->orWhere('city', 'like', '%' . $search . "%");;
        }
        $loggers = $loggers->paginate(10)->appends(request()->except("page"));
        return Inertia::render('Logger/Index', compact('loggers','search'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Logger $logger)
    {
        return Inertia::render('Logger/Index', compact('logger'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Logger $logger)
    {
        $logger->delete();
        return redirect()->back()->with('message', 'Logger deleted');
    }
}
