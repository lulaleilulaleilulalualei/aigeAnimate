import *as types from '../types';

 const state = {
	loadImgs: null, //loading加载
	
 }

 const getters = {
	loadImgs: state => state.loadImgs
 }

 const mutations  = {
 	[types.LOADING_COUNT](state, obj) {
 		state.loadImgs = obj
 	}
 }

 const actions = {
 	toShowImgs({commit}, obj) {
 		commit(types.LOADING_COUNT, obj)
 	}
 }

 export default {
	state,
    actions,
    getters,
    mutations
}