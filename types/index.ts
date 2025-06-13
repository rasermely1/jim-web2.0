export interface Message {
  id: string
  content: string
  role: "user" | "bot"
}

export interface Chat {
  id: string
  title: string
  messages: Message[]
}
