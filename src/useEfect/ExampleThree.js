import { useState, useEffect, useRef } from "react";
const ExampleThree = function () {
	const [type, setType] = useState('');
	const [data, setData] = useState([]);
	const [find, setFind] = useState("");
	const [page, setPage] = useState(1);
	const [category, setCategory] = useState('');
	const memory = useRef("")


	useEffect(() => {
		fetch(`https://www.eporner.com/api/v2/video/search/?query=${type}&per_page=30&page=${page}&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json`)
			.then(response => response.json())
			.then(json => setData(json))
		console.log('useEfect');
	}, [find, page, category]);

	function getLinks(data) {
		let res;
		if (data.videos) {
			res = data.videos.map(film => {
				return <a href={`${film.embed}`} target="_blank">
					<h2>{film.title}</h2>
					<img src={film.default_thumb.src} alt="" width={100} height={50} />
				</a>
			})
		}
		return <>
			{data.total_pages}
			{res}
		</>
	};

	const links = getLinks(data);


	return <div className="Component">
		<h1>{type}</h1>
		<input type="text" value={type} onChange={(e) => setType(e.target.value)} />
		<button onClick={() => { setFind(type) }}>find</button>

		<button onClick={() => setType('users')}>user</button>
		<button onClick={() => setType('todos')}>todos</button>
		<button onClick={() => setType('posts')}>posts</button>

		<h2>{page}</h2>
		<button onClick={() => setPage(prev => prev + 1)}>next</button>
		<button onClick={() => setPage(prev => prev - 1)}>prev</button>

		{links}

		<div>
			<h2>Categories</h2>
			<button onClick={() => { setCategory('teen'); setType('teen') }}>teen</button>
		</div>

	</div >
}
export default ExampleThree