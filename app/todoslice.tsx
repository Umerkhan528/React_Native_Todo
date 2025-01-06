import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Todo{
    title: String,
    id:Number,
}

const initialState: Todo []=[];

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:
    {
    addtodo: (state,action: PayloadAction<{title:String}>)=>{
        state.push({id: Date.now(), title: action.payload.title});
     },
     deletetodo:(state,action: PayloadAction<{id:Number}>)=>{
       return state.filter(item=> item.id!== action.payload.id);
     },
     updatetodo:(state,action: PayloadAction<{id:Number,title:String}>)=>{
       return state.map(item =>
            item.id === action.payload.id ? { ...item, title: action.payload.title } : item
        );
      },
    }});

export const {addtodo,deletetodo,updatetodo} = todoSlice.actions;
export default todoSlice.reducer;


