import { storiesOf } from '@storybook/react'
import React from 'react'
import HeroCard from './'

storiesOf('HeroCard', module)
  .add('HeroCard', () => (
    <HeroCard
      name="Doomfist"
      imageCardBackgroundUrl="https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/doomfist/image_card_background.jpg"
      imageSplashUrl="https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/doomfist/splash.jpg"
      imagePortraitUrl="https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/doomfist/portrait.png"
    />))
