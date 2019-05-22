import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		datas: {
			children: [{
				type: 'select',
				display: false,
				dataList:[
					12,
					3,
					4
				]
			}],
		}
	},
	mutations: {

	}
})
