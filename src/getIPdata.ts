export const getIPdata = async (ipAddress) => {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}&ipAddress=${ipAddress}`,
    );
    console.log(await response.json());
  } catch (e: any) {
    console.error(e);
  }
};
