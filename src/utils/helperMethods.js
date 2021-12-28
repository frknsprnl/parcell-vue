import VueSweetalert2 from 'vue-sweetalert2';


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

export const swalSuccess = async () => {
}