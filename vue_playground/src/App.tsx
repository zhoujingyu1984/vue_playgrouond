import { defineComponent  } from "vue";
import { RouterLink, RouterView } from "vue-router"
import "@/scss/main.scss"

export  default defineComponent({
  components:{
    RouterLink,
    RouterView,
  },
  setup(){
    return ()=>(
      <div>
  <div id="nav">
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/test">Test</RouterLink>
  </div>
  <RouterView />
</div>
    );
  }

})