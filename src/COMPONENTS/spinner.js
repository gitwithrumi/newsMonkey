import React from "react";
import loading from "./loading.gif";

const Spinner=()=> { 
    return (
      <div className="text-center my-3">
        <img src={loading} width={30} height={30} alt="loading" />
      </div>
    );
  }


export default Spinner;
