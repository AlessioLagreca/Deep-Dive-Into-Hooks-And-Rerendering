import { useState, useEffect } from "react";

interface Aprops {
	cambioStato: number;
}

function A(_: Aprops) {
	console.log("A");
	return <B />;
}

function B() {
	console.log("B");
	return <C />;
}

function C() {
	console.log("C");
	return null;
}

function D() {
	console.log("D");
	return null;
}

export default function App() {
	const [state, setState] = useState(0);
	useEffect(() => {
		setState((state) => state + 1);
	}, []);
	console.log("App");
	return (
		<div>
			<A cambioStato={state} />
			<D />
		</div>
	);
}
