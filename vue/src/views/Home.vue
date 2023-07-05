<template>
    <div>
      <img
        class="absolute top-[160px] left-[287px] w-[437px] h-[530px]"
        alt=""
        src="public/images/bckgrnd-home1.svg"
      />
      <div class="absolute top-[227px] left-[320px] w-[418px] h-[225px]">
        <img
          class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="public/images/saly25@2x.png"
        />
      </div>

      <div
        class="absolute top-[562px] left-[425px] rounded-11xl bg-mediumvioletred-100 shadow-[0px_4px_10px_rgba(255,_255,_255,_0.25)] w-[200px] h-[50px] flex flex-col items-center justify-center cursor-pointer"
        @click="onFrameContainer4Click"
      >
        <div class="relative leading-[20px] font-medium">Create</div>
      </div>
      <div class="absolute top-[512px] left-[373px] leading-[20px] font-medium">
        Buat survey lebih mudah dan cepat
      </div>

      <img
        class="absolute top-[160px] left-[772px] w-[437px] h-[530px]"
        alt=""
        src="public/images/bckgrnd-home2.svg"
      />
      <div class="absolute top-[140px] left-[914px] w-[220px] h-[279px]">
        <img
          class="absolute h-full w-full top-[2.17%] right-[6.9%] bottom-[-2.17%] left-[-6.9%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="public/images/saly26@2x.png"
        />
      </div>

      <div
        class="absolute top-[562px] left-[914px] rounded-11xl bg-mediumslateblue-100 shadow-[0px_4px_10px_rgba(255,_255,_255,_0.25)] w-[200px] h-[50px] flex flex-col items-center justify-center cursor-pointer"
        @click="onFrameContainer5Click"
      >
        <div class="relative leading-[20px] font-medium">Gabung</div>
      </div>
      <div class="absolute top-[442px] left-[888px]">
        <input
          type="text"
          name="kode"
          id="kode"
          autocomplete="given-name"
          class="block w-[225px] h-[40px] rounded-[40px] border-0 py-1.5 text-gray-900 shadow-[0px_6px_10px_rgba(255,_255,_255,_0.25)] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-mediumslateblue-100 sm:text-xl sm:leading-4"
        />
      </div>
      <div class="absolute top-[512px] left-[915px] leading-[20px] font-medium">
        Masukkan kode survey
      </div>
    </div>
</template>

<script setup>

</script>
