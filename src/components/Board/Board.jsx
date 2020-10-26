import './Board.scss';
import { GlobalContext } from '../../context/context';
import { gameOver, mockDataCards, shuffle } from '../../utils';
import { useCards } from '../../hooks/useCards';
import { useTime } from '../../hooks/useTIme';
import Card from '../Card';
import React, { useContext, useEffect } from 'react';
import Reset from '../Reset';
import Steps from '../Steps';
import Time from '../Time';

const Board = () => {
  /**Click blocked*/
  const { pending, onSetPending } = useContext(GlobalContext);
  const { hours, seconds, minutes, onSetTotalTime, clearTime } = useTime();
  const {
    cards,
    clearSteps,
    onSetCards,
    onShowCard,
    steps,
    onSetCardComparison,
    cardsComparison,
    setCardsComparison
  } = useCards();

  useEffect(() => {
    onSetCardComparison();
    gameEnded();
  }, [cardsComparison]);

  useEffect(() => {
    onSetCards(shuffle(mockDataCards()));
    onSetTotalTime();
  }, []);

  const handleClick = (e, index, id) => {
    if (pending) return;
    e.stopPropagation();
    onShowCard(id);
    setCardsComparison(prevState => [...prevState, cards[index]]);
  };

  const clearStateAndRestart = () => {
    clearSteps();
    onSetPending(false);
    onSetCards(shuffle(mockDataCards()));
    setCardsComparison([]);
    clearTime();
  };

  const reset = () => {
    window.confirm('Are you sure?') && clearStateAndRestart();
  };

  const gameEnded = () => {
    gameOver(cards) &&
      window.confirm('You win!!! Repeat the game?') &&
      clearStateAndRestart();
  };

  return (
    <div className="board">
      <Reset onClick={reset}>Reset</Reset>
      <div className="board--control">
        <Steps countSteps={steps} />
        <Time h={hours} min={minutes} sec={seconds} />
      </div>
      <div className="game">
        {cards.map(({ number, color, id, completed, isShow }, index) => (
          <Card
            key={id}
            color={color}
            completed={completed}
            isShow={isShow}
            number={number}
            onClick={e => !isShow && handleClick(e, index, id)}
          />
        ))}
      </div>
    </div>
  );
};

Board.propTypes = {};

export default Board;
