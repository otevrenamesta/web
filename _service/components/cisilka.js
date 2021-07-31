export default {
  props: ['data'],
  template: `
  <div class="columns is-8">
    <div v-for="i,idx in data.items" :key="idx" class="column">

      <h1 class="title is-1">{{ i.num }}</h1>
      <h3 class="subtitle is-7">{{ i.subtitle }}</h3>
      <p>{{ i.content }}</p>
      
    </div>
  </div>
`}