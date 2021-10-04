import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';
import './styles.css';

export const Home = () => {
  const [state, actions] = useCounterContext();

  return (
    <div>
      <Heading />

      <div>
        <Button onButtonClick={() => actions.increase()}>Increase</Button>
        <Button onButtonClick={() => actions.decrease()}>Decrease</Button>
        <Button onButtonClick={() => actions.reset()}>Reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>
          Set 10
        </Button>
        <Button onButtonClick={actions.asyncIncrease}>Async increase</Button>
      </div>
    </div>
  );
};
