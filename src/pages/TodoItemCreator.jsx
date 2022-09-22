import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { todoListState } from "../atom";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (e) => {
    e.preventDefault();
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <Form onSubmit={addItem}>
      <Input
        type="text"
        value={inputValue}
        placeholder="Write a To Do"
        required
        onChange={onChange}
      />
    </Form>
  );
};

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Input = styled.input`
  background: none;
  appearance: none;
  border: 0;
  font-size: 3rem;
  color: white;
  border-bottom: 2px solid white;
  text-align: center;
  &::placeholder {
    color: white;
  }
`;

export default TodoItemCreator;
