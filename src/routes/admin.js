const express = require('express');
const Faq = require('../models/Faq');

const router = express.Router();

// Router to get all the faqs
router.get('/faqs', async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch FAQs' });
  }
});

// // Creating a New Faq - its
// router.post('/faqs', async (req, res) => {
//   try {
//     const { question, answer, translations } = req.body;
//     const faq = new Faq({ question, answer, translations });
//     await faq.save();
//     res.status(201).json(faq);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create FAQ' });
//   }
// });

//Updating an existing FAQ
router.put('/faqs/:id', async (req, res) => {
  try {
    const { question, answer, translations } = req.body;
    const faq = await Faq.findByIdAndUpdate(
      req.params.id,
      { question, answer, translations },
      { new: true }
    );
    if (!faq) return res.status(404).json({ error: 'FAQ not found' });
    res.json(faq);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update FAQ' });
  }
});

// Deleting  a FAQ !
router.delete('/faqs/:id', async (req, res) => {
  try {
    const faq = await Faq.findByIdAndDelete(req.params.id);
    if (!faq) return res.status(404).json({ error: 'FAQ not found' });
    res.json({ message: 'FAQ deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete FAQ' });
  }
});

module.exports = router;
