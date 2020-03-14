function validateForm(formObj){
    let name = formObj["name"].value;
    name = name.replace(/\s+/g,' ').trim()
    let tel = document.forms[0]["tel"].value;
    let socialSelected = []
    formObj["social-selected"].forEach(element => {
        if(element.checked){
            socialSelected.push(element.value);
        }
    });
    if(!validateName(name)){
        alert('Nome inválido!');
        return;
    }else if(!validateNumber(tel)){
        alert('Telefone inválido!');
        return;
    } else if(!validateCheckboxes(socialSelected)){
        alert('Redes sociais inválidas! Marque a opção sim para informar as redes sociais.');
        return;
    }


    //  End of validation, send data
    let formData = new FormData(formObj);
    formData.set('social-selected', socialSelected);
    fetch('http://localhost:8080', {
        method: 'POST', 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(function (response){
        alert('Enviado!');
        formObj['submitBtn'].disabled = true;
    });
}


//check social
document.querySelector("#social").addEventListener('click', function(event){
    if(event.target.value == 'sim'){
        document.querySelector(".social-selected").hidden = false;
    } else if(event.target.value == 'nao'){
        // document.querySelector(".social-selected").hidden = true;
    }
})

document.querySelector('#tel').addEventListener('keyup', function(event){
    if(/(^\d{2})-(\d)/.test(event.target.value)){
        event.target.value = event.target.value.replace('-', ' - ');
    }
});

function validateName(name){
    if(name.indexOf(' ') === -1){
        return false;
    } else{
        return true;
    }
}

function validateNumber(tel){

    const regexTel = RegExp(/(^\d{2})\s-\s(\d{8}$)/);

    return regexTel.test(tel);

}

function validateCheckboxes(socialSelected){
    if(document.querySelector("#social").children['nao'].checked && socialSelected.length >0){
        return false;
    }
    return true;
}