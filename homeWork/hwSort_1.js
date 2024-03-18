//407
//нужно вычислить для каждой команды количество очков, разницу забитых и пропущенных мячей и количество забитых мячей. Затем отсортировать команды по этим критериям в нужном порядке. Если две или более команд имеют одинаковое количество очков, то сравниваются другие критерии. Если все критерии равны, то команды делят место. 

function computeRanks(number, games) {
    let obj = {}
    for(let i = 0; i < number; i += 1) {
       obj[i] = {
            scoreGoals : 0,
            points: 0,
            missedGoals : 0,
            scoreDifference : 0,
        }
    }
    for(const arr of games) {
        if(arr[0] in obj) {
            obj[arr[0]].scoreGoals += arr[2];
        }
        if(arr[1] in obj) {
            obj[arr[1]].scoreGoals += arr[3]
        }
        if(arr[2] < arr[3]) {
            obj[arr[1]].points += 2
        }
        if(arr[2] > arr[3]) {
            obj[arr[0]].points += 2
        }
        if(arr[2] === arr[3]) {
            obj[arr[0]].points += 1;
            obj[arr[1]].points += 1;
        }
        obj[arr[0]].missedGoals += arr[3];
        obj[arr[1]].missedGoals += arr[2];
    }
    for(const key in obj) {
        obj[key].scoreDifference = obj[key].scoreGoals - obj[key].missedGoals
    }
    console.log(obj)
    const sort = Object.keys(obj).sort((a,b) => {
        if(obj[a].points > obj[b].points) {
            return -1
        }
        if(obj[a].points < obj[b].points) {
            return 1;
        }
        if(obj[a].scoreDifference > obj[b].scoreDifference) {
            return -1;
        }
        if(obj[a].scoreDifference < obj[b].scoreDifference) {
            return 1
        }
        if(obj[a].scoreGoals > obj[b].scoreGoals) {
            return -1
        }
        if(obj[a].scoreGoals < obj[b].scoreGoals) {
            return 1
        }
        return 0;
    });
    return sort
 }

console.log(computeRanks(6, 
    [[0, 5, 2, 0],
     [1, 4, 2, 2],
     [2, 3, 1, 3],
     [1, 5, 0, 0],
     [2, 0, 2, 1],
     [3, 4, 3, 1]
])) //[2,3,4,1,5,6]


// {
//     '0': { scoreGoals: 3, points: 2, missedGoals: 2, scoreDifference: 1 },
//     '1': { scoreGoals: 2, points: 2, missedGoals: 2, scoreDifference: 0 },
//     '2': { scoreGoals: 3, points: 2, missedGoals: 4, scoreDifference: -1 },
//     '3': { scoreGoals: 6, points: 4, missedGoals: 2, scoreDifference: 4 },
//     '4': { scoreGoals: 3, points: 1, missedGoals: 5, scoreDifference: -2 },
//     '5': { scoreGoals: 0, points: 1, missedGoals: 2, scoreDifference: -2 }
//   }