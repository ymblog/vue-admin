/**
 * vuex同步操作
 * @author lk 2018-11-08
 */
const mutations = {
	SET_NAME:(state,name)=>{
		state.name = name;
	},
	SET_TOKEN:(state,token)=>{
		state.token = token;
	},
	SET_NAVLIST:(state,navlist)=>{
		state.navList = navlist;
	}
}
export default mutations;
