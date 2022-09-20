import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoListState } from "../atom";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <Wrapper>
      <Input type="text" value={inputValue} onChange={onChange} />
    </Wrapper>
  );
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

export default TodoList;
