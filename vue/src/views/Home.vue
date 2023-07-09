<template>
    <div div class="max-w-7xl mx-10 py-14 px-4 sm:px-6 lg:px-8 font-inter">
        <div v-if="loading" class="flex justify-center">
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
        <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700"
        >
            <DashboardCard
                class="order-3 md:order-3 rounded-lg"
                style="animation-delay: 0.1s"
            >
                <template v-slot:title>
                    <div class="text-xl">Total Surveys</div>
                </template>
                <div
                    class="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center"
                >
                    {{ data.totalSurveys }}
                </div>
            </DashboardCard>

            <DashboardCard
                class="bg-gradient-to-br from-purple-300 to-br to-pink-300 order-1 md:order-1 row-span-1 rounded-lg"
                style="animation-delay: 0.1s"
            >
                <div>
                    "
                    <img
                        class="mt-4 w-[280px]"
                        alt=""
                        src="images/saly25@2x.png"
                    />
                </div>
                <div class="flex flex-1 flex-col justify-center p-6 lg:px-8">
                    <div class="font-medium text-lg">
                        Make surveys easier and faster
                    </div>

                    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6">
                            <div class="flex justify-center">
                                <button
                                    type="submit"
                                    class="flex w- justify-center rounded-lg bg-indigo-600 px-5 py-2 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                                >
                                    Create survey
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </DashboardCard>

            <DashboardCard
                class="order-2 md:order-2 row-span-2 rounded-lg"
                style="animation-delay: 0.2s"
            >
                <template v-slot:title>
                    <div class="text-xl">Latest Survey</div>
                </template>
                <div v-if="data.latestSurvey" class="m-4">
                    <img
                        :src="data.latestSurvey.image_url"
                        class="w-[240px] mx-auto rounded-lg"
                        alt=""
                    />
                    <br />
                    <h3 class="font-inter text-xl mb-3 flex-1">
                        {{ data.latestSurvey.title }}
                    </h3>
                    <br />
                    <div class="flex justify-between text-sm mb-1">
                        <div>Create Date:</div>
                        <div>{{ data.latestSurvey.created_at }}</div>
                    </div>
                    <div class="flex justify-between text-sm mb-1">
                        <div>Expire Date:</div>
                        <div>{{ data.latestSurvey.expire_date }}</div>
                    </div>
                    <div class="flex justify-between text-sm mb-1">
                        <div>Status:</div>
                        <div>
                            {{ data.latestSurvey.status ? "Active" : "Draft" }}
                        </div>
                    </div>
                    <div class="flex justify-between text-sm mb-1">
                        <div>Questions:</div>
                        <div>{{ data.latestSurvey.questions }}</div>
                    </div>
                    <div class="flex justify-between text-sm mb-3">
                        <div>Answers:</div>
                        <div>{{ data.latestSurvey.answers }}</div>
                    </div>
                    <br />
                    <div class="flex justify-between ">
                        <TButton
                            class="no-underline"
                            :to="{
                                name: 'SurveyView',
                                params: { id: data.latestSurvey.id },
                            }"
                            link
                        >
                            <PencilIcon class="w-5 h-5 mr-2 " />
                            Edit Survey
                        </TButton>

                        <TButton link>
                            <EyeIcon class="w-5 h-5 mr-2" />
                            View Answers    
                        </TButton>
                    </div>
                </div>
                <div v-else class="text-gray-600 text-center py-16">
                    Your don't have surveys yet
                </div>
            </DashboardCard>
        </div>
    </div>
</template>

<script setup>
import { EyeIcon, PencilIcon } from "@heroicons/vue/24/solid";
import DashboardCard from "../components/core/DashboardCard.vue";
import TButton from "../components/core/TButton.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const loading = computed(() => store.state.home.loading);
const data = computed(() => store.state.home.data);

store.dispatch("getDashboardData");
</script>

<style scoped></style>
