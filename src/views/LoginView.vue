<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-screen w-screen overflow-hidden bg-black-brown-300 justify-center items-center">
    <div class="flex flex-col w-2/3 min-h-2/5 sm:w-1/6 bg-beige-300 rounded-3xl p-4 shadow-2xl shadow-black">
      <div class="flex w-full h-fit text-4xl text-black-brown-300 font-semibold justify-center">Login</div>
      <input type="text" class="flex mt-14 rounded-xl p-2 border-none bg-black-brown-100 placeholder:text-tan-300 text-tan-100 text-xl" placeholder="Email">
      <input type="password" class="flex mt-4 rounded-xl p-2 border-none bg-black-brown-100 placeholder:text-tan-300 text-tan-100 text-xl" placeholder="Password">
      <div class="flex flex-row justify-end w-full h-fit mt-4">
        <div class="flex p-2 bg-emerald-400 rounded-lg text-lg font-semibold cursor-pointer hover:scale-95 transition-all duration-100">Bejelentkezés</div>
      </div>
    </div>
  </div>
</template>
