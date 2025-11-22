import { HelpCircle, MessageCircle, Users, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqCategories = [
  {
    title: 'Getting Started',
    icon: <Zap className="w-6 h-6" />,
    questions: [
      {
        q: 'How do I create a BlinX account?',
        a: 'Visit our registration page and provide your email address, choose a username, and set a secure password. You can also sign up using social media accounts for faster access.'
      },
      {
        q: 'Is BlinX free to use?',
        a: 'Yes, BlinX offers a completely free tier with access to all core features. We also offer Premium plans with additional features for enhanced experience.'
      },
      {
        q: 'What devices support BlinX?',
        a: 'BlinX works on all modern web browsers (Chrome, Firefox, Safari, Edge) and we have mobile apps available for iOS and Android devices.'
      }
    ]
  },
  {
    title: 'Account & Profile',
    icon: <Users className="w-6 h-6" />,
    questions: [
      {
        q: 'How do I customize my profile?',
        a: 'Go to your profile settings where you can upload a profile picture, add a bio, customize your theme, and manage your privacy preferences.'
      },
      {
        q: 'Can I change my username?',
        a: 'Yes, you can change your username once every 30 days from your account settings. Your old username becomes available for others after the change.'
      },
      {
        q: 'How do I delete my account?',
        a: 'Account deletion can be done in your account settings under "Privacy & Security". Please note this action is permanent and cannot be undone.'
      }
    ]
  },
  {
    title: 'Privacy & Security',
    icon: <Shield className="w-6 h-6" />,
    questions: [
      {
        q: 'How does BlinX protect my data?',
        a: 'We use industry-standard encryption, secure servers, and follow strict data protection protocols. Your personal information is never shared with third parties without your consent.'
      },
      {
        q: 'Can I make my account private?',
        a: 'Yes, you can set your account to private in settings. This means only approved followers can see your posts and interact with your content.'
      },
      {
        q: 'How do I block or report users?',
        a: 'Visit the user profile you want to block or report, click the three-dot menu, and select the appropriate action. Our moderation team reviews all reports promptly.'
      }
    ]
  },
  {
    title: 'Community & Content',
    icon: <MessageCircle className="w-6 h-6" />,
    questions: [
      {
        q: 'What are community guidelines?',
        a: 'Our community guidelines ensure a safe and respectful environment. They prohibit harassment, hate speech, spam, and illegal content while promoting positive interactions.'
      },
      {
        q: 'How do I create a community?',
        a: 'Users with established accounts can create communities. Go to the Communities section, click "Create Community", and follow the setup process with your community rules and description.'
      },
      {
        q: 'What content is not allowed?',
        a: 'We prohibit illegal content, harassment, hate speech, explicit material without warnings, spam, and impersonation. See our complete content policy for details.'
      }
    ]
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <HelpCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Help Center</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions and get the most out of your BlinX experience.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-purple-400">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="glass rounded-2xl p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-gray-300 mb-6">
            Our support team is here to assist you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/app/support">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  Contact Support
              </button>
            </Link>

            <Link to="/">
              <button className="glass hover:glass-dark text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  Visit Community
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}