<template>
    <div class="py-5 px-8">
      <div v-if="loading" class="flex justify-center">
        <lottie-player
          class="flex justify-center"
          src="https://assets1.lottiefiles.com/packages/lf20_t9gkkhz4.json"
          speed="1"
          style="width: 600px; height: 600px"
          loop
          autoplay
        ></lottie-player>
      </div>
      <form @submit.prevent="submitSurvey" v-else class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-6 items-center">
          <div class="md:col-start-2 md:col-span-1">
            <img :src="survey.image_url" class="rounded-lg h-[100px] mx-auto md:mx-0" alt="" />
          </div>
          <div class="md:col-start-3 md:col-span-4">
            <h1 class="text-3xl mb-3">{{ survey.title }}</h1>
            <p
              class="text-gray-500 text-sm leading-relaxed"
              v-html="survey.description"
            ></p>
          </div>
        </div>
  
        <div
          v-if="surveyFinished"
          class="py-8 px-6 bg-emerald-400 text-white w-[600px] mx-auto rounded-lg"
        >
          <div class="text-xl mb-3 font-semibold">
            Thank you for participating in this survey.
          </div>
          <button
            @click="submitAnotherResponse"
            type="button"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit another response
          </button>
        </div>
        <div v-else>
          <hr class="my-3" />
          <div
            v-for="(question, ind) of survey.questions"
            :key="question.id"
            class="mb-4"
          >
            <QuestionViewer
              v-model="answers[question.id]"
              :question="question"
              :index="ind"
            />
          </div>
  
          <button
            type="submit"
            class="cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </template>
  
  
  <script setup>
  import { computed, ref } from "vue";
  import { useRoute } from "vue-router";
  import { useStore } from "vuex";
  import QuestionViewer from "../components/viewer/QuestionViewer.vue";
  const route = useRoute();
  const store = useStore();
  
  const loading = computed(() => store.state.currentSurvey.loading);
  const survey = computed(() => store.state.currentSurvey.data);
  
  const surveyFinished = ref(false);
  
  const answers = ref({});
  
  store.dispatch("getSurveyBySlug", route.params.slug);
  
  function submitSurvey() {
      console.log(JSON.stringify(answers.value, undefined, 2));
      store
          .dispatch("saveSurveyAnswer", {
              surveyId: survey.value.id,
              answers: answers.value,
          })
          .then((response) => {
              if (response.status === 201) {
                  surveyFinished.value = true;
              }
          });
  }
  
  function submitAnotherResponse() {
      answers.value = {};
      surveyFinished.value = false;
  }
  </script>
  
  <style></style>