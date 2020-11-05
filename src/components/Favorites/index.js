import React from "react";
import Input from "../Input";

//extracted from component for testing purposes
export const sortListByName = (list = []) => {
  return list.sort((a, b) => {
    const x = a.name.toLowerCase();
    const y = b.name.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
};

const Favorites = ({
  favoriteLocations,
  setFavoriteLocations,
  setWeatherStatus,
}) => {
  const sortFavoritesByLowerToHigher = () => {
    const updatedFavoritesLocationsList = [...favoriteLocations];
    updatedFavoritesLocationsList.sort((a, b) => {
      return a.main.temp - b.main.temp;
    });
    setFavoriteLocations(updatedFavoritesLocationsList);
  };

  const sortFavoritesByHigherToLower = () => {
    const updatedFavoritesLocationsList = [...favoriteLocations];
    updatedFavoritesLocationsList.sort((a, b) => {
      return b.main.temp - a.main.temp;
    });
    setFavoriteLocations(updatedFavoritesLocationsList);
  };

  const sortFavoritesByName = () => {
    const updatedFavoritesLocationsList = [...favoriteLocations];
    setFavoriteLocations(sortListByName(updatedFavoritesLocationsList));
  };

  return (
    <div>
      <h1>FAVORITES</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Input
          name="favorites"
          type="radio"
          label="Sort by name"
          onClick={sortFavoritesByName}
        />
        <Input
          name="favorites"
          type="radio"
          label="Sort by highest to lowest temperature"
          onClick={sortFavoritesByHigherToLower}
        />
        <Input
          name="favorites"
          type="radio"
          label="Sort by lowest to highest temperature"
          onClick={sortFavoritesByLowerToHigher}
        />
      </form>
      {favoriteLocations.length ? (
        favoriteLocations.map((location, index) => {
          // move to separate component
          return (
            <div
              key={index}
              style={{
                border: "2px solid #024951",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              <h2>
                {location.name} {location.sys.country},
                {Math.round(location.main.temp)}
                &#8451;
              </h2>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => setWeatherStatus(location)}>
                  <span>More details</span>
                </button>
                <button
                  onClick={() => {
                    const updatedFavoritesLocations = [...favoriteLocations];
                    updatedFavoritesLocations.splice(index, 1);
                    setFavoriteLocations(updatedFavoritesLocations);
                  }}
                >
                  <span>Delete</span>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <>
          <h4>No favorites selected</h4>
          <p>(Search locations and add it to favorites)</p>
        </>
      )}
    </div>
  );
};

export default Favorites;
