import React from "react";
import ReactDOM from "react-dom/client"

/**
 * -Header
 *  - Logo
 *  - Nav bar
 * -Body
 *  -Search bar
 *  -Restaurant container
 *    -Name, cuisine, ETA, rating
 * -Footer
 *  -copyright
 *  - adreess
 */

const Header = () => {
   return (
      <div className="header">
          <div className="logo">
            <img className="logo-img"src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"></img>
          </div>
          <div className="nav-links">
            <ul>
               <li>Home</li>
               <li>Sign In</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
          </div>
      </div>
      
   )
}

const resList = [
   {
     "info": {
       "id": "43382",
       "name": "Subway",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/4649bac4-c729-43da-9f0d-85852c1cfb6c_43382.JPG",
       "locality": "Aerocity",
       "areaName": "Aerocity",
       "costForTwo": "₹350 for two",
       "cuisines": [
         "sandwich",
         "Salads",
         "wrap",
         "Healthy Food"
       ],
       "avgRating": 4.5,
       "parentId": "2",
       "avgRatingString": "4.5",
       "totalRatingsString": "4.9K+",
       "sla": {
         "deliveryTime": 44,
         "lastMileTravel": 5,
         "serviceability": "SERVICEABLE",
         "slaString": "40-45 mins",
         "lastMileTravelString": "5.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-14 22:35:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹119"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "4.1",
           "ratingCount": "230"
         },
         "source": "GOOGLE",
         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/subway-aerocity-rest43382",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "254000",
       "name": "McDonald's",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/145b1a1a-132d-40d9-9f18-14f1fb49d463_254000.JPG",
       "locality": "Ambience Mall",
       "areaName": "Vasant Kunj",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "American"
       ],
       "avgRating": 4.4,
       "parentId": "630",
       "avgRatingString": "4.4",
       "totalRatingsString": "6.6K+",
       "sla": {
         "deliveryTime": 58,
         "lastMileTravel": 8.7,
         "serviceability": "SERVICEABLE",
         "slaString": "55-60 mins",
         "lastMileTravelString": "8.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-15 00:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Burger.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Burger.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹39"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/mcdonalds-ambience-mall-vasant-kunj-rest254000",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "43415",
       "name": "Biryani Blues",
       "cloudinaryImageId": "97377e54937c079fe269d744aa66274a",
       "locality": "Aerocity",
       "areaName": "Aerocity",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Biryani",
         "Hyderabadi",
         "Lucknowi",
         "Kebabs",
         "Desserts",
         "Beverages"
       ],
       "avgRating": 4.3,
       "parentId": "13813",
       "avgRatingString": "4.3",
       "totalRatingsString": "4.7K+",
       "sla": {
         "deliveryTime": 36,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "35-40 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-14 23:30:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Biryani.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Biryani.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹399",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "3.8",
           "ratingCount": "84"
         },
         "source": "GOOGLE",
         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/biryani-blues-aerocity-rest43415",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "70806",
       "name": "Sagar Ratna",
       "cloudinaryImageId": "vcdvxz2tr0v2a7sg31a8",
       "locality": "Worldmark 1",
       "areaName": "Aerocity",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "South Indian",
         "Desserts"
       ],
       "avgRating": 4.4,
       "veg": true,
       "parentId": "793",
       "avgRatingString": "4.4",
       "totalRatingsString": "1.6K+",
       "sla": {
         "deliveryTime": 35,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "35-40 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-14 23:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/sagar-ratna-worldmark-1-aerocity-rest70806",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "107079",
       "name": "Flavors Of Chennai",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/f4906ff6-d60c-4d81-855c-ec85ac9d5ce2_107079 (1).jpg",
       "locality": "Vasant Kunj",
       "areaName": "Vasant Kunj",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "South Indian"
       ],
       "avgRating": 4.4,
       "parentId": "8410",
       "avgRatingString": "4.4",
       "totalRatingsString": "11K+",
       "sla": {
         "deliveryTime": 44,
         "lastMileTravel": 8,
         "serviceability": "SERVICEABLE",
         "slaString": "40-45 mins",
         "lastMileTravelString": "8.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-14 22:30:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "options available"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹69"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "3.9",
           "ratingCount": "42"
         },
         "source": "GOOGLE",
         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/flavors-of-chennai-vasant-kunj-rest107079",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "719681",
       "name": "Blue Tokai Coffee Roasters",
       "cloudinaryImageId": "1a0521375f07155eda2f1ed263206831",
       "locality": "Aerocity",
       "areaName": "Aerocity",
       "costForTwo": "₹600 for two",
       "cuisines": [
         "Cafe",
         "Coffee",
         "Beverages"
       ],
       "avgRating": 4.4,
       "parentId": "2682",
       "avgRatingString": "4.4",
       "totalRatingsString": "68",
       "sla": {
         "deliveryTime": 40,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "40-45 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-15 00:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "15% OFF",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/blue-tokai-coffee-roasters-aerocity-rest719681",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "26796",
       "name": "Theobroma",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/1cf206f7-7dd8-4e20-adde-50b483e3603e_26796.jpg",
       "locality": "DLF Cyber City",
       "areaName": "DLF Cyber City",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Bakery",
         "Desserts"
       ],
       "avgRating": 4.6,
       "parentId": "1040",
       "avgRatingString": "4.6",
       "totalRatingsString": "16K+",
       "sla": {
         "deliveryTime": 51,
         "lastMileTravel": 9.7,
         "serviceability": "SERVICEABLE",
         "slaString": "50-55 mins",
         "lastMileTravelString": "9.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-14 23:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Desserts.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Desserts.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹39"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "4.0",
           "ratingCount": "533"
         },
         "source": "GOOGLE",
         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/theobroma-dlf-cyber-city-rest26796",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "60565",
       "name": "Chaayos Chai+Snacks=Relax",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_60565.JPG",
       "locality": "Worldmark 1",
       "areaName": "Aerocity",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "Beverages",
         "Chaat",
         "Snacks",
         "Bakery",
         "Street Food",
         "healthy",
         "Home Food",
         "Maharashtrian",
         "Italian",
         "Desserts"
       ],
       "avgRating": 4.5,
       "parentId": "281782",
       "avgRatingString": "4.5",
       "totalRatingsString": "3.3K+",
       "sla": {
         "deliveryTime": 37,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "35-40 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-14 23:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹199"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/chaayos-chai-snacks-relax-worldmark-1-aerocity-rest60565",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "795511",
       "name": "Pret A Manger",
       "cloudinaryImageId": "2ad6ae997870b6e8dd2c9a42150df948",
       "locality": "Indira Gandhi International Airport",
       "areaName": "Aerocity",
       "costForTwo": "₹600 for two",
       "cuisines": [
         "Cafe",
         "Snacks",
         "Beverages",
         "Salads",
         "Desserts"
       ],
       "avgRating": 4.4,
       "parentId": "458911",
       "avgRatingString": "4.4",
       "totalRatingsString": "66",
       "sla": {
         "deliveryTime": 43,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "40-45 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-14 23:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹90"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/pret-a-manger-indira-gandhi-international-airport-aerocity-rest795511",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "719645",
       "name": "Suchali's Artisan Bakehouse",
       "cloudinaryImageId": "f9f262d0c80a41de4c1a890eb36d1085",
       "locality": "Aerocity",
       "areaName": "Aerocity",
       "costForTwo": "₹600 for two",
       "cuisines": [
         "Bakery",
         "Desserts",
         "Beverages"
       ],
       "avgRating": 4.4,
       "parentId": "196351",
       "avgRatingString": "4.4",
       "totalRatingsString": "21",
       "sla": {
         "deliveryTime": 39,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "35-40 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-15 00:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "15% OFF",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/suchalis-artisan-bakehouse-aerocity-rest719645",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "264238",
       "name": "Paul",
       "cloudinaryImageId": "pveufcnpw8pevxziiil2",
       "locality": " Vasant Kunj",
       "areaName": "Vasant Kunj",
       "costForTwo": "₹1500 for two",
       "cuisines": [
         "European",
         "Desserts",
         "Bakery",
         "Italian"
       ],
       "avgRating": 4.4,
       "parentId": "8163",
       "avgRatingString": "4.4",
       "totalRatingsString": "1.4K+",
       "sla": {
         "deliveryTime": 54,
         "lastMileTravel": 8.7,
         "serviceability": "SERVICEABLE",
         "slaString": "50-55 mins",
         "lastMileTravelString": "8.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-14 22:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹100"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "4.2",
           "ratingCount": "840"
         },
         "source": "GOOGLE",
         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/paul-vasant-kunj-rest264238",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "223897",
       "name": "Dunkin' - Donuts & Coffee",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/1/c72814b2-69ce-4aeb-ba86-49088fc24764_223897.jpg",
       "locality": "Vasant Kunj",
       "areaName": "Vasant Kunj",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "Desserts",
         "Cafe",
         "Bakery",
         "Beverages",
         "Fast Food"
       ],
       "avgRating": 4.6,
       "parentId": "2276",
       "avgRatingString": "4.6",
       "totalRatingsString": "3.7K+",
       "sla": {
         "deliveryTime": 36,
         "lastMileTravel": 7.2,
         "serviceability": "SERVICEABLE",
         "slaString": "35-40 mins",
         "lastMileTravelString": "7.2 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-15 02:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹149"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "4.0",
           "ratingCount": "227"
         },
         "source": "GOOGLE",
         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/dunkin-donuts-and-coffee-vasant-kunj-rest223897",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "75330",
       "name": "Costa Coffee",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/6/dba88e0e-8a6f-49aa-977e-d98eccdc82b1_75330.jpg",
       "locality": "Worldmark 3",
       "areaName": "Aerocity",
       "costForTwo": "₹450 for two",
       "cuisines": [
         "Beverages",
         "Cafe",
         "Bakery",
         "Desserts",
         "Snacks"
       ],
       "avgRating": 4.7,
       "parentId": "8427",
       "avgRatingString": "4.7",
       "totalRatingsString": "54",
       "sla": {
         "deliveryTime": 41,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "40-45 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-15 01:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹99"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/costa-coffee-worldmark-3-aerocity-rest75330",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "48333",
       "name": "Royce' Chocolate",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/6/02a1064c-5c5e-4adc-bdf9-09382ada0b19_48333.jpg",
       "locality": "Vasant Kunj",
       "areaName": "Vasant Kunj",
       "costForTwo": "₹750 for two",
       "cuisines": [
         "Desserts"
       ],
       "avgRating": 4.9,
       "parentId": "5168",
       "avgRatingString": "4.9",
       "totalRatingsString": "116",
       "sla": {
         "deliveryTime": 45,
         "lastMileTravel": 8.6,
         "serviceability": "SERVICEABLE",
         "slaString": "40-45 mins",
         "lastMileTravelString": "8.6 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-14 22:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "select": true,
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "20% OFF",
         "subHeader": "UPTO ₹50"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "4.7",
           "ratingCount": "55"
         },
         "source": "GOOGLE",
         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/royce-chocolate-vasant-kunj-rest48333",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "700002",
       "name": "Caterspoint",
       "cloudinaryImageId": "15fccccc7c464b4bb2ca913cefbe568d",
       "locality": "Masoodpur",
       "areaName": "Vasant Kunj",
       "costForTwo": "₹600 for two",
       "cuisines": [
         "Salads",
         "Healthy food",
         "Snacks",
         "pastas",
         "Lebanese",
         "Mexican",
         "Desserts",
         "Beverages"
       ],
       "avgRating": 4.5,
       "parentId": "11011",
       "avgRatingString": "4.5",
       "totalRatingsString": "906",
       "sla": {
         "deliveryTime": 47,
         "lastMileTravel": 8.4,
         "serviceability": "SERVICEABLE",
         "slaString": "45-50 mins",
         "lastMileTravelString": "8.4 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-15 01:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Healthy.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Healthy.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹349",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/caterspoint-masoodpur-vasant-kunj-rest700002",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "382518",
       "name": "Theos",
       "cloudinaryImageId": "umfjqy4dk06f8gcenc6w",
       "locality": "Cyber City",
       "areaName": "DLF Cyber City",
       "costForTwo": "₹500 for two",
       "cuisines": [
         "Bakery",
         "Pizzas",
         "Pastas"
       ],
       "avgRating": 4.6,
       "parentId": "2740",
       "avgRatingString": "4.6",
       "totalRatingsString": "1.9K+",
       "sla": {
         "deliveryTime": 50,
         "lastMileTravel": 9.7,
         "serviceability": "SERVICEABLE",
         "slaString": "50-55 mins",
         "lastMileTravelString": "9.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-14 23:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹200 OFF",
         "subHeader": "ABOVE ₹1599",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/theos-cyber-city-dlf-cyber-city-rest382518",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "865859",
       "name": "Salad Days",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/29a9309e-c34c-499d-ba40-e2e5dd1075ba_865859.jpg",
       "locality": "Kapeshera",
       "areaName": "Vasant Kunj",
       "costForTwo": "₹500 for two",
       "cuisines": [
         "Salads"
       ],
       "avgRating": 4.6,
       "parentId": "796",
       "avgRatingString": "4.6",
       "totalRatingsString": "659",
       "sla": {
         "deliveryTime": 40,
         "lastMileTravel": 7.7,
         "serviceability": "SERVICEABLE",
         "slaString": "35-40 mins",
         "lastMileTravelString": "7.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-14 23:59:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Healthy.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Healthy.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/salad-days-kapeshera-vasant-kunj-rest865859",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "558831",
       "name": "HRX by EatFit",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/25/d1e86c57-e39c-418b-a6ad-70818cc020a4_558831.JPG",
       "locality": "B Sector",
       "areaName": "Vasant Kunj",
       "costForTwo": "₹450 for two",
       "cuisines": [
         "Healthy Food",
         "Salads",
         "Burgers"
       ],
       "avgRating": 4.6,
       "parentId": "335529",
       "avgRatingString": "4.6",
       "totalRatingsString": "441",
       "sla": {
         "deliveryTime": 45,
         "lastMileTravel": 8,
         "serviceability": "SERVICEABLE",
         "slaString": "45-50 mins",
         "lastMileTravelString": "8.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-15 01:00:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "brand",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "brand"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹139"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/hrx-by-eatfit-b-sector-vasant-kunj-rest558831",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "34965",
       "name": "Angels in my Kitchen",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/6/6b8b9707-3ee6-4a83-a277-5081d399a2ec_34965.jpg",
       "locality": "Sector B",
       "areaName": "Vasant Kunj",
       "costForTwo": "₹600 for two",
       "cuisines": [
         "Bakery",
         "Desserts"
       ],
       "avgRating": 4.5,
       "parentId": "4405",
       "avgRatingString": "4.5",
       "totalRatingsString": "4.9K+",
       "sla": {
         "deliveryTime": 42,
         "lastMileTravel": 9.1,
         "serviceability": "SERVICEABLE",
         "slaString": "40-45 mins",
         "lastMileTravelString": "9.1 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-14 23:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/angels-in-my-kitchen-sector-b-vasant-kunj-rest34965",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "501401",
       "name": "Ghar ka Khana by EatFit",
       "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
       "locality": "Masoodpur",
       "areaName": "Vasant Kunj",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "North Indian",
         "Home Food",
         "Healthy Food",
         "Indian",
         "Punjabi",
         "South Indian",
         "Rajasthani",
         "Maharashtrian",
         "Snacks",
         "Desserts"
       ],
       "avgRating": 4.4,
       "veg": true,
       "parentId": "422576",
       "avgRatingString": "4.4",
       "totalRatingsString": "1.2K+",
       "sla": {
         "deliveryTime": 40,
         "lastMileTravel": 8,
         "serviceability": "SERVICEABLE",
         "slaString": "35-40 mins",
         "lastMileTravelString": "8.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2025-02-15 01:00:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "options available"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹99"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       "context": "seo-data-5baee85e-0e83-4894-9a91-9f55cd30e464"
     },
     "cta": {
       "link": "https://www.swiggy.com/city/delhi/ghar-ka-khana-by-eatfit-masoodpur-vasant-kunj-rest501401",
       "type": "WEBLINK"
     }
   }
 ];

const RestaurantCard = (props) => {
   // const {resName, resRating} = props;
   const {resData} = props;
   const {name ,cuisines, avgRating,costForTwo, cloudinaryImageId} = resData.info;
   return (
      <div className="res-card" style={ {backgroundColor: "lightblue"}}>
         <img className="card-img" 
           alt="card-img"
           src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
         ></img>
         <h2>{name}</h2>
         <h3>{cuisines.join(',')}</h3>
         <h3>{avgRating} stars</h3>
         <h3>{costForTwo}</h3>
      </div>
   )
}

const Body = () =>{
   return (
      <div className="body">
         <div class="search">Search</div>
         <div class="res-container">
         {/* <RestaurantCard resName="KFC" resRating= "4.4"/> */}
         {/* <RestaurantCard resData={resList[0]}/>
         <RestaurantCard resData={resList[1]}/> */}
         {resList.map(restaurant => <RestaurantCard resData={restaurant}/>)}
         </div>
      </div>
   )
}
const AppLayout = () => {
   return (
      <div className="app">
       <Header/>
       <Body/>
      </div>
   )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)