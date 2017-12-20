
export function getDispFromName(file): string | false {
    if (file.split('_').length < 2) return false
    return file.split('_')[1].split('.')[0]
}
export function getTimeFromName(file): number | false {
    if (file.split('_').length < 3) return false
    return parseInt(file.split('_')[2].split('.')[0])
}
export function getDurateFromName(file): number | false {
    if (file.split('_').length < 4) return false
    return parseInt(file.split('_')[3].split('.')[0])
}