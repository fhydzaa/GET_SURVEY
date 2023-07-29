<?php

namespace App\Http\Controllers;

use App\Models\SurveyAnswer;
use Illuminate\Http\Request;

class ResponderController extends Controller
{
    public function index()
    {
        $responder = SurveyAnswer::all();
        return view('surveyanswer', ['responder' => $responder]);
    }
}
