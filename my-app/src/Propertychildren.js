import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from './axios';
import Allprop from './Allprop';
import { CommonFunctions, GetFunction, postFunction } from './CommonFunctions';
class Propertychildren extends Component {

    state = {
            ChildId: "",
    }
    render()
    {
        return (
            < div >
                <form id="form" >
                    <label>ת"ז ילד</label>
                    <input type="char" id="ChildId" className="input" onChange={(event) => this.setState({ChildId: event.target.value})}  />
                </form>
                <Link to={'/Allprop/'+this.state.ChildId}> <button id="Userchild">כניסה</button></Link>
              
            </div >
        );
    }
    inputChange = (event) => { 

        const newperson = { ...this.state.children};
        const id = event.target.id;
        newperson[id] = event.target.value;
        //const songChange=newsong[event.target.id];<Link to={'/Userchild/'+this.state.children.ChildId}> <button id="Userchild">כניסה</button></Link>
        //songChange=event.target.value; <Allprop value={this.state.ChildId}> <button id="Userchild">כניסה</button></Allprop>
        // newsong[event.target.id]=songChange;
        this.setState({ children: newperson }); 
    }
}
export default Propertychildren;