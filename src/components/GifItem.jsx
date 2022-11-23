
export const GifItem = ( props ) => {
  return (
    <div className="card" >
        <img src={ props.url } alt={ props.title } />
        <p>{ props.title }</p>
        {/*  */}
    </div>
    
  )
}
