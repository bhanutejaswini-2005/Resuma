import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log('OpenAI API Key:', process.env.OPENAI_API_KEY ? 'Loaded' : 'Not Loaded');

app.post('/generate-resume', async (req, res) => {
  try {
    const formData = req.body;
    // Assuming you have generateResume function imported from generate_resume.js
    const { generateResume } = await import('./generate_resume.js');
    const resumeText = await generateResume(formData);
    res.json({ resume: resumeText });
  } catch (error) {
    console.error('Error generating resume:', error);
    res.status(500).json({ error: 'Failed to generate resume', details: error.message });
  }
});

// Test route with detailed error logging
app.get('/test-openai-simple', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: 'Say hello!' }],
      max_tokens: 10,
    });
    res.json({ result: completion.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI simple test error:', error);
    res.status(500).json({ error: 'OpenAI simple test failed', details: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
