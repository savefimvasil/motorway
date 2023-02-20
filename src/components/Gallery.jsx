import {BaseImage} from "../shared/BaseImage";

export const Gallery = ({ images, openInModal }) => {
  return (
    <div className="gallery">
      {
        images && images.map(img => (
          <div key={img.id} className="gallery__image" onClick={() => openInModal(img)}>
            <BaseImage url={img.url} alt={img.alt_description} title={img.description} />
          </div>
        ))
      }
    </div>
  )
}
