import React from "react";
import star from "../assets/Group-1219.png";
import bucket from "../assets/shopping_basket-24px.png";
import haversine from "haversine";

function RestCard({ restaurant, latitude, longitude }) {
  console.log("restaurant", restaurant);
  return (
    <div className="d-flex justfy-content-between align-items-center flex-wrap">
      <div
        className="shadow m-4 bg-body rounded-3 position-relative"
        style={{ width: 343, height: 260 }}
      >
        {restaurant.images.length === 0 ? (
          <div
            style={{ maxWidth: 343, height: 150 }}
            className="card-img-top rounded-3 bg-danger text-white text-center p-4"
          >
            Images not Found
          </div>
        ) : (
          <img
            style={{ maxWidth: 343, height: 150 }}
            src={restaurant.images[0].base64}
            className="card-img-top rounded-3"
            alt={restaurant.images[0].itemId}
          />
        )}

        <span
          className="rounded badge position-absolute d-flex align-items-center"
          style={{
            width: 56,
            height: 32,
            left: 8,
            top: 8,
            backgroundColor: "#B70014",
          }}
        >
          <img
            src={star}
            alt="star"
            style={{ width: 13, height: 12.35, marginRight: 3 }}
          />{" "}
          {restaurant.storeInfo.rate.toFixed(1)}
        </span>

        <div className="card-body px-2">
          <h5
            className="card-title"
            style={{
              fontSize: 18,
              marginTop: "1rem",
              height: "3rem",
              color: "rgba(26, 24, 36, 1)",
            }}
          >
            {restaurant.title}{" "}
          </h5>
          <div className="d-flex justify-content-between mb-2">
            <div style={{ fontSize: 12, color: "rgba(26, 24, 36, .5)" }}>
              Coffee,Tatlı
            </div>
            <div>
              <img
                className="mx-1"
                src={bucket}
                alt="shopping_basket-24px.png"
              />
              <span style={{ fontSize: 12, color: "rgba(26, 24, 36, .5)" }}>
                Min.Sipariş Tutarı: ₺{restaurant.storeInfo.minOrderPrice}
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <span
                className="mx-1"
                style={{ fontSize: 12, color: "rgba(26, 24, 36, 1)" }}
              >
                {haversine(
                  { latitude, longitude },
                  {
                    latitude: restaurant.storeInfo.geoLocation.latitude,
                    longitude: restaurant.storeInfo.geoLocation.longitude,
                  },
                  { unit: "km" }
                ).toFixed(1)}
              </span>
              <span style={{ fontSize: 12, color: "rgba(26, 24, 36, 1)" }}>
                km Yakınında
              </span>
            </div>
            <div className="text-secondary">
              {restaurant.storeInfo.workingHours[0].closed ? (
                <p
                  className="d-inline-block text-danger"
                  style={{ fontSize: 12 }}
                >
                  İşletme Kapalı
                </p>
              ) : (
                <p
                  className="d-inline-block"
                  style={{ fontSize: 12, color: "#34C47C" }}
                >
                  İşletme Açık
                </p>
              )}

              <span> </span>
              <p
                className="d-inline-block text-secondary"
                style={{ fontSize: 12, color: "rgba(26, 24, 36, 0.5)" }}
              >
                {restaurant.storeInfo.workingHours[0].open} /{" "}
                {restaurant.storeInfo.workingHours[0].close}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestCard;
