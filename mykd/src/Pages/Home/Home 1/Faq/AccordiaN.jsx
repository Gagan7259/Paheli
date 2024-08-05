import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const AccordiaN = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <div className="accr">
        <h6>{question}</h6>
        <p
          onClick={() => {
            setShow(!show);
          }}
        >
          {<AiOutlinePlus />}
        </p>
      </div>
      {show && <p className="ans">{answer}</p>}
    </React.Fragment>
  );
};

export default AccordiaN;
