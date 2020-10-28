import * as React from "react";
import "./styles.css";

const createGlobalCounterHook = (startCount: number = 0) => {
  const setters: Function[] = [];

  const useGlobalCounter = () => {
    const [state, setState] = React.useState(startCount);
    React.useEffect(() => {
      setters.push(setState);
    }, []);

    const setStates = (state: number) => {
      setters.forEach((ss) => {
        ss(state);
      });
    };

    return { state, setStates };
  };
  return useGlobalCounter;
};

const useGlobalCounter = createGlobalCounterHook(2);

let X = () => {
  const { state, setStates } = useGlobalCounter();
  return <div onClick={() => setStates(state + 1)}>{state}</div>;
};
let Y = () => {
  const { state, setStates } = useGlobalCounter();
  return <div onClick={() => setStates(state + 1)}>{state}</div>;
};
export default function App() {
  return (
    <div className="App">
      <X />
      <Y />
      <h1>Hello Global Counter State</h1>
      <h2>click the numbers to incerent</h2>
    </div>
  );
}
