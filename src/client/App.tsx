import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* IMPORT COMPONENTS */
import Footer from './components/Footer';
import PreFooter from './components/PreFooter';

/* FONTAWESOME IMPORTS */
import { library } from '@fortawesome/fontawesome-svg-core'; // import fa library
import { fab } from '@fortawesome/free-brands-svg-icons'; // import fa brand icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // import fa solid icons

/* PAGE IMPORTS */
import Home from './pages/Home';
import Trials from './pages/Trials';
import Results from './pages/Results';
import FullStudy from './pages/FullStudy';


library.add(fab, fas); // call fa library function and include svg packages.

/* HOOK REACT EXAMPLE */
const App = (props:  AppProps) =>
{

	return (
		<>
			<Router>				
				<Switch>
					<Route exact path="/" component={Trials} />
					<Route exact path="/trials" component={Trials} />
					<Route exact path="/trials/results/:text" component={Results} />
					<Route exact path="/trials/results/:text/:id" component={FullStudy} />
				</Switch>
				<Footer />
			</Router>

		</>
	);
};

interface AppProps { }

export default App;
