"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import type { Chat } from "@/types"
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

interface SidebarProps {
  chats: Chat[]
  activeChat: string | null
  onSelectChat: (chatId: string) => void
  onNewChat: () => void
}

export function Sidebar({ chats, activeChat, onSelectChat, onNewChat }: SidebarProps) {
  return (
    <ShadcnSidebar>
      <SidebarHeader className="p-4">
        <Button onClick={onNewChat} className="w-full" size="lg" variant="default">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {chats.map((chat) => (
            <SidebarMenuItem key={chat.id}>
              <SidebarMenuButton isActive={chat.id === activeChat} onClick={() => onSelectChat(chat.id)}>
                <span>{chat.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </ShadcnSidebar>
  )
}
