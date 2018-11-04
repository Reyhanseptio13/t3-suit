function cekKomputer(){
  var komputer = ['gunting', 'batu', 'kertas']
  var index = Math.floor(Math.random() * komputer.length)
  var hasil = komputer[index]
  document.getElementById('enemy').setAttribute("src","img/"+hasil+".png")
  return hasil
}
function logika(com, you) {
    if (com == you){
        return 'draw'
    } else if (com == 'gunting' && you == 'batu'){
        return 'Win'
    } else if (com == 'gunting' && you == 'kertas'){
        return 'Lose'
    } else if (com == 'kertas' && you == 'gunting'){
        return 'Win'
    } else if (com == 'kertas' && you == 'batu'){
        return 'Lose'
    } else if (com == 'batu' && you == 'kertas'){
        return 'Win'
    } else if (com == 'batu' && you == 'gunting'){
        return 'Lose'
    }
}

function gunting(){
 var com = cekKomputer()
 var you = "gunting"
 document.getElementById('status').textContent = logika(com, you)
}

function kertas(){
 var com = cekKomputer()
 var you = "kertas"
 document.getElementById('status').textContent = logika(com, you)
}

function batu(){
 var com = cekKomputer()
 var you = "batu"
document.getElementById('status').textContent = logika(com, you)
}
