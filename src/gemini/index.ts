import { GoogleGenAI } from "@google/genai";

const googleai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default googleai;
