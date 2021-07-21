export default {
  props: ['data'],
  template: `
  <div class="peopleList">
    <h2 class="title is-3">{{ data.name }}<h2>
    <div class="columns">
      <div v-for="i, idx in data.list" class="column">
        <img :src="i.image" />
        <h3 class="title is-6">{{ i.name }}</h3>
        <h4 class="subtitle is-6">{{ i.position }}</h4>
        <div class="content is-small">
          {{ i.email }}<br/>
          {{ i.tel }}
        </div>
      </div>
    </div>
  </div>
  `
}
