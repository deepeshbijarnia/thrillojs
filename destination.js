const bangloreclass = "bangloretab";
const puneclass = "punetab";
const delhiclass = "delhitab";
const mumbaiclass = "mumbaitab";
const jaipurclass = "jaipurtab";
const chandigharclass = "chandighartab";
const chennaiclass = "chennaitab";


function whenpageLoads(){
    console.log("Page loaded");
    
}

function bangloretabclicked(){
    console.log("Banglore CLicked");
    document.getElementById(bangloreclass).style.display = 'flex';

    document.getElementById(puneclass).style.display = 'none';

    document.getElementById(delhiclass).style.display = 'none';
    document.getElementById(jaipurclass).style.display = 'none';
    document.getElementById(chandigharclass).style.display = 'none';
    document.getElementById(chennaiclass).style.display = 'none';
    document.getElementById(mumbaiclass).style.display = 'none';
}

function punetabclicked(){
    console.log("Pune CLicked");
    document.getElementById(bangloreclass).style.display = 'none';

    document.getElementById(puneclass).style.display = 'flex';
    // document.getElementById(puneclass).style.display ='none';
    document.getElementById(delhiclass).style.display = 'none';
    document.getElementById(jaipurclass).style.display = 'none';
    document.getElementById(chandigharclass).style.display = 'none';
    document.getElementById(chennaiclass).style.display = 'none';
    document.getElementById(mumbaiclass).style.display = 'none';
    
}
function delhitabclicked(){
    console.log("delhi CLicked");
    document.getElementById(bangloreclass).style.display = 'none';

    document.getElementById(puneclass).style.display = 'none';

    document.getElementById(delhiclass).style.display = 'flex';
    document.getElementById(jaipurclass).style.display = 'none';
    document.getElementById(chandigharclass).style.display = 'none';
    document.getElementById(chennaiclass).style.display = 'none';
    document.getElementById(mumbaiclass).style.display = 'none';
    
}
function jaipurtabclicked(){
    console.log("jaipur CLicked");
    document.getElementById(bangloreclass).style.display = 'none';

    document.getElementById(puneclass).style.display = 'none';

    document.getElementById(delhiclass).style.display = 'none';
    document.getElementById(jaipurclass).style.display = 'flex';
    document.getElementById(chandigharclass).style.display = 'none';
    document.getElementById(chennaiclass).style.display = 'none';
    document.getElementById(mumbaiclass).style.display = 'none';
    
}
function chennaitabclicked(){
    console.log("chennai CLicked");
    document.getElementById(bangloreclass).style.display = 'none';

    document.getElementById(puneclass).style.display = 'none';

    document.getElementById(delhiclass).style.display = 'none';
    document.getElementById(jaipurclass).style.display = 'none';
    document.getElementById(chandigharclass).style.display = 'none';
    document.getElementById(chennaiclass).style.display = 'flex';
    document.getElementById(mumbaiclass).style.display = 'none';
    
}
function chandighartabclicked(){
    console.log("chandighar CLicked");
    document.getElementById(bangloreclass).style.display = 'none';

    document.getElementById(puneclass).style.display = 'none';

    document.getElementById(delhiclass).style.display = 'none';
    document.getElementById(jaipurclass).style.display = 'none';
    document.getElementById(chandigharclass).style.display = 'flex';
    document.getElementById(chennaiclass).style.display = 'none';
    document.getElementById(mumbaiclass).style.display = 'none';
    
}
function mumbaitabclicked(){
    console.log("mumbai CLicked");
    document.getElementById(bangloreclass).style.display = 'none';

    document.getElementById(puneclass).style.display = 'none';

    document.getElementById(delhiclass).style.display = 'none';
    document.getElementById(jaipurclass).style.display = 'none';
    document.getElementById(chandigharclass).style.display = 'none';
    document.getElementById(chennaiclass).style.display = 'none';
    document.getElementById(mumbaiclass).style.display = 'flex';
    
}