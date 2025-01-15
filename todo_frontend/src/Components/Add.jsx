import axios from "axios"
import { useState } from "react"

function Add(){
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/todo/',{title,description}).then(res=>{
            setTitle('')
            setDescription('')
        }).catch(error=>console.log(error.message)
    )
        }
        return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name='title' id='title' value={task} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" name='description' id="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
            <input type="submit" value='add' />
        </form>
        </>
        )
}
export default Add