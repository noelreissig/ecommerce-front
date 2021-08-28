import React from "react";
import NavComponent from "../../Navbar/Navbar";
import Hero from "../../Hero/Hero";
import Footer from "../../Footer/Footer";
import categoriesStyles from "./category.module.css";
import cardByCategoryStyles from "./cardByCategory.module.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Categories() {
	const { categories } = useParams();
	const [category, setCategory] = useState([]);

	useEffect(() => {
		const getCategory = async () => {
			const response = await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}/api/product/category/${categories}`,
			});
			setCategory(response.data);
		};
		getCategory();
	}, []);
	console.log(category);

	return (
		<div>
			<NavComponent />
			<Hero />
			{category.length > 0 ? (
				<h3 className="pt-5 text-center">
					¡Descúbre los productos que la categoría <strong>{categories}</strong>{" "}
					tiene para tu hogar!
				</h3>
			) : (
				<>
					<h3 className="pt-5 mb-3 text-center">Lo sentimos.</h3>
					<h3 className="mb-0 px-3 text-center">
						En este momento la categoría <strong>{categories}</strong> no
						tiene productos disponibles.
					</h3>
				</>
			)}

			<div className={`${categoriesStyles.stylesCategories} container pt-2`}>
				<div className="row">
					{category &&
						category.map((eachProduct) => (
							<div className="col-md-3" key={eachProduct.name}>
								<Link
									to={`/producto/${eachProduct.slug}`}
									className={categoriesStyles.linkDecoration}
								>
									<div>
										<Card
											className={`${cardByCategoryStyles.cardHover} shadow my-4 mx-3 d-flex text-align-center`}
										>
											<Card.Img
												variant="top"
												className={cardByCategoryStyles.images}
												src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/${eachProduct.picture_url}`}
												alt={eachProduct.name}
											/>
											<Card.Body>
												<Card.Title>
													{" "}
													{eachProduct.name}{" "}
												</Card.Title>
												<Card.Text>
													{" "}
													USD {eachProduct.price}
												</Card.Text>
												<Button
													variant="outline-secondary"
													className="rounded-pill"
												>
													Ver más
												</Button>
											</Card.Body>
										</Card>
									</div>
								</Link>
							</div>
						))}
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Categories;
