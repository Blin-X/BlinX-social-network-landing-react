import { Zap, Users, Shield, Palette, Globe, MessageCircle, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'Real-time Microblogging',
    description: 'Share thoughts, moments, and updates instantly with your audience. Post short-form content that matters.',
    points: [
      'Instant post publishing',
      'Character-limited messages',
      'Quick media sharing',
      'Real-time interactions'
    ]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community Spaces',
    description: 'Create and join communities around shared interests. Build meaningful connections with like-minded people.',
    points: [
      'Topic-based communities',
      'Community moderators',
      'Custom community rules',
      'Member management tools'
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Advanced Privacy',
    description: 'Full control over your content and audience. Choose who sees your posts and interacts with you.',
    points: [
      'Granular privacy settings',
      'Block and mute controls',
      'Content visibility options',
      'Data protection'
    ]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning Fast',
    description: 'Optimized performance for seamless browsing and instant interactions across all devices.',
    points: [
      'Fast loading times',
      'Smooth scrolling',
      'Instant notifications',
      'Mobile optimized'
    ]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Customization',
    description: 'Personalize your experience with themes, layouts, and interface options that suit your style.',
    points: [
      'Dark/Light themes',
      'Custom color schemes',
      'Layout preferences',
      'Accessibility options'
    ]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Reach',
    description: 'Connect with users worldwide. Multi-language support and global community access.',
    points: [
      'Multiple languages',
      'Global communities',
      'Cultural diversity',
      'Worldwide access'
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Platform Features</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover everything BlinX has to offer. From real-time microblogging to advanced community tools.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass rounded-2xl p-6 hover:glass-dark transition-all duration-300 group">
              <div className="text-purple-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass rounded-2xl p-8 text-center">
          <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Join thousands of users already enjoying BlinX features and community.
          </p>
          <Link to="https://blin-x.space/app/">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Join BlinX Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}