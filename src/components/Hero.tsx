import { useEffect, useState } from "react";
import { Terminal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cyber.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "tidjene-ouedraogo@supcom-student:~$ ./portfolio.sh";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cyber workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-cyber" />
        <div className="absolute inset-0 gradient-glow" />
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-px bg-primary/20 animate-scan" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Terminal header */}
          <div className="flex items-center justify-center gap-2 text-primary mb-8 animate-float">
            <Terminal className="w-8 h-8" />
            <span className="text-sm font-mono">SYSTÈME ACTIF</span>
          </div>

          {/* Typing effect */}
          <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4 md:p-6 box-glow mb-8 overflow-x-auto">
            <div className="font-mono text-left text-sm md:text-base whitespace-nowrap">
              <span className="text-primary">{displayText}</span>
              <span className="animate-blink text-primary">▊</span>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full border-4 border-primary/50 box-glow overflow-hidden bg-card/50 backdrop-blur-sm flex items-center justify-center">
                {/* Remplacez /placeholder.svg par l'URL de votre photo */}
                <img 
                  src="/image.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-background animate-pulse">
                <span className="text-primary-foreground text-xs font-bold">✓</span>
              </div>
            </div>
          </div>

          {/* Main title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-glow-pulse break-words">
            CYBERSÉCURITÉ
            <br />
            <span className="text-primary text-glow-strong">OPÉRATIONNELLE</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 font-mono px-4">
            Fasciné du Shell & Passionné de Hacking Éthique
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToAbout}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono box-glow transition-all hover:box-glow-strong"
            >
              Explorer le profil
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-mono"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Me contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce cursor-pointer bg-transparent border-none"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
