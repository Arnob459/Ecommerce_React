import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


function Signup() {

  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history("/add");
    }

  }, [])

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setaddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");


  async function signup() {
    let item = { first_name, last_name, email, password,address,phone_number,dob,gender };

    let result = await fetch("http://127.0.0.1:8000/api/add_member",
      {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      })

    result = await result.json();

    if (result.status === 200) {
      localStorage.setItem("user-info", JSON.stringify(result.member));
      history("/add")
    }

  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Signup</h1>
        <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} className="form-control" placeholder="First name" /> <br />
        <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} className="form-control" placeholder="Last name" /> <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" /> <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" /> <br />
        <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} className="form-control" placeholder="address" /> <br />
        <input type="text" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} className="form-control" placeholder="Phone number" /> <br />
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="form-control" placeholder="Dob" /> <br />
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} className="form-control" placeholder="Gender" /> <br />
        <button onClick={signup} className="btn btn-primary">Sign up</button>
      </div>
    </>
  );
}

export default Signup;