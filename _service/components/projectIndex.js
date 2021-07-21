
export default {
  data: function () {
    return {
      items: null
    }
  },
  created: async function () {
    try {
      const dataReq = await axios.get(this.$props.data.url)
      this.$data.items = dataReq.data
    } catch (_) {
      this.$data.posts = [{ title: 'newsPreview: asi spatne url v datech' }]
    }
  },
  props: ['data'],
  template: `
    <div class="columns is-flex-wrap-wrap">
      <div v-for="(i, idx) in items" :key="idx" class="column is-4">
        <figure class="image is-4by3">
          <img :src="$store.getters.mediaUrl(i.obrazek, 'w=640')" :alt="i.title">
        </figure>

        <h3 class="title red">{{ i.title }}</h3>        
        <h4 class="subtitle brown">{{ i.subtitle }}</h4>

        <router-link :to="'/projekty/' + i.id">
          <button class="button is-primary">
            Zjistit více
          </button>
        </router-link>

      </div>
    </div>
  `
}
