<template>
  <BookText :book="book"></BookText>
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
