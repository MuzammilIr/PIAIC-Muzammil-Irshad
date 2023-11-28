
//declare var prompt: (message: string) => string;

function shopForGroceries() {
    // Check if the customer wants fruits or vegetables
    let customerChoice = prompt("Would you like to buy fruits (fruits) or vegetables (vegetables)?");

    if (customerChoice === "fruits") {
        // Suggest different fruits and their prices
        console.log("Here are some of our available fruits:");
        console.log("Apples: $2/kg");
        console.log("Bananas: $1/kg");
        console.log("Oranges: $3/kg");

        // Ask the customer for their choice and quantity
        let fruitChoice = prompt("Which fruit would you like to buy? (apples, bananas, oranges)");
        let fruitQuantity = Number(prompt("How much would you like to buy? (Enter quantity in kilograms)"));

        // Calculate the total cost for fruits
        let fruitCost = 0;
        switch (fruitChoice) {
            case "apples":
                fruitCost = 2 * fruitQuantity;
                break;
            case "bananas":
                fruitCost = 1 * fruitQuantity;
                break;
            case "oranges":
                fruitCost = 3 * fruitQuantity;
                break;
            default:
                console.error("Invalid fruit selection");
                break;
        }

        console.log("The total cost for your fruit selection is: $" + fruitCost);
    } else if (customerChoice === "vegetables") {
        // Suggest different vegetables and their prices
        console.log("Here are some of our available vegetables:");
        console.log("Carrots: $1/kg");
        console.log("Tomatoes: $2/kg");
        console.log("Potatoes: $3/kg");

        // Ask the customer for their choice and quantity
        let vegetableChoice = prompt("Which vegetable would you like to buy? (carrots, tomatoes, potatoes)");
        let vegetableQuantity = Number(prompt("How much would you like to buy? (Enter quantity in kilograms)"));

        // Calculate the total cost for vegetables
        let vegetableCost = 0;
        switch (vegetableChoice) {
            case "carrots":
                vegetableCost = 1 * vegetableQuantity;
                break;
            case "tomatoes":
                vegetableCost = 2 * vegetableQuantity;
                break;
            case "potatoes":
                vegetableCost = 3 * vegetableQuantity;
                break;
            default:
                console.error("Invalid vegetable selection");
                break;
        }

        console.log("The total cost for your vegetable selection is: $" + vegetableCost);
    } else {
        console.error("Invalid grocery selection");
    }
}

function checkDiscounts(totalBill: number) {
    if (totalBill >= 50) {
        console.log("You are eligible for a 10% discount!");
        let discountAmount = totalBill * 0.1;
        totalBill -= discountAmount;
        console.log("Your discounted total is: $" + totalBill);
    } else {
        console.log("No discounts applicable for your purchase.");
    }
}

function checkoutProcess() {
    let totalBill = 0;

    // Simulate shopping for groceries
    shopForGroceries();

    // Calculate the total bill
    console.log("Your total bill is: $" + totalBill);

    // Apply discounts based on total bill
    checkDiscounts(totalBill);

    // Ask for payment method
    let paymentMethod = prompt("Please choose your payment method: (cash, card)");

    if (paymentMethod === "cash") {
        console.log("Thank you for paying with cash. Please collect your receipt.");
    } else if (paymentMethod === "card") {
        console.log("Please enter your card details.");
        // Simulate card payment process
        console.log("Payment successful. Thank you for your purchase.");
    } else {
        console.error("Invalid payment method selection");
    }
}

checkoutProcess();

