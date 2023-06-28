import { statesStore, statesActions } from "./statesStore.js"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			...statesStore,
		},
		
		actions: {
			...statesActions(getStore, getActions, setStore),

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			useFetch: async (endpoint, body = "", method = "GET") => {
				let url = "https://3001-metantonio-reactfinal-yzmo7of8we2.ws-us98.gitpod.io/api" + endpoint;
				let response = await fetch(url, {
					method: method,
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + localStorage.getItem("token"),
					},
					body: body ? JSON.stringify(body) : null,
				});

				let respuestaJson = await response.json();

				return { respuestaJson, response };
			},
		}
	};
};

export default getState;
