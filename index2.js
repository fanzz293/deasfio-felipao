// Calculadora de partidas rankeadas

let nivel = ["ferro", "bronze", "prata", "ouro", "diamante", "lendario", "imortal"]

// Função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador
function verificaSaldo (vitoria, derrota){
        return vitoria - derrota
    }
function verificaRanking(){
    let XP = verificaSaldo(100, 40) // Variável XP (experiência) que recebe um valor (fixado) de resultado da função.  
    if(XP <= 10)
        console.log("O herói tem saldo de " + XP + " e está no nível " + nivel[0])
        
    else if((XP >= 11) && (XP <= 20)){
        console.log("O herói tem saldo de " + XP + " e está no nível", nivel[1])
        }
    else if((XP >= 21) && (XP <= 50)){
            console.log("O herói tem saldo de " + XP + " está no nível " + nivel[2])
        }
    else if((XP >= 51) && (XP <= 80)){
            console.log("O herói tem saldo de " + XP + " está no nível " + nivel[3])
        }
        
    else if((XP >= 81) && (XP <= 90)){
                console.log("O herói tem saldo de " + XP + " e está no nível", nivel[4])
        }
    else if((XP >= 91) && (XP <= 100)){
                console.log("O herói tem saldo de " + XP + " e está no nível", nivel[5])
        }
    else if(XP >=101){ 
            console.log("O herói tem saldo " + XP + " e está no nível", nivel[6])
        }
    }
    
verificaRanking()

