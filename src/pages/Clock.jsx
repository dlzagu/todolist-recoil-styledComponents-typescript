import styled from "styled-components";
import { useEffect, useState } from "react";

const Clock = ({ item }) => {
  const [clock, setClock] = useState("00:00");
  function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    setClock(`${hours}:${minutes}`);
  }

  useEffect(() => {
    setInterval(getClock, 1000);
  });
  return <Wrapper>{clock}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:not(:first-child) {
    margin-top: 2rem;
  }
`;

export default Clock;
