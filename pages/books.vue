<template>
  <div>
    <div v-for="title in books">
      <NuxtLink :to="'/book/' + title">
        Click me: {{title}}
      </NuxtLink>
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
        .then(data => console.log(data))
    }
  },
  mounted() {
    this.getBooks()
  }
}
</script>