import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaComments, FaPaperPlane, FaTimes } from "react-icons/fa";

const QUICK_REPLIES = ["About", "Experience", "Projects", "Skills", "Contact"];

const getBotReply = (rawMessage) => {
  const message = rawMessage.toLowerCase().trim();

  if (/\b(hi|hello|hey|namaste|namaskar|hola)\b/.test(message)) {
    return "Hey! I'm Ashutosh's portfolio assistant. Ask me about his work, skills, projects, or how to get in touch.";
  }

  if (/\b(who|about|intro|yourself|ashutosh|rathor|rathore)\b/.test(message)) {
    return "Ashutosh Rathor is a Full Stack Developer who builds web and mobile apps with React, Next.js, React Native, Node.js, MongoDB, and WordPress. He focuses on responsive, user-friendly products that solve real problems.";
  }

  if (/\b(experience|experiences|job|company|intern|career)\b/.test(message)) {
    return "Recent experience:\n• Full Stack Developer at Binarama Private Limited (2025–2026) — Next.js, React Native, MERN; Radical Education and Neet Bhaiya.\n• Web Developer at SheWigs Healthcare (2024–2025) — WordPress themes and plugins.\n• Software Developer at Veloxn Private Limited (2023–2024) — responsive web apps.";
  }

  if (/\b(projects?|portfolio|demos?|github)\b/.test(message)) {
    return "Highlighted projects:\n• Radical Education — Next.js + TypeScript (radicaleducation.in)\n• Neet Bhaiya website & app — counselling for NEET aspirants\n• Shewings WooCommerce store and foundation site\n• Binarama IT solutions site\n• E-commerce React Native app\n\nScroll to the Projects section for live demos and code.";
  }

  if (/\b(skills?|tech|stack|react|node|wordpress|next)\b/.test(message)) {
    return "Core stack: HTML, CSS, JavaScript, React, Next.js, React Native, Tailwind, Node.js, Express, MongoDB, WordPress, PHP, Git/GitHub.\nAlso strong in problem solving, Agile teamwork, UI/UX, and performance.";
  }

  if (/\b(contact|email|phone|call|linkedin|hire|resume|cv|available)\b/.test(message)) {
    return "Happy to connect:\n📧 rathoreashutosh37@gmail.com\n📞 +91 8392877813\n🔗 linkedin.com/in/ashutosh-rathore-644213221/\n💻 github.com/Ashu27-arc\n\nUse the Hire Me button for the resume, or the Contact form on this page.";
  }

  return "I can help with Ashutosh's background, experience, projects, skills, or contact details. Try a quick reply below, or ask in your own words.";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I'm Ashutosh's assistant. Ask about projects, skills, experience, or how to hire him.",
    },
  ]);

  const listRef = useRef(null);
  const typingTimer = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
    };
  }, []);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    typingTimer.current = setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getBotReply(trimmed) }]);
      setIsTyping(false);
    }, 500);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[80] font-sans" style={{ transition: "none" }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="mb-3 flex h-[min(32rem,70vh)] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="flex items-center justify-between bg-blue-600 px-4 py-3 text-white">
              <div>
                <p className="text-sm font-semibold">Ashutosh Assistant</p>
                <p className="text-xs text-blue-100">Ask about work, skills, or hire</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 hover:bg-blue-500"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-gray-50 px-3 py-3 dark:bg-gray-950">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "rounded-br-md bg-blue-600 text-white"
                        : "rounded-bl-md bg-white text-gray-800 shadow-sm dark:bg-gray-800 dark:text-gray-100"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-white px-3 py-2 text-sm text-gray-500 shadow-sm dark:bg-gray-800 dark:text-gray-300">
                    Typing...
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-gray-200 bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-900">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => sendMessage(reply)}
                  className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-200"
                >
                  {reply}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-900"
            >
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your question..."
                className="flex-1 rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
                aria-label="Send message"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen((open) => !open)}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl text-white shadow-lg hover:bg-blue-700"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
