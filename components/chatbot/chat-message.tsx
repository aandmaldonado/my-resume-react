import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from "@/lib/utils";

interface ChatMessageProps {
    role: "user" | "assistant";
    content: string;
    fontSize?: "sm" | "md" | "lg";
    isAlternate?: boolean;
    highContrast?: boolean;
    botTheme?: "light" | "dark";
}

export function ChatMessage({ 
    role, 
    content, 
    fontSize = "md", 
    isAlternate = false, 
    highContrast = false,
    botTheme = "dark" 
}: ChatMessageProps) {
    const isDark = botTheme === "dark";
    const fontSizeClasses = {
        sm: "text-xs px-3 py-1.5",
        md: "text-sm px-4 py-2",
        lg: "text-base px-5 py-3"
    };

    return (
        <div
            className={cn(
                "mb-4 flex w-full",
                role === "user" ? "justify-end" : "justify-start"
            )}
        >
            <div
                className={cn(
                    "max-w-[90%] rounded-2xl shadow-sm transition-all duration-200",
                    fontSizeClasses[fontSize],
                    role === "user"
                        ? cn(
                            "bg-blue-600 text-white rounded-tr-none",
                            highContrast && cn(
                                "border-2",
                                isDark ? "bg-white text-black border-zinc-100" : "bg-black text-white border-zinc-900"
                            )
                        )
                        : cn(
                            "rounded-tl-none border",
                            highContrast 
                                ? cn("border-2", isDark ? "bg-black text-white border-zinc-100" : "bg-white text-black border-zinc-900")
                                : isAlternate 
                                    ? (isDark ? "bg-zinc-900 border-zinc-800 text-zinc-100" : "bg-white border-zinc-200 text-zinc-900") 
                                    : (isDark ? "bg-zinc-800 border-zinc-700 text-zinc-100" : "bg-zinc-100 border-zinc-200 text-zinc-900")
                          )
                )}
            >
                {role === "user" ? (
                    content
                ) : (
                    <div className={cn(
                        "prose max-w-none break-words",
                        isDark ? "prose-invert" : "",
                        fontSize === "sm" ? "prose-sm" : fontSize === "lg" ? "prose-lg" : "prose-base"
                    )}>
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
                                        className={cn(
                                            "hover:underline",
                                            isDark ? "text-blue-400" : "text-blue-600"
                                        )}
                                    >
                                        {children}
                                    </a>
                                ),
                                h1: ({ children }) => <h1 className={cn("text-base font-bold mb-2", isDark ? "text-white" : "text-zinc-900")}>{children}</h1>,
                                h2: ({ children }) => <h2 className={cn("text-base font-semibold mb-1", isDark ? "text-white" : "text-zinc-900")}>{children}</h2>,
                                code: ({ children }) => <code className={cn("rounded px-1 py-0.5 text-xs font-mono", isDark ? "bg-zinc-700" : "bg-zinc-200")}>{children}</code>,
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
