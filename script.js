```javascript
const resultado = document.getElementById("resultado");

function inserir(valor){
    resultado.value += valor;
}

function limpar(){
    resultado.value = "";
}

function apagar(){
    resultado.value = resultado.value.slice(0,-1);
}

function calcular(){

    if(resultado.value==""){
        return;
    }

    try{
        resultado.value = eval(resultado.value);
    }

    catch{
        resultado.value = "Erro";
        setTimeout(()=>{
            resultado.value="";
        },1500);
    }

}

document.addEventListener("keydown",(e)=>{

    const tecla = e.key;

    if(!isNaN(tecla) || "+-*/.%".includes(tecla)){
        inserir(tecla);
    }

    if(tecla==="Enter"){
        calcular();
    }

    if(tecla==="Backspace"){
        apagar();
    }

    if(tecla==="Escape"){
        limpar();
    }

});
```
