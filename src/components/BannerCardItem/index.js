import './index.css'

const Banner = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard

  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="description"> {description}</p>
      <div>
        <button className="button"> Show More </button>
      </div>
    </li>
  )
}

export default Banner
