<template>
    <div
        class="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
        style="background-image: url('public/images/Frame-130.png')"
    >
        <div
            class="card login-form bg-gradient-to-br from-purple-300 to-br to-pink-300 shadow-xl rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
        >
            <div class="card-body">
                <div
                    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-inter"
                >
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2
                            class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-mediumslateblue-100"
                        >
                            Login
                        </h2>
                    </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6">
                            <!-- <Alert
                                v-if="Object.keys(errorMsg).length"
                                class="flex-col items-stretch text-sm"
                            >
                                <div
                                    v-for="(field, i) of Object.keys(errorMsg)"
                                    :key="i"
                                >
                                    <div
                                        v-for="(error, ind) of errorMsg[
                                            field
                                        ] || []"
                                        :key="ind"
                                    >
                                        * {{ error }}
                                    </div>
                                </div>
                            </Alert> -->
                            <Alert v-if="errorMsg">
                                {{ errorMsg }}
                                <span
                                    @click="errorMsg = ''"
                                    class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </span>
                            </Alert>
                            <div>
                                <label
                                    for="email"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Email address</label
                                >
                                <div class="mt-2 mr-6">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autocomplete="email"
                                        v-model="user.email"
                                        class="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label
                                        for="password"
                                        class="block text-sm font-medium leading-6 text-gray-900"
                                        >Password</label
                                    >
                                </div>
                                <div class="mt-2 mr-6">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autocomplete="current-password"
                                        v-model="user.password"
                                        class="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <button
                                    @click="login"
                                    type="submit"
                                    class="flex w-40 justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        <p class="mt-10 text-center text-sm text-gray-500">
                            Not a member? {{ " " }}
                            <router-link
                                :to="{ name: 'Register' }"
                                class="font-semibold leading-6 text-pink-600 hover:text-pink-500"
                                >Register</router-link
                            >
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import store from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Alert from "../components/Alert.vue";

const router = useRouter();

const user = {
    email: "",
    password: "",
};

let errorMsg = ref("");

function login(ev) {
    ev.preventDefault();
    store
        .dispatch("login", user)
        .then(() => {
            router.push({
                name: "Home",
            });
        })
        .catch((err) => {
      errorMsg.value = err.response.data.error;
    });
}
</script>
