import { Shield, Terminal, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Sécurité Offensive",
      description: "Pentesting, exploitation de vulnérabilités, CTF challenges"
    },
    {
      icon: Terminal,
      title: "Linux & Scripting",
      description: "Administration système, automatisation, Kubernetes, Bash & Python"
    },
    {
      icon: Lock,
      title: "Sécurité Défensive",
      description: "Détection d'intrusions, durcissement de configuration"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">whoami</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto box-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Étudiant en <span className="text-primary font-semibold">Master 2 Cybersécurité Opérationnelle</span>, 
              je suis passionné par le monde du hacking éthique et de la sécurité informatique.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ma curiosité pour Linux et les systèmes d'exploitation m'a conduit à approfondir 
              mes compétences en pentesting, analyse de vulnérabilités et sécurité réseau.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Toujours en quête d'apprentissage, je m'entraîne régulièrement sur des plateformes d'apprentissage 
              en ligne comme TryHackMe et RootMe.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4 md:p-6 box-glow overflow-x-auto">
            <div className="font-mono space-y-2 text-xs md:text-sm">
              <div className="text-primary whitespace-nowrap">$ cat /etc/passwd | grep student</div>
              <div className="text-muted-foreground break-all">student:x:1000:1000:Cyber Student:/home/student:/bin/bash</div>
              <div className="text-primary mt-4 whitespace-nowrap">$ id</div>
              <div className="text-muted-foreground break-all">uid=1000(student) gid=1000(student)</div>
              <div className="text-muted-foreground break-all">groups=1000(student),2000(hackers),27(sudo),999(supcom)</div>
              <div className="text-primary mt-4 whitespace-nowrap">$ uname -a</div>
              <div className="text-muted-foreground break-all">Linux cyberops 6.5.0-kali3-amd64 #1 SMP Debian</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all hover:box-glow group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;