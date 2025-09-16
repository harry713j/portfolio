import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/nodemailer";

export async function POST(
  req: NextRequest
): Promise<NextResponse<APIResponse>> {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All the fields are required",
        },
        { status: 404 }
      );
    }

    const info = await sendEmail(name, email.toLowerCase(), message);

    if (info.rejected && info.rejected.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send the mail",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error While sending mail: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong!",
      },
      { status: 500 }
    );
  }
}
