
  const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = [
        {
            name: "Greek Salad",
            image: "./assets/images/menu-1.png",
            category: "salad",
            price: "$25.50",
            description: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
          },
          {
            name: "Lasagne",
            image: "./assets/images/menu-2.png",
            category: "lasagna",
            price: "$40.00",
            description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
          },
          {
            name: "Butternut Pumpkin",
            image: "./assets/images/menu-3.png",
            category: "vegetarian",
            price: "$10.00",
            description: "Roasted butternut pumpkin with savory spices.",
          },
          {
            name: "Tokusen Wagyu",
            image: "./assets/images/menu-4.png",
            category: "seasonal",
            price: "$39.00",
            description: "Premium Wagyu beef with special marinade and seasonings.",
          },
          {
            name: "Olivas Rellenas",
            image: "./assets/images/menu-5.png",
            category: "seasonal",
            price: "$25.00",
            description: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
          },
          {
            name: "Opu Fish",
            image: "./assets/images/menu-6.png",
            category: "seasonal",
            price: "$49.00",
            description: "Grilled Opu fish with herbs and spices.",
          },
          {
            name: "Margherita Pizza",
            image: "./assets/images/menu-1.png",
            category: "pizza",
            price: "$22.00",
            description: "Classic Italian pizza with tomato, mozzarella, and basil.",
          },
          {
            name: "Deluxe Burger",
            image: "./assets/images/menu-4.png",
            category: "burgers",
            price: "$18.00",
            description: "Juicy beef patty with lettuce, tomato, cheese, and special sauce.",
          },
          {
            name: "Spicy Tuna Sushi Roll",
            image: "./assets/images/menu-5.png",
            category: "sushi",
            price: "$16.00",
            description: "Sushi roll with spicy tuna, avocado, and cucumber.",
          },
          {
            name: "Vegetarian Lasagna",
            image: "./assets/images/menu-2.png",
            category: "lasagna",
            price: "$35.00",
            description: "Layers of pasta, vegetables, and creamy béchamel sauce.",
          },
          {
            name: "Pepperoni Pizza",
            image: "./assets/images/menu-1.png",
            category: "pizza",
            price: "$24.00",
            description: "Classic pizza with pepperoni and mozzarella cheese.",
          },
          {
            name: "Chicken Burger",
            image: "./assets/images/menu-4.png",
            category: "burgers",
            price: "$20.00",
            description: "Grilled chicken breast with lettuce, tomato, and mayo.",
          },
          {
            name: "Salmon Sushi",
            image: "./assets/images/menu-5.png",
            category: "sushi",
            price: "$18.00",
            description: "Fresh salmon slices on seasoned rice.",
          },
          {
            name: "Veggie Pizza",
            image: "./assets/images/menu-1.png",
            category: "pizza",
            price: "$21.00",
            description: "Assorted vegetables on a thin crust pizza.",
          },
          {
            name: "Cheeseburger",
            image: "./assets/images/menu-4.png",
            category: "burgers",
            price: "$17.00",
            description: "Classic cheeseburger with cheddar cheese.",
          },
          {
            name: "California Roll",
            image: "./assets/images/menu-5.png",
            category: "sushi",
            price: "$15.00",
            description: "Sushi roll with avocado, cucumber, and imitation crab.",
          },
          {
            name: "Mushroom Pizza",
            image: "./assets/images/menu-1.png",
            category: "pizza",
            price: "$23.00",
            description: "Pizza with sautéed mushrooms and mozzarella cheese.",
          },
          {
            name: "BBQ Burger",
            image: "./assets/images/menu-4.png",
            category: "burgers",
            price: "$19.00",
            description: "Beef patty with BBQ sauce, bacon, and cheese.",
          },
          {
            name: "Eel Sushi",
            image: "./assets/images/menu-5.png",
            category: "sushi",
            price: "$20.00",
            description: "Sushi roll with grilled eel and sweet eel sauce.",
          },
          {
            name: "Four Cheese Pizza",
            image: "./assets/images/menu-1.png",
            category: "pizza",
            price: "$26.00",
            description: "Pizza with four different cheeses.",
          },
          {
            name: "Veggie Burger",
            image: "./assets/images/menu-4.png",
            category: "burgers",
            price: "$18.00",
            description: "Plant-based burger with lettuce and tomato.",
          },
          {
            name: "Salmon Nigiri",
            image: "./assets/images/menu-5.png",
            category: "sushi",
            price: "$14.00",
            description: "Slices of fresh salmon on seasoned rice.",
          },
          {
            name: "Caesar Salad",
            image: "./assets/images/menu-1.png",
            category: "salad",
            price: "$19.00",
            description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
          },
          {
            name: "Caprese Salad",
            image: "./assets/images/menu-1.png",
            category: "salad",
            price: "$23.00",
            description: "Fresh tomatoes, mozzarella, basil, balsamic glaze, and olive oil.",
          },
          {
            name: "Quinoa Avocado Salad",
            image: "./assets/images/menu-1.png",
            category: "salad",
            price: "$17.00",
            description: "Quinoa, avocado, cherry tomatoes, cucumber, and lemon dressing.",
          },
        
          {
            name: "Seasonal Harvest Pizza",
            image: "./assets/images/menu-1.png",
            category: "seasonal",
            price: "$26.00",
            description: "A pizza featuring the freshest seasonal vegetables.",
          },
          {
            name: "Seasonal Fruit Sushi",
            image: "./assets/images/menu-6.png",
            category: "seasonal",
            price: "$14.00",
            description: "Delicious sushi rolls with seasonal fruits.",
          },
          {
            name: "Seasonal Garden Pasta",
            image: "./assets/images/menu-6.png",
            category: "seasonal",
            price: "$18.00",
            description: "Pasta dish made with seasonal garden vegetables.",
          },
    ];

    function populateMenuItems(items = menuItems) {
      const menuList = document.getElementById("menu-list");

      menuList.innerHTML = "";


      for (const menuItem of items) {
        const menuItemElement = `
          <li>
            <div class="menu-card hover:card">
              <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                <img src="${menuItem.image}" width="100" height="100" loading="lazy" alt="${menuItem.name}" class="img-cover">
              </figure>
              <div>
                <div class="title-wrapper">
                  <h3 class="title-3">
                    <a href="#" class="card-title">${menuItem.name}</a>
                  </h3>
                  <span class="badge label-1">${menuItem.category}</span>
                  <span class="span title-2">${menuItem.price}</span>
                </div>
                <p class="card-text label-1">
                  ${menuItem.description}
                </p>
              </div>
            </div>
          </li>
        `;
        menuList.insertAdjacentHTML("beforeend", menuItemElement);
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      populateMenuItems();
    });

    function filterMenuItems(category) {
      const filteredItems = menuItems.filter((item) => {
        return category === "all" || item.category === category;
      });
      populateMenuItems(filteredItems);
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.dataset.filter;
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        filterMenuItems(filterValue);
      });
    });