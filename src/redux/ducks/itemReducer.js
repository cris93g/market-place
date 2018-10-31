import axios from "axios";

const GET_USER = "GET_USER";
const ADD_USER_INFO = "ADD_USER_INFO";
const LOG_OUT = "LOG_OUT";
const GET_LEATHER = "GET_LEATHER";
const GET_ACCESORY = "GET_ACCESORY";
const GET_APPAREL = "GET_APPAREL";
const GET_TOTES = "GET_TOTES";
const GET_MESSENGER = "GET_MESSENGER";
const GET_DUFFLE = "GET_DUFFLE";
const GET_BACKPACK = "GET_BACKPACK";
const GET_WALLET = "GET_WALLET";
const GET_BELT = "GET_BELT";
const GET_SHIRT = "GET_SHIRT";
const GET_JACKET = "GET_JACKET";
const GET_CERT = "GET_CERT";

export function getLeather() {
	return {
		type: GET_LEATHER,
		payload: axios.get("/api/leather")
	};
}
export function getApparel() {
	return {
		type: GET_APPAREL,
		payload: axios.get("/api/apparel")
	};
}
export function getAccerory() {
	return {
		type: GET_ACCESORY,
		payload: axios.get("/api/accesory")
	};
}
export function getTotes() {
	return {
		type: GET_TOTES,
		payload: axios.get("/api/totes")
	};
}
export function getMessenger() {
	return {
		type: GET_MESSENGER,
		payload: axios.get("/api/messenger")
	};
}
export function getDuffle() {
	return {
		type: GET_DUFFLE,
		payload: axios.get("/api/duffle")
	};
}
export function getBackpack() {
	return {
		type: GET_BACKPACK,
		payload: axios.get("/api/backpack")
	};
}
export function getWallet() {
	return {
		type: GET_WALLET,
		payload: axios.get("/api/wallet")
	};
}
export function getBelt() {
	return {
		type: GET_BELT,
		payload: axios.get("/api/belt")
	};
}
export function getShirt() {
	return {
		type: GET_SHIRT,
		payload: axios.get("/api/shirt")
	};
}
export function getJacket() {
	return {
		type: GET_JACKET,
		payload: axios.get("/api/jacket")
	};
}
export function getCert() {
	return {
		type: GET_CERT,
		payload: axios.get("/api/cert")
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
	items: []
};

export default function itemsReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_LEATHER_PENDING":
			return { ...state, isLoading: true };
		case "GET_LEATHER_FULFILLED":
			return { ...state, isLoading: false, items: action.payload.data };

		case "GET_LEATHER_REJECTED":
			return { ...state, isLoading: true, error: action.payload };
		case "GET_APPAREL_PENDING":
			return { ...state, isLoading: true };
		case "GET_APPAREL_FULFILLED":
			return { ...state, isLoading: false, items: action.payload.data };

		case "GET_APPAREL_REJECTED":
			return { ...state, isLoading: true, error: action.payload };
		case "GET_ACCESORY_PENDING":
			return { ...state, isLoading: true };
		case "GET_ACCESORY_FULFILLED":
			return { ...state, isLoading: false, items: action.payload.data };

		case "GET_ACCESORY_REJECTED":
			return { ...state, isLoading: true, error: action.payload };
		case "GET_TOTES_PENDING":
			return { ...state, isLoading: true };
		case "GET_TOTES_FULFILLED":
			return { ...state, isLoading: false, items: action.payload.data };

		case "GET_TOTES_REJECTED":
			return { ...state, isLoading: true, error: action.payload };
		case "GET_MESSENGER_PENDING":
			return { ...state, isLoading: true };
		case "GET_MESSENGER_FULFILLED":
			return { ...state, isLoading: false, items: action.payload.data };

		case "GET_MESSENGER_REJECTED":
			return { ...state, isLoading: true, error: action.payload };
		case "GET_DUFFLE_PENDING":
			return { ...state, isLoading: true };
		case "GET_DUFFLE_FULFILLED":
			return { ...state, isLoading: false, items: action.payload.data };

		case "GET_DUFFLE_REJECTED":
			return { ...state, isLoading: true, error: action.payload };
		case "GET_BACKPACK_PENDING":
			return { ...state, isLoading: true };
		case "GET_BACKPACK_FULFILLED":
			return { ...state, isLoading: false, items: action.payload.data };

		case "GET_BACKPACK_REJECTED":
			return { ...state, isLoading: true, error: action.payload };
		case "GET_WALLET_PENDING":
			return { ...state, isLoading: true };
		case "GET_WALLET_FULFILLED":
			return { ...state, isLoading: false, items: action.payload.data };

		case "GET_WALLET_REJECTED":
			return { ...state, isLoading: true, error: action.payload };
		case "GET_BELT_PENDING":
			return { ...state, isLoading: true };
		case "GET_BELT_FULFILLED":
			return { ...state, isLoading: false, items: action.payload.data };

		case "GET_BELT_REJECTED":
			return { ...state, isLoading: true, error: action.payload };
		case "GET_SHIRT_PENDING":
			return { ...state, isLoading: true };
		case "GET_SHIRT_FULFILLED":
			return { ...state, isLoading: false, items: action.payload.data };

		case "GET_SHIRT_REJECTED":
			return { ...state, isLoading: true, error: action.payload };
		case "GET_JACKET_PENDING":
			return { ...state, isLoading: true };
		case "GET_JACKET_FULFILLED":
			return { ...state, isLoading: false, items: action.payload.data };

		case "GET_JACKET_REJECTED":
			return { ...state, isLoading: true, error: action.payload };
		case "GET_CERT_PENDING":
			return { ...state, isLoading: true };
		case "GET_CERT_FULFILLED":
			return { ...state, isLoading: false, items: action.payload.data };

		case "GET_CERT_REJECTED":
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
