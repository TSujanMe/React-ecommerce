import StripeCheckout from 'react-stripe-checkout';
import React from 'react'


const StripeCheckOutButton = ( {  price})=>{
    const priceForStripe = price  *100

    const publishableKey = 'pk_test_51Jm9a9D17SmU5bsla13Q0UzPyOkFvwCraFUFn0487f9KF0ojAkaldCnbpkrsZqZE35xBAuDhrPDoTpYrx3zSxwse003tQHFHTa'
   const  onToken = token=>{
        alert ('Payment succes ')
    }
    return ( 
        <StripeCheckout
            label = 'Pay Now '
            name = 'Our Cloting Playment'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = { `your total is $ ${ price }` }
            amount = { priceForStripe } 
            panelLabel = 'Pay Now '
            token = { onToken }
            stripeKey = { publishableKey }

        />
    )
}


export default StripeCheckOutButton