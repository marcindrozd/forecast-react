export const getUserLocation = async () => {
  if (!navigator.geolocation) {
    return {
      latitude: 51.738145,
      longitude: 19.818789
    }
  }

  try {
    const position = await getLocationAsync();

    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }
  }
  catch (err) {
    console.log(err);
  }
};

const getLocationAsync = () => (
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  )
);
