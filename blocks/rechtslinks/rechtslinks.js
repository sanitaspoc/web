function isOdd(num) { return num % 2 ? 'z-row-odd' : 'z-row-even'; }

export default function decorate(el) {

    console.log('rechtslinks block')

    const h2 = el.querySelector('h2');
    if (h2) {
      console.log('h2 gesehen')
      h2.parentElement.parentElement.classList.add('rechtslinks-heading');
    }
    
    const zRows = el.querySelectorAll(':scope > div:not([class])');
    zRows.forEach((row, idx) => {
      console.log('index')
      console.log(idx)
      row.classList.add(isOdd(idx));
  
      const cells = row.querySelectorAll('div');
      cells.forEach((cell) => {
        if (cell.querySelector('img')) {
          cell.classList.add('image-side');
        } else {
          cell.classList.add('content-side');
        }
      });
  
    });
}