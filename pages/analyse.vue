<template>
  <div class="mx-3">
    <div v-if="loading">
      <Spinner></Spinner>
    </div>

    <div v-else>
      <input v-model="title" placeholder="Title [Optional]" class="p-2.5 w-full rounded-lg border mt-3"/>
      <textarea v-model="text" rows="10" class="p-2.5 w-full rounded-lg border mt-3"
        placeholder="Insert your story here..."></textarea>
      <button class="text-white font-bold py-2 px-4 border rounded" @click="analyse_text">Analyse</button>
      <button class="text-white font-bold py-2 px-4 border rounded" @click="save_text" v-if="show_generate_btn">Generate URL</button>
      <button class="text-white font-bold py-2 px-4 border rounded" @click="showModal = true" v-if="show_url_btn">Show URL</button>      
      <p style="white-space: pre-line;">
        <h2 class="text-5xl font-semibold">
          {{ title }}
        </h2>
        {{ text }}
      </p>
      {{ emotions }}
    </div>
    <SavedModal v-show="showModal" @close-modal="showModal = false" :custom_url="custom_url" />
  </div>

</template>

<script>
import SavedModal from '~/components/Modal.vue'

export default {
  name: "AnalysisPage",
  components: { SavedModal },
  data() {
    return {
      title: '',
      text: '',
      custom_url: '',
      emotions: [],
      loading: false,
      show_generate_btn: false,
      show_url_btn: false,
      showModal: false,
    }
  },
  methods: {
    analyse_text() {
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
          .catch(err => console.log(err))
          .finally(() => {
            this.loading = false
            this.show_generate_btn = true
          })
    },
    save_text() {
      fetch("http://127.0.0.1:8000/user_book/",
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ title: this.title, text: String(this.text).split("."), emotions: this.emotions, hate_speech: [] })
          })
          .then(res => res.json())
          .then(res => {
            this.custom_url = res["url"]
            this.showModal = true
            this.show_generate_btn = false
            this.show_url_btn = true
          })
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
button {
  background: #2FB195;
}
</style>