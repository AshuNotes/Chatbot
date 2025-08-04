import { ArrowUp } from "react-feather";

export const FooterSection = ({
  input,
  setInput,
  sendMessage,
  setShowInputs,
  inputRef,
}) => {
  const handleOnKeydown = (e) => {
    if (!input.trim()) return;
    if (e.key === "Enter") {
      setInput("");
      sendMessage();
      setShowInputs(false);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <footer className="bottom-4 mx-auto mt-4 flex h-12 w-full max-w-3xl items-center overflow-hidden rounded-full bg-[#1a1d1e] text-base text-white md:h-12 md:text-lg">
      <input
        className="grow rounded-l-full bg-[#1a1d1e] px-3 text-white outline-none md:px-5"
        value={input}
        ref={inputRef}
        onChange={handleChange}
        type="text"
        name="text"
        id="text"
        onKeyDown={handleOnKeydown}
        placeholder="Type your message..."
      />
      <button
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-r-full bg-[#333538]"
        onClick={() => {
          if (!input.trim()) return;
          else {
            sendMessage();
            setShowInputs(false);
            setInput("");
            inputRef.current?.blur();
            setTimeout(() => {
              window.scrollTo(0, 100);
            }, 100);
          }
        }}
      >
        <ArrowUp size={30} />
      </button>
    </footer>
  );
};
