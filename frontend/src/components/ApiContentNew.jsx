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

      case 'request-response':
        return (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Request/Response Format</h1>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Request Format</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>All requests must include <code className="bg-gray-100 px-2 py-1 rounded">Content-Type: application/json</code> header</li>
                  <li>All timestamps are in ISO 8601 format (UTC)</li>
                  <li>File uploads use <code className="bg-gray-100 px-2 py-1 rounded">multipart/form-data</code></li>
                  <li>Responses include execution time and credit usage metadata</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Standard Response Structure</h2>
            <ResponseBlock response={`{
  "data": { /* response data */ },
  "meta": {
    "request_id": "req_abc123",
    "execution_time_ms": 245,
    "credits_used": 15,
    "api_version": "v1.2.3"
  }
}`} title="Standard API Response" />
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

      case 'get-brand-dna-status':
        return (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Get Brand DNA Status</h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Check the human review status and retrieve refined results. Human experts review all AI-generated brand DNA 
              for quality, market relevance, and strategic viability.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Endpoint</h3>
              <code className="text-green-900 font-mono text-lg">GET /brand-dna/&#123;brand_dna_id&#125;</code>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Query Parameters</h2>
            <ParameterTable parameters={[
              { name: 'include_feedback', type: 'boolean', required: false, description: 'Include expert reviewer feedback and suggestions' },
              { name: 'include_alternatives', type: 'boolean', required: false, description: 'Include alternative concepts generated during review' }
            ]} />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Response Status Values</h2>
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <div className="space-y-2 text-sm">
                <div><span className="font-mono bg-blue-100 px-2 py-1 rounded">ai_generated</span> - Initial AI processing complete, awaiting human review</div>
                <div><span className="font-mono bg-yellow-100 px-2 py-1 rounded">in_human_review</span> - Currently being reviewed by brand experts</div>
                <div><span className="font-mono bg-green-100 px-2 py-1 rounded">human_approved</span> - Approved by experts, ready for asset generation</div>
                <div><span className="font-mono bg-orange-100 px-2 py-1 rounded">revision_requested</span> - Requires modifications based on expert feedback</div>
                <div><span className="font-mono bg-red-100 px-2 py-1 rounded">rejected</span> - Does not meet quality standards (rare, full refund issued)</div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Response (Human Approved)</h2>
            <ResponseBlock response={`{
  "brand_dna_id": "dna_abc123xyz",
  "status": "human_approved",
  "completion_time": "2024-01-15T16:45:00Z",
  "review_duration_hours": 26,
  "final_concept": {
    "concept_id": "concept_refined_1",
    "theme": "Conscious Craft",
    "description": "Artisanal coffee brand that bridges the gap between farmers and consumers through transparent, sustainable practices and exceptional craft",
    "positioning_statement": "Where ethical sourcing meets exceptional craft",
    "unique_value_proposition": "The only coffee roaster in your city that lets you trace every bean back to the farmer who grew it"
  },
  "expert_feedback": {
    "reviewer_name": "Sarah Chen",
    "reviewer_credentials": "10+ years brand strategy, specialty F&B focus",
    "key_refinements": [
      "Elevated archetype from 'caregiver' to 'sage' to emphasize expertise",
      "Strengthened premium positioning while maintaining approachability",
      "Added traceability as core differentiator"
    ],
    "market_validation": "Strong differentiation in crowded specialty coffee market. Premium positioning justified by direct trade focus."
  },
  "readiness_score": 0.94,
  "recommended_next_steps": ["brand_universe_generation", "trademark_search"]
}`} />
          </div>
        );

      case 'generate-brand-universe':
        return (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Generate Complete Brand Universe</h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Create comprehensive brand materials including logos, colors, typography, and guidelines. 
              This endpoint generates a complete brand system based on approved Brand DNA.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Endpoint</h3>
              <code className="text-blue-900 font-mono text-lg">POST /brand-universe/generate</code>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Available Asset Types</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Core Assets</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <code>logo</code> - Complete logo system with variations</li>
                  <li>• <code>color_palette</code> - Primary, secondary, and neutral colors</li>
                  <li>• <code>typography</code> - Font selections and pairings</li>
                  <li>• <code>style_guide</code> - Comprehensive brand guidelines</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Applied Assets</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <code>business_cards</code> - Professional business card designs</li>
                  <li>• <code>letterhead</code> - Branded letterhead templates</li>
                  <li>• <code>social_media_kit</code> - Profile images, cover photos</li>
                  <li>• <code>website_mockup</code> - Homepage design concept</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example Request</h2>
            <CodeBlock 
              code={`{
  "brand_dna_id": "dna_abc123xyz",
  "asset_types": ["logo", "color_palette", "typography", "style_guide", "business_cards"],
  "logo_variations": ["primary", "horizontal", "icon", "monogram", "reversed"],
  "color_scheme_preference": "warm_earthy",
  "industry_conventions": true,
  "file_formats": ["svg", "png", "pdf", "eps"],
  "brand_applications": ["storefront_signage", "packaging", "digital_marketing", "merchandise"],
  "rush_delivery": false,
  "style_preferences": {
    "logo_complexity": "balanced",
    "color_vibrancy": "sophisticated",
    "typography_style": "modern_classic"
  }
}`}
              language="json"
              id="brand-universe-request"
              title="Request Body"
            />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Response (Completed)</h2>
            <ResponseBlock response={`{
  "universe_id": "universe_xyz789",
  "status": "completed",
  "completion_time": "2024-01-15T18:42:00Z",
  "generation_duration_minutes": 28,
  "assets": {
    "logos": [
      {
        "variation": "primary",
        "description": "Main logo combining coffee bean icon with elegant wordmark",
        "use_cases": ["business cards", "signage", "general branding"],
        "formats": {
          "svg": "https://assets.1base.io/universe_xyz789/logos/primary.svg",
          "png_300dpi": "https://assets.1base.io/universe_xyz789/logos/primary_300.png",
          "eps": "https://assets.1base.io/universe_xyz789/logos/primary.eps"
        },
        "dimensions": {
          "minimum_width_px": 120,
          "optimal_width_px": 300,
          "aspect_ratio": "3:2"
        }
      }
    ],
    "color_palette": {
      "name": "Roasted Earth Premium",
      "primary": {
        "hex": "#8B4513",
        "rgb": "rgb(139, 69, 19)",
        "pantone": "476 C",
        "usage": "Main brand color, primary logo, key headlines"
      },
      "accessibility": {
        "aa_compliant_combinations": [
          {"foreground": "#2F2F2F", "background": "#FFFFFF"},
          {"foreground": "#8B4513", "background": "#F4F4F4"}
        ],
        "contrast_ratios_tested": true
      }
    }
  },
  "quality_metrics": {
    "brand_consistency_score": 0.92,
    "market_differentiation_score": 0.88,
    "scalability_score": 0.95,
    "expert_approval_rating": 4.8
  },
  "usage_rights": {
    "license_type": "commercial_unlimited",
    "trademark_guidance_included": true,
    "modification_rights": "full_customization_allowed"
  },
  "credits_used": 65
}`} />
          </div>
        );

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
