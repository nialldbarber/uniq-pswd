import {useState, useEffect} from 'preact/hooks';
import useStore from './state';
import {generatePassword} from './passwordGenerator';
import {
  backgroundVariant,
  mainBackground,
  buttonBackground,
} from './style/background.css';
import {input} from './style/input.css';
import {heading, subheader, label} from './style/typography.css';

export function App() {
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const {
    password,
    range,
    background,
    showLetters,
    showNumbers,
    showSymbols,
    setPassword,
    setRange,
    setBackground,
    setShowLetters,
    setShowNumbers,
    setShowSymbols,
  } = useStore();

  useEffect(() => {
    if (parseInt(range) <= 6) {
      setBackground('bad');
    }
    if (parseInt(range) > 7) {
      setBackground('medium');
    }
    if (parseInt(range) >= 12) {
      setBackground('good');
    }
  }, [range]);

  useEffect(() => {
    if (!showLetters && !showNumbers && !showSymbols) {
      setPassword('No password is a bad password 😡');
    } else {
      setPassword(
        generatePassword(parseInt(range), showLetters, showNumbers, showSymbols)
      );
    }
  }, [range, showLetters, showNumbers, showSymbols]);

  const PASSWORD_STRENGTH = {
    good: 'Strong',
    medium: 'Fairly strong',
    bad: 'Weak',
  };

  return (
    <div className={`${backgroundVariant[background]} ${mainBackground}`}>
      <p className={heading}>
        {passwordMessage === '' ? password : passwordMessage}
      </p>
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
      <div className={buttonBackground}>
        <div>
          <input
            type="checkbox"
            id="letters"
            checked={showLetters}
            onInput={() => setShowLetters(!showLetters)}
          />
          <label htmlFor="letters">Letters (e.g. Aa)</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="numbers"
            checked={showNumbers}
            onInput={() => setShowNumbers(!showNumbers)}
          />
          <label htmlFor="numbers">Digits (e.g. 345)⁭</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="symbols"
            checked={showSymbols}
            onInput={() => setShowSymbols(!showSymbols)}
          />
          <label htmlFor="symbols">Symbols (@&$!#?)</label>
        </div>
      </div>
    </div>
  );
}
