import "./category_Item.css"

function CategoryItem (props){
 return(
        <a className="Links_Categories" href="#">
            <div className="box-option">
                <i className="bi bi-heart"></i>
                <p>{props.nomeTag}</p>
            </div>
        </a>
 )
}
export default CategoryItem 