import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/subheading"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export const Login = () => {
    const [username , setUsername] = useState("") ;
    const [password , setPassword] = useState("") ;
    const navigate = useNavigate() ;
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={(e) => setUsername(e.target.value)} placeholder="test@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => setPassword(e.target.value)} placeholder="123456" label={"Password"} />        <div className="pt-4">
          <Button label={"Sign in"} onClick={async() =>{
            try {
              const response = await axios.post("https://spaytm1.onrender.com/api/v1/user/signin", {
                username: username,
                password: password
              });
              localStorage.setItem("token", `Bearer ${response.data.token}`);
              navigate('/dashboard');
            } catch (error) {
              console.error("Error signing in:", error);
              alert("Error signing in. Please check your credentials.");
            }
          }} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}