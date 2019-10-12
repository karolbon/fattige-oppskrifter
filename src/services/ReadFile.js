import data from "../fattig.student.json";

function dataSerializer() {
  console.log("dataserializer");
  const recepies = data.GraphImages.map(
    a =>
      new Object({
        id: a.id,
        title: a.edge_media_to_caption.edges[0].text.text.split(":")[0],
        text: a.edge_media_to_caption.edges[0].text.text.split(":").slice(1),
        picture: a.display_url
      })
  );

  return recepies;
}

export { dataSerializer };
