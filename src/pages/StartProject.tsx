
import { useState } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const StartProject = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    projectType: "",
    budget: "",
    timeline: "",
    goals: "",
    details: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // later: send to backend / form API
    toast({
      title: "Projekto užklausa išsiųsta",
      description: "Netrukus su jumis susisieksime dėl detalesnio pasiūlymo.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      projectType: "",
      budget: "",
      timeline: "",
      goals: "",
      details: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Pradėkite projektą
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Papasakokite apie savo projektą, ir mes paruošime jums aiškų,
              konkretų pasiūlymą.
            </p>
          </div>

          <Card className="shadow-medium border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Projekto detalės</CardTitle>
              <CardDescription>
                Kuo daugiau informacijos pateiksite, tuo tiksliau galėsime
                įvertinti darbų apimtį ir kainą.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Vardas *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Vardenis Pavardenis"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      El. paštas *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="vardas@imone.lt"
                    />
                  </div>
                </div>

                {/* Company + Website */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Įmonė
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Įmonės pavadinimas"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium">
                      Esama svetainė (jei yra)
                    </label>
                    <Input
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://jusu-svetaine.lt"
                    />
                  </div>
                </div>

                {/* Project type + budget + timeline */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-sm font-medium"
                    >
                      Projekto tipas
                    </label>
                    <Input
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      placeholder="Landing, e-shop, SaaS..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Biudžeto rėžis
                    </label>
                    <Input
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="pvz. €500–1500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium">
                      Terminas
                    </label>
                    <Input
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      placeholder="pvz. 2–4 savaitės"
                    />
                  </div>
                </div>

                {/* Goals */}
                <div className="space-y-2">
                  <label htmlFor="goals" className="text-sm font-medium">
                    Pagrindiniai tikslai *
                  </label>
                  <Textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    placeholder="Ką šis projektas turėtų pasiekti jūsų verslui?"
                    rows={4}
                  />
                </div>

                {/* Extra details */}
                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium">
                    Papildoma informacija
                  </label>
                  <Textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Nuorodos, pavyzdžiai, funkcionalumai, būtinai reikalavimai ir t. t."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Siųsti projekto užklausą
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StartProject;

