# 1base Creative & Branding Automation API Documentation

## Overview

The 1base API provides programmatic access to our revolutionary AI-powered branding platform, enabling developers to integrate professional brand creation capabilities directly into their applications. Our API combines the speed of AI automation with the quality of human expertise, delivering professional-grade branding solutions at scale.

### Key Benefits
- **Lightning-Fast Generation**: Create complete brand universes in minutes
- **AI + Human Quality**: Automated generation refined by expert validation
- **Modular Assets**: Flexible, reusable components across all touchpoints
- **Scalable Integration**: From single requests to enterprise-level batch processing

### Base URL
```
https://api.1base.io/v1
```

---

## Authentication

All API requests require authentication using API keys. You can generate API keys from your 1base dashboard under "API Settings."

**API Key Types:**
- **Development Keys**: For testing and development (limited to sandbox environments)
- **Production Keys**: For live applications (full access to all features)
- **Read-Only Keys**: Limited to asset retrieval and status checking

Include your API key in the request header:

```http
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

**Security Best Practices:**
- Never expose API keys in client-side code
- Use environment variables to store keys
- Rotate keys regularly (recommended: every 90 days)
- Use read-only keys for asset serving when possible

---

## Rate Limits

Rate limits are enforced per API key and reset every hour:

- **Starter Plan**: 100 requests per hour
- **Professional Plan**: 500 requests per hour  
- **Enterprise Plan**: 2,000 requests per hour
- **Pay-as-you-go**: 50 requests per hour

**Rate Limit Headers:**
```http
X-RateLimit-Limit: 500
X-RateLimit-Remaining: 487
X-RateLimit-Reset: 1705320000
```

**Exceeding Rate Limits:**
When rate limits are exceeded, you'll receive a `429 Too Many Requests` response with a `Retry-After` header indicating when you can make requests again.

---

## Request/Response Format

- All requests must include `Content-Type: application/json` header
- All timestamps are in ISO 8601 format (UTC)
- File uploads use `multipart/form-data`
- Responses include execution time and credit usage metadata

**Standard Response Structure:**
```json
{
  "data": { /* response data */ },
  "meta": {
    "request_id": "req_abc123",
    "execution_time_ms": 245,
    "credits_used": 15,
    "api_version": "v1.2.3"
  }
}
```

---

## Brand DNA Generation

The foundation of every brand creation process. Our AI analyzes your business information and generates initial brand concepts, which are then refined by human experts for market relevance and strategic viability.

### Generate Brand DNA

Create initial brand concepts using AI-powered analysis with subsequent human expert validation.

```http
POST /brand-dna/generate
```

**Request Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `business_name` | string | Yes | The name of the business or brand |
| `industry` | string | Yes | Industry category (see supported industries below) |
| `target_audience` | string | Yes | Primary target demographic |
| `brand_values` | array | Yes | Core values (3-5 values recommended) |
| `business_description` | string | Yes | Brief description of business/service (50-500 chars) |
| `tone_preferences` | array | No | Desired brand personality traits |
| `market_region` | string | No | Primary market region for cultural context |
| `competitor_analysis` | object | No | Competitor information for differentiation |
| `priority_review` | boolean | No | Request expedited human review (+50% credits) |

**Supported Industries:**
`technology`, `healthcare`, `finance`, `food_beverage`, `retail`, `education`, `real_estate`, `automotive`, `beauty`, `fitness`, `consulting`, `non_profit`, `entertainment`, `travel`, `manufacturing`, `construction`, `legal`, `agriculture`

**Request Body:**
```json
{
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
}
```

**Response:**
```json
{
  "brand_dna_id": "dna_abc123xyz",
  "status": "ai_generated",
  "processing_stage": "awaiting_human_review",
  "estimated_completion": "2024-01-15T14:30:00Z",
  "brand_personality": {
    "primary_traits": ["authentic", "sustainable", "community-focused", "artisanal"],
    "secondary_traits": ["approachable", "knowledgeable", "ethical"],
    "tone_of_voice": "friendly yet knowledgeable, with warmth and expertise",
    "brand_archetype": "caregiver",
    "personality_score": {
      "sincerity": 0.9,
      "excitement": 0.6,
      "competence": 0.8,
      "sophistication": 0.7,
      "ruggedness": 0.3
    }
  },
  "generated_concepts": [
    {
      "concept_id": "concept_1",
      "theme": "Urban Sustainability",
      "description": "Modern eco-conscious branding emphasizing direct trade and environmental responsibility",
      "visual_direction": "earth tones, organic shapes, clean typography",
      "confidence_score": 0.87
    },
    {
      "concept_id": "concept_2", 
      "theme": "Community Craftsman",
      "description": "Artisanal focus highlighting craftsmanship and local community connections",
      "visual_direction": "warm browns, handcrafted elements, serif typography",
      "confidence_score": 0.82
    },
    {
      "concept_id": "concept_3",
      "theme": "Global Connection",
      "description": "International perspective showcasing farmer partnerships and origin stories",
      "visual_direction": "rich colors, map elements, modern sans-serif",
      "confidence_score": 0.79
    }
  ],
  "industry_insights": {
    "market_trends": ["sustainability focus", "origin transparency", "community spaces"],
    "recommended_positioning": "premium artisanal with ethical sourcing",
    "potential_challenges": ["market saturation", "price sensitivity"]
  },
  "human_review_status": "queued",
  "estimated_review_time": "24-48 hours",
  "credits_used": 20,
  "webhook_url": null
}
```

### Get Brand DNA Status

Check the human review status and retrieve refined results. Human experts review all AI-generated brand DNA for quality, market relevance, and strategic viability.

```http
GET /brand-dna/{brand_dna_id}
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `include_feedback` | boolean | Include expert reviewer feedback and suggestions |
| `include_alternatives` | boolean | Include alternative concepts generated during review |

**Response Status Values:**
- `ai_generated` - Initial AI processing complete, awaiting human review
- `in_human_review` - Currently being reviewed by brand experts
- `human_approved` - Approved by experts, ready for asset generation
- `revision_requested` - Requires modifications based on expert feedback
- `rejected` - Does not meet quality standards (rare, full refund issued)

**Response (Human Approved):**
```json
{
  "brand_dna_id": "dna_abc123xyz",
  "status": "human_approved",
  "completion_time": "2024-01-15T16:45:00Z",
  "review_duration_hours": 26,
  "brand_personality": {
    "primary_traits": ["authentic", "sustainable", "community-focused", "artisanal"],
    "secondary_traits": ["approachable", "knowledgeable", "ethical", "premium"],
    "tone_of_voice": "Warm and knowledgeable, like a skilled barista sharing passion for craft coffee. Confident but never pretentious.",
    "brand_archetype": "sage",
    "voice_characteristics": {
      "formality": "casual-professional",
      "emotion": "warm",
      "purpose": "educate and connect",
      "vocabulary": "accessible expertise"
    }
  },
  "final_concept": {
    "concept_id": "concept_refined_1",
    "theme": "Conscious Craft",
    "description": "Artisanal coffee brand that bridges the gap between farmers and consumers through transparent, sustainable practices and exceptional craft",
    "visual_direction": "Warm earth tones with premium touches, organic shapes balanced with clean geometry, sophisticated yet approachable typography",
    "positioning_statement": "Where ethical sourcing meets exceptional craft",
    "unique_value_proposition": "The only coffee roaster in your city that lets you trace every bean back to the farmer who grew it"
  },
  "brand_guidelines": {
    "do_communicate": [
      "Passion for coffee craft and origin stories",
      "Direct relationships with farmers",
      "Quality through sustainable practices",
      "Community gathering and connection"
    ],
    "dont_communicate": [
      "Mass market appeal",
      "Price-focused messaging", 
      "Rushed or instant solutions",
      "Generic sustainability claims"
    ],
    "content_themes": [
      "Origin stories and farmer spotlights",
      "Brewing education and techniques",
      "Community events and connections",
      "Seasonal coffee offerings"
    ]
  },
  "expert_feedback": {
    "reviewer_name": "Sarah Chen",
    "reviewer_credentials": "10+ years brand strategy, specialty F&B focus",
    "key_refinements": [
      "Elevated archetype from 'caregiver' to 'sage' to emphasize expertise",
      "Strengthened premium positioning while maintaining approachability",
      "Added traceability as core differentiator"
    ],
    "market_validation": "Strong differentiation in crowded specialty coffee market. Premium positioning justified by direct trade focus.",
    "implementation_notes": "Consider highlighting individual farmer stories in visual branding. Avoid over-engineering - keep execution as authentic as the sourcing."
  },
  "readiness_score": 0.94,
  "recommended_next_steps": ["brand_universe_generation", "trademark_search"]
}
```

---

## Brand Asset Generation

Transform approved Brand DNA into comprehensive visual and strategic brand materials. This section covers the creation of complete brand universes and individual asset customization.

### Generate Complete Brand Universe

Create comprehensive brand materials including logos, colors, typography, and guidelines. This endpoint generates a complete brand system based on approved Brand DNA.

```http
POST /brand-universe/generate
```

**Request Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `brand_dna_id` | string | Yes | ID of human-approved Brand DNA |
| `asset_types` | array | Yes | Types of assets to generate |
| `logo_variations` | array | No | Specific logo variants needed |
| `color_scheme_preference` | string | No | Color palette style preference |
| `industry_conventions` | boolean | No | Apply industry-specific design conventions |
| `file_formats` | array | No | Output file formats |
| `brand_applications` | array | No | Specific use cases to optimize for |
| `rush_delivery` | boolean | No | 4-hour delivery (+100% credits) |

**Available Asset Types:**
- `logo` - Complete logo system with variations
- `color_palette` - Primary, secondary, and neutral color schemes
- `typography` - Font selections and pairing recommendations
- `style_guide` - Comprehensive brand guidelines document
- `business_cards` - Professional business card designs
- `letterhead` - Branded letterhead templates
- `social_media_kit` - Profile images, cover photos, post templates
- `website_mockup` - Homepage design concept

**Logo Variation Options:**
- `primary` - Main logo for general use
- `horizontal` - Wide format for headers/footers
- `stacked` - Vertical layout for square spaces
- `icon` - Symbol-only version
- `monogram` - Text-based mark
- `wordmark` - Text-only version
- `reversed` - Light version for dark backgrounds

**Request Body:**
```json
{
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
}
```

**Response (Processing):**
```json
{
  "universe_id": "universe_xyz789",
  "status": "processing",
  "generation_stage": "logo_creation",
  "estimated_completion": "2024-01-15T18:30:00Z",
  "progress": {
    "overall_percent": 15,
    "current_task": "Generating primary logo concepts",
    "stages_completed": ["brand_analysis", "color_research"],
    "stages_remaining": ["logo_design", "typography_selection", "asset_production", "quality_review"]
  },
  "preview_assets": {
    "color_palette_preview": {
      "primary": "#8B4513",
      "secondary": "#D2691E", 
      "accent": "#F4A460",
      "neutral": ["#2F2F2F", "#666666", "#A8A8A8", "#E8E8E8"],
      "palette_name": "Roasted Earth"
    }
  },
  "generation_parameters": {
    "ai_model_version": "1base-brand-v2.1",
    "style_seed": "earth_craft_premium",
    "human_review_checkpoint": true
  },
  "credits_used": 0,
  "estimated_total_credits": 65,
  "webhook_notifications": true
}
```

**Response (Completed):**
```json
{
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
          "png_72dpi": "https://assets.1base.io/universe_xyz789/logos/primary_72.png",
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
        "hsl": "hsl(25, 76%, 31%)",
        "cmyk": "c0 m50 y86 k45",
        "pantone": "476 C",
        "usage": "Main brand color, primary logo, key headlines"
      },
      "secondary": {
        "hex": "#D2691E", 
        "rgb": "rgb(210, 105, 30)",
        "usage": "Accent color, call-to-action buttons, highlights"
      },
      "neutral": [
        {
          "name": "Charcoal",
          "hex": "#2F2F2F",
          "usage": "Primary text, dark backgrounds"
        },
        {
          "name": "Warm Gray",
          "hex": "#A8A8A8", 
          "usage": "Secondary text, borders"
        }
      ],
      "accessibility": {
        "aa_compliant_combinations": [
          {"foreground": "#2F2F2F", "background": "#FFFFFF"},
          {"foreground": "#8B4513", "background": "#F4F4F4"}
        ],
        "contrast_ratios_tested": true
      }
    },
    "typography": {
      "primary_font": {
        "name": "Montserrat",
        "type": "sans-serif",
        "weights": ["400", "500", "600", "700"],
        "usage": "Headlines, logos, primary text",
        "google_fonts_url": "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700",
        "fallback_stack": "Montserrat, 'Helvetica Neue', Arial, sans-serif"
      },
      "secondary_font": {
        "name": "Source Serif Pro",
        "type": "serif", 
        "weights": ["400", "600"],
        "usage": "Body text, descriptive content, quotes",
        "character_set": "Extended Latin, supports international characters"
      },
      "font_pairings": {
        "css_file": "https://assets.1base.io/universe_xyz789/fonts/pairings.css",
        "size_recommendations": {
          "h1": "2.5rem (40px)",
          "h2": "2rem (32px)", 
          "body": "1rem (16px)",
          "caption": "0.875rem (14px)"
        }
      }
    },
    "style_guide": {
      "pdf_url": "https://assets.1base.io/universe_xyz789/style_guide.pdf",
      "pages": 24,
      "sections": [
        "Brand Story & Values",
        "Logo Usage & Guidelines", 
        "Color Palette & Applications",
        "Typography System",
        "Visual Style & Imagery",
        "Voice & Tone Guidelines",
        "Application Examples"
      ],
      "interactive_version": "https://styleguide.1base.io/universe_xyz789"
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
}
```

### Mix & Match Assets

Swap and customize individual brand components without regenerating the entire universe. Perfect for iterating on specific elements while maintaining overall brand consistency.

```http
PUT /brand-universe/{universe_id}/assets
```

**Request Body:**
```json
{
  "modifications": {
    "color_palette": {
      "primary": "#1E5F3F",
      "secondary": "#8FBC8F"
    },
    "logo_style": "minimalist",
    "typography": {
      "primary_font": "Roboto",
      "secondary_font": "Lora"
    }
  },
  "regenerate_dependent_assets": true,
  "preserve_brand_consistency": true,
  "modification_scope": ["business_cards", "letterhead", "social_media_kit"],
  "preview_before_commit": true
}
```

**Response:**
```json
{
  "modification_id": "mod_ghi123",
  "status": "preview_ready",
  "modified_assets": {
    "color_palette": {
      "primary": "#1E5F3F",
      "secondary": "#8FBC8F",
      "harmony_score": 0.91
    },
    "affected_components": ["logos", "business_cards", "social_media_templates"],
    "preview_urls": {
      "logo_primary": "https://preview.1base.io/mod_ghi123/logo_primary.png",
      "business_card": "https://preview.1base.io/mod_ghi123/business_card.png"
    }
  },
  "consistency_check": {
    "brand_alignment_score": 0.88,
    "warnings": [],
    "recommendations": ["Consider adjusting secondary color brightness for better contrast"]
  },
  "credits_used": 20
}
```

---

## Brand Playground

The Brand Playground provides a risk-free environment for experimenting with brand variations without affecting your main brand universe. Perfect for testing seasonal campaigns, market-specific adaptations, or exploring creative directions.

### Create Sandbox Environment

Set up a risk-free experimentation space with version control and comparison tools.

```http
POST /playground/create
```

**Request Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `base_brand_id` | string | Yes | Universe ID to base experiments on |
| `playground_name` | string | Yes | Descriptive name for the playground session |
| `experiment_scope` | array | Yes | Brand elements available for modification |
| `session_duration` | integer | No | Hours until auto-expiry (default: 72) |
| `collaboration_enabled` | boolean | No | Allow team member access |
| `version_limit` | integer | No | Maximum saved variations (default: 10) |

**Available Experiment Scopes:**
- `colors` - Color palette modifications
- `typography` - Font and text styling changes  
- `logo_style` - Logo variations and styling
- `tone` - Brand voice and messaging adjustments
- `imagery_style` - Visual style and photo treatment
- `layout` - Composition and spacing modifications

**Request Body:**
```json
{
  "base_brand_id": "universe_xyz789",
  "playground_name": "Summer Campaign 2024 Test",
  "experiment_scope": ["colors", "typography", "tone", "imagery_style"],
  "session_duration": 168,
  "collaboration_enabled": true,
  "experiment_goals": [
    "Test warmer color palette for summer season",
    "Explore more playful typography for younger demographic",
    "Adjust tone for social media campaigns"
  ],
  "target_applications": ["social_media", "digital_ads", "seasonal_packaging"]
}
```

**Response:**
```json
{
  "playground_id": "playground_abc456",
  "status": "active",
  "base_brand_snapshot": {
    "universe_id": "universe_xyz789",
    "snapshot_time": "2024-01-15T20:00:00Z",
    "included_assets": ["logos", "colors", "typography", "style_guide"]
  },
  "session_details": {
    "created_at": "2024-01-15T20:00:00Z",
    "expires_at": "2024-01-22T20:00:00Z",
    "collaboration_link": "https://playground.1base.io/playground_abc456",
    "access_code": "SUMMER24"
  },
  "available_tools": [
    "intensity_dials",
    "color_picker", 
    "font_explorer",
    "tone_adjuster",
    "side_by_side_comparison",
    "export_variations"
  ],
  "usage_limits": {
    "max_variations": 10,
    "max_exports": 25,
    "collaboration_seats": 5
  },
  "credits_used": 10
}
```

### Apply Brand Intensity Dials

Adjust brand characteristics in real-time using intuitive slider controls. Changes are applied instantly with live preview capabilities.

```http
POST /playground/{playground_id}/intensity-dials
```

**Available Intensity Dials:**

| Dial | Range | Description | Visual Impact |
|------|-------|-------------|---------------|
| `modernness` | 0.0-1.0 | Traditional to cutting-edge | Typography, layouts, color saturation |
| `playfulness` | 0.0-1.0 | Serious to fun and energetic | Color brightness, font style, imagery |
| `sophistication` | 0.0-1.0 | Casual to premium/luxury | Typography refinement, color complexity |
| `boldness` | 0.0-1.0 | Subtle to attention-grabbing | Contrast, color intensity, sizing |
| `warmness` | 0.0-1.0 | Cool/corporate to warm/personal | Color temperature, font characteristics |
| `minimalism` | 0.0-1.0 | Complex/detailed to clean/simple | Element reduction, whitespace, simplicity |

**Request Body:**
```json
{
  "adjustments": {
    "modernness": 0.8,
    "playfulness": 0.6,
    "sophistication": 0.7,
    "boldness": 0.4,
    "warmness": 0.9,
    "minimalism": 0.5
  },
  "preview_mode": true,
  "apply_to_elements": ["colors", "typography", "logo_style"],
  "variation_name": "Summer Warmth Test",
  "comparison_baseline": "original"
}
```

**Response:**
```json
{
  "variation_id": "var_def789",
  "status": "generated",
  "adjustments_applied": {
    "modernness": {
      "value": 0.8,
      "changes": [
        "Updated typography to more contemporary sans-serif",
        "Increased color saturation by 15%",
        "Simplified logo geometry"
      ]
    },
    "playfulness": {
      "value": 0.6,
      "changes": [
        "Softened color palette edges",
        "Added subtle rounded corners to elements",
        "Increased font weight contrast"
      ]
    },
    "warmness": {
      "value": 0.9,
      "changes": [
        "Shifted color temperature 200K warmer",
        "Increased red/orange undertones by 20%",
        "Selected warmer neutral grays"
      ]
    }
  },
  "generated_assets": {
    "color_palette": {
      "primary": "#B85C38",
      "secondary": "#E8A87C",
      "warm_neutral": "#8B7B7A"
    },
    "typography_preview": {
      "primary_font": "Inter",
      "font_weight": "500",
      "character_spacing": "0.02em"
    },
    "logo_preview": "https://playground.1base.io/playground_abc456/var_def789/logo_preview.png"
  },
  "comparison_metrics": {
    "differentiation_score": 0.73,
    "brand_consistency": 0.89,
    "readability_impact": "+5%",
    "accessibility_maintained": true
  },
  "preview_url": "https://playground.1base.io/playground_abc456/var_def789/preview",
  "credits_used": 6
}
```

### Save and Export Variations

Preserve successful experiments and export assets for use in campaigns.

```http
POST /playground/{playground_id}/variations/{variation_id}/export
```

**Export Options:**
```json
{
  "export_format": "campaign_package",
  "include_assets": ["logos", "color_swatches", "typography_samples", "usage_guidelines"],
  "file_formats": ["png", "svg", "pdf"],
  "resolution": "high",
  "package_name": "Summer Campaign Assets",
  "include_comparison": true,
  "delivery_method": "download_link"
}
```

**Response:**
```json
{
  "export_id": "export_789abc",
  "status": "ready",
  "package_url": "https://exports.1base.io/export_789abc.zip",
  "package_size_mb": 24.7,
  "expires_at": "2024-01-22T20:00:00Z",
  "included_files": [
    "logos/summer_primary.svg",
    "logos/summer_horizontal.png",
    "colors/palette_swatches.pdf",
    "typography/font_samples.pdf",
    "guidelines/usage_notes.pdf"
  ],
  "credits_used": 8
}
```

---

## Visual Inspiration Engine

Extract design elements and style cues from reference images to inform your brand creation process. Our AI analyzes visual inspiration and translates it into actionable brand guidance.

### Upload Reference Images

Analyze and extract style cues from inspiration sources including images, websites, or design references.

```http
POST /inspiration/analyze
```

**Request Body (multipart/form-data):**
```
image: [file upload]
brand_dna_id: "dna_abc123xyz"
extraction_focus: ["color", "style", "composition", "typography"]
analysis_depth: "comprehensive"
```

**Supported File Types:**
- Images: JPG, PNG, GIF, WebP (max 10MB)
- PDFs: Multi-page design documents (max 25MB)
- URLs: Website screenshots and analysis

**Response:**
```json
{
  "analysis_id": "analysis_456def",
  "source_image": "https://temp.1base.io/analysis_456def/source.jpg",
  "extracted_elements": {
    "dominant_colors": [
      {"hex": "#2E8B57", "percentage": 34, "name": "Forest Green"},
      {"hex": "#F4A460", "percentage": 28, "name": "Sandy Brown"},