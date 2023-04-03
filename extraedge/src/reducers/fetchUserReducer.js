import { DELETE_USER, FETCH_USERS, LIKE_USER } from "../actions/userActions";

const initialState = {
  users: [],
};

const fetchUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      const filtered = action.payload.filter((user) => {
        return !state.users.find((existingUser) => existingUser.id === user.id);
      });

      return { ...state, users: [...state.users, ...filtered] };
    //   return { ...state, users: [...state.users, ...action.payload] };

    //// delete
    case DELETE_USER:
      const New = state.users.filter((user) => user.id !== action.payload);
      return {
        ...state,
        users: New,
      };

    ///like

    case LIKE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload ? { ...user, liked: !user.liked } : user
        ),
      };

    default:
      return state;
  }
};

export { fetchUsersReducer };
