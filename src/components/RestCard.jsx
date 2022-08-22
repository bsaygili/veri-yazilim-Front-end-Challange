import React from "react";
import star from "../assets/Group-1219.png";
import bucket from "../assets/shopping_basket-24px.png";
import haversine from "haversine";

function RestCard({ restaurant, latitude, longitude }) {
  return (
    <div
      className="card shadow mb-5 bg-body rounded"
      style={{ width: 343, minHeight: 260 }}
    >
      <img
        style={{ maxWidth: 341, height: 150 }}
        src={restaurant.images[0].base64}
        className="card-img-top"
        alt={restaurant.images[0].itemId}
      />
      <span
        className="position-absolute start-1 translate-middle rounded-pill badge"
        style={{ backgroundColor: "#B70014" }}
      >
        <img src={star} alt="star" /> {restaurant.storeInfo.rate.toFixed(1)}
      </span>

      <div className="card-body">
        <h5
          className="card-title"
          style={{
            fontSize: 18,
            color: "rgba(26, 24, 36, 1)",
          }}
        >
          {restaurant.title}{" "}
        </h5>
        <div className="d-flex justify-content-between fw-bolder fs-6">
          <div
            className="text-secondary"
            style={{ fontSize: 12, color: "rgba(26, 24, 36, .5)" }}
          >
            Coffee,Tatlı
          </div>
          <div className="text-secondary">
            <img className="mx-1" src={bucket} alt="shopping_basket-24px.png" />
            <span style={{ fontSize: 12, color: "rgba(26, 24, 36, .5)" }}>
              Min.Sipariş Tutarı: ₺{restaurant.storeInfo.minOrderPrice}
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between  mt-1 fw-bolder fs-6">
          <div className="text-dark fs-6">
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
  );
}

export default RestCard;
