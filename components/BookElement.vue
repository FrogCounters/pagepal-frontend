<template>
  <div class="w-full m-6 shadow-lg bg-white">
    <NuxtLink :to="'/book/'+title">
      <div class="w-full h-32 flex flex-row flex-wrap">
        <div class="w-32">
          <img class="h-32 mr-4" src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="">
        </div>
        <div class="flex flex-col">
          <h3 class="my-4 text-3xl">{{ title }}</h3>
          <p class="text-xl">{{ author }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'EmoText',
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "Unknown",
    }
  },
}
</script>