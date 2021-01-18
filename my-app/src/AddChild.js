import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from './axios';
class AddChild extends Component {

    state = {
            ChildId:"",
            id:"",
            ChildName: "",
            name:"",
            ChildClass: "",
            class:"",
            ChildGroup: "",
            group:"",
            UserName:"",
            gname:"",
            Password:"",
            word:"",
            i:0,
    }


    render() {
        return (
            < div >
                <form id="form" >
                    <label>ת"ז ילד</label>
                    <input type="char" id="ChildId" className="input" value={this.state.ChildId} onChange={(event) => this.setState({ChildId: event.target.value})} />
                    <p>{this.state.id}</p>
                    <label>שם הילד</label>
                    <input type="text" id="ChildName" className="input" value={this.state.ChildName} onChange={(event) => this.setState({ChildName: event.target.value})} />
                    <p>{this.state.name}</p>
                    <label>מס' כיתה</label>
                    <input type="char" id="ChildClass" className="input" value={this.state.ChildClass} onChange={(event) => this.setState({ChildClass: event.target.value})} />
                    <p>{this.state.class}</p>
                    <label>שם הגננת</label>
                    <input type="text" id="ChildGroup" className="input" value={this.state.ChildGroup} onChange={(event) => this.setState({ChildGroup: event.target.value})} />
                    <p>{this.state.group}</p>
                    <label>שם הורה</label>
                    <input type="text" id="UserName" className="input" value={this.state.UserName} onChange={(event) => this.setState({UserName: event.target.value})} />
                    <p>{this.state.gname}</p>
                    <label>ת"ז הורה</label>
                    <input type="password" id="Password" pattern="[0-9a-fA-F]{4,8}" className="input" value={this.state.Password} onChange={(event) => this.setState({Password: event.target.value})} />
                    <p>{this.state.word}</p>

                </form>
                <input type="submit" className="SubmitSave" onClick={this.postDataHandler} value="שמור" />
            </div >
        );
//onClick={() => this.newUserHandler(this.state)}onSubmit={() => this.newUserHandler(this.state.user)}
    }
    componentWillMount = () => {
        console.log("hello hodaya");
    }
    signupHandler = () => {
        console.log("sign up");

    }
    inputChange = (event) => { 

        const newperson = { ...this.state.children};
        const id = event.target.id;
        newperson[id] = event.target.value;
        //const songChange=newsong[event.target.id]; <label>שם הורה</label><input type="text" id="UserName" className="input" onChange={(event) => this.inputChange1(event)} /><label>ת"ז הורה</label><input type="char" id="Password" className="input" onChange={(event) => this.inputChange1(event)} />
        //songChange=event.target.value;
        // newsong[event.target.id]=songChange;

        this.setState({ children: newperson }); 
    }
    inputChange1 = (event) => {

        const newperson = { ...this.state.user };
        const id = event.target.id;
        newperson[id] = event.target.value;
        //const songChange=newsong[event.target.id];
        //songChange=event.target.value;
        // newsong[event.target.id]=songChange;

        this.setState({ user: newperson });
    }
   // newUserHandler = (user) => { 
   //    debugger;
   //     axios.post('PropertyChildren/AddChildren', user).then(x => {
    //        console.log("sucses! " + x);
   //     })
    //}‏
    postDataHandler = async () => {
        this.setState({i:0})
        if(this.state.ChildId===null)
        this.setState({id:'נא הקש ת"ז'})
        //else
       // this.setState({i:(this.state.i)+1})
        if(this.state.ChildName===null)
        this.setState({name:'נא הקש שם'})
        //else
        //this.setState({i:(this.state.i)+1})
        if(this.state.ChildClass===null)
        this.setState({class:'נא הקש שם כיתה'})
       // else
        //this.setState({i:(this.state.i)+1})
        if(this.state.ChildGroup===null)
        this.setState({group:'נא הקש שם גננת'})
       // else
       // this.setState({i:(this.state.i)+1})
        if(this.state.UserName===null)
        this.setState({gname:'נא הקש שם הורה'})
        //else
        //this.setState({i:(this.state.i)+1})
        if(this.state.Password===null)
        this.setState({word:'נא הקש ת"ז הורה'})
        //else
        //this.setState({i:(this.state.i)+1})
        //alert(this.state.i);
        //if(this.state.i===6)
        if(this.state.Password && this.state.UserName && this.state.ChildGroup && this.state.ChildClass && this.state.ChildName && this.state.ChildId)
        this.p();
    }
    p= async () => {

        const ch = {
            ChildId: this.state.ChildId,
            ChildName:this.state.ChildName,
            ChildClass: this.state.ChildClass,
            ChildGroup: this.state.ChildGroup,
        };
        const us = {
            UserName: this.state.UserName,
            Password:this.state.Password,
        };

        await axios.post('PropertyChildren/AddChildren',ch)
            .then(()=>{alert('hiiiii')})
             .then(await axios.post('User/AddUser', us)).then(()=>{alert('yesssssssssss')}).catch((err) => {
                console.log(err);}).then()
    }
    newUserHandler(children) {
        debugger;
        axios.post('PropertyChildren/AddChildren',{children}).then(()=>{alert('hiiiii')});
    }
} export default AddChild;


