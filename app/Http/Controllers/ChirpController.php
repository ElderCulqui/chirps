<?php

namespace App\Http\Controllers;

use App\Http\Resources\ChirpResource;
use App\Models\Chirp;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChirpController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $chirps = Chirp::with('user')->latest()->get();

        return Inertia::render('Chirps/Index', [
            'chirps' => ChirpResource::collection($chirps)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'message' => 'required|string',
        ]);

        $request->user()->chirps()->create([
            'message' => $data['message'],
        ]);

        return back()->with('status', __('Chirp created!'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Chirp $chirp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chirp $chirp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chirp $chirp)
    {
        $data = $request->validate([
            'message' => 'required|string',
        ]);

        $chirp->update($data);

        return back()->with('status', __('Chirp updated!'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chirp $chirp)
    {
        $chirp->delete();

        return back()->with('status', __('Chirp deleted!'));
    }
}
