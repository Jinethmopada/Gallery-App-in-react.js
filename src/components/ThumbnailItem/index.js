import './index.css'

const ThumbnailItem = props => {
  const {itemDetails, updateImageDetails} = props
  const {id, thumbnailUrl, thumbnailAltText} = itemDetails

  const onClickImageChange = () => {
    updateImageDetails(id)
  }

  return (
    <li className="thumbnail-container">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickImageChange}
      >
        <img
          className="thumbnail-img"
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
