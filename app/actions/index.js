//Action Creator
export const selectUser = (user) => {
	console.log("User selection clicked."+ user.first);
	return {
		type: "USER_SELECTED",
		payload: user
	}
};