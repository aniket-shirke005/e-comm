import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { productListReducer } from "./reducers/productReducers";
import { productDetailReducer } from "./reducers/productDetailReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
});

const initialState = {};
const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
