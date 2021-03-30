function divideAndsSort(nilai) {
  nilai = nilai.toString().split('0');
  let temp = [];
  nilai.map(arr => {
    const splitArr = arr.toString().split('');
    const sortArr = splitArr.sort();
    const arrToString = sortArr.join('');
    temp.push(arrToString);
    temp1 = temp.toString().replace(/\,/g, '');

  })

  return temp1;
} console.log(divideAndsSort(5956560159466056));

