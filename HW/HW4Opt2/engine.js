var _0x1178=["right","left","random","floor","intTrack","getElementById","play","volume","loop","display","style","convict","block","300px","top","30px","width","35px","height","70px","guard","420px","className","flip-horizontal","guardA","320px","guardB","330px","guardC","guardD","240px","guardE","guardF","150px","guardG","length","80px","px","innerHTML","Escaped Convicts: ","currentTime","sndFree","pop","/","split","src","prisonrun.gif","prisoner.png","","lock","introp","205px","471px","endScreen","none","sndTrack","pause","endTrack","visibility","hidden","The Struggle Continues For those left behind","A new personal Record!","High Score: ","bestScore","setItem","keydown","keyCode","addEventListener","keyup","introScreen","getItem","reload","ruleScreen","aboutScreen","credScreen","scoreChart","mainScreen","music on","music off","visible"];
var loopTimer;
var numConvicts=0;
var mostNumConvicts=0;
var upArrowDown=false;
var downArrowDown=false;
var leftArrowDown=false;
var rightArrowDown=false;
var soundOff=false;
var direction;
var guardDirection= new Array(_0x1178[0],_0x1178[1],_0x1178[0],_0x1178[1],_0x1178[0],_0x1178[1],_0x1178[0],_0x1178[1]);
var guardSpeed= new Array();
var guard= new Array();
var intTrack;

function loadComplete(){
    for(var _0x81a9xf=0;_0x81a9xf<8;_0x81a9xf++){
        guardSpeed[_0x81a9xf]=Math[_0x1178[3]]((Math[_0x1178[2]]()*10)+5)};
        intTrack=document[_0x1178[5]](_0x1178[4]);
        intTrack[_0x1178[6]]();
        intTrack[_0x1178[7]]=0.1;
        intTrack[_0x1178[8]]=true;
        document[_0x1178[5]](_0x1178[11])[_0x1178[10]][_0x1178[9]]=_0x1178[12];
        convict=document[_0x1178[5]](_0x1178[11]);
        convict[_0x1178[10]][_0x1178[1]]=_0x1178[13];
        convict[_0x1178[10]][_0x1178[14]]=_0x1178[15];
        convict[_0x1178[10]][_0x1178[16]]=_0x1178[17];
        convict[_0x1178[10]][_0x1178[18]]=_0x1178[19];
        guard[0]=document[_0x1178[5]](_0x1178[20]);
        guard[0][_0x1178[10]][_0x1178[1]]=_0x1178[13];
        guard[0][_0x1178[10]][_0x1178[14]]=_0x1178[21];
        guard[0][_0x1178[22]]=_0x1178[23];
        guard[1]=document[_0x1178[5]](_0x1178[24]);
        guard[1][_0x1178[10]][_0x1178[1]]=_0x1178[25];
        guard[1][_0x1178[10]][_0x1178[14]]=_0x1178[21];
        guard[2]=document[_0x1178[5]](_0x1178[26]);
        guard[2][_0x1178[10]][_0x1178[1]]=_0x1178[13];
        guard[2][_0x1178[10]][_0x1178[14]]=_0x1178[27];
        guard[2][_0x1178[22]]=_0x1178[23];
        guard[3]=document[_0x1178[5]](_0x1178[28]);
        guard[3][_0x1178[10]][_0x1178[1]]=_0x1178[25];
        guard[3][_0x1178[10]][_0x1178[14]]=_0x1178[27];
        guard[4]=document[_0x1178[5]](_0x1178[29]);
        guard[4][_0x1178[10]][_0x1178[1]]=_0x1178[13];
        guard[4][_0x1178[10]][_0x1178[14]]=_0x1178[30];
        guard[4][_0x1178[22]]=_0x1178[23];
        guard[5]=document[_0x1178[5]](_0x1178[31]);
        guard[5][_0x1178[10]][_0x1178[1]]=_0x1178[25];
        guard[5][_0x1178[10]][_0x1178[14]]=_0x1178[30];
        guard[6]=document[_0x1178[5]](_0x1178[32]);
        guard[6][_0x1178[10]][_0x1178[1]]=_0x1178[13];
        guard[6][_0x1178[10]][_0x1178[14]]=_0x1178[33];
        guard[6][_0x1178[22]]=_0x1178[23];
        guard[7]=document[_0x1178[5]](_0x1178[34]);
        guard[7][_0x1178[10]][_0x1178[1]]=_0x1178[25];
        guard[7][_0x1178[10]][_0x1178[14]]=_0x1178[33];for(var _0x81a9xf=0;_0x81a9xf<guard[_0x1178[35]];_0x81a9xf++){guard[_0x81a9xf][_0x1178[10]][_0x1178[16]]=_0x1178[15];guard[_0x81a9xf][_0x1178[10]][_0x1178[18]]=_0x1178[36];};}function loop(){if(upArrowDown==true){var _0x81a9x11=parseInt(convict[_0x1178[10]][_0x1178[14]])-12;if(_0x81a9x11<1){_0x81a9x11=1};convict[_0x1178[10]][_0x1178[14]]=_0x81a9x11+_0x1178[37];};if(downArrowDown==true){var _0x81a9x11=parseInt(convict[_0x1178[10]][_0x1178[14]])+12;if(_0x81a9x11>490){_0x81a9x11=1;convict[_0x1178[10]][_0x1178[1]]=_0x1178[13];numConvicts++;for(var _0x81a9xf=0;_0x81a9xf<8;_0x81a9xf++){guardSpeed[_0x81a9xf]=Math[_0x1178[3]]((Math[_0x1178[2]]()*10)+5)};score[_0x1178[38]]=_0x1178[39]+numConvicts;document[_0x1178[5]](_0x1178[41])[_0x1178[40]]=0;document[_0x1178[5]](_0x1178[41])[_0x1178[6]]();sndFree[_0x1178[7]]=0.3;};convict[_0x1178[10]][_0x1178[14]]=_0x81a9x11+_0x1178[37];};if(leftArrowDown==true){var _0x81a9x12=parseInt(convict[_0x1178[10]][_0x1178[1]])-12;if(_0x81a9x12<1){_0x81a9x12=1};convict[_0x1178[10]][_0x1178[1]]=_0x81a9x12+_0x1178[37];};if(rightArrowDown==true){var _0x81a9x12=parseInt(convict[_0x1178[10]][_0x1178[1]])+12;if(_0x81a9x12>610){_0x81a9x12=610};convict[_0x1178[10]][_0x1178[1]]=_0x81a9x12+_0x1178[37];};var _0x81a9x13=convict[_0x1178[45]][_0x1178[44]](_0x1178[43])[_0x1178[42]]();if(downArrowDown||upArrowDown||leftArrowDown||rightArrowDown){if(_0x81a9x13!=_0x1178[46]){convict[_0x1178[45]]=_0x1178[46]}}else {convict[_0x1178[45]]=_0x1178[47]};moveGuard(0);moveGuard(1);if(numConvicts>=5){moveGuard(2)};if(numConvicts>=10){moveGuard(3)};if(numConvicts>=15){moveGuard(4)};if(numConvicts>=20){moveGuard(5)};if(numConvicts>=25){moveGuard(6)};if(numConvicts>=30){moveGuard(7)};}function moveGuard(_0x81a9x15){var _0x81a9x16=guard[_0x81a9x15];var _0x81a9x17=guardDirection[_0x81a9x15];var _0x81a9x18=parseInt(_0x81a9x16[_0x1178[10]][_0x1178[1]],_0x81a9x16[_0x1178[10]][_0x1178[9]]=_0x1178[12]);if(_0x81a9x18<10){_0x81a9x17=_0x1178[0];_0x81a9x16[_0x1178[22]]=_0x1178[23];};if(_0x81a9x18>610){_0x81a9x17=_0x1178[1];_0x81a9x16[_0x1178[22]]=_0x1178[48];};guardDirection[_0x81a9x15]=_0x81a9x17;if(_0x81a9x17==_0x1178[1]){_0x81a9x18-=guardSpeed[_0x81a9x15]};if(_0x81a9x17==_0x1178[0]){_0x81a9x18+=guardSpeed[_0x81a9x15]};_0x81a9x16[_0x1178[10]][_0x1178[1]]=_0x81a9x18+_0x1178[37];if(hittest(convict,_0x81a9x16)){clearInterval(loopTimer);document[_0x1178[5]](_0x1178[49])[_0x1178[6]]();sndFree[_0x1178[7]]=0.0;introp=document[_0x1178[5]](_0x1178[50]);introp[_0x1178[10]][_0x1178[9]]=_0x1178[12];introp[_0x1178[10]][_0x1178[1]]=_0x1178[51];introp[_0x1178[10]][_0x1178[14]]=_0x1178[30];introp[_0x1178[10]][_0x1178[16]]=_0x1178[30];introp[_0x1178[10]][_0x1178[18]]=_0x1178[52];document[_0x1178[5]](_0x1178[53])[_0x1178[10]][_0x1178[9]]=_0x1178[12];textEndMessage[_0x1178[38]]=_0x1178[39]+numConvicts;document[_0x1178[5]](_0x1178[11])[_0x1178[10]][_0x1178[9]]=_0x1178[54];var _0x81a9x19=document[_0x1178[5]](_0x1178[55]);_0x81a9x19[_0x1178[56]]();var _0x81a9x1a=document[_0x1178[5]](_0x1178[57]);_0x81a9x1a[_0x1178[7]]=0.1;_0x81a9x1a[_0x1178[8]]=true;if(!soundOff){_0x81a9x1a[_0x1178[6]]()};for(var _0x81a9xf=0;_0x81a9xf<guard[_0x1178[35]];_0x81a9xf++){guard[_0x81a9xf][_0x1178[10]][_0x1178[58]]=_0x1178[59]};if(numConvicts<=mostNumConvicts){highScoreMessage[_0x1178[38]]=_0x1178[60]};if(numConvicts>mostNumConvicts){mostNumConvicts=numConvicts;highScoreMessage[_0x1178[38]]=_0x1178[61];};lastScore[_0x1178[38]]=_0x1178[62]+mostNumConvicts;localStorage[_0x1178[64]](_0x1178[63],mostNumConvicts);};}document[_0x1178[67]](_0x1178[65],function(_0x81a9x1b){if(_0x81a9x1b[_0x1178[66]]==37){leftArrowDown=true};if(_0x81a9x1b[_0x1178[66]]==38){upArrowDown=true};if(_0x81a9x1b[_0x1178[66]]==39){rightArrowDown=true};if(_0x81a9x1b[_0x1178[66]]==40){downArrowDown=true};});document[_0x1178[67]](_0x1178[68],function(_0x81a9x1b){if(_0x81a9x1b[_0x1178[66]]==37){leftArrowDown=false};if(_0x81a9x1b[_0x1178[66]]==38){upArrowDown=false};if(_0x81a9x1b[_0x1178[66]]==39){rightArrowDown=false};if(_0x81a9x1b[_0x1178[66]]==40){downArrowDown=false};});function startGame(){document[_0x1178[5]](_0x1178[69])[_0x1178[10]][_0x1178[9]]=_0x1178[54];if(localStorage[_0x1178[70]](_0x1178[63])){mostNumConvicts=localStorage[_0x1178[70]](_0x1178[63])};loopTimer=setInterval(loop,50);document[_0x1178[5]](_0x1178[50])[_0x1178[10]][_0x1178[9]]=_0x1178[54];var intTrack=document[_0x1178[5]](_0x1178[4]);intTrack[_0x1178[56]]();var _0x81a9x19=document[_0x1178[5]](_0x1178[55]);_0x81a9x19[_0x1178[7]]=0.1;_0x81a9x19[_0x1178[8]]=true;if(!soundOff){intTrack[_0x1178[56]]();_0x81a9x19[_0x1178[6]]();};}function btMain(){location[_0x1178[71]]()}function rules(){document[_0x1178[5]](_0x1178[72])[_0x1178[10]][_0x1178[9]]=_0x1178[12]}function mainMenu(){document[_0x1178[5]](_0x1178[72])[_0x1178[10]][_0x1178[9]]=_0x1178[54];document[_0x1178[5]](_0x1178[73])[_0x1178[10]][_0x1178[9]]=_0x1178[54];document[_0x1178[5]](_0x1178[74])[_0x1178[10]][_0x1178[9]]=_0x1178[54];document[_0x1178[5]](_0x1178[75])[_0x1178[10]][_0x1178[9]]=_0x1178[54];}function info(){document[_0x1178[5]](_0x1178[73])[_0x1178[10]][_0x1178[9]]=_0x1178[12];document[_0x1178[5]](_0x1178[76]);}function creds(){document[_0x1178[5]](_0x1178[74])[_0x1178[10]][_0x1178[9]]=_0x1178[12];document[_0x1178[5]](_0x1178[76]);}function sndOff(){if(btnSnd[_0x1178[38]]==_0x1178[77]){soundOff=false;btnSnd[_0x1178[38]]=_0x1178[78];intTrack[_0x1178[6]]();}else {soundOff=true;btnSnd[_0x1178[38]]=_0x1178[77];intTrack[_0x1178[56]]();}}function replay(){var _0x81a9x24=document[_0x1178[5]](_0x1178[49]);_0x81a9x24[_0x1178[40]]=0;_0x81a9x24[_0x1178[56]]();document[_0x1178[5]](_0x1178[53])[_0x1178[10]][_0x1178[9]]=_0x1178[54];introp=document[_0x1178[5]](_0x1178[50]);introp[_0x1178[10]][_0x1178[9]]=_0x1178[54];document[_0x1178[5]](_0x1178[11])[_0x1178[10]][_0x1178[9]]=_0x1178[12];loopTimer=setInterval(loop,50);for(var _0x81a9xf=0;_0x81a9xf<2;_0x81a9xf++){guard[_0x81a9xf][_0x1178[10]][_0x1178[58]]=_0x1178[79];guard[_0x81a9xf][_0x1178[10]][_0x1178[9]]=_0x1178[12];};for(var _0x81a9xf=2;_0x81a9xf<guard[_0x1178[35]];_0x81a9xf++){guard[_0x81a9xf][_0x1178[10]][_0x1178[58]]=_0x1178[79];guard[_0x81a9xf][_0x1178[10]][_0x1178[9]]=_0x1178[54];};guard[0][_0x1178[10]][_0x1178[1]]=_0x1178[13];guard[1][_0x1178[10]][_0x1178[1]]=_0x1178[25];guard[2][_0x1178[10]][_0x1178[1]]=_0x1178[13];guard[3][_0x1178[10]][_0x1178[1]]=_0x1178[25];guard[4][_0x1178[10]][_0x1178[1]]=_0x1178[13];guard[5][_0x1178[10]][_0x1178[1]]=_0x1178[25];guard[6][_0x1178[10]][_0x1178[1]]=_0x1178[13];guard[7][_0x1178[10]][_0x1178[1]]=_0x1178[25];guardDirection[0]=_0x1178[0];guard[0][_0x1178[22]]=_0x1178[23];guardDirection[1]=_0x1178[1];guard[1][_0x1178[22]]=_0x1178[48];guardDirection[2]=_0x1178[0];guard[2][_0x1178[22]]=_0x1178[23];guardDirection[3]=_0x1178[1];guard[3][_0x1178[22]]=_0x1178[48];guardDirection[4]=_0x1178[0];guard[4][_0x1178[22]]=_0x1178[23];guardDirection[5]=_0x1178[1];guard[5][_0x1178[22]]=_0x1178[48];guardDirection[6]=_0x1178[0];guard[6][_0x1178[22]]=_0x1178[23];guardDirection[7]=_0x1178[1];guard[7][_0x1178[22]]=_0x1178[48];convict[_0x1178[10]][_0x1178[1]]=_0x1178[13];convict[_0x1178[10]][_0x1178[14]]=_0x1178[15];convict[_0x1178[10]][_0x1178[16]]=_0x1178[17];convict[_0x1178[10]][_0x1178[18]]=_0x1178[19];numConvicts=0;score[_0x1178[38]]=_0x1178[39]+numConvicts;if(!soundOff){sndTrack[_0x1178[40]]=0;sndTrack[_0x1178[6]]();endTrack[_0x1178[40]]=0;endTrack[_0x1178[56]]();};}function highScores(){document[_0x1178[5]](_0x1178[75])[_0x1178[10]][_0x1178[9]]=_0x1178[12];document[_0x1178[5]](_0x1178[76]);}