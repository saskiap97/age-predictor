// Select and store the two buttons, set them to be disabled by default so they cant be clicked until the form is filled.

const submit = document.getElementById('submit')
submit.disabled = true;

const clearEntries = document.getElementById('clear-entries')
clearEntries.disabled = true;

// Select and store the two input fields individually

const nameInput = document.getElementById('name')
const countryInput = document.getElementById('country')

//Select and store where we will display the result or any errors

const output = document.getElementById('output')
const outputAge = document.getElementById('output-age')
const ifErrors = document.getElementById('if-errors')


//Add click listener to the submit button, which makes the call to the API with the details from the input

submit.addEventListener('click', () => {
    const name = nameInput.value;
    const country = countryInput.value;
    const url = `https://api.agify.io/?name=${name}&country_id=${country}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (country.length > 2) { ifErrors.innerHTML = 'please ensure you have entered an Alpha2 country code' }

            else if (data.age === null) {
                ifErrors.innerHTML = `Sorry we could not find a result for '${data.name}' in '${data.country_id}'`
            }

            //if API returns with valid result, display modal with the result
            else if (data.name !== '' && data.country_id !== '') {
                modal.style.display = "block"
                output.innerHTML = `We predict that the age of ` + data.name.toUpperCase() + ` in ` + data.country_id.toUpperCase() + ` is: `
                outputAge.innerHTML = data.age
            }

        })
        .catch((err) => { console.log(err) })
})



// get the modal
const modal = document.getElementById("myModal");

// get the <span> element to close modal
const span = document.getElementsByClassName("close")[0];


// when the user clicks on the x, close the modal
span.onclick = function () {
    modal.style.display = "none";
}


// store both inputs in array to add event listeners to both
const bothInputs = document.querySelectorAll('input')

// if both inputs have a value (something has been entered in the field), switch the ID of the button to change the styling, and enable the buttons to be clicked

bothInputs.forEach(function (elem) {
    elem.addEventListener('input', () => {
        if (bothInputs[0].value !== '' && bothInputs[1].value !== '') {

            submit.disabled = false
            clearEntries.disabled = false
            document.getElementById('submit').id = "new-button-style"
            document.getElementById("clear-entries").id = "new-clear-entries-button-style"
        } else {
            document.getElementById('new-button-style').id = "submit"
            document.getElementById("new-clear-entries-button-style").id = "clear-entries"
        }
    }
    )
})

// when the clear entries button is clicked, reset the form, remove any error messages, return buttons to original style and disable them.

clearEntries.addEventListener('click', () => {
    document.getElementById("form-and-buttons").reset()
    ifErrors.innerHTML = ''
    document.getElementById('new-button-style').id = "submit"
    document.getElementById("new-clear-entries-button-style").id = "clear-entries"
    submit.disabled = true;
    clearEntries.disabled = true;

})
