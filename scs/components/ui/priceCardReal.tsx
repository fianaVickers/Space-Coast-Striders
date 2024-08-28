import React from 'react'
import { Description, Offering, OfferingWrapper, Price, PriceCard, ProductName } from './priceCard'

export const PricingComponent = ({ name, price, description, perks }) => (
  <PriceCard className="mx-5 mb-10" contactPageHref={'/'}>
    <ProductName>{name}</ProductName>
    <Price>{price}</Price>
    <Description>
      {description}
    </Description>
    <OfferingWrapper>
      {perks.map((perk, index) => (
        <Offering>{perk}</Offering>
      ))}
    </OfferingWrapper>
  </PriceCard>
)
