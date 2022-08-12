import React from 'react'
import {BsCheck} from "react-icons/bs";
import {RiDeleteBinLine} from "react-icons/ri";
import {MdEdit} from "react-icons/md";
import emptyPng from "../../assets/images/empty.png";
import { useDispatch, useSelector } from 'react-redux';
import { remove, removeAll, update } from '../../redux/reducer/todoReducer';
import { editsave } from '../../redux/reducer/todoEditReducer';
const TodoList = () => {
    const {todo}=useSelector(store=>store);
    const dispatch=useDispatch();
    function removeItem(id){
        dispatch(remove(id));
        dispatch(editsave({id:null}))
    }
    function updateItem(id){
        dispatch(update(id))
    }
    function removeAllItem(id){
        dispatch(removeAll())
        dispatch(editsave({id:null}))
    }
    function editItem(e,item){
        e.stopPropagation();
        dispatch(editsave(item))
    }
  return (
    <div className='todo-list'>
        {todo?.length>0 ?
        <ul>
            {todo.map(item=>{
            return(
            <li onClick={()=>updateItem(item.id)} key={item.id} className={item.checked ? "checked" : null}>
                <span className="checkbox"><BsCheck/></span>
                <p>{item.text}</p>
                <div className="todo-btns">
                    <div className="edit-btn" onClick={(e)=>editItem(e,item)}><MdEdit/></div>
                    <div className="delete-btn" onClick={()=>removeItem(item.id)}><RiDeleteBinLine/></div>
                </div>
            </li>
            )
            })}
        </ul>
        :
        <div className="empty-list">
            <img src={emptyPng} alt="" />
            <span>Heç bir tapşırıq yoxdur</span>
        </div>
}
            <div className="todo-footer">
                <span>Ümumi: {todo?.length} tapşırıq</span>
                <span>Hazır: {todo.filter(item=>{
                    if(item.checked)return item;
                    return false
                }).length} tapşırıq</span>
                <span onClick={removeAllItem} className="clear-all">Hamısını sil</span>
            </div>
    </div>
  )
}

export default TodoList