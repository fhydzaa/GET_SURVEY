<template>
  <div  class="relativee w-full h-[864px] overflow-hidden text-lg text-default-white font-inter">

    <Disclosure
      as="nav"
      class="bg-neutral-silver shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
      v-slot="{ open }"
    >
      <div class="mx-auto max-w-7xl px-10 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-[100px]">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex lg:flex-1 items-center">
              <img
                class="block h-10 w-auto lg:hidden"
                src="public/images/logo2-11@2x.png"
                alt="Your Company"
              />
              <img
                class="hidden h-10 w-auto lg:block"
                src="public/images/logo2-11@2x.png"
                alt="Your Company"
              />
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
              <div class="flex space-x-4">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.to"
                  :class="[
                    item.current
                      ? ' text-mediumvioletred-100'
                      : 'text-black hover:text-mediumvioletred-100',
                    'px-3 py-2 text-base font-medium cursor-pointer',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</router-link
                >
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <!-- <div class="flex px-4 py-2 text-sm text-gray-700 justify-end">
                      {{ user.firstname + " " + user.lastname }}
                    </div> -->
              <div >
                <MenuButton
                  class="flex rounded-full bg-neutral-silver text-base focus:outline-none"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-12 w-12 rounded-full"
                    src="https://tse4.mm.bing.net/th?id=OIP.XzbnPcReFWub6Dn5ASpGdwHaHa&pid=Api&P=0&h=180"
                    alt=""
                  />
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
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem v-slot="{ active }">
                    <h
                      @click="logout"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                      ]"
                      >Sign out</h
                    >
                    
                    
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            as="h"
            :to="item.to"
            :class="[
              item.current
                ? 'bg-mediumvioletred-100 text-white'
                : 'text-black hover:bg-gray-200',
              'block rounded-md px-3 py-2 text-base font-medium cursor-pointer',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</router-link
          >
        </div>
      </DisclosurePanel>
    </Disclosure>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Home", to: { name: "Home" } },
  { name: "Activity", to: { name: "Activity" } },
];
const mobileMenuOpen = ref(false);

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    function logout() {
      store.dispatch("logout").then(() => {
        router.push({
          name: "Login",
        });
      });
    }

    return {
      user: computed(() => store.state.user.data),
      navigation,
      mobileMenuOpen,
      logout,
    };
  },
};
</script>
