import { createStore } from "redux";
import countReducer from "./Components/Services/Reducer";

const store = createStore(countReducer);
export default store;
