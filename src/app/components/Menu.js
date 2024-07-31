"use client";

import React, {useState} from "react";
import "../styles/_menu.scss";
import MenuItem from "./MenuItem";
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';
import useIsSmallScreen from '../hooks/useIsSmallScreen'; // Adjust the import path as needed

const menuSections = [
  {
    heading: "Specials",
    menuItems: [
      {
        id: 1,
        url: "/images/specials/kerala-parotta.png",
        title: "Kerala Parotta with Chicken Fry",
        desc: "Flaky and layered parotta served with spicy and flavorful chicken fry, a popular dish from Kerala.",
        price: "15.99",
      },
      {
        id: 2,
        url: "/images/specials/appam-stew.png",
        title: "Appam with Vegetable Stew",
        desc: "Soft and fluffy appams served with a mild and flavorful vegetable stew, a popular dish from Kerala.",
        price: "10.99",
      },
      {
        id: 3,
        url: "/images/specials/kori-rotti.png",
        title: "Kori Rotti",
        desc: "A traditional Mangalorean dish made with spicy chicken curry served with crispy rice rottis.",
        price: "14.99",
      },
      {
        id: 4,
        url: "/images/rice-items/hyderabadi-biryani.png",
        title: "Hyderabadi Dum Biryani",
        desc: "Aromatic and flavorful biryani made with basmati rice, marinated meat, and traditional Hyderabadi spices, cooked on dum.",
        price: "14.99",
      },
      {
        id: 5,
        url: "/images/curries/mutton-curry.png",
        title: "Gongura Mutton",
        desc: "A tangy and spicy mutton curry made with Gongura (sorrel leaves), a specialty from Andhra Pradesh.",
        price: "16.99",
      },
      {
        id: 6,
        url: "/images/rice-items/hyderabadi-biryani.png",
        title: "Thalassery Biryani",
        desc: "A unique biryani from the Malabar region, made with small-grained rice and a special blend of spices.",
        price: "13.99",
      },
      {
        id: 7,
        url: "/images/curries/prawn-curry.png",
        title: "Kerala Prawn Curry",
        desc: "Succulent prawns cooked in a coconut milk-based curry with traditional Kerala spices.",
        price: "15.99",
      },
      {
        id: 8,
        url: "/images/curries/chettinad-chicken-curry.png",
        title: "Chettinad Chicken",
        desc: "A spicy and aromatic chicken curry from the Chettinad region, made with a blend of roasted spices.",
        price: "13.99",
      },
      {
        id: 9,
        url: "/images/curries/mutton-curry.png",
        title: "Mutton Rogan Josh",
        desc: "A rich and aromatic mutton curry from Kashmir, made with yogurt, spices, and herbs.",
        price: "16.99",
      }
    ],
  },
  {
    heading: "Rice Items",
    menuItems: [
      {
        id: 10,
        url: "/images/rice-items/chicken-biryani.png",
        title: "Chicken Biryani",
        desc: "Deliciously spiced and fragrant biryani with tender chicken pieces.",
        price: "12.99",
      },
      {
        id: 11,
        url: "/images/rice-items/veg-fried-rice.png",
        title: "Veg Fried Rice",
        desc: "Flavorful fried rice with fresh vegetables and a hint of soy sauce.",
        price: "9.99",
      },
      {
        id: 12,
        url: "/images/rice-items/mutton-biryani.png",
        title: "Mutton Biryani",
        desc: "Rich and aromatic biryani with succulent pieces of mutton.",
        price: "14.99",
      },
      {
        id: 13,
        url: "/images/rice-items/egg-fried-rice.png",
        title: "Egg Fried Rice",
        desc: "Simple and tasty fried rice with scrambled eggs and vegetables.",
        price: "8.99",
      },
      {
        id: 14,
        url: "/images/rice-items/prawns-biryani.png",
        title: "Prawn Biryani",
        desc: "Aromatic biryani with succulent prawns and a blend of spices.",
        price: "13.99",
      },
      {
        id: 15,
        url: "/images/rice-items/bisi-bele-bath.png",
        title: "Bisi Bele Bath",
        desc: "A spicy, flavorful rice dish cooked with lentils, vegetables, tamarind, and a special blend of spices.",
        price: "10.99",
      },
      {
        id: 16,
        url: "/images/rice-items/lemon-rice.png",
        title: "Lemon Rice (Chitranna)",
        desc: "Rice flavored with lemon juice, turmeric, and garnished with peanuts, curry leaves, and mustard seeds.",
        price: "8.99",
      },
      {
        id: 17,
        url: "/images/rice-items/curd-rice.png",
        title: "Curd Rice (Thayir Sadam)",
        desc: "Rice mixed with yogurt and seasoned with mustard seeds, curry leaves, and sometimes garnished with pomegranate seeds or grapes.",
        price: "7.99",
      },
      {
        id: 18,
        url: "/images/rice-items/tamarind-rice.png",
        title: "Tamarind Rice (Puliyodarai)",
        desc: "Rice cooked with tamarind paste, peanuts, and a blend of spices, often served as prasadam in temples.",
        price: "9.99",
      },
      {
        id: 19,
        url: "/images/rice-items/coconut-rice.png",
        title: "Coconut Rice",
        desc: "Rice flavored with grated coconut, curry leaves, mustard seeds, and sometimes cashews.",
        price: "8.99",
      },
      {
        id: 20,
        url: "/images/rice-items/hyderabadi-biryani.png",
        title: "Hyderabadi Biryani",
        desc: "A famous layered biryani with basmati rice, marinated meat (chicken or mutton), and aromatic spices.",
        price: "14.99",
      },
      {
        id: 21,
        url: "/images/rice-items/vegetable-biryani.png",
        title: "Vegetable Biryani",
        desc: "A fragrant rice dish with mixed vegetables, aromatic spices, and herbs.",
        price: "11.99",
      },
      {
        id: 22,
        url: "/images/rice-items/paneer-biryani.png",
        title: "Paneer Biryani",
        desc: "A flavorful biryani with marinated paneer cubes and basmati rice.",
        price: "12.99",
      },
      {
        id: 23,
        url: "/images/rice-items/jeera-rice.png",
        title: "Jeera Rice",
        desc: "Rice flavored with cumin seeds and sometimes garnished with fried onions.",
        price: "7.99",
      },
      {
        id: 24,
        url: "/images/rice-items/vangi-bath.png",
        title: "Vangi Bath",
        desc: "Rice cooked with eggplant (brinjal) and a special spice blend.",
        price: "10.99",
      },
      {
        id: 25,
        url: "/images/rice-items/biryani-bath.png",
        title: "Biryani Bath",
        desc: "A simplified version of biryani with a mix of vegetables and spices, often cooked as a one-pot dish.",
        price: "10.99",
      },
      {
        id: 26,
        url: "/images/rice-items/pudina-rice.png",
        title: "Pudina Rice",
        desc: "Rice flavored with mint leaves, green chilies, and spices.",
        price: "9.99",
      },
      {
        id: 27,
        url: "/images/rice-items/kovakkai-rice.png",
        title: "Kovakkai Rice (Tindora Rice)",
        desc: "Rice cooked with ivy gourd (tindora), spices, and garnished with coriander leaves.",
        price: "9.99",
      },
      {
        id: 28,
        url: "/images/rice-items/sakkarai-pongal.png",
        title: "Sakkarai Pongal",
        desc: "A sweet rice dish made with jaggery, ghee, and flavored with cardamom, often garnished with cashews and raisins.",
        price: "8.99",
      },
      {
        id: 29,
        url: "/images/rice-items/sweet-coconut-rice.png",
        title: "Sweet Coconut Rice",
        desc: "Rice cooked with jaggery, grated coconut, and flavored with cardamom.",
        price: "8.99",
      },
    ],
  },
  {
    heading: "Curries",
    menuItems: [
      {
        id: 30,
        url: "/images/curries/chicken-curry.png",
        title: "Chicken Curry",
        desc: "Spicy chicken curry made with a blend of traditional spices.",
        price: "12.99",
      },
      {
        id: 31,
        url: "/images/curries/veg-korma.png",
        title: "Vegetable Korma",
        desc: "Creamy vegetable korma with a mix of fresh veggies and rich spices.",
        price: "9.99",
      },
      {
        id: 32,
        url: "/images/curries/mutton-curry.png",
        title: "Mutton Curry",
        desc: "Rich and aromatic mutton curry with tender pieces of meat.",
        price: "14.99",
      },
      {
        id: 33,
        url: "/images/curries/egg-curry.png",
        title: "Egg Curry",
        desc: "Simple and delicious egg curry with a spicy tomato-based sauce.",
        price: "8.99",
      },
      {
        id: 34,
        url: "/images/curries/prawn-curry.png",
        title: "Prawn Curry",
        desc: "Aromatic prawn curry with succulent prawns and a blend of spices.",
        price: "13.99",
      },
      {
        id: 35,
        url: "/images/curries/lamb-curry.png",
        title: "Lamb Curry",
        desc: "Delicious lamb curry slow-cooked to perfection with spices.",
        price: "15.99",
      },
      {
        id: 36,
        url: "/images/curries/sambar.png",
        title: "Sambar",
        desc: "Traditional South Indian lentil stew with vegetables and spices.",
        price: "6.99",
      },
      {
        id: 37,
        url: "/images/curries/fish-curry.png",
        title: "Fish Curry",
        desc: "Spicy and tangy fish curry made with fresh fish and tamarind.",
        price: "13.99",
      },
      {
        id: 38,
        url: "/images/curries/dal-tadka.png",
        title: "Dal Tadka",
        desc: "Yellow lentils tempered with spices, served with rice or bread.",
        price: "7.99",
      },
      {
        id: 39,
        url: "/images/curries/kerala-chicken-roast.png",
        title: "Kerala Chicken Roast",
        desc: "Roasted chicken in a spicy and flavorful Kerala-style masala.",
        price: "14.99",
      },
      {
        id: 40,
        url: "/images/curries/andhra-chicken-curry.png",
        title: "Andhra Chicken Curry",
        desc: "Hot and spicy chicken curry from Andhra Pradesh.",
        price: "13.99",
      },
      {
        id: 41,
        url: "/images/curries/chettinad-chicken-curry.png",
        title: "Chettinad Chicken Curry",
        desc: "Aromatic chicken curry with a blend of Chettinad spices.",
        price: "14.99",
      },
      {
        id: 42,
        url: "/images/curries/malabar-fish-curry.png",
        title: "Malabar Fish Curry",
        desc: "Traditional fish curry from the Malabar region.",
        price: "14.99",
      },
      {
        id: 43,
        url: "/images/curries/paneer-butter-masala.png",
        title: "Paneer Butter Masala",
        desc: "Rich and creamy paneer butter masala.",
        price: "12.99",
      },
      {
        id: 44,
        url: "/images/curries/hyderabadi-mutton-curry.png",
        title: "Hyderabadi Mutton Curry",
        desc: "Spicy mutton curry with flavors from Hyderabad.",
        price: "15.99",
      },
      {
        id: 45,
        url: "/images/curries/tomato-pappu.png",
        title: "Tomato Pappu",
        desc: "Delicious lentil curry with tomatoes.",
        price: "8.99",
      },
      {
        id: 46,
        url: "/images/curries/mixed-vegetable-kurma.png",
        title: "Mixed Vegetable Kurma",
        desc: "Creamy and flavorful vegetable kurma.",
        price: "9.99",
      },
      {
        id: 47,
        url: "/images/curries/guthi-vankaya-kura.png",
        title: "Guthi Vankaya Kura",
        desc: "Stuffed eggplant curry from Andhra Pradesh.",
        price: "12.99",
      },
      {
        id: 48,
        url: "/images/curries/mysore-mutton-curry.png",
        title: "Mysore Mutton Curry",
        desc: "Spicy mutton curry from Mysore.",
        price: "15.99",
      },
      {
        id: 49,
        url: "/images/curries/coconut-shrimp-curry.png",
        title: "Coconut Shrimp Curry",
        desc: "Flavorful shrimp curry with coconut milk.",
        price: "14.99",
      },
    ],
  },
  {
    heading: "Snacks",
    menuItems: [
      {
        id: 50,
        url: "/images/snacks/samosa.png",
        title: "Samosa",
        desc: "Crispy and savory samosas filled with spiced potatoes and peas.",
        price: "3.99",
      },
      {
        id: 51,
        url: "/images/snacks/medu-vada.png",
        title: "Medu Vada",
        desc: "Crispy and fluffy lentil fritters served with chutney and sambar.",
        price: "4.99",
      },
      {
        id: 52,
        url: "/images/snacks/onion-bajji.png",
        title: "Onion Bajji",
        desc: "Crispy onion fritters seasoned with spices.",
        price: "3.49",
      },
      {
        id: 53,
        url: "/images/snacks/vegetable-pakora.png",
        title: "Vegetable Pakora",
        desc: "Mixed vegetable fritters seasoned with spices and served with chutney.",
        price: "4.49",
      },
      {
        id: 54,
        url: "/images/snacks/punugulu.png",
        title: "Punugulu",
        desc: "Crispy and savory fritters made from fermented dosa batter.",
        price: "3.99",
      },
      {
        id: 55,
        url: "/images/snacks/murukku.png",
        title: "Murukku",
        desc: "Crunchy and savory spiral-shaped snacks made from rice flour.",
        price: "2.99",
      },
      {
        id: 56,
        url: "/images/snacks/aloo-bonda.png",
        title: "Aloo Bonda",
        desc: "Deep-fried potato balls seasoned with spices and coated with gram flour.",
        price: "3.99",
      },
      {
        id: 57,
        url: "/images/snacks/chilli-bajji.png",
        title: "Chilli Bajji",
        desc: "Spicy green chilies battered and deep-fried to a crispy finish.",
        price: "3.49",
      },
      {
        id: 58,
        url: "/images/snacks/masala-vada.png",
        title: "Masala Vada",
        desc: "Crispy lentil fritters mixed with spices and herbs.",
        price: "4.49",
      },
      {
        id: 59,
        url: "/images/snacks/kara-boondi.png",
        title: "Kara Boondi",
        desc: "Spicy and crunchy fried gram flour balls.",
        price: "2.99",
      },
      {
        id: 60,
        url: "/images/snacks/pappad.png",
        title: "Pappad",
        desc: "Thin and crispy lentil crackers served with chutneys.",
        price: "1.99",
      },
    ],
  },
  {
    heading: "Tiffins",
    menuItems: [
      {
        id: 61,
        url: "/images/tiffins/idli.png",
        title: "Idli",
        desc: "Steamed rice cakes served with coconut chutney and sambar.",
        price: "6.99",
      },
      {
        id: 62,
        url: "/images/tiffins/dosa.png",
        title: "Dosa",
        desc: "Crispy and thin fermented rice batter crepe served with chutney and sambar.",
        price: "8.99",
      },
      {
        id: 63,
        url: "/images/tiffins/masala-dosa.png",
        title: "Masala Dosa",
        desc: "Crispy dosa filled with spiced potato filling, served with chutney and sambar.",
        price: "9.99",
      },
      {
        id: 64,
        url: "/images/tiffins/uttapam.png",
        title: "Uttapam",
        desc: "Thick pancake made from fermented rice batter, topped with vegetables.",
        price: "7.99",
      },
      {
        id: 65,
        url: "/images/tiffins/vada.png",
        title: "Vada",
        desc: "Crispy and savory fried lentil donuts served with chutney and sambar.",
        price: "6.99",
      },
      {
        id: 66,
        url: "/images/tiffins/poori.png",
        title: "Poori",
        desc: "Deep-fried bread served with potato curry.",
        price: "7.99",
      },
      {
        id: 67,
        url: "/images/tiffins/medu-vada.png",
        title: "Medu Vada",
        desc: "Soft and crispy lentil donuts served with chutney and sambar.",
        price: "7.49",
      },
      {
        id: 68,
        url: "/images/tiffins/pongal.png",
        title: "Pongal",
        desc: "Comforting rice and lentil dish tempered with spices and ghee.",
        price: "8.49",
      },
      {
        id: 69,
        url: "/images/tiffins/bisibele-bath.png",
        title: "Bisibele Bath",
        desc: "Spicy rice dish cooked with lentils and vegetables.",
        price: "8.99",
      },
      {
        id: 70,
        url: "/images/tiffins/rava-dosa.png",
        title: "Rava Dosa",
        desc: "Thin and crispy semolina crepe served with chutney and sambar.",
        price: "8.99",
      },
      {
        id: 71,
        url: "/images/tiffins/rava-idli.png",
        title: "Rava Idli",
        desc: "Soft and fluffy semolina cakes served with coconut chutney and sambar.",
        price: "6.99",
      },
      {
        id: 72,
        url: "/images/tiffins/set-dosa.png",
        title: "Set Dosa",
        desc: "Soft and fluffy rice batter pancakes served in sets, accompanied by chutney and sambar.",
        price: "8.49",
      },
      {
        id: 73,
        url: "/images/tiffins/bonda.png",
        title: "Bonda",
        desc: "Spicy potato balls deep-fried in chickpea flour batter, served with chutney.",
        price: "7.49",
      },
      {
        id:74,
        "url": "/images/tiffins/semiya-upma.png",
        "title": "Semiya Upma",
        "desc": "Vermicelli noodles cooked with vegetables and tempered with spices.",
        "price": "7.49"
      },
      {
        id:75,
        "url": "/images/tiffins/adai.png",
        "title": "Adai",
        "desc": "Lentil and rice pancake served with chutney.",
        "price": "8.49"
      },
      {
        id:76,
        "url": "/images/tiffins/kesari.png",
        "title": "Kesari",
        "desc": "Sweet semolina dessert flavored with saffron and ghee.",
        "price": "6.49"
      },
      {
        id:77,
        "url": "/images/tiffins/upma.png",
        "title": "Upma",
        "desc": "Savory semolina dish cooked with vegetables and tempered with spices.",
        "price": "6.99"
      }
    ]
  },
  {heading:"Beverages", menuItems:[]}
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Specials");
  const isSmallScreen = useIsSmallScreen();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getDisplayedSections = () => {
    if (activeTab === "All") {
      return menuSections;
    } else {
      return menuSections.filter((section) => section.heading === activeTab);
    }
  };

  const scrollRight = (id) => {
    const sect = document.getElementById(id);
    if (sect) {
      sect.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  const scrollLeft = (id) => {
    const sect = document.getElementById(id);
    if (sect) {
      sect.scrollBy({ left: -150, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "All" ? "activeTab" : ""}`}
          onClick={() => handleTabClick("All")}
        >
          All
        </button>
        {menuSections.map((section) => (
          <button
            key={section.heading}
            className={`tab ${
              activeTab === section.heading ? "activeTab" : "tab"
            }`}
            onClick={() => handleTabClick(section.heading)}
          >
            {section.heading}
          </button>
        ))}
      </div>

      {getDisplayedSections().map((section) => {
        return (
          <section key={section.heading} className="menu-section">
            <h2>{section.heading}</h2>
            <div className="menu-items-wrapper" id="menu-section">
              <div
                id={section.heading.toLowerCase().replace(/ /g, "-")}
                className="menu-items"
              >
                {section.menuItems.map((menuItem) => {
                  return (
                    <MenuItem
                      id={menuItem.id}
                      key={menuItem.id}
                      url={menuItem.url}
                      title={menuItem.title}
                      desc={menuItem.desc}
                      price={menuItem.price}
                    />
                  );
                })}
              </div>
              {!isSmallScreen && (
                <>
                  <ChevronLeft
                    className={"scroll-button left"}
                    size={30}
                    onClick={() =>
                      scrollLeft(
                        section.heading.toLowerCase().replace(/ /g, "-")
                      )
                    }
                  />

                  <ChevronRight
                    className={"scroll-button right"}
                    size={30}
                    onClick={() =>
                      scrollRight(
                        section.heading.toLowerCase().replace(/ /g, "-")
                      )
                    }
                  />
                </>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Menu;
