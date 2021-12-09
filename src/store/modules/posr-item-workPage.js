export default{
    actions: {
       async fetchPosts(ctx){
            const res = await fetch('http://localhost:3000/workPage')
            const workPage = await res.json()

            ctx.commit('updatePost', workPage)
        }
    },
  
    mutations: {
        updatePost(state, workPage){
            state.workPage = workPage;
        }
    },
    state: {
        workPage: []
    },
    getters:{
        allPostsWorks(state){
            return state.workPage;
        },
    },
};