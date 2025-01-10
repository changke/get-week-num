import {assertEquals} from '@std/assert';
import {getWeekNum} from './mod.ts';

Deno.test('Week number can be correctly calculated', () => {
  assertEquals(getWeekNum(new Date('2023-06-01')), 22);
  assertEquals(getWeekNum(new Date('2024-12-01')), 48);
  assertEquals(getWeekNum(new Date('2025-01-01')), 1);
});

console.log(getWeekNum());
