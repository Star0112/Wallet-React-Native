
const ModalInitialState = false ; 


export const Modal = (state=ModalInitialState,action)=>{


    switch(action.type)
    {
        case 'SHOW_MODAL' : 
        return action.data
        case 'HIDE_MODAL' : 
        return action.data
        default:
            return state
    }
}