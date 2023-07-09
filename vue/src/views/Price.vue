<template>
    <div class="bg-white mt-4 font-inter">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
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
                class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
            >
                <div class="p-8 sm:p-10 lg:flex-auto">
                    <h3 class="text-2xl font-bold tracking-tight text-gray-900">
                        Lifetime membership
                    </h3>
                    <p class="mt-6 text-base leading-7 text-gray-600">
                        Lorem ipsum dolor sit amet consect etur adipisicing
                        elit. Itaque amet indis perferendis blanditiis
                        repellendus etur quidem assumenda.
                    </p>
                    <div class="mt-10 flex items-center gap-x-4">
                        <h4
                            class="flex-none text-sm font-semibold leading-6 text-indigo-600"
                        >
                            What’s included
                        </h4>
                        <div class="h-px flex-auto bg-gray-100" />
                    </div>
                    <ul
                        role="list"
                        class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                    >
                        <li
                            v-for="feature in includedFeatures"
                            :key="feature"
                            class="flex gap-x-3"
                        >
                            <CheckIcon
                                class="h-6 w-5 flex-none text-indigo-600"
                                aria-hidden="true"
                            />
                            {{ feature }}
                        </li>
                    </ul>
                </div>
                <div
                    class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0"
                >
                    <div
                        class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
                    >
                        <div class="mx-auto max-w-xs px-8">
                            <p class="text-base font-semibold text-gray-600">
                                Pay once, own it forever
                            </p>
                            <p
                                class="mt-6 flex items-baseline justify-center gap-x-2"
                            >
                                <span
                                    class="text-5xl font-bold tracking-tight text-gray-900"
                                    >$10</span
                                >
                                <span
                                    class="text-sm font-semibold leading-6 tracking-wide text-gray-600"
                                    >USD</span
                                >
                            </p>
                            <a
                                href="#"
                                class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >Get access</a
                            >
                            <p class="mt-6 text-xs leading-5 text-gray-600">
                                Invoices and receipts available for easy company
                                reimbursement
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";
import { computed } from "vue";
import { useStore } from "vuex";

const includedFeatures = [
    "Private forum access",
    "Member resources",
    "Entry to annual conference",
    "Official member t-shirt",
];
const store = useStore();

const loading = computed(() => store.state.home.loading);
</script>
