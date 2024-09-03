const ADD_USER = 'AddUser';
const DELETE_USER = 'DeleteUser';
const EDIT_USER = 'EditUser';

const usersReducer = (users, action) => {
    switch (action.type) {
        case ADD_USER:
            let user = {
                name: action.name,
            }
        
            users.push(user);
            return users;
        case DELETE_USER:
            let userIndex = users.indexOf(action.user);
            if (userIndex > -1) {
                users.splice(userIndex, 1);
            }
            return users;
        case EDIT_USER:
            console.log('gotta edit user');
            return users;
        default:
            return users;
    }
    
}

export const addUserActionCreator = (name) => ({
    type: ADD_USER,
    name: name
})

export const deleteUserActionCreator = (user) => ({
    type: DELETE_USER,
    user: user
})

export const editUserActionCreator = (user) => ({
    type: EDIT_USER,
    user: user
})

export default usersReducer;