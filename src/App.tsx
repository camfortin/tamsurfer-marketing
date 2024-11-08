import React, { useState } from 'react';
import { 
  Brain, 
  Target, 
  Search, 
  Briefcase, 
  ChevronRight, 
  Mail,
  Linkedin,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Users2,
  Activity
} from 'lucide-react';
import WebsiteSummary from './components/WebsiteSummary';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-800">TAMSurfer</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#products" className="text-slate-600 hover:text-blue-600 transition-colors">Products</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                Empowering SMBs to <span className="text-blue-600">Outperform</span> with AI-Driven Data
              </h1>
              <p className="text-xl text-slate-600">
                Custom AI solutions to accelerate growth and help you dominate your market
              </p>
              <div className="pt-8 flex justify-center md:justify-start">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/30">
                  Request Beta Access <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Stylized Dashboard Visualization */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg">
                  <Activity className="h-6 w-6" />
                </div>
                
                {/* Dashboard Header */}
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-800">Market Performance</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Live</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">AI Powered</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-slate-600">Growth Rate</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-800">+147%</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users2 className="h-5 w-5 text-blue-500" />
                      <span className="text-sm text-slate-600">New Leads</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-800">2,847</div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-white/10">
                      <div className="h-full w-full flex items-end justify-around">
                        {[40, 70, 45, 65, 80, 60, 90].map((height, i) => (
                          <div
                            key={i}
                            className="w-4 bg-white/80 rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-sm text-slate-600">Conversion</div>
                      <div className="font-semibold text-slate-800">32.8%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-slate-600">Avg. Value</div>
                      <div className="font-semibold text-slate-800">$2.4K</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-slate-600">ROI</div>
                      <div className="font-semibold text-slate-800">891%</div>
                    </div>
                  </div>
                </div>

                {/* Live Updates */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Analyzing new market data...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Summary Tool */}
      <WebsiteSummary />

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            At TAMSurfer, we're committed to revolutionizing how B2B sales and marketing teams operate. 
            By harnessing the power of AI and advanced data analytics, we provide teams with actionable 
            insights that drive real results and create sustainable competitive advantages.
          </p>
        </div>
      </section>

      {/* Product Features */}
      <section id="products" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Target className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Company Lookalikes</h3>
              <p className="text-slate-600 mb-6">
                Discover your ideal prospects using AI-powered audience creation and refinement tools.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                  Natural language targeting
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                  "Hot or Not" refinement
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                  Scalable lookalike search
                </li>
              </ul>
              <button className="w-full bg-slate-100 text-slate-800 py-3 rounded-lg hover:bg-slate-200 transition-colors">
                Request Beta Access
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Search className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Vertical Search Engines</h3>
              <p className="text-slate-600 mb-6">
                Industry-specific search solutions powered by advanced AI algorithms to find your perfect prospects.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                  Custom industry focus
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                  Real-time data updates
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                  Advanced filtering
                </li>
              </ul>
              <button className="w-full bg-slate-100 text-slate-800 py-3 rounded-lg hover:bg-slate-200 transition-colors">
                Contact Us to Partner
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Briefcase className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Consulting Services</h3>
              <p className="text-slate-600 mb-6">
                Expert guidance to optimize your sales and marketing strategies with AI-driven insights.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                  Strategy development
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                  Implementation support
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                  Ongoing optimization
                </li>
              </ul>
              <button className="w-full bg-slate-100 text-slate-800 py-3 rounded-lg hover:bg-slate-200 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 bg-slate-50 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" 
                alt="Team member" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-center text-slate-900">David Chen</h3>
              <p className="text-slate-600 text-center">AI & Data Science Lead</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80" 
                alt="Team member" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-center text-slate-900">Sarah Johnson</h3>
              <p className="text-slate-600 text-center">Product Strategy Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl bg-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Your SIC is SICK!</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to our hilarious and informative newsletter on why most 3rd party data sucks and what you can do about it.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold text-white">TAMSurfer</span>
              </div>
              <p className="text-slate-400">
                Empowering B2B marketers and sales teams with AI-driven insights for better performance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-3">
                <a href="mailto:contact@tamsurfer.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                  contact@tamsurfer.com
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} TAMSurfer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;