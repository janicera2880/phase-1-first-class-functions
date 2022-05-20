function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction() {
    return function otherFunction() {

    };
}
function returnsAnAnonymousFunction() {
    return function() {

    };
}