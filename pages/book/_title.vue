import { useRoute } from 'vue-router';

<template>
  <div class="flex flex-col items-center p-4 pb-12">
    <div class="text-center">
      <h2 class="text-5xl font-semibold">
        {{ book.title }}
      </h2>
      <p>{{ book.author }}</p>
    </div>

    <!-- <img :src="https://upload.wikimedia.org/wikipedia/en/f/fe/CharlotteWeb.png" alt={{book.title}} /> -->
    <div class="max-w-5xl mt-8">
      <EmoText
        v-for="(text, index) in book.text"
        :key="index"
        :text="text"
        :emotions="
          book.emotions[index]
            .split(',')
            .slice(0, -1)
            .map((x) => x.toLowerCase())
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: { text: '', main_img: '', emotions: [] },
    }
  },
  async asyncData({ params }) {
    const title = params.title
    return { title }
  },
  methods: {
    getBooks() {
      fetch(`http://127.0.0.1:8000/book/${this.$route.params.title}`)
        .then((response) => response.json())
        .then((data) => data[this.$route.params.title])
        .then((data) => (this.book = data))
        .then((data) => console.log(data))
    },
  },
  mounted() {
    this.getBooks()
  },
}
</script>
