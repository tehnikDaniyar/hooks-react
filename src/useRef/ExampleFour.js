import { useState, useEffect, useRef } from "react";

// let countRender = 1;

const ExampleFour = function () {
	// const [countRender, setCountRender] = useState(1);

	const countRender = useRef(1);
	const [value, setValue] = useState("initial");
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	});

	function mouseMoveHandler(e) {
		setPosition({
			x: e.clientX,
			y: e.clientY
		});

	};

	useEffect(() => {
		window.addEventListener('mousemove', (e) => mouseMoveHandler(e));
	})

	useEffect(() => {
		countRender.current++;
	})
	return <>
		<h1>count of renders: {countRender.current}</h1>
		<input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
		<button onClick={() => countRender.current++}>+</button>

		<h2>mouse position {JSON.stringify(position, null, 2)}</h2>

	</>
}
export default ExampleFour