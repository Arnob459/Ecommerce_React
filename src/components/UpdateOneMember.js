import React, { useState, useEffect } from "react";
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

function UpdateOneMember() {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [address, setaddress] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");



    useEffect(() => {
        getdata();
    }, []);
    


    async function getdata() {
        let result = await fetch("http://127.0.0.1:8000/api/membersDetail/" + id);
        result = await result.json();
        setData(result)
        setfirst_name(result.first_name)
        setlast_name(result.last_name)
        setemail(result.email)
        setpassword(result.password)
        setaddress(result.address)
        setPhoneNumber(result.phone_number)
        setDob(result.dob)
        setGender(result.gender)
        

    }





    async function UpdateMember(id) {
       

        const formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('address', address);
        formData.append('phone_number', phone_number);
        formData.append('dob', dob);
        formData.append('gender', gender);

        
        let result = await fetch("http://127.0.0.1:8000/api/mupdate/" + id + "?_method=PUT",
            {
                method: 'POST',
                body: formData
            })

        console.log(result);

    }
    return (
        <div>
            <Header />

            <div className="col-sm-8 offset-sm-2">

                <h1>Update Member</h1>
                <Form>
                    <input type="text" defaultValue={data.id} className="form-control" placeholder="Member ID" disabled /> <br />
                    <input type="text" defaultValue={data.first_name} onChange={(e) => setfirst_name(e.target.value)} className="form-control" placeholder="First Name" /> <br />
                    <input type="text" defaultValue={data.last_name} onChange={(e) => setlast_name(e.target.value)} className="form-control" placeholder="Last Name" /> <br />
                    <input type="text" defaultValue={data.email} onChange={(e) => setemail(e.target.value)} className="form-control" placeholder="Email" /> <br />
                    <input type="text" defaultValue={data.password} onChange={(e) => setpassword(e.target.value)} className="form-control" placeholder="Passward" /> <br />
                    <input type="text" defaultValue={data.address} onChange={(e) => setaddress(e.target.value)} className="form-control" placeholder="address" /> <br />
                    <input type="text" defaultValue={data.phone_number} onChange={(e) => setPhoneNumber(e.target.value)} className="form-control" placeholder="phone_number" /> <br />
                    <input type="date" defaultValue={data.dob} onChange={(e) => setDob(e.target.value)} className="form-control" placeholder="dob" /> <br />
                    <input type="text" defaultValue={data.gender} onChange={(e) => setGender(e.target.value)} className="form-control" placeholder="gender" /> <br />
                    
                </Form>
                <button onClick={() => UpdateMember(data.id)} className="btn btn-secondary">Update Member</button>

            </div>

        </div>
    );
}

export default UpdateOneMember;