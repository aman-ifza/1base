import React, { useState, useEffect } from 'react';
import { Copy, FileText, Share2, ThumbsUp, ThumbsDown, Bookmark } from 'lucide-react';

const Chatbox = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Sample placeholder content - this would be replaced with actual AI response
  const fullAiResponse = `Here are 10 creative and dynamic name ideas for your electronics-focused eCommerce application (each no more than 3 words):

1. VoltCart
2. CircuitBay
3. TechTrove
4. ElectroNest
5. ZapMart
6. PixelBazaar
7. NexGizmo
8. PowerLoop
9. WiredHive
10. SparkSupply

11. ChargeHub
12. NeonNode
13. GearGrid
14. ClickVolt
15. QuantumCart
16. BoltBuy
17. CoreCircuit
18. ShockStop
19. PixelPlaza
20. NovaGadgets

21. GlitchMarket
22. Amporium
23. FuseShelf
24. GadgetSpree
25. CircuitJunction
26. PlugPort
27. IonicShack
28. BlinkBox
29. SparkWagon
30. QuantumDepot

Let me know if you'd like variations based on mood (luxury, minimalist, edgy) or if you want domain checks.`;

  // Typing animation effect
  useEffect(() => {
    // Start typing automatically when component mounts
    setIsTyping(true);
    setDisplayedText('');
    
    let currentIndex = 0;
    const typingSpeed = 15; // milliseconds per character
    
    const typeTimer = setInterval(() => {
      if (currentIndex < fullAiResponse.length) {
        setDisplayedText(fullAiResponse.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeTimer);
      }
    }, typingSpeed);

    return () => clearInterval(typeTimer);
  }, [fullAiResponse]); // Include fullAiResponse as dependency

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayedText || fullAiResponse);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleExportPDF = () => {
    // PDF export functionality would be implemented here
    console.log('Exporting as PDF...');
  };

  const handleShare = () => {
    // Share functionality would be implemented here
    console.log('Sharing...');
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="flex items-center justify-center p-4 h-full">
      <div className="bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-indigo-800/50 rounded-lg p-6 max-w-6xl w-full shadow-2xl backdrop-blur-sm">
        {/* Scrollable Content Area */}
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 mb-4 max-h-[32rem] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent">
          <div className="text-white leading-relaxed whitespace-pre-line">
            {displayedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
        </div>
        
        {/* Action Icons */}
        <div className="flex items-center justify-between border-t border-white/20 pt-4">
          <div className="flex items-center space-x-4">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg px-3 py-2"
              title="Copy to clipboard"
            >
              <Copy size={18} />
              <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            {/* Export PDF Button */}
            <button
              onClick={handleExportPDF}
              className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg px-3 py-2"
              title="Export as PDF"
            >
              <FileText size={18} />
              <span className="text-sm">PDF</span>
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg px-3 py-2"
              title="Share"
            >
              <Share2 size={18} />
              <span className="text-sm">Share</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            {/* Like Button */}
            <button
              onClick={handleLike}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isLiked 
                  ? 'text-green-400 bg-green-400/20' 
                  : 'text-white/70 hover:text-green-400 hover:bg-green-400/10'
              }`}
              title="Like"
            >
              <ThumbsUp size={18} />
            </button>

            {/* Dislike Button */}
            <button
              onClick={handleDislike}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDisliked 
                  ? 'text-red-400 bg-red-400/20' 
                  : 'text-white/70 hover:text-red-400 hover:bg-red-400/10'
              }`}
              title="Dislike"
            >
              <ThumbsDown size={18} />
            </button>

            {/* Bookmark Button */}
            <button
              onClick={handleBookmark}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isBookmarked 
                  ? 'text-yellow-400 bg-yellow-400/20' 
                  : 'text-white/70 hover:text-yellow-400 hover:bg-yellow-400/10'
              }`}
              title="Bookmark"
            >
              <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;