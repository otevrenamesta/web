export default {
  data: function () {
    return {
      item: null,
      loading: true
    }
  },
  props: ['config'],
  created: async function () {
    try {
      const id = this.$router.currentRoute.params.id
      const url = `/api/uni/posts/?filter={"id":${id}}`
      const dataReq = await axios.get(url)
      this.$data.item = dataReq.data[0]
    } catch (_) {
      this.$data.item = { title: 'detailPage.post.js: asi spatne url v datech' }
    } finally {
      this.$data.loading = false
    }
  },
  computed: { 
    config: function () {
      return this.$props.config || []
    }
  },
  metaInfo () {
    return this.$data.item ? {
      htmlAttrs: {
        lang: this.$data.item.lang || 'cs'
      },
      title: this.$data.item.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.$data.item.perex },
        // { vmid: 'keywords', name: 'keywords', content: this.$data.item.keywords }
      ],
      noscript: [
        { innerHTML: 'Tento web potřebuje zapnutý JavaScript.' }
      ]
    } : {}
  },
  template: `
<div>
  <pageHeader />

  <div class="container">

    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link to="/">
          <span class="icon is-small">
            <i class="fas fa-home" aria-hidden="true"></i>
          </span>
          <span>Domů</span>
        </router-link></li>
        <li><router-link to="/projekty">Projekty</router-link></li>
      </ul>
    </nav>

    <i v-if="loading" class="fas fa-spinner fa-spin"></i>
    <section v-else class="projektdetail">

      <img v-if="item.obrazek" :src="item.obrazek" />
      
      <div class="notification is-success is-light">{{item.state}}</div>

      <h1 class="title is-1">{{item.title}}</h1>

      <h4 class="subtitle is-3">{{item.subtitle }}</h4>

      <b>{{item.perex}}</b>

      <div class="content">
        <h2 class="title is-3">O projektu</h2>
        <markdown :text="item.content" />
      </div>

    </section>

    <section v-for="(i, idx) in config.children" :key="idx" class="section">

      <component :is="i.component" :data="i" />

    </section>

  </div>

  <pageFooter />
</div>
  `
}