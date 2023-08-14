import content from "./content.html"
export const htmlContent = (email, phone, amount, baseUrl = ".") => {
    const values = {
        amount,
        baseUrl,
        email,
        phone
    }
    let modifiedContent = content
    Object.keys(values).forEach(key => {
        const regex = new RegExp(`\{\{${key}\}\}`, 'g')
        modifiedContent = modifiedContent.replace(regex, values[key])
    })

    return modifiedContent
}
