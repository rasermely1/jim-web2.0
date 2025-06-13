import type { Chat } from "@/types"
import { MessageList } from "@/components/message-list"
import { ChatInput } from "@/components/chat-input"

interface ChatViewProps {
  chat: Chat
  onSendMessage: (content: string) => void
}

export function ChatView({ chat, onSendMessage }: ChatViewProps) {
  return (
    <>
      <div className="p-4 border-b bg-background">
        <h1 className="text-xl font-bold">{chat.title}</h1>
      </div>
      <MessageList messages={chat.messages} />
      <ChatInput onSendMessage={onSendMessage} />
    </>
  )
}
