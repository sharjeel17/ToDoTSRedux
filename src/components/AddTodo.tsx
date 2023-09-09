import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

type Props = {}

const AddTodo = (props: Props) => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const addTodoHandler = (e: any) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');

    }
  return (
    <div className="bg-indigo-900 w-full h-[100vh]">
        <h1 className="text-center text-white pt-20">Add a to-do!</h1>
        <div className="max-w-md bg-indigo-600 mx-auto shadow-xl rounded-md mt-3">
          <form className="w-full flex justify-center"
          onSubmit={addTodoHandler}>
            <input type="text" 
            className="w-full h-8 px-2 rounded-md bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none duration-[300ms]"
            placeholder="Enter a Todo... "
            onChange={(e) => setInput(e.target.value)}>
            </input>
            <button type="submit" className="w-1/3 bg-indigo-300 rounded-lg hover:bg-indigo-500 transition duration-200">
              Add todo
            </button>
          </form>
        </div>
    </div>
  )
}

export default AddTodo