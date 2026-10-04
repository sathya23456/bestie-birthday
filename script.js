let current=1;
const total=4;
const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");
const hearts=document.getElementById("hearts");

function show(n){
  for(let i=1;i<=total;i++){
    document.getElementById("s"+i).classList.toggle("active",i===n);
  }
  current=n;
  if(n===4) burst();
}
function next(){
  if(current<total){current++;show(current);}
}
musicBtn.addEventListener("click",async()=>{
  if(music.paused){
    try{await music.play();musicBtn.textContent="❚❚";}catch(e){}
  }else{
    music.pause();musicBtn.textContent="♫";
  }
});
document.addEventListener("click",()=>{
  if(music.paused) music.play().then(()=>musicBtn.textContent="❚❚").catch(()=>{});
},{once:true});

function makeHeart(){
  const h=document.createElement("span");
  h.className="heart "+(Math.random()>.38?"pink":"black");
  h.textContent=Math.random()>.18?"♥":"♡";
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(10+Math.random()*25)+"px";
  h.style.animationDuration=(5+Math.random()*6)+"s";
  h.style.animationDelay=(Math.random()*2)+"s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),13000);
}
setInterval(makeHeart,420);
for(let i=0;i<14;i++) setTimeout(makeHeart,i*140);

function burst(){
  for(let i=0;i<42;i++) setTimeout(makeHeart,i*35);
}
show(1);
