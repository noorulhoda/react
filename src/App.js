
import './App.css';
import Student from './Student/Student'
import { Component, Fragment } from 'react';
import Form from './Form/Form';
import Post from './Post/Post'
import axios from "axios"
class App extends Component {


  state = {
    students: [
      { name: "noor", age: "22" },
      { name: "ali", age: "40" },
      { name: "rana", age: "21" }
    ]
    ,  toggleList : true,
    posts:[],
    filteredPosts:[],
    keyword:''
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      console.log(response.data)
      this.setState({ posts:response.data,filteredposts:response.data })
    })
    .catch(error => {
      console.log(error)
    })
  }
  change = () => {
    const newStudents = [...this.state.students]
    newStudents[0].name = "noorulhoda";
    this.setState({ students: newStudents })
  }
  toggleHandler = () => {
    return this.setState({ toggleList: !this.state.toggleList });
  };

  addHandler = (student) => {
    const newStudents = [...this.state.students]
    newStudents.push(student)
    this.setState({ students: newStudents })

  }



  removeCard=(indx)=>{
    console.log(this.state.students)
   
    const newStudents = [...this.state.students];
    newStudents.splice(indx, 1);
    this.setState({ students: newStudents })
   
    console.log(this.state.students)
  }


  handleChange=(e)=> {
    this.setState({ keyword: e.target.value });
    console.log(this.state.keyword)
    let newposts = [...this.state.posts];
    newposts = this.state.posts.filter(p=>p.title.includes(this.state.keyword)) 
    this.setState({ filteredposts:newposts })
  }

  render() {
    return (
      <Fragment>
        <Form add={this.addHandler} />
        <button style={{ marginLeft: "200px" }} onClick={this.toggleHandler}>
          toggleStudents</button>
        {this.state.toggleList && (
          <div>
            {this.state.students.map((student, index) => (
              <Student
                name={student.name}
                age={student.age}
                key={index}
                remove={()=>this.removeCard(index)}
              />
            ))}
          </div>
        )}
        {!this.state.toggleList && (
         <div>
          <input 
              value={this.state.comment} 
              onChange={ this.handleChange.bind(this) }
          /> 
         {this.state.filteredposts.map((p, index) => (
           
           
           
           
           <Post
             title={p.title}
             body={p.body}
             key={index}
             value={this.state.keyword} 
             onChange={()=>this.handleChange()} 
           />




         ))}
       </div>
        )}
      </Fragment>
    );
  }
}

export default App;
