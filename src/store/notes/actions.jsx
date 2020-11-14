import { SET_NOTES } from "./actionTypes";

import { DELETE_NOTE } from "./actionTypes";

export const setNote = (data) => {
  return {
    type: SET_NOTES,
    data,
  };
};

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    id,
  };
};
