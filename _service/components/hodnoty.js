export default {
  props: ['data', 'path'],
  template: `
    <div :class="data.class">
      <div id="title" class="is-flex is-justify-content-space-between">
        <h2>{{ data.title }}</h2>
        <markdown :text="data.more" />
      </div>
      
      <div v-for="i, idx in data.list" class="columns">
        <img class="column is-one-quarter" :src="i.icon" />
        <div class="column">
          <h2><span class="idx">0{{ idx }}</span> {{ i.title }}</h2>
          <p>{{ i.desc }}</p>
        </div>
      </div>
    </div>
  `
}
