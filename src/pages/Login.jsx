import { Button, Card, Form, Input } from "@heroui/react";
import React, { useContext } from "react";
import { Link } from "react-router";
import { UsersListContext } from "../contexts/UsersListContext";

export default function Login(props) {
  const [usersList,setUsersList] = useContext(UsersListContext)
  const handleUsername=(value)=>{
   const isExists = usersList.find((user)=>user.username = value)
   if(!isExists) return "Username Does Not Exists"
  }
  const handlePassword=(value)=>{
   const isExists = usersList.find((user)=>user.username = value)
   if(!isExists) return "Username Does Not Exists"
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data)
  }
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center mx-4">
      {/* <h1 className="text-2xl text-center ">Please Login</h1> */}
      <Card className="w-[500px] mx-auto">
        <Form action="#" className="flex flex-col gap-4 shadow-md rad px-4 py-8" onSubmit={(e)=>handleSubmit(e)}>
          <p className="text-xl font-bold mb-4 self-center">User Login</p>
          <Input label="username" name="username" placeholder="Enter your username" type="text" validate={(value)=>handleUsername(value)} />
          <Input label="password" name="password" placeholder="Enter your Password" type="password" validate={(value)=>handlePassword(value)} />
          <Button variant="bordered" color="success" className="mt-2 self-center" type="submit">Login</Button>
          <div className="flex self-center gap-1 text-sm">
            <p className="text-center">Don't Have Account? </p><Link to="/register" className="text-fuchsia-800">Register</Link>
          </div>
        </Form>
      </Card>
    </section>
  );
}
