import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Award, Shield, DollarSign, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { submitContactForm } from '../mock';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData);
      toast.success('Thank you! We\'ll contact you shortly.');
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (error) {
      toast.error('Something went wrong. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">T&H <span className="text-orange-600">General Contractor</span></h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-orange-600 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">Contact</button>
            <a href="tel:8328899903" className="flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              (832) 889-9903
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">Contact</button>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-orange-600 p-4 z-40 md:hidden shadow-lg">
        <a href="tel:8328899903" className="flex items-center justify-center text-white font-bold">
          <Phone className="w-5 h-5 mr-2" />
          Call Now: (832) 889-9903
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDB8fHx8MTc2ODM5NjY2NXww&ixlib=rb-4.1.0&q=85" 
            alt="Professional Construction Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Your Trusted General Contractor in <span className="text-orange-500">Humble, TX</span></h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Construction, Roofing & Remodeling with 20+ Years of Experience</p>
          
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5 mr-2 text-orange-500" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <DollarSign className="w-5 h-5 mr-2 text-orange-500" />
              <span className="font-semibold">Financing Available</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 mr-2 text-orange-500" />
              <span className="font-semibold">Free Estimates</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:8328899903">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-bold shadow-lg transition-transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (832) 889-9903
              </Button>
            </a>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-lg transition-transform hover:scale-105"
            >
              Request Free Estimate
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Award className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-3xl font-bold text-gray-800 mb-2">20+</h3>
                <p className="text-gray-600 font-semibold">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-3xl font-bold text-gray-800 mb-2">100%</h3>
                <p className="text-gray-600 font-semibold">Customer Satisfaction</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-3xl font-bold text-gray-800 mb-2">50</h3>
                <p className="text-gray-600 font-semibold">Miles Coverage</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Shield className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Licensed</h3>
                <p className="text-gray-600 font-semibold">& Insured</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">About <span className="text-orange-600">T&H General Contractor</span></h2>
            <div className="h-1 w-24 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                With over <strong>20 years of experience</strong> serving Humble, TX and surrounding areas, T&H General Contractor LLC has built a reputation for quality, reliability, and exceptional customer service.
              </p>
              <p>
                We specialize in delivering complete construction solutions—from new builds to roofing and remodeling. Our team handles every aspect of your project with precision and care, ensuring you're informed every step of the way.
              </p>
              <p>
                <strong>Our commitment is simple:</strong> Clear communication, transparent processes, and 100% customer satisfaction. We don't just build structures; we build lasting relationships with our clients.
              </p>
              <p>
                Whether you're planning a new construction project, need expert roofing services, or want to transform your space with a remodel, we're here to bring your vision to life—on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Our <span className="text-orange-500">Services</span></h2>
          <div className="h-1 w-24 bg-orange-600 mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* New Construction */}
            <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5" 
                  alt="New Construction"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">New Construction</h3>
                <p className="text-gray-600 mb-4">
                  From ground up to move-in ready, we manage every phase of your construction project with expertise and attention to detail.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Residential & Commercial Buildings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Custom Home Design & Build</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Complete Project Management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Roofing Services */}
            <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1" 
                  alt="Roofing Services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Roofing Services</h3>
                <p className="text-gray-600 mb-4">
                  Protect your investment with professional roofing services. We handle installations, repairs, and replacements with quality materials.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>New Roof Installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Roof Repair & Maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Storm Damage Restoration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Remodeling & Additions */}
            <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15" 
                  alt="Remodeling & Additions"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Remodeling & Additions</h3>
                <p className="text-gray-600 mb-4">
                  Transform your existing space into the home of your dreams. We bring fresh ideas and expert craftsmanship to every remodel.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Kitchen & Bathroom Remodels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Home Additions & Extensions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Full Home Renovations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-bold shadow-lg transition-transform hover:scale-105"
            >
              Get Your Free Estimate
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <DollarSign className="w-16 h-16 mx-auto mb-4 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Financing Available</h2>
          <p className="text-xl text-white mb-6 max-w-2xl mx-auto">
            Get the project done without delaying your plans. We offer flexible financing options to make your dream project a reality.
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-lg transition-transform hover:scale-105"
          >
            Ask About Financing
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Our <span className="text-orange-600">Work</span></h2>
          <div className="h-1 w-24 bg-orange-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Take a look at some of our completed projects. We take pride in delivering exceptional quality and craftsmanship in every job.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1694105050266-911023811297',
              'https://images.unsplash.com/photo-1630705684312-81b759243dde',
              'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
              'https://images.unsplash.com/photo-1523217582562-09d0def993a6',
              'https://images.unsplash.com/photo-1691425700585-c108acad6467',
              'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
              'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg',
              'https://images.unsplash.com/photo-1646592474227-52da98838a6f',
              'https://images.unsplash.com/photo-1646592491550-6ef7a11ecc58'
            ].map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-72">
                <img 
                  src={img} 
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="w-16 h-16 mx-auto mb-4 text-orange-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Service Area</h2>
          <p className="text-xl text-gray-300 mb-6">
            <strong className="text-white">We cover 50 miles around Humble, TX</strong>
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Serving Humble, Houston, Kingwood, Atascocita, Spring, The Woodlands, and surrounding communities in the Greater Houston area.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Get Your <span className="text-orange-600">Free Estimate</span></h2>
          <div className="h-1 w-24 bg-orange-600 mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">Humble, TX 77338</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone Numbers</h4>
                    <p className="text-gray-600">
                      Main: <a href="tel:8328899903" className="text-orange-600 hover:underline font-semibold">(832) 889-9903</a>
                    </p>
                    <p className="text-gray-600">
                      Office: <a href="tel:8324474917" className="text-orange-600 hover:underline font-semibold">(832) 447-4917</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@thgc-llc.com" className="text-orange-600 hover:underline">info@thgc-llc.com</a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:thgeneral17@gmail.com" className="text-orange-600 hover:underline">thgeneral17@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">Why Choose Us?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600" />
                    20+ Years of Experience
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600" />
                    Licensed & Insured
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600" />
                    100% Customer Satisfaction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-orange-600" />
                    Financing Available
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-none">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <Input 
                        id="name"
                        name="name"
                        type="text" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel" 
                        placeholder="(832) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <Input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                      <select 
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">Select a service</option>
                        <option value="New Construction">New Construction</option>
                        <option value="Roofing">Roofing Services</option>
                        <option value="Remodeling">Remodeling & Additions</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-6 text-lg transition-transform hover:scale-105"
                    >
                      {isSubmitting ? 'Sending...' : 'Request Free Estimate'}
                      {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">T&H <span className="text-orange-500">General Contractor</span></h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner for construction, roofing, and remodeling in Humble, TX.
              </p>
              <p className="text-gray-400">
                Licensed & Insured | 20+ Years Experience
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-orange-500 transition-colors">New Construction</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Roofing Services</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Remodeling & Additions</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition-colors">Free Estimates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Humble, TX 77338</li>
                <li><a href="tel:8328899903" className="hover:text-orange-500 transition-colors">(832) 889-9903</a></li>
                <li><a href="tel:8324474917" className="hover:text-orange-500 transition-colors">(832) 447-4917</a></li>
                <li><a href="mailto:info@thgc-llc.com" className="hover:text-orange-500 transition-colors">info@thgc-llc.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} T&H General Contractor LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;