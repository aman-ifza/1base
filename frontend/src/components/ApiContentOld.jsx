import React from 'react';
import { Copy, ExternalLink, Play, CheckCircle2, ArrowRight, Shield, Zap, Palette, Globe } from 'lucide-react';

const ApiContent = ({ selectedSection }) => {
  const [copiedCode, setCopiedCode] = React.useState('');

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const CodeBlock = ({ code, language = 'http', id, title }) => (
    <div className="bg-slate-900 rounded-lg overflow-hidden my-6 border border-slate-700">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300">{title || language}</span>
        </div>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center gap-2 px-3 py-1 bg-slate-700 text-gray-300 rounded text-sm hover:bg-slate-600 transition-colors"
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
      <pre className="text-gray-300 text-sm overflow-x-auto p-4">
        <code>{code}</code>
      </pre>
    </div>
  );

  const ResponseBlock = ({ response, title = "Response" }) => (
    <div className="bg-green-50 border border-green-200 rounded-lg overflow-hidden my-6">
      <div className="px-4 py-3 bg-green-100 border-b border-green-200">
        <span className="text-sm font-medium text-green-800">{title}</span>
      </div>
      <pre className="text-green-800 text-sm overflow-x-auto p-4">
        <code>{response}</code>
      </pre>
    </div>
  );

  const ParameterTable = ({ parameters }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Parameter</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Type</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Required</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {parameters.map((param, index) => (
            <tr key={index} className="bg-white">
              <td className="px-4 py-3 text-sm font-mono text-gray-900">{param.name}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{param.type}</td>
              <td className="px-4 py-3 text-sm">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {param.required ? 'Yes' : 'No'}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">{param.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderContent = () => {
    switch (selectedSection) {
      case 'overview':
        return (
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">1base Creative & Branding Automation API</h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-600 leading-relaxed">
                The 1base API provides programmatic access to our revolutionary AI-powered branding platform, 
                enabling developers to integrate professional brand creation capabilities directly into their applications. 
                Our API combines the speed of AI automation with the quality of human expertise, delivering 
                professional-grade branding solutions at scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-purple-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Lightning-Fast Generation</h3>
                </div>
                <p className="text-gray-600">Create complete brand universes in minutes with AI-powered automation.</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-green-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">AI + Human Quality</h3>
                </div>
                <p className="text-gray-600">Automated generation refined by expert validation for professional results.</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <Palette className="text-orange-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Modular Assets</h3>
                </div>
                <p className="text-gray-600">Flexible, reusable components across all brand touchpoints.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-blue-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Scalable Integration</h3>
                </div>
                <p className="text-gray-600">From single requests to enterprise-level batch processing.</p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 text-white mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Globe size={20} />
                Base URL
              </h3>
              <CodeBlock 
                code="https://api.1base.io/v1" 
                language="url" 
                id="base-url"
                title="API Base URL"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Ready to get started?</h3>
              <p className="text-blue-800 mb-4">
                Begin with our authentication guide to get your API keys, then explore our comprehensive endpoints.
              </p>
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started <ArrowRight size={16} />
              </button>
            </div>
          </div>
        );

      case 'authentication':
        return (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Authentication</h1>
            
            <p className="text-lg text-gray-600 mb-8">
              All API requests require authentication using API keys. You can generate API keys from your 1base dashboard under "API Settings."
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">API Key Types</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Development Keys</h3>
                  <p className="text-gray-600">For testing and development (limited to sandbox environments)</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Production Keys</h3>
                  <p className="text-gray-600">For live applications (full access to all features)</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Read-Only Keys</h3>
                  <p className="text-gray-600">Limited to asset retrieval and status checking</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Include API Key in Request Header</h2>
            <CodeBlock 
              code={`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}
              language="http"
              id="auth-header"
              title="HTTP Headers"
            />

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Security Best Practices</h3>
              <ul className="space-y-2 text-yellow-800">
                <li>• Never expose API keys in client-side code</li>
                <li>• Use environment variables to store keys</li>
                <li>• Rotate keys regularly (recommended: every 90 days)</li>
                <li>• Use read-only keys for asset serving when possible</li>
              </ul>
            </div>
          </div>
        );

      case 'rate-limits':
        return (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Rate Limits</h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Rate limits are enforced per API key and reset every hour to ensure fair usage and optimal performance for all users.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Starter Plan</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">100</p>
                <p className="text-gray-600">requests per hour</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Professional Plan</h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">500</p>
                <p className="text-gray-600">requests per hour</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise Plan</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">2,000</p>
                <p className="text-gray-600">requests per hour</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Pay-as-you-go</h3>
                <p className="text-3xl font-bold text-orange-600 mb-2">50</p>
                <p className="text-gray-600">requests per hour</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rate Limit Headers</h2>
            <CodeBlock 
              code={`X-RateLimit-Limit: 500
X-RateLimit-Remaining: 487
X-RateLimit-Reset: 1705320000`}
              language="http"
              id="rate-limit-headers"
              title="Response Headers"
            />

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Exceeding Rate Limits</h3>
              <p className="text-red-800 mb-4">
                When rate limits are exceeded, you'll receive a <code className="bg-red-100 px-2 py-1 rounded">429 Too Many Requests</code> response 
                with a <code className="bg-red-100 px-2 py-1 rounded">Retry-After</code> header indicating when you can make requests again.
              </p>
            </div>
          </div>
        );

      case 'generate-brand-dna':
        return (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Generate Brand DNA</h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Create initial brand concepts using AI-powered analysis with subsequent human expert validation. 
              The foundation of every brand creation process.
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Endpoint</h3>
              <code className="text-purple-900 font-mono text-lg">POST /brand-dna/generate</code>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Request Parameters</h2>
            <ParameterTable parameters={[
              { name: 'business_name', type: 'string', required: true, description: 'The name of the business or brand' },
              { name: 'industry', type: 'string', required: true, description: 'Industry category (see supported industries below)' },
              { name: 'target_audience', type: 'string', required: true, description: 'Primary target demographic' },
              { name: 'brand_values', type: 'array', required: true, description: 'Core values (3-5 values recommended)' },
              { name: 'business_description', type: 'string', required: true, description: 'Brief description of business/service (50-500 chars)' },
              { name: 'tone_preferences', type: 'array', required: false, description: 'Desired brand personality traits' },
              { name: 'market_region', type: 'string', required: false, description: 'Primary market region for cultural context' },
              { name: 'priority_review', type: 'boolean', required: false, description: 'Request expedited human review (+50% credits)' }
            ]} />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supported Industries</h2>
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
                <div>technology</div>
                <div>healthcare</div>
                <div>finance</div>
                <div>food_beverage</div>
                <div>retail</div>
                <div>education</div>
                <div>real_estate</div>
                <div>automotive</div>
                <div>beauty</div>
                <div>fitness</div>
                <div>consulting</div>
                <div>non_profit</div>
                <div>entertainment</div>
                <div>travel</div>
                <div>manufacturing</div>
                <div>construction</div>
                <div>legal</div>
                <div>agriculture</div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example Request</h2>
            <CodeBlock 
              code={`{
  "business_name": "Acme Coffee Co.",
  "industry": "food_beverage",
  "target_audience": "urban millennials aged 25-35",
  "brand_values": ["sustainability", "community", "quality", "authenticity"],
  "business_description": "Artisanal coffee roaster focused on direct trade relationships with farmers, serving specialty coffee in urban locations with a community-first approach.",
  "tone_preferences": ["friendly", "approachable", "authentic", "knowledgeable"],
  "market_region": "north_america",
  "competitor_analysis": {
    "primary_competitors": ["Starbucks", "Blue Bottle", "Local Coffee Shop"],
    "differentiation_focus": "direct trade relationships and community engagement"
  },
  "priority_review": false
}`}
              language="json"
              id="brand-dna-request"
              title="Request Body"
            />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Response</h2>
            <ResponseBlock response={`{
  "brand_dna_id": "dna_abc123xyz",
  "status": "ai_generated",
  "processing_stage": "awaiting_human_review",
  "estimated_completion": "2024-01-15T14:30:00Z",
  "brand_personality": {
    "primary_traits": ["authentic", "sustainable", "community-focused", "artisanal"],
    "secondary_traits": ["approachable", "knowledgeable", "ethical"],
    "tone_of_voice": "friendly yet knowledgeable, with warmth and expertise",
    "brand_archetype": "caregiver"
  },
  "generated_concepts": [
    {
      "concept_id": "concept_1",
      "theme": "Urban Sustainability",
      "description": "Modern eco-conscious branding emphasizing direct trade and environmental responsibility",
      "visual_direction": "earth tones, organic shapes, clean typography",
      "confidence_score": 0.87
    }
  ],
  "human_review_status": "queued",
  "estimated_review_time": "24-48 hours",
  "credits_used": 20
}`} />
          </div>
        );

      // Add default case and close the switch statement
      default:
        return (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Documentation Section</h1>
            <p className="text-lg text-gray-600">
              Please select a section from the sidebar to view the documentation.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default ApiContent;
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
