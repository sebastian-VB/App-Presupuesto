
const canvasG = document.getElementById('graphicC');

let graphicIncomeEgress;


export const graphicIE = (valueI, valueE, total)=>{

    let percenI, percenE;

    percenI = (valueI / total)*100;
    percenE = (valueE / total)*100;

    if(graphicIncomeEgress){
        graphicIncomeEgress.destroy();
    }

    graphicIncomeEgress = new Chart(canvasG,{
        type: 'doughnut',
        data: {
            labels: ['Income', 'Egress'],
            datasets: [{
                label: 'Budget personal',
                data: [percenI, percenE],
                backgroundColor: [
                    'rgb(30, 209, 45)',
                    'rgb(218, 63, 63)',
                ],
                borderColor: [
                    'rgb(12, 114, 21)',
                    'rgb(139, 25, 25)',
                ]
            }]
        },
    });

    return graphicIncomeEgress;
} 