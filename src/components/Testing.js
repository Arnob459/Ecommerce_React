import Header from "./Header";
import React, { useState, useEffect } from "react";

function Testing() {
    const [file, setFile] = useState();
    
    return (
      <div>
        <Header />
        <h1>Testing</h1>
        <input type="file"  />
        
      </div>
    );
  }
  
  export default Testing;