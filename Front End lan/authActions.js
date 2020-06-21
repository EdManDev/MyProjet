import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// // // alert
// // import { setAlert } from "./alert";

// // Register User
// export const registerUser = (userData, history) => (dispatch) => {
// 	axios
// 		.post("/api/auth/register", userData)
// 		.then((res) => history.push("/login"))
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: err.response.data,
// 			})
// 		);
// };


// // Login User
// export const loginUser = (userData) => (dispatch) => {
// 	axios
// 		.post("/api/auth/login", userData)
// 		.then((res) => {
// 			// Save to localStorage
// 			const { token } = res.data;
// 			// Set Token to is
// 			localStorage.setItem("jwtToken", token);
// 			// Set Token Auth header
// 			setAuthToken(token);
// 			// Decode to get user data
// 			const decoded = jwt_decode(token);
// 			//Set Current User
// 			dispatch(setCurrentUser(decoded));
// 		})
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: err.response.data,
// 			})
// 		);
// };

// // Set logged inUser
// export const setCurrentUser = (decoded) => {
// 	return {
// 		type: SET_CURRENT_USER,
// 		payload: decoded,
// 	};
// };

// // Log user Out
// export const logoutUser = () => (dispatch) => {
// 	// Remove token from localstorage
// 	localStorage.removeItem("jwtToken");
// 	// remove the auth header for future requests
// 	setAuthToken(false);
// 	// Set Current user to {} with will set isAuthenticated to false
// 	dispatch(setCurrentUser({}));
// };

// // Fogget Password
// export const forgetUser = (userData, history) => (dispatch) => {
// 	axios
// 		.post("/api/auth/forgotPassword", userData)
// 		.then((res) => history.push("/check-email"))
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: err.response.data,
// 			})
// 		);
// };

// // Reset Password
// export const resetUser = (userData) => (dispatch) => {
// 	axios
// 		.put("/api/auth/reset-password", userData)
// 		.then((res) => {
// 			// Save to localStorage
// 			const { token } = res.data;
// 			// Set Token to is
// 			localStorage.setItem("jwtToken", token);
// 			// Set Token Auth header
// 			setAuthToken(token);
// 			// Decode to get user data
// 			const decoded = jwt_decode(token);
// 			//Set Current User
// 			dispatch(setCurrentUser(decoded));
// 		})
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: err.response.data,
// 			})
// 		);
// };


// RESET PASSWORD //
export const resetUser = (userData) => (dispatch) => {
	// GET TOKEN FROM URL
	const token = window.location.pathname;

	axios
		// .put(`/api/auth/reset-password/${token}`, userData)
		.put(`http://localhost:5002/api/auth/reset-password/${token}`, userData)
		.then((res) => {
			userData = {
				headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer' + token }
			}
			this.userData = res.data;
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};


// // Fogget Password
// export const resetUser = (userData, history) => (dispatch) => {
// 	// GET TOKEN FROM URL
// 	const token = window.location.pathname;
// 	axios
// 		.put(`http://localhost:5002/api/auth/reset-password${token}`, userData)
// 		.then((res) => history.push("/check-email"))
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: err.response.data,
// 			})
// 		);
// };