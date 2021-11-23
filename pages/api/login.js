import { TOKEN_URL } from "@/Utils/Constants";
import { fetchData } from "@/Utils/Helper";

const handler = async (req, res) => {
  const { body } = req;
  const [data, error] = await fetchData(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (error) return res.status(400).send(error);
  return res.status(200).json({ data });
};

export default handler;
