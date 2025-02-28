document.addEventListener("DOMContentLoaded", () => {
    class Pizza {
        constructor(name, ingredient, size, price, image) {
            this.name = name;
            this.ingredient = ingredient;
            this.size = size;
            this.price = price;
            this.image = `images/${image}`;
        }

        getPizzaSection() {
            return `
                <div class="pizza" data-name="${this.name}">
                    <img src="${this.image}" alt="${this.name}">
                    <h3>${this.name}</h3>
                </div>
            `;
        }
    }

    const pizzas = [
        new Pizza("Cheese", "Tomato Sauce and Mozzarella Cheese", "Large", 11.99, "cheese-pizza.jpg"),
        new Pizza("Pepperoni", "Tomato Sauce and Mozzarella Cheese topped with Pepperoni", "Medium", 12.99, "pepperoni-pizza.jpg"),
        new Pizza("Meat Lovers", "Tomato Sauce and Mozzarella Cheese topped with Pepperoni, Meatballs, and Sausage", "Medium", 13.99, "meat-lovers-pizza.jpg"),
        new Pizza("Veggie", "Pesto Sauce and Mozzarella Cheese topped with Olives, Onions, Peppers, and Tomatoes", "Medium", 10.99, "veggie-pizza.jpg"),
        new Pizza("Hawaiian", "Barbague Sauce and Mozzarella Cheese topped with Ham and Pineapple", "Small", 9.99, "hawaiian-pizza.jpg")
    ];

    const pizzaContainer = document.getElementById("pizza-container");
    pizzaContainer.innerHTML = pizzas.map(pizza => pizza.getPizzaSection()).join("");

    const modal = document.getElementById("pizza-modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalIngredient = document.getElementById("modal-ingredient");
    const modalSize = document.getElementById("modal-size");
    const modalPrice = document.getElementById("modal-price");
    const closeModal = document.querySelector(".close");

    // Click
    pizzaContainer.addEventListener("click", (event) => {
        const pizzaDiv = event.target.closest(".pizza");
        if (!pizzaDiv) return;

        const pizzaName = pizzaDiv.getAttribute("data-name");
        const pizza = pizzas.find(p => p.name === pizzaName);

        if (!pizza) return;

        // Pizza details
        modalImg.src = pizza.image;
        modalIngredient. textContent = pizza.ingredient;
        modalTitle.textContent = pizza.name;
        modalSize.textContent = pizza.size;
        modalPrice.textContent = pizza.price.toFixed(2);

        modal.style.display = "flex";
    });

    // Close modal on click
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
