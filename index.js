function superbowlWin(array){
    return !!array.find( element => element.result === "W") ? array.find( element => element.result === "W").year : undefined
}
