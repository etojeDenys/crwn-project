import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const stripePrice = price * 100
    const publisherKey = 'pk_test_51KicNyEVG86ryyhoMU6NeBMGlW47acNIAH5gTWMw9BRyyZf17J3sh6zH40UOLKAHvyZxbc1rXyrqkDU0jRAAG1Le00yqYAQNGU'

    const onToken = token =>{
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${stripePrice}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publisherKey}
        />
    )
}

export default StripeCheckoutButton