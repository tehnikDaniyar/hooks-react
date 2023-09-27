import React, { useContext } from "react"
import { AlertContext } from "./App"


const Main = function ({ toggle }) {


	return (
		<>
			<h1>Hello</h1>
			<button onClick={toggle} className={'btn btn-success'}>show alert</button>
		</>
	)
}
export default Main