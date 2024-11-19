import HEADER from './components/HEADER';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <>
   <HEADER />
    <div className="container flex flex-col mx-auto my-5 rounded-xl p-5 bg-purple-100 min-h-[80vh]">
     <ToDoList />
    </div>
    </>
  );
}

export default App;
