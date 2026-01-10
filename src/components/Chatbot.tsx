import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, ChevronRight, Minimize2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ type: 'bot' | 'user'; text: string; options?: string[] }[]>([
        {
            type: 'bot',
            text: "Hi there! 👋 I'm your Avani Assistant.",
        },
        {
            type: 'bot',
            text: "How can I help you today?",
            options: ['View Services', 'Book a Consultation', 'Contact Support']
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const services = [
        "Web & App Development",
        "SEO and Content Marketing",
        "Social Media Marketing",
        "AI Solutions",
        "Podcast Production",
        "Financial Consulting"
    ];

    const handleOptionClick = async (option: string) => {
        // Add user message
        setMessages(prev => [...prev, { type: 'user', text: option }]);
        setIsTyping(true);

        // Simulate delay
        setTimeout(() => {
            setIsTyping(false);

            if (option === 'View Services') {
                setMessages(prev => [...prev, {
                    type: 'bot',
                    text: "Here are the services we offer. Select one to proceed with booking:",
                    options: services
                }]);
            } else if (services.includes(option)) {
                // Map service names to IDs
                const serviceIdMap: { [key: string]: string } = {
                    "Web & App Development": "web-development",
                    "SEO and Content Marketing": "seo-content",
                    "Social Media Marketing": "social-media",
                    "AI Solutions": "ai-solutions",
                    "Podcast Production": "podcast-production",
                    "Financial Consulting": "financial-consulting"
                };

                const serviceId = serviceIdMap[option];

                setMessages(prev => [...prev, {
                    type: 'bot',
                    text: `Great choice! I'm taking you to the ${option} section.`
                }]);
                setTimeout(() => {
                    setIsOpen(false);
                    if (serviceId) {
                        navigate('/services', { state: { scrollTo: serviceId } });
                    } else {
                        navigate('/services');
                    }
                }, 1500);
            } else if (option === 'Book a Consultation') {
                setMessages(prev => [...prev, {
                    type: 'bot',
                    text: "Sure! Let's get you connected. Redirecting to our contact page..."
                }]);
                setTimeout(() => {
                    setIsOpen(false);
                    navigate('/contact');
                }, 1500);
            } else if (option === 'Contact Support') {
                setMessages(prev => [...prev, {
                    type: 'bot',
                    text: "You can reach us at +91 9253625099 or email kp@avanienterprises.in."
                }]);
            }
        }, 1000);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-20 right-4 md:right-6 w-[calc(100%-2rem)] md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 flex flex-col mb-4 md:mb-0"
                        style={{ maxHeight: 'calc(100vh - 120px)', height: 'min(500px, 70vh)' }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between text-white">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Bot size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">Avani Assistant</h3>
                                    <p className="text-xs text-blue-100 flex items-center">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <Minimize2 size={18} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.type === 'bot' && (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs mr-2 flex-shrink-0 mt-1">
                                            <Bot size={14} />
                                        </div>
                                    )}
                                    <div className={`max-w-[80%] space-y-2`}>
                                        <div className={`p-3 rounded-2xl text-sm ${msg.type === 'user'
                                            ? 'bg-blue-600 text-white rounded-tr-none'
                                            : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                                            }`}>
                                            {msg.text}
                                        </div>
                                        {msg.options && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {msg.options.map((opt, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => handleOptionClick(opt)}
                                                        className="text-xs bg-white border border-blue-200 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-colors shadow-sm"
                                                    >
                                                        {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs mr-2 flex-shrink-0 mt-1">
                                        <Bot size={14} />
                                    </div>
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 w-16">
                                        <div className="flex space-x-1 justify-center items-center h-full">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area (Mock) */}
                        <div className="p-3 bg-white border-t border-gray-100">
                            <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
                                <input
                                    type="text"
                                    placeholder="Select an option above..."
                                    disabled
                                    className="flex-1 bg-transparent text-sm focus:outline-none text-gray-500 cursor-not-allowed"
                                />
                                <Send size={16} className="text-gray-400" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-4 md:right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white z-50 hover:shadow-xl transition-all duration-300 transform-gpu"
                style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
            >
                <AnimatePresence mode='wait'>
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="relative">
                                <Bot size={28} />
                                <motion.div
                                    animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    className="absolute -top-1 -right-2"
                                >
                                    <Sparkles size={12} className="text-yellow-200" />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Dot */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="w-full h-full rounded-full bg-red-500 animate-ping opacity-75 absolute"></span>
                    </span>
                )}
            </motion.button>
        </>
    );
};

export default Chatbot;
