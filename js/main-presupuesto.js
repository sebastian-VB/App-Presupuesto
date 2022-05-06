
import {getData, personInfo} from './informacionPersona.js';
import {Income, Egress} from './class/elements.js';
import {graphicIE} from './graphic.js';

window.deleteElementIncome = deleteElementIncome;
window.deleteElementEgress = deleteElementEgress;

const incomesA = [
    // new Income('Salario', 1600),
    // new Income('Venta de coche', 3000),
];

const egressA = [
    // new Egress('Renta de departamento', 2000),
    // new Egress('Ropa', 100)
];

showApp();

function showApp () {
    showInfoUser();
    showHeader();
    showIncome();
    showEgress();
}

function lettersNameAvatar (wordName) {

    let lettersName = '';
    let indexSecundLetter = 0;

    lettersName = wordName.substring(0,1);

    for(let i =1; i < wordName.length; i++){
        let caracterSpace =  wordName.substring(i, (i+1));

        if(caracterSpace == ' '){
            indexSecundLetter = i;
            break;
        }
    }

    lettersName += wordName.substring(indexSecundLetter+1, indexSecundLetter+2);

    return lettersName.toUpperCase();

}

function showInfoUser () {
    
    getData();

    let wordName = personInfo.nombre;

    document.getElementById('header-name').innerHTML = wordName;
    document.getElementById('header-user').innerHTML = personInfo.usuario;

    document.getElementById('avatar-letters').innerHTML = lettersNameAvatar(wordName);

}

function totalIncome (){

    let ti = 0;

    for(let income of incomesA){
        ti += income.value;
    }

    return ti;
}

function totalEgress () {

    let te = 0;

    for(let egress of egressA){
        te += egress.value;
    }

    return te;
}

function formatMoney (valueM){

    return valueM.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD',
        minimunFractionDigits: 2,
    });
}

function paintCircleAvatar(total){

    if(total < 0){
        document.getElementById('avatarCircle').classList.add('header__user-letter-changeColor-red');
        document.getElementById('avatarCircle').classList.remove('header__user-letter-changeColor-green');
    } else if(total > 0){
        document.getElementById('avatarCircle').classList.add('header__user-letter-changeColor-green');
        document.getElementById('avatarCircle').classList.remove('header__user-letter-changeColor-red');
    }

}

function showHeader (){

    let totalBudget = totalIncome() - totalEgress();
    let totalBMessage = '';

    let totalMoney = totalIncome() + totalEgress();

    paintCircleAvatar(totalBudget);

    document.getElementById('totalI').innerHTML = formatMoney(totalIncome());
    document.getElementById('totalE').innerHTML = formatMoney(totalEgress());
    
    graphicIE(totalIncome(), totalEgress() , totalMoney);

    if(totalBudget < 0){
        totalBMessage = `${formatMoney(totalBudget)}`;
    }else if(totalBudget > 0){
        totalBMessage = `+ ${formatMoney(totalBudget)}`;
    }
    
    document.getElementById('totalBudget').innerHTML = totalBMessage;

}

function showIncome () {

    let elementIncome = '';

    for(let element of incomesA){
        elementIncome += createElementIncome(element);
    }

    document.getElementById('list-income').innerHTML = elementIncome;
}

function createElementIncome (income){

    let incomeHTML = `
    <div class="main__elementIE main__element-income">
        <p class="main__descriptionIE main__description-income">${income.description}</p>
        <div class="main__rightIE">
            <p class="main__moneyIE main__money-income">+ ${formatMoney(income.value)}</p>
            <div class="main__deleteIE main__delete-income">
                <button class="main__delete-btnIE main__delete-btn-income">
                    <ion-icon name="close-circle-outline" onclick="deleteElementIncome(${income.idI})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;

    return incomeHTML;
}

function deleteElementIncome(idElement){

    let indexElementI = incomesA.findIndex(income => income.id == idElement);
    incomesA.splice(indexElementI, 1);

    showHeader();
    showIncome();
}

function showEgress (){

    let elementEgress = '';

    for(let element of egressA){
        elementEgress += createElementEgress(element);
    }

    document.getElementById('list-egress').innerHTML = elementEgress;
}

function createElementEgress (egress) {

    let egressHTMl = `
    <div class="main__elementIE main__element-egress">
        <p class="main__descriptionIE main__description-egress">${egress.description}</p>
        <div class="main__rightIE">
            <p class="main__moneyIE main__money-egress">- ${formatMoney(egress.value)}</p>
            <div class="main__deleteIE main__delete-egress">
                <button class="main__delete-btnIE main__delete-btn-egress">
                    <ion-icon name="close-circle-outline" onclick="deleteElementEgress(${egress.idE})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;

    return egressHTMl;
}

function deleteElementEgress(idElement){

    let indexElementE = egressA.findIndex(egress => egress.id == idElement);
    egressA.splice(indexElementE, 1);

    showHeader();
    showEgress();
}

document.getElementById('btn-add').addEventListener('click', ()=>{

    console.log('btn-agregar');
    let typeOptions = document.getElementById('typeOpt');
    let description = document.getElementById('description');
    let valueD = document.getElementById('value');

    if(description.value != ''){

        if(typeOptions.value == "income"){

            incomesA.push(new Income(description.value, +valueD.value));
            document.getElementById('containerGraphic').classList.add('main__info-graphic-activo');
            showHeader();
            showIncome();

        } else if(typeOptions.value == "egress"){

            egressA.push(new Egress(description.value, +valueD.value));
            document.getElementById('containerGraphic').classList.add('main__info-graphic-activo');
            showHeader();
            showEgress();
        }
    } else{
        alert('Llene todos los campos');
    }

});
