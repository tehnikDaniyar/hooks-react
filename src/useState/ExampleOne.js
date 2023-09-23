import { useState } from "react";
const ExampleOne = function () {

	const [counter, setCounter] = useState(() => getRandomNum());


	function increment() {
		setCounter((prev) => prev + 1);
		setCounter((prev) => prev + 1);
	};

	function dicrement() {
		setCounter((prev) => {
			console.log(prev);
			return prev - 100;
		});
	};

	function getRandomNum() {
		console.log('some calculations');
		return Math.trunc(Math.random() * 20);
	};

	return <>
		<h1>Counter: {counter}</h1>
		<button className="btn btn-success" onClick={increment}>add</button>
		<button className="btn btn-danger" onClick={dicrement}>remove</button>

	</>

}
export default ExampleOne