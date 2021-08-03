import React, { useState } from 'react'

function Form({ addTodo, todo }) {
    // // console.log(addTodo);
    const [form, setForm] = useState({
        task: "",
        complete: false
    })

    const onChangeInput = (e) => {
        setForm ({...form, [e.target.name]: e.target.value})
    }

    const onSubmitInput = (e) => {
        e.preventDefault();
        
        if (form.task === "") {
            return false;
        }
        
        addTodo([...todo, form])

        setForm({task:""})

        // console.log(form);
    }
        
    

    return (
        <form onSubmit={onSubmitInput}>
            <input
                name="task"
                value={form.task}
                placeholder="Write your task here"
                onChange={onChangeInput}
            />
            <button>Add</button>
        </form>
    )
}

export default Form
