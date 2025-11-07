
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

const SimplePageSolution = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Vieno puslapio sprendimas
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Idealiai tinka mažiems verslams, freelancer&apos;iams ir projektams,
              kuriems reikia aiškaus, greito ir šiuolaikiško prisistatymo internete.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 items-start">
            {/* Left side: description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">
                Kam šis sprendimas tinkamiausias?
              </h2>
              <p className="text-muted-foreground">
                Jei jums nereikia didelės svetainės su dešimtimis puslapių,
                o svarbiausia – aiškiai pristatyti savo paslaugas, parodyti
                portfelį ir leisti klientams lengvai susisiekti, vieno puslapio
                sprendimas yra geriausias startas.
              </p>

              <div className="space-y-3">
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Profesionalus dizainas, pritaikytas jūsų prekės ženklui.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Aiški struktūra: hero, paslaugos, apie jus, atsiliepimai,
                    kontaktai.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Optimizuota mobiliesiems ir greitam įkėlimui.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Paruošta tolesniam plėtimui, jei ateityje norėsite daugiau puslapių.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: pricing card */}
            <Card className="shadow-medium border-border">
              <CardHeader>
                <CardTitle>Kas įeina į paketą</CardTitle>
                <CardDescription>
                  Vieno puslapio svetainė, kuri atrodo rimtai ir veikia greitai.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                    Kaina nuo
                  </p>
                  <p className="text-4xl font-bold">€499</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Galutinė kaina priklauso nuo apimties ir papildomų funkcijų.
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>Vieno puslapio dizainas ir įgyvendinimas.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>Prisitaikantis (responsive) dizainas visiems ekranams.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>Kontaktinė forma ir pagrindiniai veiksmo mygtukai.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>Pradinė SEO struktūra (meta žymos, antraštės, URL).</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>1 pataisymo / korekcijų etapas po pradinio maketo.</span>
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

export default SimplePageSolution;
