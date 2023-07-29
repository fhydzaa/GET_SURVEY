<?php

namespace App\Exports;

use App\Models\SuveyAnswer;
use Maatwebsite\Excel\Concerns\FromCollection;

class RespondenExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return SuveyAnswer::all();
    }
}
