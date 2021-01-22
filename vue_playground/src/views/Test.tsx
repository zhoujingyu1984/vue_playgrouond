import {defineComponent} from "vue"
import Test from "@/components/test"
export  default defineComponent({
  name:"Test",
  components:{
    Test
  },
  setup(){
    return ()=>(
      <div>
        <div class="about">
          <Test/>
        </div>
      </div>
    )
  }
})