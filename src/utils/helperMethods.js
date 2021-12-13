export function convertGMT(data) {
    
    let modified = "" + data;
    let regex = /GMT\+00/g
    modified = modified.replace(regex, "GMT+00");
    return modified;
}

export function convertTime(data) {
    
    let modified = "" + data;
    let regex = /..:/
    modified = modified.replace(regex, "03:");
    return modified;
}
/*
export function jsonBackslahRemove(data) {

    let temp = data;

    let regex = /\\/g

    temp.forEach(element => {
        temp.imageDirectory = imageDirectory.replace(regex,"\\")
    });

    console.log(temp);

    
}
*/