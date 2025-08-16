/**
 * Simple markdown renderer for chat messages
 * Converts basic markdown syntax to HTML/JSX elements
 */

export const renderMarkdown = (text: string): JSX.Element[] => {
  if (!text) return [];

  // Split text by markdown patterns and preserve the splits
  const parts: (string | { type: 'bold'; content: string })[] = [];
  let currentIndex = 0;

  // Find all **bold** patterns
  const boldRegex = /\*\*(.*?)\*\*/g;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before the bold
    if (match.index > currentIndex) {
      parts.push(text.slice(currentIndex, match.index));
    }

    // Add the bold content
    parts.push({
      type: 'bold',
      content: match[1]
    });

    currentIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (currentIndex < text.length) {
    parts.push(text.slice(currentIndex));
  }

  // Convert to JSX elements
  return parts.map((part, index) => {
    if (typeof part === 'string') {
      return <span key={index}>{part}</span>;
    } else if (part.type === 'bold') {
      return <strong key={index} className="font-semibold text-white">{part.content}</strong>;
    }
    // This shouldn't happen, but TypeScript needs it
    return <span key={index}></span>;
  });
};
