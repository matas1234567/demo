import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Privatumo politika
          </h1>
          <p className="text-muted-foreground text-center">
            Paskutinį kartą atnaujinta: 2025 m. lapkričio 9 d.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Bendros nuostatos</h2>
            <p className="text-muted-foreground">
              Šioje privatumo politikoje paaiškinama, kaip mes renkame, naudojame
              ir saugome jūsų asmens duomenis, kai naudojatės mūsų svetaine.
              Naudodamiesi svetaine, jūs sutinkate su šia politika.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Kokius duomenis renkame</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Jūsų vardas ir el. paštas, kai pateikiate užklausą ar formą.</li>
              <li>Techniniai duomenys (IP adresas, naršyklė, įrenginys, apsilankymo laikas).</li>
              <li>Slapukai („cookies“) svetainės veikimui ir analitikai.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Kaip naudojame duomenis</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Atsakyti į jūsų užklausas ir teikti paslaugas.</li>
              <li>Tobulinti svetainės turinį ir funkcionalumą.</li>
              <li>Bendrauti su jumis dėl naujienų ar pasiūlymų (tik jūsų sutikimu).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Duomenų saugojimas</h2>
            <p className="text-muted-foreground">
              Jūsų duomenys saugomi tiek, kiek reikia paslaugoms teikti arba
              kol atšaukiate savo sutikimą. Naudojame patikimus saugumo metodus
              jūsų informacijai apsaugoti.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Jūsų teisės</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Turite teisę susipažinti su savo duomenimis.</li>
              <li>Galite reikalauti juos ištaisyti ar ištrinti.</li>
              <li>Galite atšaukti sutikimą dėl duomenų naudojimo.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Kontaktai</h2>
            <p className="text-muted-foreground">
              Jei turite klausimų dėl šios privatumo politikos ar savo duomenų
              tvarkymo, susisiekite su mumis el. paštu:{" "}
              <span className="font-medium">support@hobbin.lt</span>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

