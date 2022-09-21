import styled from "styled-components";
import { useEffect, useState } from "react";

const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [temp, setTemp] = useState("");
  const [skyCondition, setSkyCondition] = useState("");
  const API_KEY = "e7d56944a5b7ce3017e652953cc63a02";
  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCityName(data.name);
        setSkyCondition(data.weather[0].main);
        setTemp(data.main.temp);
      });
  }
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  });
  return (
    <Wrapper>
      <Span>{cityName}</Span>
      <Span>
        {skyCondition} / {temp}℃
      </Span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-style: italic;
  font-size: 1.4rem;
  position: fixed;
  top: 25px;
  right: 25px;
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  color: white;

  margin-bottom: 0.5rem;
`;

export default Weather;
