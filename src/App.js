import React, { useState } from 'react';
import './App.css';
import ExampleOne from './useState/ExampleOne';
import ExampleTwo from './useState/ExampleTwo';
import ExampleThree from './useEfect/ExampleThree';
import ExampleFour from './useRef/ExampleFour';
import ExampleFive from './useRef/ExampleFive';
import ExampleSix from './useMemo/ExampleSix';
import ExampleSeven from './useCallback/ExampleSeven';
import Main from './Main';
import Alert from './Alert';

export const AlertContext = React.createContext();


function App() {
	const [alert, setAlert] = useState(false);


	const alertToggle = () => setAlert(prev => !prev);

	return <>
		{/* useState */}
		< ExampleOne />
		<ExampleTwo />
		{/* <ExampleThree /> */}
		{/* <ExampleFour /> */}
		<ExampleFive />
		<ExampleSix />
		<ExampleSeven />

		<AlertContext.Provider value={alert}>
			<div className='container pt-3'>
				<Alert />

				<Main toggle={alertToggle} />
			</div>
		</AlertContext.Provider>



	</>
}

export default App;
