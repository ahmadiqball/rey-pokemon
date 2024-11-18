'use client';

import { CoreButton } from '~/components/core/core-button';

export function LandingBannerButton() {
  function scrollToPokedex() {
    document
      .getElementById('landing-pokedex')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <CoreButton variant="contained" color="primary" onClick={scrollToPokedex}>
      Check PokèDex
    </CoreButton>
  );
}
