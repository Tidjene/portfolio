import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Tidjene",
      color: "hover:text-primary"
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
      icon: FileText,
      label: "CV",
      href: "CV_recherche_de_stage.pdf",
      color: "hover:text-secondary"
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
