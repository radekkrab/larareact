<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function payment(Request $request)
    {
        Card::create($request->toArray());

        return redirect()->route('dashboard');
    }
}
