export function puyoStyleFactory (which:string) : React.CSSProperties {
    switch (which) {
        case "gameBoard":
            return ({
                width: 300,
                height: 500,
                transform: "translate(0, 15%)",
                position: "absolute",
                border: "solid black 1px",
                backgroundColor: "darkGreen",
              })
        case "nextPuyo":
            return ({
                width: 250,
                height: 100,
                position: "absolute",
                transform: "translate(125%, 75%)",
                border: "solid black 1px",
                backgroundColor: "darkGreen",
              })
        case "scoreInfo":
            return({
                width: 250,
                height: 300,
                position: "absolute",
                transform: "translate(125%, 65%)",
                float: "right",
                border: "solid black 1px",
                backgroundColor: "darkGreen",
              })
        case "dancingMonkey":
            return({
                width: 250,
                height: 50,
                position: "absolute",
                transform: "translate(125%, 1000%)",
                border: "solid black 1px",
                backgroundColor: "darkGreen",
              })
        case "gameMessages":
            return({
                width: 570,
                height: 110,
                position: "absolute",
                transform: "translate(0, 525%)",
                border: "solid black 1px",
                backgroundColor: "darkGreen",
              })
        default:
        return ({});
    }
}