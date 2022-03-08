//backup code if not working and use this variable to html and function in css:  document.getElementById('sound').play();//
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
      document.getElementById('text').innerHTML='Congratulation, you got Xiao! Aries is the symbol of the charging Ram, and it is ruled by impetuous and passionate behavior. Xiao was born under the sign of Aries.';
      var audio = new Audio('mp3/xiao.mp3');
      audio.play();
} else if (month === 4 && day >= 20 || month === 5 && day <= 20) {
  document.querySelector('#horoscopeText').innerHTML = 'Diluc';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948664976749494333/diluc1.gif>';
  document.getElementById('text').innerHTML='Congratulation, you got Diluc! Taurus is known for its creativity and persistence, as well as for taking patient and calculated actions. They like a sense of protectiveness and accumulation, as well as stability and security. Diluc was born under the sign of Taurus.';
  var audio = new Audio('mp3/diluc.mp3')
  audio.play();
} else if (month === 5 && day >= 21 || month === 6 && day <= 21) {
  document.querySelector('#horoscopeText').innerHTML = 'Itto';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665045330587718/itto1.gif>';
  document.getElementById('text').innerHTML='Congratulation, you got Itto! Gemini is associated with intelligence, communication, mental connections, movement, and one interaction with their surroundings. They have a strong desire for freedom of expression and mobility, as well as a high level of curiosity and inconstancy. Itto was born under the sign of Gemini.';
  var audio = new Audio('mp3/itto.mp3')
  audio.play();
} else if (month === 6 && day >= 22 || month === 7 && day <= 22) {
  document.querySelector('#horoscopeText').innerHTML = 'Raiden Shogun';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/949162037525749760/raiden.gif>';
  document.getElementById('text').innerHTML='Congratulation, You got Raiden Shogun! Cancer is known for emotional sensitivity, and they often go to great lengths to shield themselves emotionally. They value their family and the ones they love above anything else. Raiden Shogun was born under the sign of Cancer.';
  var audio = new Audio('mp3/baal.mp3')
  audio.play();
} else if (month === 7 && day >= 23 || month === 8 && day <= 22) {
  document.querySelector('#horoscopeText').innerHTML = 'Klee';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665107188187147/klee1.gif>';
  document.getElementById('text').innerHTML='Congratulation, You got Klee! Leo is known for sensitivity and natural leadership abilities, as well as the charm, power, and enthusiasm. Leo, on the other hand, is stubborn and strict. Leo might look forceful, theatrical, or haughty and dictatorial on the surface, but they are giving, caring people who always put their crew needs first. Klee was born under the sign of Leo.';
  var audio = new Audio('mp3/klee.mp3')
  audio.play();
} else if (month === 8 && day >= 23 || month === 9 && day <= 22) {
  document.querySelector('#horoscopeText').innerHTML = 'Mona';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665114909888562/mona1.gif>';
  document.getElementById('text').innerHTML='Congratulation, You got Mona! Virgo is known for being careful. When it comes to solving difficulties, they are reasonable and systematic. They are driven by a strong desire to develop and seek excellence through practice. Moan was born under the sign of Virgo.';
  var audio = new Audio('mp3/mona.mp3')
  audio.play();
} else if (month === 9 && day >= 23 || month === 10 && day <= 22) {
  document.querySelector('#horoscopeText').innerHTML = 'Ayaka';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/710745951236522019/948665243364634674/ayaka1.gif>';
  document.getElementById('text').innerHTML='Congratulation, You got Ayaka! Libra is known for teamwork, balance, harmony, and justice. They strive for balance in all parts of life, especially in terms of relationships and emotional issues. For Libra, having a partner they trust and love is important. Ayaka was born under the sign of Libra.';
  var audio = new Audio('mp3/ayaka.mp3')
  audio.play();
} else if (month === 10 && day >= 23 || month === 11 && day <= 22) {
  document.querySelector('#horoscopeText').innerHTML = 'Eula';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665301476704307/eula1.gif>';
  document.getElementById('text').innerHTML='Congratulation, You got Eula! Scorpio is well-known for being intriguing, mysterious, and often misinterpreted. They may look cool and relaxed, yet they have powerful emotions and use emotional energy as a source of energy. They possess tremendous bravery as a result of their intense emotional intensity and desire. Eula was born under the sign of Scorpio.';
  var audio = new Audio('mp3/eula.mp3')
  audio.play();
} else if (month === 11 && day >= 23 || month === 12 && day <= 21) {
  document.querySelector('#horoscopeText').innerHTML = 'Ganyu';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/710745951236522019/948665812825305118/ganyu1.gif>';
  document.getElementById('text').innerHTML='Congratulation, You got Ganyu! Sagittarius is known for its never-ending expansion, whether physical, mental, cultural, or spiritual. They are always on the lookout for new information that will lead to wisdom. Ganyu was born under the sign of Sagittarius.';
  var audio = new Audio('mp3/ganyu.mp3')
  audio.play();
} else if (month === 12 && day >= 22 || month === 1 && day <= 19) {
  document.querySelector('#horoscopeText').innerHTML = 'Zhongli';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665869523910666/zhongli1.gif>';
  document.getElementById('text').innerHTML='Congratulation, You got Zhongli! Capricorns is known for their emotional and behavioral self-control. Capricorn uses their persistence and discipline to gradually climb up the mountain like a mountain goat in order to achieve their achievement. Zhongli was born under the sign of Capricon.';
  var audio = new Audio('mp3/zhongli.mp3')
  audio.play();
} else if (month === 1 && day >= 20 || month === 2 && day <= 18) {
  document.querySelector('#horoscopeText').innerHTML = 'Beidou';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665884531130388/beidou1.gif>';
  document.getElementById('text').innerHTML='Congratulation, You got Beidou! Aquarius is known for creative, progressive, and innovative. They are idealists who want to improve the world by developing new ideas and solutions. Aquarius, on the other hand, may be obstinate and cherish their freedom above everything else. Beidou was born under the sign of Aquarius.';
  var audio = new Audio('mp3/beidou.mp3')
  audio.play();
} else if (month === 2 && day >= 19 || month === 3 && day <= 20) {
  document.querySelector('#horoscopeText').innerHTML = 'Jean';
  document.getElementById('picture').innerHTML='<img src=https://cdn.discordapp.com/attachments/944000709928562758/948665897248239656/jean1.gif>';
  document.getElementById('text').innerHTML='Congratulation, You got Jean! Pisces is known for all of the other sign joys and pains, hopes and concerns. It is the most perceptive, sensitive, and empathetic and Pisces is vulnerable to being overwhelmed by emotions because to its sensitivity. Jean was born under the sign of Pisces.';
  var audio = new Audio('mp3/jean.mp3')
  audio.play();
} else {
  console.log('Error, try again!')
}

}