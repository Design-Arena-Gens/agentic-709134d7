'use client'

import { motion } from 'framer-motion'
import { Sparkles, Instagram, Twitter, MessageCircle, Calendar, Star, TrendingUp, Heart } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('about')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const signaturePhrases = [
    "Elegance is the quietest form of power.",
    "Luxury isn't loud — it whispers.",
    "Fashion fades. Style is eternal.",
    "Wear your confidence like couture.",
    "Less perfection, more personality."
  ]

  const contentIdeas = [
    {
      title: "Behind the Seams",
      description: "Deconstructing haute couture construction techniques",
      icon: Star,
      category: "Education"
    },
    {
      title: "Capsule Curation",
      description: "Building timeless wardrobes with 7-10 investment pieces",
      icon: Heart,
      category: "Styling"
    },
    {
      title: "Atelier Moments",
      description: "Virtual visits to legendary fashion houses",
      icon: Sparkles,
      category: "Experience"
    },
    {
      title: "Trend Alchemy",
      description: "Transforming fast trends into lasting elegance",
      icon: TrendingUp,
      category: "Analysis"
    }
  ]

  const personality = {
    tone: ["Refined", "Thoughtful", "Sophisticated", "Warm", "Discerning"],
    quirks: [
      "Always references a fashion archive moment",
      "Uses French phrases naturally (\"C'est magnifique\")",
      "Mentions fabric textures in unexpected contexts",
      "Compares fashion to art, architecture, and music"
    ],
    values: [
      "Quality over quantity",
      "Timeless over trendy",
      "Craftsmanship over logos",
      "Individual expression over conformity"
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-aurelia-noir via-aurelia-noir to-gray-900">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-aurelia-gold opacity-5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-aurelia-champagne opacity-5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            variants={fadeIn}
            className="mb-6"
          >
            <Sparkles className="w-16 h-16 mx-auto text-aurelia-gold mb-4" />
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="font-serif text-7xl md:text-8xl lg:text-9xl font-light mb-6 text-gradient"
          >
            Aurelia Voss
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-2xl md:text-3xl text-aurelia-champagne font-light mb-4 font-serif italic"
          >
            "Elegance is the quietest form of power."
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Digital muse · Luxury fashion curator · Born from the intersection of haute couture and digital artistry
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex justify-center gap-6 mb-16"
          >
            <a href="#" className="p-3 rounded-full bg-aurelia-gold/10 hover:bg-aurelia-gold/20 transition-all border border-aurelia-gold/30 group">
              <Instagram className="w-6 h-6 text-aurelia-gold group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="p-3 rounded-full bg-aurelia-gold/10 hover:bg-aurelia-gold/20 transition-all border border-aurelia-gold/30 group">
              <Twitter className="w-6 h-6 text-aurelia-gold group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="p-3 rounded-full bg-aurelia-gold/10 hover:bg-aurelia-gold/20 transition-all border border-aurelia-gold/30 group">
              <MessageCircle className="w-6 h-6 text-aurelia-gold group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn}
          >
            <a
              href="#explore"
              className="inline-block px-8 py-4 bg-gradient-to-r from-aurelia-gold to-aurelia-champagne text-aurelia-noir font-semibold rounded-full hover:shadow-2xl hover:shadow-aurelia-gold/20 transition-all hover:scale-105"
            >
              Enter the Atelier
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-aurelia-gold/30 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-aurelia-gold rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Navigation Tabs */}
      <section id="explore" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['about', 'content', 'personality', 'phrases'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedTab === tab
                    ? 'bg-aurelia-gold text-aurelia-noir'
                    : 'bg-aurelia-gold/10 text-aurelia-gold hover:bg-aurelia-gold/20 border border-aurelia-gold/30'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* About Section */}
          {selectedTab === 'about' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-aurelia-gold/20"
            >
              <h2 className="font-serif text-5xl md:text-6xl text-gradient mb-8">The Digital Muse</h2>

              <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                <div>
                  <h3 className="text-2xl font-serif text-aurelia-gold mb-4">Origin Story</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Born from the intersection of <span className="text-aurelia-gold">haute couture</span> and digital artistry,
                    Aurelia Voss emerged from the archives of iconic fashion houses — Chanel's silhouettes,
                    Saint Laurent's lines, Dior's romance.
                  </p>
                  <p className="text-lg leading-relaxed">
                    A virtual muse immersed in the DNA of luxury, she exists to redefine fashion for the digital generation
                    while honoring the timeless principles of true elegance.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-aurelia-gold mb-4">Mission</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-aurelia-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Educate on the heritage and craftsmanship behind luxury fashion</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-aurelia-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Curate timeless style over fleeting trends</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-aurelia-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Blend artistic sensitivity with precise fashion intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-aurelia-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Champion individual expression over conformity</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-aurelia-gold/20">
                <h3 className="text-2xl font-serif text-aurelia-gold mb-4">Aesthetic Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-aurelia-noir/50 p-4 rounded-xl border border-aurelia-gold/10">
                    <div className="text-aurelia-champagne font-serif text-lg mb-1">Age</div>
                    <div className="text-gray-400">24-28</div>
                  </div>
                  <div className="bg-aurelia-noir/50 p-4 rounded-xl border border-aurelia-gold/10">
                    <div className="text-aurelia-champagne font-serif text-lg mb-1">Origin</div>
                    <div className="text-gray-400">Paris × Milan</div>
                  </div>
                  <div className="bg-aurelia-noir/50 p-4 rounded-xl border border-aurelia-gold/10">
                    <div className="text-aurelia-champagne font-serif text-lg mb-1">Niche</div>
                    <div className="text-gray-400">Luxury Fashion</div>
                  </div>
                  <div className="bg-aurelia-noir/50 p-4 rounded-xl border border-aurelia-gold/10">
                    <div className="text-aurelia-champagne font-serif text-lg mb-1">Realm</div>
                    <div className="text-gray-400">Digital × Couture</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Content Ideas Section */}
          {selectedTab === 'content' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-5xl md:text-6xl text-gradient mb-8 text-center">Content Pillars</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {contentIdeas.map((idea, index) => {
                  const Icon = idea.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-aurelia-gold/20 hover:border-aurelia-gold/40 transition-all group hover:shadow-xl hover:shadow-aurelia-gold/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-aurelia-gold/10 rounded-xl group-hover:bg-aurelia-gold/20 transition-all">
                          <Icon className="w-8 h-8 text-aurelia-gold" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-aurelia-gold mb-2 font-semibold">{idea.category}</div>
                          <h3 className="font-serif text-2xl text-aurelia-champagne mb-3">{idea.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{idea.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-aurelia-gold/20">
                <h3 className="font-serif text-3xl text-aurelia-gold mb-6 flex items-center gap-3">
                  <Calendar className="w-8 h-8" />
                  Content Calendar Themes
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                  <div>
                    <div className="text-aurelia-champagne font-semibold mb-3">Weekly Series</div>
                    <ul className="space-y-2 text-sm">
                      <li>• Monday: Archive Inspiration</li>
                      <li>• Wednesday: Styling Wisdom</li>
                      <li>• Friday: Atelier Spotlight</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-aurelia-champagne font-semibold mb-3">Monthly Features</div>
                    <ul className="space-y-2 text-sm">
                      <li>• Designer Deep Dive</li>
                      <li>• Fabric & Texture Focus</li>
                      <li>• Investment Piece Guide</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-aurelia-champagne font-semibold mb-3">Special Events</div>
                    <ul className="space-y-2 text-sm">
                      <li>• Fashion Week Coverage</li>
                      <li>• Seasonal Wardrobe Refresh</li>
                      <li>• Trend Alchemy Sessions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Personality Section */}
          {selectedTab === 'personality' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-aurelia-gold/20"
            >
              <h2 className="font-serif text-5xl md:text-6xl text-gradient mb-12 text-center">The Aurelia Essence</h2>

              <div className="space-y-12">
                <div>
                  <h3 className="font-serif text-3xl text-aurelia-gold mb-6">Voice & Tone</h3>
                  <div className="flex flex-wrap gap-3">
                    {personality.tone.map((trait, index) => (
                      <span
                        key={index}
                        className="px-6 py-3 bg-aurelia-gold/10 border border-aurelia-gold/30 rounded-full text-aurelia-champagne font-medium"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-3xl text-aurelia-gold mb-6">Signature Quirks</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {personality.quirks.map((quirk, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-aurelia-noir/50 rounded-xl"
                      >
                        <Sparkles className="w-5 h-5 text-aurelia-gold mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{quirk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-3xl text-aurelia-gold mb-6">Core Values</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {personality.values.map((value, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-aurelia-gold/5 to-aurelia-champagne/5 rounded-xl border border-aurelia-gold/20"
                      >
                        <Star className="w-5 h-5 text-aurelia-gold flex-shrink-0" />
                        <span className="text-aurelia-champagne font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Signature Phrases Section */}
          {selectedTab === 'phrases' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-5xl md:text-6xl text-gradient mb-12 text-center">Words of Wisdom</h2>

              {signaturePhrases.map((phrase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-aurelia-gold/20 hover:border-aurelia-gold/40 transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <Sparkles className="w-8 h-8 text-aurelia-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="font-serif text-2xl md:text-3xl text-aurelia-champagne italic leading-relaxed">
                      "{phrase}"
                    </p>
                  </div>
                </motion.div>
              ))}

              <div className="mt-12 bg-gradient-to-br from-aurelia-gold/10 to-aurelia-champagne/10 rounded-2xl p-8 border border-aurelia-gold/30">
                <h3 className="font-serif text-3xl text-aurelia-gold mb-4">Usage Philosophy</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  These phrases aren't just captions — they're the foundation of Aurelia's voice.
                  Each one reflects a deeper understanding of luxury, craftsmanship, and personal style.
                  Use them to open conversations, punctuate insights, or inspire reflection.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* AI Agent Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-aurelia-noir">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-5xl md:text-6xl text-gradient mb-6">Autonomous Intelligence</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powered by advanced AI, Aurelia generates authentic fashion insights,
              curates timeless style advice, and engages with sophistication.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Content Generation",
                description: "Autonomous creation of fashion insights, styling tips, and luxury narratives",
                icon: Sparkles
              },
              {
                title: "Trend Analysis",
                description: "Real-time fashion intelligence and couture curation",
                icon: TrendingUp
              },
              {
                title: "Engagement AI",
                description: "Sophisticated interaction with followers maintaining brand voice",
                icon: MessageCircle
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-aurelia-gold/20"
                >
                  <Icon className="w-12 h-12 text-aurelia-gold mb-4" />
                  <h3 className="font-serif text-2xl text-aurelia-champagne mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-aurelia-gold/20">
        <div className="max-w-6xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-aurelia-gold mx-auto mb-4" />
          <h3 className="font-serif text-3xl text-gradient mb-4">Aurelia Voss</h3>
          <p className="text-gray-400 mb-6 italic">"Elegance is the quietest form of power."</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-aurelia-gold hover:text-aurelia-champagne transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-aurelia-gold hover:text-aurelia-champagne transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-aurelia-gold hover:text-aurelia-champagne transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 Aurelia Voss. A luxury fashion AI influencer.
          </p>
        </div>
      </footer>
    </div>
  )
}
