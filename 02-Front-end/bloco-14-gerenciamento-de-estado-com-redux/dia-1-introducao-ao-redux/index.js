import { legacy_createStore as createStore } from "redux";

const INITIAL_STATE =  { count: 0}
const reducer = (state = INITIAL_STATE, action) => {
  return state;
}
const store = createStore(reducer)

const incrementButton = document.querySelector("button")
incrementButton.addEventListener("click", () => {
  console.log('click');
})