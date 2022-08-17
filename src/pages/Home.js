import TaskItem from '../components/TaskItem';

const Home = ({ tasks }) => {

  return (
    <div className='home'>
      {tasks && <TaskItem tasks={tasks} />}
    </div>
  )
}

export default Home;