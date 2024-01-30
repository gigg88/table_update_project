document.addEventListener("DOMContentLoaded", () => {
    // Create the array with one value for Cell 1
    const cell1Data = ["Value for Cell 1"];
  
    // Access the span element within the first cell
    const cell1ContentSpan = document.getElementById("cell1Content");
    const updateButton = document.getElementById("updateButton");
  
    // Add event listener to the button
    updateButton.addEventListener("click", () => {
      cell1ContentSpan.textContent = cell1Data[0];
    });
  });
  