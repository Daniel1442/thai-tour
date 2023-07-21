import {useContext} from "react";
import {PlaceContext} from "../context/placeContext";

export const usePlaceContext = () => {
    return useContext(PlaceContext)
}