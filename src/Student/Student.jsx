import'./Student.css'
const Student =(props)=>{
    return(
        <div className="student">
            <h1>name :{props.name} </h1>
            <p>age :{props.age}</p>
            <button className="btn btn-primary" onClick={()=>props.remove()} >delete</button>
        </div>
    )
}
export default Student