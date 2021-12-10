export default{
    actions: {
       async fetchPostService(ctx){
            const res = await fetch('http://localhost:3000/serviceCard')
            const serviceCard = await res.json()

            ctx.commit('updatePost', serviceCard)
        }
    },
  
    mutations: {
        updatePost(state, serviceCard){
            state.serviceCard = serviceCard;
        }
    },
    state: {
        serviceCard: []
    },
    getters:{
        allPostsService(state){
            return state.serviceCard;
        },
    },
};