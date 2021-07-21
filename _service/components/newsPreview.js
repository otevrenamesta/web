export default {
  data: function () {
    return {
      items: null,
      loaded: false
    }
  },
  created: async function () {
    this.load()
  },
  methods: {
    load: async function (opt) {
      try {
        const filter = (!opt || !opt.value) ? null : {
          tags: { like: "%" + opt.value + "%" }
        }
        const dataReq = await axios.get(this.$props.data.url, { params: {
          sort: 'published:asc',
          currentPage:1,
          perPage: this.$props.data.pocet,
          filter: JSON.stringify(filter)
        }})
        this.$data.items = dataReq.data.data
      } catch (_) {
        this.$data.items = [{ title: 'newsPreview: asi spatne url v datech' }]
      } finally {
        this.$data.loaded = true
      }
    }
  },
  props: ['data'],
  template: `
<div :class="data.class">

  <router-link :to="data.detail_link" class="is-pulled-right">
    {{ data.detail_title || 'detaily' }} >
  </router-link>
  
  <h1 class="title is-1">{{ data.title }}</h1>

  <div v-if="loaded" class="columns is-multiline">

    <div v-for="i,idx in items" :key="idx" class="column">

      <h2 class="subtitle is-7">
        <time datetime="2016-1-1">{{ i.published | longDate }}</time>
      </h2>
      <h1 class="title is-4">{{ i.title }}</h1>
      <div class="content"><markdown :text="i.perex" /></div>

      <router-link :to="data.detail_link + '/' + i.id">
        <button class="button">číst více</button>
      </router-link>
      
  </div>

</div>
  `
}
