import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

import './collection.styles.scss'


const Collection = () => {
    const {collectionId} = useParams()
    const {title, items} = useSelector((state) => selectCollection(collectionId)(state))
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item=> <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}


export default Collection