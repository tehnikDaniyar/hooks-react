import { useState, useEffect, useRef } from "react";
const ExampleFive = function () {
	const [value, setValue] = useState("");
	const inputRef = useRef(null);
	const prevValue = useRef('');

	useEffect(() => {
		console.log(inputRef.current.value);
	});

	useEffect(() => {
		prevValue.current = value;
	}, [value]);

	const focus = () => inputRef.current.focus();



	return <div className="Component">
		<h1>prev value: {prevValue.current}</h1>
		<input ref={inputRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
		<button className="btn btn-success" onClick={focus}>focus</button>
	</div>
}
export default ExampleFive