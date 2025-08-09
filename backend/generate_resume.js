import dotenv from 'dotenv';
dotenv.config();

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function formatResumePrompt(data) {
  const { personalDetails, educationalDetails, internship, certification, skills } = data;

  return `
Create a professional and clean resume based on the following data:

Personal Details:
- Name: ${personalDetails.fullname}
- Email: ${personalDetails.email}
- Phone: ${personalDetails.phone}
- Portfolio/LinkedIn/GitHub: ${personalDetails.url}

Education:
${educationalDetails.map((edu, i) =>
  `  ${i + 1}. ${edu.degree}, ${edu.institute} (${edu.passingYear})`
).join("\n")}

Internships:
${internship.map((intn, i) =>
  `  ${i + 1}. ${intn.iname} at ${intn.company} (${intn.sduration} to ${intn.eduration})
     - ${intn.description}`
).join("\n")}

Certifications:
${certification.map((cert, i) =>
  `  ${i + 1}. ${cert.cname} from ${cert.cplatform} (${cert.cduration})`
).join("\n")}

Skills:
${Array.isArray(skills) ? skills.join(", ") : skills}

Generate a well-structured, professional resume in plain text format. Include sections with titles. Do not include fictional data. Keep it formal.
  `;
}

export async function generateResume(formData) {
  const prompt = formatResumePrompt(formData);

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant that generates resumes." },
      { role: "user", content: prompt },
    ],
    max_tokens: 1000,
  });

  return completion.choices[0].message.content.trim();
}
