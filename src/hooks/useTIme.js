import { roundedFractionalTime } from '../utils';
import { useEffect, useState } from 'react';

export const useTime = () => {
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      onSetTotalTime();
      onSetSeconds();
      onSetMinutes();
      onSetHours();
    }, 1000);
    return function cleanUp() {
      clearInterval(intervalID);
    };
  }, [time]);

  const onSetTotalTime = () => {
    setTime(prevState => prevState + 1);
  };

  const onSetSeconds = () => {
    const sec = time % 60;
    setSeconds(sec);
  };

  const onSetMinutes = () => {
    const min = time / 60 % 60;
    setMinutes(roundedFractionalTime(min));
  };
  
  const onSetHours = () => {
    const h = time / 60 / 60 % 60;
    setHours(roundedFractionalTime(h));
  };

  const clearTime = () => {
    setTime(0);
  };
  
  return {clearTime, hours, minutes, onSetTotalTime, seconds};
};