import { createSlice, nanoid } from "@reduxjs/toolkit";

//todo interface which is used in reducer
//and then added to todos array in todoState
interface todo {
    id: string,
    text: any
}
//interface for the todoState that will be used for initialState
export interface todoState {
    todos: todo[]
};

//interface todoState implemented here 
const initialState: todoState = {
    todos: []
};

export const todoSlice = createSlice({
    //slice name is todo
    name: "todo",
    //this is the initial state given to this slice
    initialState,
    //all reducers
    reducers: {

        //add todo reducer function
        addTodo: (state, action) => {

            //create the todo
            const todo: todo = {
                id: nanoid(),
                text: action.payload
            }

            //push object to todos array inside of state
            //state is defined as initialState in the beginning
            state.todos.push(todo);
        },

        //remove todo reducer function
        removeTodo: (state, action) => {
            //filter by only keeping the todos that do not match id given in payload
            state.todos = state.todos.filter((currentTodo) => {
                currentTodo.id !== action.payload
            });
        }
    }
});

//export reducer functions from todoSlice
export const { addTodo, removeTodo } = todoSlice.actions;

//export all reducers
export default todoSlice.reducer;