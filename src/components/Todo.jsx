import React, { useState } from 'react'

const Todo = () => {
    const [inputText, setInputText] = useState("")
    const [tasks, setTask] = useState([])
    const [editInput, setEditInput] = useState(null)

    // const handleSubmit = (e)=>{
    //     e.preventDefault()

    //     if(!inputText.trim() === ""){
    //         return
    //     }

    //     if(editInput === null){
    //         setTask([...tasks, inputText])
    //     } else{
    //         setTask(tasks.map((task, index)=>{
    //             return (
    //                 (index === editInput) ? ({...task, inputText}) : task
    //             )
    //         }))
    //         setEditInput(null)
    //     }

    //     setInputText("")
    // }
  return (
    <div>
        <form action="">
            <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)}  />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Todo