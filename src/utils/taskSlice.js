import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = import.meta.env.VITE_TASK_URL;

export const fetchTasks = createAsyncThunk("todos/fetchTasks", async (search = "") => {
  const res = await fetch(`${url}?search=${search}`);
  const data = await res.json();
  return data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    pending: [],
    completed: [],
    status: "idle",
    search:""
  },
  reducers: {
    markAsCompleted: (state, action) => {
      const id = action.payload;
      const index = state.pending.findIndex((task) => task.id === id);

      if (index !== -1) {
        const [task] = state.pending.splice(index, 1); 
        task.taskStatus = true;
        state.completed.push(task);                    
      }
    },
    markAsPending: (state, action) => {
      const id = action.payload;
      const index = state.completed.findIndex((task) => task.id === id);

      if (index !== -1) {
        const [task] = state.completed.splice(index, 1); 
        task.taskStatus = true;
        state.pending.push(task);                    
      }
    },
    removeTask: (state, action) => {
      const id = action.payload;
      const index = state.pending.findIndex((task) => task.id === id);
      const indexOfCompleted =  state.completed.findIndex((task) => task.id === id)  
      if (index !== -1) {
        state.pending.splice(index, 1);
      }
      else if(indexOfCompleted!==-1) {
        state.completed.splice(indexOfCompleted,1)
      }
      
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "success";
        state.pending   = action.payload.filter((t) => !t.taskStatus);
        state.completed = action.payload.filter((t) => t.taskStatus);
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "er  ror";
      });
  },
});

export const { markAsCompleted,markAsPending,removeTask,setSearch} = todosSlice.actions;
export default todosSlice.reducer;