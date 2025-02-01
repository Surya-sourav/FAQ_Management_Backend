const translate = require('google-translate-api-x');

exports.translate = async (text, targetLang) => {
  try {
    const result = await translate(text, { to: targetLang });
    return result.text;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Fallback to original text
  }
};
