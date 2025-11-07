
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

const IndividualSolution = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Individualus sprendimas
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kai neužtenka standartinių paketų ir reikia sprendimo, pilnai
              pritaikyto jūsų verslui, procesams ir tikslams.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 items-start">
            {/* Left side: description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">
                Kada verta rinktis individualų sprendimą?
              </h2>
              <p className="text-muted-foreground">
                Jei jūsų projektas turi nestandartinį funkcionalumą, specifinius
                integracijos poreikius, daug vidinių procesų ar unikalią idėją,
                geriausias kelias – individualus sprendimas. Čia apimtys ir
                funkcijos derinamos nuo nulio, pagal tai, ko iš tikrųjų reikia.
              </p>

              <div className="space-y-3">
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Nestandartinis funkcionalumas, rezervacijos, vidinės sistemos,
                    narių zonos ir pan.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Integracijos su jūsų esamomis sistemomis (CRM, el. paštas,
                    mokėjimai ir kt.).
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Ilgesnė plėtros perspektyva – galvojama ne tik apie šiandieną,
                    bet ir apie ateitį.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Daugiau konsultacijų, planavimo ir projektavimo etapo darbas.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: pricing / scope card */}
            <Card className="shadow-medium border-border">
              <CardHeader>
                <CardTitle>Kas įprastai įeina</CardTitle>
                <CardDescription>
                  Pilnai pritaikytas sprendimas su atskiru planavimu, dizainu,
                  kūrimu ir palaikymu.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                    Kaina
                  </p>
                  <p className="text-4xl font-bold">Nuo €2499</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Kaina nustatoma po detalesnės konsultacijos ir projekto apimties
                    įvertinimo.
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      Individualiai suplanuota architektūra ir vartotojo kelias.
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      Nestandartinis dizainas ir komponentai pagal jūsų prekės ženklą.
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      Integracijos (mokėjimai, rezervacijos, CRM, naujienlaiškiai ir kt.).
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      Techninė dokumentacija ir aiškus projekto perdavimo procesas.
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      Palaikymo laikotarpis po įdiegimo (susitarus – ilgesnis).
                    </span>
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
                    <a href="/contact">Pasikonsultuoti prieš pradedant</a>
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

export default IndividualSolution;
