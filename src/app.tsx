import { useEffect } from "preact/hooks";
import useStore from "./state";
import * as styles from "./style/background.css";

export function App() {
	const { range, background, setRange, setBackground } = useStore();

	useEffect(() => {
		if (parseInt(range) > 10) {
			setBackground("medium");
		}
		if (parseInt(range) <= 7) {
			setBackground("bad");
		}
		if (parseInt(range) > 12) {
			setBackground("good");
		}
	}, [range]);

	console.log(typeof range);

	return (
		<div className={styles.backgroundVariant[background]}>
			<input
				type="range"
				id="range"
				name="password"
				min="5"
				max="40"
				step="1"
				value={range}
				onInput={(e: any) => setRange(e.target.value)}
			/>
			<label htmlFor="range">Password length: {range}</label>
		</div>
	);
}

// keep track of value
