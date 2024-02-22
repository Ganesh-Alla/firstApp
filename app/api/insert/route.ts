import Fruit from "@/modals/Fruit";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      const {name,color} = await request.json();

     await connectDB();


     const existingFruit = await Fruit.findOne({fruitName:name});

     if(existingFruit){
        return NextResponse.json({message:"Fruit Email Already Exists"},{status:500});
     }

     const newFruit = new Fruit({
       fruitName: name,
       fruitColor: color,
    })

    try {
        await newFruit.save();
    } catch (error) {
        return NextResponse.json({message:"Creation Failed"},{status:500});
    }
     return NextResponse.json({message:"Success"},{status:201});
    } catch (error) {
        return NextResponse.json({message:"Failed"},{status:500});
    }
}