const GifList = ({gifs}) => {

  const renderGifs = gifs.map(gif => {
    return <li>
        <img src={gif.images.original.url} alt="image" />
         
    </li>
  }) 

    return ( 
   
           <ul>
             {renderGifs}
           </ul>
      

     );
}
 
export default GifList;