import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 sm:p-16 text-center shadow-medium">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Pasiruose plesti skaitmenine rinkodara?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Prisijunkite prie verslu kurie pasitiki Hobbin sprendimais.
            Sukurkime kazka tobulo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 group"
            >
              Pradekite savo projekta
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              Konsultacija
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

