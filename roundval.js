var roundType = function (round){

// ROUND TYPE                   OBJECT NAME             TYPE OF SHAPE    
// Round Nose                   roundNose               --- Class 2
// Wad Cutter                   wadCutter               --- Class 2
// Semi Jacketed                semiJacketed            --- Class 1
// Semi Jacketed Hollow Point   semiJacketedHp          --- Class 1
// Special                      specialRound            --- Class 2
// Semi Wad Cutter              semiWadCutter           --- Class 2
// Full Metal Jacket            fullMetalJacket         --- Class 1
// Jacketed Hollow Point        jacketedHollowPoint     --- Class 1

var lookupTable = {
    SWC: {
        label: 'Semi Wad Cutter',
        bulletNoseType: 'round',
        jacketFull: false
    },
    RFP: {
        label: 'Rounded Flat Point',
        bulletNoseType: 'flat',
        jacketFull: false
    }
};


// traverse through lookup table for possible round type
for(var i in lookupTable){
    var key = i;
    // store current itteration of lookup table in data
    var data = lookupTable[i];
    // test current itteration of lookup table against round
    if(round.full === data.jacketFull && round.bullet.noseType === data.bulletNoseType){
        return key;
    }    
    
}

return 'unknown';

//      Round Examples
//
// http://fas.org/man/dod-101/sys/land/bullets.htm
// http://media.peakprosperity.com/images/ammunition-primer1-bullet-shapes.jpg

};


module.exports = function(round){
    
    var results = {};
    
    // high / low velocity check
    if(round.powder.amount > 50 ){
        results.velocity = 'high';
    } else {
        results.velocity = 'low';
    }
    
    // cal check...
    // 9 9mm     
    // 5.56 556 mm
    // 5.588 22 cal
    // 11.43 45 cal
    // 12.7 50 cal
    
    if(round.bullet.diameter == 9){
        results.caliber = '9mm';
    } else if (round.bullet.diameter == 5.56) {
        results.caliber = '5.56mm';
    } else if (round.bullet.diameter == 5.588) {
        results.caliber = '.22 caliber';
    } else if (round.bullet.diameter == 11.43) {
        results.caliber = '.45 caliber';
    } else if (round.bullet.diameter == 12.7) {
        results.caliber = '50 caliber';
    }
        
    results.type = roundType(round);
    
    return results;
    
}
