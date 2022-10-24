<template>
  <div class="mx-3">
    <div v-if="loading">
      <Spinner></Spinner>
    </div>

    <div v-else>
      <form @submit.prevent="submit">
        <textarea v-model="text" rows="10" class="p-2.5 w-full rounded-lg border"
          placeholder="Insert your story here..."></textarea>
        <button class="text-white font-bold py-2 px-4 border rounded" style="background: #2FB195">Analyse</button>
      </form>
      <p style="white-space: pre-line;">
        {{ text }}
      </p>
      {{ emotions }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AnalysisPage",
  data() {
    return {
      text: '',
      emotions: [],
      loading: false,
    }
  },
  methods: {
    submit() {
      this.loading = true,
        fetch("http://127.0.0.1:8000/analyse/",
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ text: this.text })
          })
          .then(res => res.json())
          .then(res => this.emotions = res["emotions"])
          .then(res => console.log(res))
          .catch(err => console.log(err))
          .finally(() => this.loading = false)
    }
  }
}
</script>