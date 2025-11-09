import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const FORM_ENDPOINT = "https://formspree.io/f/mwpaerql";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("formType", "newsletter");
      data.append("email", email);

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      toast({
        title: "Prenumerata sėkminga",
        description: "Ačiū, jūsų el. paštas užregistruotas.",
      });

      setEmail("");
    } catch (err) {
      console.error(err);
      toast({
        title: "Klaida",
        description: "Nepavyko užsisakyti naujienlaiškio. Bandykite dar kartą.",
        variant: "destructive",
      });
    }
  };

// Ą Č Ę Ė Į Š Ų Ū Ž
// ą č ę ė į š ų ū ž


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-2xl shadow-medium p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Būkite atsinaujinę su Hobbin!
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Gaukite anksčiausias kompanijos naujienas, pasiulymūs ir t.t.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              id="newsletter-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jusu@pastas.lt"
              className="sm:flex-1"
            />
            <Button type="submit" size="lg">
              Prenumeruoti
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            Mes gerbiame privatumą, atšaukti prenumeraciją galite bet kada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

