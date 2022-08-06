var quickPackRewards={
    1:1.2
    ,2:1.22,
    3:1.24,
    4:1.26,
    5:1.3,
    6:1.4,
    7:2
};
var quickGemsRewards={
    1:50,
    2:100,
    2:200,
    3:300,
    4:450,
    5:650,
    6:850,
    7:950
}
var premierPackRewards={
    0:1,
    1:1,
    2:2,
    3:2,
    4:3,
    5:4,
    6:5,
    7:6
}
var premierGemsRewards={
    0:50,
    1:100,
    2:250,
    3:1000,
    4:1400,
    5:1600,
    6:1800,
    7:2200
}
var traditionalPackRewards={
    0:1,
    1:1,
    2:3,
    3:6
}
var traditionalGemsRewards={
    0:100,
    1:250,
    2:1000,
    3:2500,
}
//function to calculate from a list of draft runs (only wins) average gem yeild 
//accepted gemRewards values are quickGemRewards, premierGemsRewards, traditionalGemsRewards (should be the actual list)
function averageGemYeild(runs,gemRewards){
    let out=0;
    for(let i=0;i<runs.length;i++){
        out+=gemRewards[runs[i].length];
    }
    return out/runs.length;
}
//function to calculate from a list of draft runs (only wins) average pack yeild

//accepted packRewards values are quickPackRewards, premierPackRewards, traditionalPackRewards (should be the actual list)
function averagePackYeild(runs,packRewards){
    let out=0;
    for(let i=0;i<runs.length;i++){
        out+=packRewards[runs[i]];
    }
    return out/runs.length;
}