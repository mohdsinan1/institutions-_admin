import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const signUpUser = createAsyncThunk("auth/signUpUser",async (user,{rejectWithValue}) =>{
  try {
    const responce = await fetch ("http://localhost:8089/auth/signup",{
    
      method: "POST",
      headers: { "Content-type": "application/json" ,
         Authorization: `Bearer ${localStorage.getItem("tokenaccess")}`
      },
      body: JSON.stringify(user),
    })
  
    const data =  await responce.json();
  
  if(!responce.ok){
    return rejectWithValue(data.message ||"invalid Credentials")
    
  }
  return data
  } catch (error) {

    return  rejectWithValue("Network error, please try again");
    
    
  }

})


export const loginUser = createAsyncThunk("auth/loginUser", async (user) => {
  console.log("login",user);
  
  const responce = await fetch('http://localhost:8089/auth/login', {
    method: "POST",
    headers: { "Content-type": "application/json",
       Authorization: `Bearer ${localStorage.getItem("tokenaccess")}`,
     },


    body: JSON.stringify(user),
  });
  const data =  await responce.json();
  if(!responce.ok){
    return rejectWithValue(data.message ||"invalid Credentials")
    
  }
   
   console.log( "redux",data);
   return data
  
  
});

const authSlice = createSlice({
  name: "auth",
  initialState: 
  {
     user: null,
     token: null,
      loading: null,
       error: null
       },
  reducers: {
    logoOut:((state)=>{
    localStorage.removeItem("tokenaccess")
   
    state.user = null;    // Clear user data from Redux state
    state.token = null;   // Clear token from Redux state
    state.loading = null;
    })
  },
  extraReducers: (build) => {
    build
      
      .addCase(signUpUser.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = "fulfilled",
          state.user = action.payload.user,
          state.token = action.payload.token
          localStorage.setItem("tokenaccess",action.payload.token);
          
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = "failed",
         state.error = action.payload.error
      }).addCase(loginUser.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = "fulfilled",
          state.user = action.payload.user,
          state.token = action.payload.token,
          localStorage.setItem("tokenaccess",action.payload.token);
          
         
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = "failed",
         state.error = action.payload
      });
  },
});

export default authSlice.reducer;
export const {logoOut} = authSlice.actions;
