import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logoOut } from "./AuthSlice";



export const createInstitutionProfile = createAsyncThunk("profile/createProfile",async (profiledata,{rejectWithValue})=>{
    try {

       
   console.log(profiledata);
   
        

        const responce = await fetch ("http://localhost:8080/institution/insti",{
            method:"POST",
            headers:{
            
                Authorization: `Bearer ${localStorage.getItem("tokenaccess")}`,
    
            },
            body:profiledata
        })
    const data = await responce.json()
    console.log( "slice",data);
        if(!responce.ok){
            return rejectWithValue(data.message ||"invalid Credentials")
        }
        return data
      
        
    } catch (error) {
        return rejectWithValue("Network error please try again")
    }
    
})

export const getProfile = createAsyncThunk("profile/getProfile", async (profileId,{rejectWithValue})=>{
    try {
        const responce = await fetch(`http://localhost:8080/institution/insti/${profileId}`,{
            method:"GET",
            headers:{
                
              "Authorization": `Bearer ${localStorage.getItem("tokenaccess")}`,       
             }
        })
        const data = await responce.json();
       
        
        if(!responce.ok){
            return rejectWithValue(data.message ||"invalid Credentials")
        }
        return data
    } catch (error) {
        return rejectWithValue("Network error please try again")
    }
})

export const updateinstitution = createAsyncThunk("profile/updateinstitution",async({profileid,formData},{rejectWithValue})=>{
    console.log( "update param",formData ,profileid);
    
    try {
        const responce = await fetch(`http://localhost:8080/institution/insti/${profileid}`,{
        method:"PUT",
        headers:{"Authorization": `Bearer ${localStorage.getItem("tokenaccess")}`,   },
        body: formData,
        })
        const resdata = await responce.json();
        console.log("update res",resdata);
        

if(!responce.ok){
    return rejectWithValue(data.message || "invalid Credential")
}

return resdata

    } catch (error) {

        return rejectWithValue("network error pleas try again")
        
    }
})


const profileslice = createSlice({
    name:"profile",
    initialState :{
        institution :{},
        loading:null,
        error:null,
        status: localStorage.getItem("institutionStatus") ||"pending"
    },
    reducers:{},
    extraReducers :(builder) =>{
        builder
        .addCase(createInstitutionProfile.pending, (state) =>{
            state.loading = "loading"
           
            
        })
        .addCase(createInstitutionProfile.fulfilled, (state ,action) =>{
            state.loading = "fulfilled",
            state.institution = action.payload.institution,
            state.status = action.payload.institution.status,
            state.error = null,
            localStorage.setItem("institutionStatus", action.payload.institution.status);
           
            
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
            state.institution = action.payload.institution,
            state.status = action.payload.institution.status,
            state.error = null,
            localStorage.setItem("institutionStatus", action.payload.institution.status);
           
            
        })
        .addCase(getProfile.rejected,(state , action) =>{
            state.loading = "failed",
            state.error = action.payload.institution
        })
        .addCase(updateinstitution.pending, (state) =>{
            state.loading = "loading"
        })
        .addCase(updateinstitution.fulfilled, (state ,action) =>{
            state.loading = "fulfilled",
            console.log("Redux Update Response:", action.payload);
            state.institution = action.payload.institution,
            state.status = action.payload.institution.status,
            state.error = null
            localStorage.setItem("institutionStatus", action.payload.institution.status);
            
        })
        .addCase(updateinstitution.rejected,(state , action) =>{
            state.loading = "failed",
            state.error = action.payload
        })
        .addCase(logoOut ,(state) =>{
            state.institution={}
            state.loading = null,
            state.error = null,
            state.status = "pending"
            localStorage.removeItem("institutionStatus");

        })
    }
    
})

export default profileslice.reducer;