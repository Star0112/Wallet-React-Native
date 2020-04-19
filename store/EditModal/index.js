const EditModalInitialState = false ; 


export const EditModal = (state=EditModalInitialState,action)=>{


    switch(action.type)
    {
        case 'SHOW_EDIT_MODAL' : 
        return action.data
        case 'HIDE_EDIT_MODAL' : 
        return action.data
        default:
            return state
    }
}