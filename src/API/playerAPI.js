//Check if player is in DB, if player exists, return true
export const CheckForPlayer = async (player) => {
    try{
        const players = await fetch(`https://vuejs-assignment-3.herokuapp.com/trivia?username=${player}`)
            .then(response => response.json());
        return players.length >= 1;
    } catch(e) {
        console.log(e);
        return false;
    }
}
//Save player to db

//Save score to db
//Patch score in db