import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  recipeListReducer,
  recipeDetailsReducer,
  recipeListByKeywordReducer,
} from "./reducers/recipeReducers";
import {
  categoryListReducer,
  categoryListByReducer,
} from "./reducers/categoyReducers";

const reducer = combineReducers({
  recipeList: recipeListReducer,
  recipeDetails: recipeDetailsReducer,
  recipeListByKeyword: recipeListByKeywordReducer,
  categoryList: categoryListReducer,
  categoryListBy: categoryListByReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
