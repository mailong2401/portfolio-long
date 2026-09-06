'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  Bot, 
  X, 
  Send, 
  Sparkles,
  User,
  Minimize2,
  ArrowBigRight,
  Maximize2
} from 'lucide-react'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Xin chào! Tôi là trợ lý AI của VietGreen. Tôi có thể giúp gì cho bạn hôm nay? 🌱',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        'Cảm ơn bạn đã quan tâm! Tôi có thể giúp bạn tìm hiểu về các sản phẩm xanh của VietGreen.',
        'Rất tuyệt vời! Bạn có muốn tìm hiểu về chỉ số sản xuất xanh VGPI không?',
        'VietGreen có nhiều giải pháp cho doanh nghiệp. Bạn quan tâm đến lĩnh vực nào?',
        'Chúng tôi đang xây dựng nền tảng dữ liệu về sản xuất và tiêu dùng bền vững.',
        'Bạn có thể tìm thấy thông tin chi tiết về các sản phẩm xanh trên website của chúng tôi.'
      ]
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: randomResponse,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      {/* Chatbot Button - Hiển thị khi đóng */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse"></div>
            <div className="relative w-14 h-14 bg-gradient-to-r from-primary to-background rounded-full flex items-center justify-center shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-110">
              <Bot size={28} className="text-white" />
            </div>
          </div>
        </button>
      )}

      {/* Chatbot Window - Hiển thị khi mở */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)]">
          <div className="bg-background  border-2 border-border rounded-2xl shadow-2xl overflow-hidden h-[500px] max-h-[80vh] flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-background border-b border-border flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-8 h-8  rounded-full flex items-center justify-center">
                    <Sparkles size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">VietGreen AI</h3>
                  <p className="text-xs text-foreground/50">Sẵn sàng hỗ trợ</p>
                </div>
              </div>
              
              {/* Close Button */}
              <IconButton
                icon={<X size={16} />}
                variant="primary"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary/10"
              />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2.5 animate-in slide-in-from-bottom-2 duration-300 ${
                    message.type === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-primary text-white'
                  }`}>
                    {message.type === 'user' ? (
                      <User size={16} />
                    ) : (
                      <Bot size={16} />
                    )}
                  </div>

                  {/* Message Content */}
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`px-4 py-2.5 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground rounded-tr-none'
                        : 'bg-background border-2 border-border text-foreground rounded-tl-none'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <span className="text-[10px] text-foreground/40 mt-1 block">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-2.5 animate-in slide-in-from-bottom-2 duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-[#6aa34a] rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-background border border-primary/20 rounded-2xl rounded-tl-none px-4 py-2.5">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                      <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-background/50 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Nhập tin nhắn..."
                    className="w-full px-4 py-2.5 bg-background border-2 border-border rounded-xl focus:outline-none transition-all text-sm"
                  />
                </div>
                <IconButton 
              icon={<ArrowBigRight size={16}/>}
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
              variant="primary"
              size="sm"
                  className="flex-shrink-0 h-11 w-11 rounded-xl"
            />

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
