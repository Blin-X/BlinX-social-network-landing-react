import { motion } from 'framer-motion';
import { Crown, Zap, Shield, Palette, Users, Star, Check, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useState } from 'react';

interface Plan {
  name: string;
  price: string;
  period: string;
  originalPrice?: string;
  features: string[];
  cta: string;
  popular: boolean;
  description?: string;
  savings?: string;
}

export default function PremiumPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Accelerated feed",
      description: "Priority content loading and no ads"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Exclusive themes",
      description: "Access to unique themes and customization"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced security",
      description: "Additional privacy settings and account protection"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Premium communities", 
      description: "Create and participate in exclusive communities"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Special status",
      description: "Dedicated premium user badge"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Early access",
      description: "Access to new features before public release"
    }
  ];

  const plans: Plan[] = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      features: ["Basic feed", "Standard themes", "Basic security"],
      cta: "Current Plan",
      popular: false,
      description: "Perfect for getting started"
    },
    {
      name: "Premium",
      price: billingPeriod === 'monthly' ? "250" : "1000",
      period: billingPeriod === 'monthly' ? "per month" : "per year",
      originalPrice: billingPeriod === 'yearly' ? "3000" : "",
      features: [
        "Accelerated feed without ads",
        "Exclusive themes", 
        "Enhanced security",
        "Premium communities",
        "Special status",
        "Early access to features"
      ],
      cta: "Upgrade to Premium",
      popular: true,
      description: billingPeriod === 'yearly' ? "Best value - save 67%" : "Full access to all features",
      savings: billingPeriod === 'yearly' ? "Save 2000₽" : ""
    }
  ];

  // Динамический контент в зависимости от периода
  const dynamicContent = {
    monthly: {
      title: "Monthly Plan",
      subtitle: "Flexible monthly subscription",
      highlight: "Cancel anytime"
    },
    yearly: {
      title: "Yearly Plan", 
      subtitle: "Best value - 67% discount",
      highlight: "Save 2000₽ per year"
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Hero section */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 glass-dark rounded-full px-6 py-3 mb-6">
              <Crown className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">BlinX Premium</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Expand possibilities</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get exclusive access to premium features and support platform development
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <motion.div
              key={billingPeriod}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {dynamicContent[billingPeriod].title}
              </h2>
              <p className="text-lg text-gray-300 mb-2">
                {dynamicContent[billingPeriod].subtitle}
              </p>
              {dynamicContent[billingPeriod].highlight && (
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center space-x-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{dynamicContent[billingPeriod].highlight}</span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center mb-12"
          >
            <div className="relative glass rounded-2xl p-1 inline-flex overflow-hidden">
              <motion.div
                className="absolute bg-purple-500 rounded-lg shadow-lg shadow-purple-500/25"
                initial={false}
                animate={{
                  x: billingPeriod === 'monthly' ? '0%' : '100%',
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  width: 'calc(50% - 4px)',
                  height: 'calc(100% - 8px)',
                  top: '4px',
                  left: '4px',
                }}
              />
              
              {['monthly', 'yearly'].map((period) => (
                <motion.button
                  key={period}
                  onClick={() => setBillingPeriod(period as 'monthly' | 'yearly')}
                  className={`relative px-8 py-3 rounded-lg transition-all duration-200 z-10 min-w-[120px] text-center ${
                    billingPeriod === period
                      ? 'text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {period === 'monthly' ? 'Monthly' : 'Yearly'}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`glass rounded-3xl p-8 relative flex flex-col h-full ${
                  plan.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 flex-1">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  
                  {plan.description && (
                    <motion.p 
                      key={`${plan.name}-${billingPeriod}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-purple-400 text-sm mb-3"
                    >
                      {plan.description}
                    </motion.p>
                  )}
                  
                  <div className="flex items-baseline justify-center space-x-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price} ₽</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  
                  {plan.savings && (
                    <motion.div
                      key={`savings-${billingPeriod}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-green-400 text-sm font-medium mb-2"
                    >
                      {plan.savings}
                    </motion.div>
                  )}
                  
                  {plan.originalPrice && (
                    <div className="text-gray-400 line-through text-sm">
                      {plan.originalPrice} ₽
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-gray-300">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <motion.button
                    onClick={() => window.location.href = '/app/settings?page=premium'}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-purple-500 hover:bg-purple-600 text-white shadow-lg'
                        : 'glass hover:glass-dark text-white border border-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-center mb-12">All premium features</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-6 rounded-xl hover:glass-dark transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-purple-400 mb-4 inline-flex">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}