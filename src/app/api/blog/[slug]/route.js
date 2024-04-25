import { conntectToDb } from "@/lib/connectToDb"
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async(request,{params})=>{
    const {slug}=params;
    try {
        conntectToDb();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    } catch (error) {
        throw new Error("Failed to get the post!")
    }
}