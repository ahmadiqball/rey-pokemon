import { LandingBanner } from '~/components/landing/landing-banner';
import { LandingPokedex } from '~/components/landing/landing-pokedex';
import { getPokemon } from '~/utils/get-pokemon';

export const revalidate = 60;

export const dynamicParams = true;

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const pokemon = await getPokemon(searchParams.page);

  return (
    <main>
      <LandingBanner />
      <LandingPokedex pokemons={pokemon} />
    </main>
  );
}
