import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Sparkles } from 'lucide-react';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/imagem_02.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      {/* Background Particle Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full mix-blend-screen"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${4 + Math.random() * 6}s infinite linear`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${Math.random() > 0.5 ? 'hsl(var(--golden-orange))' : 'hsl(var(--neon-purple))'}`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-20"
          >
            {/* Small Sun Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
              src="/imagem_03.png"
              alt="Logo Thais Lima"
              className='w-15 h-15 object-contain'
            />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] font-medium"
               style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  textWrap: 'balance'}}
            >
              Você não nasceu para caber em um  {''}
               <span className="text-[#c89b5b] italic">
                 único
               </span>{' '}
              signo.
            </motion.h1>

            {/* Subheading - Script Style */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-3xl text-[#c89b5b] leading-[1.05] font-medium"
               style={{
                  fontFamily: '"Manrope", serif',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  textWrap: 'balance'}}
            >
              Seu mapa astral conta o roteiro da vida e os personagens que vivem em você; revelando a pessoa que existe atrás de todo esse espetáculo que é viver.
            </motion.p>

            {/* Body Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-white/80 leading-relaxed max-w-prose drop-shadow-sm"
            >
               A Astrologia não prevê, nem determina quem você é. Ela traduz as energias invisíveis  a sua vida.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => navigate('/servicos')}
                className="px-8 py-4 bg-[#c89b5b] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--golden-orange)/0.6)] hover:scale-105 active:scale-95 text-center relative overflow-hidden group"
              >
                <span className="relative z-10 drop-shadow-md">REVELAR MEU MAPA</span>
                <div className="absolute inset-0 animate-shimmer pointer-events-none" />
              </button>
              <button
                onClick={() => navigate('/conteudos')}
                className="px-8 py-4 bg-transparent border-2 border-[#c89b5b]/30 text-[#c89b5b] font-semibold rounded-lg transition-all duration-300 hover:border-[#c89b5b]/60 hover:bg-[#c89b5b]/10 hover:backdrop-blur-sm active:scale-95 text-center"
              >
                DESCOBRIR MAIS
              </button>
            </motion.div>

            {/* Small Text with Star Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-2 text-sm text-white/70 font-medium tracking-wide"
            >
              <Sparkles className="w-4 h-4 text-[hsl(var(--golden-orange))]" />
              <span>A ENERGIA SÓ SE TRANSFORMA QUANDO SE TORNA CONSCIENTE.</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Seamless Mystical Integration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center pointer-events-none"
          >
            {/* Deep Embedded Glows (Behind Image) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] radial-glow-orange opacity-40 animate-light-pulse mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] radial-glow-purple opacity-30 animate-light-pulse mix-blend-screen" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] radial-glow-magenta opacity-20 animate-light-pulse mix-blend-screen" style={{ animationDelay: '4s' }} />

            {/* Animated Light Rays Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] light-ray-overlay animate-ray-spin opacity-50 mix-blend-screen mask-radial-fade" />

            {/* Foreground Focused Particles over the image */}
            <div className="absolute inset-0 z-20">
              {[...Array(15)].map((_, i) => (
                <div
                  key={`fg-${i}`}
                  className="absolute bg-[hsl(var(--soft-gold))] rounded-full mix-blend-screen"
                  style={{
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 4 + 2}px`,
                    left: `${40 + Math.random() * 40}%`,
                    top: `${40 + Math.random() * 40}%`,
                    animation: `particle-float ${3 + Math.random() * 4}s infinite ease-in`,
                    animationDelay: `${Math.random() * 3}s`,
                    opacity: 0,
                    boxShadow: '0 0 10px hsl(var(--golden-orange))'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;