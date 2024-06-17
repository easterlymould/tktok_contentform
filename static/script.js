function updateForm() {
    const steroidsSelected = document.getElementById('steroids').checked;
    const mentionSentimentInputs = document.getElementsByName('mentionSentiment');
    const saleSteroidsInputs = document.getElementsByName('saleSteroids');

    for (let input of mentionSentimentInputs) {
        input.disabled = !steroidsSelected;
    }
    for (let input of saleSteroidsInputs) {
        input.disabled = !steroidsSelected;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateForm();  // Initial call to set the correct state based on the default selection
});
