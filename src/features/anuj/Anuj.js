import { useState } from "react";

export default function Anuj() {
  const [formdata, setFormdata] = useState({
    mobileNumber: "",
  });

  const handleForm = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("mobileNumber", formdata.mobileNumber);

    try {
      const response = await fetch("https://ranaadmin.anujdwivedi.in/ownerapi/v1/otp-login", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
      } else {
        const error = await response.text();
       
      }
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div className="w-[100%] bg-[green]  h-[100vh] mx-auto flex flex-col items-center">
      <h1 className="text-2xl my-3 py-3">Register User</h1>
      <div className="">
        <form onSubmit={handleSubmit} className="mx-auto flex flex-col">
          <label htmlFor="number">Mobile Number</label>
          <input type="number" id="number" name="number" onChange={handleForm} />
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}
