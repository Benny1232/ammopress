var AmmoPress = function(){

	var jackets = [],
		primers = [],
		powders = [],
		bullets = [],
		round = null;

	// jackets
	this.loadJackets = function(cfg, amt){
		for(var i = 0; i<amt; i++){
			jackets.unshift(cfg);
		}
	};

	// primers
	this.loadPrimers = function(cfg, amt){
		for(var i = 0; i<amt; i++){
			primers.unshift(cfg);
		}
	};

	// powder
	this.loadPowder = function(cfg, amt){
		for(var i = 0; i<amt; i++){
			powder.unshift(cfg);
		}
	};

	// bullets
	this.loadBullets = function(cfg, amt){
		for(var i = 0; i<amt; i++){
			bullets.unshift(cfg);
		}
	};

	// press rounds
	this.pullHandle = function(cb){

		if(round){
			cb('eject around first', false);
			return false;
		}

		if(!jackets.length || !primers.length || !powders.length || !bullets.length){
			cb('out of something', false);
			return false;
		}

		var jacket = jackets.pop();
		var primer = primers.pop();
		var powder = powders.pop();
		var bullet = bullets.pop();
		var round = jacket;
		round.primer = primer;
		round.powder = powder;
		round.bullet = bullet;
		cb(null, "success!");

	};

	// grab round
	this.grabRound = function(){
		var tmp = round;
		round = null;
		return tmp;
	};

};

var ammo = new AmmoPress();