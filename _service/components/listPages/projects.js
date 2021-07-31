
export default {
  data: function () {
    return {
      items: null,
      loading: true
    }
  },
  created: async function () {
    try {
      const dataReq = await axios.get('/uniapi/projects/', { params: {
        sort: 'title:asc',
        currentPage: 1,
        perPage: 3
      }})
      this.$data.items = dataReq.data.data
    } catch (_) {
      this.$data.posts = [{ title: 'post list: asi spatne url v datech' }]
    } finally {
      this.$data.loading = false
    }
  },
  metaInfo: {
    title: 'seznam projektů',
    meta: [
      // { vmid: 'description', name: 'description', content: '' },
      // { vmid: 'keywords', name: 'keywords', content: this.$data.item.keywords }
    ]
  },
  props: ['data'],
  template: `
  <div>

  <pageHeader />

  <div class="container">

    <i v-if="loading" class="fas fa-spinner fa-spin"></i>
    <section v-else class="section">

      
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

    </section>
  </div>

  <pageFooter />

</div>
  `
}
