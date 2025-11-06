import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kastytis Raulinaitis",
    role: "Pardavimų direktorius, Rekvizitai.lt", //Bendrakūrėjas
    content: "Hobbin puikiai tvarkesi su reklama, pelningas bendradarbiavimas.",
    rating: 5,
  },
  {
    name: "Andrius Janušaitis",
    role: "Įkūrėjas, AJ Movers",
    content: "Malonus bendradarbiavimas, sklandžiai ir atsakingai tvarkomi reikalai Jungtinėje Karalystėje.",
    rating: 5,
  },
  {
    name: "Ruta Suchokaite",
    role: "Marketing Director, GrowthCo",
    content: "Professional, efficient, and delivered beyond expectations. The custom solution has been a game-changer for our team.",
    rating: 5,
  },
  {
    name: "Matas Ulskis",
    role: "CEO/Founder, Jurosgerybiunamai.lt",
    content: "Puiki elektronine parduotuve, puikios reklamos paslaugos",
    rating: 5,
  },
  {
    name: "Gaidys",
    role: "Parsidavelis",
    content: "Isdaviau saikele bet gera weba pakure tikrai",
    rating: 1,
  },
  {
    name: "anonymous",
    role: "CEO, UAB Ned.lt",
    content: "puikus B2B bendradarbiavimas",
    rating: 5,
  }
];
// Ą Č Ę Ė Į Š Ų Ū Ž
// ą č ę ė į š ų ū ž
const stats = [
  { value: "50+", label: "Surasta sprendimų" },
  { value: "93%", label: "Patenkinti klientai" },
  { value: "24/7", label: "Galima pagalba" },
  { value: "10+", label: "Komandos narių" },
];

const SocialProof = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Dalyvauja ir įmonės iš kitų pasaulio šalių 
          </h2>
          <p className="text-xl text-muted-foreground">
            Pamatykite, ką klientai sako po darbo su mumis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="shadow-soft border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

