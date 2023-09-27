import { useState, useMemo, useCallback } from "react";
import ItemsList from "./ItemsList";



const ExampleSeven = function () {
	const [count, setCount] = useState(1);
	const [colored, setColored] = useState(false);

	const style = useMemo(() => {
		return {
			color: colored ? 'red' : 'black'
		}
	});


	const generateItemsFromAPI = useCallback((indexNumber) => {
		return new Array(count).fill('').map((_, i) => `Element ${i + indexNumber}`);
	}, [count])


	return <>
		<h1 style={style}>count of item: {count}</h1>
		<button onClick={() => setCount(prev => prev + 1)}>+</button>
		<button onClick={() => setColored(prev => !prev)}>change</button>
		<ItemsList getItems={generateItemsFromAPI} />
	</>
}
export default ExampleSeven