import * as React from 'react'
import '../styles/_menu.scss'

const scrollLeft = () =>{}
const scrollRight = () =>{}

const Menu = () => {
  return (
    <>
        <section id="menu" className="menu-section">
        <h2>Rice Items</h2>
        <div className="menu-items-wrapper">
            <button className="scroll-button left" onclick={scrollLeft()}>&#8249;</button>
            <div className="menu-items">
                <div className="menu-item">
                    <img src="./images/rice-items/chicken-biryani.png" className="img-fluid" alt="Chicken Biryani" />
                    <h3>Chicken Biryani</h3>
                    <p>Deliciously spiced and fragrant biryani with tender chicken pieces.</p>
                    <p className="price">$12.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/rice-items/veg-fried-rice.png" className="img-fluid" alt="Vegetable Fried Rice" />
                    <h3>Veg Fried Rice</h3>
                    <p>Flavorful fried rice with fresh vegetables and a hint of soy sauce.</p>
                    <p className="price">$9.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/rice-items/mutton-biryani.png" className="img-fluid" alt="Mutton Biryani" />
                    <h3>Mutton Biryani</h3>
                    <p>Rich and aromatic biryani with succulent pieces of mutton.</p>
                    <p className="price">$14.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/rice-items/egg-fried-rice.png" className="img-fluid" alt="Egg Fried Rice" />
                    <h3>Egg Fried Rice</h3>
                    <p>Simple and tasty fried rice with scrambled eggs and vegetables.</p>
                    <p className="price">$8.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/rice-items/prawns-biryani.png" className="img-fluid" alt="Prawn Biryani" />
                    <h3>Prawn Biryani</h3>
                    <p>Aromatic biryani with succulent prawns and a blend of spices.</p>
                    <p className="price">$13.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>


                <div className="menu-item">
                    <img src="./images/rice-items/chicken-biryani.png" className="img-fluid" alt="Chicken Biryani" />
                    <h3>Chicken Biryani</h3>
                    <p>Deliciously spiced and fragrant biryani with tender chicken pieces.</p>
                    <p className="price">$12.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/rice-items/veg-fried-rice.png" className="img-fluid" alt="Vegetable Fried Rice" />
                    <h3>Veg Fried Rice</h3>
                    <p>Flavorful fried rice with fresh vegetables and a hint of soy sauce.</p>
                    <p className="price">$9.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/rice-items/mutton-biryani.png" className="img-fluid" alt="Mutton Biryani" />
                    <h3>Mutton Biryani</h3>
                    <p>Rich and aromatic biryani with succulent pieces of mutton.</p>
                    <p className="price">$14.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/rice-items/egg-fried-rice.png" className="img-fluid" alt="Egg Fried Rice" />
                    <h3>Egg Fried Rice</h3>
                    <p>Simple and tasty fried rice with scrambled eggs and vegetables.</p>
                    <p className="price">$8.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/rice-items/prawns-biryani.png" className="img-fluid" alt="Prawn Biryani" />
                    <h3>Prawn Biryani</h3>
                    <p>Aromatic biryani with succulent prawns and a blend of spices.</p>
                    <p className="price">$13.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                
            </div>
            <button className="scroll-button right" onclick={scrollRight()}>&#8250;</button>
        </div>
    </section>

    <section className="menu-section">
        <h2>South Indian Curries and Gravy</h2>
        <div className="menu-items-wrapper">
            <button className="scroll-button left" onclick={scrollLeft()}>&#8249;</button>
            <div className="menu-items">
                <div className="menu-item">
                    <img src="./images/curries/chicken-curry.png" className="img-fluid" alt="Chicken Curry" />
                    <h3>Chicken Curry</h3>
                    <p>Spicy chicken curry made with a blend of traditional spices.</p>
                    <p className="price">$12.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/veg-korma.png" className="img-fluid" alt="Vegetable Korma" />
                    <h3>Vegetable Korma</h3>
                    <p>Creamy vegetable korma with a mix of fresh veggies and rich spices.</p>
                    <p className="price">$9.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/mutton-curry.png" className="img-fluid" alt="Mutton Curry" />
                    <h3>Mutton Curry</h3>
                    <p>Rich and aromatic mutton curry with tender pieces of meat.</p>
                    <p className="price">$14.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/egg-curry.png" className="img-fluid" alt="Egg Curry" />
                    <h3>Egg Curry</h3>
                    <p>Simple and delicious egg curry with a spicy tomato-based sauce.</p>
                    <p className="price">$8.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/prawn-curry.png" className="img-fluid" alt="Prawn Curry" />
                    <h3>Prawn Curry</h3>
                    <p>Aromatic prawn curry with succulent prawns and a blend of spices.</p>
                    <p className="price">$13.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/lamb-curry.png" className="img-fluid" alt="Lamb Curry" />
                    <h3>Lamb Curry</h3>
                    <p>Delicious lamb curry slow-cooked to perfection with spices.</p>
                    <p className="price">$15.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/sambar.png" className="img-fluid" alt="Sambar" />
                    <h3>Sambar</h3>
                    <p>Traditional South Indian lentil stew with vegetables and spices.</p>
                    <p className="price">$6.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/fish-curry.png" className="img-fluid" alt="Fish Curry" />
                    <h3>Fish Curry</h3>
                    <p>Spicy and tangy fish curry made with fresh fish and tamarind.</p>
                    <p className="price">$13.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/dal-tadka.png" className="img-fluid" alt="Dal Tadka" />
                    <h3>Dal Tadka</h3>
                    <p>Yellow lentils tempered with spices, served with rice or bread.</p>
                    <p className="price">$7.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/kerala-chicken-roast.png" className="img-fluid" alt="Kerala Chicken Roast" />
                    <h3>Kerala Chicken Roast</h3>
                    <p>Roasted chicken in a spicy and flavorful Kerala-style masala.</p>
                    <p className="price">$14.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/andhra-chicken-curry.png" className="img-fluid" alt="Andhra Chicken Curry" />
                    <h3>Andhra Chicken Curry</h3>
                    <p>Hot and spicy chicken curry from Andhra Pradesh.</p>
                    <p className="price">$13.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/chettinad-chicken-curry.png" className="img-fluid" alt="Chettinad Chicken Curry" />
                    <h3>Chettinad Chicken Curry</h3>
                    <p>Aromatic chicken curry with a blend of Chettinad spices.</p>
                    <p className="price">$14.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/malabar-fish-curry.png" className="img-fluid" alt="Malabar Fish Curry" />
                    <h3>Malabar Fish Curry</h3>
                    <p>Traditional fish curry from the Malabar region.</p>
                    <p className="price">$14.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/paneer-butter-masala.png" className="img-fluid" alt="Paneer Butter Masala" />
                    <h3>Paneer Butter Masala</h3>
                    <p>Rich and creamy paneer butter masala.</p>
                    <p className="price">$12.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/hyderabadi-mutton-curry.png" className="img-fluid" alt="Hyderabadi Mutton Curry" />
                    <h3>Hyderabadi Mutton Curry</h3>
                    <p>Spicy mutton curry with flavors from Hyderabad.</p>
                    <p className="price">$15.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/tomato-pappu.png" className="img-fluid" alt="Tomato Pappu" />
                    <h3>Tomato Pappu</h3>
                    <p>Delicious lentil curry with tomatoes.</p>
                    <p className="price">$8.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/mixed-vegetable-kurma.png" className="img-fluid" alt="Mixed Vegetable Kurma" />
                    <h3>Mixed Vegetable Kurma</h3>
                    <p>Creamy and flavorful vegetable kurma.</p>
                    <p className="price">$9.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/guthi-vankaya-kura.png" className="img-fluid" alt="Guthi Vankaya Kura" />
                    <h3>Guthi Vankaya Kura</h3>
                    <p>Stuffed eggplant curry from Andhra Pradesh.</p>
                    <p className="price">$12.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/mysore-mutton-curry.png" className="img-fluid" alt="Mysore Mutton Curry" />
                    <h3>Mysore Mutton Curry</h3>
                    <p>Spicy mutton curry from Mysore.</p>
                    <p className="price">$15.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="menu-item">
                    <img src="./images/curries/coconut-shrimp-curry.png" className="img-fluid" alt="Coconut Shrimp Curry" />
                    <h3>Coconut Shrimp Curry</h3>
                    <p>Flavorful shrimp curry with coconut milk.</p>
                    <p className="price">$14.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <button className="scroll-button right" onclick={scrollRight()}>&#8250;</button>
        </div>
    </section>    

    </>
  )
}

export default Menu
