var n = 16
function genIT(n){
    // Codigo aqui
    
    for(var i = 1 ; i <= n ; i++) {
        if(i%3 == 0 && i%5 == 0){
            console.log("GenIT")
        } else if ( i%3 == 0 ){
            console.log("Gen");

        } else if(  i%5 == 0 ){
            console.log("IT");

        }else{
            console.log(i)

        }
    }

}
genIT(n)
