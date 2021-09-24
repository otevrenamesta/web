
export default {
  data: function () {
    return {
      items: null,
      loading: true
    }
  },
  created: async function () {
    try {
      const dataReq = await axios.get('/api/uni/posts/', { params: {
        sort: 'published:desc',
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
  props: ['data'],
  template: `
  <div>

  <pageHeader />

  <div class="container">

    <i v-if="loading" class="fas fa-spinner fa-spin"></i>
    <section v-else class="section">

      <paginator />
      
      <div class="columns is-flex-wrap-wrap">
        <div v-for="(i, idx) in items" :key="idx" class="column is-4">

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="$store.getters.mediaUrl(i.obrazek, 'w=640')" :alt="i.title">
              </figure>
            </div>
            <div class="card-content">

              <h3 class="title">{{ i.title }}</h3>        
              <h4 class="subtitle">{{ i.perex }}</h4>
      
              <router-link :to="'/clanky/' + i.id">
                <button class="button is-primary">
                  číst více
                </button>
              </router-link>

            </div>
          </div>

        </div>
      </div>

      <paginator />

    </section>
  </div>

  <pageFooter />

</div>
  `
}
