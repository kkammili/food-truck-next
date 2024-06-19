"use client"

import * as React from "react";
import "../styles/_menu.scss";
import MenuItem from "./MenuItem";

const menuSection = [
  {
    heading: "Rice Items",
    menuItems: [
      {
        url: "/images/rice-items/chicken-biryani.png",
        title: "Chicken Biryani",
        desc: "Deliciously spiced and fragrant biryani with tender chicken pieces.",
        price: "$12.99",
      },
      {
        url: "/images/rice-items/veg-fried-rice.png",
        title: "Veg Fried Rice",
        desc: "Flavorful fried rice with fresh vegetables and a hint of soy sauce.",
        price: "$9.99",
      },
      {
        url: "/images/rice-items/mutton-biryani.png",
        title: "Mutton Biryani",
        desc: "Rich and aromatic biryani with succulent pieces of mutton.",
        price: "$14.99",
      },
      {
        url: "/images/rice-items/egg-fried-rice.png",
        title: "Egg Fried Rice",
        desc: "Simple and tasty fried rice with scrambled eggs and vegetables.",
        price: "$8.99",
      },
      {
        url: "/images/rice-items/prawns-biryani.png",
        title: "Prawn Biryani",
        desc: "Aromatic biryani with succulent prawns and a blend of spices.",
        price: "$13.99",
      }
    ],
  },
  {
    heading: "South Indian Curries and Gravy",
    menuItems: [
      {
        url: "/images/curries/chicken-curry.png",
        title: "Chicken Curry",
        desc: "Spicy chicken curry made with a blend of traditional spices.",
        price: "$12.99",
      },
      {
        url: "/images/curries/veg-korma.png",
        title: "Vegetable Korma",
        desc: "Creamy vegetable korma with a mix of fresh veggies and rich spices.",
        price: "$9.99",
      },
      {
        url: "/images/curries/mutton-curry.png",
        title: "Mutton Curry",
        desc: "Rich and aromatic mutton curry with tender pieces of meat.",
        price: "$14.99",
      },
      {
        url: "/images/curries/egg-curry.png",
        title: "Egg Curry",
        desc: "Simple and delicious egg curry with a spicy tomato-based sauce.",
        price: "$8.99",
      },
      {
        url: "/images/curries/prawn-curry.png",
        title: "Prawn Curry",
        desc: "Aromatic prawn curry with succulent prawns and a blend of spices.",
        price: "$13.99",
      },
      {
        url: "/images/curries/lamb-curry.png",
        title: "Lamb Curry",
        desc: "Delicious lamb curry slow-cooked to perfection with spices.",
        price: "$15.99",
      },
      {
        url: "/images/curries/sambar.png",
        title: "Sambar",
        desc: "Traditional South Indian lentil stew with vegetables and spices.",
        price: "$6.99",
      },
      {
        url: "/images/curries/fish-curry.png",
        title: "Fish Curry",
        desc: "Spicy and tangy fish curry made with fresh fish and tamarind.",
        price: "$13.99",
      },
      {
        url: "/images/curries/dal-tadka.png",
        title: "Dal Tadka",
        desc: "Yellow lentils tempered with spices, served with rice or bread.",
        price: "$7.99",
      },
      {
        url: "/images/curries/kerala-chicken-roast.png",
        title: "Kerala Chicken Roast",
        desc: "Roasted chicken in a spicy and flavorful Kerala-style masala.",
        price: "$14.99",
      },
      {
        url: "/images/curries/andhra-chicken-curry.png",
        title: "Andhra Chicken Curry",
        desc: "Hot and spicy chicken curry from Andhra Pradesh.",
        price: "$13.99",
      },
      {
        url: "/images/curries/chettinad-chicken-curry.png",
        title: "Chettinad Chicken Curry",
        desc: "Aromatic chicken curry with a blend of Chettinad spices.",
        price: "$14.99",
      },
      {
        url: "/images/curries/malabar-fish-curry.png",
        title: "Malabar Fish Curry",
        desc: "Traditional fish curry from the Malabar region.",
        price: "$14.99",
      },
      {
        url: "/images/curries/paneer-butter-masala.png",
        title: "Paneer Butter Masala",
        desc: "Rich and creamy paneer butter masala.",
        price: "$12.99",
      },
      {
        url: "/images/curries/hyderabadi-mutton-curry.png",
        title: "Hyderabadi Mutton Curry",
        desc: "Spicy mutton curry with flavors from Hyderabad.",
        price: "$15.99",
      },
      {
        url: "/images/curries/tomato-pappu.png",
        title: "Tomato Pappu",
        desc: "Delicious lentil curry with tomatoes.",
        price: "$8.99",
      },
      {
        url: "/images/curries/mixed-vegetable-kurma.png",
        title: "Mixed Vegetable Kurma",
        desc: "Creamy and flavorful vegetable kurma.",
        price: "$9.99",
      },
      {
        url: "/images/curries/guthi-vankaya-kura.png",
        title: "Guthi Vankaya Kura",
        desc: "Stuffed eggplant curry from Andhra Pradesh.",
        price: "$12.99",
      },
      {
        url: "/images/curries/mysore-mutton-curry.png",
        title: "Mysore Mutton Curry",
        desc: "Spicy mutton curry from Mysore.",
        price: "$15.99",
      },
      {
        url: "/images/curries/coconut-shrimp-curry.png",
        title: "Coconut Shrimp Curry",
        desc: "Flavorful shrimp curry with coconut milk.",
        price: "$14.99",
      },
    ],
  },
];

const Menu = () => {
    const scrollRight = (id) => {
        const sect = document.getElementById(id);
        if (sect) {
          sect.scrollBy({ left: 150, behavior: 'smooth' });
        }
      };
    
      const scrollLeft = (id) => {
        const sect = document.getElementById(id);
        if (sect) {
          sect.scrollBy({ left: -150, behavior: 'smooth' });
        }
      };
  return (
    <>
      {menuSection.map((section) => {
        return (
          <section key={section.heading} className="menu-section">
            <h2>{section.heading}</h2>
            <div className="menu-items-wrapper">            
              <div id={section.heading.toLowerCase().replace(/ /g, '-')} className="menu-items">
                {section.menuItems.map((menuItem) => {
                  return (
                    <MenuItem
                      key={menuItem.title}
                      url={menuItem.url}
                      title={menuItem.title}
                      desc={menuItem.desc}
                      price={menuItem.price}
                    />
                  );
                })}
              </div>
             
              <button className="scroll-button left" 
              onClick={() => scrollLeft(section.heading.toLowerCase().replace(/ /g, '-'))}
              >
                &#8249;
              </button>

              <button id={section.heading} className="scroll-button right" 
              onClick={() => scrollRight(section.heading.toLowerCase().replace(/ /g, '-'))}
              >
                &#8250;
            </button>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Menu;
