// Example data (replace with your actual data)
const foodData = [
  { name: 'Pizza', image: 'pizza.jpg', description: 'Classic Margherita with fresh tomatoes and mozzarella.' },
  { name: 'Burger', image: 'burger.jpg', description: 'Juicy beef patty with lettuce, tomato, and special sauce.' },
  { name: 'Sushi', image: 'sushi.jpg', description: 'Assorted sushi rolls with fresh fish and vegetables.' },
  { name: 'Pasta', image: 'pasta.png', description: 'Spaghetti with homemade tomato sauce and basil.' },
  { name: 'Salad', image: 'salad.jpg', description: 'Healthy mixed greens with avocado and balsamic dressing.' },
  // Add more food items as needed
];

// Function to create food cards dynamically
function createFoodCards() {
  const foodContainer = document.getElementById('food-container');

  foodData.forEach(food => {
    const card = document.createElement('div');
    card.className = 'food-card';

    const image = document.createElement('img');
    image.src = food.image;
    image.alt = food.name;
    image.className = 'food-image';

    const details = document.createElement('div');
    details.className = 'food-details';
    details.innerHTML = `<h2>${food.name}</h2><p>${food.description}</p>`;

    card.appendChild(image);
    card.appendChild(details);
    foodContainer.appendChild(card);
  });
}

// Call
