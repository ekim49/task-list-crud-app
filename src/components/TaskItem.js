import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import styled, { css } from 'styled-components';
import { BsCheckCircleFill } from "react-icons/bs";

const TaskPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const TaskHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div`
  color: #295CED;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
  `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
    color: #ced4da;
  `}
`;


const TaskItem = ({ tasks }) => {
  // const { todo, isDone } = useFetch('http://localhost:3001/todos');
  // const [isDone, setIsDone] = useState(todo.isDone);

  // function toggleDone() {
  //   setIsDone(!isDone);
  // }
  console.log(tasks[0].isDone)

  return (
    <>
      <TaskPageContainer>
        <TaskHead>
          <h1>Task List</h1>
          <Link to="/create" style={{
            color: 'white',
            fontSize: '20px',
            backgroundColor: '#295CED',
            borderRadius: '8px'
          }}>+ New</Link>
        </TaskHead>
        <TaskListContainer>
          할 일 2개 완료
          <div className='todo-list'>
            {tasks.map(task => (
              <TaskItemContainer key={task.id}>
                <CheckCircle isDone={task.isDone}>{task.isDone && <BsCheckCircleFill />}</CheckCircle>
                <Text>{task.content}</Text>
              </TaskItemContainer>
            ))}
          </div>
        </TaskListContainer>
      </TaskPageContainer>
    </>
  )
}

export default TaskItem;