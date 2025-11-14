export async function generateImage(
  model: "bear" | "fox" | "goat",
  jwt: string
) {
  const res = await fetch(
    `${import.meta.env.VITE_ORIGIN_API}/auth/merv/generate-image`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model_type: model }),
    }
  );
  const { data } = await res.json();
  return data.images as { id: string; url: string }[];
}
