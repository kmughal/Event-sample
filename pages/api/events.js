export default async function Evetns(req, res) {
  const { type } = req.query;
  console.log(req.query)
  // if (!type || type !== "categories" || type !== "responsibles") {
  //   res.statusCode = 500;
  //   return;
  // }
  let key = null;
  if (type === "categories") key = "5bcdd3942f00002c00c855ba";
  else if (type === "responsibles") key = "5bcdd7992f00006300c855d5";

  const url = `http://www.mocky.io/v2/${key}`;
  console.log(type , url);
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}
