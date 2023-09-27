import React, { useContext } from "react"
import { AlertContext } from "./App"


const Alert = function () {

	const alert = useContext(AlertContext);

	console.log('useContext value', alert);

	if (!alert) return null

	return <div className={'alert alert-danger'}>
		danger its ALERT!!!!!
	</div>
}
export default Alert