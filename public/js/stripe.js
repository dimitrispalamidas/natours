/* eslint-disable */
import axios from 'axios';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51OFvlJIBhcVLT8c9NyNsDXG5QAztkXfRcqcKR2LJ45opN2p52gQylHzqGxmV8mLbigewHwkPsbGuo3Snsn4Ay26h00YQDDb0nD',
  );

  try {
    // 1. Get checkout session from the API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session);

    // 2. Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
