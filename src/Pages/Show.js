import { useLoaderData } from "react-router-dom";

function Show(props){
    const cheeses = useLoaderData()

    return (
        <div className="cheeses">
            <h1>{cheeses.name}</h1>
            <h2>{cheeses.countryOfOrigin}</h2>
            <img src={cheeses.image} alt={cheeses.name}/>

            <h2>Update {cheeses.name}</h2>
            <Form action={`/update/${cheeses.id}`} method="post">
                <input type="text" name="name" placeholder="cheese name" />
                <input type="text" name="countryOfOrigin" placeholder="country of origin" />
                <input type="text" name="image" placeholder="image url" />
                <input type="submit" value={`update ${cheeses.name}`}/>
            </Form>

            <h2>Delete Cheese</h2>
            <Form action={`/delete/${cheeses.id}`} method="post">
                <input type="submit" value={`delete ${cheeses.name}`}/>
            </Form>
        </div>
    )
}

export default Show