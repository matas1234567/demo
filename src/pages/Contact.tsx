import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Issiusta!",
      description: "Susisieksime per 24 valandas",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Pastas",
      content: "support@hobbin.com",
      href: "mailto:support@hobbin.com",
    },
    {
      icon: Phone,
      title: "Telefonas",
      content: "+31 6 17334492",
      href: "tel:+31617334492",
    },
    {
      icon: MapPin,
      title: "Ofisas",
      content: "Akropolis, Vilnius",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Bendradarbiaukime!
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turi projekta galvoje? Mes tave mielai isklausysime. Uzrasyk, o mes susisieksime kaip tik imanoma greiciau
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card key={info.title} className="shadow-soft border-border">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="shadow-medium border-border max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Parasyk mums</CardTitle>
              <CardDescription>
                Uzpildyk forma ir susisieksime per 24h.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Vardas *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Vardenis Pavardenis"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Pastas *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="vardenis@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Kompanija
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Jusu kompanijos pavadinimas"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Zinute *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Papasakokite apie projekta..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Siusti zinute
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

