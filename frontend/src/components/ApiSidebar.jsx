import React from 'react';
import { 
  BookOpen, 
  Code2, 
  Zap, 
  Settings, 
  Database, 
  Shield, 
  HelpCircle, 
  Palette,
  Type,
  Image,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

const ApiSidebar = ({ selectedSection, onSectionSelect }) => {
  const menuItems = [
    {
      id: 'getting-started',
      label: 'Getting started',
      icon: BookOpen,
      children: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'quick-start', label: 'Quick Start' },
        { id: 'authentication', label: 'Authentication' }
      ]
    },
    {
      id: 'brand',
      label: 'Brand',
      icon: Palette,
      children: [
        { id: 'create-brand', label: 'Create Brand' },
        { id: 'get-brand', label: 'Get Brand' },
        { id: 'update-brand', label: 'Update Brand' },
        { id: 'delete-brand', label: 'Delete Brand' }
      ]
    },
    {
      id: 'name',
      label: 'Name',
      icon: Type,
      children: [
        { id: 'generate-names', label: 'Generate Names' },
        { id: 'validate-name', label: 'Validate Name' },
        { id: 'check-availability', label: 'Check Availability' }
      ]
    },
    {
      id: 'logo',
      label: 'Logo',
      icon: Image,
      children: [
        { id: 'generate-logo', label: 'Generate Logo' },
        { id: 'customize-logo', label: 'Customize Logo' },
        { id: 'download-logo', label: 'Download Logo' }
      ]
    },
    {
      id: 'inspiration',
      label: 'Inspiration',
      icon: Zap,
      children: [
        { id: 'get-templates', label: 'Get Templates' },
        { id: 'template-categories', label: 'Template Categories' },
        { id: 'trending-designs', label: 'Trending Designs' }
      ]
    },
    {
      id: 'canvas',
      label: 'Canvas',
      icon: Code2,
      children: [
        { id: 'create-canvas', label: 'Create Canvas' },
        { id: 'drawing-tools', label: 'Drawing Tools' },
        { id: 'ai-generation', label: 'AI Generation' }
      ]
    },
    {
      id: 'chat',
      label: 'Chat',
      icon: MessageSquare,
      children: [
        { id: 'send-message', label: 'Send Message' },
        { id: 'get-responses', label: 'Get Responses' },
        { id: 'chat-history', label: 'Chat History' }
      ]
    },
    {
      id: 'core-resources',
      label: 'Core Resources',
      icon: Database,
      children: [
        { id: 'endpoints', label: 'API Endpoints' },
        { id: 'rate-limits', label: 'Rate Limits' },
        { id: 'webhooks', label: 'Webhooks' }
      ]
    },
    {
      id: 'authentication',
      label: 'Authentication',
      icon: Shield,
      children: [
        { id: 'api-keys', label: 'API Keys' },
        { id: 'oauth', label: 'OAuth 2.0' },
        { id: 'jwt-tokens', label: 'JWT Tokens' }
      ]
    },
    {
      id: 'support',
      label: 'Support',
      icon: HelpCircle,
      children: [
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contact Support' },
        { id: 'status', label: 'API Status' }
      ]
    }
  ];

  const [expandedItems, setExpandedItems] = React.useState(['getting-started']);

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="w-80 bg-slate-900 text-white h-screen overflow-y-auto">
      <div className="p-6">
        <h2 className="text-sm font-medium text-gray-300 mb-4">API Documentation</h2>
        
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedItems.includes(item.id);
            
            return (
              <div key={item.id}>
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg hover:bg-slate-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className="text-gray-400 group-hover:text-white" />
                    <span className="text-gray-300 group-hover:text-white">{item.label}</span>
                  </div>
                  <ChevronRight 
                    size={14} 
                    className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                  />
                </button>
                
                {isExpanded && item.children && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => onSectionSelect(child.id)}
                        className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors ${
                          selectedSection === child.id
                            ? 'bg-purple-600 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default ApiSidebar;
