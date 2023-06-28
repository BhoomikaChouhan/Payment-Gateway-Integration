
const apiKey = 'rzp_test_UKPB8fBFotEhIM';

// Function to initialize the payment
function initializePayment(amount) {
  const options = {
    key: apiKey,
    amount: amount * 100, // Amount is in paise (1 Rupee = 100 paise)
    currency: 'INR',
    name: 'My Store',
    description: 'Payment for purchase',
    handler: function (response) {
      // Handle the payment success response
      alert('Payment successful!');
      console.log(response);
    },
    prefill: {
      name: 'John Doe',
      email: 'john.doe@example.com'
    },
    notes: {
      address: 'Razorpay Corporate Office'
    },
    theme: {
      color: '#0d47a1'
    }
  };

  // Create a new Razorpay instance
  const razorpay = new Razorpay(options);

  // Open the Razorpay payment checkout form
  razorpay.open();
}

// Get the Pay Now button element
const payBtn = document.getElementById('payBtn');

// Add click event listener to the Pay Now button
payBtn.addEventListener('click', function () {
  const amount = document.getElementById('amount').value;
  if (amount !== '') {
    initializePayment(amount);
  } else {
    alert('Please enter a valid amount!');
  }
});
