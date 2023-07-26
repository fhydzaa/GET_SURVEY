<template>
  <div
    class="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
    style="background-image: url('public/images/backgroundregister.png')"
  >
    <div
      class="card login-form bg-gradient-to-br from-pink-300 to-br to-purple-300 shadow-xl rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
    >
      <div class="card-body">
        <div
          class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-inter"
        >
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2
              class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-mediumvioletred-100"
            >
              Register
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6">
              <div class="mb-3 mr-6">
                <div class="grid grid-cols-2 gap-8">
                  <div class="...">
                    <label
                      for="lastname"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >First name</label
                    >
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      autocomplete="name"
                      class="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      v-model="user.firstname"
                    />
                  </div>
                  <div class="...">
                    <label
                      for="lastname"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Last name</label
                    >
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      autocomplete="name"
                      class="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      v-model="user.lastname"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email
                </label>
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

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="passwor_confirmation"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Confirm password</label
                  >
                </div>
                <div class="mt-2 mr-6">
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    autocomplete="current-password_confirmation"
                    v-model="user.password_confirmation"
                    class="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="flex justify-center mx-1">
                <button
                  @click="register"
                  type="submit"
                  class="flex w-40 justify-center rounded-full bg-mediumvioletred-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-mediumvioletred-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
              Already have an account? {{ " " }}
              <router-link
                :to="{ name: 'Login' }"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >Login</router-link
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

const router = useRouter();
const user = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  password_confirmation: "",
};

function register(ev) {
  ev.preventDefault();
  store.dispatch("register", user).then(() => {
    router.push({
      name: "Home",
    });
  });
}
</script>
