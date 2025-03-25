import { Button } from "./ui/button";
import { useSuhuCounterStore } from "@/stores/suhu";

function Counter() {
  // const [counter, setCounter] = useState<number>(0);
  const {
    counter,
    increment,
    decrement,
    reset,
    incrementByAmount,
    decrementByAmount,
  } = useSuhuCounterStore((state) => state);
  // const [background, setBackground] = useEffect<string>("#");

  // const tambah = () => {
  //   if (counter < 10) {
  //     setCounter(counter + 1);
  //   } else {
  //     alert("tidak bisa lebih dari 10");
  //   }
  // };
  // const kurang = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   } else {
  //     alert("tidak bisa kurang dari 1");
  //   }
  // };

  return (
    <div id="counter" style={{ backgroundColor: "blue" }}>
      <h1>{counter}</h1>
      <Button onClick={increment}>tambah</Button>
      <Button onClick={decrement}>kurang</Button>
      <Button onClick={reset}>reset</Button>
    </div>
  );
}

export default Counter;
