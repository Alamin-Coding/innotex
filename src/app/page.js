import Certificate from "@/components/Certificate/Certificate";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Resources from "@/components/Resources/Resources";
import TextPrintingMachine from "@/components/TextPrintingMachine/TextPrintingMachine";
import Welcome from "@/components/Welcome/Welcome";
import Works from "@/components/Works/Works";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Welcome />
      <Products />
      <TextPrintingMachine />
      <Works />
      <Resources />
      <Certificate />
    </main>
  );
}
