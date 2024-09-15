// Formatter using Intl.NumberFormat
export const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US", {
        notation: "compact",
        compactDisplay: "short",
    }).format(num);
};

export function truncateTitle(title, wordLimit = 14) {
    const words = title.split(" ");

    // If the number of words is less than or equal to the limit, return the title as is
    if (words.length <= wordLimit) {
        return title;
    }

    // Slice the array to get the first 'wordLimit' words and join them with spaces
    const truncatedTitle = words.slice(0, wordLimit).join(" ");

    // Append '...' and return the truncated title
    return truncatedTitle + "...";
}
