const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk83TG1jSGUvTFptNGZCMUdCM0pqUUNZVTNEbyt2ZDJTSUJxNHZEZ1dVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmd6ZTM2OXl4Qk1sTHhoc1F1NmlJNTZta3Z5eVNIdlJFVkx3anQ4b3FCbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RU96RzVBMFdwUkZ2NUordXEzbVNJejdWK1FMRzFiNm9tTjV0WGNVYVg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPcUFvdkZoTXhvVXBjOVB3Nk9SNzlhRHd6RzRzakxtSVBXOHpWZjUwdEZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPVkc2S2laMGw1QjJ1VnlUUHgzWUxKdXlDTEJqWHltUmR6eVRFNm1rbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt4QlM0ZWRtWlNHbCtDMlhVazM1aDNmOUVVaDZja1g2dHUwd0FJdzJyVDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tEc3hBOHdRcHV1L2JBcEV5R1czMG5Dc0RQdDFoS1BjVnNNMDZNcjdGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWVjb081Q3Voci9FMzdicWZON1B3Q3FaVG5NY1JZR0l1N2dFQ2JybHprZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt2SXkrSTd2cEwwTHhDUG5BZmFTdTNkSUZNYnRLS0psaytDVlBDaWc3TGFiWHAwRXc2RHV2YktnSE1reTJBdWV2ZVhadndnamNKRG9OeHJ1d3BTa0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiJDMHgxdmdsQW1UZlJhcVA0aFJ6dlRaYmFodndLS0JDWWxyUFJ5bzM5ZHRJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI0TTJMQjE0TCIsIm1lIjp7ImlkIjoiOTkyOTM1ODA3Mjc4OjI5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlfigpDigpfigpbigotE4bWj4oKS4oKZ4oKRIiwibGlkIjoiMTAwNjY2MDk3ODU2NTg0OjI5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3UzNzVJSEVPdWd2OFlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoibjg1STI3TkcxV0VlWjR3bU5qa2p0L212YmNkb1NBR3R5QmlQbWl4WjUxQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRkZkNTNJQW13MitmU0VDQ2VhNVpvVDUyT3hGSldtSlJxeU1HeTJ1MDdoNU1qTjkrWFl3amVMZ1lYc05tWVp4aHpiL1plUEt3dmZNcEM1Qk0zeTdhQVE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik1DOGRGcUFPZUg0dm9PUXZWSUJIM0NzNmROUG9FRnRZSm1aU0ZnNGhkeloxS25VaUp4NWw0aitOeTA3WXJnUVVjZTIvQnU3aGZJRDAyZTFhaGljMEJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTkyOTM1ODA3Mjc4OjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlovT1NOdXpSdFZoSG1lTUpqWTVJN2Y1cjIzSGFFZ0JyY2dZajVvc1dlZFEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODQ0OTc3NSwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHeEYifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Umer-Md💕🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/3mry2v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "UMER-MD ",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "UMER-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "992935807278",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Umer-Md Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Umer-Md Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Umer-Md is alive now!!! ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "992935807278",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
