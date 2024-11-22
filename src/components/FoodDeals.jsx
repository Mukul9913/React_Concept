import React from 'react';

const dealData = [
  { id: 1, discount: '15% OFF', name: 'Greys Vage', daysRemaining: 6 },
  { id: 2, discount: '10% OFF', name: 'Greys Vage', daysRemaining: 6 },
  { id: 3, discount: '25% OFF', name: 'Greys Vage', daysRemaining: 7 },
  { id: 4, discount: '20% OFF', name: 'Greys Vage', daysRemaining: 8 },
];

function FoodDeals() {
  return (
    <section className="food-deals">
      {dealData.map((deal) => (
        <div key={deal.id} className="deal-card">
          <img src={`https://via.placeholder.com/200?text=Food${deal.id}`} alt={`Food ${deal.id}`} />
          <div className="discount">{deal.discount}</div>
          <h3>{deal.name}</h3>
          <p>{deal.daysRemaining} Days Remaining</p>
        </div>
      ))}
    </section>
  );
}

export default FoodDeals;
