import React from "react";
import "./signup.css";
function SignUp() {
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
          background: "#ff1949",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
          borderRadius: "20px",
          boxShadow: "10px 15px 10px 5px grey",
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
          boxShadow: "10px 15px 10px 5px grey",
        }}
      >
        <div className="form">
          <form id="contactform" method="POST">
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
                id="name"
                name="name"
                placeholder="First name"
                required=""
                tabindex="1"
                type="text"
                style={{
                  borderRadius: "10px",
                  marginLeft: "100px",
                }}
              />
              <input
                id="name"
                name="name"
                placeholder="Middle name"
                required=""
                tabindex="1"
                type="text"
                style={{ borderRadius: "10px" }}
              />

              <input
                id="name"
                name="name"
                placeholder="Last name"
                required=""
                tabindex="1"
                type="text"
                style={{ borderRadius: "10px" }}
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
                id="username"
                name="username"
                placeholder="username"
                required=""
                tabindex="2"
                type="text"
                style={{ borderRadius: "10px" }}
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
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required=""
                style={{ borderRadius: "10px", marginLeft: "100px" }}
              />

              <input
                type="password"
                id="repassword"
                name="repassword"
                placeholder="repassword"
                required=""
                style={{ borderRadius: "10px" }}
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
                type="pmobile"
                id="pmobile"
                name="pmobile"
                placeholder="Parent's Mobile No."
                required=""
                style={{ borderRadius: "10px", marginLeft: "100px" }}
              />

              <input
                type="smobile"
                id="smobile"
                name="smobile"
                placeholder="Student's Mobile No."
                required=""
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div
              style={{
                display: "grid",
                alignContent: "space-evenly",
                gridTemplateColumns: "auto auto auto",
                gap: "20px",
                padding: "20px",
                marginLeft: "100px",
              }}
            >
              <select className="select-style gender" name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <select className="select-style Standard" name="standard">
                <option value="none">Standard</option>
                <option value="Computer Science">
                  Computer Sc Engineering
                </option>
                <option value="Electrical">Electrical Engineering</option>
                <option value="Mechanical">Mechanical Engineering</option>
              </select>
              <select className="select-style Field" name="stream">
                <option value="none">Field</option>
                <option value="Computer Science">
                  Computer Sc Engineering
                </option>
                <option value="Electrical">Electrical Engineering</option>
                <option value="Mechanical">Mechanical Engineering</option>
              </select>
            </div>
            <div
              style={{
                display: "grid",
                alignContent: "space-evenly",
                gridTemplateColumns: "auto auto",
                gap: "20px",
                padding: "20px",
                marginLeft: "100px",
              }}
            >
              <select className="select-style subject" name="subject">
                <option value="Male">C language</option>
                <option value="Female">C++ language</option>
              </select>

              <select className="select-style bcode" name="bcode">
                <option value="none">Batch Code</option>
                <option value="Computer Science">AMEE22</option>
                <option value="Electrical">AMEE23</option>
                <option value="Mechanical">AMEE24</option>
              </select>
            </div>
            <div
              style={{
                marginLeft: "120px",
              }}
            >
              <input
                type="ayear"
                id="ayear"
                name="ayear"
                placeholder="Academic Year"
                required=""
                style={{ borderRadius: "10px", width: "40%" }}
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
  );
}

export default SignUp;
