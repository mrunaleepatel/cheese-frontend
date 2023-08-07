import { redirect } from "react-router-dom";
import { baseUrl } from "./base_url";

export const createAction = async ({request}) => {
    const formData = await request.formData();
    const newCheeses = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image"),
    }
    await fetch(`${baseUrl}/cheeses`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
            body: JSON.stringify(newCheeses)
    })
    return redirect("/");
}

export const updateAction = async ({request, params}) => {
    const id = params.id;
    const formData = await request.formData();
    const updatedCheeses = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image"),
    }
    await fetch(`${baseUrl}/cheeses/${params.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCheeses)
    })
    return redirect("/");
}

export const deleteAction = async ({params}) => {
    const id = params.id;
    await fetch(`${baseUrl}/cheeses/${params.id}`, {
            method: "DELETE"
        })
        return redirect("/");
    }
    