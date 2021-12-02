export default{
    actions: {
       async fetchPost(ctx){
            const res = await fetch('http://localhost:3000/work')
            const cards = await res.json()

            ctx.commit('updatePost', cards)
        }
    },
  
    mutations: {
        updatePost(state, cards){
            state.cards = cards;
        }
    },
    state: {
        cards: []
    },
    getters:{
        allPosts(state){
            return state.cards;
        },
       
    },
  
};