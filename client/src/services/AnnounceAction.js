import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

const AnnounceAction = async ({ request, params }) => {
  const formData = await request.formData();
  switch (request.method.toLowerCase()) {
    case "put": {
      await myAxios.put(`/api/announce/${params.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        search_title: formData.get("search_title"),
        instrument: formData.get("instrument"),
        location: formData.get("location"),
        description: formData.get("description"),
        name: formData.get("name"),
        image: formData.get("image"),
      });
      return redirect(`/`);
    }
    case "post": {
      await myAxios.post("/api/announce", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        search_title: formData.get("search_title"),
        instrument: formData.get("instrument"),
        location: formData.get("location"),
        description: formData.get("description"),
        name: formData.get("name"),
        image: formData.get("image"),
      });
      return redirect(`/`);
    }
    case "delete": {
      await myAxios.delete(`/api/announce/${params.id}`);
      return redirect(`/`);
    }

    default:
      throw new Response("", { status: 405 });
  }
};

export default AnnounceAction;
