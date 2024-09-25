document.querySelector('.get').addEventListener('click', () => {
    let amount = parseInt(document.querySelector('.amount-input').value);
    if (isNaN(amount)) {
        return;
    }
    const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let result = '';
    let totalNotes = 0;

    notes.forEach((note) => {
        let count = Math.floor(amount / note);
        if (count > 0) {
            result += `<li>${count} note${count > 1 ? 's' : ''} of Rs ${note}</li><hr class="hr">`; // Use backticks here
            totalNotes += count;
            amount -= count * note;
        }
    });

    document.querySelector('.nav ul').innerHTML = result;
    document.querySelector('.nav h6').innerText = `Total notes dispensed: ${totalNotes}`; // Use backticks here as well
});
