export const fetchQuestions = async (url) => {
    try {
        const { error, response_code, results } = await fetch(url)
            .then(response => response.json());
        return [response_code, results, error]
    } catch(e) {
        return [null, null,e.message]
    }
}

export const fetchCategories = async () => {
    try{
        const { trivia_categories } = await fetch("https://opentdb.com/api_category.php").then(response => response.json());
        return [null, trivia_categories]
    } catch(e) {
        return [e.message, null];
    }
}

export const fetchToken = async () => {
    try {
        const { token } = await fetch('https://opentdb.com/api_token.php?command=request')
            .then(response => response.json());
        return token
    } catch(e) {
        return e.message
    }
}

export const resetToken = async(oldToken) => {
    try {
        const { token } = await fetch(`https://opentdb.com/api_token.php?command=reset&token=${oldToken}`)
            .then(response => response.json());
        return token;
    } catch(e) {
        return e.message;
    }
}