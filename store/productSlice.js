
import { createSlice } from '@reduxjs/toolkit'
import STATUSES from '../src/globals/status/statuses'
import API from '../src/http'

const blogSlice = createSlice({
    name : 'product',
    initialState : {
        data : null, 
        status : null
    },
   reducers : {
    setStatus(state,action){
        state.status = action.payload
    },
    setBlog(state,action){
        state.data = action.payload
    }
   } 
})

export const {setStatus,setProduct} = productSlice.actions 
export default productSlice.reducer

export function addProduct(data){
    return async function addProductThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response =  await API.post('blog', data,{
                headers : {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log('hello',response)
            if(response.status === 201){
     
          
             dispatch(setStatus(STATUSES.SUCCESS))
            }else{
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}


export function fetchProduct(){
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
     try {
        const response =  await API.get('blog')
        if(response.status === 200 && response.data.blog.length > 0 ){
            dispatch(setProduct(response.data.blog))
            dispatch(setStatus(STATUSES.SUCCESS))
        }else{
            dispatch(setStatus(STATUSES.ERROR))
        }
     } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
     }
    }
}


export function deleteProduct(id,token){
    return async function deleteProductThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
     try {
        const response =  await API.delete(`blog/${id}`,{
            headers : {
                token1 : token
            }
        })
        if(response.status === 200 ){
          
            dispatch(setStatus(STATUSES.SUCCESS))
        }else{
            dispatch(setStatus(STATUSES.ERROR))
        }
     } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
     }
    }
}

export function editProduct(id,token){
    return async function editProductThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
     try {
        const response =  await API.patch(`blog/${id}`,{
            headers : {
                token1 : token
            }
        })
        if(response.status === 200 ){
          
            dispatch(setStatus(STATUSES.SUCCESS))
        }else{
            dispatch(setStatus(STATUSES.ERROR))
        }
     } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
     }
    }
}
