<template>
    <div
        class="relative bg-default-white w-full h-[3310px] overflow-hidden text-center text-base text-default-white font-inter"
    >
        <header>
            <nav
                class="mx-auto flex w-auto h-[80px] items-center justify-between px-10 lg:px-8 mt-2 ml-[90px]"
            >
                <div>
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img
                            class="h-7 w-auto"
                            src="https://i.postimg.cc/Kctp3wp4/logo2-11-2x.png"
                            alt=""
                        />
                    </a>
                </div>
                <div class="grid grid-cols-2">
                    <div
                        class="flex flex-col items-center justify-center cursor-pointer"
                    >
                        <Button
                            @click="GoLogin"
                            class="rounded-lg relative tracking-[0.5px] bg-white w-[110px] h-[45px] leading-[20px] text-sm text-center font-semibold text-mediumvioletred-100 cursor-pointer"

                            >Log in</Button
                        >
                    </div>
                    <div
                        class=" "
                    >
                        <router-link
                            :to="{ name: 'Register' }"
                            class="relative rounded-lg bg-mediumvioletred-100 w-[110px] h-[45px]  tracking-[0.5px] leading-[20px] text-sm text-center font-semibold text-white no-underline flex flex-col items-center justify-center cursor-pointer"
                            >Sign up</router-link
                        >
                    </div>
                </div>
            </nav>
        </header>
        <div class="flex">
            <div>
                <h1
                    class="absolute top-[180px] left-[120px] text-6xl flex text-darkorchid text-left items-center"
                >
                    Solusi Terbaik untuk<br />
                    Survei Online yang<br />
                    Efisien!
                </h1>
                <p
                    class="absolute top-[480px] left-[120px] text-lg tracking-[0.5px] leading-[20px] text-black text-left"
                >
                    Buat survei anda dalam beberapa menit dengan lebih mudah.
                </p>
                <div
                >
                    <button
                        @click="GoLogin"
                        class="absolute top-[540px] left-[120px]  shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[186px] h-[55px] flex flex-row pt-0 px-5 pb-[18px] box-border items-end justify-center gap-[10px] cursor-pointer text-left text-lg rounded-lg bg-mediumvioletred-100 tracking-[0.5px] leading-[20px] font-semibold text-white"
                    >
                        Get Started
                    </button>
                    <ArrowRightIcon
                        class="relative w-[25px] h-[15.63px] text-white font-bold"
                    ></ArrowRightIcon>
                </div>
            </div>
            <lottie-player
                class="absolute top-[100px] right-[100px]"
                src="https://assets4.lottiefiles.com/private_files/lf30_zqp6f9bt.json"
                background="transparent"
                speed="1"
                style="width: 600px; height: 600px"
                loop
                autoplay
            ></lottie-player>
        </div>

        <div>
            <img
                class="absolute top-[729px] right-[-100px] w-[2275px] h-[790px] opacity-[0.8]"
                alt=""
                src="../../public/images/background.svg"
            />
            <div
                class="absolute top-[934px] left-[192px] w-[1139px] h-[374px] text-sm text-darkslateblue-100 font-poppins"
            >
                <img
                    class="absolute top-[0px] left-[0px] w-[381px] h-[372px]"
                    alt=""
                    src="../../public/images/skilss.png"
                />
                <div
                    class="absolute top-[82px] left-[503px] w-[636px] h-[210px] flex flex-col items-start justify-start gap-[40px] text-justify text-lg text-default-white font-inter"
                >
                    <img
                        class="relative w-[300px] h-[60px] object-cover"
                        alt=""
                        src="../../public/images/logo2-1@2x.png"
                    />
                    <div
                        class="relative tracking-[0.5px] leading-[22px] flex items-center w-[636px]"
                    >
                        Get Survey adalah sebuah perusahaan yang bergerak di
                        bidang penelitian dan survei. Perusahaan ini menyediakan
                        layanan untuk mengumpulkan data dan informasi dari
                        responden dengan tujuan untuk mendapatkan wawasan dan
                        pemahaman yang lebih baik tentang berbagai topik dan
                        masalah yang relevan.
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h1
                class="absolute top-[1545px] left-[660px] text-21xl tracking-[0.5px] leading-[22px] text-mediumslateblue-100 text-justify"
            >
                VISI & MISI
            </h1>
            <div
                class="absolute top-[1581px] left-[104px] w-[1316px] h-[531px] text-justify text-xl text-mediumblue"
            >
                <div
                    class="absolute top-[51px] left-[0px] w-[780px] h-[480px] flex flex-col items-center justify-end"
                >
                    <div
                        class="w-[45px] h-[210px] overflow-hidden shrink-0 flex flex-col items-start justify-end gap-[166px]"
                    >
                        <b class="relative tracking-[0.5px] leading-[22px]"
                            >VISI</b
                        >
                        <b class="relative tracking-[0.5px] leading-[22px]"
                            >MISI</b
                        >
                    </div>
                    <div
                        class="relative w-[780px] h-[440px] overflow-hidden shrink-0 mt-[-170px] text-lg text-black"
                    >
                        <div
                            class="absolute top-[0px] left-[0px] rounded-3xs box-border w-[780px] h-[93px] border-[1px] border-solid border-mediumslateblue-100"
                        />
                        <div
                            class="absolute top-[184px] left-[0px] rounded-3xs box-border w-[780px] h-64 border-[1px] border-solid border-mediumslateblue-100"
                        />
                        <div
                            class="absolute top-[12px] left-[16px] w-[746px] h-[408px] overflow-hidden flex flex-col items-center justify-start gap-[122px]"
                        >
                            <div
                                class="relative tracking-[0.5px] leading-[22px] flex items-center w-[746px]"
                            >
                                Menjadi pemimpin global dalam menyediakan solusi
                                survei yang inovatif dan memberdayakan
                                organisasi serta individu untuk mengumpulkan dan
                                menganalisis data dengan cepat, akurat, dan
                                efektif.
                            </div>
                            <div
                                class="relative text-[inherit] tracking-[0.5px] leading-[22px] font-inherit flex items-center w-[746px]"
                            >
                                <ul class="m-0 pl-6">
                                    <li class="mb-0">
                                        Memberikan platform survei yang mudah
                                        digunakan dan intuitif, memungkinkan
                                        pengguna untuk membuat, mengirim, dan
                                        menganalisis survei dengan mudah.
                                    </li>
                                    <li class="mb-0">
                                        Menyediakan berbagai fitur dan alat
                                        analisis yang canggih untuk membantu
                                        pengguna mendapatkan wawasan yang
                                        berharga dari data survei mereka.
                                    </li>
                                    <li class="mb-0">
                                        Menjaga kehandalan dan keamanan data
                                        dengan mengimplementasikan
                                        langkah-langkah keamanan yang ketat dan
                                        menjaga privasi pengguna.
                                    </li>
                                    <li class="mb-0">
                                        Menghadirkan pengalaman pelanggan yang
                                        luar biasa dengan memberikan dukungan
                                        pelanggan yang responsif dan solusi
                                        masalah yang cepat.
                                    </li>
                                    <li>
                                        Terus berinovasi dan mengembangkan fitur
                                        baru untuk memenuhi kebutuhan survei
                                        yang berkembang dengan teknologi terbaru
                                        dan tren industri.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    class="absolute h-[87.01%] w-[31.91%] top-[0%] right-[0%] bottom-[12.99%] left-[68.09%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="../../public/images/saly10@2x.png"
                />
            </div>
        </div>

        <div class="absolute top-[2300px] left-[0px] bg-white w-[1280px] mx-32">
            <div>
                <div class="justify-center">
                    <h2
                        class="text-21xl font-bold tracking-tight text-mediumslateblue-100"
                    >
                        Anggota
                    </h2>
                    <p class="mt-10 text-lg leading-[20px] text-black">
                        Kelompok ini dibentuk untuk menyelesaikan tugas Final
                        Project mata kuliah Pemrograman Web
                    </p>
                </div>
            </div>
            <div
                class="mx-auto mt-12 grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
            >
                <ul
                    role="list"
                    class="grid gap-x-8 gap-y-12 xl:grid-cols-3 xl:gap-y-16 xl:col-span-3"
                >
                    <li v-for="person in people" :key="person.name">
                        <div class="flex items-center gap-x-6">
                            <img
                                class="h-20 w-20 rounded-full"
                                :src="person.imageUrl"
                                alt=""
                            />
                            <div>
                                <h3
                                    class="text-base font-semibold leading-[15px] tracking-normal text-black"
                                >
                                    {{ person.name }}
                                </h3>
                                <p
                                    class="text-mini font-semibold text-left leading-[15px] text-mediumblue"
                                >
                                    {{ person.role }}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div>
            <img
                class="absolute h-[9.95%] w-[20.1%] top-[62.67%] right-[83.66%] bottom-[27.37%] left-[-4%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="../../public/images/daun-kiri.svg"
            />
            <img
                class="absolute h-[9.95%] w-[20.1%] top-[62.67%] right-[-5%] bottom-[27.37%] left-[83.66%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="../../public/images/daun-kanan.svg"
            />
            <img
                class="absolute top-[2970px] left-[1258px] w-[316px] h-[272px] object-cover"
                alt=""
                src="../../public/images/dayflow-tree@2x.png"
            />
            <img
                class="absolute top-[2800px] left-[-200px] w-[1219.02px] h-[714px]"
                alt=""
                src="../../public/images/bckgrnd-bwh.svg"
            />
        </div>

        <div>
            <div
                class="absolute top-[3250px] left-[0px] bg-darkslategray-100 w-full h-[60px] overflow-hidden flex flex-col py-0 box-border items-center justify-center gap-[4px]"
            >
                <img
                    class="relative w-auto h-6 object-cover"
                    alt=""
                    src="../../public/images/logo3-1@2x.png"
                />
                <div class="relative text-xs">Copyright © 2023</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ArrowRightIcon, ArrowLongRightIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";

const router = useRouter();

function GoLogin() {
    router.push({
        name: "Login",
    });
}

const people = [
{
        name: "Faiq Hidayat Dzakwan_4274",
        role: "Fullstack",
        imageUrl: "../../public/founder/DSC01073.JPG",
    },
    {
        name: "Ardiyan Rizki Nugraha_4275",
        role: "UI Design/ Front-end",
        imageUrl: "../../public/founder/ardiyan.jpg",
    },
    {
        name: "Ilham Ibnu Pranata_4289",
        role: "Tester",
        imageUrl: "../../public/founder/Ilham_Ibnu.jpg",
    },
    {
        name: "Dika isnaida_4292",
        role: "Tester",
        imageUrl: "../../public/founder/dika.jpg",
    },
    {
        name: "Hardy Wisnu Ramanto_4300",
        role: "Backend",
        imageUrl: "../../public/founder/hardy.svg",
    },
    {
        name: "Lucky Hanindriyo_4313",
        role: "Tester",
        imageUrl: "../../public/founder/Lucky.jpg",
    },
    {
        name: "Muhammad Taqiyuddin_4328",
        role: "Front-end",
        imageUrl: "../../public/founder/taqi.jpg",
    },
];
const mobileMenuOpen = ref(false);
</script>