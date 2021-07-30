import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

//Component imports
import Waitlist from "./components/pages/Waitlist";
import Shop from "./components/pages/Shop";

const App = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<div className="font-red-hat">
				<Router>
					<Switch>
						<Route exact path="/" component={Waitlist} />
						<Route exact path={["/shop/:id", "/shop"]} component={Shop} />
					</Switch>
				</Router>
			</div>
		</QueryClientProvider>
	);
};

export default App;
