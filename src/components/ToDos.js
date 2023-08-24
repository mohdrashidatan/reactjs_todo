function ToDos ({todos, handleTick}) {


    return ( 
        <div>
            {todos.map(ele => {
                return (
                    <div style={{display:"flex", width: "500px", justifyContent:"space-around"}}>
                        <h3 style={{textDecoration: ele.isCompleted? "line-through": "none"}}>{ele.text}</h3>
                        <button onClick={()=>handleTick(ele.id)}>Tick</button>
                        <button>Delete</button>
                    </div>

                )
            })}
        </div>
     );
}

export default ToDos ;