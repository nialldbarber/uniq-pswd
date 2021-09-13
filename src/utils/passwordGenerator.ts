export const floorAndRoundNumber = (): number => Math.floor(Math.random() * 10);
export const randomItem = (item: string): string =>
  item[Math.floor(Math.random() * item.length)];
export const generateNumber = (): number => floorAndRoundNumber();

export function generateLetter(typeCase: string): string {
  const randomLetter = String.fromCharCode(
    typeCase.charCodeAt(0) + floorAndRoundNumber()
  );
  return randomLetter;
}

export function generate(
  count: number,
  callback: (...args: any) => any
): Array<number | string> {
  const generatedArr = Array.from({length: 26}, callback);
  // limit length of arr
  return generatedArr.splice(0, count) as string[];
}

type ValuesT = {
  letters: number;
  numbers: number;
  symbols: number;
};

export function getCorrectValues(
  count: number,
  letter: boolean,
  number: boolean,
  symbol: boolean
): ValuesT {
  let l!: number;
  let n!: number;
  let s!: number;

  // individual
  if (letter && !number && !symbol) {
    l = count;
  } else if (!letter && number && !symbol) {
    n = count;
  } else if (!letter && !number && symbol) {
    s = count;
  }
  // split
  else if (letter && number && !symbol) {
    l = count / 2;
    n = count / 2;
  } else if (letter && !number && symbol) {
    l = count / 2;
    s = count / 2;
  } else if (!letter && number && symbol) {
    n = count / 2;
    s = count / 2;
  }
  // all
  else if (letter && number && symbol) {
    if (count % 2 === 0) {
      l = count / 2;
      n = Math.round((count - l) / 2);
      s = count - (l + n);
    } else {
      l = Math.round(count / 2);
      n = Math.round((count - l) / 2);
      s = count - (l + n);
    }
  }

  return {
    letters: l,
    numbers: n,
    symbols: s,
  };
}

export function generatePassword(
  count: number,
  letter: boolean = true,
  number: boolean = true,
  symbol: boolean = false
): string {
  let {letters, numbers, symbols} = getCorrectValues(
    count,
    letter,
    number,
    symbol
  );
  let arr: Array<string | number> = [];
  let specialChars = '!@£$%&^*()_-+={}[]|;:?/>.<,~';

  let lowerCase = generate(letters / 2, () => generateLetter('A'));
  let upperCase = generate(letters / 2, () => generateLetter('a'));
  let n = generate(numbers, () => generateNumber());
  let s = generate(symbols, () => randomItem(specialChars));

  if (letter) arr = [...arr, ...lowerCase, ...upperCase];
  if (number) arr = [...arr, ...n];
  if (symbol) arr = [...arr, ...s];

  return arr
    .toString()
    .split(',')
    .sort(() => Math.random() * 2 - 1)
    .join('');
}
