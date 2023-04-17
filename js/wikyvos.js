// AddTerm popup
const showTermPopupBtn = document.getElementById('show-term-popup');
const addTermPopup = document.getElementById('add-term-popup');
const addTermForm = document.getElementById('add-term-form');
const termEnInput = document.getElementById('term-en-input');
const termFrInput = document.getElementById('term-fr-input');
const defEnInput = document.getElementById('definition-en-input');
const defFrInput = document.getElementById('definition-fr-input');
const closeBtn = document.getElementById('close-AddTermPopup');
const termEnTip = document.getElementById('term-en-tip');
const termFrTip = document.getElementById('term-fr-tip');

window.onclick = function (event) {
    if ((event.target !== addTermPopup && !addTermPopup.contains(event.target) & addTermPopup.classList.contains('active')) || (event.target === closeBtn && addTermPopup.classList.contains('active'))) {
        addTermForm.reset();
        addTermPopup.classList.remove('active');
    } else if (event.target === showTermPopupBtn) {
        addTermPopup.classList.add('active');
        termEnInput?.focus();
    }
}

addTermForm.addEventListener('submit', (event) => {
    event.preventDefault();
    termEnTip.textContent = "";
    termFrTip.textContent = "";


    if (!termEnInput.value && !termFrInput.value) {
        termEnTip.textContent = "Veuillez fournir au moins une version du terme.";
        termFrTip.textContent = "Veuillez fournir au moins une version du terme.";
        return;
    }



    // Store the form data in LocalStorage
    const termData = {
        termEn: termEnInput.value,
        termFr: termFrInput.value,
        defEn: defEnInput.value,
        defFr: defFrInput.value
    };
    localStorage.setItem('newTerm', JSON.stringify(termData));
});

// Construction of the dictionary
let dictionaryIsShowing = false;
function constrDictionary() {
    if (dictionaryIsShowing) {
        return;
    } else {
        dictionaryIsShowing = true;
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        const table = document.getElementById('dictionary-table');
        const rows = table.getElementsByTagName('tr');

        function filterTable() {
            const searchText = searchInput.value.toLowerCase();
            for (let i = 0; i < rows.length; i++) {
                const cells = rows[i].getElementsByTagName('td');
                let match = false;
                for (let j = 0; j < cells.length; j++) {
                    if (j === 0 || j === 1 || j === 3) {
                        const cellText = cells[j].innerText.toLowerCase();
                        if (cellText.indexOf(searchText) > -1) {
                            match = true;
                            break;
                        }
                    }
                }
                if (match) {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        }

        searchInput.addEventListener('keyup', filterTable);


        // Select the table body element
        const tbody = document.querySelector('#dictionary-table tbody');

        // Fetch the JSON data from the file and parse it into an array of objects
        fetch('../json/dictionary-terms.json')
            .then(response => response.json())
            .then(data => {
                // Loop through each object in the array
                data.forEach(term => {
                    // Create a new row element
                    const row = document.createElement('tr');

                    // Create a new cell element for each data item in the object and add it to the row
                    const acrCell = document.createElement('td');
                    acrCell.textContent = term.acr;
                    row.appendChild(acrCell);

                    const termEnCell = document.createElement('td');
                    termEnCell.textContent = term.term_en;
                    row.appendChild(termEnCell);

                    const definitionEnCell = document.createElement('td');
                    definitionEnCell.textContent = term.definition_en;
                    row.appendChild(definitionEnCell);

                    const termFrCell = document.createElement('td');
                    termFrCell.textContent = term.term_fr;
                    row.appendChild(termFrCell);

                    const definitionFrCell = document.createElement('td');
                    definitionFrCell.textContent = term.definition_fr;
                    row.appendChild(definitionFrCell);

                    // Append the new row to the table body
                    tbody.appendChild(row);
                });
            })
            .catch(error => console.error(error));
    }
}