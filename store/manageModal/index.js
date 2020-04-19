
const ManageModalInitialState = false ; 


export const ManaginModal = (state=ManageModalInitialState,action)=>{


    switch(action.type)
    {
        case 'SHOW_MANAGE_MODAL' : 
        return action.data
        case 'HIDE_MANAGE_MODAL' : 
        return action.data
        default:
            return state
    }
}