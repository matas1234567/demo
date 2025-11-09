
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Naudojimo sąlygos
          </h1>
          <p className="text-muted-foreground text-center">
            Paskutinį kartą atnaujinta: 2025 m. lapkričio 9 d.
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Bendros nuostatos</h2>
            <p className="text-muted-foreground">
              Ši svetainė priklauso ir yra valdoma Hobbin. Naudodamiesi šia
              svetaine ar bet kuria jos dalimi, jūs patvirtinate, kad
              susipažinote su šiomis naudojimo sąlygomis ir sutinkate jų
              laikytis.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Svetainės naudojimas</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Naudotojas įsipareigoja nenaudoti svetainės neteisėtais tikslais.</li>
              <li>
                Draudžiama bandyti gauti prieigą prie svetainės serverių,
                duomenų bazių ar kitų sistemų be leidimo.
              </li>
              <li>
                Svetainės turinys negali būti kopijuojamas, platinamas ar
                naudojamas komerciniais tikslais be išankstinio rašytinio
                sutikimo.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Paslaugos ir atsakomybė</h2>
            <p className="text-muted-foreground">
              Hobbin teikia svetainių kūrimo, dizaino ir susijusias paslaugas.
              Konkrečios paslaugų sąlygos (įskaitant kainas, terminus ir
              pakeitimus) yra nustatomos individualiai, prieš pradedant darbą.
            </p>
            <p className="text-muted-foreground">
              Mes dedame visas pastangas užtikrinti, kad svetainė veiktų
              sklandžiai, tačiau negarantuojame, kad ji bus be klaidų ar
              pertrūkių. Hobbin neatsako už jokius nuostolius ar žalą, patirtą
              naudojantis svetaine ar mūsų paslaugomis.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Intelektinė nuosavybė</h2>
            <p className="text-muted-foreground">
              Visa šioje svetainėje pateikta medžiaga – dizainas, tekstai,
              logotipai, kodas ir kita informacija – yra Hobbin nuosavybė arba
              naudojama su atitinkamais leidimais. Bet koks jų naudojimas be
              leidimo yra draudžiamas.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Kainos ir mokėjimai</h2>
            <p className="text-muted-foreground">
              Visos kainos yra pateikiamos eurais (EUR). Kainos gali keistis be
              išankstinio įspėjimo. Mokėjimo sąlygos, įskaitant avansus,
              grąžinimus ar papildomus darbus, nustatomos individualiai
              pasirašant sutartį arba elektroniniu susitarimu su klientu.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Apribota atsakomybė</h2>
            <p className="text-muted-foreground">
              Hobbin neatsako už tiesioginius ar netiesioginius nuostolius,
              atsiradusius dėl svetainės ar paslaugų naudojimo, įskaitant, bet
              neapsiribojant, duomenų praradimu, neveikimu ar netikslumais.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Sąlygų pakeitimai</h2>
            <p className="text-muted-foreground">
              Hobbin pasilieka teisę bet kada atnaujinti šias naudojimo sąlygas.
              Pakeitimai įsigalioja juos paskelbus šioje svetainėje. Toliau
              naudodamiesi svetaine po pakeitimų, jūs sutinkate su atnaujintomis
              sąlygomis.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Kontaktinė informacija</h2>
            <p className="text-muted-foreground">
              Jei turite klausimų dėl šių naudojimo sąlygų, rašykite el. paštu:{" "}
              <span className="font-medium">support@hobbin.lt</span>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
