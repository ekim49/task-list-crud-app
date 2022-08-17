import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateNote from './pages/CreateNote';
import TaskItem from './components/TaskItem';
// import Note from './pages/Note';
import useFetch from './hooks/useFetch';

function App() {
  const { data: tasks } = useFetch(' http://localhost:3001/tasks');
  // const { data: notes } = useFetch('http://localhost:3001/notes');

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home tasks={tasks} />} />
            <Route path="/create" element={<CreateNote />} />
            {/* <Route path="/note" elemet={<Note />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
