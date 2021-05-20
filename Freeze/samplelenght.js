
var sound = new Buffer("sound");
var soundresult = new Buffer("soundresult");
function bang() {
	var len = sound.framecount();
	outlet(0, len);	
	soundresult.send("setsize", len);
	}
