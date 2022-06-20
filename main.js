//VARIABLES UTILIZADAS
let Meta;
let Salario;
let GastoFijo;
let GastoComida;
let GastoNoImportante;
let SalarioMejor;
let Resultado;
let ResultadoMejor;

//INGRESO DE DATOS Y VALIDACION DEL MISMO
function IngresarDatos (){
    Meta=Number(prompt("Ingrese el Monto al que quieres llegar (Monto Meta)"));
    while (Meta<=0 || isNaN(Meta)){
        alert("El Monto ingresado no es correcto, vuelve a ingresarlo nuevamente");
        Meta=Number(prompt("Ingrese el Monto al que quieres llegar"));      
    }
    Salario=Number(prompt("Ingrese tu Salario Mensual"));
    while (Salario<=0 || isNaN(Salario)){
        alert("El Salario ingresado no es correcto, vuelve a ingresarlo nuevamente");
        Salario=Number(prompt("Ingrese tu Salario Mensual"));
    }
    GastoFijo=Number(prompt("Ingrese los Gastos Totales Fijos que tienes por mes (Luz, Gas, Agua, Internet, Television etc)"));
    while (GastoFijo<=0|| isNaN(GastoFijo)) {
        alert("El gasto fijo ingresado no es correcto, ingrese uno nuevamente");
        GastoFijo=Number(prompt("Ingrese los Gastos Totales Fijos que tienes por mes"));
    }
    GastoComida=Number(prompt("Ingrese los Gastos Totales estimativos de Comida/Bebida que tienes en el mes"));
    while (GastoComida<=0 || isNaN(GastoComida) ){
        alert("El gasto de comida mensual ingresado es invalido, ingrese uno nuevamente");
        GastoComida=Number(prompt("Ingrese los Gastos Totales estimativos de Comida/Bebida que tienes en el mes"));
    }
    GastoNoImportante=Number(prompt("Ingrese los Gastos Innecesarios que tienes en el mes (Salidas con amigos, Golosinas, Helados etc)"));
    while (GastoNoImportante<=0 || isNaN(GastoNoImportante)) {
        alert("El gasto innecesario ingresado es invalido, ingrese uno nuevamente");
    }
}

//SUMAMOS GASTOS Y DETECTAMOS SALARIO RESTANTE Y SALARIO MEJOR
function SumarGastos (){
    SalarioMejor = Salario-GastoFijo-GastoComida;
    Salario= Salario-GastoFijo-GastoComida-GastoNoImportante;
    Resultado=Meta/Salario;
    ResultadoMejor= Meta/SalarioMejor;
}

//MOSTRAMOS RESULTADOS
function MostrarResultados () {
    if(Salario<=0){
        alert("Tu dinero es insuficiente como para llegar a tu Monto Meta, necesitarias economizar mejor!");
    }else {
        alert("FELECITACIONES! CADA MES TE QUEDAN $"+parseInt(Salario)+" POR MES. POR LO QUE SI LOS AHORRAS LLEGARIAS A TU MONTO META EN "+parseInt(Resultado)+" MESES!");
        alert("CONSEJO ECONOMICO: EVITATE LOS GASTOS INNECESARIOS LO MAS QUE PUEDAS, SI TE LOS AHORRAS TE QUEDARIAN $"+parseInt(SalarioMejor)+" POR MES. POR LO QUE LLEGARIAS A TU MONTO META EN "+parseInt(ResultadoMejor)+" MESES!")
    }
}

//INICIALIZAMOS FUNCIONES
IngresarDatos();
SumarGastos();
MostrarResultados();