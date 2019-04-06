
#TODO

##Global primary color
- Primary color should progressively change, as one nears the completion of a hexagram
- Assign colors to trigrams
- Hexagrams are the mixture of those two colors
    - 0 lines)      Gainsboro
    - 1 - 2 lines)  Possibly the mixture of gainsboro, weighted against the mix of remaining possible trigrams
    - 3 lines)      Color of whichever Trigram has been "drawn"
    - 4 - 5 lines)  As above for 1 - 2)
    - 6 lines)      The mixture of the two "drawn" Trigrams


// Collection of trigrams that match the current line
trigrams.map(t => t.sequence\[(lines.length - 1) % 3\] === lines\[lines.length - 1\].value)

// We need the collection of trigrams that match all current lines
// ex. sequence [0, 1, 1] === Wind
// ex. sequence [0, 1] could === Wind, Water
// ex. sequence [0] could === Water, Mountain, Earth, Wind
getters.sequence.length <= 3
    // Look at matching the first (lower) trigram
    ? trigrams.map(t => take(getters.sequence, 3).map(\[(lines.length - 1) % 3\] === lines\[lines.length - 1\].value)
    // Look at matching the second (upper) trigram
    : 

comparing trigram sequence to 
trigrams.map(trigram => {
    // return trigram if it contains the same sequence as getters.sequence
    return trigram.sequence.toString().startsWith(getters.sequence.slice(getters.sequence.length <= 3 ? 0, 3 : 3, 6).toString)
})

0:  state.color
1:  state.color
