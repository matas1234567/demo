
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

const DynamicSolution = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Dinaminis sprendimas
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tinkamas augančioms įmonėms, kurioms reikia kelių puslapių svetainės
              su turinio valdymu, integracijomis ir erdve plėtrai.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 items-start">
            {/* Left side: description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">
                Kada verta rinktis dinaminį sprendimą?
              </h2>
              <p className="text-muted-foreground">
                Jei jūsų verslui neužtenka vieno puslapio, reikia atskirų puslapių
                paslaugoms, komandos pristatymui, blogui ar naujienoms, ir norite
                patys redaguoti turinį be programuotojo – dinaminis sprendimas yra
                logiškas kitas žingsnis.
              </p>

              <div className="space-y-3">
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Keli puslapiai: pagrindinis, paslaugos, apie mus, kontaktai, ir kt.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Turinio valdymo sistema (CMS), kad galėtumėte patys keisti tekstus
                    ir nuotraukas.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Integracijos su el. paštu, naujienlaiškiais, formomis ir kt.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Struktūra, paruošta ateities plėtrai: daugiau puslapių, naujos
                    skiltys, funkcionalumai.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: pricing card */}
            <Card className="shadow-medium border-border">
              <CardHeader>
                <CardTitle>Kas įeina į paketą</CardTitle>
                <CardDescription>
                  Kelių puslapių svetainė su turinio valdymu ir integracijomis.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                    Kaina nuo
                  </p>
                  <p className="text-4xl font-bold">€1499</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Galutinė kaina priklauso nuo puslapių skaičiaus ir funkcionalumo.
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>Daugiapuslapė svetainės struktūra (iki 20 puslapių).</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      Integruota turinio valdymo sistema (CMS) tekstams ir vizualams.
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>Kontaktinės formos ir pagrindiniai veiksmo mygtukai.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>SEO struktūra ir pagrindiniai techniniai nustatymai.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>2 pataisymų / korekcijų etapai po pradinio varianto.</span>
                  </li>
                </ul>

                <div className="pt-2 space-y-3">
                  <Button asChild size="lg" className="w-full">
                    <a href="/project">
                      Pradėti projektą
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/contact">Užduoti klausimą</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DynamicSolution;
