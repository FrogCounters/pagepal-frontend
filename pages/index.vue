<template>
  <div>
    <div class="w-full flex flex-col items-center shadow-inner top p-20">
      <div
        class="max-w-4xl w-full flex flex-row flex-wrap justify-center items-center mx-auto"
      >
        <img
          class="w-80"
          src="~/assets/img/GreenReadBook.png"
          alt="Green creature reading book"
        />
        <div class="w-96 -ml-12">
          <h2 class="text-5xl font-semibold text-center">
            Teach <span class="underline accent-underline">emotional intelligence</span> through books!
          </h2>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col items-center p-20">
      <div class="max-w-6xl w-full flex flex-col">
        <h2 class="text-5xl font-semibold">Dive right in</h2>
        <div class="w-full h-20 mt-5 flex flex-row flex-wrap">
          <div class="w-56 h-56 m-5 bg-red-500 rounded-xl" v-for="item in Array(8)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.top {
  background-color: #fdf7e7;
}

.accent-underline {
  text-decoration-color: #2FB195;
}
</style>
