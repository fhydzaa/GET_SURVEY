<?php

use App\Models\SurveyAnswer;
use App\Models\SurveyQuetion;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('survey_quetion_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(SurveyQuetion::class, 'survey_quetion_id');
            $table->foreignIdFor(SurveyAnswer::class, 'survey_answer_id');
            $table->text('answer');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('survey_quetion_answers');
    }
};
