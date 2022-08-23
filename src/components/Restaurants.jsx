import React, { useEffect, useState } from "react";
import RestCard from "../components/RestCard";
import LoaderSpinner from "../components/LoaderSpinner";
import { fetchRes } from "../API/fetchRestaurants";
import { getGeoLocation } from "../helper/getGeoLocation";
import InfiniteScroll from "react-infinite-scroll-component";
import EndMessage from "../components/EndMessage";
import NotFound from "./NotFound";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [limit, setLimit] = useState(13);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getGeoLocation(setLatitude, setLongitude);
    if (latitude || longitude) {
      fetchRes(skip, limit, latitude, longitude, setRestaurants);
    }
  }, [latitude, longitude, limit, skip]);

  const fetchData = async () => {
    setSkip((prev) => prev + 3);
    setLimit((prev) => prev + 7);
    if (restaurants.length === 0 && restaurants.length < 20) {
      setHasMore(false);
    }
  };

  return (
    <>
      <InfiniteScroll
        className="d-flex flex-column align-items-center"
        dataLength={restaurants.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<LoaderSpinner className="mt-4" />}
        endMessage={<EndMessage />}
      >
        {restaurants.length === 0 ? (
          <NotFound />
        ) : (
          restaurants.map((restaurant) => (
            <RestCard
              key={restaurant.id}
              restaurant={restaurant}
              latitude={latitude}
              longitude={longitude}
            />
          ))
        )}
      </InfiniteScroll>
    </>
  );
}

export default Restaurants;
