export const tripContentHeader = (type: string) => {
    switch (type) {
        case "DESCRIPTION":
            return "Popis výletu";
        case "NOTE":
            return "Poznámka";
        case "IMPORTANT_INFO":
            return "Důležité informace";
        default: return "Obecné";
    }
}