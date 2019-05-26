# index-of-regex

## Install
```bash
npm i index-of-regex
```

## Usage

```javascript
//es6
import {indexOfRegex, lastIndexOfRegex} from 'index-of-regex'

const {indexOfRegex, lastIndexOfRegex} = require('index-of-regex')

const str = '123abcabc'

indexOfRegex(str, /ab/) // 3
lastIndexOfRegex(str, /ab/) //6
```
Both take `startPosition` as 3rd argument.

Original credit to Jason Bunting: http://stackoverflow.com/a/274094

## Integration with TypeScript

index-of-regex includes TypeScript definitions.

```typescript
import { indexOfRegex, lastIndexOfRegex } from 'index-of-regex';
```

Use dtslint to check the definition file.

```bash
npm install -g dtslint
npm run dtslint
```
