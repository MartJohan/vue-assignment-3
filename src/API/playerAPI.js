const key = "RakrKsq94tlf3PZmAnuQ";

//Check if player is in DB, if player exists, return true
export const CheckForPlayer = async (player) => {
    try{
        const players = await fetch(`https://vuejs-assignment-3.herokuapp.com/trivia?username=${player}`)
            .then(response => response.json());
        if(players.length >= 1) { return players[0]}
        else { return null; }
    } catch(e) {
        console.log(e);
        return false;
    }
}
//Save player to db
export const savePlayer = async(username, score) => {
    try {
        return await fetch(`https://vuejs-assignment-3.herokuapp.com/trivia`, {
            method: 'POST',
            headers: {
                'X-API-Key': key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                highScore: score,
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Could not create new user")
                }
                return response.json();
            })
            .then(newUser => {
                return newUser;
            });
    } catch(e) {
        console.log(e);
    }

}
//Patch score in db
export const PatchScore = async (userid,score) => {
    return await fetch(`https://vuejs-assignment-3.herokuapp.com/trivia/${userid}`, {
        method : 'PATCH',
        headers : {
            'X-API-Key' : key,
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            highscore : score
        })
    })
        .then(response => {
            if(!response.ok) {
                throw new Error('Could not update high score')
            }
            return response.json()
        })
        .then(updatedUser => {
            return updatedUser
        })
        .catch(error => {
            console.log(error)
        })
}