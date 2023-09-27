import { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
	console.log('complexCompute');
	let i = 1;

	while (i < 100000000) i++;

	return num * 2;
};

const ExampleSix = function () {

	const [number, setNumber] = useState(42);
	const [colored, setColored] = useState(false);
	const style = useMemo(() => {
		return {
			color: colored ? "red" : "black"
		}
	}, [colored]);




	const compute = useMemo(() => {
		return complexCompute(number)
	}, [number]);

	useEffect(() => {
		console.log("styles changed");
	}, [style])

	return <>
		<h1 style={style}>compute number: {compute}</h1>
		<button className="btn btn-warning" onClick={() => setNumber(prev => prev + 1)}>+</button>
		<button onClick={() => setNumber(prev => prev - 1)}>-</button>
		<button onClick={() => setColored(prev => !prev)}>change</button>
	</>
}
export default ExampleSix