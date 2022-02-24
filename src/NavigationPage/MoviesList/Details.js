import React from "react";
import { useParams } from "react-router-dom";

const Details = ({ movies }) => {
  let { id } = useParams();
  return (
    <div>
      {movies
        .filter((moviefilter) => moviefilter.id == id)
        .map((moviemap) => (
          <div>
            <h2>
              <span class="text-primary">Type:</span> {moviemap.type}
            </h2>
            <p>
              <span class="text-primary">Description:</span>{" "}
              {moviemap.description}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Details;
