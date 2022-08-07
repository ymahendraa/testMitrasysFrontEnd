// ** Initial State
const initialState = {
  userToken: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(action.data)
      return {
        ...state,
        userToken: action.data,
      };
    case 'LOGOUT':
      const obj = {...action};
      delete obj.type;
      return {...state, userToken: {}, ...obj};
    default:
      return state;
  }
};

export default authReducer;
