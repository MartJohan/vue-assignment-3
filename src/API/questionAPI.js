export const fetchQuestions = async () => {
    try {
        const { results } = await fetch('https://opentdb.com/api.php?amount=20&category=23&difficulty=easy')
            .then(response => response.json());
        return [null, results]
    } catch(e) {
        return [e.message, null]
    }
}