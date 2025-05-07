import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Hello! How can I help you today with information about JSS Polytechnic?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const { toast } = useToast();

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    try {
      const response = await apiRequest('POST', '/api/chatbot', { 
        message: userMessage.text
      });
      
      const data = await response.json();
      
      // Add bot response
      setMessages(prev => [...prev, {
        text: data.message,
        sender: 'bot',
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Failed to get chatbot response:', error);
      toast({
        title: t('chatbot.errorTitle'),
        description: t('chatbot.errorMessage'),
        variant: "destructive"
      });
      
      // Add fallback bot response
      setMessages(prev => [...prev, {
        text: t('chatbot.fallbackMessage'),
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label={t('chatbot.toggle')}
        onClick={toggleChatbot}
      >
        <MessageCircle size={24} />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl overflow-hidden w-80 md:w-96 max-h-[500px] flex flex-col">
          <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
            <h3 className="font-bold">{t('chatbot.title')}</h3>
            <button 
              className="text-primary-foreground/80 hover:text-primary-foreground"
              aria-label={t('chatbot.close')}
              onClick={toggleChatbot}
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`flex items-start gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-primary-foreground
                    ${message.sender === 'bot' ? 'bg-primary' : 'bg-gray-200 text-gray-600'}`}
                >
                  {message.sender === 'bot' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 8V4H8"/>
                      <rect x="2" y="8" width="20" height="12" rx="2"/>
                      <path d="M6 12h.01"/>
                      <path d="M18 12h.01"/>
                      <path d="M10 16h4"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  )}
                </div>
                <div 
                  className={`rounded-lg p-3 max-w-[80%] ${
                    message.sender === 'bot' 
                      ? 'bg-primary/10 text-gray-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8V4H8"/>
                    <rect x="2" y="8" width="20" height="12" rx="2"/>
                    <path d="M6 12h.01"/>
                    <path d="M18 12h.01"/>
                    <path d="M10 16h4"/>
                  </svg>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%] flex">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse mx-1"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            )}
          </div>
          
          <form className="border-t p-3" onSubmit={sendMessage}>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder={t('chatbot.inputPlaceholder')}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                disabled={isLoading}
              />
              <button 
                type="submit"
                className="bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary/90 disabled:opacity-50"
                aria-label={t('chatbot.send')}
                disabled={isLoading || !inputMessage.trim()}
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
