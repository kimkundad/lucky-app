import axios from 'axios'
import router from '../router'

export default {
    namespaced: true,
    state:{
        authenticated:false,
        user:{}
    },
    getters:{
        authenticated(state){
            return state.authenticated
        },
        user(state){
            return state.user
        }
    },
    mutations:{
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },
        SET_USER (state, value) {
            state.user = value
        }
    },
    actions:{
        login({commit}){
            const config = {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            };
            return axios.get('/user', config).then(({data})=>{
                console.log('-->data -->',data);
                commit('SET_USER',data)
                commit('SET_AUTHENTICATED',true)
                router.push({name:'dashboard'})
            }).catch(({response:{data}})=>{
                commit('SET_USER',{})
                commit('SET_AUTHENTICATED',false)
            })
        },
        logout({commit}){
            commit('SET_USER',{})
            commit('SET_AUTHENTICATED',false)
            localStorage.removeItem('token');
        },
        updateprofile({commit}){
            return axios.get('/user').then(({data})=>{
                commit('SET_USER',data)
            }).catch(({response:{data}})=>{
                commit('SET_USER',{})
            })
        }
    }
}