import React from "react";

const GenreFilter = ({ genres }) => {
  const handleClick = (genre) => {
    console.log(`Filtreeing by: ${genre}`);
  };

  return (
    <div className="button">
      <h4>Filter by Genres</h4>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => handleClick(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
