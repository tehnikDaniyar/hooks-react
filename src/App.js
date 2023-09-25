import './App.css';
import ExampleOne from './useState/ExampleOne';
import ExampleTwo from './useState/ExampleTwo';
import ExampleThree from './useEfect/ExampleThree';
import ExampleFour from './useRef/ExampleFour';
import ExampleFive from './useRef/ExampleFive';
import ExampleSix from './useMemo/ExampleSix';

function App() {
	return <>
		{/* useState */}
		<ExampleOne />
		<ExampleTwo />
		{/* <ExampleThree /> */}
		{/* <ExampleFour /> */}
		<ExampleFive />
		<ExampleSix />
	</>
}

export default App;
