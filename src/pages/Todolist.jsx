import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { todoListState } from "../atom";
import TodoItem from "./TodoItem.jsx";
import TodoItemCreator from "./TodoItemCreator.jsx";
const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <Wrapper>
      <ContentWrapper>
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
  width: 100%;
  height: 100%;
  background-color: rgba(145, 158, 171, 0.04);
`;
const ContentWrapper = styled.div`
  flex: 1;
  max-width: 1024px;
  overflow: auto;
  padding: 20px;
`;
export default TodoList;
