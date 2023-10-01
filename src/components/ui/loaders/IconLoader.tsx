import { ClipLoader } from 'react-spinners'

const IconLoader = ({ size = 15, color = '#fff' }) => {
  return (
    <div style={{ display: 'inline-flex', marginLeft: 8 }}>
      <ClipLoader color={color} size={size} />
    </div>
  )
}

export default IconLoader
