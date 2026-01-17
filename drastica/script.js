// -----------------------------
// PARTICLE BACKGROUND
// -----------------------------
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 70; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.fillStyle = "#666";
    ctx.fillRect(p.x, p.y, 2, 2);

    particles.forEach(o => {
      let dx = p.x - o.x;
      let dy = p.y - o.y;
      let dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 120) {
        ctx.strokeStyle = "rgba(255,255,255,0.05)";
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(o.x, o.y);
        ctx.stroke();
      }
    });
  });

  requestAnimationFrame(draw);
}

draw();

// -----------------------------
// CHAT LOGIC (UI ONLY)
// -----------------------------
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = `message ${type}`;
  chatBox.appendChild(msg);

  if (type === "bot") {
    let i = 0;
    const interval = setInterval(() => {
      msg.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 25);
  } else {
    msg.textContent = text;
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.onclick = () => {
  if (!input.value.trim()) return;

  const userText = input.value;
  addMessage(userText, "user");

  input.value = "";

  fetch("http://127.0.0.1:8000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      session_id: "public-session-1",
      message: userText
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.reply) {
      addMessage(data.reply, "bot");
    } else {
      addMessage("No response from server.", "bot");
    }
  })
  .catch(err => {
    addMessage("Connection error. Is the server running?", "bot");
    console.error(err);
  });

};

// -----------------------------
// ENTER KEY SEND FIX
// -----------------------------
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // stops default behavior (like form submit)
    if (input.value.trim()) { // only send if input is not empty
      sendBtn.click();
    }
  }
});

// -----------------------------
// SESSION LIST (PUBLIC MOCK)
// -----------------------------
const sessionList = document.getElementById("sessionList");

renderSessions();

