
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Slapukų politika
          </h1>
          <p className="text-muted-foreground text-center">
            Paskutinį kartą atnaujinta: 2025 m. lapkričio 9 d.
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Kas yra slapukai?</h2>
            <p className="text-muted-foreground">
              Slapukai – tai maži duomenų failai, kuriuos naršyklė išsaugo jūsų
              įrenginyje. Jie padeda svetainei atpažinti jus, prisiminti
              nustatymus ir užtikrinti sklandų veikimą.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Kokius slapukus naudojame?</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <strong>Būtini slapukai</strong> – reikalingi, kad svetainė veiktų
                tinkamai (pvz., kalbos pasirinkimas ar formų siuntimas).
              </li>
              <li>
                <strong>Analitiniai slapukai</strong> – naudojami statistikai rinkti
                (pvz., lankytojų skaičiui), jei įjungta „Google Analytics“ ar
                panašūs įrankiai.
              </li>
            </ul>
            <p className="text-muted-foreground">
              Šiuo metu svetainė naudoja tik būtinus slapukus, todėl papildomas
              sutikimas nėra reikalingas. Jei ateityje bus pridėti analitiniai ar
              reklaminiai slapukai, prieš tai paprašysime jūsų sutikimo.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              3. Kaip valdyti slapukus?
            </h2>
            <p className="text-muted-foreground">
              Galite bet kada ištrinti arba išjungti slapukus savo naršyklės
              nustatymuose. Atkreipkite dėmesį, kad kai kurios svetainės funkcijos
              gali neveikti tinkamai, jei slapukai bus išjungti.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Kontaktai</h2>
            <p className="text-muted-foreground">
              Jei turite klausimų dėl slapukų naudojimo, susisiekite el. paštu:{" "}
              <span className="font-medium">support@hobbin.lt</span>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
