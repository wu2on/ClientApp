import { SET_MODAL_STATE } from "./actionTypes";
import { CHANGE_NOTE } from "./actionTypes";

export const setModalState = (bool) => {
  return {
    type: SET_MODAL_STATE,
    bool,
  };
};

export const editNote = (id) => {
  return {
    type: CHANGE_NOTE,
    id,
  };
};
