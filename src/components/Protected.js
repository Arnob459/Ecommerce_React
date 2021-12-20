import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Protected(props) {
  let Cmp = props.cmp;
  const history = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('user-info'))
    {
      history("/login");
    }

  },[])
  return (
    <div >
      <Cmp />
      
    </div>
  );
}

export default Protected;