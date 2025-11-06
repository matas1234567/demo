import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "One Site Solution",
    price: "$499",
    period: "one-time",
    description: "Perfect for small businesses and personal projects",
    features: [
      "Single-page website",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "1 month support",
      "Free hosting setup",
    ],
    popular: false,
  },
  {
    name: "Dynamic Solution",
    price: "$1,499",
    period: "one-time",
    description: "Ideal for growing businesses needing more flexibility",
    features: [
      "Multi-page website",
      "Custom CMS integration",
      "Advanced SEO & analytics",
      "Blog functionality",
      "3 months support",
      "Performance optimization",
      "Social media integration",
    ],
    popular: true,
  },
  {
    name: "Custom Solution",
    price: "Custom",
    period: "quote",
    description: "Enterprise-grade solutions tailored to your needs",
    features: [
      "Unlimited pages",
      "Custom web application",
      "API integrations",
      "Advanced features",
      "12 months support",
      "Dedicated account manager",
      "Priority support",
      "Regular updates",
    ],
    popular: false,
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
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the perfect solution for your business needs
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
                  variant={tier.popular ? "default" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {tier.period === "quote" ? "Contact Sales" : "Get Started"}
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

