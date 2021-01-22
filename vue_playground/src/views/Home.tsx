import {defineComponent} from "vue";
import HelloWorld from '@/components/HelloWorld';
import Test from '@/components/test';
import logo from "@/assets/logo.png";


export  default defineComponent({
  name:"Home",
  components:{
    HelloWorld,
    logo,
  },
  setup(){
    return ()=>(
      <div>
        <div class="home">
          <img alt="Vue logo" src={logo} />
          <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        </div>
      </div>
    )
  },
})