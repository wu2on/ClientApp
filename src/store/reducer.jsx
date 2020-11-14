import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import notesReducer from "./notes/reducer";
import generalReducer from "./general/reducer";

const rootReducer = combineReducers({
  general: generalReducer,
  notes: notesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
