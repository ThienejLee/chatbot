const login = require("facebook-chat-api");
let group = {};
let level = {};
	
login({email: "epitchi@kb2ateam.com", password: "Lienminh1"}, (err, api) => {
    if(err) return console.error(err);
    api.listenMqtt((err, message) => {
    	if(message.isGroup == false){
    		return;
		}
		let idGroup = message.threadID, idSender = message.senderID;
    	if(typeof group[idGroup] == "undefined"){
    		group[idGroup] = {};
    		level[idGroup] = {};
    	}

    	if(typeof group[idGroup][idSender] == "undefined"){
    		group[idGroup][idSender] = 0;
    		level[idGroup][idSender] = 0;
		}
		if(message.body == "huy oi"){
			api.sendTypingIndicator(message.threadID);
    		api.sendMessage("j cau", message.threadID);
		}
		else if (message.body == "sua"){
			api.sendTypingIndicator(message.threadID);
			api.sendMessage("gaugau", message.threadID);
		}
		else if(message.body == "hi" || message.body == "HI" || message.body == "Hi"){
			let name = '';
			api.getUserInfo(idSender,(err,x)=>{
				name = x[idSender].name;	
				api.sendMessage("Hi " + name + "!",message.threadID);
			});
		}
		else if(message.body == "haizz" || message.body == "haiz" || message.body == "haizzz" || message.body == "ok" || message.body == "uk" || message.body == "ez" || message.body == "ump" || message.body == "tks" || message.body == "?" || message.body == "Uk"){
			api.sendTypingIndicator(message.threadID);
			api.sendMessage(message.body,message.threadID);
		}
		else if(message.body == "-help"){
			api.sendTypingIndicator(message.threadID);
			api.sendMessage("Hãy sua theo cách của pn",message.threadID);
		}
		else if( message.body == "dume" || message.body == "dit" || message.body == "du me" || message.body == "cek" || message.body == "dm" || message.body == "cặc" || message.body == "lz" || message.body == "vailoz"  || message.body == "cc" || message.body == "vcl"){
			api.sendTypingIndicator(message.threadID);
			api.sendMessage("Văn minh lịch sự đi pn",message.HuythreadID);
		}
		else if(message.body == "cut" || message.body == "Cut" || message.body == "kut" || message.body == "Kut" || message.body == "ngu"){
			api.sendTypingIndicator(message.threadID);
			api.sendMessage(message.body + " thì " + message.body + ". làm gì căng",message.threadID);
		}
		else if (message.body == "net di ong"){
			api.sendTypingIndicator(message.threadID);
			api.sendMessage("net con cac",message.threadID);
		}
		else{
	    	if(typeof group[idGroup] == "undefined"){
	    		group[idGroup] = {};
	    		level[idGroup] = {};
	    	}

	    	if(typeof group[idGroup][idSender] == "undefined"){
	    		group[idGroup] = {};
	    		level[idGroup] = {};
	    		group[idGroup][idSender] = 0;
	    		level[idGroup][idSender] = 0;
			}
	    	else {
	    		group[idGroup][idSender]++;
	    		level[idGroup][idSender] = group[idGroup][idSender] / 100 + 1;
			}
		}
	})
});

