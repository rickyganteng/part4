let x = [];

function reverseKeyword(data) {
  for (a = 0; a <= data.length; a++) {
    hasil = data.split(' ');
    reservearray = hasil.reverse()
    x = reservearray.toString('')
  } return x.replace(/\,/g, ' ');
} console.log(reverseKeyword('Saya belajar Javascript'));
