import {useState, useEffect} from 'preact/hooks';
import {
  MdVerifiedUser,
  MdErrorOutline,
  MdWarning,
  MdAutorenew,
} from 'react-icons/md';
import useStore from './state';
import {generatePassword} from './utils/passwordGenerator';
import {copyToClipboard} from './utils/copy-to-clipboard';
import {vars} from './style/global.css';
import {
  backgroundVariant,
  wrapper,
  mainBackground,
  buttonBackground,
} from './style/background.css';
import {input} from './style/input.css';
import {button, refresh} from './style/button.css';
import {popup} from './style/popup.css';
import {
  heading,
  subheader,
  label,
  labelText,
  buttonText,
  labelStrength,
} from './style/typography.css';

export function App() {
  const [isCopied, setIsCopied] = useState(false);
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

  function handleSetPassword() {
    setPassword(
      generatePassword(parseInt(range), showLetters, showNumbers, showSymbols)
    );
  }

  function handleBackgroundChange() {
    if (parseInt(range) <= 6) {
      setBackground('bad');
    }
    if (parseInt(range) > 7) {
      setBackground('medium');
    }
    if (parseInt(range) >= 12) {
      setBackground('good');
    }
  }

  useEffect(() => {
    if (
      (!showLetters && !showNumbers && !showSymbols) ||
      parseInt(range) <= 1
    ) {
      setPassword('No password is a bad password 😡');
      setBackground('bad');
    } else {
      handleSetPassword();
      handleBackgroundChange();
    }
  }, [range, showLetters, showNumbers, showSymbols]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isCopied) {
        setIsCopied(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  const PASSWORD_STRENGTH = {
    good: 'Strong',
    medium: 'Fairly strong',
    bad: 'Weak',
  };

  const PASSWORD_STRENGTH_LOGO = {
    good: <MdVerifiedUser size={35} />,
    medium: <MdErrorOutline size={35} />,
    bad: <MdWarning size={35} />,
  };

  const PASSWORD_DETAILS = {
    good: "This is a strong password, you'll be well protected using this",
    medium:
      "This is a fairly strong password, you'll be relatively well protected using this",
    bad: "This is a weak password, you'll be vulnerable to attacks",
  };

  return (
    <div className={`${backgroundVariant[background]} ${wrapper}`}>
      <div className={mainBackground}>
        <p className={heading}>{password}</p>
        <p className={subheader} title={PASSWORD_DETAILS[background]}>
          {PASSWORD_STRENGTH_LOGO[background]}{' '}
          <span className={labelStrength}>
            {PASSWORD_STRENGTH[background]} password
          </span>
        </p>
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
          onInput={(e: any) => setRange(e.target!.value)}
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
            <label className={labelText} htmlFor="letters" title="Add letters">
              Letters (e.g. Aa)
            </label>
          </div>
          <div className={buttonText}>
            <input
              type="checkbox"
              id="numbers"
              checked={showNumbers}
              onInput={() => setShowNumbers(!showNumbers)}
            />
            <label className={labelText} htmlFor="numbers" title="Add numbers">
              Digits (e.g. 345)⁭
            </label>
          </div>
          <div className={buttonText}>
            <input
              type="checkbox"
              id="symbols"
              checked={showSymbols}
              onInput={() => setShowSymbols(!showSymbols)}
            />
            <label className={labelText} htmlFor="symbols" title="Add symbols">
              Symbols (@&$!#?)
            </label>
          </div>
        </div>
        <div>
          <button
            className={button}
            onClick={() => {
              copyToClipboard(password || '');
              setIsCopied(true);
            }}
            title="Copy password"
          >
            Copy password
          </button>
          {isCopied ? <div className={popup}>Copied</div> : null}
        </div>
        <div className={refresh} onClick={handleSetPassword} title="Refresh">
          <MdAutorenew size={40} fill={vars.colors.white} />
        </div>
      </div>
    </div>
  );
}
