import Certificate from "@/components/Certificate/Certificate";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import TextPrintingMachine from "@/components/TextPrintingMachine/TextPrintingMachine";
import Welcome from "@/components/Welcome/Welcome";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Welcome />
      <Products />
      <TextPrintingMachine />
      <Certificate />
    </main>
  );
}
