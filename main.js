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
    const memeImage = document.getElementById("meme-image");
    const submitButton = document.getElementById("submit-button");
    let outputText;
    let result;

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

            const memePositionImage = document.createElement("img");
            memePositionImage.src = "https://i.imgflip.com/9gi7re.jpg";
            memePositionImage.id = "meme-position-image";
            memePositionImage.class = "meme-image";
            memeImage.appendChild(memePositionImage);
            memePositionImage.style.width = "150px"; 
        memePositionImage.style.height = "auto";
        } else {
            const existingSIC = document.getElementById("s-input");
            if (existingSIC) {
                positionInputContainer.removeChild(existingSIC);
            }
            const existingMeme = document.getElementById("meme-position-image");
            if (existingMeme) {
                memeImage.removeChild(existingMeme);
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
        const velocityInput = document.getElementById("v-input");
        const accelerationInput = document.getElementById("a-input");
        const velocity0Input = document.getElementById("v0-input");
        const positionInput = document.getElementById("s-input");
        const timeInput = document.getElementById("t-input");
        const v = velocityInput ? velocityInput.value: null;
        const a = accelerationInput ? accelerationInput.value: null;
        const v0 = velocity0Input ? velocity0Input.value: null;
        const s = positionInput ? positionInput.value: null;
        const t = timeInput ? timeInput.value: null;
        
        const userResultInput = movementUnitResult.value;

        // Position calculations
        if (userResultInput === "position" && accelerationCheck.checked && timeCheck.checked && velocity0Check.checked) {
            result = 0.5*a*t**2 + v0*t;
            outputText = `Resultat: ${result} m` 
        } else if (userResultInput === "position" && accelerationCheck.checked && velocity0Check.checked && velocityCheck.checked) {
            result = (v**2 - v0**2) / (2*a)
            outputText = `Resultat: ${result} m`
        } else if (userResultInput === "position" && velocity0Check.checked && velocityCheck.checked && timeCheck.checked) {
            result = 0.5*(v + v0)*t
            outputText = `Resultat: ${result} m`
        } else if (userResultInput ==="position" && positionCheck.checked) {
            outputText = "Du vet allerede posisjonen ..."
            
            // Velocity calculations
        } else if (userResultInput === "velocity" && velocity0Check.checked && accelerationCheck.checked && timeCheck.checked) {
            result = a*t + v0
            outputText = `Resultat: ${result} m/s`
        } else if (userResultInput === "velocity" && positionCheck.checked && velocity0Check.checked && accelerationCheck.checked) {
            result = Math.sqrt(2*a*s + v0**2)
            outputText = `Resultat: ${result} m/s`
        } else if (userResultInput === "velocity" && positionCheck.checked && accelerationCheck.checked && velocity0Check.checked) {
            result = (s/0.5*t) - v0
            outputText = `Resultat: ${result} m/s`

            // Start velocity calculations
        } else if (userResultInput === "velocity-0" && velocityCheck.checked && accelerationCheck.checked && timeCheck.checked) {
            result = v - a*t
            outputText = `Resultat: ${result} m/s`
        } else if (userResultInput === "velocity-0" && accelerationCheck.checked && positionCheck.checked && velocityCheck.checked) {
            result = Math.sqrt(v**2 - 2*a*s)
            outputText = `Resultat: ${result} m/s`
        } else if (userResultInput === "velocity-0" && positionCheck.checked && accelerationCheck.checked && timeCheck.checked) {
            result = (s - 0.5*a*t**2) / t
            outputText = `Resultat: ${result} m/s`
        } else if (userResultInput === "velocity-0" && timeCheck.checked && velocityCheck.checked && positionCheck.checked) {
            result = (s / 0.5*t) - v
            outputText = `Resultat: ${result} m/s`
            
            // Acceleration calculations
        } else if (userResultInput === "acceleration" && timeCheck.checked && velocity0Check.checked && velocityCheck.checked) {
            result = (v - v0) / t
            outputText = `Resultat: ${result} m/s^2`
        } else if (userResultInput === "acceleration" && timeCheck.checked && positionCheck.checked && velocity0Check.checked) {
            result = (s - v0*t) / (0.5*t**2)
            outputText = `Resultat: ${result} m/s^2`
        } else if (userResultInput === "acceleration" && positionCheck.checked && velocity0Check.checked && velocityCheck.checked) {
            result = (v**2 - v0**2) / 2*s
            outputText = `Resultat: ${result} m/s^2`

            // Time calculations
        } else if (userResultInput === "time" && accelerationCheck.checked && velocity0Check.checked && velocityCheck.checked) {
            result = (v - v0) / a
            outputText = `Resultat: ${result} s`
        } else if (userResultInput === "time" && positionCheck.checked && velocity0Check.checked && velocityCheck.checked) {
            result = s / (0.5*(v+v0))
            outputText = `Resultat: ${result} s`
        } else if (userResultInput === "time" && positionCheck.checked && accelerationCheck.checked && velocity0Check.checked) {
            result = (Math.sqrt(2*a*s + v0**2) - v0) / a
            outputText = `Resultat: ${result} s`

            // Exeptions
        } else {
            outputText = "Det du satt inn ble ikke godtatt."
        }

        const processedInput = outputText;

        resultOutput.textContent = processedInput;

    });

});
