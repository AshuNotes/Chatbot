import { Tool, Compass, Mail, Clock } from "react-feather";

export const HeroSection = ({ showInputs, setShowInputs, sendMessage }) => {
  const heroSec = [
    { icon: Mail, text: "Help me write an out-of-office email" },
    {
      icon: Clock,
      text: "Give me tips on helping kids finish their homework on time",
    },
    { icon: Compass, text: "Give me phrases to learn a new language" },
    { icon: Tool, text: "Show me how to build something by hand" },
  ];

  return (
    <main
      className={`grid h-[80%] w-full max-w-5xl place-items-center bg-[#131313] py-5 md:py-10 ${
        showInputs ? "" : "hidden"
      }`}
    >
      <div className="w-full pl-5 md:pl-28">
        <h1 className="bg-gradient-to-r from-blue-800 to-cyan-300 bg-clip-text px-2 text-start text-3xl leading-[1.5] text-transparent md:text-6xl">
          Hello, There!
        </h1>
        <h1 className="px-2 text-start text-3xl leading-[1.5] text-[hsl(300,1%,50%)] md:text-6xl">
          How can I help you today?
        </h1>
      </div>

      <div className="grid w-full grid-cols-2 gap-4 px-4 md:w-fit md:grid-cols-4">
        {heroSec.map((elem, idx) => {
          const Icon = elem.icon;
          return (
            <button
              key={idx}
              className="group flex h-44 w-full max-w-48 cursor-pointer flex-col items-center justify-between space-y-4 rounded-md bg-[#1a1d1e] p-5 text-sm transition-colors duration-300 hover:bg-[#242629] md:h-48 md:w-60 md:p-5"
              onClick={() => {
                setShowInputs(false);
                sendMessage(elem.text);
              }}
            >
              <div className="text-start transition-colors duration-300 group-hover:text-sky-500">
                {elem.text}
              </div>
              <div className="ml-auto flex rounded-full bg-[#333538] p-2">
                <Icon className="size-7 transition-colors duration-300 group-hover:stroke-sky-500" />
              </div>
            </button>
          );
        })}
      </div>
    </main>
  );
};
