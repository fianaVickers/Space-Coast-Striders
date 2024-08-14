import React from 'react'
import { Description, Offering, OfferingWrapper, Price, PriceCard, ProductName } from './priceCard'

export const PricingComponent = () => (
  <PriceCard contactPageHref={'/'}>
    <ProductName>Regular Club Membership</ProductName>
    <Price>$79.99/season</Price>
    <Description>
      Special UI component for your website made with React.js, TailwindCSS and FramerMotion.
    </Description>
    <OfferingWrapper>
      <Offering>AAU Membership Card</Offering>
      <Offering>Track Meet Uniform</Offering>
      <Offering>Warm Up Set</Offering>
      <Offering>Space Coast Invitational admission</Offering>
    </OfferingWrapper>
  </PriceCard>
)
