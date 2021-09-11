import {useEffect} from 'preact/hooks';
import useStore from './state';
import {generatePassword} from './utils/passwordGenerator';
import {copyToClipboard} from './utils/copy-to-clipboard';
import {
  backgroundVariant,
  wrapper,
  mainBackground,
  buttonBackground,
} from './style/background.css';
import {input} from './style/input.css';
import {button} from './style/button.css';
import {heading, subheader, label, buttonText} from './style/typography.css';

export function App() {
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
    <div className={`${backgroundVariant[background]} ${wrapper}`}>
      <div className={mainBackground}>
        <p className={heading}>{password}</p>
        <p className={subheader}>{PASSWORD_STRENGTH[background]} password</p>
        <input
          className={input}
          style={{
            background: `linear-gradient(to right, rgb(255, 255, 255) ${
              (range as any) * 2.5
            }%, rgba(255, 255, 255, 0.4) 0%)`,
          }}
          type="range"
          id="range"
          name="password"
          min="0"
          max="40"
          step="1"
          value={range}
          onInput={(e: any) => setRange(e.target.value)}
        />
        <label className={label} htmlFor="range">
          Length ({range})
        </label>
        <div className={buttonBackground}>
          <div className={buttonText}>
            <input
              type="checkbox"
              id="letters"
              checked={showLetters}
              onInput={() => setShowLetters(!showLetters)}
            />
            <label htmlFor="letters">Letters (e.g. Aa)</label>
          </div>
          <div className={buttonText}>
            <input
              type="checkbox"
              id="numbers"
              checked={showNumbers}
              onInput={() => setShowNumbers(!showNumbers)}
            />
            <label htmlFor="numbers">Digits (e.g. 345)⁭</label>
          </div>
          <div className={buttonText}>
            <input
              type="checkbox"
              id="symbols"
              checked={showSymbols}
              onInput={() => setShowSymbols(!showSymbols)}
            />
            <label htmlFor="symbols">Symbols (@&$!#?)</label>
          </div>
        </div>
        <button
          className={button}
          onClick={() => copyToClipboard(password || '')}
        >
          Copy password
        </button>
      </div>
    </div>
  );
}
