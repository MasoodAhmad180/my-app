import { type } from "os"

type ButtonTypes = {
    buttonTitle : string,
    onClickHandler: () => void
}

const Button = (props:ButtonTypes) =>{

    return(
        <button onClick = {props.onClickHandler}>{props.buttonTitle}</button>
    )
}

export default Button