import { indexOfRegex, lastIndexOfRegex } from 'index-of-regex';

indexOfRegex("str", /regex/); // $ExpectType number
indexOfRegex("str", /regex/, 1); // $ExpectType number

lastIndexOfRegex("str", /regex/); // $ExpectType number
lastIndexOfRegex("str", /regex/, 1); // $ExpectType number
