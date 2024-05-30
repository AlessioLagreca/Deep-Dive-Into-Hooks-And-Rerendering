import { useState, useEffect } from "react";

// Parent initial render
// Child useEffect normal runs
// Parent first useEffect normal runs
// Parent second useEffect normal runs  <-- Causes a state change
// Parent re-render
// Cleanup code in Child's usefEffect (return ...)
// Cleanup code in parent's usefEffect (return... )
// Child useEffect normal runs (due to dependency on count)
// Parent useEffect normal runs (due to dependency on count)

export default function RenderingOrder() {
	const [count, setCount] = useState(1);
	console.log(1);
	useEffect(() => {
		console.log(2);
		return () => {
			console.log(3);
		};
	}, [count]);

	useEffect(() => {
		console.log(4);
		setCount((count) => count + 1);
	}, []);
	return <Child count={count} />;
}

function Child({ count }: { count: number }) {
	useEffect(() => {
		console.log(5);
		return () => {
			console.log(6);
		};
	}, [count]);

	return null;
}
