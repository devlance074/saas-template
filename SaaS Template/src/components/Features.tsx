import React from 'react';
import { Zap, Shield, BarChart3, Users, Rocket, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built for speed with optimized performance and instant loading times.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and SOC 2 compliance.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights and detailed reports to track your business growth.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for teams of any size, anywhere in the world.',
    },
    {
      icon: Rocket,
      title: 'Easy Deployment',
      description: 'Deploy your application in minutes with our one-click deployment system.',
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Lightning-fast content delivery worldwide with 99.9% uptime guarantee.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful features designed to help you build, launch, and scale your SaaS product with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-transparent hover:border-primary-200 dark:hover:border-primary-700"
              >
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;