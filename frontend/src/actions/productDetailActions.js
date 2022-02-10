import axios from "axios";
import {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from "../constants/productDetailConstants";

export const fetchProductDetails = (id) => async (dispatch) => {
  try {
    console.log("fetching started...");
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}`
    );
    console.log("fetchied successfully...");

    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    console.log("onn snap...");

    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
