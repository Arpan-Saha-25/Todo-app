import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function App() {

  const [todo, setTodo] = useState("")

  const [todos, setTodos] = useState([])

  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id == id)
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos);
    saveToLS();
  }

  const handleDelete = (e, id) => {
    let choice = confirm("Are you sure to delete this Todo?");
    if (choice) {
      let newTodos = todos.filter(item => {
        return item.id !== id;
      })
      setTodos(newTodos);
      saveToLS();
    }
  }

  const handleAdd = (e) => {
    if (todo) {
      // console.log('todo :', todo);
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
      saveToLS();
    }
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  }

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-300 min-h-[80vh] md:w-1/2">
        <h1 className='font-bold underline text-center text-3xl'>TodoIt - Manage Your Works</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-xl font-bold'>Add a Todo</h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} className="bg-white w-full p-1 px-2 rounded-lg" type="text" />
            <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-md mx-2'>Save</button>
          </div>

        </div>

        <input className='mb-3' onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished

        <div className='h-[0.25px] bg-black opacity-35  mx-auto'></div>

        <h2 className='text-lg font-bold mt-3'>Your Todos</h2>

        <div className="todos ">

          {todos.length === 0 && <div className='m-5'>No todos to display...</div>}

          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex  justify-between m-3">

              <div className='flex gap-5'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>

              <div className="buttons flex h-full">

                <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-md mx-1'><FaEdit /></button>

                <button onClick={(e) => handleDelete(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-md mx-1'><AiFillDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
