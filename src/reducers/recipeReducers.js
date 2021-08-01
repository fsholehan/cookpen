import {
  RECIPE_DETAILS_FAIL,
  RECIPE_DETAILS_REQUEST,
  RECIPE_DETAILS_SUCCESS,
  RECIPE_LIST_BY_FAIL,
  RECIPE_LIST_BY_REQUEST,
  RECIPE_LIST_BY_SUCCESS,
  RECIPE_LIST_FAIL,
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
} from "../constants/recipeConstants";

export const recipeListReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case RECIPE_LIST_REQUEST:
      return { loading: true, recipes: [] };
    case RECIPE_LIST_SUCCESS:
      return { loading: false, recipes: action.payload };
    case RECIPE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const recipeDetailsReducer = (state = { recipe: {} }, action) => {
  switch (action.type) {
    case RECIPE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case RECIPE_DETAILS_SUCCESS:
      return { loading: false, recipe: action.payload };
    case RECIPE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const recipeListByKeywordReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case RECIPE_LIST_BY_REQUEST:
      return { loading: true, recipes: [] };
    case RECIPE_LIST_BY_SUCCESS:
      return { loading: false, recipes: action.payload };
    case RECIPE_LIST_BY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
