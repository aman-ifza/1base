import React, { useState } from 'react';
import { Heart, Info, Copy } from 'lucide-react';

const TypographyTemplate = ({ 
  title = "Fira Code & Work Sans",
  previewText = "All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content to see what it looks like with these font combinations.",
  onExport,
  onPreview,
  onBookmark,
  isBookmarked = false
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState(previewText);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleTextBlur = () => {
    setIsEditing(false);
  };

  const handleTextChange = (e) => {
    setEditableText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-[400px] bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Fira Code, monospace' }}>
              {title}
            </h3>
            <button
              onClick={onBookmark}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Heart 
                className={`w-6 h-6 ${isBookmarked ? 'fill-red-500 text-red-500' : ''}`}
              />
            </button>
          </div>

          {/* Editable Text Content */}
          <div className="mb-6">
            {isEditing ? (
              <textarea
                value={editableText}
                onChange={handleTextChange}
                onBlur={handleTextBlur}
                onKeyDown={handleKeyDown}
                className="w-full text-sm text-gray-600 leading-relaxed resize-none border-none outline-none bg-transparent"
                style={{ fontFamily: 'Work Sans, sans-serif', minHeight: '80px' }}
                autoFocus
              />
            ) : (
              <p
                onClick={handleTextClick}
                className="text-sm text-gray-600 leading-relaxed cursor-text hover:bg-gray-50 p-2 rounded transition-colors"
                style={{ fontFamily: 'Work Sans, sans-serif' }}
              >
                {editableText}
              </p>
            )}
          </div>

          {/* Action Icons */}
          <div className="flex justify-end gap-2 mb-4">
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <Info className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6">
          <div className="flex gap-3">
            <button
              onClick={onExport}
              className="flex-1 py-1.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm"
            >
              Export
            </button>
            <button
              onClick={onPreview}
              className="flex-1 py-1.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors text-sm"
            >
              Preview Typography
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyTemplate;
