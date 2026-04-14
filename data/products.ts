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
        id: "chocolate",
        name: "Dutch Chocolate",
        subName: "Velvety smooth.",
        price: "₹140",
        description: "Premium Cocoa - Almond Milk base - Plant Protein",
        folderPath: "/images/chocolate",
        themeColor: "#8D6E63",
        gradient: "linear-gradient(135deg, #8D6E63 0%, #5D4037 100%)",
        features: ["Premium Cocoa", "Almond Milk", "Plant Protein"],
        stats: [{ label: "Dairy", val: "0%" }, { label: "Protein", val: "12g" }, { label: "Cocoa", val: "100%" }],
        section1: { title: "Dutch Chocolate.", subtitle: "Velvety smooth." },
        section2: { title: "Decadence redefined.", subtitle: "Rich cocoa blended with creamy almond milk." },
        section3: { title: "Plant-powered energy.", subtitle: "Loaded with natural plant protein." },
        section4: { title: "Indulgence without compromise.", subtitle: "" },
        detailsSection: {
            title: "Ethically Sourced Cocoa",
            description: "Premium cocoa sourced sustainably and blended with almond milk.",
            imageAlt: "Chocolate Details"
        },
        freshnessSection: {
            title: "Cold-Crafted Perfection",
            description: "Preserving flavor without heat processing.",
        },
        buyNowSection: {
            price: "₹140",
            unit: "per 300ml bottle",
            processingParams: ["Plant Based", "Cold Blended", "Dairy Free"],
            deliveryPromise: "Eco-friendly chilled delivery.",
            returnPolicy: "Money-back guarantee."
        }
    },
 
    {
        id: "kesar",
        name: "Kesar Milk",
        subName: "Royal richness.",
        price: "₹160",
        description: "Saffron Infused - Premium Milk - Energy Boost",
        folderPath: "/images/kesar",
        themeColor: "#FFB300",
        gradient: "linear-gradient(135deg, #FFB300 0%, #FF6F00 100%)",
        features: ["Saffron Infused", "Premium Milk", "Energy Boost"],
        stats: [{ label: "Energy", val: "High" }, { label: "Purity", val: "100%" }, { label: "Flavor", val: "Rich" }],
        section1: { title: "Kesar Milk.", subtitle: "Royal richness." },
        section2: { title: "Luxury in every sip.", subtitle: "Infused with pure saffron strands." },
        section3: { title: "Energy booster.", subtitle: "Revitalizes body and mind." },
        section4: { title: "Tradition meets taste.", subtitle: "" },
        detailsSection: {
            title: "The Royal Ingredient",
            description: "Saffron blended with milk for a luxurious experience.",
            imageAlt: "Kesar Details"
        },
        freshnessSection: {
            title: "Pure & Fresh",
            description: "Maintaining natural richness and aroma.",
        },
        buyNowSection: {
            price: "₹160",
            unit: "per 300ml bottle",
            processingParams: ["Fresh Milk", "Saffron Infused", "Cold Stored"],
            deliveryPromise: "Premium chilled delivery.",
            returnPolicy: "Guaranteed satisfaction."
        }
    }
 ];
