import {Link, useLoaderData, Form} from "react-router-dom"

function Index(props){
    const cheeses = useLoaderData()

    return (
        <div>
            <h2>Create a Cheese</h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="Cheese Name" />
                <input type="text" name="countryOfOrigin" placeholder="Country of Origin" />
                <input type="text" name="image" placeholder="Cheese Image" />
                <input type="submit" value="create cheese" />
            </Form>
        {cheeses.map((cheese, index) => {
            return (
                 <div key={cheeses.id} className="cheeses">
            <Link to={`/cheese/${cheese.id}`}>
                <h1>{cheese.name}</h1>
            </Link>
            <img src={cheese.image} alt={cheese.name} />
            <h3>{cheese.countryOfOrigin}</h3>
        </div>
            );
        })}
    </div>
    )
}

export default Index