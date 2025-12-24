import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface MarkdownRendererProps {
  content: string;
}

const CodeBlock = ({ language, children }: { language: string; children: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-muted/80 text-muted-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted hover:text-foreground"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="absolute top-2 left-3 text-xs text-muted-foreground font-mono uppercase">
        {language}
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: "0.75rem",
          padding: "2.5rem 1rem 1rem",
          background: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
          fontSize: "0.875rem",
        }}
        showLineNumbers
        lineNumberStyle={{
          minWidth: "2.5em",
          paddingRight: "1em",
          color: "hsl(var(--muted-foreground) / 0.4)",
          userSelect: "none",
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const components = useMemo(
    () => ({
      code({ className, children, ...props }: any) {
        const match = /language-(\w+)/.exec(className || "");
        const isInline = !match;
        
        if (isInline) {
          return (
            <code className="px-1.5 py-0.5 rounded bg-muted text-primary text-sm font-mono" {...props}>
              {children}
            </code>
          );
        }
        
        return (
          <CodeBlock language={match[1]}>
            {String(children).replace(/\n$/, "")}
          </CodeBlock>
        );
      },
      h2({ children }: any) {
        const id = String(children).toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
        return (
          <h2 id={id} className="scroll-mt-24 text-2xl font-display font-semibold text-foreground mt-12 mb-4">
            {children}
          </h2>
        );
      },
      h3({ children }: any) {
        const id = String(children).toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
        return (
          <h3 id={id} className="scroll-mt-24 text-xl font-display font-semibold text-foreground mt-8 mb-3">
            {children}
          </h3>
        );
      },
      p({ children }: any) {
        return <p className="text-body leading-relaxed mb-4">{children}</p>;
      },
      a({ href, children }: any) {
        return (
          <a 
            href={href} 
            className="text-primary hover:underline"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        );
      },
      ul({ children }: any) {
        return <ul className="list-disc list-inside space-y-2 mb-4 text-body">{children}</ul>;
      },
      ol({ children }: any) {
        return <ol className="list-decimal list-inside space-y-2 mb-4 text-body">{children}</ol>;
      },
      blockquote({ children }: any) {
        return (
          <blockquote className="border-l-4 border-primary bg-muted/30 rounded-r-lg pl-4 pr-4 py-3 my-6 italic text-muted-foreground">
            {children}
          </blockquote>
        );
      },
      strong({ children }: any) {
        return <strong className="font-semibold text-foreground">{children}</strong>;
      },
    }),
    []
  );

  return (
    <div className="prose-custom">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
