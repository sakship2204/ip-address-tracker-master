import { LoadingState, store } from "../state/ipdataStore";

export const getIPdata = async (searchValue: string) => {
  const searchQuery = searchValue.trim();
  const encodedSearchQuery = encodeURIComponent(searchQuery);

  try {
    const isIP = new RegExp("^([0-9]{1,3}\\.){3}[0-9]{1,3}$");

    store.setState({
      loadingState: LoadingState.LOADING,
    });
    const response = await fetch(
      isIP.test(searchQuery)
        ? `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}&ipAddress=${encodedSearchQuery}`
        : `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}&domain=${encodedSearchQuery}`,
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
        searchQuery +
        "\n Error:" +
        e.message,
    );
    throw new Error(e.message);
  }
};
