import { getPortfolioData } from "@/lib/chatbot-prompt";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = getPortfolioData();
        return NextResponse.json({
            ownerName: data.personal_info.name,
            ownerShortName: data.chat_settings.owner_short_name,
            botName: data.chat_settings.bot_name
        });
    } catch (e) {
        return NextResponse.json({ error: "Failed to load" }, { status: 500 });
    }
}
