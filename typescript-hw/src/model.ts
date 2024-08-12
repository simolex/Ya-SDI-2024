// type DeepPartial<T> = {
//   [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
// };

export const segmentNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g1', 'g2', 'h', 'i', 'j', 'k', 'l', 'm'] as const;



// export type segmentType = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' |
//   'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' |
//   'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' |
//   'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export type segmentNameType = (typeof segmentNames)[number] | '';

// const charsAllowed = [
//   '0',
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z',
// ] as const;

// export type charAllowedType = (typeof charsAllowed)[number];

// type OnlyFirstChar<S extends string> = S extends `${infer $TFirstChar}${...Rest}` ? $TFirstChar : '';
// type Char<S extends string> = S extends S & OnlyFirstChar<S> ? S & OnlyFirstChar<S> : string & { length: 1 };

// type Char<S extends string, Acc extends 0[] = []> = S extends `${string}${infer $Rest}`
//   ? Char<$Rest, [...Acc, 0]>
//   : Acc['length'];

// let a: Char<string, 0[1]>;
// a = 'A';


export const segmentCodes: { [key: string]: segmentNameType[] } = {
  '0': ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'k'],
  '1': ['b', 'c', 'j'],
  '2': ['a', 'b', 'd', 'e', 'g1', 'g2'],
  '3': ['a', 'b', 'c', 'd', 'g2'],
  '4': ['b', 'c', 'f', 'g1', 'g2'],
  '5': ['a', 'c', 'd', 'f', 'g1', 'g2'],
  '6': ['a', 'c', 'd', 'e', 'f', 'g1', 'g2'],
  '7': ['a', 'j', 'l'],
  '8': ['a', 'b', 'c', 'd', 'e', 'f', 'g1', 'g2'],
  '9': ['a', 'b', 'c', 'f', 'g1', 'g2'],
  "A": ['a', 'b', 'c', 'e', 'f', 'g1', 'g2'],
  "B": ['a', 'b', 'c', 'd', 'g2', 'i', 'l'],
  "C": ['a', 'd', 'e', 'f'],
  "D": ['a', 'b', 'c', 'd', 'i', 'l'],
  "E": ['a', 'd', 'e', 'f', 'g1', 'g2'],
  "F": ['a', 'e', 'f', 'g1', 'g2'],
  "G": ['a', 'c', 'd', 'e', 'f', 'g2'],
  "H": ['b', 'c', 'e', 'f', 'g1', 'g2'],
  "I": ['a', 'd', 'i', 'l'],
  "J": ['b', 'c', 'd', 'e'],
  "K": ['e', 'f', 'g1', 'j', 'm'],
  "L": ['d', 'e', 'f'],
  "M": ['b', 'c', 'e', 'f', 'h', 'j'],
  "N": ['b', 'c', 'e', 'f', 'h', 'm'],
  "O": ['a', 'b', 'c', 'd', 'e', 'f'],
  "P": ['a', 'b', 'e', 'f', 'g1', 'g2'],
  "Q": ['a', 'b', 'c', 'd', 'e', 'f', 'm'],
  "R": ['a', 'b', 'e', 'f', 'g1', 'g2', 'm'],
  "S": ['a', 'c', 'd', 'g2', 'h'],
  "T": ['a', 'i', 'l'],
  "U": ['b', 'c', 'd', 'e', 'f'],
  "V": ['e', 'f', 'j', 'k'],
  "W": ['b', 'c', 'e', 'f', 'k', 'm'],
  "X": ['h', 'j', 'k', 'm'],
  "Y": ['h', 'j', 'l'],
  "Z": ['a', 'd', 'j', 'k'],
};



// type OptionsFlags<Type> = {
//   [Property in keyof Type]: segmentNameType[];
// };
