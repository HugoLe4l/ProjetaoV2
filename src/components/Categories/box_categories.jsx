import "./box_categories.css";
import ScrollBoxCategories from "./ScrollBoxCategories.jsx"
import CategoryItem from "./category_item.jsx"

function Categories_box() {
    return (
        <nav id="nav_categories">
            <ScrollBoxCategories/>
            <CategoryItem nomeTag="Descobrir"/>
            <CategoryItem nomeTag="Odontologia"/>
            <CategoryItem nomeTag="Oftalmologia"/>
            <CategoryItem nomeTag="Fisiotetapia"/>
        </nav>
    );
    
}
export default Categories_box;
