const csv = `FIPS,HOUSEHOLD_SIZE,INCOME
061,3,107656
047,5,78962
061,5,-1
061,5,100810
047,2,-1
061,1,108400
061,4,85320
047,4,51954
061,5,190116
061,1,76084
061,2,-1
061,1,76502`;

const lines = csv.split('\n');

let totalIncome = 0;
let totalHouseholds = 0;
let missingData = 0;

for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(',');
    if (row[0] === '061') {
        if (row[2] !== '-1') {
            totalIncome += parseInt(row[2]);
            totalHouseholds++;
        } else {
            missingData++;
        }
    }
}

const averageIncome = totalIncome / totalHouseholds;
const missingDataPercent = (missingData / totalHouseholds) * 100;
console.log(`Average income of households in Manhattan: $${averageIncome.toFixed(2)}`);
console.log(`Percent of data missing: ${missingDataPercent.toFixed(2)}%`);
