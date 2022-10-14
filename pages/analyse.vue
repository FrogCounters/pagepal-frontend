<template>
  <div class="mx-3">
    <form @submit.prevent="submit">
      <textarea v-model="message" rows="10" class="p-2.5 w-full rounded-lg border"
        placeholder="Insert your story here..."></textarea>

      <p>Preview:</p>
      <p style="white-space: pre-line;">
        {{message}}
      </p>

      <button class="rounded-full" style="background: #2FB195">Analyse</button>
    </form>
  </div>
</template>



<script>
export default {
  name: "AnalysisPage",
  data() {
    return {
      message: '',
    }
  },
  methods: {
    submit() {
      fetch("http://127.0.0.1:8000/book/",
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({ title: "insert title", author: "mr tan", emotions: [1,-12,3], text: ["sentence1", "sentence2", "sentence3"], url: "https://testing.com", main_img: "img_link"})
        })
        .then(res => console.log(this.message))
        .catch(err => console.log(err))
    }
  }
}
</script>