var AmmoPress = function(){

	var jackets = [],
		primers = [],
		powder = [],
		bullets = [],
		round = null;


// ================================================
// ================= Jackets ======================
// ================================================
	// load jackets - load one or more jackets in the qeueue
	this.loadJackets = function(cfg, amt){
		for(var i = 0; i<amt; i++){
			jackets.push(cfg);
		}
	};

	// list jackets - list all jackets in the queue
	this.listJackets = function(){
		return jackets;
	};

	// pop jacket - take one jacket out of the queue
	this.popJacket = function(){
		return jackets.shift();
	};

// ================================================
// ================= Primers ======================
// ================================================

	// load primers - load one or more primers in the qeueue
	this.loadPrimers = function(cfg, amt){
		for(var i = 0; i<amt; i++){
			primers.push(cfg);
		}
	};

	// list primers - list all primers in the queue
	this.listPrimers = function(){
		return primers;
	};

	// pop primer - take one primer out of the queue
	this.popPrimer = function(){
		return primers.shift();
	};

// ================================================
// ================= Powder =======================
// ================================================

	// load powder - load one or more powder in the qeueue
	this.loadPowder = function(cfg, amt){
		for(var i = 0; i<amt; i++){
			powder.push(cfg);
		}
	};

	// list powder - list all powder in the queue
	this.listPowder = function(){
		return powder;
	};

	// pop powder - take one powder out of the queue
	this.popPowder = function(){
		return powder.shift();
	};

// ================================================
// ================= Bullets ======================
// ================================================

	// load bullets - load one or more bullets in the qeueue
	this.loadBullets = function(cfg, amt){
		for(var i = 0; i<amt; i++){
			bullets.push(cfg);
		}
	};

	// list bullets - list all bullets in the queue
	this.listBullets = function(){
		return bullets;
	};

	// pop bullets - take one bullets out of the queue
	this.popBullet = function(){
		return bullets.shift();
	};
	
// ===============================================

	// press rounds
	this.pullHandle = function(cb){

		if(round){
			cb('eject round first', false);
			return false;
		}

		if(!jackets.length || !primers.length || !powder.length || !bullets.length){
			cb('out of something', false);
			return false;
		}

		var jacket = this.popJacket();
		var primer = this.popPrimer();
		var powder = this.popPowder();
		var bullet = this.popBullet();
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

var myPress = new AmmoPress();

console.log('jackets...');
// STEP 1: load jackets into jackets queue
myPress.loadJackets({foo: 'bar'}, 2);
myPress.loadJackets({test: 'ing'}, 5);
console.log(myPress.listJackets());

console.log('primers...');
myPress.loadPrimers({p: 'pri1'}, 2);
myPress.loadPrimers({p2: 'pri2'}, 5);
console.log(myPress.listPrimers());

console.log('powder...');
myPress.loadPowder({p: 'pow1'}, 2);
myPress.loadPowder({p2: 'pow2'}, 5);
console.log(myPress.listPowder());

console.log('bullets...');
myPress.loadBullets({p: 'pew1'}, 2);
myPress.loadBullets({p2: 'pew2'}, 5);
console.log(myPress.listBullets());

/*
// STEP 2: pull handle to press a around
myPress.pullHandle(function(err, results){
	if(err){
		console.log('errors..');
		console.log(err);
	} else {
		console.log('results..');
		console.log(results);
	}
});
*/