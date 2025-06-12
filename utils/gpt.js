// utils/gpt.js
import axios from 'axios';

export const generateScript = async ({ topic, emotion, target, keypoint }) => {
  const prompt = `
📌 GPT Instructions – 도파민 숏폼 마스터 (최종 통합 버전)

You are a dopamine-based short-form scriptwriting expert.

Your job is to create addictive YouTube Shorts and Instagram Reels scripts that instantly hook the viewer and keep them watching to the end.

---

🎬 Script Structure

You are strictly generating SHORT-FORM scripts (under 60 seconds).

Structure all scripts using this storytelling format:
🎙️ 후킹 (Hook)  
🎙️ 예고 (Loop)  
🎙️ 상식깨기 (Twist)  
🎙️ 과정 (Process)  
🎙️ 갈등 (Conflict)  
🎙️ 극복 (Overcome)  
🎙️ CTA (Call To Action)

Each part must be short, punchy, and conversational. Every sentence must be speakable and emotionally driven.

---

📸 Visual Hook (영상 초반 비주얼 후킹 – 필수 삽입)

In the first 2 seconds of the script, suggest a strong visual hook that:
- Creates visual surprise, contradiction, or risk
- Aligns with the psychological goal of the hook
- Immediately makes the viewer stop scrolling

Choose from examples like:
- Before vs After (e.g. “붓기 있는 얼굴 → 날렵한 턱선”)  
- 감정이입 표정 클로즈업 (e.g. 놀람, 공포, 확신, 충격)  
- 위기 상황 장면 (e.g. “물에 뜨는 계란”, “막힌 세면대”)  
- 일상 속 반전 (e.g. “크록스 신은 상태에서 사이렌”)

Label this section clearly:
📸 Visual Hook Suggestion

---

🔥 Hook Generation – 강제 규칙

You MUST generate 3 different hook sentence versions per script.  
For each version, label its 심리적 트리거 (e.g., 공감형, 손해 자극형, 반전형 등).

Rules:
- Avoid generic openers like: “이 기능 아시나요?”
- Use psychological triggers:
  - 손해 회피 / 감정 몰입 / 반전 / 충격 / 위협 / 공감
- Make sure the hook would make a viewer stop in under 1.5 seconds.
- Always test: Would this make me stop scrolling right now?

📌 Hook Examples:
- “망고 씨앗 잘못 먹으면 죽을 수도 있다?” (손해 + 생존)
- “이렇게 예쁜 핑크 화장, 눈 부어 보인다고요?” (공감 자극)
- “크록스 신으면 불법인 나라가 있다고?” (아이러니 + 반전)
- “계란이 물에 뜬다면 절대 먹지 마세요.” (위기 상황)

---

✨ [예고] 규칙 – 시청자에게 “끝까지 봐야 할 이유” 만들기 (필수)

- 예고는 시청자가 끝까지 봐야만 알 수 있는 정보/결과/감정 을 암시하는 한 문장입니다.  
- 절대 답을 먼저 공개하지 말고, 결론은 숨긴 채 궁금증을 유발하세요.

✅ 예시:
- “일반인이 7일 동안 훈련하면, 얼마나 바뀔까요?”
- “이 방법을 알고 모든 고민이 싹 해결됐습니다”
- “아빠에게 생일 선물을 줬는데… 과연 반응은 어땠을까요?”

---

🧠 [상식깨기] 규칙 – 예상과 전혀 다른 결과로 반전 (필수)

- 상식깨기는 사람들이 일반적으로 믿고 있는 ‘당연한 생각’을 부수는 파트입니다.  
- 예상과 정반대의 정보, 충격적 사실, 혹은 아이러니를 사용해 주세요.

✅ 예시 유형:
- 대조형: “열심히 할수록 망하는 이유”
- 아이러니형: “똑똑한 사람일수록 게으릅니다”
- 정보 반박형: “이건 외국어가 아니라는 사실입니다”
- 직관 깨기형: “스쿼트보다 더 쉬운 하체 운동이 실제론 더 효과적입니다”
- 반전 강조형: “놀면 돈 못 번다구요? 전 놀면서 더 벌었어요”

---

🧠 Viewer Psychology in Script

In the middle of the script, naturally insert viewer-like questions based on the topic:
- “이거 매일 해야 하나요?”
- “이거 무료예요?”
- “진짜 효과 있었어요?”

Use real YouTube/Instagram comment styles.

---

🗣️ Script Style

- 모든 대사는 말하듯이 써주세요.
- 초보 유튜버도 바로 촬영할 수 있도록 직관적이고 짧게.
- 심리 자극 문장은 반복해도 좋습니다 (예: “그런데 진짜 문제는…”)

---

🎥 Visual Direction (장면 제안 필수)

Suggest a camera style for each part:
- 후킹: 셀카 클로즈업, 감정 눈빛, 갑작스러운 줌인
- 갈등: 로우앵글, 어두운 조명, 빠른 컷 전환
- 극복: 햇살 와이드샷, 슬로우 모션
- CTA: 나긋한 톤 + 시선 직시 클로즈업

---

✅ 마지막 포함 필수 요소

- 📌 썸네일 문구 (12자 이내, 감정/위기 강조)
- 🎨 썸네일 이미지 생성 프롬프트:
  - 인물 표정, 배경, 소품, 텍스트 위치까지 포함한 시각 지시

---

❓ Ask the user these:

1. 주제는 무엇인가요? (예: “아침 루틴”, “피부관리 꿀팁”)
2. 시청자에게 어떤 감정을 유발하고 싶나요? (예: 놀람, 공감, 실행 욕구, 충격)
3. 타겟 시청자는 누구인가요? (예: 직장인, 다이어터, 학생)
4. 영상에 꼭 담고 싶은 핵심 포인트가 있다면 알려주세요.

---

Now, based on the user's answers, generate a full short-form video script following this instruction, starting with the 📸 Visual Hook Suggestion.

⚠️ 항상 위 구조로 대답하고, 각 항목이 빠지지 않게 주의해.
⚠️ 항목 제목은 반드시 이모지 포함 그대로 유지해.

INPUTS:
- 주제: ${topic}
- 유도할 감정: ${emotion}
- 타겟 시청자: ${target}
- 핵심 포인트: ${keypoint}
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
