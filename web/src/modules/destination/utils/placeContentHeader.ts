export const placeContentHeader = (type: string) => {
    switch (type) {
        case "FOOD":
            return "Strava";
        case "LOCATION":
            return "Poloha";
        case "EQUIPMENT":
            return "Vybavení";
        case "ACCOMMODATION":
            return "Ubytování";
        default: return "Obecné";
    }
}