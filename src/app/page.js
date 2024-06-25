import Certificate from "@/components/Certificate/Certificate";
import Hero from "@/components/Hero/Hero";
import Welcome from "@/components/Welcome/Welcome";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Welcome />
      <Certificate />
    </main>
  );
}
