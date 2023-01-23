const isAdmin = true
const canWrite = true

console.log(`System file ${isAdmin && canWrite}`)
console.log(`Standart file ${isAdmin || canWrite}`)
console.log(`Inventor admin ${!isAdmin}`)

const isEdited = true
const isSuperAdmin = true

console.log(`System file is editied ${
    isAdmin && canWrite && (!isEdited || isSuperAdmin)}`)

