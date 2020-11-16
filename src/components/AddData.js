import React, { Component } from 'react';
import { createData } from '../actions/data';
import {connect} from 'react-redux';

class AddData extends Component {
    constructor(props){
        super(props);
        this.state={
            content:''
        }
    }

    handleOnClick=()=>{
        //dispatch an action
     
        this.props.dispatch(createData(this.state.content))
    }
    handleChange=(e)=>{
        
        this.setState({
            content:e.target.value
        })
    }
    render() {
        return (
            <div>
              <textarea value={this.state.content} onChange={this.handleChange} placeholder='AddData' />
            <div>
                <button onClick={this.handleOnClick}>Add Data</button>
            </div>
            </div>
        );
    }
}

export default connect()(AddData);