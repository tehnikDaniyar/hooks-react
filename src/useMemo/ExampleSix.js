import { useState, useMemo } from "react";

function complexCompute(num) {
	let i = 1;

	while (i < 100000000) i++;

	return num * 2;
};

const ExampleSix = function () {

	const [number, setNumber] = useState(42);


	const compute = complexCompute(number)

	return <>
		<h1>compute number: {compute}</h1>
		<button onClick={() => setNumber(prev => prev + 1)}>+</button>
		<button onClick={() => setNumber(prev => prev - 1)}>-</button>

	</>
}
export default ExampleSix