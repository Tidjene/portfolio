import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Sandbox pour l’analyse des APTs avec IA",
      description: "Construction d'un laboratoire isolé pour émuler de façon défensive des techniques APT",
      tags: ["Python", "Pfsense", "LLM", "Wazuh", "Virtualbox"],
      github: "#"
    },
    {
      title: "Détection et atténuation d'attaques DDoS dans un réseau haut débit",
      description: "Surveillance, identification et atténuation d’attaques DDoS au sein de réseaux à haut débit.",
      tags: ["Hping3", "Slowloris", "Grafana + Prometheus", "Suricata"],
      github: "#"
    },
    {
      title: "CTF Writeups",
      description: "Collection de writeups détaillés de challenges CTF résolus avec explications des techniques utilisées",
      tags: ["CTF", "Pentesting", "Documentation", "Learning"],
      github: "https://github.com/Tidjene/"
    },
    {
      title: "Pipeline CI/CD DevSecOps",
      description: "Pipeline pour automatiser le déploiement et sécuriser chaque étape du cycle de développement.",
      tags: ["Bash", "Docker", "Kubernetes", "Tekton"],
      github: "https://github.com/Tidjene/pipeline-configuration-file"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative bg-cyber-dark/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">$ ls ~/projects/</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto box-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all hover:box-glow group"
            >
              <CardHeader>
                <CardTitle className="text-primary font-mono text-xl flex items-center gap-2">
                  <span className="text-secondary">▸</span> {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-mono px-2 py-1 bg-primary/10 border border-primary/30 rounded text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 font-mono"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Détails
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-mono mb-4">
            Plus de projets sur GitHub
          </p>
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-mono"
            asChild
          >
            <a href="https://github.com/Tidjene" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Voir tous les projets
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
