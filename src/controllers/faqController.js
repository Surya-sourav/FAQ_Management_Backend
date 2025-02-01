const Faq = require('../models/Faq')
const { translate } = require('../services/translationService');

exports.createFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = new Faq({ question, answer });
    
    // hi - hindi , bn - bengali , ur- urdu , kn - kannada , gu - gujurati , Sadly my native lang isnt there ;(
    const supportedLanguages = ['hi', 'bn' , 'ur' , 'kn' , 'gu'];
    const translations = new Map();
    
    for (const lang of supportedLanguages) {
      const translatedQuestion = await translate(question, lang);
      const translatedAnswer = await translate(answer, lang);
      translations.set(lang, { question: translatedQuestion, answer: translatedAnswer });
    }
    
    faq.translations = translations;
    await faq.save();
    
    res.status(201).json(faq);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getFaqs = async (req, res) => { 
  try {
    const lang = req.query.lang || 'en'; 
    const faqs = await Faq.find(); 

    const transformedFaqs = faqs.map(faq => {
      // Converting the Map to a plain object so as to retieve them easily
      const translationsObj = faq.translations ? Object.fromEntries(faq.translations) : {};

      // Access the translation for the requested language
      const translation = translationsObj[lang];

      return {
        question: translation?.question || faq.question, 
        answer: translation?.answer || faq.answer
      };
    });

    res.json(transformedFaqs);
    
  } catch (error) {
    console.error('Error in getFaqs:', error);
    res.status(500).json({ 
      error: error.message,
      context: "Failed to retrieve FAQs. Check database connection."
    });
  }
};
