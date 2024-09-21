import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

const AnnounceAction = async ({ request, params }) => {
  const formData = await request.formData();
  switch (request.method.toLowerCase()) {
    case "put": {
      await myAxios.put(`/api/announce/${params.id}`, {
        search_title: formData.get("search_title"),
        user_type: formData.get("user_type"),
        instrument: formData.get("instrument"),
        location: formData.get("location"),
        description: formData.get("description"),
        name: formData.get("name"),
      });
      return redirect(`/`);
    }
    case "post": {
      await myAxios.post("/api/announce", {
        search_title: formData.get("search_title"),
        user_type: formData.get("user_type"),
        instrument: formData.get("instrument"),
        location: formData.get("location"),
        description: formData.get("description"),
        name: formData.get("name"),
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
