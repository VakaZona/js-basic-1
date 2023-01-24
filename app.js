function canAccessWebsite(age) {
    if (age < 18) {
        return 'No'
    } 
    return 'Yes'
}

console.log(canAccessWebsite(18))

const canAccessWebsite2 = age => age < 18 ? 'No' : 'Yes'
console.log(canAccessWebsite2(20))