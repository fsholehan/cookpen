import axios from "axios";
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

export const listRecipes = () => async (dispatch) => {
  try {
    dispatch({ type: RECIPE_LIST_REQUEST });

    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://masak-apa-tomorisakura.vercel.app/api/recipes"
    );
    dispatch({ type: RECIPE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RECIPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listRecipeDetails = (key) => async (dispatch) => {
  try {
    dispatch({ type: RECIPE_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://masak-apa-tomorisakura.vercel.app/api/recipe/${key}`
    );
    dispatch({ type: RECIPE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RECIPE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listRecipeByKeyword = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: RECIPE_LIST_BY_REQUEST });

    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://masak-apa-tomorisakura.vercel.app/api/search/?q=${keyword}`
    );
    dispatch({ type: RECIPE_LIST_BY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RECIPE_LIST_BY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
