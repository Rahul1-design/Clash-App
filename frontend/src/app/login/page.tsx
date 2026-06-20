import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-137.5 bg-white rounded-xl shadow-md py-5 px-10">
        <h1 className="text-4xl text-center font-extrabold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Clash
        </h1>
        <h2 className="text-3xl font-semibold">Login</h2>
        <p className="font-medium text-md">Welcome Back</p>
        <form>
          <div className="mt-2">
            <Label className="text-md cursor-pointer" htmlFor="email">
              Email
            </Label>
            {/* type email here so if any error occurs delete the type */}
            <Input
              className="mt-2"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email..."
            />
          </div>
          <div className="mt-2">
            <Label className="text-md cursor-pointer" htmlFor="pass">
              Password
            </Label>
            <Input
              className="mt-2"
              type="password"
              id="pass"
              name="password"
              placeholder="Enter your password..."
            />
          </div>
          <div className="mt-4">
            <Button className="w-full cursor-pointer">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
