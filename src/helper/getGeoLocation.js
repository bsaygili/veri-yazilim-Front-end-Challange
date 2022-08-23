export const getGeoLocation = async (setLatitude, setLongitude) => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      // populate and set latitude and longitude
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    },
    (err) => {
      // if error occurs alert prompt will work.
      console.log("Geolocaiton Error Msg:", err.message);
      alert(
        "Konum bilgisine erişilemedi. Konuma izin verip, sayfayı yenileyiniz."
      );
    }
  );
};
