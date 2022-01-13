const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string
}

const capitalize = string => {
    return string?.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

export const truncateAndCapitalize = (string, n) => {
    return capitalize(truncate(string, n))
}

export const toEuropean = date => {
    return date.replace(/-/g, ' / ').split(' ').reverse().join('')
}

export const toAmerican = date => {
    return date.replace(/\//g, ' - ').split(' ').reverse().join('')
}

export { truncate, capitalize }
