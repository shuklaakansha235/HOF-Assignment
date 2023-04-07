


function RandomNumberGeneratorwithDelay(delayInSeconds) {
    let delayInMillis = delayInSeconds * 1000;
    let timeLeft = delayInSeconds;
  
    // Display progress message every second
    let countdownInterval = setInterval(() => {
      console.log(`Generating random number in ${timeLeft} seconds...`);
      timeLeft--;
    }, 1000);
  
    // Delay for specified time before generating random number
    setTimeout(() => {
      clearInterval(countdownInterval);
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      console.log(`Random number generated: ${randomNumber}`);
    }, delayInMillis);
  }
  
  // Example usage: generate a random number after a 5 second delay
  RandomNumberGeneratorwithDelay(3);
  