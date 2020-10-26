import { GlobalContext } from '../context/context';
import { useContext, useState } from 'react';
import { useSteps } from './useSteps';

export const useCards = () => {
  const [cards, setCards] = useState([]);
  const { onSetPending } = useContext(GlobalContext);
  const { clearSteps, onSetSteps, steps } = useSteps();

  const [cardsComparison, setCardsComparison] = useState([]);

  const cardsCompleted = number => {
    const cardsIsCompleted = cards.map(card => {
      if (card.number === number) {
        onSetPending(false);
        return { ...card, completed: true, isShow: true };
      } else return card;
    });
    setCards(cardsIsCompleted);
  };

  const onShowCard = id => {
    const cardsIsShow = cards.map(card => {
      return card.id === id ? { ...card, isShow: true } : card;
    });
    setCards(cardsIsShow);
  };

  const onClosedCards = () => {
    const cardsIsClosed = cards.map(card => {
      return card.completed ? card : { ...card, isShow: false };
    });

    //Delay when closing cards
    setTimeout(() => {
      setCards(cardsIsClosed);
      onSetPending(false);
    }, 1000);
  };

  const onSetCards = cards => {
    setCards(cards);
  };

  const onSetCardComparison = () => {
    if (cardsComparison.length < 2) return;
    onSetPending(true);

    const number_1 = cardsComparison[0]['number'];
    const number_2 = cardsComparison[1]['number'];
    onSetSteps(prevState => prevState + 1);

    number_1 === number_2 ? cardsCompleted(number_1) : onClosedCards();

    setCardsComparison([]);
  };

  return {
    cards,
    cardsComparison,
    cardsCompleted,
    clearSteps,
    onClosedCards,
    onSetCardComparison,
    onSetCards,
    onShowCard,
    setCardsComparison,
    steps,
  };
};
