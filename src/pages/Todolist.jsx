import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { todoListState } from "../atom";
import TodoItem from "./TodoItem.jsx";
import TodoItemCreator from "./TodoItemCreator.jsx";
import Clock from "./Clock.jsx";
import { useState, useEffect } from "react";
const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  const [bg, setBg] = useState("");
  const images = [
    "https://cdn.pixabay.com/photo/2016/02/18/20/02/seljalandsfoss-1207958_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/02/28/04/50/nature-7038455_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/11/02/21/57/prayer-6764197_960_720.jpg",
  ];
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  useEffect(() => {
    setBg(chosenImage);
  }, [chosenImage]);
  return (
    <Wrapper bg={bg}>
      <ContentWrapper>
        <Clock></Clock>
        <TodoItemCreator />
        {todoList.map((todoItem) => (
          <TodoItem item={todoItem} key={todoItem.id} />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

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
  flex: 1;
  max-width: 1024px;
  overflow: auto;
  padding: 20px;
`;
export default TodoList;
