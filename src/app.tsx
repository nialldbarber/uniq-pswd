import { useEffect } from "preact/hooks";
import useStore from "./state";
import { generatePassword } from "./passwordGenerator";
import { backgroundVariant, mainBackground } from "./style/background.css";
import { input } from "./style/input.css";
import { heading, subheader, label } from "./style/typography.css";

export function App() {
  const { range, background, setRange, setBackground } = useStore();

  useEffect(() => {
    if (parseInt(range) > 10) {
      setBackground("medium");
    }
    if (parseInt(range) <= 7) {
      setBackground("bad");
    }
    if (parseInt(range) >= 12) {
      setBackground("good");
    }
  }, [range]);

  console.log(generatePassword(range));

  const PASSWORD_STRENGTH = {
    good: "Strong",
    medium: "Fairly strong",
    bad: "Weak",
  };

  return (
    <div className={`${backgroundVariant[background]} ${mainBackground}`}>
      <p className={heading}>Password</p>
      <p className={subheader}>{PASSWORD_STRENGTH[background]} password</p>
      <input
        className={input}
        type="range"
        id="range"
        name="password"
        min="4"
        max="40"
        step="1"
        value={range}
        onInput={(e: any) => setRange(e.target.value)}
      />
      <label className={label} htmlFor="range">
        Length ({range})
      </label>
    </div>
  );
}
