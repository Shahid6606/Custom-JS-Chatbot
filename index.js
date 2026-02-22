    const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");

    // Demo Bot Replies (Array of Objects)
    const demoReplies = [
      { question: "hi", answer: "Hello! 👋 How can I assist you today?" },
      { question: "how are you", answer: "I'm just a bot, but I'm working perfectly! 😄" },
      { question: "what is your name", answer: "I'm Shahid Malik! Your friendly assistant 🤖" },
      { question: "who created you", answer: "I was created by Shahid Malik, a Full-Stack Web Developer. 💻" },
      { question: "where are you from", answer: "I'm from Pakistan 🇵🇰, proudly coded by Shahid." },
      { question: "what technologies do you use", answer: "I use React, PHP, MySQL, JavaScript, Tailwind, Node.js, and more!" },
      { question: "how can i contact you", answer: "You can contact Shahid Malik via his websites: https://www.shahidmalik.site and https://www.techcoder.site" },
      { question: "do you offer web development", answer: "Yes! Shahid Malik offers full-stack web development services including React, PHP, and MySQL." },
      { question: "thanks", answer: "You're welcome! 😊" },
      { question: "bye", answer: "Goodbye! Have a great day! 👋" },
      { question: "default", answer: "I'm not sure how to respond to that, but I'm learning every day!" }
    ];

    function addMessage(content, sender = "user") {
      const msg = document.createElement("div");
      msg.className = `message ${sender}`;
      msg.innerHTML = `<div class="bubble">${content}</div>`;
      chatBox.appendChild(msg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotReply(message) {
      const msg = message.toLowerCase();
      const found = demoReplies.find(item => msg.includes(item.question));
      return found ? found.answer : demoReplies.find(item => item.question === "default").answer;
    }

    function sendMessage() {
      const message = userInput.value.trim();
      if (!message) return;

      addMessage(message, "user");
      userInput.value = "";

      // Simulate bot "typing..."
      const loadingMsg = document.createElement("div");
      loadingMsg.className = "message bot";
      loadingMsg.innerHTML = `<div class="bubble">Typing...</div>`;
      chatBox.appendChild(loadingMsg);
      chatBox.scrollTop = chatBox.scrollHeight;

      // Respond after delay
      setTimeout(() => {
        chatBox.removeChild(loadingMsg);
        const reply = getBotReply(message);
        addMessage(reply, "bot");
      }, 800);
    }

    // Send message on Enter key
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendMessage();
    });