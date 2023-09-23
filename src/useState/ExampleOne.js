import { useState } from "react";
const ExampleOne = function () {
	const [counter, setCounter] = useState(0);

	function increment() {
		setCounter(counter + 1)
	};

	function dicrement() {
		setCounter(counter - 1)
	};

	return <>
		<h1>Counter: {counter}</h1>
		<button className="btn btn-success" onClick={increment}>add</button>
		<button className="btn btn-danger" onClick={dicrement}>remove</button>

	</>

}
export default ExampleOne