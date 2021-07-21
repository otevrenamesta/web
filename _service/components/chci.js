const DetailLink = {
  props: ['data'],
  template: `
  <router-link :to="data.link" class="block">
    <button class="button is-large is-success">Zjistit více</button>
  </router-link>
  `
}

export default {
  props: ['data'],
  components: { DetailLink },
  template: `
<div class="columns mydarkblue mycontact">
  <div class="column p-6">
    <h2 class="title is-4">Chci řešení na míru</h2>
    <div class="content">
      Potřebuji poradit, chci objednat jen jednu z aplikací nebo služeb. 
      Neváhejte se na nás obrátit s Vaším dotazem.
    </div>
    <DetailLink :data="data" />
  </div>

  <div class="column p-6">
    <h2 class="title is-4">Chci se stát členem</h2>
    <div class="content">
      Neváhejte se zeptat, jak se stát členem naší organizace 
      a napomoci tak digitalizace Vaší obce.
    </div>
    <DetailLink :data="data" />
  </div>
</div>
  `
}