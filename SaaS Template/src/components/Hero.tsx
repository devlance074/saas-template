import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Build Your SaaS Product
            <span className="block text-primary-600 dark:text-primary-400 mt-2">
              10x Faster
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into profitable SaaS products with our comprehensive platform. 
            Everything you need to launch, scale, and grow your business in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center group">
              Try for Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              View Demo
            </button>
          </div>

          {/* Hero Image/Screenshot Mockup */}
          <div className="relative max-w-5xl mx-auto animate-slide-up">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-200 dark:bg-primary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Play className="h-12 w-12 text-primary-600 dark:text-primary-300" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    Dashboard Preview
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-400 rounded-full opacity-20 animate-bounce-subtle"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-400 rounded-full opacity-20 animate-bounce-subtle" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;