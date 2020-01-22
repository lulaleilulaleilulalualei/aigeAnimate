import *as types from '../types';

 const state = {
	mineIndex: "", //默认显示首页
	
 }

 const getters = {
	mineIndex: state => state.mineIndex
 }

 const mutations  = {
 	[types.INDEX_SHOW](state, str) {
 		state.mineIndex = str
 	}
 }

 const actions = {
 	toChangeIndex({commit}, str) {
 		commit(types.INDEX_SHOW, str)
 	}
 }

 export default {
	state,
    actions,
    getters,
    mutations
}