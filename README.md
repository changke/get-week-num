# Get Week Number

Function to get the week number for a given date.

The code is based on [this article](https://weeknumber.net/how-to/javascript).

## Installation

### Deno

```sh
deno add jsr:@changke/get-week-num
```

### Node.js

```sh
npx jsr add @changke/get-week-num
```

## Usage

Import the module and use the `getWeekNum` function:

```typescript
import {getWeekNum} from '@changke/get-week-num';

const weekNum = getWeekNum(); // default date is today
console.log(`This week is calendar week ${weekNum}.`);

const weekNum2 = getWeekNum(new Date('2024-12-01'));
console.log(`The week of 2024-12-01 is calendar week ${weekNum2}.`); // ...48
```

## API

`getWeekNum(date: Date): number`

Returns the week number for the given date.

- `date`: The date for which to get the week number. Default value is current date.

## License

This project is licensed under the MIT License.
