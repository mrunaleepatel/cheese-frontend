import {Link, useLoaderData, Form} from "react-router-dom"

function Index(props){
    const cheese = useLoaderData()

    return (
        <div>
            <h2>Create a Cheese</h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="Cheese Name" />
                <input type="text" name="countryOfOrigin" placeholder="Country of Origin" />
                <input type="text" name="image" placeholder="Cheese Image" />
                <input type="submit" value="create cheese" />
            </Form>
        {cheese.map((cheeses, index) => {
            return (
                 <div key={cheeses.id} className="cheeses">
            <Link to={`/cheeses/${cheeses.id}`}>
                <h1>{cheeses.name}</h1>
            </Link>
            <img src={cheeses.image} alt={cheeses.name} />
            <h3>{cheeses.countryOfOrigin}</h3>
        </div>
            );
        })}
    </div>
    )
}

export default Index