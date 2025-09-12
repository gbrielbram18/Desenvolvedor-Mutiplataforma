const niver = document.getElementById("dias")

function niverRodrigo(){
    // event.preventDefault();   
    const hoje = new Date();
        const diasSemana = hoje.getDay(); // 0=Dom, 1=seg, ..., 4=quint 
        
        let diasFaltando = 4-diasSemana;
        

        if( diasFaltando <0){
            diasFaltando+=7;
            niver.innerHTML = diasFaltando
        }
        




}


//chamar função
niverRodrigo();



