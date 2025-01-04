'use client'

import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { CircleCheckBig } from 'lucide-react';
import Image from 'next/image'
import Login from "../(auth}/login/logo.png"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
export default function Page() {
    const [alert, setAlert] = useState();  // Add state for alert message
    const [type, setType] = useState(false)
    const showAlert = (message, type) => {
        setAlert(message);
        setType(type)
      setTimeout(() => {
        setAlert(null);  // Hide the alert after 3 seconds
      }, 3000);
    };
  
    return (
        <div className="items-center justify-center">
            <div className="w-full flex justify-center aboslute z-100 fixed top-[5vh] left-0 right-0 z-50">
            {alert &&
                <Alert className={(type) ? "z-10 w-1/3 justify-center animate-slideInDown bg-green-100 " : "z-10 w-1/3 justify-center animate-slideInDown bg-red-100"}>
                {(type) ? <CircleCheckBig className="h-6 w-6"/> :<AlertCircle className="h-6 w-6" />}
                <AlertTitle>{(type) ? "Sucess" : "Error"}</AlertTitle>
                <AlertDescription>
                  {alert}
                </AlertDescription>
              </Alert>
            }
            </div>
            
            <div className="flex min-h-[93vh] w-full">
                    {/* Left Section */}
                    <div className="flex flex-col gap-4 p-6 md:p-10 w-1/2">
                      <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-xs">
                          <LoginForm showAlert={showAlert} type="login" />
                        </div>
                      </div>
                    </div>
            
                    {/* Right Section */}
                    <div className="w-1/2 relative flex justify-center background-div rounded-md" >
                    <img
                      src={Login.src}
                      alt="Image"
                      className="absolute inset-0 h-full w-full items-end object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                    </div>
                  </div>
                </div>
      
    );
  }
  