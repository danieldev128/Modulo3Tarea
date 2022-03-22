


function calcular(){
    

    let totalCuenta ;
    let porcentajePro;
    let totalApagar;
    let contenedorTotalCuenta;
    let contenedorTotalAPagar;
    let contenedorPropina;
    let propina
    totalCuenta = Number((document.getElementById('txtTotalCuenta').value));
    porcentajeProp = Number((document.getElementById('txtPorcentajeProp').value));


    if(porcentajeProp != "" && totalCuenta != ""){
    propina = totalCuenta * (porcentajeProp/100);

    totalApagar = totalCuenta + propina;

    contenedorTotalCuenta = document.getElementById('totalCuenta');
    contenedorPropina = document.getElementById('resultadoProp')
    contenedorTotalAPagar = document.getElementById('resultadoPagar');
    
    contenedorTotalCuenta.innerHTML = ``;
    contenedorPropina.innerHTML =  ``;
    contenedorTotalAPagar.textContent = ``;

    contenedorTotalCuenta.innerHTML += `$${totalCuenta}`
    contenedorPropina.innerHTML += `$${propina}`;
    contenedorTotalAPagar.textContent += `$${totalApagar}`;
    
    }else{

        alert("No debe de haber campos vácios");
    }



}

