import '../styles/globals.css';
// pages/index.js
import { useState } from 'react';
import { generateScript } from '../utils/gpt';

export default function Home() {
  const [inputs, setInputs] = useState({
    topic: '',
    emotion: '',
    target: '',
    keypoint: '',
  });
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await generateScript(inputs);
      setResult(output);
    } catch (error) {
      setResult('오류가 발생했습니다. 다시 시도해주세요.');
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">🧠 도파민 숏폼 스크립트 봇</h1>
      <p className="text-gray-600 mb-4">
        💡 직접 300개 넘는 쇼츠를 분석해 만든 GPT입니다.<br />
        주제만 입력하면 후킹부터 CTA까지 완성된 스크립트를 드려요!
      </p>

      <form onSubmit={handleSubmit} className="space-y-2 max-w-xl">
        <input
          name="topic"
          placeholder="주제 (예: 피부 꿀팁, 헬스 자극 등)"
          value={inputs.topic}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="emotion"
          placeholder="유도할 감정 (예: 놀람, 공감, 자극)"
          value={inputs.emotion}
          onChange={handleChange}
