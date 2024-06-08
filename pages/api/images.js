import fetch from "isomorphic-unfetch";
import UserAgent from "user-agents";
import stream, { Stream } from "stream";
const BASE_URL = "https://zayady.deltawy.com/imgs";
const FALLBACK_URL = "https://picsum.photos/200/300";

export default async function images(req, res) {
  const imageId = req.query.id;

  if (!imageId) {
    res
      .status(400)
      .send({ message: "Image url not provided or has wrong format" });
  }

  try {
    const imageBlob = await fetchImageBlob(`${BASE_URL}?id=${imageId}`);

    pipeImage(res, imageBlob);
  } catch (err) {
    console.log("here", err);
    handleFallback(res);
  }
}

function pipeImage(res, imageBlob) {
  const passThrough = new Stream.PassThrough();

  stream.pipeline(imageBlob, passThrough, (err) => {
    if (err) {
      console.log(err);
      handleFallback(res);
      return;
    }
  });
  passThrough.pipe(res);
}

function handleFallback(res) {
  // res.redirect(FALLBACK_URL);
  res.status(422).send({ message: "Couldn't fetch the image" });
}

async function fetchImageBlob(url) {
  return await fetch(url, {
    headers: { "user-agent": new UserAgent().toString() },
  }).then((data) => data.body);
}
