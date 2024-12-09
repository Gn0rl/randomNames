function createProbabilityTable(data) {
    const table = {}

    for (word of data) {
        let letters = word.split('')

        for (let i = 0; i < letters.length; i++) {
            if (!table[letters[i]]) table[letters[i]] = {}

            if (letters[i + 1]) {
                table[letters[i]][letters[i + 1]] =
                    table[letters[i]][letters[i + 1]] + 1 || 1
            }
        }
    }

    return table
}
function chooseNextLetter(table, currentLetter) {
    const letters = table[currentLetter]

    if (!letters) return ''

    const sum = Object.values(letters).reduce((a, b) => a + b, 0)
    let rand = Math.random() * sum

    for (let letter in letters) {
        rand -= letters[letter]
        if (rand <= 0) {
            return letter
        }
    }

    return ''
}
function generateName(table, startLetter, maxLength) {
    let name = startLetter
    let currentLetter = startLetter

    for (let i = 1; i < maxLength; i++) {
        currentLetter = chooseNextLetter(table, currentLetter)
        if (currentLetter === ' ') break
        name += currentLetter
    }
    return name
}
function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

function generateRandomName(names, impossibleStart = []) {
    impossibleStart = impossibleStart.map((letter) => letter.toUpperCase())

    const probabilityTable = createProbabilityTable(names)
    let startTable = Object.keys(probabilityTable).filter((key) => {
        return !impossibleStart.includes(key.toUpperCase())
    })

    if (!startTable[0])
        throw new Error('Names cannot be empty, or redused by impossibleStart')

    const newName = generateName(
        probabilityTable,
        startTable[randomInteger(0, startTable.length - 1)],
        randomInteger(4, 10)
    ).split('')
    newName[0] = newName[0].toUpperCase()
    return newName.join('')
}

module.exports = { generateRandomName }
