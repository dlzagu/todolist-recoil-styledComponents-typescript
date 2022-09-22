import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../selector";
import styled from "styled-components";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ListWrapper>
      <ListItem>
        <span>Total items</span>
        <span>{totalNum}</span>
      </ListItem>
      <ListItem>
        <span>Items completed</span>
        <span>{totalCompletedNum}</span>
      </ListItem>
      <ListItem>
        <span>Items not completed</span>
        <span>{totalUncompletedNum}</span>
      </ListItem>
      <ListItem>
        <span>Percent completed</span>
        <span>{formattedPercentCompleted}</span>
      </ListItem>
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  position: fixed;
  top: 2rem;
  width: 60%;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 1.3rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.8rem;
  background: none;
  color: #fff;
  border: 1px #fff solid;
  padding: 3rem 1rem;

  & > span {
    text-align: center;
  }
`;

export default TodoListStats;
