import React, { useEffect, useRef } from 'react'
import {BsPlus} from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { editsave } from '../../redux/reducer/todoEditReducer';
import { add, edit } from '../../redux/reducer/todoReducer';
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const inputRef = useRef();
  const dispatch=useDispatch();
  const {editData}=useSelector(store=>store);
  const notify = (text,type) => toast(text,{
    position:"top-right",
    autoClose:5000,
    type:type
  });

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
      notify("Item edited","success");
    }
    else{
      dispatch(add({
        id:Date.now(),
        text:inputValue,
        checked:false,
      }))

      notify("Item added","success");
    }
    }
    else{
      notify("Input cannot be empty","error");
    }
    inputRef.current.value="";
  }

  useEffect(()=>{
    if(editData.id){
      inputRef.current.value=editData.text;
    }
  },[editData])
  return (
    <>
    <form onSubmit={addItem} id='todo-form'>
        <input ref={inputRef} type="text" placeholder='Tapşırığı daxil edin' />
        <button className='addTodo'><BsPlus/></button>
    </form>
    <ToastContainer/>
    </>
  )
}

export default Form