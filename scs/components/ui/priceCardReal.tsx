import React from 'react'
import { Description, Offering, OfferingWrapper, Price, PriceCard, ProductName } from './priceCard'

export const PricingComponent = ({children, prodName, price,
   description, perks} : {children:any, prodName: any, price: any,
    description: any, perks: any}) => (
  <PriceCard className="mx-5 mb-10" contactPageHref={'/'}>
    <ProductName>{prodName}</ProductName>
    <Price>{price}</Price>
    <Description>
      {description}
    </Description>
    <OfferingWrapper>
      {perks.map((perk: string | undefined, index: any) => (
        <Offering key={null}>{perk}</Offering>
      ))}
    </OfferingWrapper>
  </PriceCard>
)
