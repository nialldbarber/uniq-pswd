export const floorAndRoundNumber = (): number => Math.floor(Math.random() * 10);

export function generate(
  callback: (...args: any) => any
): Array<number | string> {
  const generatedArr = Array.from({length: 26}, callback);
  // limit length of arr
  return generatedArr.splice(0, 7) as string[];
}

export function generateLetter(typeCase: string): string {
  const randomLetter = String.fromCharCode(
    typeCase.charCodeAt(0) + floorAndRoundNumber()
  );
  return randomLetter;
}

export const generateNumber = (): number => floorAndRoundNumber();

export function generatePassword(amount: string) {
  return amount;
}
