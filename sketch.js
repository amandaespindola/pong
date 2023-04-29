let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

let xRaqueteOponente = 585;   
let yRaqueteOponente = 150;      
let velocidadeYOponente;

let meusPontos = 0;
let pontosOponente = 0;



let colidiu = false;   //bibiloteca

let velocidadeXBolinha = 9;  
let velocidadeYBolinha = 4;  


function setup() {
  createCanvas(600, 400);
}


function draw() {

  background(0);
  mostraBolinha(); 
  movimentaBolinha();       
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  colisaoMinhaRaquete();
  colisaoRaqueteOponente();
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();

}

  
function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro)

}

function movimentaBolinha(){
   xBolinha +=velocidadeXBolinha; //+= o xBolinha vai ser o valor dela mais a velocidadeXBolinha
   yBolinha += velocidadeYBolinha;//o YBolinha vai ser o valor dela mais a velocidadeYBolinha
}

function verificaColisaoBorda(){
   if(xBolinha + raio >width || xBolinha - raio < 0){ //pra nao bater na borda
    velocidadeXBolinha *= -1;  //inverte  AQUI!!!!!!!!!
     
    }
  
   if(yBolinha + raio >height||yBolinha - raio<0){  //nao bater no y=0 ou y=-400
     velocidadeYBolinha *=-1;         
  
   }
}

function mostraRaquete(x,y){
  rect(x,y, comprimentoRaquete, alturaRaquete);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(87)){
    yRaquete -= 10;
  }
  if(keyIsDown(83)){
    yRaquete += 10;
  }
}

function colisaoRaqueteOponente(){
  colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1
    xBolinha = 580 
  }
}

function colisaoMinhaRaquete(){
    colidiu = collideRectCircle(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
    if (colidiu){
    velocidadeXBolinha *= -1
    xBolinha = 20 
  }
}

function movimentaRaqueteOponente(){
  if(keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar(){
  stroke(255);     
  textAlign(CENTER);  
  textSize(16);    
  fill(color(255,140,0));  
  rect(230,10,40,20);  
  fill(255);  
  text(meusPontos, 250, 26); 
  fill(color(255,140,0));
  rect(330,10,40,20)
  fill(255);
  text(pontosOponente,350 ,26);
}

function marcaPonto(){
  if(xBolinha>590){
    meusPontos += 1;
    xBolinha = 580;
  }
  if(xBolinha<10){
    pontosOponente += 1;
    xBolinha = 20;
  }
  
}
