import React, { useState } from "react";
import { 
  Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel 
} from "@mui/material";

const MovieList = () => {
  const movies = [
    { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
    { title: "Titanic", genre: "Romance", releaseYear: 1997 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", releaseYear: 2014 },
    { title: "The Notebook", genre: "Romance", releaseYear: 2004 },
    { title: "Gladiator", genre: "Action", releaseYear: 2000 },
  ];

  const genres = ["All Genres", ...new Set(movies.map(movie => movie.genre))];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const filteredMovies = selectedGenre === "All Genres"
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(`Movie: ${title}`);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🎬 Movie List</h2>

      {/* Genre Filter Dropdown */}
      <FormControl style={{ minWidth: 200, marginBottom: "20px" }}>
        <InputLabel>Filter by Genre</InputLabel>
        <Select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre, index) => (
            <MenuItem key={index} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Display Movies */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {filteredMovies.map((movie, index) => (
          <Card 
            key={index} 
            style={{ width: "250px", cursor: "pointer" }}
            onClick={() => handleMovieClick(movie.title)}
          >
            <CardContent>
              <Typography variant="h6">{movie.title}</Typography>
              <Typography color="textSecondary">{movie.genre}</Typography>
              <Typography variant="body2">{movie.releaseYear}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
