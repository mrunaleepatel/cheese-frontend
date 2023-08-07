import {Link, useLoaderData} from "react-router-dom"

function Index(props){
    const cheese = useLoaderData()

    return (
        <div>
            <h2>Create a Cheese</h2>
            <Form action="/create-cheese" method="post">
                <input type="text" name="name" placeholder="Cheese Name" />
                <input type="text" name="countryOfOrigin" placeholder="Country of Origin" />
                <input type="text" name="image" placeholder="Cheese Image" />
                <input type="submit" value="create cheese" />
            </Form>

            <h2>Cheeses</h2>
        {cheese.map(cheeses => (
        <div key={cheeses.id} className="cheeses">
            <Link to={`/cheeses/${cheeses.id}`}>
                <h1>{cheeses.name}</h1>
            </Link>
            <img src={cheeses.image} alt={cheeses.name} />
            <h3>{cheeses.countryOfOrigin}</h3>
        </div>
    ))}
    </div>
    )
}

export default Index