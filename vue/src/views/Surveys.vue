<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <PageComponent>
        <div v-if="surveys.loading" class="flex justify-center">
            <lottie-player
                class="flex justify-center"
                src="https://assets1.lottiefiles.com/packages/lf20_t9gkkhz4.json"
                speed="1"
                style="width: 600px; height: 600px"
                loop
                autoplay
            >
            </lottie-player>
        </div>
        <div v-else-if="surveys.data.length">
            <div
                class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 mt-4 font-inter"
            >
                <div
                    class="grid content-center justify-center py-4 px-6 h-[360px]"
                >
                    <TButton
                        :to="{ name: 'SurveyCreate' }"
                        class="bg-gradient-to-br from-purple-300 to-br to-pink-300 hover:scale-110"
                    >
                        <PlusIcon class="w-20 h-20 m-4" />
                    </TButton>
                </div>
                <SurveyListItem
                    v-for="(survey, ind) in surveys.data"
                    :key="survey.id"
                    :survey="survey"
                    class="opacity-0 animate-fade-in-down"
                    :style="{ animationDelay: `${ind * 0.1}s` }"
                    @delete="deleteSurvey(survey)"
                />
            </div>
            <div class="flex justify-center mt-5 font-inter">
                <nav
                    class="relative z-0 inline-flex justify-center rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                >
                    <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                    <a
                        v-for="(link, i) of surveys.links"
                        :key="i"
                        :disabled="!link.url"
                        href="#"
                        @click="getForPage($event, link)"
                        aria-current="page"
                        class="relative inline-flex items-center px-4 py-2 border text-sm font-medium whitespace-nowrap no-underline"
                        :class="[
                            link.active
                                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
                            i === 0
                                ? 'rounded-l-md bg-gray-100 text-gray-700'
                                : '',
                            i === surveys.links.length - 1
                                ? 'rounded-r-md'
                                : '',
                        ]"
                        v-html="link.label"
                    >
                    </a>
                </nav>
            </div>
        </div>
        <div v-else class="text-gray-600 text-center py-16 justify-center">
            <div class="grid content-center justify-center py-4 px-6 h-[360px]">
                <TButton
                    :to="{ name: 'SurveyCreate' }"
                    class="bg-gradient-to-br from-purple-300 to-br to-pink-300 hover:scale-[0.85px] cursor-pointer"
                >
                    <PlusIcon class="w-20 h-20 m-4" />
                </TButton>
            </div>
        </div>
    </PageComponent>
</template>

<script setup>
import store from "../store";
import { computed } from "vue";
import { PlusIcon } from "@heroicons/vue/24/solid";
import TButton from "../components/core/TButton.vue";
import PageComponent from "../components/PageComponent.vue";
import SurveyListItem from "../components/SurveyListItem.vue";

const surveys = computed(() => store.state.surveys);

store.dispatch("getSurveys");

function deleteSurvey(survey) {
    if (
        confirm(
            `Are you sure you want to delete this survey? Operation can't be undone!!`
        )
    ) {
        store.dispatch("deleteSurvey", survey.id).then(() => {
            store.dispatch("getSurveys");
        });
    }
}

function getForPage(ev, link) {
    ev.preventDefault();
    if (!link.url || link.active) {
        return;
    }
    store.dispatch("getSurveys", { url: link.url });
}
</script>