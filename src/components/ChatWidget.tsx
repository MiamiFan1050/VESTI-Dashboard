import React, { useEffect } from 'react';

export const ChatWidget: React.FC = () => {
  useEffect(() => {
    // Load n8n chat CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load and initialize n8n chat
    const loadChat = async () => {
      try {
        const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');
        
        createChat({
          webhookUrl: 'https://angeloai.app.n8n.cloud/webhook/46ea0fc1-9d73-4c5a-9aa6-cd5871878dd6/chat',
          mode: 'window',
          target: '#n8n-chat-container',
          initialMessages: [
            'Hi there! 👋',
            'I\'m Vesti AI. How can I assist you today?'
          ],
          i18n: {
            en: {
              title: 'Vesti AI',
              subtitle: "Start a chat. We're here to help you 24/7.",
              footer: '',
              getStarted: 'New Conversation',
              inputPlaceholder: 'Type your question..',
            },
          },
        });
      } catch (error) {
        console.error('Failed to load n8n chat:', error);
      }
    };

    loadChat();

    // Cleanup function
    return () => {
      const chatContainer = document.getElementById('n8n-chat-container');
      if (chatContainer) {
        chatContainer.innerHTML = '';
      }
    };
  }, []);

  return <div id="n8n-chat-container"></div>;
}; 