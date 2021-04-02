import React, { useState, useEffect, Fragment } from "react";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";

const Logs = () => {
	const [logs, setLogs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getLogs();
	}, []);

	const getLogs = async () => {
		setLoading(true);
		const res = await fetch("/logs");
		const logs = await res.json();
		setLoading(false);
		setLogs(logs);
	};

	if (loading) return <Preloader />;

	return !loading && logs.length === 0 ? (
		<h3>No logs found</h3>
	) : (
		<Fragment>
			<h1 className="center">System Logs</h1>
			<ul className="collection with-header">
				{logs.map((log) => (
					<LogItem key={log.id} log={log} />
				))}
			</ul>
		</Fragment>
	);
};

export default Logs;
