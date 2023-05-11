import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import "./Content.css";

const Details = () => {
  const [products, setProducts] = useState([]);

  async function getPostsData() {
    try {
      let stateApi = await axios.get("https://dummyjson.com/products");
      let response = stateApi.data.products;
      setProducts(response);
      // console.log(response);
    } catch (error) {
      return error;
    }
  }
  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <>
      {
        <table className=" m-4 table table-striped table-responsive ">
          <thead className=" table-primary">
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">Thubnail</th>
              <th scope="col">description</th>
              <th scope="col">price</th>
              <th scope="col">discountPercentage</th>

              <th scope="col">category</th>
              <th scope="col">rating</th>
              <th scope="col">stock</th>
              <th scope="col">Brand</th>
            </tr>
          </thead>

          <tbody>
            {products.map((products, index) => (
              <tr key={index}>
                <td>{products.id}</td>
                <td>{products.title}</td>
                <td>
                  <img
                    className="rounded mx-auto d-block mt-2"
                    style={{ width: "200px", height: "150px" }}
                    src={products.thumbnail}
                    alt="horse"
                  />
                </td>
                <td>{products.description}</td>
                <td>{products.price}</td>
                <td>{products.discountPercentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
};
export { Details };
