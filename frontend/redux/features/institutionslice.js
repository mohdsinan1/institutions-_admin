import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const createInstitutionProfile = createAsyncThunk("profile/createProfile",async (profiledata,{rejectWithValue})=>{
    try {

       
   console.log(profiledata);
   
        

        const responce = await fetch ("http://localhost:8089/institution/insti",{
            method:"POST",
            headers:{
               
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "userID": localStorage.getItem("userID") 
            },
            body:profiledata
        })
    const data = await responce.json()

        if(!responce.ok){
            return rejectWithValue(data.message ||"invalid Credentials")
        }
        return data
    } catch (error) {
        return rejectWithValue("Network error please try again")
    }

})

export const getProfile = createAsyncThunk("profile/getProfile", async ({rejectWithValue})=>{
    try {
        const responce = await fetch("http://localhost:8089/institution",{
            method:"GET",
            headers:{
                
              "Authorization": `Bearer ${localStorage.getItem("tokenaccess")}`,
              "userID": localStorage.getItem("userID")        
             }
        })
        const data = await responce.json();
        console.log(data);
        
        if(!responce.ok){
            return rejectWithValue(data.message ||"invalid Credentials")
        }
    } catch (error) {
        return rejectWithValue("Network error please try again")
    }
})



const profileslice = createSlice({
    name:"profile",
    initialState :{
        insttution :null,
        loading:null,
        error:null
    },
    reducers:{},
    extraReducers :(builder) =>{
        builder
        .addCase(createInstitutionProfile.pending, (state) =>{
            state.loading = "loading"
        })
        .addCase(createInstitutionProfile.fulfilled, (state ,action) =>{
            state.loading = "fulfilled",
            state.insttution = action.payload.institution,
            state.error = null
            if(action?.payload?.initialState.userID){
                localStorage.setItem("userID",action.payload.institution.userID)
            }
        })
        .addCase(createInstitutionProfile.rejected,(state , action) =>{
            state.loading = "failed",
            state.error = action.payload
        })
        .addCase(getProfile.pending, (state) =>{
            state.loading = "loading"
        })
        .addCase(getProfile.fulfilled, (state ,action) =>{
            state.loading = "fulfilled",
            state.insttution = action.payload.institution,
            state.error = null
            if(action.payload.initialState.userID){
                localStorage.setItem("userID",action.payload.institution.userID)
            }
        })
        .addCase(getProfile.rejected,(state , action) =>{
            state.loading = "failed",
            state.error = action.payload
        })
    }
    
})

export default profileslice.reducer;