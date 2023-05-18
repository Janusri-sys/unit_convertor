const length= document.getElementById("container1");
const height = document.getElementById("container2");
const mass = document.getElementById("container3");
const speed = document.getElementById("container4");
const time = document.getElementById("container5");
const temp = document.getElementById("container6");

function lengthfunc() {
    length.style.display = "block";
    height.style.display = "none";
    mass.style.display="none";
    speed.style.display="none";
    time.style.display="none";
    temp.style.display="none";
}
function heightfunc() {
    height.style.display = "block";
    length.style.display = "none";
    mass.style.display="none";
    speed.style.display="none";
    time.style.display="none";
    temp.style.display="none";
}
function massfunc() {
    mass.style.display="block";
    height.style.display = "none";
    length.style.display = "none";
    speed.style.display="none";
    time.style.display="none";
    temp.style.display="none";
}
function speedfunc() {
    speed.style.display="block";
    height.style.display = "none";
    length.style.display = "none";
    mass.style.display="none";
    time.style.display="none";
    temp.style.display="none";
}
function timefunc() {
    time.style.display="block";
    speed.style.display="none";
    height.style.display = "none";
    length.style.display = "none";
    mass.style.display="none";
    temp.style.display="none";
    
}
function tempfunc() {
    temp.style.display="block";
    time.style.display="none";
    speed.style.display="none";
    height.style.display = "none";
    length.style.display = "none";
    mass.style.display="none";
    
}
 
var m=document.getElementById("m")
var cm=document.getElementById("cm")
m.addEventListener("input",function(){
    let M=this.value;
    let CM=M*100;
    if(!Number.isInteger(CM)){
        CM=CM.toFixed(2)
    }
    cm.value=CM;
});
cm.addEventListener("input",function(){
    let CM=this.value;
    let M=CM/100;

    if(!Number.isInteger(M)){
        M=M.toFixed(2)
    }
    cm.value=M;
});

var feet=document.getElementById("feet")
var inch=document.getElementById("inch")
feet.addEventListener("input",function(){
    let f=this.value;
    let i=f*12;
    if(!Number.isInteger(i)){
        i=i.toFixed(2)
    }
    inch.value=i;
});
inch.addEventListener("input",function(){
    let i=this.value;
    let f=i/12;

    if(!Number.isInteger(f)){
        f=f.toFixed(2)
    }
    feet.value=f;
});

var kg=document.getElementById("kg")
var g=document.getElementById("g")
kg.addEventListener("input",function(){
    let KG=this.value;
    let G=KG*1000;
    if(!Number.isInteger(G)){
        G=G.toFixed(2)
    }
    g.value=G;
});
g.addEventListener("input",function(){
    let G=this.value;
    let KG=G/1000;

    if(!Number.isInteger(KG)){
        KG=KG.toFixed(2)
    }
    kg.value=KG;
});

var km_s=document.getElementById("km/s")
var m_s=document.getElementById("m/s")
km_s.addEventListener("input",function(){
    let KMS=this.value;
    let MS=KMS*1000;
    if(!Number.isInteger(MS)){
        MS=MS.toFixed(2)
    }
    m_s.value=MS;
});
m_s.addEventListener("input",function(){
    let MS=this.value;
    let KMS=MS/1000;

    if(!Number.isInteger(KMS)){
        KMS=KMS.toFixed(2)
    }
    km_s.value=KMS;
});
var hrs=document.getElementById("hrs")
var mins=document.getElementById("mins")
hrs.addEventListener("input",function(){
    let HR=this.value;
    let MIN=HR*60;
    if(!Number.isInteger(MIN)){
        MIN=MIN.toFixed(2)
    }
    mins.value=MIN;
});
mins.addEventListener("input",function(){
    let MIN=this.value;
    let HR=MIN/60;

    if(!Number.isInteger(HR)){
        HR=HR.toFixed(2)
    }
    hrs.value=HR;
});
var cel=document.getElementById("C")
var faren=document.getElementById("F")
cel.addEventListener("input",function(){
    let C=this.value;
    let F=(C*9/5)+32;
    if(!Number.isInteger(F)){
        F=F.toFixed(2)
    }
    faren.value=F;
});
faren.addEventListener("input",function(){
    let F=this.value;
    let C=(F-32)*5/9;
    if(!Number.isInteger(C)){
        C=C.toFixed(2)
    }
    cel.value=C;
});
