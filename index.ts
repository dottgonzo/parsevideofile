
export interface IFileObject {
    dir: string
    name: string
    fullname: string
    extension: string
    fullpath: string
  }

function removeFolderFromPath(file: string): string {

    if (file.split('/').length > 1) return file.split('/')[file.split('/').length - 1]
    return file
}


export function constructFileObject(fullpath: string): IFileObject {

    const fullname = fullpath.split('/')[fullpath.split('/').length - 1]
  
    return {
      dir: fullpath.split('/' + fullname)[0],
      name: fullname.split('.')[fullname.split('.').length - 2],
      fullname: fullname,
      extension: fullname.split('.')[fullname.split('.').length - 1],
      fullpath: fullpath,
    }
  
  }
  

export function getDispFromName(file): string | false {
    file = removeFolderFromPath(file)
    if (file.split('_').length < 2) return false
    return file.split('_')[1].split('.')[0]
}
export function getTimeFromName(file): number | false {
    file = removeFolderFromPath(file)
    if (file.split('_').length < 3) return false
    return parseInt(file.split('_')[2].split('.')[0])
}
export function getDurateFromName(file): number | false {
    file = removeFolderFromPath(file)
    if (file.split('_').length < 4) return false
    return parseInt(file.split('_')[3].split('.')[0])
}