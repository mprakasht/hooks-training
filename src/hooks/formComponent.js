import React, { useEffect, useState } from "react";

import { useForm } from "../costom-hooks/useForm";
// import { Hello } from "./Hello";

export const FormComponent = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showHello, setshowHello] = useState(true);
  const [values, setValues] = useForm({ email: "", password: "" });
  useEffect(() => {
    console.log("render password changed ");
    const onMouseMove = (e) => {
      console.log(e);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [values.password]);

  return (
    <div>
      <input name="email" value={values.email} onChange={setValues} />
      <input name="password" value={values.password} onChange={setValues} />
      {/* <button onClick={() => setshowHello(!showHello)}>toggle</button> */}
      {/* {showHello && <Hello />} */}
    </div>
  );
};
