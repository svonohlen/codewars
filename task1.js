function solution(number) {
  let mySet = new Set(); //set actually not needed
  let sum = 0;
  let i = 0;
  while (i < number) {
    if (i % 3 === 0 || i % 5 === 0) {
      mySet.add(i);
    }
    i++;
  }
  mySet.forEach((element) => (sum += element));

  return sum;
}
