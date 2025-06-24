import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-20 animate-bounce-subtle"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full opacity-20 animate-bounce-subtle" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full opacity-20 animate-bounce-subtle" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 right-10 w-18 h-18 bg-white rounded-full opacity-20 animate-bounce-subtle" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
          <Sparkles className="h-5 w-5 text-white mr-2" />
          <span className="text-white text-sm font-medium">
            Join 50,000+ happy customers
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Business?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of successful companies already using our platform to grow their business.
          Start your free trial today and see the difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center group">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <button className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
            Talk to Sales
          </button>
        </div>

        <p className="text-white/80 text-sm mt-6">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;