import { useState, useEffect, memo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { todoListState } from "../atom";
import TodoItem from "./TodoItem.jsx";
import TodoItemCreator from "./TodoItemCreator.jsx";
import Clock from "./Clock.jsx";
import Weather from "./Weather.jsx";
import Quote from "./Quotes.jsx";
import images from "../dev/backGroundImg";
import TodoListStats from "./TodoListStats.jsx";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  const [bg, setBg] = useState("");

  useEffect(() => {
    setBg(chosenImage);
  }, [chosenImage]);
  return (
    <Wrapper bg={bg}>
      <ContentWrapper>
        <Weather />
        <TodoListStats />
        <Clock></Clock>
        <TodoItemCreator />
        {todoList.map((todoItem) => (
          <TodoItem item={todoItem} key={todoItem.id} />
        ))}
        <Quote />
      </ContentWrapper>
    </Wrapper>
  );
};
const chosenImage = images[Math.floor(Math.random() * images.length)];
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) =>
      props.bg ||
      "https://user-images.githubusercontent.com/59393359/74718667-0adb8a80-5276-11ea-8bc3-0e36c67cf28a.jpg"});
`;
const ContentWrapper = styled.div`
  width: 70rem;
  overflow: auto;
  padding: 2rem;
`;
export default TodoList;
