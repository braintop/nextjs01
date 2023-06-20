import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import Post from "../../../../models/Post";
import { request } from "http";

interface Params {
    id: string;
}
export const GET = async (
    request: Request,
    { params }: { params: { id: string } }
) => {
    const { id } = params;

    try {
        await connect();

        const post = await Post.findById(id);

        if (post) {
            return new NextResponse(JSON.stringify(post), { status: 200 });
        } else {
            return new NextResponse("Post not found", { status: 404 });
        }
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const DELETE = async (
    request: Request,
    { params }: { params: { id: string } }
) => {
    const { id } = params;

    try {
        await connect();

        await Post.findByIdAndDelete(id);

        return new NextResponse("Post has been deleted", { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};
