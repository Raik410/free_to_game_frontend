export const url =
  "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp";
export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d228359c20msh0a08278fc79e964p10ac9cjsn8ee71a52c1c3",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export async function test() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
