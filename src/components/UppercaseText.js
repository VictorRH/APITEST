const UppercaseText = ({ text }) => {
    return (
        <>
            <h1>
                <span>{text.toUpperCase()}</span>
            </h1>
        </>
    )
}
export default UppercaseText;