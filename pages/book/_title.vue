import { useRoute } from 'vue-router';

<template>
  <div>
    <div class="text-center">
      <h2 class="text-5xl font-semibold">
        {{book.title}}
      </h2>
      <p>{{book.author}}</p>
    </div>

    <!-- <img :src="https://upload.wikimedia.org/wikipedia/en/f/fe/CharlotteWeb.png" alt={{book.title}} /> -->

    <div class="mx-3 mt-3">
      <span v-for="(p, index) in book.text">
        <span v-if="Number(book.emotions[String(index)]) < 0"
          class="leading-10 bg-red-200">{{String(p).replaceAll("\\n", "")}}</span>
        <span v-else-if="Number(book.emotions[String(index)]) > 0"
          class="leading-10 bg-green-200">{{String(p).replaceAll("\\n", "")}}</span>
        <span v-else class="leading-10">{{String(p).replaceAll("\\n", "")}}</span>

        <span v-if="String(p).includes('\\n')">
          <br /><br />
        </span>
      </span>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: { text: "", main_img: "", emotions: [] }
    }
  },
  async asyncData({ params }) {
    const title = params.title
    return { title }
  },
  methods: {
    getBooks() {
      fetch(`http://127.0.0.1:8000/book/${this.$route.params.title}`)
        .then(response => response.json())
        .then(data => data[this.$route.params.title])
        .then(data => this.book = data)
        .then(data => console.log(data))
    }
  },
  mounted() {
    this.getBooks()
  }
}
</script>