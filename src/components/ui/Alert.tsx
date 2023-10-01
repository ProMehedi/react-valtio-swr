const Alert = ({
  height = 300,
  type = 'error',
  title = 'Sorry, Not Found!',
}) => {
  return (
    <div
      style={{
        width: '100%',
        height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: type === 'error' ? '#ffeded' : '#d4edda',
        borderRadius: '4px',
        color: type === 'error' ? '#ff5c5c' : '#5cb85c',
      }}
    >
      <p>{title}</p>
    </div>
  )
}

export default Alert
