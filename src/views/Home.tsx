import * as React from "react";
import { FC } from "react";
import "./Home.module.scss";

import { Progress, Button } from "@mantine/core";

const Home: FC = function () {
  const [val, setVal] = React.useState(0);

  function add() {
    console.log(val);
    if (val < 100) setVal(val + 1);
  }
  function subtract() {
    console.log(val);
    if (val > 0) setVal(val - 1);
  }

  // setTimeout(() => {
  //   console.log(val);
  //   setVal(val + 0.1);
  // }, 10);

  return (
    <main>
      <Progress
        value={12800}
        sections={[{ value: val, color: "cyan" }]}
      ></Progress>
      <Button onClick={subtract}>{"<<"}</Button>
      <Button onClick={add}>{">>"}</Button>
    </main>
  );
};

export default Home;
