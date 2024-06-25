
const Section = ({children, ...props}) => {
  return (
    <section className="py-[60px] xl:py-[130px]" {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default Section