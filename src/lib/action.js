"use server";


import { revalidatePath } from "next/cache";
import { conntectToDb } from "./connectToDb";
import { Post ,User } from "./models";


export const addPost = async(prevState,formData) =>{
    
    const {title , company , skills ,jobtype, desc , slug , userId , img} =   Object.fromEntries(formData);
    try {
        conntectToDb();
        const newPost = new Post({
            title,
            company,
            skills,
            jobtype,
            desc,
            slug ,
            userId,
            img,
        });
        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
    } 

}

export const deletePost = async(formData) => {

    const {id} =   Object.fromEntries(formData);
    try {
        conntectToDb();
        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
        revalidatePath("/admin");

    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" };
    } 

}




export const addUser = async (prevState,formData) => {
    const { username, email, password, img } = Object.fromEntries(formData);
  
    try {
      conntectToDb();
      const newUser = new User({
        username,
        email,
        password,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      conntectToDb();
      
      await Post.deleteMany({ userId: id });
      await User.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };



