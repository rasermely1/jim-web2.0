import type { Chat } from "@/types"
import { EmptyState } from "@/components/empty-state"
import { ChatView } from "@/components/chat-view"

interface MainPaneProps {
  chats: Chat[]
  activeChat: string | null
  onNewChat: (initialPrompt?: string) => void
  onSendMessage: (chatId: string, content: string) => void
}

export function MainPane({ chats, activeChat, onNewChat, onSendMessage }: MainPaneProps) {
  const currentChat = chats.find((chat) => chat.id === activeChat)

  return (
    <div className="flex flex-col h-screen">
      {!currentChat ? (
        <EmptyState onNewChat={onNewChat} />
      ) : (
        <ChatView chat={currentChat} onSendMessage={(content) => onSendMessage(currentChat.id, content)} />
      )}
    </div>
  )
}
