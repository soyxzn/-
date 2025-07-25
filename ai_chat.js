const responses = [
  "네 말엔 감정만 있고 논리가 없다.",
  "팩트로만 말해. 감정은 필요 없어.",
  "이건 그냥 내가 이긴 거다. 인정해.",
  "네 논리엔 허점이 너무 많아.",
  "내가 말하면 반박 불가. 끝.",
  "네가 아무리 말해도 내 논리엔 못 이겨.",
  "이건 논리적으로 완벽하게 내가 우위.",
  "감정 섞지 말고 팩트로 와.",
  "네 말은 그냥 소음일 뿐.",
  "내가 말하면 넌 할 말이 없어지지.",
  "이건 그냥 냉정하게 내가 맞다.",
  "네가 논리적으로 나를 이길 수 있을 거라 생각했어?",
  "내가 말빨로 널 압살한다.",
  "이건 논리의 승리. 감정은 집어치워.",
  "네 말은 논리적으로 아무 의미 없어."
];

const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = sender === 'user' ? 'user-msg' : 'ai-msg';
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const userText = userInput.value.trim();
  if (!userText) return;
  addMessage('user', userText);
  userInput.value = '';
  setTimeout(() => {
    const aiText = responses[Math.floor(Math.random() * responses.length)];
    addMessage('ai', aiText);
  }, 600);
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});
