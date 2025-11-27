import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export const streamForgeResponse = async (
  prompt: string, 
  onChunk: (text: string) => void
): Promise<void> => {
  try {
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash-lite',
      contents: prompt,
      config: {
        systemInstruction: "Eres el espíritu de la forja. Un mentor estoico, fuerte y directo. Tu objetivo es motivar al usuario a superar sus límites. Habla con metáforas de fuego, acero, golpes de martillo y transformación. Mantén tus respuestas breves, impactantes y poderosas.",
      }
    });

    for await (const chunk of responseStream) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Forge API Error:", error);
    onChunk("\n[El fuego se ha extinguido momentáneamente... intenta avivarlo de nuevo]");
  }
};