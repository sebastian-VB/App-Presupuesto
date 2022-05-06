
export function saveData (user, nameU){

    const userPerson = {
        usuario: user,
        nombre: nameU
    }

    localStorage.setItem("person", JSON.stringify(userPerson));

}

export let personInfo;

export function getData (){

    if(localStorage.getItem("person")){
        personInfo = JSON.parse(localStorage.getItem("person"));
    }
    else{ 
        console.log('No se ha enceontrado informacion');
    }

}

export function deleteData(){

    localStorage.removeItem("person");
}
