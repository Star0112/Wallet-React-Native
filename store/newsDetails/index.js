const NewsModalInitialState = false ; 


export const NewsModal = (state=NewsModalInitialState,action)=>{


    switch(action.type)
    {
        case 'SHOW_NEWS_MODAL' : 
        return action.data
        case 'HIDE_NEWS_MODAL' : 
        return action.data
        default:
            return state
    }
}