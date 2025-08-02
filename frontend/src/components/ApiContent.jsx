import React from 'react';
import { Copy, ExternalLink, Play, CheckCircle2 } from 'lucide-react';

const ApiContent = ({ selectedSection }) => {
  const [copiedCode, setCopiedCode] = React.useState('');

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const CodeBlock = ({ code, language = 'javascript', id }) => (
    <div className="bg-slate-900 rounded-lg p-4 my-4 relative group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-400">{language}</span>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center gap-2 px-3 py-1 bg-slate-800 text-gray-300 rounded text-sm hover:bg-slate-700 transition-colors"
        >
          {copiedCode === id ? (
            <>
              <CheckCircle2 size={14} className="text-green-400" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="text-gray-300 text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  const renderContent = () => {
    switch (selectedSection) {
      case 'introduction':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">API/SDK Documentation</h1>
            <p className="text-lg text-gray-600 mb-8">
              Join the ranks of countless developers who have harnessed the power of our API to enhance their 
              applications and drive business growth. Explore our documentation and start understanding seamless 
              integration today.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting started</h3>
                <p className="text-gray-600 mb-4">
                  New to our API? No problem! Get yourself up to speed with this step-by-step getting started guide and 
                  you'll have your first application working in no time.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700">
                  Start here first! <ExternalLink size={16} />
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Not a developer?</h3>
                <p className="text-gray-600 mb-4">
                  Looking for end-user guides or want to use our web application? Our help center has guides 
                  and FAQs to help you use our services.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700">
                  Go to help center <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Choose your client</h3>
              <p className="text-blue-800 mb-4">
                Select the client that best fits your project needs from our comprehensive range of options. API/SDK 
                offers clients for JavaScript, Python, and PHP to let developers implement applications with a technology-specific 
                approach. To select a particular architecture at checkout, you can rely on the following options.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-blue-800">Check out the quickstart examples for each product area</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-blue-800">Select Guides by Language</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-blue-800">Copy the client secret to your cart</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">See where we're live</h3>
              <CodeBlock 
                code={`curl -X GET "https://api.1base.ai/v1/status" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                language="bash"
                id="status-check"
              />
              <p className="text-gray-300 text-sm mt-2">
                Check our API status and availability across different regions.
              </p>
            </div>
          </div>
        );

      case 'quick-start':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Quick Start Guide</h1>
            <p className="text-lg text-gray-600 mb-8">
              Get up and running with 1base API in minutes. Follow these simple steps to make your first API call.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Get Your API Key</h2>
                <p className="text-gray-600 mb-4">
                  First, you'll need to obtain an API key from your 1base dashboard.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> Keep your API key secure and never expose it in client-side code.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Make Your First Request</h2>
                <p className="text-gray-600 mb-4">
                  Here's how to generate a brand name using our API:
                </p>
                <CodeBlock 
                  code={`// JavaScript Example
const response = await fetch('https://api.1base.ai/v1/names/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    industry: 'technology',
    style: 'modern',
    length: 'short'
  })
});

const data = await response.json();
console.log(data.names);`}
                  language="javascript"
                  id="first-request"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Handle the Response</h2>
                <p className="text-gray-600 mb-4">
                  The API will return a JSON response with generated names:
                </p>
                <CodeBlock 
                  code={`{
  "success": true,
  "names": [
    "TechFlow",
    "NexusCore",
    "ByteForge",
    "CodeStream",
    "DataVault"
  ],
  "metadata": {
    "industry": "technology",
    "style": "modern",
    "generated_at": "2024-08-02T10:30:00Z"
  }
}`}
                  language="json"
                  id="response-example"
                />
              </div>
            </div>
          </div>
        );

      case 'authentication':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Authentication</h1>
            <p className="text-lg text-gray-600 mb-8">
              1base API uses API keys for authentication. Include your API key in the Authorization header of every request.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">API Key Authentication</h2>
                <p className="text-gray-600 mb-4">
                  Include your API key in the Authorization header using the Bearer token format:
                </p>
                <CodeBlock 
                  code={`Authorization: Bearer sk_1base_your_api_key_here`}
                  language="http"
                  id="auth-header"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Error Responses</h2>
                <p className="text-gray-600 mb-4">
                  If authentication fails, you'll receive a 401 Unauthorized response:
                </p>
                <CodeBlock 
                  code={`{
  "error": {
    "code": "unauthorized",
    "message": "Invalid API key provided",
    "type": "authentication_error"
  }
}`}
                  language="json"
                  id="auth-error"
                />
              </div>
            </div>
          </div>
        );

      case 'generate-names':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Generate Names</h1>
            <p className="text-lg text-gray-600 mb-8">
              Generate creative and brandable names for your business using AI-powered algorithms.
            </p>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3">POST</span>
                  /v1/names/generate
                </h3>
                <p className="text-gray-600">Generate brand names based on your criteria</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Request Parameters</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Parameter</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Type</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Required</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono">industry</td>
                        <td className="px-4 py-3 text-sm text-gray-600">string</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Yes</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Target industry (e.g., "technology", "healthcare")</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-mono">style</td>
                        <td className="px-4 py-3 text-sm text-gray-600">string</td>
                        <td className="px-4 py-3 text-sm text-gray-600">No</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Name style: "modern", "classic", "creative"</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono">length</td>
                        <td className="px-4 py-3 text-sm text-gray-600">string</td>
                        <td className="px-4 py-3 text-sm text-gray-600">No</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Name length: "short", "medium", "long"</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-mono">count</td>
                        <td className="px-4 py-3 text-sm text-gray-600">integer</td>
                        <td className="px-4 py-3 text-sm text-gray-600">No</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Number of names to generate (1-20, default: 10)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example Request</h2>
                <CodeBlock 
                  code={`curl -X POST "https://api.1base.ai/v1/names/generate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "industry": "technology",
    "style": "modern",
    "length": "short",
    "count": 5
  }'`}
                  language="bash"
                  id="generate-names-request"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example Response</h2>
                <CodeBlock 
                  code={`{
  "success": true,
  "names": [
    {
      "name": "TechFlow",
      "availability": "available",
      "domain": "techflow.com",
      "score": 0.95
    },
    {
      "name": "NexusCore",
      "availability": "available", 
      "domain": "nexuscore.com",
      "score": 0.92
    }
  ],
  "metadata": {
    "industry": "technology",
    "style": "modern",
    "generated_at": "2024-08-02T10:30:00Z",
    "request_id": "req_abc123"
  }
}`}
                  language="json"
                  id="generate-names-response"
                />
              </div>
            </div>
          </div>
        );

      case 'generate-logo':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Generate Logo</h1>
            <p className="text-lg text-gray-600 mb-8">
              Create professional logos using AI with customizable styles, colors, and formats.
            </p>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3">POST</span>
                  /v1/logos/generate
                </h3>
                <p className="text-gray-600">Generate custom logos based on brand specifications</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example Request</h2>
                <CodeBlock 
                  code={`curl -X POST "https://api.1base.ai/v1/logos/generate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "brand_name": "TechFlow",
    "industry": "technology",
    "style": "modern",
    "colors": ["#2563eb", "#ffffff"],
    "format": "svg",
    "variations": 3
  }'`}
                  language="bash"
                  id="generate-logo-request"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example Response</h2>
                <CodeBlock 
                  code={`{
  "success": true,
  "logos": [
    {
      "id": "logo_123abc",
      "url": "https://cdn.1base.ai/logos/logo_123abc.svg",
      "format": "svg",
      "dimensions": {
        "width": 512,
        "height": 256
      },
      "colors": ["#2563eb", "#ffffff"],
      "style": "modern"
    }
  ],
  "metadata": {
    "brand_name": "TechFlow",
    "generated_at": "2024-08-02T10:30:00Z",
    "request_id": "req_logo_456"
  }
}`}
                  language="json"
                  id="generate-logo-response"
                />
              </div>
            </div>
          </div>
        );

      case 'client-libraries':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Client Libraries</h1>
            <p className="text-lg text-gray-600 mb-8">
              Official SDKs and client libraries to integrate 1base API into your applications.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* JavaScript */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-600 font-bold">JS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">JavaScript</h3>
                    <p className="text-sm text-gray-500">Node.js & Browser</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  A powerful, type-safe JavaScript library with full TypeScript support and promise-based API.
                </p>
                <CodeBlock 
                  code={`npm install @1base/sdk`}
                  language="bash"
                  id="js-install"
                />
              </div>

              {/* Python */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">Py</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Python</h3>
                    <p className="text-sm text-gray-500">Python 3.7+</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  A Pythonic SDK with async support, comprehensive error handling, and built-in retry logic.
                </p>
                <CodeBlock 
                  code={`pip install onebase-sdk`}
                  language="bash"
                  id="py-install"
                />
              </div>

              {/* PHP */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">PHP</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">PHP</h3>
                    <p className="text-sm text-gray-500">PHP 7.4+</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  A modern PHP library with PSR-7 compliance, dependency injection support, and comprehensive documentation.
                </p>
                <CodeBlock 
                  code={`composer require onebase/sdk`}
                  language="bash"
                  id="php-install"
                />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Documentation for {selectedSection}
            </h2>
            <p className="text-gray-600">
              Detailed documentation for this section is coming soon.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {renderContent()}
    </div>
  );
};

export default ApiContent;
