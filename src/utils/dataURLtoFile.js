export const dataURLtoFile = (imgUrl, fileName) => {
    let arr = imgUrl.split(',')
    let mime = arr[0].match(/:(.*?);/)[1];

    let imageDataStr = atob(arr[1])
    let n = imageDataStr.length
    let u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = imageDataStr.charCodeAt(n);
    }
    return new File([u8arr], fileName, {type: mime});
}