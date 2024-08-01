import { NextResponse } from "next/server";

export default function DELETE(request, {params}) {
    const id = params.id;
    console.log({id})
    return NextResponse.json(request)
}
