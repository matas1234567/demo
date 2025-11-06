import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Kas įtraukta į kiekvieną sprendimo paketą?",
    answer: "Kiekviename pakete yra dizainas, kūrimas, testavimas ir diegimas. Vieno puslapio sprendimas puikiai tinka vieno puslapio svetainėms, Dinaminis sprendimas prideda turinio valdymo sistemą (CMS) ir kelių puslapių funkcionalumą, o Individualus sprendimas yra visiškai pritaikytas pagal jūsų individualius poreikius, su neribotomis galimybėmis.",
  },
  {
    question: "Kiek laiko trunka projekto įgyvendinimas?",
    answer: "Terminai priklauso nuo pasirinkto paketo: Vieno puslapio sprendimas paprastai trunka 1–2 savaites, Dinaminis sprendimas – 3–4 savaites, o Individualus sprendimas vertinamos individualiai. Išsamią projekto trukmę pateiksime pirminės konsultacijos metu.",
  },
  {
    question: "Ar teikiate nuolatinę priežiūrą ir palaikymą?",
    answer: "Taip! Visi paketai apima palaikymą po svetainės paleidimo. Vieno puslapio sprendimas suteikia 1 mėnesio palaikymą, Dinaminis sprendimas – 3 mėnesių, o Individualus sprendimas – net 12 mėnesių. Taip pat galima užsisakyti išplėstinius palaikymo paketus.",
  },
  {
    question: "Ar galiu vėliau atnaujinti savo paketą?",
    answer: "Žinoma! Augant jūsų verslui, atnaujinti paketą yra paprasta. Mes pasirūpinsime, kad perėjimas prie pažangesnio sprendimo būtų sklandus ir išsaugotų esamą turinį bei dizainą.",
  },
  {
    question: "Kokias technologijas naudojate?",
    answer: "Naudojame modernias, pramonės standartus atitinkančias technologijas – React, TypeScript ir Tailwind CSS – priekinės dalies (frontend) kūrimui. Galinei daliai (backend) ir turinio valdymo sistemai (CMS) parenkame tinkamiausius įrankius pagal jūsų konkrečius poreikius.",
  },
  {
    question: "Ar teikiate hostingo paslaugas?",
    answer: "Padedame jums įdiegti hostingą patikimose platformose ir, jei reikia, galime jį administruoti už jus. Hostingo kaina yra atskira nuo kūrimo mokesčių – rekomenduosime geriausią variantą pagal jūsų biudžetą ir poreikius.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Daznai uzduodami klausimai
          </h2>
          <p className="text-xl text-muted-foreground">
            Viskas ka jums reikia zinoti apie musu paslaugas
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Turite dar klausimu? Mes galime padeti!
          </p>
          <a
            href="/contact"
            className="text-primary hover:underline font-medium"
          >
            Susisiekite →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

