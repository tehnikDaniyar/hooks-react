import { useEffect, useState } from "react";


const ItemsList = function ({ getItems }) {

	const [items, setItems] = useState([]);

	useEffect(() => {
		console.log('render');
		const newItems = getItems(69);
		setItems(newItems);

	}, [getItems]);


	return (


		<ul>
			{items.map((item, index) => <li key={index}>{item}</li>)}
		</ul >
	)
}
export default ItemsList