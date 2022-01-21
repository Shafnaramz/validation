
import {React , useState ,useEffect} from "react";
import axios from "axios";
import {
    Route,
    Switch,
    Redirect,
    BrowserRouter,
    Router,
    Link,
  } from "react-router-dom";
// Example of a data array that
// you might receive from an API


function List() {
    const [showCityDetails, setShowCityDetails] = useState([]);

    const TABLE_HEAD = [
        { id: 'name',   },
        { id: 'price',  },
        { id: 'quantity', },
        { id: 'category',  },
        
      ];

      useEffect( async () => {
        const datas=await axios.get('http://localhost:4000/products')
        .then((res)=>{
      
         
          setShowCityDetails(res.data)
        
        
        })
        }, [])
         console.log("pp===",showCityDetails)
return (
	<div className="List">
	<table>
		<tr>
		<th>Name</th>
		<th>price</th>
		<th>Quantity</th>
        <th>Category</th>
		</tr>
		{showCityDetails.map((row , key) => {
            const {  name, price, quantity, category} = row;
		return (
			<tr key={key}>
			<td>{name}</td>
			<td>{price}</td>
			<td>{quantity}</td>
            <td>{category}</td>
			</tr>
		)
		})}
     
	</table>
    <div className="add">
    <Link to="/add"><button className="primary" > Add Product</button></Link> 
    </div> 
	</div>
);
}

export default List;
