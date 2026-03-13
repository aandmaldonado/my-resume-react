import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from "@/lib/utils";

interface ChatMessageProps {
    role: "user" | "assistant";
    content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
    return (
        <div
            className={cn(
                "mb-4 flex w-full",
                role === "user" ? "justify-end" : "justify-start"
            )}
        >
            <div
                className={cn(
                    "max-w-[90%] rounded-2xl px-4 py-2 text-sm shadow-sm",
                    role === "user"
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-tl-none border border-zinc-200 dark:border-zinc-700"
                )}
            >
                {role === "user" ? (
                    content
                ) : (
                    <div className="prose prose-sm dark:prose-invert max-w-none break-words">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
                                ul: ({ children }) => <ul className="list-disc pl-4 mb-2 last:mb-0 space-y-1">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 last:mb-0 space-y-1">{children}</ol>,
                                li: ({ children }) => <li className="marker:text-zinc-400">{children}</li>,
                                strong: ({ children }) => <strong className="font-bold text-blue-600 dark:text-blue-400">{children}</strong>,
                                a: ({ href, children }) => (
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        {children}
                                    </a>
                                ),
                                h1: ({ children }) => <h1 className="text-base font-bold mb-2">{children}</h1>,
                                h2: ({ children }) => <h2 className="text-base font-semibold mb-1">{children}</h2>,
                                code: ({ children }) => <code className="bg-zinc-200 dark:bg-zinc-700 rounded px-1 py-0.5 text-xs font-mono">{children}</code>,
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    );
}
