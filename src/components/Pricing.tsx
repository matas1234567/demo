import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

// Ą Č Ę Ė Į Š Ų Ū Ž
// ą č ę ė į š ų ū ž

const pricingTiers = [
  {
    name: "Vieno puslapio sprendimas",
    price: "499 €",
    period: "vienkartinis",
    description: "Puikiai tinka mažiems verslams ir asmeniniams projektams.",
    features: [
      "Vienas statinis puslapis",
      "Dizainas atitinkantis mobiliuosius parametrus",
      "Paprasta SEO optimizacija",
      "Kontaktų formos integracija",
      "1 mėnesio pagalba",
      "Nemokama hostingo konfigūracija",
    ],
    popular: false,
    ctaLabel: "Pirmyn",
    ctaHref: "/contact"

  },
  {
    name: "Dinaminis sprendimas",
    price: "1,499 €",
    period: "vienkartinis",
    description: "Puikiai tinka augantiems verslams, reikalaujantiems lankstumo",
    features: [
      "2 arba daugiau puslapių ",
      "Individuali CMS integracija",
      "Išplėstinė SEO & analitika",
      "Blog funkcija",
      "3 mėnesių pagalba",
      "Svetainės greičio optimizacija",
      "Socialinių medijų integracija",
    ],
    popular: true,
    ctaLabel: "Pirmyn",
    ctaHref: "/contact"

  },
  {
    name: "Individualus sprendimas",
    price: "Nenustatyta",
    period: "quote",
    description: "Sprendimas pritaikytas jūsų poreikiams",
    features: [
      "Puslapiai be limitų",
      "Individuali web aplikacija",
      "API integracijos",
      "Pažangios funkcijos",
      "12 menesių pagalba",
      "Dedikuotas puslapio vadovas",
      "Pimernybė pagalbai",
      "Reguliarūs atnaujinimai",
    ],
    popular: false,
    ctaLabel: "Susisiekti",
    ctaHref: "/contact"

  },
  {
    name: "Marketingo planas",
    price: "499-1499 €",
    period: "3-6men",
    description: "Prestizinis planas",
    features: [
      "Vienas statinis puslapis",
      "Dizainas atitinkantis mobiliuosius parametrus",
      "Paprasta SEO optimizacija",
      "Kontaktų formos integracija",
      "1 mėnesio pagalba",
      "Nemokama hostingo konfigūracija",
    ],
    popular: false,
    ctaLabel: "Pirmyn",
    ctaHref: "/contact"
  },
  {
    name: "Marketingo planas",
    price: "499-1499 €",
    period: "3-6men",
    description: "Prestizinis planas",
    features: [
      "Vienas statinis puslapis",
      "Dizainas atitinkantis mobiliuosius parametrus",
      "Paprasta SEO optimizacija",
      "Kontaktų formos integracija",
      "1 mėnesio pagalba",
      "Nemokama hostingo konfigūracija",
    ],
    popular: true,
    ctaLabel: "Pirmyn",
    ctaHref: "/contact"

  },
  {
    name: "Marketingo planas",
    price: "499-1499 €",
    period: "3-6men",
    description: "Prestizinis planas",
    features: [
      "Vienas statinis puslapis",
      "Dizainas atitinkantis mobiliuosius parametrus",
      "Paprasta SEO optimizacija",
      "Kontaktų formos integracija",
      "1 mėnesio pagalba",
      "Nemokama hostingo konfigūracija",
    ],
    popular: false,
    ctaLabel: "Pirmyn",
    ctaHref: "/contact"

  },
];

const Pricing = () => {
  return (
    <>
      <div id="solutions" className="h-0" />
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Mūsų teikiami pasiūlymai:
          </h2>
          <p className="text-xl text-muted-foreground">
            Pasirinkite paketą, kuris geriausiai atitinka jūsų reikalavimus
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col ${
                tier.popular
                  ? "border-primary shadow-medium scale-105"
                  : "border-border shadow-soft"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period !== "quote" && (
                    <span className="text-muted-foreground ml-2">
                      / {tier.period}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  variant={tier.popular ? "default" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  <Link to={tier.ctaHref}>{tier.ctaLabel}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>


    </>
      );
};

export default Pricing;

