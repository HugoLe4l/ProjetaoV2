import "./button1.css"

function Button1 (props){
    return(
        <>
         <a href={props.link} id="button1">{props.text}</a>
        </>
    )
}

export default Button1