// translateService.js
import translate from "google-translate-api-x";

/**
 * Automatski prevodi tekst na zadani jezik.
 * @param {string} text - Tekst za prijevod.
 * @param {string} targetLang - Ciljani jezik (default: 'hr' - hrvatski).
 * @returns {Promise<string>} - Prevedeni tekst ili original ako prijevod ne uspije.
 */
export const autoTranslate = async (text, targetLang = "hr") => {
  try {
    const result = await translate(text, { to: targetLang });
    return result.text;
  } catch (error) {
    console.error("Greška pri prevođenju:", error);
    return text; // fallback - vraća originalni tekst ako prijevod ne uspije
  }
};
