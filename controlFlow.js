// GROWING PAINS

// Constants //
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const minSpacePerPlant = 0.8;
const initialPlants = 20;

// Whats the absolute maximum capacity of the garden?
const maxCapacity = Math.floor(area / minSpacePerPlant);

console.log(`Max Capacity: ${maxCapacity} plants`);


// Growth Control Function
function predictGrowth(weeks) {
    // The plants double in number every week
    const plantCount = initialPlants * (2 ** weeks);

    // Percentage of garden full
    const capacityPercent = (plantCount / maxCapacity) * 100;

    console.log(`\n--- Report for Week ${weeks} ---`);
    console.log(`Plant Count: ${plantCount}`);
    console.log(`Capacity: ${capacityPercent.toFixed(2)}%`);

    // Control Flow Logic
    if (capacityPercent > 80%) {
        console.log("Status: PRUNE (Exeeds 80% capacity)");
    } else if (capacityPercent >= 50 && capacityPercent <=80){
        console.log("Status: MONITOR (Between 50% and 80% capacity)");
    } else {
        console.log("Status: PLANT (Less than 50% capacity)");
    }
}

// Growth results for week: 1, 2, 3
predictGrowth(1);
predictGrowth(2);
predictGrowth(3);