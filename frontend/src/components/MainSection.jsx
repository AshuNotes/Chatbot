import { ChatMessage } from "./ChatMessage";

export const MainSection = ({ showInputs, messages, msgEndRef, isWaiting }) => {
  return (
    <main
      className={`flex h-[80%] w-full max-w-5xl bg-[#131313] py-5 md:py-0 ${
        showInputs ? "hidden" : ""
      }`}
    >
      <div className="scrollbar-none my-3 flex-1 space-y-4 overflow-x-hidden overflow-y-auto px-2 md:px-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} role={msg.role} message={msg.text} />
        ))}

        {isWaiting && (
          <div className="flex animate-pulse flex-col items-start justify-start space-y-5 transition-colors duration-300">
            <div className="h-5 w-[40%] rounded bg-gradient-to-r from-blue-800 to-cyan-400" />
            <div className="h-5 w-full rounded bg-gradient-to-r from-blue-800 to-cyan-400" />
            <div className="h-5 w-full rounded bg-gradient-to-r from-blue-800 to-cyan-400" />
          </div>
        )}
        {messages[messages.length - 1]?.role === "user" && (
          <div className="mb-72" ref={msgEndRef} />
        )}
      </div>
    </main>
  );
};
