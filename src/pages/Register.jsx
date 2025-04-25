/* eslint-disable no-unused-vars */
import { addToast, Button, Card, Form, Input } from "@heroui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const validationConfig = {
    fullName: [
      { required: "true", message: "Name cannot be empty" },
      { minLength: 5, message: "Length Should be Greater than 5" },
    ],
    username: [
      { required: "true", message: "Username cannot be empty" },
      { minLength: 5, message: "Length Should be Greater than 5" },
      { unique: true, message: "Username Already Exists" },
    ],
    password: [
      {
        pattern:
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        message:
          "Password must contains Minimum eight characters, at least one letter, one number and one special character:",
      },
    ],
  };
  const handleValidate = (key, value) => {
    let errorData = {};
    validationConfig[key].some((rule) => {
      if (rule.required && !value) {
        errorData[key] = rule.message;
        return true;
      }
      if (rule.minLength && value.length < rule.minLength) {
        errorData[key] = rule.message;
        return true;
      }
      if (rule.unique) {
        const exisistingUser = credntialList.find(
          (user) => user.username == value
        );
        if (exisistingUser) {
          errorData[key] = rule.message;
        }
        return true;
      }
      if (rule.pattern) {
        if (!rule.pattern.test(value)) {
          errorData[key] = rule.message;
        }
      }
    });
    return errorData[key];
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = Object.fromEntries(new FormData(e.currentTarget));
    setCredntialList((prevState) => [...prevState, newData]);
    addToast({
      title: "Registration Successful!!",
      color: "success",
    });
    navigate('/login')
  };
  return (
    <div className="min-h-[80vh] flex items-center">
      <Card className="w-[500px] mx-auto">
        <Form
          action="#"
          className="flex flex-col gap-4 shadow-md rad px-4 py-8"
          onSubmit={(e) => handleSubmit(e)}
        >
          <p className="text-xl font-bold mb-4 self-center">
            User Registration
          </p>
          <Input
            name="fullName"
            label="Full Name"
            placeholder="Enter your Name"
            type="text"
            validate={(value) => handleValidate("fullName", value)}
          />
          <Input
            name="username"
            label="username"
            placeholder="Enter your username"
            type="text"
            validate={(value) => handleValidate("username", value)}
          />
          <Input
            name="password"
            label="password"
            placeholder="Enter your Password"
            type="password"
            validate={(value) => handleValidate("password", value)}
          />
          <Button
            variant="bordered"
            color="success"
            className="mt-6 self-center"
            type="submit"
          >
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
}
