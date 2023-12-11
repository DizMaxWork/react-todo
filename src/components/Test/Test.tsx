import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Test() {
 const {id} = useParams()
 const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <div>
      {id}
      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Test;
