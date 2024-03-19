const table = document.getElementById('table');

    let count = 1;
    let length = 10;
    for (let i = 0; i < length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < length; j++) {
            const cell = document.createElement('td');
            cell.textContent = count;
            cell.classList.add('table-box');
            row.appendChild(cell);
            count++;
        }
        table.appendChild(row);
    }

