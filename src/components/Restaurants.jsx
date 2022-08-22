import React, { useEffect, useState } from "react";
import RestCard from "../components/RestCard";
import LoaderSpinner from "../components/LoaderSpinner";
import { FetchRestaurants } from "../API/fetchRestaurants";
import InfiniteScroll from "react-infinite-scroll-component";
import EndMessage from "../components/EndMessage";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [latitude, setLatitue] = useState();
  const [longitude, setLongitude] = useState();
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getGeoLocation = async () => {
      await window.navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitue(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (err) => {
          console.log("Geolocaiton Error Msg:", err.message);
          alert(
            "Konum bilgisine erişilemedi. Konuma izin verip, sayfayı yenileyiniz."
          );
        }
      );
    };
    getGeoLocation();
  }, []);

  useEffect(() => {
    const fetchRes = async () => {
      const { data } = await FetchRestaurants.post("/getFeed", {
        skip: 0,
        limit: limit,
        latitude: latitude,
        longitude: longitude,
      }).catch((err) => {
        console.log("Fetch API Error:", err.response.data);
      });
      setRestaurants(data.response);
    };
    if (latitude || longitude) {
      fetchRes();
    }
  }, [latitude, longitude, limit, skip]);

  const fetchData = async () => {
    setSkip((prev) => prev + 0);
    setLimit((prev) => prev + 10);
    setHasMore(false);
  };

  return (
    <>
      <h4 className="text-center" style={{ fontSize: 14 }}>
        Sonuçlar
      </h4>
      <InfiniteScroll
        className="d-flex flex-column align-items-center"
        dataLength={limit} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<LoaderSpinner />}
        endMessage={<EndMessage />}
      >
        {restaurants.map((restaurant) => {
          return (
            <RestCard
              key={restaurant.id}
              restaurant={restaurant}
              latitude={latitude}
              longitude={longitude}
            />
          );
        })}
      </InfiniteScroll>
    </>
  );
}

export default Restaurants;
