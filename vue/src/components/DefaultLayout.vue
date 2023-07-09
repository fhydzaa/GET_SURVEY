<template>
    <div class="min-h-full" >
      <Disclosure as="nav" class="bg-white font-inter mt-2" v-slot="{ open }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                class="h-6 w-auto"
                src="https://i.postimg.cc/Kctp3wp4/logo2-11-2x.png"
                alt="Your Company" />
              </div>
              <div class="hidden md:block">
                <div class="md:ml-[60px] lg:ml-[250px] xl:ml-[350px] flex items-baseline space-x-4 ">
                  <router-link
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.to"
                    :class="[
                      this.$route.name === item.to.name
                        ? ''
                        : 'text-gray-300 hover:bg-gray-100 hover:text-black no-underline',
                      'px-3 py-2 rounded-md text-lg font-bold no-underline',
                    ]"
                    >{{ item.name }}
                  </router-link>
                </div>
              </div>
            </div>
            
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <!-- Profile dropdown -->
                <Menu as="div" class="ml-3 relative">
                  <div class="flex">
                    <MenuButton
                      class="max-w-xs bg-white hover:bg-gray-100 rounded-full flex items-center text-sm cursor-pointer" 
                    >
                      <span class="sr-only">Open user menu</span>
  
                      <div class="mx-3">
                        <div
                          class="text-left text-base font-medium leading-none text-black"
                        >
                          {{ user.firstname }} {{ user.lastname }}
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="black"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </MenuButton>
                  </div>
                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems
                      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <MenuItem v-slot="{}">
                        <a
                          @click="logout"
                          :class="[
                            'block px-4 py-2 text-sm text-black hover:bg-gray-100 cursor-pointer',
                          ]"
                          >Sign out</a
                        >
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                class="bg-white inline-flex items-center justify-center p-2 rounded-md cursor-pointer"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
        </div>
  
        <DisclosurePanel class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              :class="[
                this.$route.name === item.to.name
                  ? ''
                  : 'text-gray-300 hover:bg-gray-100 hover:text-black no-underline',
                'block px-3 py-2 rounded-md text-base font-medium no-underline',
              ]"
              >{{ item.name }}
            </router-link>
          </div>
          <div class="pt-4 pb-3 border-t border-gray-700">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <div class="text-base font-medium leading-none text-black">
                    {{ user.firstname }} {{ user.lastname }}
                </div>
              </div>
            </div>
            <div class="mt-3 px-2 space-y-1">
              <DisclosureButton
                as="a"
                @click="logout"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-black hover:bg-gray-100 cursor-pointer"
                >Sign out
              </DisclosureButton>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
  
      <router-view :key="$route.path"></router-view>
  
      <Notification />
    </div>
  </template>
  
  <script>
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  } from "@headlessui/vue";
  import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
  import { useStore } from "vuex";
  import { computed } from "vue";
  import { useRouter } from "vue-router";
  import Notification from "./Notification.vue";
  
  const navigation = [
    { name: "Home", to: { name: "Home" } },
    { name: "Surveys", to: { name: "Surveys" } },
    { name: "Price", to: { name: "Price" } },
  ];
  
  export default {
    components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      Bars3Icon, 
      XMarkIcon,
      Notification,
    },
    setup() {
      const store = useStore();
      const router = useRouter();
  
      function logout() {
        store.dispatch("logout").then(() => {
          router.push({
            name: "Home",
          });
        });
      }
  
      store.dispatch("getUser");
  
      return {
        user: computed(() => store.state.user.data),
        navigation,
        logout,
      };
    },
  };
  </script>
  