"use server";

import { signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";
import { conntectToDb } from "./connectToDb";
import { User } from "./models";
import bcrypt from "bcryptjs";
export const handleLogOut = async() => {
  
    await signOut();
}
export const handleGithubLogin = async()=>{
    await signIn("github");
  }

export const register = async(previousState,formData) =>{
    const {username , email , password ,img, passwordRepeat} =Object?.fromEntries(formData);
    if(password !== passwordRepeat){ 
        return {error : "Password do not match" };
    }
    try {
        conntectToDb();

        const user = await User.findOne({username});
        if(user){
            return {error : "Username alreardy exists"}
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password  , salt);
        const newUser = new User({
            username,
            email,
            password : hashedPassword,
            img,
        });

        await newUser.save();
        console.log("newUser registered!");
        return {success : true};
    } catch (error) {
        console.log(error);
        return {error :   "something went wrong in user registration !"};
    }
}



export const formlogin = async(previousState,formData) =>{
    const {username , password} =Object.fromEntries(formData);
    try {
       await signIn("credentials",{username , password});
       revalidatePath("/");
    } catch (error) {
        console.log(error);
        throw error;
    }
}