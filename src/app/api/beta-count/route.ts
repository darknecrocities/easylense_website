import { NextResponse } from "next/server";

export async function GET() {
  const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxp1N83bKhzxuHYqFfspPgA0ye0hzpNF90xgToOUwULFPVNX1d_vqrRwzKleLbTPBSe/exec";

  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      next: { revalidate: 60 } // Cache for 60 seconds
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ count: 12 }, { status: 200 }); // Graceful fallback
  }
}
