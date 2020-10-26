import { useState } from 'react';

export const usePending = () => {
  const [pending, setPending] = useState(false);

  const onSetPending = (status) => {
    setPending(status);
  };

  return {onSetPending, pending};
};