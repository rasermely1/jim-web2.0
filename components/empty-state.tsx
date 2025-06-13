"use client"

import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"

const EXAMPLE_PROMPTS = [
  "How can I improve my productivity?",
  "Tell me a fun fact about space",
  "What are some healthy breakfast ideas?",
]

interface EmptyStateProps {
  onNewChat: (initialPrompt?: string) => void
}

export function EmptyState({ onNewChat }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="mb-6 bg-primary/10 p-6 rounded-full">
        <Bot className="h-16 w-16 text-primary" />
      </div>
      <h2 className="text-2xl font-bold mb-4">Start a new conversation</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Choose a prompt below or start a new chat with your own question
      </p>

      <div className="grid gap-3 w-full max-w-md mb-6">
        {EXAMPLE_PROMPTS.map((prompt, index) => (
          <Button
            key={index}
            variant="outline"
            className="justify-start text-left h-auto py-3 px-4 whitespace-normal"
            onClick={() => onNewChat(prompt)}
          >
            {prompt}
          </Button>
        ))}
      </div>

      <Button size="lg" onClick={() => onNewChat()}>
        Start New Chat
      </Button>
    </div>
  )
}
