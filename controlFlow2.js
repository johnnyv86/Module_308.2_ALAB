// ALAB 308.3 //

// PART ONE //

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const spacePerPlant = 0.8;
const initialPlants = 20;
const growthRate = 2;

// Calculating Maximum Capacity
const maxCapacity = Math.floor(area / spacePerPlant);
console.log(`Maximum amount of plants possible is ${maxCapacity}.`)



// Function - Predicting growth after N weeks //
function getPlantCountAfterWeeks(weeks) {
    return initialPlants * (growthRate ** weeks);
}

function getRecommendationForWeek(weeks) {
    const plantCount = getPlantCountAfterWeeks(weeks);
    const capacity80 = 0.8 * maxCapacity;
    const capacity50 = 0.5 * maxCapacity;

    let recommendation;

    if (plantCount > capacity80) {
        recommendation = "Prune";
    } else if (plantCount >= capacity50) {
        recommendation = "Monitor";
    } else {
        recommendation = "Plant";
    }

    return {
        weeks,
        plantCount,
        recommendation
    };
}

const week1Results = getRecommendationForWeek(1);
console.log(`At week ${week1Results.weeks}: ${week1Results.plantCount} plants -> Recommendation: ${week1Results.recommendation}.`)

const week2Results = getRecommendationForWeek(2);
console.log(`At week ${week2Results.weeks}: ${week2Results.plantCount} plants -> Recommendation: ${week2Results.recommendation}.`)

const week3Results = getRecommendationForWeek(3);
console.log(`At week ${week3Results.weeks}: ${week3Results.plantCount} plants -> Recommendation: ${week3Results.recommendation}.`)


// PART TWO: THINKING BIGGER //

const startBigPlants = 100;
const bigWeeks = 10;

const bigPlantCount = startBigPlants * (growthRate ** bigWeeks)
console.log(`Big Total: ${bigPlantCount}`)

const bigAreaRequired = bigPlantCount * spacePerPlant;
console.log(`New area needed is ${bigAreaRequired}`)

// Calculating New Radius //
const bigRadius = Math.sqrt(bigAreaRequired / PI)
console.log(`The radius of the new area required will be: ${bigRadius.toFixed(2)}`)


// PART THREE: ERRORS IN JUDGEMENT //
const plantHighStart = 100;

try {
    const areaHighStart = plantHighStart * spacePerPlant;

    console.log(`Attempting to plant ${plantHighStart} plants...`)
    console.log(`Original garden area is: ${area.toFixed(2)} m^2.`)
    console.log(`Required area required for ${plantHighStart} plants is ${areaHighStart.toFixed(2)} m^2.`)

    
if (areaHighStart > area) {
    throw new Error(
        "Too many plants! The Required area of (${areaHighStart.toFixed(2)} m^2) exceeds the garden's current capacity of (${area.toFixed(2)} m^2).")
    }

    console.log("The current garden space can safely accomadate the starting plants.")

}   catch(error) {
    console.error("Error in plant planning:", error.message);

}
