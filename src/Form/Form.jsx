import { Component } from "react";
import './Form.css'

class Form extends Component {
    state = {
        name: '',
        age: '',
    }

    inputHander = (event) => {
        this.setState({ [event.target.name]:event.target.value });
      };
    render() {
        return (
            <div className='form' >
                <div className="form-group">
                    <label>name</label>
                    <input  className="form-control"
                        type="text"
                        name="name"
                        onChange={this.inputHander}
                        value={this.state.name}
                    />
                </div>
                <div className="form-group">
                    <label>age</label>
                    <input  className="form-control"
                        type="text"
                        name="age"
                        onChange={this.inputHander}
                        value={this.state.age}
                    />
                </div>
                <br></br>
                <button type="submit" className="btn btn-warning" onClick={()=>this.props.add(this.state)}>Submit</button>
            </div>
        )
    }
}
export default Form