export const FETCH_USERS = "FETCH_USERS";
export const DELETE_USER = "DELETE_USER";
export const LIKE_USER = "LIKE_USER";
export const EDIT_USER = "EDIT_USER";

//////functionality actions

export const fetchUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users,
  };
};

export const DeleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const LikedUser = (id) => {
  return {
    type: LIKE_USER,
    payload: id,
  };
};
