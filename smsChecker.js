function checkSmsLength() {
    console.log("Andika ujumbe wako wa SMS:");

    // Listen for user input
    process.stdin.on('data', (data) => {
        const smsMessage = data.toString().trim();

        // Calculate character count
        let characterCount = smsMessage.length;

        // Determine if over limit
        let overLimit = characterCount > 160;

        // Print results to console
        console.log(`Your SMS Message: "${smsMessage}"`);
        console.log(`Character Count: ${characterCount}`);
        console.log(`Status: ${overLimit ? "Exceeds" : "Within"} standard SMS limit!`);
        console.log("\nTuma Salama!");

        // Exit the process
        process.exit();
    });
}

// Call the function to run it
checkSmsLength();