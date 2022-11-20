function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

//Using spread operator + array reduce function to solve
// const goals = (...a) => a.reduce((s, v) => s + v, 0);