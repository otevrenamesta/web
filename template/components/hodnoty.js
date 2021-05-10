export default {
  props: ['data', 'path'],
  template: `
    <div class="row">
      <div v-for="i, idx in data.list" class="columns">
        <img class="column is-one-quarter" :src="i.icon" />
        <div class="column">
          <h2><span class="idx">{{ idx }}</span> {{ i.title }}</h2>
          <p>{{ i.desc }}</p>
        </div>
      </div>
    </div>
  `
}
