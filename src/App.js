import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

const App = () => {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	}, []);

	return (
		<div className="App">
			<SearchBar />
			<div className="container">
				<Logs />
			</div>
		</div>
	);
};

export default App;
