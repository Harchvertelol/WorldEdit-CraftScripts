importPackage(Packages.java.util);
importPackage(Packages.java.io);

/************************/
/* Advertisting library */
/************************/

var _0x1a5b=["\x67\x65\x74\x41\x64\x76\x65\x72\x74\x69\x73\x69\x6E\x67","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x73\x5F\x41\x64\x76\x53\x74\x72","\x70\x72\x69\x6E\x74","\x63\x72\x65\x61\x74\x65\x4E\x65\x77\x49\x6E\x66\x6F","\x77\x72\x69\x74\x65\x42\x79\x74\x65\x73","\x63\x6C\x6F\x73\x65","\x61\x64\x76\x53\x74\x65\x70","\x67\x65\x74\x54\x69\x6D\x65","\x73\x5F\x4E\x61\x6D\x65\x49\x6E\x66\x6F\x46\x6F\x6C\x64\x65\x72","\x73\x5F\x4E\x61\x6D\x65\x49\x6E\x66\x6F\x46\x69\x6C\x65","\x67\x65\x74\x53\x61\x66\x65\x46\x69\x6C\x65","\x65\x78\x69\x73\x74\x73","\x72\x65\x61\x64\x4C\x69\x6E\x65","\x73\x5F\x4E\x75\x6D\x62\x53\x65\x63\x42\x65\x74\x77\x65\x65\x6E\x41\x64\x76","\x73\x65\x74\x4E\x75\x6D\x62\x53\x65\x63\x42\x65\x74\x77\x65\x65\x6E\x41\x64\x76","\x73\x65\x74\x4E\x61\x6D\x65\x49\x6E\x66\x6F\x46\x69\x6C\x65","\x73\x65\x74\x4E\x61\x6D\x65\x49\x6E\x66\x6F\x46\x6F\x6C\x64\x65\x72","\x73\x65\x74\x41\x64\x76\x53\x74\x72","\x41\x64\x76\x49\x6E\x66\x6F\x46\x69\x6C\x65\x2E\x69\x6E\x66\x6F","\x63\x72\x61\x66\x74\x73\x63\x72\x69\x70\x74\x73",""];function Advertisting(){}Advertisting[_0x1a5b[1]][_0x1a5b[0]]= function(){player[_0x1a5b[3]](this[_0x1a5b[2]])};Advertisting[_0x1a5b[1]][_0x1a5b[4]]= function(_0xfd03x2,_0xfd03x3){outStream=  new FileOutputStream(_0xfd03x3);outDataStream=  new DataOutputStream(outStream);strr= _0xfd03x2.toString();outDataStream[_0x1a5b[5]](strr);outDataStream[_0x1a5b[6]]()};Advertisting[_0x1a5b[1]][_0x1a5b[7]]= function(){_s_Time=  new Date();_s_Sec= parseInt(_s_Time[_0x1a5b[8]]()/ 1000);s_File= context[_0x1a5b[11]](this[_0x1a5b[9]],this[_0x1a5b[10]]);if(s_File[_0x1a5b[12]]()== false){this[_0x1a5b[0]]();this[_0x1a5b[4]](_s_Sec,s_File);return 0};s_FIS=  new FileInputStream(s_File);s_DIS=  new DataInputStream(s_FIS);s_ReadLine= s_DIS[_0x1a5b[13]]();__sec= parseInt(s_ReadLine);if(_s_Sec- __sec> this[_0x1a5b[14]]|| _s_Sec- __sec<= 0){this[_0x1a5b[0]]();this[_0x1a5b[4]](_s_Sec,s_File)};s_DIS[_0x1a5b[6]]()};Advertisting[_0x1a5b[1]][_0x1a5b[15]]= function(_0xfd03x2){this[_0x1a5b[14]]= _0xfd03x2};Advertisting[_0x1a5b[1]][_0x1a5b[16]]= function(_0xfd03x4){this[_0x1a5b[10]]= _0xfd03x4};Advertisting[_0x1a5b[1]][_0x1a5b[17]]= function(_0xfd03x4){this[_0x1a5b[9]]= _0xfd03x4};Advertisting[_0x1a5b[1]][_0x1a5b[18]]= function(_0xfd03x5){this[_0x1a5b[2]]= _0xfd03x5};Advertisting[_0x1a5b[1]][_0x1a5b[14]]= 60* 60;Advertisting[_0x1a5b[1]][_0x1a5b[10]]= _0x1a5b[19];Advertisting[_0x1a5b[1]][_0x1a5b[9]]= _0x1a5b[20];Advertisting[_0x1a5b[1]][_0x1a5b[2]]= _0x1a5b[21]

/***************/
/* End library */
/***************/

advfactory = new Advertisting();
advfactory.setNameInfoFile("UltraCommandBlock.info");
advfactory.setNameInfoFolder("craftscripts");
advfactory.setNumbSecBetweenAdv(60*60*24);
advfactory.setAdvStr("\
-----------------------\n\
You are using script UltraCommandBlock by Harch,Square Team's member.\n\
Youtube channel: http://www.youtube.com/squareteamchannel\n\
Site: http://st.minecraft-moscow.com\n\
-----------------------\n\
");

advfactory.advStep();