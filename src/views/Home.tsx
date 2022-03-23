import * as React from "react";
import { FC } from "react";

import { Grid, Container } from "@mantine/core";

interface Test {
  prop1: string;
  prop2: string;
}

type InterfaceToKV<T> = {
  [K in keyof T]: { key: K; value: T[K] };
}[keyof T];

const Home: FC = function () {
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
  );
};

export default Home;
