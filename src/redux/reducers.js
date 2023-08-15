// src/redux/reducers.js

import { UPDATE_USER_INFORMATION } from './actions';

const initialState = {
  name: '',
  age: '',
  enrollmentCompleted: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFORMATION:
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age,
        enrollmentCompleted: true,
      };
    default:
      return state;
  }
};

export default userReducer;
