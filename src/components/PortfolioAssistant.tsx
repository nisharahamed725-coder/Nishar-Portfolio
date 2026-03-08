"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, Bot, Sparkles, Minimize2, X } from "lucide-react";

interface Message {
  id: string;
  type: "bot" | "user";
  text: string;
  timestamp: Date;
}

const PortfolioAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hi 👋 I'm Nishar Ahamed's portfolio assistant. You can ask me about his education, skills, or projects.",
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const skillsData = {
    programming: ["C", "C++", "Java"],
    web: ["HTML"],
    tools: ["VS Code"],
  };

  const educationData = [
    {
      degree: "BCA (Bachelor of Computer Applications)",
      school: "EGS Pillay Arts and Science College",
      year: "2025 - Present",
    },
    {
      degree: "HSC",
      school: "GHSS Enangudi, Nagapattinam",
      year: "2024",
    },
    {
      degree: "SSLC",
      school: "GHSS Enangudi, Nagapattinam",
      year: "2022",
    },
  ];

  const projectData = [
    {
      name: "Student Portfolio Website",
      desc: "A personal portfolio website built to showcase my skills, education, and projects.",
      tech: "HTML, CSS",
    },
  
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (input: string): string => {
    const msg = input.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hello! 👋 You can ask about Nishar's skills, education, or projects.";
    }

    if (msg.includes("about")) {
      return "Nishar Ahamed is a BCA student at EGS Pillay Arts and Science College. He is passionate about programming and learning new technologies.";
    }

    if (msg.includes("skill")) {
      return `Nishar's skills include Programming Languages: ${skillsData.programming.join(
        ", "
      )} | Web Development: ${skillsData.web.join(
        ", "
      )} | Tools: ${skillsData.tools.join(", ")}`;
    }

    if (msg.includes("education") || msg.includes("study")) {
      const edu = educationData
        .map((e) => `${e.degree} - ${e.school} (${e.year})`)
        .join(" | ");
      return `Nishar's education: ${edu}`;
    }

    if (msg.includes("project")) {
      const proj = projectData
        .map((p) => `${p.name} (${p.tech})`)
        .join(" | ");
      return `Nishar has worked on: ${proj}`;
    }

 if (msg.includes("contact")) {
  return "You can contact Nishar Ahamed through the following details:\n\n📞 Phone: +91-9791643914\n📧 Email: @nisharahamed725@gmail.com\n\nYou can also connect through the contact section of this portfolio.";
}

    return "Try asking about Nishar's skills, education, or projects.";
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(userMsg.text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const quickAsks = ["Education", "Skills", "Projects", "Contact"];

  const handleQuickAsk = (text: string) => {
    setInputValue(text);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-violet-600 text-white rounded-full shadow-lg"
      >
        <MessageSquare />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 right-6 w-[350px] h-[520px] bg-slate-900 border border-slate-700 rounded-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center gap-2 text-white">
                <Bot />
                <span>Assistant</span>
              </div>

              <button onClick={() => setIsOpen(false)}>
                <Minimize2 />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      msg.type === "user"
                        ? "bg-violet-600 text-white"
                        : "bg-slate-800 text-slate-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && <div className="text-slate-400">Typing...</div>}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick buttons */}
            <div className="flex gap-2 px-3 pb-2">
              {quickAsks.map((q) => (
                <button
                  key={q}
                  onClick={() => handleQuickAsk(q)}
                  className="text-xs px-3 py-1 bg-slate-800 rounded-full text-slate-300"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSendMessage}
              className="flex gap-2 p-3 border-t border-slate-700"
            >
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm"
              />

              <button
                type="submit"
                className="bg-violet-600 text-white p-2 rounded-lg"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioAssistant;