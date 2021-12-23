export const makeURL = (fileData, setUrl) => {
    const reader = new FileReader()
    reader.addEventListener("load", ev => {
        setUrl(reader.result)
    })
    reader.readAsDataURL(fileData)
}