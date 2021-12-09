export default{
    actions: {
       async fetchPost(ctx){
            const res = await fetch('http://localhost:3000/work')
            const work = await res.json()

            ctx.commit('updatePost', work)
        }
    },
  
    mutations: {
        updatePost(state, work){
            state.work = work;
        }
    },
    state: {
        work: []
    },
    getters:{
        allPosts(state){
            return state.work;
        },
       
    },
  
};