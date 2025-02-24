// Get references to the DOM elements
const drawStairsButton = document.getElementById('draw-stairs-button');
const ladderWrapper = document.getElementById('ladder-wrapper');
const ladderContainer = document.getElementById('ladder-container');
const stickPerson = document.getElementById('stick-person');
const stickPerson2 = document.getElementById('stick-person2');

// Function to create the rungs of the ladder
const drawStairs = () => {
    // Clear the previous ladder if it exists
    ladderContainer.innerHTML = ''; // Remove all child elements (rungs)
    
    // Hide the stick figures before drawing a new ladder
    stickPerson.classList.add('hidden');
    stickPerson2.classList.add('hidden');
    
    // Show the ladder container
    ladderContainer.classList.remove('hidden');
    ladderContainer.classList.add('show-border');
    
    // Create the 10 rungs of the ladder using a for loop
    for (let i = 0; i < 10; i++) {
        const rung = document.createElement('div');
        rung.classList.add('rung');
        ladderContainer.appendChild(rung);
    }
    

    // Position the stick figure above the bottom rung (not touching the button)
    stickPerson.classList.remove('hidden');
    stickPerson.style.bottom = '30px'; // Position the stick figure just above the first rung
    
    // Create and show the "Climb Stairs" button below the stick figure
    const climbButton = document.createElement('button');
    climbButton.textContent = 'Climb Stairs';
    climbButton.id = 'climb-stairs-button';
    ladderWrapper.appendChild(climbButton);  // Append it to the ladder wrapper
    
    // Add event listener for the "Climb Stairs" button
    climbButton.addEventListener('click', climbStairs);
};

// Function to animate the stick figure climbing the stairs
const climbStairs = () => {
    // Hide the "Climb Stairs" button after it is clicked
    document.getElementById('climb-stairs-button').classList.add('hidden');
    
    // Position the stick figure at the start of the climb
    let currentStep = 0;
    let isLeft = true;
    
    // Use setInterval to animate the climbing
    const interval = setInterval(() => {
        // Move the stick figure up by changing the "bottom" property
        stickPerson.style.bottom = `${30 + currentStep * 30}px`; // Start from just above the first rung
        stickPerson2.style.bottom = `${30 + currentStep * 30}px`;

        // Alternate between the two stick figure images for climbing motion
        if (isLeft) {
            stickPerson.classList.remove('hidden');
            stickPerson2.classList.add('hidden');
        } else {
            stickPerson2.classList.remove('hidden');
            stickPerson.classList.add('hidden');
        }
        
        // Switch between the two stick figures
        isLeft = !isLeft;
        
        // Increment the current step
        currentStep++;
        
        // Stop the interval when the stick figure reaches the top of the ladder
        if (currentStep >= 10) {
            clearInterval(interval);
        }
    }, 500); // Adjust this value for a slower or faster climb
};

// Add event listener to the "Draw Ladder" button
drawStairsButton.addEventListener('click', drawStairs);
