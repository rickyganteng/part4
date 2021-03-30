
function palindrom(data) {
  data = data.toLowerCase();

  temp1 = [];
  for (i = 0; i < data.length; i++) {
    temp1.push(data[i]);
  } temp1 = temp1.reverse().toString().replace(/\,/g, '');


  if (temp1 == data && temp1.length > 3) {
    return console.log("Data ini adalah palindrom");
  } else {
    return console.log("Data ini tidak palindrom");
  }
} palindrom('maam');

