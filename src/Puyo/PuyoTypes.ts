
export type screenType = "settings" | "game" | "failure";
export type difficultyType = "Easy" | "Medium" | "Hard" | "Puyo Must Die!";
export type songType = "Big In Japan" | "Requiem In D" | "Gymnopedies" | "Laid Back Endless Puyo" | "Mute";
export type puyoType = "Red" | "Yellow" | "Blue" | "Green" | "Purple";
export type boardTypes = puyoType | "Empty";
export type keyStatus = {
    a:boolean,
    s:boolean,
    leftArrow:boolean,
    rightArrow:boolean,
    upArrow:boolean,
    downArrow:boolean,
    q:boolean,
    m:boolean,
    p:boolean,
}