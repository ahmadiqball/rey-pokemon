import { LandingBanner } from '~/components/landing/landing-banner';
import { LandingPokedex } from '~/components/landing/landing-pokedex';
import { getPokemons } from '~/utils/get-pokemon';

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const pokemon = await getPokemons(searchParams.page);

  return (
    <main>
      <LandingBanner />
      <LandingPokedex pokemons={pokemon} />
    </main>
  );
}
