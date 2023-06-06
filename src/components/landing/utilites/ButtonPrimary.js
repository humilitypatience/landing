const ButtonPrimary = ({buttonStyles, textStyles, text}) =>  {
  return (
    <button className={buttonStyles}>
      <span className={textStyles}>{text}</span>
    </button>
  )
}

export default ButtonPrimary