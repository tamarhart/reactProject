import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from './axios';
class Allprop extends Component {
    constructor(props)
    {
        super(props);
    }
    state = {
        list:null,
        father:[],
        ChildId: "",
        ChildName: "",
        ChildClass: "",
        ChildGroup: "",
        UserName:"",
        Password:"",
        i:2,
    }
    
   
    render() { 
    axios.get('PropertyChildren/Getallpropertyc/'+ this.props.match.params.value).then((res)=>{this.setState({list:res.data})})
    if(this.state.list)
    {
    alert('שלום')
    axios.get('User/Getallpropertyd/'+ this.props.match.params.value).then((res)=>{this.setState({father:res.data})})
    }
    else
    alert('kijki')
    //,this.setState({ChildGroup: res.data.ChildGroup})})(res)=>{this.setState({father:res.data})}

   // this.setState({className:this.state.list.className})
        //this.setState({className:this.state.list.ChildName}).then((res)=>this.setState({list:res.data}))
       // this.setState({ChildClass: this.state.list.ChildClass})
        //this.setState({ChildGroup: this.state.list.ChildGroup})
       // this.setState({className:res.data.ChildName})// onClick={() => this.state.list.ChildName=null}
        return (
            < div >
                <form id="form" >
                    
                    <label>שם הילד</label>
                    <input type="text" id="ChildName" className="input" placeholder={this.state.list.ChildName}  onChange={(event) => this.setState({ChildName: event.target.value}) } />
                    <label>מס' כיתה</label>
                    <input type="char" id="ChildClass" className="input" placeholder={this.state.list.ChildClass} onChange={(event) => this.setState({ChildClass: event.target.value})}  />
                    <label>שם הגננת</label>
                    <input type="text" id="ChildGroup" className="input" placeholder={this.state.list.ChildGroup} onChange={(event) => this.setState({ChildGroup: event.target.value})}  />
                    <label>שם הורה</label>
                    <input type="text" id="UserName" className="input" placeholder={this.state.father.UserName} onChange={(event) => this.setState({UserName: event.target.value})} />
                    <label>ת"ז הורה</label>
                    <input type="char" id="Password" className="input" placeholder={this.state.father.Password} onChange={(event) => this.setState({Password: event.target.value})} />
               
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
        //const songChange=newsong[event.target.id];
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
   //     debugger;
  //      axios.post('PropertyChildren/AddChildren', user).then(x => {
   //         console.log("sucses! " + x);
   //     })
    //}
    postDataHandler = async () => {
        const ch = {
            ChildId: this.props.match.params.value,
            ChildName:(this.state.ChildName)?(this.state.ChildName):(this.state.list.ChildName),
            ChildClass: (this.state.ChildClass)?(this.state.ChildClass):(this.state.list.ChildClass),
            ChildGroup: (this.state.ChildGroup)?(this.state.ChildGroup):(this.state.list.ChildGroup),
        };
        const us = {
            ChildId: this.props.match.params.value,
            UserName: (this.state.UserName)?(this.state.UserName):(this.state.father.UserName),
            Password:(this.state.Password)?(this.state.Password):(this.state.father.Password),
        };
       // const us = {
       //     UserName: this.state.UserName,
       //     Password:this.state.Password,
       // };

       await axios.post('PropertyChildren/UpdateChildren',ch)
       .then(()=>{alert('hiiiii')})
        .then(await axios.post('User/UpdateUser',us)).then(()=>{alert('yesssssssssss')}).catch((err) => {
           console.log(err);})
            // .then(await axios.post('User/AddUser', us)).then(()=>{alert('yesssssssssss')}).catch((err) => {
            //    console.log(err);}).then()
    }
    newUserHandler = (children) => {
        debugger;
        axios.post('PropertyChildren/AddChildren/'+children).then(x => {
            console.log("sucses! " + x);
        })
    }
} export default Allprop;


