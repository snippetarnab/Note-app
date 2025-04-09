import OpenAI from "openai";

const openai = new OpenAI({
  apikey: process.env.OPENAI_API_KEY,
});

export default openai;