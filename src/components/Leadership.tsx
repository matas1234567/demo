import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

// Ą Č Ę Ė Į Š Ų Ū Ž
// ą č ę ė į š ų ū ž

const team = [
  {
    name: "Arnas Linkevičius",
    role: "Įkūrėjas ir generalinis direktorius",
    bio: "nebaige mokyklos, stato bizni, zino kaip veikia gyvenimas is tikruju",
    linkedin: "https://www.instagram.com/arnaslink/",
    email: "arnaslinkevicius@gmail.com",
    image: "/team/arnas.jpg",
  },
  {
    name: "Matas Michailinas",
    role: "Technologijų vadovas",
    bio: "Programuotojas, taip pat specializuojasi finansų sferoje",
    linkedin: "https://www.linkedin.com/in/matas-michailinas-48ba9b2a1/",
    email: "michailinasmatas@gmail.com",
    image: "/team/matas.jpg",
  },
  {
    name: "Benas Rupsys",
    role: "Pardavimu Vadovas",
    bio: "Finansu profesionalas",
    linkedin: "#",
    email: "brupsys@gmail.com",
  },
  {
    name: "Hubertas Banys",
    role: "Informacijos vadovas",
    bio: "Atsidaves naujausioms naujienoms, blogo rasytojas.",
    linkedin: "#",
    email: "morgan@hobbin.com",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Susipažinkite su mūsų komanda
          </h2>
          <p className="text-xl text-muted-foreground">
            Patyrę profesionalai, atsidavę jūsų kompanijos augimui
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {team.map((member) => (
            <Card key={member.name} className="shadow-soft border-border text-center">
              <CardContent className="pt-6">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4" />
                )}
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

