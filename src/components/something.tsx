import { useEffect, useState } from "react";

export default function Something() {
	const [count, setCount] = useState(1);

	useEffect(() => {
		console.log("hi");
		return () => {
			console.log("hi from cleanup");
		};
	}, []);

	useEffect(() => {
		console.log("secondo useEffect");
		return () => {
			console.log("secondo useEffect cleanup");
		};
	}, [count]);

	return (
		<>
			<div>understanding useffect unmount</div>
			<button className='button' onClick={() => setCount(count + 1)}>
				Add count
			</button>
		</>
	);
}
