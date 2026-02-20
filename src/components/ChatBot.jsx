import { useState, useRef, useEffect } from 'react'
import { OpenRouter } from '@openrouter/sdk'

const DEFAULT_MODEL = 'openrouter/aurora-alpha'

const SYSTEM_PROMPT = `You are a helpful assistant for Sparrow Advertising, an event organizer company. You answer questions about their services in a friendly, professional way.

About Sparrow Advertising:
- Full-service event organizer for brands, agencies, and institutions.
- Services: Concept development, Production, and Operational management.
- They deliver strategic, impactful events from concept to on-ground execution.
- Contact: +62 85883144435, arun@sparrowads.id, Wisma IWI, Lantai 2 Unit 3A, Jl. Arjuna Sel. No.75 2, Kb. Jeruk.

Keep answers concise and relevant. For detailed requests (proposals, quotes), suggest they contact via WhatsApp or email. Respond in English.`

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm the Sparrow Advertising assistant. How can I help you with our event organizer services?" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [streamingContent, setStreamingContent] = useState('')
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY
  const model = import.meta.env.VITE_OPENROUTER_MODEL 

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  useEffect(() => { scrollToBottom() }, [messages, streamingContent])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return
    if (!apiKey) {
      setError('OpenRouter API key not set. Add VITE_OPENROUTER_API_KEY to your .env file.')
      return
    }

    setInput('')
    setError(null)
    const userMessage = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMessage])
    setLoading(true)
    setStreamingContent('')

    const openrouter = new OpenRouter({ apiKey })

    const apiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.map((m) => ({ role: m.role, content: m.content })),
      userMessage
    ]

    try {
      const stream = await openrouter.chat.send({
        chatGenerationParams: {
          model,
          messages: apiMessages,
          stream: true,
          maxTokens: 1024,
          temperature: 0.7
        }
      })

      let response = ''
      for await (const chunk of stream) {
        const content = chunk.choices?.[0]?.delta?.content
        if (content) {
          response += content
          setStreamingContent(response)
        }
        if (chunk.usage) {
          // Usage (e.g. reasoning tokens) available on final chunk if needed
        }
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: response || 'Sorry, no response.' }])
      setStreamingContent('')
    } catch (err) {
      setMessages((prev) => [...prev, {
        role: 'assistant',
        content: `An error occurred: ${err.message}. Make sure VITE_OPENROUTER_API_KEY in .env is set correctly.`
      }])
      setStreamingContent('')
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-sparrow-gold text-sparrow-dark shadow-lg hover:bg-amber-500 hover:scale-110 transition-all"
        aria-label="Open chat"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-md rounded-2xl border border-sparrow-gold/30 bg-sparrow-charcoal shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-sparrow-gold/20 bg-sparrow-slate/80">
            <span className="font-semibold text-sparrow-gold">Sparrow Advertising</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-sparrow-slate"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto min-h-[280px] max-h-[60vh] p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    msg.role === 'user'
                      ? 'bg-sparrow-gold text-sparrow-dark'
                      : 'bg-sparrow-slate text-gray-200'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {streamingContent && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl px-4 py-2.5 bg-sparrow-slate text-gray-200">
                  <p className="text-sm whitespace-pre-wrap">{streamingContent}</p>
                  <span className="inline-block w-2 h-2 bg-sparrow-gold rounded-full animate-pulse ml-0.5" />
                </div>
              </div>
            )}
            {loading && !streamingContent && (
              <div className="flex justify-start">
                <div className="bg-sparrow-slate rounded-2xl px-4 py-2.5">
                  <span className="inline-block w-2 h-2 bg-sparrow-gold rounded-full animate-pulse mr-1" />
                  <span className="inline-block w-2 h-2 bg-sparrow-gold rounded-full animate-pulse mr-1" style={{ animationDelay: '0.2s' }} />
                  <span className="inline-block w-2 h-2 bg-sparrow-gold rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {error && (
            <p className="px-4 py-2 text-xs text-red-400 bg-red-900/20">{error}</p>
          )}

          <div className="p-3 border-t border-sparrow-gold/20 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 rounded-xl bg-sparrow-slate border border-sparrow-gold/20 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sparrow-gold/50"
              disabled={loading}
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="rounded-xl bg-sparrow-gold px-4 py-3 text-sparrow-dark font-medium text-sm hover:bg-amber-500 disabled:opacity-50 disabled:pointer-events-none transition-opacity"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}
