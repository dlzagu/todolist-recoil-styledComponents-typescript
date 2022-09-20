import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoListState } from "../atom";
import TodoItem from "./TodoItem.jsx";
const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const onAddTodoList = () => {
    setTodoList((current) => [
      ...current,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };
  return (
    <Wrapper>
      <Input type="text" value={inputValue} onChange={onChange} />
      <Button onClick={onAddTodoList}>Add</Button>
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </Wrapper>
  );
};
let id = 0;
const getId = () => {
  return id++;
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(145, 158, 171, 0.04);
  gap: 1rem;
`;

const Input = styled.input`
  height: 3.5rem;
  border-radius: 0.5rem;
  border: solid 1px rgba(145, 158, 171, 0.24);
  padding: 0 2rem;
`;

const Button = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  background-color: #3366ff;
  border: 0;
  height: 35px;
  padding: 0 20px;
  border-radius: 8px;
`;
export default TodoList;
