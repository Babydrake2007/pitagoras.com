
// Movement calculations
document.addEventListener("DOMContentLoaded", () => {
    const movementUnitResult = document.getElementById("movement-unit-result");
    const velocityCheck = document.getElementById("v-m-check");
    const accelerationCheck = document.getElementById("a-m-check");
    const velocity0Check = document.getElementById("v0-m-check");
    const positionCheck = document.getElementById("s-m-check");
    const timeCheck = document.getElementById("t-m-check");
    const timeInputContainer = document.getElementById("t-input-c");
    const positionInputContainer = document.getElementById("s-input-c");
    const velocityInputContainer = document.getElementById("v-input-c");
    const velocity0InputContainer = document.getElementById("v0-input-c");
    const accelerationInputContainer = document.getElementById("a-input-c");
    const resultOutput = document.getElementById("result-output");
    const submitButton = document.getElementById("submit-button");
    let outputText;

    velocity0Check.addEventListener("change", () => {
        if (velocity0Check.checked) {
            const velocity0Input = document.createElement("input");
            velocity0Input.type = "number";
            velocity0Input.id = "v0-input";
            velocity0Input.placeholder = "Hva er starthastigheten?";
            velocity0InputContainer.appendChild(velocity0Input);
        } else {
            const existingV0IC = document.getElementById("v0-input");
            if (existingV0IC) {
                velocity0InputContainer.removeChild(existingV0IC);
            }
        }
    });

    velocityCheck.addEventListener("change", () => {
        if (velocityCheck.checked) {
            const velocityInput = document.createElement("input");
            velocityInput.type = "number";
            velocityInput.id = "v-input";
            velocityInput.placeholder = "Hva er hastigheten?";
            velocityInputContainer.appendChild(velocityInput);
        } else {
            const existingVIC = document.getElementById("v-input");
            if (existingVIC) {
                velocityInputContainer.removeChild(existingVIC);
            }
        }
    });

    timeCheck.addEventListener("change", () => {
        if (timeCheck.checked) {
            const timeInput = document.createElement("input");
            timeInput.type = "number";
            timeInput.id = "t-input";
            timeInput.placeholder = "Hvor lang tid?";
            timeInputContainer.appendChild(timeInput);
        } else {
            const existingTIC = document.getElementById("t-input");
            if (existingTIC) {
                timeInputContainer.removeChild(existingTIC);
            }
        }
    });

    positionCheck.addEventListener("change", () => {
        if (positionCheck.checked) {
            const positionInput = document.createElement("input");
            positionInput.type = "number";
            positionInput.id = "s-input";
            positionInput.placeholder = "Hva er posisjonen?";
            positionInputContainer.appendChild(positionInput);
        } else {
            const existingSIC = document.getElementById("s-input");
            if (existingSIC) {
                positionInputContainer.removeChild(existingSIC);
            }
        }
    });

    accelerationCheck.addEventListener("change", () => {
        if (accelerationCheck.checked) {
        const accelerationInput = document.createElement("input");
        accelerationInput.type = "number";
        accelerationInput.id = "a-input";
        accelerationInput.placeholder = "Hva er akselerasjonen?";
        accelerationInputContainer.appendChild(accelerationInput);
        } else {
            const existingAIC = document.getElementById("a-input");
            if (existingAIC) {
                accelerationInputContainer.removeChild(existingAIC)
            }
        }
    });
        
    
    submitButton.addEventListener("click", () => {
        const userInput = movementUnitResult.value;

        if (userInput === "velocity") {
            testOutputText = "Svar: vroom!"
        } else {
            testOutputText = "Svar: boring"
        };

        
        if (movementUnitResult === "position" && accelerationChecked && timeChecked && velocity0Checked) {
            outputText = String(0.5*a*t**2 + v0*t)
        }

        const processedInput = outputText;

        resultOutput.textContent = processedInput;

    });

});
