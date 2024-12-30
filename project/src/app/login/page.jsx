'use client'

import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { CircleCheckBig } from 'lucide-react';

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
            
            <div className="grid lg:grid-cols-2 min-h-[93vh]">
                    <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex justify-center gap-2 md:justify-start"></div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-xs">
                        {/* Pass showAlert to LoginForm as a prop */}
                            <LoginForm showAlert={showAlert} type ="login" />
                        </div>
                    </div>
                    </div>
                    <div className="relative hidden bg-muted lg:block">
                    <img
                        src="/placeholder.svg"
                        alt="Image"
                        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                    </div>
                </div>
        </div>
      
    );
  }
  