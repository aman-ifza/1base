import { useState } from 'react';

interface BusinessInfoFormProps {
  data: {
    companyName: string;
    industry: string;
    targetAudience: string;
    mission: string;
    values: string[];
    competitors: string;
  };
  onUpdate: (data: Partial<BusinessInfoFormProps['data']>) => void;
  onNext: () => void;
}

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Retail',
  'Manufacturing',
  'Entertainment',
  'Food & Beverage',
  'Real Estate',
  'Professional Services',
  'Other'
];

const commonValues = [
  'Innovation',
  'Quality',
  'Customer Focus',
  'Sustainability',
  'Integrity',
  'Excellence',
  'Collaboration',
  'Diversity',
  'Growth',
  'Creativity'
];

export default function BusinessInfoForm({ data, onUpdate, onNext }: BusinessInfoFormProps) {
  const [errors, setErrors] = useState<Partial<Record<keyof BusinessInfoFormProps['data'], string>>>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    
    if (!data.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    if (!data.industry) {
      newErrors.industry = 'Please select an industry';
    }
    if (!data.targetAudience.trim()) {
      newErrors.targetAudience = 'Target audience is required';
    }
    if (!data.mission.trim()) {
      newErrors.mission = 'Mission statement is required';
    }
    if (data.values.length === 0) {
      newErrors.values = 'Please select at least one value';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  const toggleValue = (value: string) => {
    const newValues = data.values.includes(value)
      ? data.values.filter(v => v !== value)
      : [...data.values, value];
    onUpdate({ values: newValues });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name*
        </label>
        <input
          type="text"
          value={data.companyName}
          onChange={(e) => onUpdate({ companyName: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.companyName ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-[#3F27FA]/20 focus:border-[#3F27FA]`}
          placeholder="Enter your company name"
        />
        {errors.companyName && (
          <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Industry*
        </label>
        <select
          value={data.industry}
          onChange={(e) => onUpdate({ industry: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.industry ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-[#3F27FA]/20 focus:border-[#3F27FA] bg-white`}
        >
          <option value="">Select your industry</option>
          {industries.map(industry => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </select>
        {errors.industry && (
          <p className="mt-1 text-sm text-red-500">{errors.industry}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Target Audience*
        </label>
        <textarea
          value={data.targetAudience}
          onChange={(e) => onUpdate({ targetAudience: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.targetAudience ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-[#3F27FA]/20 focus:border-[#3F27FA] min-h-[80px]`}
          placeholder="Describe your target audience (age, interests, needs, etc.)"
        />
        {errors.targetAudience && (
          <p className="mt-1 text-sm text-red-500">{errors.targetAudience}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mission Statement*
        </label>
        <textarea
          value={data.mission}
          onChange={(e) => onUpdate({ mission: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.mission ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-[#3F27FA]/20 focus:border-[#3F27FA] min-h-[80px]`}
          placeholder="What is your company's mission?"
        />
        {errors.mission && (
          <p className="mt-1 text-sm text-red-500">{errors.mission}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Company Values*
        </label>
        <div className="flex flex-wrap gap-2">
          {commonValues.map(value => (
            <button
              key={value}
              type="button"
              onClick={() => toggleValue(value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                data.values.includes(value)
                  ? 'bg-[#3F27FA] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
        {errors.values && (
          <p className="mt-1 text-sm text-red-500">{errors.values}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Main Competitors
        </label>
        <textarea
          value={data.competitors}
          onChange={(e) => onUpdate({ competitors: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3F27FA]/20 focus:border-[#3F27FA] min-h-[80px]"
          placeholder="List your main competitors (optional)"
        />
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="px-6 py-2 bg-[#3F27FA] text-white font-medium rounded-lg hover:bg-[#3F27FA]/90 transition"
        >
          Next Step
        </button>
      </div>
    </form>
  );
} 