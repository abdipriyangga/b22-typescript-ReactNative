const initialState = {
  token: null,
  notifToken: null,
};

const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
