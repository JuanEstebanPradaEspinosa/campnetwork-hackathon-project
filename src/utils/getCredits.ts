export async function getCredits(jwt: string) {
  const res = await fetch(
    `${import.meta.env.VITE_ORIGIN_API}/auth/merv/check-generations`,
    {
      headers: { Authorization: `Bearer ${jwt}` },
    }
  );
  const { data } = await res.json();
  return data.generations_left as number;
}
