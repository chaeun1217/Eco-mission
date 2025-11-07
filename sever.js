// server.js (백엔드 모의 서버)
import express from 'express';
const app = express();
app.use(express.json());

app.post('/api/challenge/complete', (req, res) => {
  console.log("✅ 챌린지 완료 요청 수신");
  res.json({ success: true, points: 10 });
});

app.post('/api/recycle/add', (req, res) => {
  console.log("♻️ 재활용 아이템 등록:", req.body.name);
  res.json({ success: true });
});

app.post('/api/carbon', (req, res) => {
  console.log("🌍 탄소 계산 데이터:", req.body);
  res.json({ success: true });
});

app.listen(3000, () => console.log("✅ GreenVerse 서버 실행 중: http://localhost:3000"));
