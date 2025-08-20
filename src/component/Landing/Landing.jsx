import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, CheckCircle, ArrowRight, Star, Menu, X, Building2, GraduationCap, Search, Send, Code, Laptop, Zap, Globe, Database, Smartphone } from 'lucide-react';
import heroImage from '../../assets/hero.png';
const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 0 20px rgba(59, 130, 246, 0); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        .gradient-text {
          background: linear-gradient(135deg, #3B82F6, #10B981, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tech-grid-bg {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>

      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold gradient-text">AcademixHub</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">For Students</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">For Companies</a>
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300">Login</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">Sign Up</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 p-2 transition-all duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden transform transition-all duration-300 ease-in-out">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-100">
                <a href="#" className="text-gray-900 block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-lg transition-all">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-lg transition-all">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-lg transition-all">For Students</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-lg transition-all">For Companies</a>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex flex-col space-y-2 px-3">
                    <button className="text-gray-700 hover:text-blue-600 text-left py-2 text-base font-medium transition-all">Login</button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:scale-105">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-12 lg:py-20 overflow-hidden tech-grid-bg">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full animate-float opacity-30" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-100 rounded-full animate-float opacity-20" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-100 rounded-full animate-float opacity-25" style={{animationDelay: '4s'}}></div>

        <div 
          className="w-full px-4 sm:px-6 lg:px-8"
          style={{transform: `translateY(${scrollY * 0.1}px)`}}
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left Side */}
            <div className="mb-8 lg:mb-0 animate-on-scroll">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">🚀 Tech Internships & SIWES</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Connecting Students with 
                <span className="gradient-text"> Tech Opportunities</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Find tech-related internships, SIWES placements, and cutting-edge industry opportunities. Bridge the gap between academic learning and the dynamic world of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group animate-pulse-glow">
                  Find Tech Opportunities
                  <Search className="ml-2 transition-transform group-hover:scale-110" size={20} />
                </button>
                <button className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  Post Tech Internship
                  <Send className="ml-2 transition-transform group-hover:scale-110" size={20} />
                </button>
              </div>
              {/* Stats */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Tech Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">200+</div>
                  <div className="text-sm text-gray-600">SIWES Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">150+</div>
                  <div className="text-sm text-gray-600">Tech Companies</div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative animate-on-scroll">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:shadow-3xl">
                <img 
                  src={heroImage} 
                  alt="Tech Students and Innovation"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              {/* Floating tech elements */}
              <div className="absolute -top-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <Code size={24} />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                <Laptop size={24} />
              </div>
              <div className="absolute top-1/2 -right-8 bg-purple-500 text-white p-2 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                <Zap size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Skills Banner */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 py-4 overflow-hidden">
        <div className="flex animate-pulse">
          <div className="flex space-x-8 text-white whitespace-nowrap">
            {['JavaScript', 'Python', 'React', 'Node.js', 'AI/ML', 'Data Science', 'Mobile Development', 'Cloud Computing', 'Cybersecurity', 'UI/UX Design'].map((skill, index) => (
              <span key={index} className="text-lg font-semibold opacity-80">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gray-50 relative">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose AcademixHub for Tech?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Empowering the next generation of tech professionals with cutting-edge opportunities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tech-focused Features */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-on-scroll group">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Tech Roles</h3>
              <p className="text-gray-600">Access to thoroughly vetted tech internships from startups to Fortune 500 companies.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-on-scroll group">
              <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SIWES Integration</h3>
              <p className="text-gray-600">Seamlessly find and apply for SIWES placements that align with your tech career goals.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-on-scroll group">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill Matching</h3>
              <p className="text-gray-600">AI-powered matching system that connects you with opportunities based on your tech skills.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-on-scroll group">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">Connect with tech companies locally and internationally for diverse experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get started in your tech journey with three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 w-1/4 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-500 transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 right-1/4 w-1/4 h-0.5 bg-gradient-to-r from-emerald-500 to-purple-600 transform -translate-y-1/2"></div>

            <div className="text-center animate-on-scroll">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Tech Profile</h3>
              <p className="text-gray-600">Sign up and showcase your tech skills, projects, and career interests.</p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discover & Apply</h3>
              <p className="text-gray-600">Browse tech internships, SIWES opportunities, and apply with personalized recommendations.</p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Launch Your Career</h3>
              <p className="text-gray-600">Start your tech journey with hands-on experience and industry mentorship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Popular Tech Stacks</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Find opportunities in the most in-demand technologies</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Frontend', icon: <Globe size={24} />, color: 'from-blue-500 to-cyan-500' },
              { name: 'Backend', icon: <Database size={24} />, color: 'from-green-500 to-emerald-500' },
              { name: 'Mobile', icon: <Smartphone size={24} />, color: 'from-purple-500 to-pink-500' },
              { name: 'DevOps', icon: <Zap size={24} />, color: 'from-orange-500 to-red-500' },
              { name: 'AI/ML', icon: <Code size={24} />, color: 'from-indigo-500 to-purple-500' },
              { name: 'Data', icon: <Laptop size={24} />, color: 'from-teal-500 to-green-500' }
            ].map((tech, index) => (
              <div key={index} className="text-center animate-on-scroll group">
                <div className={`bg-gradient-to-br ${tech.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-white group-hover:text-gray-300 transition-colors">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gray-50 relative">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from tech students and companies who've found success through AcademixHub</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                "Through AcademixHub, I landed my dream SIWES placement at a fintech startup. The experience shaped my career in software development!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">OA</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Olumide Adebayo</h4>
                  <p className="text-gray-600">Computer Science Student, UNILAG</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                "AcademixHub connects us with brilliant tech minds. Our interns have contributed significantly to our AI and web development projects."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 font-semibold">AO</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Aisha Okafor</h4>
                  <p className="text-gray-600">CTO, TechNova Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Launch Your Tech Career?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of students and companies building the future of technology together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                Get Started as Student
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Post Opportunities
                <Building2 className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4 gradient-text">AcademixHub</h3>
              <p className="text-gray-400 mb-4">Connecting students with real-world tech experience through meaningful internship and SIWES opportunities.</p>
            </div>

            <div className="animate-on-scroll">
              <h4 className="font-semibold mb-4">For Students</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Find Internships</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">SIWES Placements</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Tech Skills</a></li>
              </ul>
            </div>

            <div className="animate-on-scroll">
              <h4 className="font-semibold mb-4">For Companies</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Post Opportunities</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Find Talent</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Partnership</a></li>
              </ul>
            </div>

            <div className="animate-on-scroll">
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600">
                    <span className="text-sm">t</span>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600">
                    <span className="text-sm">in</span>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600">
                    <span className="text-sm">ig</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center animate-on-scroll">
            <p className="text-gray-400">&copy; 2024 AcademixHub. Bridging the gap between academic learning and tech industry excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;