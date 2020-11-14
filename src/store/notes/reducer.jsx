import { SET_NOTES } from "./actionTypes";
import { DELETE_NOTE } from "./actionTypes";

export const initialState = {
  allNotes: [],
};

function setNotes(state, action) {
  const { data } = action;
  return {
    ...state,
    allNotes: data,
  };
}

function deleteNote(state, action) {
  const { id } = action;
  const updateNotes = state.allNotes.filter((note) =>
    note.id !== id ? note : null
  );
  return {
    ...state,
    allNotes: updateNotes,
  };
}

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTES:
      return setNotes(state, action);

    case DELETE_NOTE:
      return deleteNote(state, action);
    default:
      return state;
  }
}
