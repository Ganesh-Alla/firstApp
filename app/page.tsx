"use client"

import { useState } from "react";

export default function Home() {

const [name,setName] = useState("Mango");
const [color,setColor] = useState("Yellow");

  const handleSubmit=async(e:any)=>{
   e.preventDefault();
     console.log("Name:",name,"Color:",color);
       try {
        const response = await fetch('api/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,color
            }),
        });
        const data = await response.json();
        if (response.ok) {
            console.log('Data Entered Successfull');

        } else {
            console.log('Enter Failed');

        }
        console.log('Message from server:', data.message);
    } catch (error) {
        console.error('Error:', error);
    }
  }
  return (
    <>
  <h1>Submit</h1>
  <button type="button" onClick={handleSubmit}>Click here</button></>
  );
}
