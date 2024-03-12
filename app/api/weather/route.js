import { NextRequest, NextResponse } from "next/server"

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const address = searchParams.get("address");
    const latitude = searchParams.get("lat");
    const lontitude = searchParams.get("lon");

    let url = "";
    if (address) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${process.env.API_KEY}`
    } else {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${lontitude}&units=metric&appid=${process.env.API_KEY}`
    }
    console.log(url);
    const res = await fetch(url);
  
    const data = await res.json();
    return NextResponse.json({ data });
}

