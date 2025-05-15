import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="noise" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0a0f2d]/90 backdrop-blur-sm z-50 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Image
            src="/navbarlogo.png"
            alt="CTRL Logo"
            width={180}
            height={60}
            className="h-16 w-auto"
          />
          <div className="flex gap-8 items-center">
            <a href="#programs" className="text-[var(--color-accent)] font-mono nav-link">Programs</a>
            <a href="#toolkit" className="text-[var(--color-accent)] font-mono nav-link">Toolkit</a>
            <a href="#team" className="text-[var(--color-accent)] font-mono nav-link">Our Team</a>
            <a href="#contact" className="text-[var(--color-accent)] font-mono nav-link">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline z-10 cyber-grid zine-shapes">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2d] via-transparent to-[#0a0f2d] z-20"></div>
        <div className="floating-shape floating-shape-1"></div>
        <div className="floating-shape floating-shape-2"></div>
        <div className="floating-shape floating-shape-3"></div>
        <div className="floating-shape floating-shape-4"></div>
        <div className="floating-shape floating-shape-5"></div>
        <div className="floating-shape floating-shape-6"></div>
        <div className="container mx-auto px-4 text-center relative z-30">
          <div className="mb-16">
            
          </div>
          
          <div className="relative mb-12 max-w-7xl mx-auto px-4 md:px-8">
            {/* Megaphone Background */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 pointer-events-none z-0 hidden md:block">
              <Image
                src="/megaphone.png"
                alt="Megaphone"
                width={200}
                height={200}
                className="w-80 h-80 opacity-30"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="space-y-8">
                <h1 
                  className="text-5xl md:text-7xl lg:text-8xl font-bold glitch tracking-tight"
                  data-text="YOU ARE NOT YOUR ALGORITHM."
                >
                  YOU ARE NOT YOUR ALGORITHM.
                </h1>
                
                <div className="space-y-6">
                  <p className="text-sm md:text-base font-mono text-[var(--color-accent)] leading-relaxed">
                    It's time to reclaim your identity from filters, trends, and noise.
                  </p>

            
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#join" className="btn-ctrl w-full md:w-auto">
              Start a Chapter
            </a>
            <a href="#schools" className="btn-ctrl w-full md:w-auto">
              Bring CTRL to Your School
            </a>
            <a href="#toolkit" className="btn-ctrl w-full md:w-auto">
              Download the Toolkit
            </a>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="py-32 relative z-10 bg-black/20 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12 accent-text uppercase">
            Our Partners
          </h2>
          <div className="scroll-container">
            <div className="scroll-content">
              {[
                'Tech For Good',
                'Youth Impact Lab',
                'Digital Wellness Institute',
                'Teen Mental Health',
                'Future Leaders Network',
                'Tech For Good',
                'Youth Impact Lab',
                'Digital Wellness Institute',
                'Teen Mental Health',
                'Future Leaders Network'
              ].map((partner, index) => (
                <div 
                  key={`${partner}-${index}`}
                  className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-lg flex items-center justify-center min-w-[200px]"
                >
                  <p className="text-lg font-mono">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* About/Manifesto Section */}
      <section id="about" className="py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-[700px]">
              <div className="zine-section image-container">
                <Image
                  src="/teens-collage.jpg"
                  alt="Youth Empowerment"
                  width={700}
                  height={700}
                  className="grayscale contrast-125 mix-blend-screen w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 
                className="text-4xl md:text-5xl font-bold mb-8 glitch"
                data-text="This isn't a digital detox. It's a digital rebellion."
              >
                This isn't a digital detox. It's a digital rebellion.
              </h2>
              <div className="zine-section">
                <p className="text-xl mb-6">
                CTRL (Conscious Tech Reclaim Lab) empowers middle and high school students to reclaim control of their identity in a digital world flooded with trends, filters, and consumerism.
                Through school-based programs, interactive toolkits, and social storytelling, we help young people develop clarity, digital literacy, and values-based expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section id="programs" className="py-24 relative z-10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 glitch"
            data-text="Our Programs"
          >
            Our Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* CTRL Labs */}
            <div className="space-y-8">

              <div className="zine-section">
                <h3 className="text-2xl font-bold mb-4 font-mono uppercase">CTRL Labs</h3>
                <ul className="space-y-4 text-lg list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] font-mono">&#x2192;</span>
                    <span>Weekly sessions exploring digital well-being</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] font-mono">&#x2192;</span>
                    <span>Peer-led discussions and activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] font-mono">&#x2192;</span>
                    <span>Creative projects and challenges</span>
                  </li>
                </ul>
                <a href="#book" className="btn-ctrl mt-8 inline-block">
                  Book a CTRL Lab
                </a>
              </div>
            </div>

            {/* CTRL Toolkit */}
            <div className="space-y-8">

              <div className="zine-section">
                <h3 className="text-2xl font-bold mb-4 font-mono uppercase">CTRL Toolkit</h3>
                <p className="mb-6">Free, open access DIY version with everything you need:</p>
                <ul className="space-y-4 text-lg list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] font-mono">&#x2192;</span>
                    <span>Workshop Slides & Materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] font-mono">&#x2192;</span>
                    <span>Journal Prompts & Activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] font-mono">&#x2192;</span>
                    <span>Discussion Guides & Resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] font-mono">&#x2192;</span>
                    <span>Youth Leader Manual</span>
                  </li>
                </ul>
                <a href="#download" className="btn-ctrl mt-8 inline-block">
                  Download Toolkit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="zine-section image-container">
              <Image
                src="/ctrl-labs.jpg"
                alt="CTRL Labs Session"
                width={500}
                height={300}
                className="w-full h-auto grayscale contrast-125 mix-blend-screen"
              />
            </div>
            <div className="zine-section image-container">
              <Image
                src="/ctrl-toolkit.jpg"
                alt="CTRL Toolkit Preview"
                width={500}
                height={300}
                className="w-full h-auto grayscale contrast-125 mix-blend-screen"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '50+', label: 'Schools Impacted' },
              { number: '2,000+', label: 'Youth Reached' },
              { number: '85%', label: 'Report Better Digital Wellbeing' }
            ].map((metric) => (
              <div key={metric.number} className="zine-section text-center p-8">
                <p className="text-4xl md:text-5xl font-bold mb-2">{metric.number}</p>
                <p className="accent-text uppercase tracking-wide">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambassador Section */}
      <section id="ambassador" className="py-32 relative z-10 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-8 accent-text uppercase">Become a CTRL Ambassador</h2>
            <p className="text-xl mb-8 font-mono">Lead the movement for digital liberation in your community.</p>
            <div className="zine-section p-8 mb-8">
              <ul className="space-y-4 text-lg list-none">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)] font-mono">&#x2192;</span>
                  <span>Start a CTRL chapter at your school</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)] font-mono">&#x2192;</span>
                  <span>Get trained in our methodology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)] font-mono">&#x2192;</span>
                  <span>Access exclusive resources & support</span>
                </li>
              </ul>
            </div>
            <a href="#apply" className="btn-ctrl text-lg">Apply Now</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#0a0f2d] relative z-10 border-t border-[var(--color-cream)]/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mt-4">
            <div className="flex flex-col justify-start">
              <Image
                src="/navbarlogo.png"
                alt="CTRL Logo"
                width={180}
                height={210}
                className="h-48 w-48 mb-4 -mt-4"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-[var(--color-cream)] font-mono uppercase">Programs</h3>
              <ul className="space-y-2">
                <li><a href="#labs" className="hover:text-[var(--color-accent)] transition-colors">CTRL Labs</a></li>
                <li><a href="#schools" className="hover:text-[var(--color-accent)] transition-colors">School Programs</a></li>
                <li><a href="#workshops" className="hover:text-[var(--color-accent)] transition-colors">Workshops</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-[var(--color-cream)] font-mono uppercase">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#toolkit" className="hover:text-[var(--color-accent)] transition-colors">Toolkit</a></li>
                <li><a href="#research" className="hover:text-[var(--color-accent)] transition-colors">Research</a></li>
                <li><a href="#blog" className="hover:text-[var(--color-accent)] transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-[var(--color-cream)] font-mono uppercase">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#ambassador" className="hover:text-[var(--color-accent)] transition-colors">Become an Ambassador</a></li>
                <li><a href="#newsletter" className="hover:text-[var(--color-accent)] transition-colors">Newsletter</a></li>
                <li><a href="#social" className="hover:text-[var(--color-accent)] transition-colors">Social Media</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 text-center">
            <p className="text-sm text-[var(--color-cream)]/60">
              {new Date().getFullYear()} CTRL. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
