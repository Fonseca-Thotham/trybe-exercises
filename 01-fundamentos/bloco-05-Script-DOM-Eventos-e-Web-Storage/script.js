function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const alldays = document.querySelector('#days');
  for (let i = 0; i < dezDaysList.length; i++) {
      let day = dezDaysList[i];
      const daylist = document.createElement('li');
      daylist.className = "day";
      daylist.innerHTML = day;

      if (daylist.innerText.includes('24')) {
        daylist.className += " holiday";
      }
      if (daylist.innerText.includes('25')) {
        daylist.className += " holiday";
      }
      if (daylist.innerText.includes('26')) {
        daylist.className += " holiday";
      }
      if (daylist.innerText===('4')) {
        daylist.className += " friday";
      }if (daylist.innerText.includes('11')) {
        daylist.className += " friday";
      }if (daylist.innerText.includes('18')) {
        daylist.className += " friday";
      }if (daylist.innerText.includes('25')) {
        daylist.className += " friday";
      }
    alldays.appendChild(daylist);
    }




