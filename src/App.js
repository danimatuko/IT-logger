import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddButton from "./components/layout/AddButton";
import AddLogModal from "./components/layout/AddLogModal";
import EditLogModal from "./components/layout/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

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
				<AddButton />
				<AddLogModal />
				<EditLogModal />
				<AddTechModal />
				<TechListModal />
			</div>
		</div>
	);
};

export default App;
