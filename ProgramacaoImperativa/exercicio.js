function podeSubir1 (altura, seEstaAcompanhado) {
    if (altura >= 1.40 && altura < 2 ) { 
        return true;
    }else if ((altura < 1.40 && altura > 1.20) && (seEstaAcompanhado == true)) {
        return true;
    }else {
        return false;
    }
}
console.log(podeSubir1(1.10, true))

function podeSubir2 (altura, seEstaAcompanhado) {
    if (altura >= 1.40 && altura < 2 ) { 
        console.log("Acesso autorizado");
    }else if ((altura < 1.40 && altura > 1.20) && (seEstaAcompanhado == true)) {
        console.log("Acesso autorizado somente com acompanhante!");
    }else {
        console.log("Acesso negado");
    }
}

podeSubir2(1.30, true)