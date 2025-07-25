const defaultNumbers = Array.from({length: 27}, (_, i) => i + 1);

const nameInput = document.getElementById('names');
const seatTable = document.getElementById('seatTable');
const randomBtn = document.getElementById('randomBtn');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderSeats(numbers) {
  seatTable.innerHTML = '';
  let idx = 0;
  for (let row = 0; row < 4; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 7; col++) {
      const td = document.createElement('td');
      let num = numbers[idx] ? numbers[idx] : '';
      td.innerHTML = `<span style='font-size:3em;color:#ff69b4;font-weight:bold;display:flex;align-items:center;justify-content:center;width:100%;height:100%;'>${num}</span>`;
      td.className = 'seat-cell';
      idx++;
      tr.appendChild(td);
    }
    seatTable.appendChild(tr);
  }
}

randomBtn.addEventListener('click', () => {
  const numbers = Array.from({length: 27}, (_, i) => i + 1);
  shuffle(numbers);
  renderSeats(numbers);
});

// 기본값 세팅
nameInput.value = '';
renderSeats(defaultNumbers);
