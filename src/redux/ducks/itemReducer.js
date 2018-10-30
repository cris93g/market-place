import axios from "axios";

const GET_USER = "GET_USER";
const ADD_USER_INFO = "ADD_USER_INFO";
const LOG_OUT = "LOG_OUT";
const GET_LEATHER = "GET_LEATHER";

export function getLeather() {
  return {
    type: GET_LEATHER,
    payload: axios.get("/api/leather")
  };
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/me")
  };
}
export function logout() {
  return {
    type: LOG_OUT,
    payload: axios.get("/logout")
  };
}

const initialState = {
  user: {},
  isAuthed: false,
  userInfo: {},
  leather: []
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_LEATHER_PENDING":
      return { ...state, isLoading: true };
    case "GET_LEATHER_FULFILLED":
      return { ...state, isLoading: false, items: action.payload.data };

    case "GET_LEATHER_REJECTED":
      return { ...state, isLoading: true, error: action.payload };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data,
        isAuthed: true
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        isAuthed: false
      };
    case `${LOG_OUT}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data,
        isAuthed: true
      };
    default:
      return state;
  }
}
export function addUserInfo(info) {
  console.log(info);
  return {
    type: ADD_USER_INFO,
    payload: axios.post("/api/user/info", info)
  };
}

// Get user by id
//for the chat page
export function getUserById(_id) {
  console.log(_id);
  return {
    type: GET_USER,
    payload: axios.get(`/api/user/info/${_id}`)
  };
}
