function calculateFruitCost() {
    // Prompt user for number of fruits and convert to number
    let numberOfFruits = Number(prompt("Matunda ngapi unataka kununua? (KES 20 each)"));
    
    // Calculate base cost
    let baseCost = numberOfFruits * 20;
    
    // Initialize variables
    let discountAmount = 0;
    let finalCost = baseCost;
    
    // Check for discount (5 or more fruits)
    if (numberOfFruits >= 5) {
        discountAmount = baseCost * 0.1; // 10% discount
        finalCost = baseCost - discountAmount;
    }
    
    // Print results
    console.log("Matunda Yako:");
    console.log("Number of Fruits: " + numberOfFruits);
    console.log("Base Cost: KES " + baseCost);
    
    if (numberOfFruits >= 5) {
        console.log("Discount Applied (10%): KES " + discountAmount);
    } else {
        console.log("No Discount Applied.");
    }
    
    console.log("Total Price: KES " + finalCost);
    console.log("\nAsante na Karibu Tena!");
}

// Call the function
calculateFruitCost();