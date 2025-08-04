import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Navbar } from "./components/Navbar";
import { MainSection } from "./components/MainSection";
import { HeroSection } from "./components/HeroSection";
import { FooterSection } from "./components/FooterSection";

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showInputs, setShowInputs] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);

  const msgEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = async (customText) => {
    const Finalinput = customText ?? input;
    if (!Finalinput.trim()) return;

    const userMessage = {
      role: "user",
      text: Finalinput,
      id: uuidv4(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsWaiting(true);

    const API_URL = import.meta.env.VITE_API_URL;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.post(`${API_URL}/api/chat`, {
        message: Finalinput,
      });
      const botReply = {
        role: "bot",
        text: response.data.reply,
        id: uuidv4(),
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      console.error("Error communicating with the backend:", error);
      const errorMessage = {
        role: "bot",
        text: "Sorry, something went wrong!",
        id: uuidv4(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsWaiting(false);
    }

    if (!customText) {
      setInput("");
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen w-full flex-col items-center bg-[#131313] px-2 text-white">
      <Navbar />

      {/* Chat Area */}

      <MainSection
        showInputs={showInputs}
        messages={messages}
        msgEndRef={msgEndRef}
        isWaiting={isWaiting}
      />

      {/* Hero Section */}
      <HeroSection
        showInputs={showInputs}
        setShowInputs={setShowInputs}
        sendMessage={sendMessage}
      />

      <FooterSection
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        setShowInputs={setShowInputs}
        inputRef={inputRef}
      />
    </div>
  );
};
