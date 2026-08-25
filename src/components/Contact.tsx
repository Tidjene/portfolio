import { Github, Linkedin, Mail, FileText, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.503 6.38 6.38 0 0 0 .616 8.272 6.387 6.387 0 0 0 8.232.551 6.323 6.323 0 0 0 2.072-3.158V9.117a8.214 8.214 0 0 0 4.707 1.488V7.12a4.793 4.793 0 0 1-1.002-.434z" />
  </svg>
);

const Contact = () => {
  const contactLinks = [
    {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/tidjeneodg", // Remplace par ton lien Facebook
    color: "hover:text-blue-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tidjene-ouedraogo/",
      color: "hover:text-secondary"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:tidjeneouedraogo1@gmail.com",
      color: "hover:text-primary"
    },
    {
    icon: TikTokIcon, // Ou l'icône personnalisée TikTok
    label: "TikTok",
    href: "https://www.tiktok.com/@tidjene.odg", // Remplace par ton lien TikTok
    color: "hover:text-pink-500"
  }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">$ cat ~/contact</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto box-glow" />
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-6 md:p-8 lg:p-12 box-glow text-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 font-mono break-words px-2">
            Intéressé par une collaboration ou simplement échanger sur la cybersécurité ?
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contactLinks.map((link, index) => (
              <Button
                key={index}
                size="lg"
                variant="outline"
                className={`border-primary/50 font-mono group ${link.color} transition-all`}
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-primary/30">
            <div className="font-mono text-xs md:text-sm text-muted-foreground space-y-2">
              <div className="text-primary whitespace-nowrap overflow-x-auto">$ cat message.txt</div>
              <div className="text-xs opacity-70 break-words">
                La sécurité n'est pas un produit, mais un processus continu d'amélioration et d'adaptation face aux menaces émergentes.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center px-4">
          <div className="font-mono text-xs md:text-sm text-muted-foreground space-y-2">
            <div className="text-primary break-words">$ echo "Forgé avec ❤️, un terminal sombre et une bonne dose de curiosité."</div>
            <div className="text-xs opacity-70 break-words">
              © 2025 | Cyber Portfolio 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
