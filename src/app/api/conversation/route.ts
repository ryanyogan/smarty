import { checkApiLimit, increateApiLimit } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    const body = await request.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI Not Configured", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Messsages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    if (!freeTrial) {
      return new NextResponse("Free Trial Has Expired", { status: 403 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });

    await increateApiLimit();

    return NextResponse.json(response.data.choices[0].message);
  } catch (error: any) {
    console.log("conversation_error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
