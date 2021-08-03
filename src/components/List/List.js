import React from 'react'

function List({ todo }) {
   


    return (
        <div>
            <ul>
                {todo.map((item, i) =>
                    <li key={i}>{item.task}</li> 
                )}
              
            </ul>
        </div>
    )
}

export default List

