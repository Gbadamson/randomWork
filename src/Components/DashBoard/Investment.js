import React from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
import { themeColor } from "../utils/usable";
import { hoverEffect } from "../utils/usable";

const Investment = () => {
  return (
    <InvestCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <InvestText>Investment</InvestText>
        <Invested>$127,850</Invested>
        <InvestTrack>+25% since last month</InvestTrack>
      </CardContent>
    </InvestCard>
  );
};
const InvestCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: ${themeColor};
  padding: 1rem;
  border-radius: 1rem;
  transition: 400ms ease-in-out;
  color: white;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    width: 80%;
  }
`;
const CardContent = styled.div`
  margin: 1rem;
`;
const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;
const InvestText = styled.h3`
  text-align: center;
  font-weight: bold;
  padding: 0.4rem 0;
  color: white;
`;
const Invested = styled.h2`
  text-align: center;
  color: white;
`;
const InvestTrack = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  color: white;
`;
export default Investment;
