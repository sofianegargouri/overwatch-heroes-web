import React from 'react'
import './styles.sass'

interface IProps {
  name: string,
  imageCardBackgroundUrl: string,
  imageSplashUrl: string,
  imagePortraitUrl: string,
}

export default ({ name, imageCardBackgroundUrl, imageSplashUrl, imagePortraitUrl }: IProps) => (
  <div
    className="hero-card-component"
    style={{ backgroundImage: `url(${imageCardBackgroundUrl})` }}
  >
    <img src={imagePortraitUrl} />
    <h1>{name}</h1>
  </div>
)
