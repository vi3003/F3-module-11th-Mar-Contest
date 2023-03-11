let Score = {};

function openingCeremony(score, Race100M){
    score = {red:0, blue:0, green:0, yellow:0};
    setTimeout(() => {
        console.log("Let's the game begin!");
        Race100M(score, longJump);
    }, 1000);
}

function race100M(score, LongJump){
    setTimeout(() => {
        console.log("Score");
        console.log(score);
        const obj = {
             red: Math.floor(Math.random() * 6) + 10,
             blue: Math.floor(Math.random() * 6) + 10,
             green: Math.floor(Math.random() * 6) + 10,
             yellow: Math.floor(Math.random() * 6) +10 
        };
        const sortedArray = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
        let nObj = {};
        nObj[sortedArray[0]] = 50;
        nObj[sortedArray[1]] = 25;
        console.log("Winner of 100M race is " + sortedArray[0]);

        score[sortedArray[0]] += 50;
        score[sortedArray[1]] += 25;

        console.log("Updated Score");
        console.log(score);
        LongJump(score, highJump);

    }, 3000);

    
}

function longJump(score, highJump){
    setTimeout(() => {
        console.log("Prev Score");
        console.log(score);

        const l = Math.floor(Math.random() * 4) + 1;
        if(l == 1){
            let value = score.red;
            value += 150;
            score.red = value;
            console.log("Winner of LongJump is red");
            console.log("Updated Score");
            console.log(score);
        }
        if(l == 2){
            let value = score.blue;
            value += 150;
            score.blue = value;
            console.log("Winner of LongJump is blue");
            console.log("Updated Score");
            console.log(score);
        }
        if(l == 3){
            let value = score.green;
            value += 150;
            score.green = value;
            console.log("Winner of LongJump is green");
            console.log("Updated Score");
            console.log(score);
        }
        if(l == 4){
            let value = score.yellow;
            value += 150;
            score.yellow = value;
            console.log("Winner of LongJump is yellow");
            console.log("Updated Score");
            console.log(score);
        }
        highJump(score, awardCeremony);
        
    }, 2000);
}

function highJump(score, AwardCeremony){

    console.log("Prev Score");
    console.log(score);

    let p = prompt("Please enter the Colour");

    if (p == null || p == "") {
        console.log("Event Was cancelled");
        AwardCeremony(score);
    } else {
        if(p == "red"){
            let val = score.red;
            val += 100;
            score.red = val;
            console.log("Winner of HighJump is red");
            console.log("Updated Score");
            console.log(score);
        }
        if(p == "blue"){
            let val = score.blue;
            val += 100;
            score.blue = val;
            console.log("Winner of HighJump is blue");
            console.log("Updated Score");
            console.log(score);
        }
        if(p == "green"){
            let val = score.green;
            val += 100;
            score.green = val;
            console.log("Winner of HighJump is green");
            console.log("Updated Score");
            console.log(score);
        }
        if(p == "yellow"){
            let val = score.yellow;
            val += 100;
            score.yellow = val;
            console.log("Winner of HighJump is yellow");
            console.log("Updated Score");
            console.log(score);
        }
        AwardCeremony(score);
    }
}

function awardCeremony(score){
    
    let sortedArr = Object.keys(score).sort((a, b) => score[a] - score[b]);
    let n = sortedArr.length;
    
    console.log(`${sortedArr[n-1]} Came First with ${score[sortedArr[n-1]]} points`);
    console.log(`${sortedArr[n-2]} Came Second with ${score[sortedArr[n-2]]} points`);
    console.log(`${sortedArr[n-3]} Came Third with ${score[sortedArr[n-3]]} points`);
    console.log(`${sortedArr[n-4]} Came Fourth with ${score[sortedArr[n-4]]} points`);
}

openingCeremony(Score, race100M);