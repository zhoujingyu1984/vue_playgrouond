import { defineComponent, reactive, ref } from "vue";

export  default defineComponent({
    name: "Test",
  props: {
    msg:{
        type:Number,
        default:1,
    }
  },
    setup(props){
        const aa = reactive({qwe:0})
        const msg = ref(props.msg)
        const advance = ref(props.msg)

        function add(){
            msg.value = Number( msg.value ) +  Number(advance.value)
        }
        function decrease(){
            msg.value = Number( msg.value ) - Number( advance.value )
        }
        function reset(){
            msg.value = 0
        }
        return () =>(
            <div>
                <input  value={ advance.value }   v-model={ advance.value } ></input>
                <p>{ msg.value }</p>
                <p>
                    <button onClick={ add } value='+'>+</button>
                    <button onClick={ decrease } value='-'>-</button>
                </p>
                <p>
                    <button onClick={ reset } value='reset'>reset</button>
                </p>
            </div>
        );
    },

   
})
