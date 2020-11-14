import { SET_MODAL_STATE } from "./actionTypes";
import { CHANGE_NOTE } from "./actionTypes";

export const initialState = {
  language: "eng",
  IsVisibleModel: false,
  noteEditId: 0,
};

function setModalState(state, action) {
  const { bool } = action;
  let flag = bool ? false : true;
  return {
    ...state,
    IsVisibleModel: flag,
  };
}

function editNote(state, action) {
  const { id } = action;
  return {
    ...state,
    noteEditId: id,
  };
}

export default function generalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL_STATE:
      return setModalState(state, action);
    case CHANGE_NOTE:
      return editNote(state, action);
    default:
      return state;
  }
}
