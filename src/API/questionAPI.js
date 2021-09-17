export const fetchQuestions = async (url) => {
    try {
        const { results } = await fetch(url)
            .then(response => response.json());
        return [null, results]
    } catch(e) {
        return [e.message, null]
    }
}
