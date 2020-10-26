import { GlobalContext } from './context';
import { usePending } from '../hooks/usePending';
import PropTypes from 'prop-types';
import React from 'react';

const GlobalState = (props) => {
  const { pending, onSetPending } = usePending();

  return (
    <GlobalContext.Provider value={{onSetPending, pending}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
GlobalState.propTypes = {
  children: PropTypes.node,
};
export default GlobalState;