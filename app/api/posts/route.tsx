import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Post from "../../../models/Post";
//var Post = require("../../../models/Post");

export const GET = async (request: Request) => {
    try {
        await connect();
        const posts = await Post.find();
        const jsonPosts = JSON.stringify(posts);
        return new NextResponse(jsonPosts, { status: 200 });
    } catch (err) {
        return new NextResponse("its not work", { status: 500 });
    }
};
