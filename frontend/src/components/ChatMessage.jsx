import { MarkdownDisplay } from "./MarkdownDisplay";

export const ChatMessage = ({ role, message: text }) => {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`bg-slate-700/80 px-5 py-3 break-words text-gray-300 ${
          isUser ? "max-w-[90%] rounded-3xl" : "max-w-full bg-transparent"
        }`}
      >
        {isUser ? (
          <div className="whitespace-pre-wrap">{text}</div>
        ) : (
          <MarkdownDisplay markdownText={text} />
        )}
      </div>
    </div>
  );
};
