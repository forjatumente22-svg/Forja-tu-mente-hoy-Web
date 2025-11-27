import { GoogleGenAI } from "@google/genai";

// Lazy singleton to prevent app crash on import if API Key is missing
let ai: GoogleGenAI | null = null;

const getAiInstance = () => {
  if (!ai) {
    // Robust API Key detection that works in both Vite Build (replaced string) and Raw Browser (process access check)
    let key = '';
    
    // In Vite production build, process.env.API_KEY is text-replaced by the compiler.
    // In dev/preview, we need to be careful not to reference 'process' if it doesn't exist.
    try {
      // @ts-ignore - Check for process existence safely
      if (typeof process !== 'undefined' && process.env) {
        key = process.env.API_KEY || '';
      } else {
        // This block handles the case where Vite has replaced process.env.API_KEY with a string literal
        // e.g., key = "AIza..." || '';
        // If no replacement happened, this might be unreachable or empty depending on bundler.
        key = process.env.API_KEY || '';
      }
    } catch (e) {
      console.warn("Environment check failed, assuming missing key in preview.");
    }

    if (!key || key.includes("undefined")) {
      throw new Error("API Key missing. Configure it in Netlify Environment Variables.");
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
  } catch (error) {
    console.error("Forge API Error:", error);
    onChunk("\n[Error: El fuego no prende. Verifica que hayas añadido la API_KEY en Netlify (Site Settings > Environment Variables) o recarga la página.]");
  }
};