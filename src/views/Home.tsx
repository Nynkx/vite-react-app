import * as React from "react";
import { FC } from "react";
import "./Home.module.scss";

import { Progress, Button } from "@mantine/core";

import { Grid, Container } from "@mantine/core";

interface Test {
  prop1: string;
  prop2: string;
}

type InterfaceToKV<T> = {
  [K in keyof T]: { key: K; value: T[K] };
}[keyof T];

const Home: FC = function () {
<<<<<<< HEAD
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
=======
  var testvar: Test = {
    prop1: "value1",
    prop2: "value2",
  };
  type t = InterfaceToKV<Test>;

  return (
    <>
      <Grid>
        <Grid.Col span={4}>aasdasd</Grid.Col>
        <Grid.Col span={4}>aasdasd</Grid.Col>
        <Grid.Col span={4}>aasdasd</Grid.Col>
        <Grid.Col span={4}>aasdasd</Grid.Col>
      </Grid>
    </>
>>>>>>> 88eebb615e18631b0d30619d1dd875c52c5b90c4
  );
};

export default Home;
