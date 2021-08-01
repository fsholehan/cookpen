import axios from "axios";
import {
  CATEGORY_BY_LIST_FAIL,
  CATEGORY_BY_LIST_REQUEST,
  CATEGORY_BY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../constants/categoryConstants";

export const listCategory = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });

    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://masak-apa-tomorisakura.vercel.app/api/categorys/recipes"
    );
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listByCategory = (key) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_BY_LIST_REQUEST });

    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://masak-apa-tomorisakura.vercel.app/api/categorys/recipes/${key}`
    );
    dispatch({ type: CATEGORY_BY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_BY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
