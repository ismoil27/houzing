import React, { useState } from "react";
import Filter from "../Filter";
import Card from "../Card";
import { Container, Total, Wrapper } from "./style";
import { useQuery } from "react-query";

const { REACT_APP_BASE_URL: url } = process.env;
export const Properties = () => {
  const [data, setData] = useState([]);

  useQuery(
    "get data",
    () => {
      return fetch(`${url}/v1/houses/list`).then((res) => res.json());
    },

    {
      onSuccess: (res) => {
        console.log(res);
      },
    }
  );

  return (
    <Container>
      <Filter />
      <div className="title">Properties</div>
      <div className="description center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Total> {data?.length} Total</Total>
      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Wrapper>
    </Container>
  );
};

export default Properties;