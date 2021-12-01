export const state = ()=>({
    darkMode : false,
})
export const getters = {
    getDarkMode(state){
        return state.darkMode
    }
}
export const mutations = {
    setDarkMode(state,item){
        state.darkMode = item;
    }
}