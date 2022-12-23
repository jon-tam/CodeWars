var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = humanYears === 1 ? 15 : humanYears === 2 ? 15 + 9 : humanYears >= 3 ?  15 + 9 + (humanYears-2) * 4 : 0
  let dogYears = humanYears === 1 ? 15 : humanYears === 2 ? 15 + 9 : humanYears >= 3 ?  15 + 9 + (humanYears-2) * 5 : 0
  
  return [humanYears, catYears, dogYears]
}