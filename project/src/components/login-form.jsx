'use client'
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/app/icon.ico"
import Image from "next/image";
import { useState } from "react";
import { app } from "@/firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword  } from "firebase/auth";
import { permanentRedirect } from 'next/navigation'

export function LoginForm({ showAlert,  className, ...props }) {
    const auth = getAuth(app);
    console.log(auth.currentUser);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [notLong, setNotLong] = useState(false);
    console.log(props.type)
    
    if (auth.currentUser != null) {
        permanentRedirect('/')
    }
  
    const handleSubmit = async () => {
        event.preventDefault();  // Prevents the page from refreshing

        if (props.type == "signup") {
            try {
                // Create user with email and password
                await createUserWithEmailAndPassword(auth, email, password);
            
                console.log("Created user successfully!");
                showAlert("Created user successfully", true);  // Call showAlert with success message and type
              } catch (error) {
                console.log("Failed to create user:", error.message);
            
                // Check if the error message includes 'email exists'
                if (error.message.includes("email-already-in-use")) {
                  showAlert("This email already exists. Please login instead!", false);
                } else {
                  showAlert("An error occurred. Please try again later.", false);
                }
              }
        } else {
            // we are dealing with login page!
            Login();
        }
        
      };
    const Login = async () => {
        event.preventDefault();
        console.log("attempting to login");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Signed In Successfully !" + auth.currentUser);
            showAlert("Signed In Successfully!")
        } catch (error) {
            console.log("ooops! d " + error.message)
        }
        if (error.message.includes("email-already-in-use")) {
            showAlert("This email already exists. Please login instead!", false);
          } else {
            showAlert("An error occurred. Please try again later.", false);
          }

    }
    
    
    
      return (
          <div className="items-center relative" id="form">
               {auth && <p>{"User is logged in " + auth.currentUser}</p>}
          <div className="flex justify-center">
            <Image src={Logo} width={100} height={100} alt="Logo" />
          </div>
          <form 
            className={`flex flex-col gap-6 ${className || ""}`}
            {...props}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-3xl font-bold"> {(props.type=="login")? "Login to Your Account": "Create Your account"}</h1>
              <p className="text-balance text-sm text-muted-foreground">
              {(props.type=="login")? "Enter the email you used to create your Everflow account below": "Please enter an email and password to create your account"}
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {notLong &&  <p className="text-xs text-red-600">Password must be alteast 4 characters!</p>
                }
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <Button variant="outline" className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="48px"
                  height="48px"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
                Login with Google
              </Button>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </div>
      );
}
