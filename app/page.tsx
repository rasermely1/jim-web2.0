"use client"

import { useState } from "react"
import { ChatSidebar } from "@/components/chat-sidebar"
import { MainPane } from "@/components/main-pane"
import { SidebarInset } from "@/components/ui/sidebar"
import type { Chat } from "@/types"

export default function ChatApp() {
  const [chats, setChats] = useState<Chat[]>([])
  const [activeChat, setActiveChat] = useState<string | null>(null)

  const createNewChat = (initialPrompt?: string) => {
    const newChat: Chat = {
      id: `chat-${Date.now()}`,
      title: initialPrompt ? `Chat about ${initialPrompt.slice(0, 20)}...` : `New Chat ${chats.length + 1}`,
      messages: [],
    }

    setChats((prevChats) => [...prevChats, newChat])
    setActiveChat(newChat.id)

    if (initialPrompt) {
      setTimeout(() => {
        sendMessage(newChat.id, initialPrompt)
      }, 100)
    }
  }

  const sendMessage = (chatId: string, content: string) => {
    setChats((prevChats) =>
      prevChats.map((chat) => {
        if (chat.id === chatId) {
          const updatedMessages = [...chat.messages, { id: `msg-${Date.now()}`, content, role: "user" }]
          return { ...chat, messages: updatedMessages }
        }
        return chat
      }),
    )

    // Simulate bot response after 600ms
    setTimeout(() => {
      setChats((prevChats) =>
        prevChats.map((chat) => {
          if (chat.id === chatId) {
            const updatedMessages = [
              ...chat.messages,
              { id: `msg-${Date.now()}`, content: `You said: ${content}`, role: "bot" },
            ]
            return { ...chat, messages: updatedMessages }
          }
          return chat
        }),
      )
    }, 600)
  }

  return (
    <>
      <ChatSidebar chats={chats} activeChat={activeChat} onSelectChat={setActiveChat} onNewChat={createNewChat} />
      <SidebarInset>
        <MainPane chats={chats} activeChat={activeChat} onNewChat={createNewChat} onSendMessage={sendMessage} />
      </SidebarInset>
    </>
  )
}
