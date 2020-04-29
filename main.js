const login = require("facebook-chat-api");
let group = {};
let level = {};
	
login({email: "epitchi@kb2ateam.com", password: "Lienminh1"}, (err, api) => {
    if(err) return console.error(err);
    api.listenMqtt((err, message) => {
    	console.log(message);
    	if(message.isGroup == false){
    		return;
    	}
    })
});
http://ghuntur.com/simsim.php?lc=vn&deviceId=&bad=0&txt=thi%E1%BB%87n%20l%C3%A0%20ai&fbclid=IwAR1yjKaucP5lKckSnV8Mb3-G78nMzE9dfYYu55V-8FZtS2jWUsTIJr-mk_U