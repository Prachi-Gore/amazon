

export const initialState={
    basket:[],
    user:null,
    
}
    
const reducer=(state,action)=>{
    //console.log("action=>",action)
    
    switch(action.type){
        case 'ADD_TO_BASKET':
            //{basket:[...(state.basket),action.item]}
            return( {
                ...state,
                basket:[...state.basket,action.item]
            }
            
            )
                
        default:
                return state;
    }
     

}

export default reducer;




