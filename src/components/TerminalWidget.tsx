"use client";

import { useState } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, HelpCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function TerminalWidget() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: "whoami",
      output: PORTFOLIO_DATA.terminalCommands.whoami,
    },
    {
      cmd: "status",
      output: PORTFOLIO_DATA.terminalCommands.status,
    },
  ]);

  const handleRunCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let output = "";
    if (cleanCmd in PORTFOLIO_DATA.terminalCommands) {
      output = PORTFOLIO_DATA.terminalCommands[cleanCmd as keyof typeof PORTFOLIO_DATA.terminalCommands];
    } else if (cleanCmd === "help") {
      output = "Available commands: whoami, stack, projects, contact, status, clear";
    } else {
      output = `Command not recognized: '${cleanCmd}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: cleanCmd, output }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleRunCommand(inputVal);
    }
  };

  return (
    <div className="bento-card rounded-2xl overflow-hidden shadow-xl border border-slate-200 font-mono text-xs text-zinc-300">
      {/* macOS Top Bar */}
      <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          <span className="ml-2 text-slate-600 font-sans text-xs font-medium flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-red-500" />
            tanisha@portfolio: ~
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleRunCommand("clear")}
            className="p-1 hover:text-slate-900 text-slate-400 transition-colors"
            title="Clear Terminal"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output & Input Area */}
      <div className="p-4 sm:p-5 space-y-3 max-h-72 overflow-y-auto bg-slate-950">
        <div className="text-zinc-500 text-[11px]">
          Type a command or click quick prompts below. (Try <span className="text-amber-400">stack</span>, <span className="text-cyan-400">projects</span>, <span className="text-emerald-400">whoami</span>)
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center space-x-2 text-amber-400">
              <span className="text-cyan-400">tanisha@dev:~$</span>
              <span className="font-bold">{item.cmd}</span>
            </div>
            <pre className="text-zinc-300 whitespace-pre-wrap leading-relaxed font-mono pl-4 border-l border-zinc-800/80 text-[11px]">
              {item.output}
            </pre>
          </div>
        ))}

        {/* Input Prompt */}
        <div className="flex items-center space-x-2 pt-1 text-cyan-400">
          <span>tanisha@dev:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help'..."
            className="bg-transparent text-white font-mono outline-none flex-1 placeholder-zinc-600 text-xs"
          />
          <button
            onClick={() => handleRunCommand(inputVal)}
            className="text-zinc-500 hover:text-cyan-400 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Command Buttons */}
      <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center gap-2">
        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans font-bold mr-1">Run:</span>
        {["whoami", "stack", "projects", "contact", "status"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleRunCommand(cmd)}
            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-cyan-300 text-[11px] font-mono transition-colors border border-slate-700/60"
          >
            ${cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
