export const fetchQuestions = async (url) => {
    try {
        const { results } = await fetch(url)
            .then(response => response.json());
        return [null, results]
    } catch(e) {
        return [e.message, null]
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