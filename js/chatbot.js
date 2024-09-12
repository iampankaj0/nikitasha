const chatbot_btn = document.querySelector(".chatbot_btn");
const closeChatBtn = document.querySelector(".closeChatBtn");
const chatbotContent = document.querySelector(".chatbotContent");

const handleChatbot = () => {
  const isClassPresent = chatbotContent.classList.contains("active");
  if (isClassPresent) {
    chatbotContent.classList.remove("active");
  } else {
    chatbotContent.classList.add("active");
  }
};

chatbot_btn.addEventListener("click", handleChatbot);
closeChatBtn.addEventListener("click", handleChatbot);
