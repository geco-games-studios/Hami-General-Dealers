"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, MessageCircle } from "lucide-react"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help you learn about Hami General Dealers. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    "Tell me about Hami",
    "What products do you offer?",
    "Where are you located?",
    "How can I contact you?",
  ]

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate bot response delay
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        "tell me about hami":
          "Hami General Dealers is a trusted agricultural supplier established in 2015. We provide quality inputs and services to empower Zambian farmers.",
        "what products do you offer":
          "We offer seeds, fertilizers, pest control solutions, farming tools, crop advisory services, and irrigation support.",
        "where are you located":
          "We have locations in Mazabuka, Chirundu, Lusaka, Kafue, Siavonga, and agro shops in Shikoswe, Chirundu, and Kafue Town.",
        "how can i contact you": "You can reach us through our contact form or visit any of our locations nationwide.",
      }

      const lowerMessage = message.toLowerCase()
      let botResponse = "Thank you for your interest! Feel free to ask more about our products and services."

      for (const [key, value] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
          botResponse = value
          break
        }
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 500)
  }

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <MessageCircle className="w-8 h-8 group-hover:animate-bounce" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-card rounded-lg shadow-2xl flex flex-col border-2 border-primary/30 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Hami Assistant</h3>
              <p className="text-sm opacity-90">Always here to help</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-secondary text-secondary-foreground rounded-bl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length === 1 && (
            <div className="px-4 py-2 space-y-2 border-t border-border">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(reply)}
                  className="w-full text-left text-sm p-2 bg-muted hover:bg-primary/20 rounded transition-colors text-foreground hover:text-primary"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input area */}
          <div className="border-t border-border p-4 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:border-primary text-foreground"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-lg transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
