import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const createstore =()=> new Vuex.Store(
    {
        state:{
            title:'test-title',
            counter:0
        },
        getters:{
            
        },
        mutations:{
            uptitle(state,code){
                state.title='test-title-upted'+code
            }
        },
        actions:{

        }

    }
) 
export default createstore