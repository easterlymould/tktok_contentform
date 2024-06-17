document.addEventListener('DOMContentLoaded', (event) => {
    toggleInputs(false);  // Initial call to disable the form elements
    console.log("Form elements disabled on load");
});

function toggleInputs(enable) {
    const formElements = document.querySelectorAll(
        '#steroidsVideoYes, #steroidsVideoNo, #steroidsCaptionYes, #steroidsCaptionNo'
    );
    formElements.forEach(element => {
        element.disabled = !enable;
    });

    // Update form based on the steroids mention selection
    updateForm();
    console.log("Form elements updated. Enable state: ", enable);
}

function updateForm() {
    const steroidsVideoSelected = document.getElementById('steroidsVideoYes').checked;
    const steroidsCaptionSelected = document.getElementById('steroidsCaptionYes').checked;
    const mentionSentimentInputs = document.getElementsByName('mentionSentiment');
    const saleSteroidsInputs = document.getElementsByName('saleSteroids');

    const enableMentionAndSale = steroidsVideoSelected || steroidsCaptionSelected;

    mentionSentimentInputs.forEach(input => {
        input.disabled = !enableMentionAndSale;
    });
    saleSteroidsInputs.forEach(input => {
        input.disabled = !enableMentionAndSale;
    });
    console.log("Form elements updated based on steroids selection: ", enableMentionAndSale);
}
