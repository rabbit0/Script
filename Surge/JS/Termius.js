/*
Termius unlocks local pro v 
(From the author @Maasea)

Surge4:
http-response https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/limbopro/Script/master/Surge/JS/Termius.js

QX：
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body https://raw.githubusercontent.com/limbopro/Script/master/Surge/JS/Termius.js

Surge & QX MITM = api.termius.com
*/

/**
 * @supported 91084FFA2796
 */

let obj=JSON.parse($response.body)
obj.account["pro_mode"] = true;
obj.account["plan_type"] = "Premium";
obj.account["user_type"] = "Premium";
obj.account["current_period"]["until"] = "2099-10-10T03:27:34";
$done({body:JSON.stringify(obj)})