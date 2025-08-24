const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJRbnNmRTVoTk9UMklSUlcwQTFhclJiUnZlN05YUy8rRjdzaGFMNFltdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUVHczRsS2h4bnAvWFZOZ3k3RmhJc096YXRSWVowREx0dGNuMmxYcjNWZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUHlRSTgvblNJY1JPRER4S1Q3eUl4OTduOUhWWHAxZS9lY0tnM2oxQm1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEbk5oekdCTDM0OHBRYk9ocFZTTzdpd2RuTkJwbTl0emlkOWNta2JsOGs4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9BRURlUDBTRkdJK2Yzb3JCUUtzMEhUNmYzMjJCa1BsVUc4Z1B6L2RHVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFmK3d0WTBuWEN3OXFUbWgrMGRDMUhzNldvRmt5aEpHNjdOWHNTaTE2aVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNnZzVjTHMzQ1daTjlBMGVkZld5Y04wc2RwdHYyajF5dlJydFFUVWRWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1dkQVR3WVFXNXBJaUpnTDFoQ0xldUtNSStETlBIalMrTCtwU2lHRlB5UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAxRXJSV2ZTa2RaTk9pdTEzZlAvKzJNUmh1c2NOc0wyUjdhMjRFaktEMkc2b1NheEhHZEtiZVNvdnRKSGNKZ2svUk1zNysyUFhNWkRMNWdLVlhmSUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU3LCJhZHZTZWNyZXRLZXkiOiIwN2tibXRvaTR6WDB0c3VpVm1uNGxSKzJSKzRBRy9hdFNIQTRkMWZWQ3JRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJLM1E0SDcyQSIsIm1lIjp7ImlkIjoiOTIzMTA0ODgyOTIxOjI2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqnin7XMvcygzaIg8J2QhfCdkJPwnZCG8J2QjCDwnZCK8J2QiPCdkI3wnZCGPvCThqriuJlcbsOXzZzDl1xuw5dcbsOXXG7Dl1xuw5dcbsOXXG7Dl1xuw5dcbsOXXG7Dl82cw5dcbvCThqnin7XMvcygzaIg8J2QhfCdkJPwnZCG8J2QjCDwnZCH8J2QgPCdkILwnZCK8J2QkiDwnZCO8J2QlvCdkI3wnZCE8J2QkT7wnZ+z8JOGquK4mSIsImxpZCI6IjQ2MjkxNzk1MDcxMjE2OjI2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTNqMEFRUXJkZXJ4UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicjBCWWI4V0JCL2wvbmZTc0pSSGd5bmRodERncW1yZ3AvMXNuYndLN2JUYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSUtsVVN5bm13eURCYlcvN1dLaUZuQzFXU1FZaXZlUllkOWpaUkdZK3hweVp4NnUxYy9UYVMzK3F6czFnbkNFUTVPamRqSGpGZ1ZJMWhNMnplQi9rQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Im1KSFkrbkhIWnVlM2EvVmxaaXNPRDJGUHcwNEVONnREUVdZbjFlRXI0NXdJaEVtRFM1c3UrQ3R0QllwcDJQS2YxY2FMTWgrV3BITDJMMGl5Z3VCY0NBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTA0ODgyOTIxOjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmE5QVdHL0ZnUWY1ZjUzMHJDVVI0TXAzWWJRNEtwcTRLZjliSjI4Q3UyMDMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjAzMTkyMSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU45OCJ9xuw5fNnMOXXG7wk4ap4p+1zL3MoM2iIPCdkIXwnZCT8J2QhvCdkIwg8J2Qh/CdkIDwnZCC8J2QivCdkJIg8J2QjvCdkJbwnZCN8J2QhPCdkJE+8J2fs/CThqriuJkiLCJsaWQiOiI0NjI5MTc5NTA3MTIxNjoyNUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ016ajBBUVF4S1NyeFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InIwQlliOFdCQi9sL25mU3NKUkhneW5kaHREZ3FtcmdwLzFzbmJ3SzdiVGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InU2c2FETURlS3pQRnVpZk9OVWRUdkdUVEdsYzlvS0UzRGdiNE9NMWtEUzBnVStyWHJQNGN5ZWlDOFdSNWhqRjhlM0NSK2RPYlhHdEpmRmFsYWhkdUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuSTlXNUc0anIxUHZBcVZHb1RvSWQzeit0aWZpc0dUQmJ6d1BGMG1UWlFVVTZ5OC9FQWgremJhWTZlSzNBMzc1RW41dTI3bE1yVU5aQ2hKQjdkczdEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzEwNDg4MjkyMToyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhOUFXRy9GZ1FmNWY1MzByQ1VSNE1wM1liUTRLcHE0S2Y5YkoyOEN1MjAzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwMjU0MTYsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHYUoifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "♥️",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "Public", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/pXfzRxjh/FTGM-LOGO.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "+",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "FTGM_HACKS_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "FTGM_HACKS_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923104882921",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*FTGM_HACKS_MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FTGM HACKS Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/pXfzRxjh/FTGM-LOGO.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923104882921",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
