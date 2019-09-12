// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)


const teamA = 89 + 120 + 103;

let numberOfGames = 3;

const teamB = 116 + 94 + 123;


let teamAAvg =  (teamA) / numberOfGames;
let teamBAVG = (teamB) / numberOfGames;

if (teamAAvg > teamBAVG) {
    console.log("Team A wins!")
}else{

console.log("Team B wins!")
}