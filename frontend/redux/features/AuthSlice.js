import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const signUpUser = createAsyncThunk("auth/signUpUser",async (user) =>{
  const responce = await fetch ("",{
    
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  })

return responce.json();

if(!responce.ok){
  throw new Error("Unauthorized");
  
}

})


export const loginUser = createAsyncThunk("auth/loginUser", async (user) => {
  const responce = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });
  const data =  await responce.json();
  if(!responce.ok){
    throw new Error(data.message || "Unauthorized");
  }
   
   console.log(data);
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
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(loginUser.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = "fulfilled",
          state.user = action.payload.user,
          state.token = action.payload.token
          localStorage.setItem("tokenaccess",action.payload.token)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = "failed",
         state.error = action.payload.error
      });
  },
});

export default authSlice.reducer;
