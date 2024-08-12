import { segmentCodes, type segmentNameType } from './model';
import { type optionsType } from './effects';


export function isKnownChar(char: string): boolean {
  return char in segmentCodes;
}
export function charToDisplay(char: string, options: optionsType): segmentNameType[] {
  if (options?.convertToUpperCase) {
    char = char.toUpperCase();
  }
  if (!isKnownChar(char)) {
    if (options?.unknownChar === 'exception') {
      throw new Error(`Cannot convert character ${char} to 14-segment display`);
    }
    return options?.unknownChar ?? [];
  }
  return segmentCodes[char];
}
export function stringToDisplay(input: string, options: optionsType) {
  return [...input].map(c => charToDisplay(c, options));
}
export function stringToDisplayArea(input: string, options: optionsType) {
  return input.split('\n').map((line: string) => stringToDisplay(line, options));
}
