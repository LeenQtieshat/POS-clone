// eslint-disable-next-line import/no-anonymous-default-export
export default {
  customerInfo: {
    firstName: 'Mohammed',
    lastName: 'Saleem'
  },
  agentInfo: {
    name: 'Virgin Mega',
    location: 'City Mall'
  },
  events: [
    {
      title: 'This Is Our Story: Storytelling with Shereen Saif | Ramadan 2023',
      tickets: [
        { id: 1, name: 'VIP ticket', quantity: 5, price: 45 },
        { id: 2, name: '1st class tickets', quantity: 1, price: 5 }
      ]
    },
    {
      title: 'This Is Our Story: Storytelling with Shereen Saif | Ramadan 2023',
      tickets: [
        { id: 1, name: 'VIP ticket', quantity: 5, price: 45 },
        { id: 2, name: '1st class tickets', quantity: 1, price: 5 }
      ]
    },
    {
      title: 'This Is Our Story: Storytelling with Shereen Saif | Ramadan 2023',
      tickets: [
        { id: 1, name: 'VIP ticket', quantity: 5, price: 45 },
        { id: 2, name: '1st class tickets', quantity: 1, price: 5 }
      ]
    },
    {
      title: 'Jordan VS Philippines | FIBA WorldCup Qualifying match',
      tickets: [
        { id: 1, name: 'VIP ticket', quantity: 5, price: 75 },
        { id: 2, name: '2nd class ticket', quantity: 3, price: 15 }
      ]
    }
  ],
  paymentMethod: { method: 'Credit or debit card', lastFourDigits: '8456' },
  paymentSummary: {
    discount: 18,
    salesTax: '16%',
    total: 140
  },
  currency: 'JOD'
};
