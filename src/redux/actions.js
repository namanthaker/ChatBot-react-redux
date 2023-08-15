// src/redux/actions.js

// Action types
export const UPDATE_USER_INFORMATION = 'UPDATE_USER_INFORMATION';

// Action creators
export const updateUserInformation = (userInfo) => {
  return {
    type: UPDATE_USER_INFORMATION,
    payload: userInfo,
  };
};
