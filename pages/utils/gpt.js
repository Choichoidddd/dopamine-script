// utils/gpt.js
import axios from 'axios';

export const generateScript = async ({ topic, emotion, target, keypoint }) => {
  const prompt = `
You are a dopamine-based short-form scriptwriting expert.

주제: ${topic}
감정: ${emotion}
타겟: ${target}
핵심 포인트: ${keypoint}

🎬 Script Structure
🎙️ 후킹
🎙️ 예고
🎙️ 상식깨기
🎙️ 과정
🎙️ 갈등
🎙️ 극복
🎙️ CTA

추가로 다음도 포함해주세요:
📸 Visual Hook 제안
🖼️ 썸네일 문구
🧠 썸네일 이미지 생성 프롬프트
  `;

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.choices[0].message.content;
};
