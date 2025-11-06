import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-2xl shadow-medium p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Bukite atsinaujine su Hobbin
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Gaukite anksciausias kompanijos nauejinas, pasiulymus ir t.t.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Pasto adresas"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit" size="lg">
              Prenumeruoti
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            Mes gerbiame privatuma, atsaukti prenumeracija galite bet kada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

