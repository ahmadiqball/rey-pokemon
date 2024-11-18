import { LandingBanner } from '~/components/landing/landing-banner';
import { LandingPokedex } from '~/components/landing/landing-pokedex';

export default function Home() {
  return (
    <main>
      <LandingBanner />
      <LandingPokedex />
    </main>
  );
}
