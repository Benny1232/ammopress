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
        
        
    return results;
    
}