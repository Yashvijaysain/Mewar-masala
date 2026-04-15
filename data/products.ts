export interface Product {
   id: string;
   name: string;
   subName: string;
   price: string;
   description: string;
   folderPath: string;
   themeColor: string;
   gradient: string;
   features: string[];
   stats: { label: string; val: string }[];
   section1: { title: string; subtitle: string };
   section2: { title: string; subtitle: string };
   section3: { title: string; subtitle: string };
   section4: { title: string; subtitle: string };
   detailsSection: { title: string; description: string; imageAlt: string };
   freshnessSection: { title: string; description: string };
   buyNowSection: {
       price: string;
       unit: string;
       processingParams: string[];
       deliveryPromise: string;
       returnPolicy: string;
   };
}

export const products: Product[] = [
   {
       id: "haldi",
       name: "Golden Haldi",
       subName: "Ancient wellness.",
       price: "₹130",
       description: "Immunity Booster - Anti-inflammatory - 100% Natural",
       folderPath: "/images/haldi",
       themeColor: "#FFC107",
       gradient: "linear-gradient(135deg, #FFC107 0%, #FF8F00 100%)",
       features: ["Immunity Booster", "Anti-inflammatory", "100% Natural"],
       stats: [{ label: "Additives", val: "0%" }, { label: "Purity", val: "100%" }, { label: "Herbs", val: "100%" }],
       section1: { title: "Golden Haldi.", subtitle: "Ancient wellness." },
       section2: { title: "Rooted in tradition.", subtitle: "Finest turmeric roots blended with natural spices for daily health." },
       section3: { title: "Immunity powerhouse.", subtitle: "Packed with curcumin to strengthen your body naturally." },
       section4: { title: "Pure spice, pure health.", subtitle: "" },
       detailsSection: {
           title: "The Golden Spice",
           description: "Our Golden Haldi drink is crafted from premium turmeric roots sourced from trusted farms. Carefully processed to retain maximum curcumin content, this blend delivers both taste and powerful health benefits in every sip.",
           imageAlt: "Haldi Details"
       },
       freshnessSection: {
           title: "Tradition Meets Technology",
           description: "We use advanced cold-processing techniques to preserve the natural potency of turmeric and spices. No heat, no chemicals—just pure, powerful nutrition delivered fresh to your bottle."
       },
       buyNowSection: {
           price: "₹130",
           unit: "per 300ml bottle",
           processingParams: ["Cold Processed", "No Preservatives", "Natural Blend"],
           deliveryPromise: "Fresh delivery with temperature-controlled packaging to maintain potency.",
           returnPolicy: "100% Satisfaction Guarantee. Experience the power of haldi or get a replacement."
       }
   },

   {
       id: "mirch",
       name: "Lal Mirch Powder",
       subName: "Fiery perfection.",
       price: "₹130",
       description: "Bold Flavor - Natural Heat - 100% Pure Spice",
       folderPath: "/images/mirchi",
       themeColor: "#D32F2F",
       gradient: "linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)",
       features: ["Bold Flavor", "Natural Heat", "100% Pure"],
       stats: [{ label: "Additives", val: "0%" }, { label: "Purity", val: "100%" }, { label: "Heat", val: "High" }],
       section1: { title: "Lal Mirch Powder.", subtitle: "Fiery perfection." },
       section2: { title: "Authentic spice.", subtitle: "Made from premium sun-dried red chilies." },
       section3: { title: "Bold and intense.", subtitle: "Adds vibrant heat and color to dishes." },
       section4: { title: "Pure spice, no compromise.", subtitle: "" },
       detailsSection: {
           title: "The Power of Red Spice",
           description: "Finely ground premium red chilies delivering rich color and bold heat.",
           imageAlt: "Mirch Details"
       },
       freshnessSection: {
           title: "Freshness Sealed",
           description: "Airtight packaging preserves aroma and spice intensity.",
       },
       buyNowSection: {
           price: "₹130",
           unit: "per 200g pouch",
           processingParams: ["Sun Dried", "Finely Ground", "No Preservatives"],
           deliveryPromise: "Delivered fresh in sealed packaging.",
           returnPolicy: "100% Satisfaction Guarantee."
       }
   },

   {
       id: "dhaniya",
       name: "Dhaniya Powder",
       subName: "Fresh aroma.",
       price: "₹120",
       description: "Rich Aroma - Natural Flavor - 100% Pure Spice",
       folderPath: "/images/dhaniya",
       themeColor: "#388E3C",
       gradient: "linear-gradient(135deg, #66BB6A 0%, #2E7D32 100%)",
       features: ["Rich Aroma", "Natural Flavor", "100% Pure"],
       stats: [{ label: "Additives", val: "0%" }, { label: "Purity", val: "100%" }, { label: "Freshness", val: "High" }],
       section1: { title: "Dhaniya Powder.", subtitle: "Fresh aroma." },
       section2: { title: "Naturally refreshing.", subtitle: "Made from premium coriander seeds for authentic taste and fragrance." },
       section3: { title: "Enhances every dish.", subtitle: "Adds mild citrusy flavor and depth to your cooking." },
       section4: { title: "Pure spice, natural goodness.", subtitle: "" },
       detailsSection: {
           title: "The Essence of Coriander",
           description: "Our Dhaniya Powder is made from carefully selected coriander seeds, finely ground to preserve their natural oils and aroma. It delivers a fresh, earthy flavor that elevates every meal.",
           imageAlt: "Dhaniya Details"
       },
       freshnessSection: {
           title: "Aroma Locked Freshness",
           description: "We use precision grinding and airtight packaging to lock in the natural fragrance and flavor of coriander seeds, ensuring long-lasting freshness."
       },
       buyNowSection: {
           price: "₹120",
           unit: "per 200g pouch",
           processingParams: ["Sun Dried", "Finely Ground", "No Preservatives"],
           deliveryPromise: "Delivered fresh in aroma-sealed packaging.",
           returnPolicy: "100% Satisfaction Guarantee. Not satisfied? Get a replacement instantly."
       }
   }
];
