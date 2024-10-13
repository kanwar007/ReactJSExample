

// defect value set which can be over write when we send the value from another 
export default function Tabs({children,button,buttonsContains='dev'}){
    const ButtonContains = buttonsContains;
    return (
    <> 
        <ButtonContains>
            {button}
        </ButtonContains>
        {children}
    </>)
}