import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Ą Č Ę Ė Į Š Ų Ū Ž
// ą č ę ė į š ų ū ž


const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 sm:p-16 text-center shadow-medium">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Pasiruošę plėsti skaitmeninę rinkodarą?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Prisijunkite prie verslų, kurie jau pasitiki Hobbin sprendimais.
            Sukurkime kažką tobulo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 group"
            >
              <Link to="/project">
                Pradėkite savo projekta
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <a
                href="https://calendly.com/mmichailinas/30min"
                target="_blank"
                rel="noreferrer"
              >
                Konsultacija
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

