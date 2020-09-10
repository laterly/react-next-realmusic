const initUserState={
    userName:'jack',
    age:0
}

function userReducer(state=initUserState,action){
    switch (action.type){
        case 'update_name':
            return {
                ...state,
                userName:action.value.userName,
                age:action.value.age
            }
        case 'del_name':
            return {
                ...state,
                userName:'',
                age:0
            }
        default:
           return state
    }
}

export default userReducer;