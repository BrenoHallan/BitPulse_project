function tocaSom(idAudioElement){
  const element = document.querySelector(idAudioElement).play();

  if (element === null){
    console.log("Este elemento não exixte")
  } else {
    element.play
  }
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;

const soundList = document.querySelectorAll('.tecla');

for (let i = 0; i < soundList.length; i = i + 1){

  const tecla = soundList[i];
  const instrumento = tecla.classList[1];
  const audio = `#som_${instrumento}`;

  tecla.onclick = function(){
    tocaSom(audio);
  }

  //console.log(i);
  //console.log(tecla);
  //console.log(audio);
}