export const quotes = [
    "Music is the language of the spirit.",
    "Where words leave off, music begins.",
    "Without music, life would be a mistake.",
    "Music acts like a magic key, to which the most tightly closed heart opens.",
    "Music washes away from the soul the dust of everyday life."
];

export const getDailyQuote = () => {
    // Simple daily rotation based on day of year
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return quotes[dayOfYear % quotes.length];
};
