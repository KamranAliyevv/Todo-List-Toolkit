export const addTodoItem=(state,{payload})=>{
    state.push(payload);
    localStorage.setItem("todo",JSON.stringify(state));
    return state;
}
export const removeTodoItem=(state,{payload})=>{
    let newState=state.filter(item=>{
        if(item.id!==payload)return item;
        return false;
    })
    localStorage.setItem("todo",JSON.stringify(newState));
    return newState;
}
export const updateTodoItem=(state,{payload})=>{
    state.filter(item=>{
        if(item.id===payload){
            item.checked=!item.checked;
        }
        return item;
    })
    localStorage.setItem("todo",JSON.stringify(state));
}
export const removeAllTodoItem=(store)=>{
    if(store.length>0){
    localStorage.setItem("todo",JSON.stringify([]));
    return [];
    }
}

export const editDataSave=(state,{payload})=>{
    return payload;
}
export const editTodoItem=(state,{payload})=>{
    state.filter(item=>{
        if(item.id===payload.id){
            item.text=payload.text;
        }
        return item;
    })
    localStorage.setItem("todo",JSON.stringify(state));
    return state;
}