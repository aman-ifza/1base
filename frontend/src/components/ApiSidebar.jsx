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
      label: 'Getting Started',
      icon: BookOpen,
      children: [
        { id: 'overview', label: 'Overview' },
        { id: 'authentication', label: 'Authentication' },
        { id: 'rate-limits', label: 'Rate Limits' },
        { id: 'request-response', label: 'Request/Response Format' }
      ]
    },
    {
      id: 'brand-dna',
      label: 'Brand DNA Generation',
      icon: Palette,
      children: [
        { id: 'generate-brand-dna', label: 'Generate Brand DNA' },
        { id: 'get-brand-dna-status', label: 'Get Brand DNA Status' }
      ]
    },
    {
      id: 'brand-assets',
      label: 'Brand Asset Generation',
      icon: Image,
      children: [
        { id: 'generate-brand-universe', label: 'Generate Complete Brand Universe' },
        { id: 'mix-match-assets', label: 'Mix & Match Assets' }
      ]
    },
    {
      id: 'brand-playground',
      label: 'Brand Playground',
      icon: Zap,
      children: [
        { id: 'create-sandbox', label: 'Create Sandbox Environment' }
      ]
    },
    {
      id: 'sdks',
      label: 'SDKs & Libraries',
      icon: Code2,
      children: [
        { id: 'javascript-sdk', label: 'JavaScript SDK' }
      ]
    },
    {
      id: 'errors',
      label: 'Error Handling',
      icon: HelpCircle,
      children: [
        { id: 'error-codes', label: 'Error Codes' }
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
    <div className="w-80 bg-slate-900 text-white h-screen flex flex-col">
      <div className="p-6 flex-shrink-0">
        <h2 className="text-sm font-medium text-gray-300 mb-4">API Documentation</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto px-6 pb-6">
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
