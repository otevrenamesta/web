export default {
  props: ['data'],
  template: `
<div class="myhero">

  <img class="logo" src="http://data.vxk.cz/webom/logo-om.svg" />
  
  <div class="myhero-bluebox">
    <div class="myhero-content">
      <h1>{{ data.title }}</h1>
      <markdown :text="data.content" />
    </div>
  </div>

  <div class="socials">
    <i class="fab fa-github"></i>
    <i class="fab fa-facebook"></i>
    <i class="fab fa-gitlab"></i>
  </div>

</div>
  `
}