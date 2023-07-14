import { Button, FormInput } from "@fluentui/react-northstar";
import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    contactno: "",
    address: "",
  });

  const handleSubmit = (e: any) => {
    console.log("clicked");
    e.preventDefault();
    setData({
      fname: "",
      lname: "",
      email: "",
      contactno: "",
      address: "",
    });
    localStorage.setItem("userDetail", JSON.stringify(data));
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontFamily: "monospace",
          fontSize: "70px",
          color: "lightblue",
        }}
      >
        Contact Us
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
          fontWeight: "700",
          
        }}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>First Name</label>
          <br />
          <FormInput
            type="text"
            placeholder="Enter Fname"
            name="fname"
            onChange={handleInput}
          />
          <br />

          <label>Last Name</label>
          <br />
          <FormInput
            type="text"
            placeholder="Enter Lname"
            name="lname"
            onChange={handleInput}
          />
          <br />

          <label>Email Address:</label>
          <br />
          <FormInput
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={handleInput}
          />
          <br />

          <label>Contact Number</label>

          <FormInput
            type="number"
            placeholder="Enter Phone number"
            name="contactno"
            onChange={handleInput}
          />
          <br />

          <label>Address</label>
          <br />
          <FormInput
            type="text"
            placeholder="Enter Permanent Address"
            name="address"
            onChange={handleInput}
          />
          <br />

          <Button content="Tinted" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
