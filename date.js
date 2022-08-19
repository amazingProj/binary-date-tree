const getAllPrevMonth = () => {
  let result = [];
  let Month = 30;
  let now = new Date();
  let two, three;
  let tempArray;
  for (let i = 0; i < Month; ++i) {
    if (i % 5 === 0) {
      tempArray = now.toDateString().split(" ").slice(0, 3);
      two = tempArray[1];
      three = tempArray[2];
      result[i] = `${three} in ${two}`;
    } else {
      result[i] = "";
    }
    now.setDate(now.getDate() - 1);
  }
  return result.reverse();
};

module.exports = getAllPrevMonth;
