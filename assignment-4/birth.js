//target function//
function chooseSelect(){
  calender = new Date(document.getElementById('dateInfo').value);
  let day = calender.getDate();
  let month = calender.getMonth() + 1;

// month/date select//
//update text for final!//
  if (month === 3 && day >= 21 || month === 4 && day <= 19) {
      document.querySelector('#horoscopeText').innerHTML = 'Xiao';
      document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948654505254326393/xiao1.gif>';
      document.getElementById('text').innerHTML='put text here until final';
} else if (month === 4 && day >= 20 || month === 5 && day <= 20) {
  document.querySelector('#horoscopeText').innerHTML = 'Diluc';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948664976749494333/diluc1.gif>';
  document.getElementById('text').innerHTML='put text here until final';
} else if (month === 5 && day >= 21 || month === 6 && day <= 21) {
  document.querySelector('#horoscopeText').innerHTML = 'Itto';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665045330587718/itto1.gif>';
  document.getElementById('text').innerHTML='put text here until final';
} else if (month === 6 && day >= 22 || month === 7 && day <= 22) {
  document.querySelector('#horoscopeText').innerHTML = 'Raiden Shogun';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665046286864454/raidenyae1.gif>';
  document.getElementById('text').innerHTML='put text here until final';
} else if (month === 7 && day >= 23 || month === 8 && day <= 22) {
  document.querySelector('#horoscopeText').innerHTML = 'Klee';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665107188187147/klee1.gif>';
  document.getElementById('text').innerHTML='put text here until final';
} else if (month === 8 && day >= 23 || month === 9 && day <= 22) {
  document.querySelector('#horoscopeText').innerHTML = 'Mona';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665114909888562/mona1.gif>';
  document.getElementById('text').innerHTML='put text here until final';
} else if (month === 9 && day >= 23 || month === 10 && day <= 23) {
  document.querySelector('#horoscopeText').innerHTML = 'Ayaka';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/710745951236522019/948665243364634674/ayaka1.gif>';
  document.getElementById('text').innerHTML='put text here until final';
} else if (month === 10 && day >= 24 || month === 11 && day <= 21) {
  document.querySelector('#horoscopeText').innerHTML = 'Eula';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665301476704307/eula1.gif>';
  document.getElementById('text').innerHTML='put text here until final';
} else if (month === 11 && day >= 22 || month === 12 && day <= 21) {
  document.querySelector('#horoscopeText').innerHTML = 'Ganyu';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/710745951236522019/948665812825305118/ganyu1.gif>';
  document.getElementById('text').innerHTML='put text here until final';
} else if (month === 12 && day >= 22 || month === 1 && day <= 19) {
  document.querySelector('#horoscopeText').innerHTML = 'Zhongli';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665869523910666/zhongli1.gif>';
  document.getElementById('text').innerHTML='put text here until final';
} else if (month === 1 && day >= 20 || month === 2 && day <= 18) {
  document.querySelector('#horoscopeText').innerHTML = 'Beidou';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665884531130388/beidou1.gif>';
  document.getElementById('text').innerHTML='put text here until final';
} else if (month === 2 && day >= 19 || month === 3 && day <= 20) {
  document.querySelector('#horoscopeText').innerHTML = 'Jean';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665897248239656/jean1.gif>';
  document.getElementById('text').innerHTML='put text here until final';
} else {
  console.log('Error')
}

}