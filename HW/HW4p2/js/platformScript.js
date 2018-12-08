var _0x5c72=["reload","location","display","style","loseScreen","getElementById",
"none","winScreen","introScreen","bg","block","levelBar","innerHTML","countdown",
"lifebar","pc","width","60px","height","80px","npc_prince","40px","npc_spikey","30px",
"20px","400px","btnContinue","level: ","left","190px","top","50px","-500px","0px",
"length","removeChild","play","sndMusicCrawl","4000px","320px","1000px","180px",
"sndMusicCrawl2","pause","310px","1455px","280px","sndMusicBoss","4200px","1534px",
"210px","DIV","createElement","className","platform","px","push","appendChild","pop",
"/","split","src","runningg2.gif","media/runningg2.gif","media/standingg2.gif",
"flip-h","","sndJump","sndGameWin","sndWin","lastChild","sndDie","sndGameOver",
"keydown","keyCode","addEventListener","keyup","IMG","heart.png"];
var pc;var npc_prince;
var bg;
var leftArrowDown=false;
var rightArrowDown=false;
var upArrowDown=false;
var gameTimer;
var count=0;
var countdown;
var GRAVITY=1;
var fallSpeed=0;
var platforms= new Array();
var level=0;
var time;
var lifebar;
var numLives=0;

function tryAgain(){
    window[_0x5c72[1]][_0x5c72[0]]()
    
}
function startGame(){
    document[_0x5c72[5]](_0x5c72[4])[_0x5c72[3]][_0x5c72[2]]=_0x5c72[6];
    document[_0x5c72[5]](_0x5c72[7])[_0x5c72[3]][_0x5c72[2]]=_0x5c72[6];
    init();
    
}
function init(){
    document[_0x5c72[5]](_0x5c72[8])[_0x5c72[3]][_0x5c72[2]]=_0x5c72[6];
    document[_0x5c72[5]](_0x5c72[9])[_0x5c72[3]][_0x5c72[2]]=_0x5c72[10];
    levelBar=document[_0x5c72[5]](_0x5c72[11]);
    levelBar[_0x5c72[12]]=level;
    countdown=document[_0x5c72[5]](_0x5c72[13]);
    lifebar=document[_0x5c72[5]](_0x5c72[14]);
    for(var _0x434dx14=0;_0x434dx14<3;_0x434dx14++){
        addLife()
        
    };
    pc=document[_0x5c72[5]](_0x5c72[15]);
    pc[_0x5c72[3]][_0x5c72[16]]=_0x5c72[17];
    pc[_0x5c72[3]][_0x5c72[18]]=_0x5c72[19];
    npc_prince=document[_0x5c72[5]](_0x5c72[20]);
    npc_prince[_0x5c72[3]][_0x5c72[16]]=_0x5c72[21];
    npc_prince[_0x5c72[3]][_0x5c72[18]]=_0x5c72[17];
    npc_spikey=document[_0x5c72[5]](_0x5c72[22]);
    npc_spikey[_0x5c72[3]][_0x5c72[16]]=_0x5c72[23];
    npc_spikey[_0x5c72[3]][_0x5c72[18]]=_0x5c72[24];
    bg=document[_0x5c72[5]](_0x5c72[9]);
    bg[_0x5c72[3]][_0x5c72[18]]=_0x5c72[25];
    nextLevel();
    
}
function nextLevel(){
    document[_0x5c72[5]](_0x5c72[26])[_0x5c72[3]][_0x5c72[2]]=_0x5c72[6];
    level++;
    levelBar[_0x5c72[12]]=_0x5c72[27]+level;
    fallSpeed=0;
    leftArrowDown=false;
    rightArrowDown=false;
    upArrowDown=false;
    pc[_0x5c72[3]][_0x5c72[28]]=_0x5c72[29];
    pc[_0x5c72[3]][_0x5c72[30]]=_0x5c72[31];
    bg[_0x5c72[3]][_0x5c72[28]]=_0x5c72[32];
    bg[_0x5c72[3]][_0x5c72[30]]=_0x5c72[33];
    for(var _0x434dx14=0;_0x434dx14<platforms[_0x5c72[34]];_0x434dx14++){
        gameWindow[_0x5c72[35]](platforms[_0x434dx14])
        
    };
    platforms= new Array();
    if(level==1){
        time=22;
        document[_0x5c72[5]](_0x5c72[37])[_0x5c72[36]]();
        npc_prince[_0x5c72[3]][_0x5c72[28]]=_0x5c72[38];
        npc_prince[_0x5c72[3]][_0x5c72[30]]=_0x5c72[39];
        npc_spikey[_0x5c72[3]][_0x5c72[28]]=_0x5c72[40];
        npc_spikey[_0x5c72[3]][_0x5c72[30]]=_0x5c72[41];
        addPlatform(0,380,500,20);
        addPlatform(150,300,100,20);
        addPlatform(400,300,100,100);
        addPlatform(900,200,200,20);
        addPlatform(640,300,200,20);
        addPlatform(1200,100,100,20);
        addPlatform(1600,200,100,20);
        addPlatform(1500,300,100,20);
        addPlatform(1800,300,100,20);
        addPlatform(2000,350,100,20);
        addPlatform(2250,350,150,20);
        addPlatform(2500,375,100,20);
        addPlatform(2600,260,100,20);
        addPlatform(2800,260,100,20);
        addPlatform(3000,220,175,20);
        addPlatform(3100,200,100,20);
        addPlatform(3300,250,100,20);
        addPlatform(3400,200,100,20);
        addPlatform(3600,200,100,20);
        addPlatform(3800,100,50,20);
        addPlatform(3900,380,200,20);
        
    }else {if(level==2){
        time=25;
        document[_0x5c72[5]](_0x5c72[42])[_0x5c72[36]]();
        document[_0x5c72[5]](_0x5c72[37])[_0x5c72[43]]();
        npc_prince[_0x5c72[3]][_0x5c72[28]]=_0x5c72[38];
        npc_prince[_0x5c72[3]][_0x5c72[30]]=_0x5c72[44];
        npc_spikey[_0x5c72[3]][_0x5c72[28]]=_0x5c72[45];
        npc_spikey[_0x5c72[3]][_0x5c72[30]]=_0x5c72[46];
        addPlatform(0,380,250,20);
        addPlatform(320,300,145,20);
        addPlatform(500,380,150,20);
        addPlatform(600,480,150,20);
        addPlatform(800,380,100,20);
        addPlatform(850,320,100,20);
        addPlatform(1000,350,100,20);
        addPlatform(1200,320,100,20);
        addPlatform(1400,300,100,20);
        addPlatform(1500,280,100,20);
        addPlatform(1700,220,50,20);
        addPlatform(1800,100,50,600);
        addPlatform(1900,220,50,20);
        addPlatform(2000,190,50,20);
        addPlatform(2200,175,20,20);
        addPlatform(2200,100,50,20);
        addPlatform(2300,200,100,20);
        addPlatform(2500,125,75,20);
        addPlatform(2600,75,200,20);
        addPlatform(2900,275,300,20);
        addPlatform(3200,300,300,20);
        addPlatform(3300,255,300,20);
        addPlatform(3500,225,75,20);
        addPlatform(3700,200,100,20);
        addPlatform(3800,370,300,20);
        
    }else {if(level==3){
        time=30;
        document[_0x5c72[5]](_0x5c72[42])[_0x5c72[43]]();
        document[_0x5c72[5]](_0x5c72[47])[_0x5c72[36]]();
        npc_prince[_0x5c72[3]][_0x5c72[28]]=_0x5c72[48];
        npc_prince[_0x5c72[3]][_0x5c72[30]]=_0x5c72[39];
        npc_spikey[_0x5c72[3]][_0x5c72[28]]=_0x5c72[49];
        npc_spikey[_0x5c72[3]][_0x5c72[30]]=_0x5c72[50];
        addPlatform(0,380,400,20);
        addPlatform(300,350,330,200);
        addPlatform(550,280,120,200);
        addPlatform(750,180,50,250);
        addPlatform(750,0,50,70);
        addPlatform(850,280,120,200);
        addPlatform(1000,0,50,100);
        addPlatform(1100,300,50,100);
        addPlatform(1150,100,50,20);
        addPlatform(1250,280,100,20);
        addPlatform(1400,180,100,20);
        addPlatform(1450,220,150,20);
        addPlatform(1700,350,50,20);
        addPlatform(1800,250,50,20);
        addPlatform(1950,375,50,20);
        addPlatform(2000,350,50,20);
        addPlatform(2200,250,50,20);
        addPlatform(2400,350,50,20);
        addPlatform(2600,250,50,20);
        addPlatform(2350,250,100,20);
        addPlatform(2700,380,300,20);
        addPlatform(2900,280,200,20);
        addPlatform(2800,220,200,20);
        addPlatform(2700,200,100,50);
        addPlatform(2600,200,100,100);
        addPlatform(2700,200,100,400);
        addPlatform(3000,360,300,3000);
        addPlatform(3000,0,200,100);
        addPlatform(3400,0,50,250);
        addPlatform(3400,380,50,20);
        addPlatform(3600,300,50,250);
        addPlatform(3750,200,200,250);
        addPlatform(3950,380,500,100);
        
    }
        
    }
        
    };
    gameTimer=setInterval(gameloop,25);
    
}
function addPlatform(x, y, w, h){
    var p=document.createElement(_0x5c72[51]);
    p.className='platform';
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.width = w + 'px';
    p.style.height = h + 'px';
    
    platforms.push(p);
    gameWindow.appendChild(p);
    
}
// NEW FUNCTION
function gameloop(){
    count++;
    if(count@==0){
        updateTime()};
        var _0x434dx1d=pc.src[_0x5c72[60]](_0x5c72[59])[_0x5c72[58]]();
        if(leftArrowDown||rightArrowDown){
            if(_0x434dx1d!=_0x5c72[62]){
                pc.src=_0x5c72[63]
                
            }
            
        }else {
            pc.src=_0x5c72[64]};
            if(leftArrowDown){
                pc[_0x5c72[53]]=_0x5c72[65]
                
            };
            if(rightArrowDown){
                pc[_0x5c72[53]]=_0x5c72[66]
                
            };
            if(leftArrowDown){
                bg[_0x5c72[3]][_0x5c72[28]]=parseInt(bg[_0x5c72[3]][_0x5c72[28]])+1+_0x5c72[55];
                pc[_0x5c72[3]][_0x5c72[28]]=parseInt(pc[_0x5c72[3]][_0x5c72[28]])-5+_0x5c72[55];
                var _0x434dx1e=false;
                for(var _0x434dx14=0;_0x434dx14<platforms[_0x5c72[34]];_0x434dx14++){
                    if(hittest(pc,platforms[_0x434dx14])){
                        _0x434dx1e=true
                        
                    }
                    
                };
                pc[_0x5c72[3]][_0x5c72[28]]=parseInt(pc[_0x5c72[3]][_0x5c72[28]])+5+_0x5c72[55];
                if(!_0x434dx1e){
                    for(var _0x434dx14=0;_0x434dx14<platforms[_0x5c72[34]];_0x434dx14++){
                        platforms[_0x434dx14][_0x5c72[3]][_0x5c72[28]]=parseInt(platforms[_0x434dx14][_0x5c72[3]][_0x5c72[28]])+5+_0x5c72[55]};
                        npc_prince[_0x5c72[3]][_0x5c72[28]]=parseInt(npc_prince[_0x5c72[3]][_0x5c72[28]])+5+_0x5c72[55];
                        npc_spikey[_0x5c72[3]][_0x5c72[28]]=parseInt(npc_spikey[_0x5c72[3]][_0x5c72[28]])+5+_0x5c72[55];
                    
                };
                
            };
            if(rightArrowDown){
                bg[_0x5c72[3]][_0x5c72[28]]=parseInt(bg[_0x5c72[3]][_0x5c72[28]])-1+_0x5c72[55];
                pc[_0x5c72[3]][_0x5c72[28]]=parseInt(pc[_0x5c72[3]][_0x5c72[28]])+5+_0x5c72[55];
                var _0x434dx1e=false;
                for(var _0x434dx14=0;_0x434dx14<platforms[_0x5c72[34]];_0x434dx14++){
                    if(hittest(pc,platforms[_0x434dx14])){
                        _0x434dx1e=true
                        
                    }
                    
                };
                pc[_0x5c72[3]][_0x5c72[28]]=parseInt(pc[_0x5c72[3]][_0x5c72[28]])-5+_0x5c72[55];
                if(!_0x434dx1e){
                    for(var _0x434dx14=0;_0x434dx14<platforms[_0x5c72[34]];_0x434dx14++){
                        platforms[_0x434dx14][_0x5c72[3]][_0x5c72[28]]=parseInt(platforms[_0x434dx14][_0x5c72[3]][_0x5c72[28]])-5+_0x5c72[55]};
                        npc_prince[_0x5c72[3]][_0x5c72[28]]=parseInt(npc_prince[_0x5c72[3]][_0x5c72[28]])-5+_0x5c72[55];
                        npc_spikey[_0x5c72[3]][_0x5c72[28]]=parseInt(npc_spikey[_0x5c72[3]][_0x5c72[28]])-5+_0x5c72[55];
                    
                };
                
            };
            fallSpeed+=GRAVITY;
            pc[_0x5c72[3]][_0x5c72[30]]=parseInt(pc[_0x5c72[3]][_0x5c72[30]])+fallSpeed+_0x5c72[55];
            if(upArrowDown){
                document[_0x5c72[5]](_0x5c72[67])[_0x5c72[36]]()};
                for(var _0x434dx14=0;_0x434dx14<platforms[_0x5c72[34]];_0x434dx14++){
                    if(hittest(pc,platforms[_0x434dx14])){
                        if(fallSpeed<0){
                            pc[_0x5c72[3]][_0x5c72[30]]=parseInt(platforms[_0x434dx14][_0x5c72[3]][_0x5c72[30]])+parseInt(platforms[_0x434dx14][_0x5c72[3]][_0x5c72[18]])+_0x5c72[55];
                            fallspeed*= -1;
                            
                        }else {
                            pc[_0x5c72[3]][_0x5c72[30]]=parseInt(platforms[_0x434dx14][_0x5c72[3]][_0x5c72[30]])-parseInt(pc[_0x5c72[3]][_0x5c72[18]])+_0x5c72[55];
                            if(upArrowDown){
                                fallSpeed= -16
                                
                            }else {
                                fallSpeed=0
                                
                            };
                            
                        }
                        
                    };
                    if(hittest(pc,npc_prince)){
                        clearInterval(gameTimer);
                        if(level==3){
                            document[_0x5c72[5]](_0x5c72[47])[_0x5c72[43]]();
                            document[_0x5c72[5]](_0x5c72[68])[_0x5c72[36]]();
                            document[_0x5c72[5]](_0x5c72[7])[_0x5c72[3]][_0x5c72[2]]=_0x5c72[10];
                            
                        }else {
                            document[_0x5c72[5]](_0x5c72[26])[_0x5c72[3]][_0x5c72[2]]=_0x5c72[10];
                            document[_0x5c72[5]](_0x5c72[69])[_0x5c72[36]]();
                            
                        };
                        
                    }else {
                        if(parseInt(pc[_0x5c72[3]][_0x5c72[30]])>400||(hittest(pc,npc_spikey))){
                            clearInterval(gameTimer);
                            removeLife();
                            level--;
                            nextLevel();
                            
                        }
                        
                    };
                    
                };
    
}
function removeLife(){
    if(numLives>0){
        numLives--;
        lifebar[_0x5c72[35]](lifebar[_0x5c72[70]]);
        document[_0x5c72[5]](_0x5c72[71])[_0x5c72[36]]();
        
    }else {
        document[_0x5c72[5]](_0x5c72[4])[_0x5c72[3]][_0x5c72[2]]=_0x5c72[10];
        clearInterval(gameTimer);
        document[_0x5c72[5]](_0x5c72[72])[_0x5c72[36]]();
    }
}
document.addEventListener('keydown',function(event){
    if(event[_0x5c72[74]]==37){ leftArrowDown=true };
    if(event[_0x5c72[74]]==39){ rightArrowDown=true };
    if(event[_0x5c72[74]]==38){ upArrowDown=true };
});
document.addEventListener('keyup',function(event){
    if(event[_0x5c72[74]]==37){ leftArrowDown=false};
    if(event[_0x5c72[74]]==39){ rightArrowDown=false};
    if(event[_0x5c72[74]]==38){ upArrowDown=false};
});
function addLife(){
    numLives++;
    var life =document.createElement("IMG");
    life.src='heart.png';
    lifebar.appendChild(life);
    
}
function updateTime(){
    time--;
    countdown[_0x5c72[12]]=time;
    if(time==0){clearInterval(gameTimer);
    removeLife();
    level--;
    nextLevel();
        
    };
    
}

// the hittest function from previous game instructions jakeweb.net/JS_GAMES
function hittest(a, b){
    var aX1 = parseInt(a.style.left);
    var aY1 = parseInt(a.style.top);
    var aX2 = aX1 + parseInt(a.style.width)-1;
    var aY2 = aY1;
    var aX3 = aX1;
    var aY3 = aY1 + parseInt(a.style.height)-1;
    var aX4 = aX2;
    var aY4 = aY3;
    
    var bX1 = parseInt(b.style.left);
    var bY1 = parseInt(b.style.top);
    var bX2 = bX1 + parseInt(b.style.width)-1;
    var bY2 = bY1;
    var bX3 = bX1;
    var bY3 = bY1 + parseInt(b.style.height)-1;
    var bX4 = bX2;
    var bY4 = bY3;
    
    var hOverlap = true;
    if(aX1<bX1 && aX2<bX1) hOverlap = false;
    if(aX1>bX2 && aX2>bX2) hOverlap = false;
    
    var vOverlap = true;
    if(aY1<bY1 && aY3<bY1) hOverlap = false;
    if(aY1>bY3 && aY3>bY3) hOverlap = false;
    
    if(hOverlap && vOverlap) return true;
    else return false;
}