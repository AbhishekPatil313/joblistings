import { conntectToDb } from "./connectToDb";
import { Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";


export const getPosts = async() =>{
    try {
        conntectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error ("Failed to fetch posts!");

    }
}

export const getPost = async(slug)=>{
    try {
        conntectToDb();
        const post = await Post.findOne({slug : slug});
        return post;
    } catch (error) {
        console.log(error);
        throw new Error ("Failed to fetch post!");

    }
}

export const getUser = async(id)=>{
    noStore();
    try {
        conntectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error ("Failed to fetch user!");

    }
}

export const getUsers = async()=>{
    try {
        conntectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error ("Failed to fetch users!");

    }
}