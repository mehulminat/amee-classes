import React from "react";
import "./signup.css";
import axios from "axios"

import  { Component } from 'react'

export class SignUp extends Component {
   constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      batchcode: "",
      pnumber: "",
      snumber:"",
    };
    this.changefullname = this.changefullname.bind(this)
    this.changeemail = this.changeemail.bind(this)
    this.changebatchcode = this.changebatchcode.bind(this)
    this.changepnumber = this.changepnumber.bind(this)
    this.changesnumber = this.changesnumber.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }

  changefullname(event) {
    this.setState({
      fullname: event.target.value,
    });
  }
  changeemail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changebatchcode(event) {
    this.setState({
      batchcode: event.target.value,
    });
  }
  changepnumber(event) {
    this.setState({
      pnumber: event.target.value,
    });
  }
  changesnumber(event) {
    this.setState({
      snumber: event.target.value,
    });
  }

  onSubmit(event){
    const registered = {
      fullName:this.state.fullName,
      email:this.state.email,
      batchcode:this.state.batchcode,
      pnumber:this.state.pnumber,
      snumber:this.state.snumber
    }

    axios.post("http://localhost:4000/signup",registered).then(response=>console.log(response.data))

    this.state({
      fullname: "",
      email: "",
      batchcode: "",
      pnumber: "",
      snumbr:""
    })
     event.preventDefault();
  }
  render() {
    return (
      <>
      <h1
        style={{
          display: "flex",
          textAlign: "center",
          marginTop: "10px",
          padding: "15px",
          fontSize: "2rem",
          fontWeight: "bold",
          // background: "#ff1949",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
          borderRadius: "20px",
          // boxShadow: "10px 15px 10px 5px grey",
          border:"3px solid green",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Register Form
      </h1>
      <div
        className="container"
        style={{
          background: "#17BF9E",
          borderRadius: "20px",
          marginBottom: "50px",
          width: "80%",
          padding: "20px",
          // boxShadow: "2px 3px 5px 3px grey",
        }}
      >
        <div className="form">
          <form id="contactform" method="POST" action="http://localhost:4000/signup">
            <div
              style={{
                display: "grid",
                alignContent: "space-evenly",
                gridTemplateColumns: "auto auto auto",
                gap: "20px",
                padding: "20px",
              }}
            >
              <input
                id="fullname"
                name="fullname"
                placeholder="Full Name"
                required=""
                tabindex="1"
                type="text"
                style={{
                  borderRadius: "10px",
                  marginLeft: "100px",
                }}
              />
              
              

              
            </div>
            <div
              style={{
                display: "grid",
                alignContent: "space-evenly",
                gridTemplateColumns: "auto auto",
                gap: "20px",
                padding: "20px",
              }}
            >
              <input
                id="email"
                name="email"
                placeholder="example@domain.com"
                required=""
                type="email"
                style={{ borderRadius: "10px", marginLeft: "100px" }}
              />
               <input
                id="batchcode"
                name="batchcode"
                placeholder="Batch Code"
                required=""
                type="batchcode"
                style={{ borderRadius: "10px", marginLeft: "100px" }}
              />
            </div>
            
            <div
              style={{
                display: "grid",
                alignContent: "space-evenly",
                gridTemplateColumns: "auto auto",
                gap: "20px",
                padding: "20px",
              }}
            >
              <input
                type="text"
                id="pnumber"
                name="pnumber"
                placeholder="Parent's Mobile No."
                required=""
                style={{ borderRadius: "10px", marginLeft: "100px" }}
              />

              <input
                type="text"
                id="snumber"
                name="snumber"
                placeholder="Student's Mobile No."
                required=""
                style={{ borderRadius: "10px" }}
              />
            </div>
            <br></br>
            <input
              className="buttom"
              name="signup"
              id="submit"
              tabindex="5"
              value="Sign me up!"
              type="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "10px",
                width: "20%",
                borderRadius: "20px",
              }}
            />
          </form>
        </div>
      </div>
    </>
    )
  }
}

export default SignUp

/* 

const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:4000/signup", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }


*/
