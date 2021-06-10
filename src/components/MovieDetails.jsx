const MovieDetails =({movie, comments}) =>(
    <div className="text-center text-white">
        <h2>{movie.Title}</h2>
        <img src ={movie.Poster} alt="movie poster"/>
        <ul style={{listStyleType:'none'}}>
            {
                comments.map(comment =>(
                   <li className="my-3" key={comment._id}>{comment.comment}</li> 
                ))
            }

        </ul>
    </div>
)

export default MovieDetails