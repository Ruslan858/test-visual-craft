import { useState } from 'react';

export const useSteps = () => {
  const [steps, setSteps] = useState(0);

  const onSetSteps = () => {
    setSteps(prevState => prevState + 1);
  };

  const clearSteps = () => {
    setSteps(0);
  };

  return {clearSteps, onSetSteps, steps};
};