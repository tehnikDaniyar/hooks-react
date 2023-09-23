import { useState } from "react";
const ExampleTwo = function () {
	const [state, setState] = useState(
		{
			title: "title",
			data: 12345
		}
	);

	function changeTitle() {
		setState((prev) => {
			return {
				...prev,
				title: 'new title'
			};
		});
	};




	return <>
		<button className="btn btn-default" onClick={changeTitle}>change title</button>
		<div>
			{JSON.stringify(state, null, 2)}

		</div>
	</>
}
export default ExampleTwo