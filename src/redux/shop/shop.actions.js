import ShopActionTypes from "./shop.types";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";


export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = (collection) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collection
})

export const fetchCollectionFailure = (error) => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: error
})

export const fetchCollectionStartAsync = () => dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionStart())

    collectionRef.get().then(snapshot => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionSuccess(collectionMap))
    }).catch(error => dispatch(fetchCollectionFailure(error.message)))
}