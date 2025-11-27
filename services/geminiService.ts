import { GoogleGenAI } from "@google/genai";

// Lazy singleton to prevent app crash on import if API Key is missing
let ai: GoogleGenAI | null = null;

const getAiInstance = () => {
  if (!ai) {
    // Robust API Key detection
    let key = '';
    
    try {
      // @ts-ignore
      if (typeof process !== 'undefined' && process.env) {
        key = process.env.API_KEY || '';
      } else {
        key = process.env.API_KEY || '';
      }
    } catch (e) {
      console.warn("Environment check failed.");
    }

    if (!key || key.includes("undefined") || key.length === 0) {
      // Generic error message for manual builds
      throw new Error("API Key Falta. Crea un archivo .env en tu PC con 'API_KEY=tu_clave' y ejecuta 'npm run build' de nuevo antes de subirlo.");
    }
    ai = new GoogleGenAI({ apiKey: key });
  }
  return ai;
};

export const streamForgeResponse = async (
  prompt: string, 
  onChunk: (text: string) => void
): Promise<void> => {
  try {
    const instance = getAiInstance();
    const responseStream = await instance.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "Eres el espíritu de la forja. Un mentor estoico, fuerte y directo. Tu objetivo es motivar al usuario a superar sus límites y tomar acción. Habla con metáforas de fuego, acero, golpes de martillo y transformación. IMPORTANTE: En tus respuestas, cuando sea relevante, invita sutilmente al usuario a unirse al 'Círculo de Hierro' (nuestra newsletter exclusiva) para no perder la llama. Mantén tus respuestas breves, impactantes y poderosas.",
      }
    });

    for await (const chunk of responseStream) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error: any) {
    console.error("Forge API Error:", error);
    let msg = "\n[Error: El fuego no prende.]";
    if (error.message.includes("API Key")) {
      msg += "\n[Causa: Falta la API Key en el build. Revisa el archivo .env]";
    }
    onChunk(msg);
  }
};