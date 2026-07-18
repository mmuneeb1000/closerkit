import OpenAI from "openai";

export const generateProposal = async (project) => {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const prompt = `
Create a professional website development proposal in 100-120 words.

Business Name: ${project.businessName}
Website: ${project.website}
Industry: ${project.industry}
City: ${project.city}

Notes:
${project.notes}

The proposal should include:
- Greeting
- Problem
- Solution
- Benefits
- Call to action

Keep it friendly and persuasive.
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  return {
    prompt,
    response: response.output_text,
    model: "gpt-4.1-mini",
  };
};
