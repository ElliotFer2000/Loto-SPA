import React from "react"
import Button from "../../../components/Button"
import InputText from "../../../components/TextInput"
import HelpMessage from "../components/help-message"
function ConfirmForm({ onChangeConfirm, onSubmit, valid,confirmationCode,disabledForm}) {
    return (
        <form className="login__form">
            <InputText id="confirm-code"
                pattern="\d{6}"
                errorMessage="Formato incorrecto, escribe un numero de 6 digitos"
                successMessage="Formato de codigo correcto"
                helperMessage="Escribe un numero de 6 digitos"
                labelText="Codigo de confirmacion"
                changeHandler={onChangeConfirm}
                validationState={valid}
                value={confirmationCode}
                disabled={disabledForm} />
            <div>
                <Button clickHandler={onSubmit} text="Confirmar" classes={'confirm__submit ' + (disabledForm ? "disabled" : "")} />
            </div>
            <HelpMessage/>
        </form>
    )
}

export default ConfirmForm