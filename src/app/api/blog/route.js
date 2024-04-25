import { conntectToDb } from "@/lib/connectToDb"
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async(request)=>{
    try {
        conntectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {
        throw new Error("Failed to get the posts!")
    }
}

// export const DELETE = async(request,{params})=>{
//     const {slug} =params;
//     try {
//         conntectToDb();
//         const posts = await Post.find();
//         return NextResponse.json(posts);
//     } catch (error) {
//         throw new Error("Failed to get the posts!")
//     }
// }