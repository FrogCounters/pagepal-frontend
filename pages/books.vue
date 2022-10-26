<template>
  <div class="w-full flex flex-col items-center">
    <div class="w-full max-w-4xl flex flex-col mt-16 mb-8">
      <h2 class="text-5xl font-semibold">Our Catalogue</h2>
    </div>
    <div class="w-full max-w-4xl mx-auto flex flex-col items-center p-4">
      <BookElement v-for="title in books" :key="title" :title="title" />
    </div>
  </div>
</template>


<script>
export default {
  name: 'BooksPage',
  data() {
    return {
      books: []
    }
  },
  methods: {
    getBooks() {
      fetch('http://127.0.0.1:8000/books/')
        .then(response => response.json())
        .then(data => this.books = data["books"])
    }
  },
  mounted() {
    this.getBooks()
  }
}
</script>