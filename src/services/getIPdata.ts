import { LoadingState, store } from "../state/ipdataStore";

export const getIPdata = async (ipAddress = null) => {
  try {
    if (!ipAddress) return;

    store.setState({
      loadingState: LoadingState.LOADING,
    });
    const response = await fetch(
      ipAddress
        ? `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}&ipAddress=${ipAddress}`
        : "http://ip-api.com",
    );

    const data = await response.json();

    store.setState({
      isp: data.isp,
      ipAddress: data.ip,
      coordinates: {
        lat: data.location.lat,
        long: data.location.lng,
      },
      timeZone: data.location.timezone.startsWith("UTC")
        ? data.location.timezone
        : "UTC " + data.location.timezone,
      location: data.location.city + " , " + data.location.country,
    });

    store.setState({
      loadingState: LoadingState.LOADED,
    });
  } catch (e: any) {
    console.error(e);
    store.setState({
      loadingState: LoadingState.ERROR,
    });
    alert(
      "Couldn't fetch the details for IP:" +
        ipAddress +
        "\n Error:" +
        e.message,
    );
    throw new Error(e.message);
  }
};
