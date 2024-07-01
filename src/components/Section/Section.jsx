
const Section = ({children, className="", ...props}) => {
  return (
    <section className={`py-[60px] xl:py-[130px] ${className}`} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default Section