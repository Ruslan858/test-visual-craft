import {colors} from '../data/colors';
import { v4 } from 'uuid';

/** Data Cards
 * {
    completed: false,
    color: 'red',
    id: '087082c3-8d71-4b8d-9045-8d2fdbd32032',
    isShow: false,
    number: 1,
  },
 * */

export const mockDataCards = (N = 20) => {
  let number = 1;
  return [...Array(N).keys()].map((i, index) => {
    let numberCopy = index % 2 !== 0 ? number++ : number;
    return {
      color: colors[numberCopy],
      completed: false,
      id: v4(),
      isShow: false,
      number: numberCopy,
    };
  });
};

export const shuffle = arr => {
  const arrCopy = [...arr];
  let ctr = arrCopy.length;
  let temp, index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arrCopy[ctr];
    arrCopy[ctr] = arrCopy[index];
    arrCopy[index] = temp;
  }
  return arrCopy;
};

export const roundedFractionalTime = (time) => {
  return Math.floor(time);
};

export const zeroStringFix = (time) => {
  return time < 10 ? `0${time}` : time.toString();
};

export const gameOver = (cards) => {
  if (cards && !cards.length) return;
  const count = cards.reduce((acc, {completed}) => {
    return completed && acc + 1;
  }, 0);
  return count === cards.length;
};