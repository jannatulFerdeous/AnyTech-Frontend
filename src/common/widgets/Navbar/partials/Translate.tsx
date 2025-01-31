
const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate({ key: 'YOUR_GOOGLE_CLOUD_API_KEY' });

export const translateText = async (text:any, targetLanguage:string) => {
  try {
    const [translation] = await translate.translate(text, targetLanguage);
    return translation;
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // Return the original text in case of an error
  }
};