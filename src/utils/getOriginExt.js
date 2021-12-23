export const getOriginExt = (file) => {
    const arrImageTypeData = file.type.split("/")
    return arrImageTypeData[1]
}