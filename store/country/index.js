export const state = ()=>({
    lisCountry:[]
})
export const getters = {
    getListCountry(state){
        return state.lisCountry
    }
}
export const mutations = {
    setListCountry(state,item){
        state.lisCountry = item ;
    },
    filterListCountry(state,value){
        state.lisCountry = state.lisCountry.filter(data=>{
            return data.name.indexOf(value) > -1 ;
        })
        console.log(state.lisCountry);
    }
}
