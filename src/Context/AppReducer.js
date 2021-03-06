// eslint-disable-next-line import/no-anonymous-default-export
export default  (state, action) =>{
    switch(action.type){
        case 'REMOVE_USER':
            return {
                ...state,
                users:state.users.filter(user => {
                    return user.id !== action.payload })
            }
        case 'ADD_USER':
            return{
                ...state,
                users:[action.payload, ...state.users]
            }
        case 'EDIT_USER':
        const updateUserid = action.payload;
        const updateUsers =state.users.map((user) =>{
            if(user.id === updateUserid.id){
                return updateUserid
            }
            return user;
        })

        return{
            ...state,
            users:updateUsers
        }
        default:
           return state
    }
}

