import dbConnect from "@/app/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try{
        const body = res.json();
        await dbConnect();

        await Contact.create(body);

        return NextResponse.json({
            message : 'messege sent sucessfully'
        },{
            status: 200
        })

    }
    catch(e){
        return NextResponse.json({
            message : 'errrorrr'
        },{
            status: 500
        })
    }

}