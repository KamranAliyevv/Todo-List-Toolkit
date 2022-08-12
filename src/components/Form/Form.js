import React, { useEffect, useRef } from 'react'
import {BsPlus} from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { editsave } from '../../redux/reducer/todoEditReducer';
import { add, edit } from '../../redux/reducer/todoReducer';


const Form = () => {
  const inputRef = useRef();
  const dispatch=useDispatch();
  const {editData}=useSelector(store=>store);

  function addItem(e){
    e.preventDefault();
    let inputValue=inputRef.current.value.trim();
    if(inputValue.length>0){
    if(editData.id){
      dispatch(edit({
        ...editData,text:inputValue
      }))
      dispatch(editsave({
        id:null
      }))
    }
    else{
      dispatch(add({
        id:Date.now(),
        text:inputValue,
        checked:false,
      }))
    }
    }
    inputRef.current.value="";
  }

  useEffect(()=>{
    console.log(editData.id)
    if(editData.id){
      console.log(editData.text)
      inputRef.current.value=editData.text;
    }
  },[editData])
  return (
    <form onSubmit={addItem} id='todo-form'>
        <input ref={inputRef} type="text" placeholder='Tapşırığı daxil edin' />
        <button className='addTodo'><BsPlus/></button>
    </form>
  )
}

export default Form