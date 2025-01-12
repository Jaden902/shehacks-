// Function to calculate the percentage of completed tasks
function calculateProgress(totalTasks, completedTasks) {
    return totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
}

// Function to update the displayed progress
function updateProgressDisplay(progressPercentage) {
    let progressText = document.getElementById("progressText");
    
    if (!progressText) {
        progressText = document.createElement("div");
        progressText.id = "progressText";
        document.body.appendChild(progressText);  // You can append it anywhere in the body
    }

    progressText.textContent = `Goal completion: ${progressPercentage.toFixed(2)}%`;
}
