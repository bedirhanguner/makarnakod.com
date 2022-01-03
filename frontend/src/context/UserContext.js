import React, { useEffect, useState } from "react"
import getBackendURL from '../helpers/getURL'


const UserContext = React.createContext([{}, () => { }])

let initialState = {
	loggedIn: false,
	email: '',
}


const UserProvider = props => {
	const [state, setState] = useState(initialState)

	function getCurrentUser() {
		return fetch(getBackendURL() + "/users/current", {
			method: "GET",
			credentials: "include",
			headers: { "Content-Type": "application/json" },
		})
			.then(response => response.json())
			.then(data => {
				if (data.email) {
					setState({ loggedIn: true, email: data.email })
				}
			})
	}

	//run once when component mounts
	useEffect(() => {
		getCurrentUser()
	}, [])

	return (
		<UserContext.Provider value={[state, setState]}>
			{props.children}
		</UserContext.Provider>
	)
}

export { UserContext, UserProvider }