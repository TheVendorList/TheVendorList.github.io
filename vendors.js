const Note = {
    title: "📋 What's New",
    text: `If you would like your brand removed from the The Vendor List or need any changes made, please contact me using the details below.

Proof of ownership is required for all removal or modification requests. If you email me directly from your business email, there is no need.

Have a question or need to get in contact? Reach out via our <a href="https://discord.gg/4mnGTXbzk4" target="_blank" rel="noopener noreferrer">Discord</a> server or email <b>thevendorlist@proton.me</b> directly.

— Admin`
};

const Countries = [
    "International",
    "United States Of America",
    "Canada",
    "Australia"
];

const Categories = [
    "All", 
    "Marijuana", 
    "Psychedelics", 
    "Dissociatives", 
    "Stimulants", 
    "Benzodiazepines", 
    "Opioids", 
    "Peptides", 
    "Other"
];

const SubCategories = {
    "Marijuana": [
        "Flower", 
        "Concentrates",
        "Vapes",
        "Edibles",
        "Tinctures"
    ],

    "Psychedelics": [
        "Shrooms",
        "Mescaline",
        "MDMA",
        "MDA",
        "2C-B",
        "5-MAPB",
        "N,N-DMT",
        "4-HO-MET",
        "4-HO-DET",
        "4-HO-MiPT",
        "4-AcO-DMT",
        "4-AcO-MET",
        "4-PrO-DMT",
        "4-PrO-MET",
        "5-MeO-DMT",
        "5-MeO-MiPT",
        "5-MeO-MALT",
        "LSD",
        "1P-LSD",
        "1cP-LSD",
        "1V-LSD",
        "1D-LSD",
        "ALD-52",
        "ETH-LAD",
        "1cP-AL-LAD",
        "N,N-Dipropyltryptamine (DPT)",
        "Methallylescaline (MAL)"
    ],

    "Dissociatives": [
        "Ketamine",
        "2F-DCK",
        "2-FXiPr",
        "3-ME-PCP",
        "3-MEO-PCE",
        "3,4-MD-PCP",
        "3-HO-PCP",
        "O-PCP",
        "O-PCE",
        "MXPCP",
        "Fluorexetamine",
        "Isophenidine",
        "Tilmetamine"
    ],
    
    "Stimulants": [
        "Isopropylphenidate",
        "2-FMA",
        "4-FMA",
        "Ritalin",
        "MDPIHP",
        "2-Me-PiHP",
        "4-MeTMP",
        "DMNPC"
    ], 
    
    "Benzodiazepines": [
        "Fluprazolam",
        "Rilmazofone",
        "Clobromazolam",
        "Norflurazepam",
        "Pynazolam",
        "Bromonordiazepam",
        "Fluoprazolam",
        "N-Ethyl-Nitrazepam",
        "Ethyl-Flualprazolam",
        "Ethyl-Bromazolam",
        "Clonazepam",
        "Nifoxipam",
        "Avizafone",
        "Tianeptine",
        "Desalkylgidazepam",
        "Deschloroetizolam",
        "Flubrotizolam",
        "Fluclotizolam",
        "Fluloprazolam",
        "Rilmazafone",
        "3-Hydroxyphenazepam"
    ],
    
    "Opioids": [
        "Natural kratom",
        "7-Hydroxymitragynine",
        "MGM-15",
        "Pseudoindoxyl",
        "O-DSMT",
        "Codiene",
        "Dihydrocodiene",
        "Oxycodone",
        "Tramadol",
        "Tapetadol",
        "Tapentadol",
        "PiPTapentadol",
        "Methiodone",
        "DPP-26",
        "SR-17018",
        "SR-14968",
        "Nortilidine"
    ],
    
    "Peptides": [
        "Trenbolone",
        "Retatrutide",
        "CJC-1295",
        "Ipamorelin",
        "BPC-157",
        "TB-500",
        "IGF-1 LR3",
        "GHRP-6",
        "GHRP-2",
        "Hexarelin",
        "MK-677 (Ibutamoren)",
        "Melanotan II",
        "AOD-9604",
        "Tesamorelin",
        "Selank",
        "Semaglutide",
        "GB-115"
    ], 
    
    "Other": [
        "Gabapentin",
        "Viagra",
        "Methyl-K",
        "Tianeptine"
    ]
};

const NoDescriptionWarning = "No description, if you'd like one to be added get in contact."

const Vendors = [
    {
        Title: "Clubhouse Drops",
        Description: "Clubhouse Drops specializes in exotic brands, they offer a curated selection of flower and concentrates from trusted brands like 710 Labs and Coldfire, delivering high-quality cannabis experiences.",
        
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        PaymentMethods: ["💳 Credit Card", "₿ Crypto"],
        Password: "CLUB", 
        IsRecommended: true,

        RequiresID: true,
        ShipsTo: ["United States Of America"],

        Buttons: [
            { Text: "Website", Link: "https://clubhousedrops.com/clubhouse-drops/", Warning: true }
        ]
    },
    {
        Title: "Crysp",
        Description: "Crysp sources high-quality cannabis products from passionate growers who care about the plant. They ensure their flower and concentrates are clean, flavorful, and affordable, providing customers with premium experiences without breaking the bank.",
        
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        
        IsRecommended: true,

        RequiresID: true,
        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://crysp.co/" },
        { Text: "Instagram", Link: "https://www.instagram.com/crysp.co/" }
        ]
    },
    {
        Title: "Simply Mary",
        Description: "SimplyMary offers a curated selection of high-quality THCa products, including flower, concentrates, and edibles. Their THCa flower strains, such as Wagyu and Dr. J, are cultivated by reputable brands like Snowtill and Platinum Barn, ensuring top-tier quality and potency. Each product undergoes rigorous third-party lab testing to verify cannabinoid content and purity, providing customers with a clean and reliable experience.",
        
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        
        IsRecommended: true, 

        RequiresID: true,
        ShipsTo: ["United States Of America"],
        
        Buttons: [
        { Text: "Website", Link: "https://simplymary.co/" },
        { Text: "Instagram", Link: "https://www.instagram.com/simplymary/" }
        ]
    },
    {
        Title: "Shop Hello Mary",
        Description: "Shop Hello Mary offers a diverse selection of premium THCa cannabis products, including top-shelf flower, solventless rosin concentrates, and edibles. Their offerings feature strains like 818 OG, Hash Burger, and Halle Berry, cultivated by reputable producers to ensure quality and potency.",
       
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        
        RequiresID: true,
        ShipsTo: ["United States Of America"],

        Buttons: [
            { Text: "Website", Link: "https://shophellomary.com/" },
            { Text: "Instagram", Link: "https://www.instagram.com/hellomary0fficial/" },
        ]
    },
    {
        Title: "Quantum Exotics",
        Description: "We think cannabis should be easily accessible, affordable, convenient, and transparent. Convenience and total privacy in the shopping journey is our ideal. But most importantly, we believe in supporting the American farmers who make all of this possible. Our core values are a commitment to product quality and to world-class customer experiences. Our company culture is one that fosters open communication and open doors: everybody here has a voice, and we believe that by investing in both our people and our customers, we all will rise.",
        
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        
        IsRecommended: true,  

        RequiresID: true,
        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://www.quantumexotics.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/quantumexotics710/" }
        ]
    },
    {
        Title: "Sherlocks Glass",
        Description: "Established in 2015, Sherlocks Glass & Dispensary is the premier cannabis store in Raleigh and Durham, North Carolina. We offer the city's largest selection of THCa Flower strains meticulously handpicked for flavor profile and effect. Find top quality Hash Rosin and a wide range of delta 9 edibles, vapes, and high-end American-made glass pipes. We are the only premier Puffco product supplier in North Carolina. ",
        
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        
        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://sherlocksglass.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/sherlocksglass/" },
        { Text: "Youtube", Link: "https://www.youtube.com/@sherlocksglass/" },
        { Text: "TikTok", Link: "https://www.tiktok.com/@sherlocksglass/" }
        ]
    },
    {
        Title: "CANNA HAUS FARMS",
        Description: "Canna Haus Farms was founded with a simple belief: the best cannabis comes from living soil, clean inputs, and pure, solventless extraction. Since day one, we have been committed to regenerative organic practices, cultivating in native soil outdoors and crafting small-batch harvests in controlled indoor environments — always staying true to our roots in living soil and solventless resin production. We are growers, hashmakers, and stewards of the land. Our approach focuses on building healthy, living ecosystems beneath our plants, where natural biology thrives. Instead of relying on bottled nutrients or synthetic additives, we nurture our soils with cover crops, compost, and closed-loop regenerative methods that feed the soil, not just the plants. This deep relationship with the land is what gives our resin its unique expression of terroir — and it’s why we believe living soil is the foundation of truly authentic cannabis.",
        
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        
        RequiresID: true,
        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://cannahausfarms.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/cannahausfarms/" }
        ]
    },
    {
        Title: "Tesoro Hemp",
        Description: "Tesoro Hemp began as a small, family-owned farm nestled in the heart of Oregon, where a love for quality cannabis and honest cultivation took root in 2017. What started as a humble operation has since grown into a full-spectrum hemp brand—featuring a concentrate processing lab, in-house pre-roll production, and some of the most thoughtfully grown THCa hemp flower available on the market. Despite our growth, we remain proudly family owned and operated, staying true to our roots while continuing to innovate in the cannabis space. Our team is committed to sustainability—not just environmentally, but economically and socially. As we've expanded, we’ve done so carefully, preserving jobs and upholding the high standards our customers have come to expect. We also perform in-house genetic work to stay at the forefront of emerging strains and trends in the cannabis world.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        PaymentMethods: ["💳 Credit Card", "₿ Crypto"],
        IsNew: false, IsRecommended: false, IsCheap: true, 
        
        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://tesorohemp.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/tesorohempco/" },
        { Text: "Facebook", Link: "https://facebook.com/tesorohemp/" },
        { Text: "Reddit", Link: "https://reddit.com/r/tesorohemp/" },
        { Text: "TikTok", Link: "https://tiktok.com/tesorohemp/" }
        ],

        Issues: [
        { Text: "Contaminated live resin", Link: "https://www.reddit.com/r/TesoroHemp/comments/1pu4ifs/sigh/" },
        { Text: "Contaminated cured resin", Link: "https://www.reddit.com/r/THCAextracts/comments/1r7wea2/tesoro_cake_mix_cured_resin/" },
        { Text: "Contaminated cured resin again", Link: "https://www.reddit.com/r/TesoroHemp/comments/1savovv/runtz_muffin_update/" },
        { Text: "Contaminated cured resin again", Link: "https://www.reddit.com/r/TesoroHemp/comments/1s2vy49/cali_burger/" },
        { Text: "Moldy outdoor flower", Link: "https://www.reddit.com/r/Tesoro_Hemp/comments/1pu87t6/mold_in_ice_cream_cake_smalls/" },
        ]
    },
    {
        Title: "Bake Boxx",
        Description: "BakeBoxx was born from a simple vision: to create a trusted platform where quality meets innovation. We believe that everyone deserves access to premium hemp products that enhance their well-being and lifestyle.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Edibles"],

        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://www.bakeboxx.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/bakeboxxofficial/" },
        { Text: "Twitter", Link: "https://x.com/Bake_Boxx" },
        { Text: "Youtube", Link: "https://www.youtube.com/@thebakeboxx" },
        { Text: "Reddit", Link: "https://www.reddit.com/r/BakeBoxx/" }
        ]
    },
    {
        Title: "Cali Blaise",
        Description: "At Cali Blaise, we elevate your experience with our top-notch THCA, crafted from the finest, hand-selected flowers. Each bud is grown with care, ensuring rich flavors and vibrant effects that enhance your senses. We’re dedicated to providing an authentic taste of California’s culture. Whether you seek relaxation, creativity, or energy, our collection has the perfect strain for you. Experience the magic of Cali Blaise and ignite your passion for quality!",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        
        RequiresID: true,
        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://caliblaise.net/" },
        { Text: "Instagram", Link: "https://www.instagram.com/caliblaise_online/" },
        { Text: "Twitter", Link: "https://x.com/CaliBlaiseNews/" },
        { Text: "Youtube", Link: "https://www.youtube.com/@CaliBlaise_net/" },
        { Text: "TikTok", Link: "https://www.tiktok.com/@caliblaise.net/" }
        ]
    },
    {
        Title: "Ole Skool Hemp",
        Description: "Family-owned North Carolina hemp farm growing premium THCA flower in our 6,000 sqft indoor facility. From seed to sale, we control every step ensuring lab-tested, Farm Bill compliant products delivered fresh from our farm to your door.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],

        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://oleskoolhemp.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/oleskoolhemp/" },
        { Text: "Facebook", Link: "https://www.facebook.com/61561366719020" },
        ]
    },
    {
        Title: "Illest Haze",
        Description: "Our farm-fresh THCa flower is straight fire, grown under open skies and shipped direct to your door. Every bud is 100% federally compliant, so you can chill, stay safe, and be worry-free. No fluff, no filler – just pure, organic THCa that hits smooth. Ready to raise the bar on your stash?",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        
        RequiresID: true,
        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://illesthaze.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/caliblaise_online/" },
        { Text: "Facebook", Link: "https://www.facebook.com/illesthazedispensary/" },
        { Text: "Twitter", Link: "https://www.x.com/ILLESTHAZEHEMP/" },
        { Text: "Youtube", Link: "https://www.youtube.com/@ILLESTHAZEREVIEWS/" }
        ]
    },
    {
        Title: "THE HEMP COLLECT",
        Description: "We’re cannabis innovators driven by a passion to create superior, compliant goods. Our mission is simple: deliver the best for the people we serve. Our craft products set the standard for taste, effect, and potency. By using full-spectrum live resin—not just terpenes labeled as live resin—we achieve richer flavor and more profound effects. Every batch is rigorously tested, ensuring unmatched quality. With us, the bar isn’t just raised—it’s redefined.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        
        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://thehempcollect.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/modernherbcogoodsofficial/" },
        { Text: "Facebook", Link: "https://www.facebook.com/ModernHerbCo/" },
        { Text: "Twitter", Link: "https://x.com/HempCollect/" },
        ]
    },
    {
        Title: "THE HEMP BARN",
        Description: "The Hemp Barn was created in 2016 by self-proclaimed “Cannabis Nerd” Jeff Cunningham.  I was personally offended by the state of the Hemp/Cannabis market at the time due to flagrant price gouging and the overall lack of quality & transparency in products offered.  It was very common to see CBD Isolate priced at $100+ per gram and 500mg CBD Tinctures selling for well over $100 as well.  Due to being involved in the cannabis industry since 2001, I knew the true cost and quality of products offered and realized I could put out a better quality product at half the price by working with true cannabis enthusiasts who had better genetics & extraction methods.  Our three principles are still the same as they were in 2016 – Quality, Affordability & Transparency.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        
        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://thehempbarn.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/thehempbarn/" },
        { Text: "Twitter", Link: "https://x.com/thehempbarn/" }
        ]
    },
    {
        Title: "The Mad Skunk",
        Description: "Welcome to the Mad Skunk, we specialize in Craft/Exotic small batch THCa flower grown in living soil and hydroponics. The founder began this journey many moons ago with a genuine love for the flower, from cultivation to consumption. We currently do not grow on our own. Instead, we have an excellent partnership with a local farm who grows exclusively for TMS. We are born and bred Virginians and we love to travel. The Mad Skunk started as a vision and a dream. Never did we ever, as young adults, believe that we would be someday shipping dank all over the country! But here we are and here you are! We’re glad to have you and look forward to serving your cannaneeds for years to come!",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],
        IsNew: false, 

        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://www.themadskunk.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/Themadskunkva/" },
        { Text: "Twitter", Link: "https://twitter.com/madskunkery/" },
        { Text: "TikTok", Link: "https://www.tiktok.com/@Madskunkery/" }
        ]
    },
    {
        Title: "INDACLOUD",
        Description: "Indacloud is here to give you what you came looking for. An incredible time, a good laugh, a great sleep, or a vacation from reality. The only thing we take seriously is making sure everyone is happy. So, we do a damn good job of having the safest and greatest products on the market at incredible prices.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],

        ShipsTo: ["United States Of America"],
        
        Buttons: [
        { Text: "Website", Link: "https://indacloud.co/" },
        { Text: "Instagram", Link: "https://www.instagram.com/indacloudco/" },
        { Text: "Facebook", Link: "https://www.facebook.com/indacloud.co/" },
        { Text: "Twitter", Link: "https://twitter.com/indacloudco/" },
        ]
    },
    {
        Title: "Purple Candy Gas",
        Description: "At Purplecandygas.com, we don’t just sell THCA products—we set the standard. Our premium THCA flower is cultivated with precision, care, and an obsession. We partner with top-tier farms that grow under optimal conditions, ensuring every bud is rich in natural cannabinoids and bursting with terpene profiles that deliver both potency and flavor. Our extraction and curing processes are clean, transparent, and lab-tested—giving you a smooth, consistent experience every time. Whether you're looking for deep relaxation, creative clarity, or just a genuinely elevated vibe, our THCA delivers a high you can feel good about.",
        Sections: ["Marijuana"],
        SubSections: ["Flower"],

        ShipsTo: ["United States Of America"],
        
        Buttons: [
        { Text: "Website", Link: "https://purplecandygas.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/purple_candy_gas/" }
        ]
    },
    {
        Title: "DAILY HI",
        Description: "Welcome to Daily Hi — your go-to online dispensary for federally legal THCA, Delta-9 THC, CBD, and hemp-derived cannabis products delivered straight to your door. We specialize in Farm Bill compliant THC products that are lab-tested, potent, and 100% legal under federal law.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        
        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://www.daily-hi.com/" },
        { Text: "Instagram", Link: "http://instagram.com/shopdailyhi/" },
        { Text: "Facebook", Link: "https://www.facebook.com/people/Daily-Hi/61576755503827/" },
        { Text: "Twitter", Link: "https://x.com/yourdailyhi/" }
        ]
    },
    {
        Title: "WNC-CBD",
        Description: "WNC CBD is a family-owned business based in Asheville that’s known for producing some of the highest quality hemp products available. They prioritize quality over quantity, combining innovation, community values, and exceptional customer service to support natural wellness and a balanced lifestyle.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],

        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://wnc-cbd.com/" },
        { Text: "Instagram", Link: "http://instagram.com/shopdailyhi/" },
        { Text: "Facebook", Link: "https://www.facebook.com/people/Daily-Hi/61576755503827/" },
        { Text: "Twitter", Link: "https://x.com/yourdailyhi/" }
        ]
    },
    {
        Title: "Rise Hemp Co",
        Description: "Welcome to Rise Hemp Co., your premier online dispensary. Discover an exceptional selection of AAA exotic indoor flower and award-winning hash rosin. We pride ourselves on offering top-quality THCA hemp, THCA Hash Rosin, Live Resin, and BHO Badders, setting the standard for excellence in THCA concentrates. Experience the quality you deserve with our meticulously curated products.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],
        
        ShipsTo: ["United States Of America"],

        Buttons: [
        { Text: "Website", Link: "https://www.risehempllc.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/risehempcollc/" },
        { Text: "Discord", Link: "https://discord.com/channels/1340421288136671412/1340421288136671415/" },
        { Text: "Twitter", Link: "https://x.com/RiseHempLLC/" }
        ]
    },
    {
        Title: "Surfside Brands",
        Description: "Your premium cannabis and amanita mushshrooms marketplace. High-quality psychoactive products that can be delivered directly to your door, legally. Designed in California, U.S.A.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        IsNew: false, 
        Buttons: [
        { Text: "Website", Link: "https://surfsidebrands.com/" }
        ]
    },
    {
        Title: "High Society 420",
        Description: "High Society 420 is a New England-based collective bringing together leading brands to fulfill the community's needs with authenticity and quality. Our group combines the strengths of top cultivators, craft producers, and trusted retailers to offer a diverse range of premium products. The High Society 420 experience includes exotic THCA flower, artisanal concentrates, gourmet edibles, and innovative vape products. By uniting under one banner, we deliver unmatched selection and expertise, setting a new standard for THCA culture and lifestyle across the region.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://neptuneseedbank.com/" },
        { Text: "Telegram", Link: "https://t.me/+v_5IPtdBkes5ZGEx" },
        { Text: "Twitter", Link: "https://x.com/neptuneseedbank" },
        { Text: "Discord", Link: "https://discord.com/invite/9bFy3CWXZW" }
        ]
    },
    {
        Title: "Neptune Seed Bank",
        Description: "Neptune Seed Bank specializes in top-quality cannabis products curated for every lifestyle. Shop now and experience their finest selection.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://neptuneseedbank.com/" },
        { Text: "Telegram", Link: "https://t.me/+v_5IPtdBkes5ZGEx" },
        { Text: "Twitter", Link: "https://x.com/neptuneseedbank" },
        { Text: "Discord", Link: "https://discord.com/invite/9bFy3CWXZW" }
        ]
    },
    {
        Title: "Pack Trapper",
        Description: "Pack Trapper is a wholesale THCA supplier that offers a wide range of products, including flower, concentrates, vapes, edibles, and more.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        IsCheap: true, 
        Buttons: [
        { Text: "Website", Link: "https://packtrapper.com/" },
        { Text: "Telegram", Link: "https://t.me/+sPsytTDSQccwYzIx" }
        ]
    },
    {
        Title: "Rosslyn",
        Description: "Rosslyn Direct was born from a simple belief: cannabis should be clean, potent, and expressive of the plant’s true nature — not stripped down, diluted, or over-marketed. We’re not here to chase trends. We’re here to preserve and deliver the full spectrum of what this plant can offer when treated with respect. Everything we carry is built on a foundation of trust in the process, the people, and the product. We partner with like minded cultivators and extractors who share our obsession with purity and who understand that great cannabis is grown, not manufactured. Our products start with clean, healthy plants cultivated without shortcuts, harvested at peak ripeness, and processed with intention.",
        Sections: ["Marijuana"],
        SubSections: ["Concentrates"],
        ShipsTo: ["United States Of America"],
        IsNew: false, IsCheap: false, 
        Buttons: [
        { Text: "Website", Link: "https://rosslyn.direct/" },
        { Text: "Instagram", Link: "http://instagram.com/rosslyn_direct" }
        ],

        Issues: [
        { Text: "Doxxed a customer", Link: "https://www.reddit.com/r/Michigents/comments/1n4av06/rosslyn_owner_and_product_suck/" },
        { Text: "Terrible burn", Link: "https://www.reddit.com/r/Michigents/comments/1n46a6k/rosslyn_rosin/" },
        { Text: "Deleted there reddit accounts", Link: "https://www.reddit.com/r/THCAextracts/comments/1nkm6vl/can_we_talk_about_rosslyn_already_deleting_their/" },
        ]
    },
    {
        Title: "Roots & Releaf",
        Description: "",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        IsCheap: false, 
        Buttons: [
        { Text: "Website", Link: "https://www.rootsandreleaf.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/roots_and_releaf" }
        ]
    },
    {
        Title: "Top Shelf NC",
        Description: "At Topshelf NC, we rely on nature and technique—not chemicals—to bring out the best in the plant. Our solventless extraction process uses only ice, water, heat, and pressure to collect and concentrate trichomes through methods like ice water hash and rosin pressing. No hydrocarbons. No shortcuts.  By processing in small batches, we maintain the integrity of each cultivar and preserve its full-spectrum character—delivering a true expression of the plant in every jar. The result is a terpene-rich, unfiltered concentrate that carries the original aroma, flavor, and structure of the flower it came from. To us, solventless is more than a process—it’s a commitment to quality, transparency, and respect for the plant’s natural form. From cultivation to extraction, everything we do at Topshelf NC is rooted in intention, so you can experience cannabis the way it was meant to be.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        IsCheap: false, 
        Buttons: [
        { Text: "Website", Link: "https://topshelfnc.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/Topshelf_nc" },
        { Text: "Facebook", Link: "https://www.facebook.com/share/1EHJkLnE7e/?mibextid=wwXIfr" }
        ]
    },
    {
        Title: "Industrial Hemp Farms",
        Description: "Industrial Hemp Farms is an Colorado-based hemp and CBD distributor offering both retail and wholesale. We are one of the largest suppliers of hemp flower and CBD products in the United States. Our hemp flower products range from indoor-grown hemp strains to low-cost hemp extracts. Industrial Hemp Farms is one of the largest distributors of CBD isolate, CBD distillate, and other hemp concentrates in the United States. We also carry various popular CBD products, including CBD hemp oil, CBD gummies, and finished hemp products, at unbeatable prices. Join our thousands of happy customers, whether you are a retail customer looking for affordable, quality hemp products or a business owner looking for wholesale items. Browse our many hemp products to get bargain pricing. Why pay full marked-up pricing when you can buy affordable hemp right from the source?",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        IsCheap: false,
        Buttons: [
        { Text: "Website", Link: "https://industrialhempfarms.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/industrialhempfarms/" },
        { Text: "Facebook", Link: "https://www.facebook.com/hempbiomassIHF/" }
        ]
    },
    {
        Title: "Wildwood",
        Description: "Land Of The Free. Home Of The Brave. Where Ego And Excuses Are Checked At The Door And You Solve Your Problems By Taking A Deep Breath And Going Outside. We Handcraft Our Live Resin In Small Batches From Terpene Rich Cannabis Sativa Grown In The Ruggedly Beautiful Pacific Northwest. The Best Cannabis In The World Grows Here And It’s With That Cannabis That We Proudly Make Live Resin Vapes That Taste Great And Work As Hard As You Do.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        IsCheap: false, 
        Buttons: [
        { Text: "Website", Link: "https://discoverwildwood.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/roots_and_releaf" }
        ]
    },
    {
        Title: "Discount Pharms",
        Description: "Discount Pharms is one of the largest wholesale THCA suppliers in the country. The quality of our products and our low prices have helped us quickly become America’s preferred THCA vendor.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        IsCheap: true, 
        Buttons: [
        { Text: "Website", Link: "http://discountpharms.com/" }
        ]
    },
    {
        Title: "HIGH THCA HEMP FLOWER",
        Description: "HIGH THCA Hemp Flower stocks the best THCA Flower pounds, half pounds and quarter pounds. Buy strains of THCA flower for less than $100 an ounce when you buy a quarter pound or more.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        IsCheap: true, 
        Buttons: [
        { Text: "Website", Link: "http://highthcahempflower.com/" }
        ]
    },
    {
        Title: "The Delta Connect",
        Description: "The Delta Connect specializing in THCA products, including flower rosin. One Reddit user mentioned getting Ice Cream Cake from The Delta Connect. The vendor also offers strains like Banana Kush THCA Moroccan Hash Hybrid, which is described as potent.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        IsCheap: true, IsRecommended: false, 
        Buttons: [
        { Text: "Website", Link: "https://thedeltaconnect.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/thedeltaconnect/" },
        { Text: "Reddit", Link: "https://www.reddit.com/r/thedeltaconnect/" }
        ],

        Issues: [
        { Text: "Their live resin costs too much but I've read good reviews" }
        ]
    },
    {
        Title: "Miracle Of The Desert",
        Description: "Miracle Of The Desert is your go-to for organic, high-tier THCa flower, cartridges, rosin, and more. Grown in California’s desert, the heart of U.S. cannabis cultivation, we offer the hottest strains, rotating fresh inventory, and both premium and budget-friendly options.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        IsCheap: true, 
        Buttons: [
        { Text: "Website", Link: "http://miracleofthedesert.com/" },
        { Text: "Twitter", Link: "https://x.com/miraclexmed/" },
        { Text: "Instagram", Link: "https://www.instagram.com/miracleofthedesert/" },
        ],

        Issues: [
        { Text: "contamination & chemical taste", Link: "https://www.reddit.com/r/THCAextracts/comments/1npvlv1/miracle_of_the_desert_crc_hell/" }
        ]
    },
    {
        Title: "Homegrown Happiness",
        Description: "At Homegrown Happiness, we’re a family-owned company dedicated to bringing you the finest in cannabis products. Rooted in our values of quality, integrity, and care, we’re committed to offering a selection of premium cannabis that supports your well being.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        
        Buttons: [{ Text: "Website", Link: "https://homegrownhappiness.store/" }]
    },
    {
        Title: "The Flower Girls",
        Description: "The Flower Girls is a brand focused on creating a social community dedicated to empowering, educating, and engaging women who are passionate about cannabis. Their THCA flower shop collaborates with them, offering products for flower enthusiasts, according to their Instagram account . ",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],
        ShipsTo: ["United States Of America"],

        Buttons: [{ Text: "Website", Link: "https://theflowergirls.shop/" }]
    },
    {
        Title: "Well Crafted Canna",
        Description: "Well Crafted Canna is a family-owned and operated business based in North Carolina, specializing in federally compliant, artisanally crafted, hemp-derived cannabis products. They emphasize a grassroots philosophy, prioritizing customer safety and satisfaction above all else.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "http://wellcraftedcanna.com/" }]
    },
    {
        Title: "DAMN GOOD",
        Description: "Damn Good offers flower grown locally in North Carolina. With fresh batches each week. Damn Good® Concentrates are here. From rosin and sugar to badder, crumble, hash, and shatter — each one made with pure inputs and loud terp profiles. No fillers, no BS. Just potent, flavorful hits every time.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        IsRecommended: false, 
        Buttons: [
        { Text: "Website", Link: "https://tokesugar.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/try.sugar.canna/" },
        { Text: "Instagram", Link: "https://www.instagram.com/toke.sugar/" },
        { Text: "Reddit", Link: "https://www.reddit.com/r/DamnGoodTHCa/" }
        ]
    },
    {
        Title: "Puffy / Myqwin",
        Description: "Puffy / Myqwin offers premium THCa flower, weed vapes, and potent cannabis extracts at unbeatable prices. Shop legal cannabis products including live rosin, badder and crumble for unbeatable prices.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        IsCheap: true, 
        Buttons: [
        { Text: "Website", Link: "https://www.myqwin.com/" },
        { Text: "Reddit", Link: "https://www.reddit.com/r/myqwin/" },
        { Text: "Instagram", Link: "https://www.instagram.com/myqwin/" },
        { Text: "Twitter", Link: "https://www.x.com/myqwin" },
        { Text: "Facebook", Link: "https://www.facebook.com/myqwin.us/" },
        ],

        Issues: [
        { Text: "Fraudulent charges", Link: "https://www.reddit.com/r/CultoftheFranklin/comments/1ntphj3/myqwinpuffy_still_tryna_rob_people_luckily_this/"}
        ]
    },
    { // Fucking moldy bs, shit tastes like a cigarrete no matter what tier you get.
        Title: "LIT Farms",
        Description: "Lost In Translation (aka LIT Farms) are world known pioneers of hemp, bringing together generations of breeding experience.",
        Sections: ["Marijuana"],
        SubSections: ["Flower"],
        ShipsTo: ["United States Of America"],
        IsCheap: true, 
        Buttons: [
            { Text: "Website", Link: "https://litfarms.com/" }
        ],

        Issues: [
            { Text: "Moldy flower", Link: "https://www.reddit.com/r/LitFarms/comments/1gjglcp/moldy_package/"},
            { Text: "Moldy flower (again)", Link: "https://www.reddit.com/r/LitFarms/comments/1iemcmr/mold_bud_rot/"},
            { Text: "Moldy flower (again)", Link: "https://www.reddit.com/r/LitFarms/comments/1jufil2/this_is_kinda_sad_strawberry_horchata_supreme_mold/"},
            { Text: "Mold and bugs (again)", Link: "https://www.reddit.com/r/LitFarms/comments/1obvv5k/mold_and_bug/"},
            { Text: "Bait and switch", Link: "https://www.reddit.com/r/LitFarms/comments/1kqo8gl/bait_and_switch_threatened_to_flag_my_account_for/"}
        ]
    },
    {
        Title: "J Littys",
        Description: "J Litty offers a wide variety of THCA products including flower, rosin, badder, crumble, and live resin, however, they have a less than stellar reputation.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://jlittys.com/" },
        { Text: "Twitter", Link: "https://x.com/jlittys" },
        { Text: "Location", Link: "https://www.leafly.com/dispensary-info/j-litty-s" }
        ]
    },
    {
        Title: "Flow Gardens",
        Description: "If you're looking for CBD, CBG, Delta 9, THCa, and similar products, you must try the award-winning products at Flow Gardens!",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://flowgardens.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/flowgardens420_3.0/" },
        { Text: "Facebook", Link: "https://www.facebook.com/people/Flowgardens/100064983035230/" }
        ]
    },
    {
        Title: "Upstate Hemp Co",
        Description: "Since 2018 Upstate Hemp Co has been synonymous with 'high-end' flower. We would rather 'out of stock' than provide sub-par or dangerous products.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://upstatehempco.com/" }]
    },
    {
        Title: "hmp.",
        Description: "At HMP, we champion a farm-direct approach that connects you with the finest THCa products sourced from trusted local farmers. Our strong ties to the farming community ensure that every product is cultivated with care, utilizing sustainable practices to deliver pure and potent THCa straight from farm to you. Experience the difference of quality, community, and transparency.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://hmp.store/" },
        { Text: "Telegram", Link: "https://t.me/+4EigdvFFky0xYjhh" },
        { Text: "Instagram", Link: "https://www.instagram.com/hmp.usa/#" },
        { Text: "Twitter", Link: "https://x.com/hmp_usa?s=11" },
        ]
    },
    {
        Title: "Co Exotics",
        Description: "At HMP, we champion a farm-direct approach that connects you with the finest THCa products sourced from trusted local farmers. Our strong ties to the farming community ensure that every product is cultivated with care, utilizing sustainable practices to deliver pure and potent THCa straight from farm to you. Experience the difference of quality, community, and transparency.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://thcawholesale.deals/" },
        { Text: "Telegram", Link: "https://t.me/+4EigdvFFky0xYjhh" },
        ]
    },
    {
        Title: "Mystic Smoke",
        Description: "Mystic Smoke offers premium THCa and Hemp products. The best THCa shatter, Sugar, Diamonds and more. Farm bill compliant.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://mysticsmoke.cloud/" },

        ]
    },
    {
        Title: "Enlighten Hemp Co",
        Description: "",
        Sections: ["Marijuana"],
        SubSections: ["Concentrates"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://enlightenhemp.co/" },

        ]
    },
    {
        Title: "Bay Smokes",
        Description: "Bay Smokes kicked off when William and Katiana, a young couple with a serious love for cannabis, jumped into the game back in 2018. William was just 21, living in Arizona with Katiana, when the Farm Bill dropped and they saw their shot to start a CBD hustle. For two years, they lived like nomads, cruising the West Coast, hitting up over 100 farms and extractors to lock down the best product for their brand. When Delta-8 started buzzing in 2020, they launched Bay Smokes, knowing it’d eventually turn into the cannabis gig they dreamed of. Two years later, they rolled out THCA flower—the real deal they had been waiting for—and now they’re stoked to sling it nationwide, blazing trails in the legal weed scene. Since then, the company has grown to nearly 100 employees and is based in Charlotte, North Carolina.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://baysmokes.com/" },
        { Text: "Youtube", Link: "https://www.youtube.com/@baysmokes" },
        { Text: "Facebook", Link: "https://www.facebook.com/people/Bay-Smokes/61558635971791/" },
        { Text: "Instagram", Link: "https://www.instagram.com/heybaysmokes?igsh=MTlhMjl6MThtZ3Ztdg==" },
        { Text: "Twitter", Link: "https://x.com/baysmokes?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" },
        { Text: "TikTok", Link: "https://www.tiktok.com/@baysmokes" }
        ]
    },
    {
        Title: "The Hemp Hut 508",
        Description: "We specialize in bringing you the finest THCa Flower this country has to offer right to your door!!! We ship nationwide.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.thehemphut508.com/" },
        { Text: "Youtube", Link: "https://www.youtube.com/@HempHut508" },
        { Text: "Snapchat", Link: "https://www.snapchat.com/add/thehemphut508" },
        { Text: "Instagram", Link: "https://www.instagram.com/hemphut508" },
        { Text: "Twitter", Link: "https://twitter.com/thehemphut508" },
        ],

        Issues: [
        { Text: "Fake Uncle's Farm Piatella", Link: "https://www.reddit.com/r/THCAextracts/comments/1nnpmne/whats_the_general_consensus_about_hh508_selling/" },

        ]
    },
    {
        Title: "LegendaryThcaCBD",
        Description: "Hand-selected from only the finest sources of craft Cannabis and concentrates sourced in California. Our quality and pricing are guaranteed to seriously rival your local dispensary or plug",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],
        ShipsTo: ["United States Of America"],
        IsRecommended: true, IsCheap: true, 
        Buttons: [
        { Text: "Website", Link: "https://legendarythcacbd.com/", Warning: true }
        ],
        Issues: [
            { Text: "Bitcoin only" },
            { Text: "Customer support is slow" },
       ]
    },
    {
        Title: "I Am Hemp",
        Description: "I AM HEMP Inc is a family oriented THCa/Hemp/CBD wellness company. We strive to offer pricing that’s fair and top quality. The healing power of this plant is why we do what we do.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        IsCheap: true,
        Buttons: [
        { Text: "Website", Link: "https://www.iamhemp.co/" },
        ]
    },
    {
        Title: "Canna Crunchers CBD",
        Description: "Here at CannaCrunchersCBD, we aim to supply only the highest quality products and products that our customers can both trust and love.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        IsCheap: true, IsRecommended: false, 
        Buttons: [{ Text: "Website", Link: "https://cannacruncherscbd.com/" }]
    },
    {
        Title: "Canna Cured",
        Description: "Canna Cured offers THCa in various forms to cater to different preferences: THCa Flower and THCa Concentrates.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://cannacured.com/" }]
    },
    {
        Title: "Pure Canna Co",
        Description: "At Pure Canna Co, we are committed to curating solventless cannabis products with a deep respect for purity, craftsmanship, and culture. With over 20 years of combined experience our team brings industry insight and genuine passion to every batch. We specialize in premium, full-spectrum rosin extracts made using only heat and pressure—never solvents. From fresh-pressed jars to cold-cured cultivars, every product is strain-specific, small-batch, and connoisseur-crafted to preserve the natural complexity of each plant. Backed by third-party COAs and aligned with the 2018 Farm Bill (≤0.3% Δ9 THC), we are proud to provide federally compliant, top-tier solventless experiences.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.purecannaco.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/pure.canna.co?igshid=djF5MnlpNWM5M254/" },
        ]
    },
    {
        Title: "JGrows 420",
        Description: "Top Quality Thca products. Free shipping over $150.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        IsCheap: true, IsRecommended: true,
        
        Buttons: [
        { Text: "Website", Link: "https://www.jgrows420.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/jgrows_710" },
        { Text: "Twitter", Link: "https://twitter.com/Jgrows420" },
        ],
        Issues: [
            {Text: "Goes up on prices before sales"},
        ]
    },
    {
        Title: "Zero Point Extraction",
        Description: "Zero Point Extraction is a 7,500 square foot hemp extraction facility in Prineville, Oregon that has been in operation since 2019. We are dedicated to producing and developing high-quality hemp-derived distillate, isolate, and crumble that can be incorporated into a variety of finished products such as tinctures, vapes, gummies, and capsules.",
        Sections: ["Marijuana"],
        SubSections: ["Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://zeropointextraction.com/" },
        { Text: "Location", Link: "https://maps.app.goo.gl/uK2zh9k3NhNBZ189A" }
        ]
    },
    {
        Title: "Alive and Well",
        Description: "At Alive & Well, we don’t just create products—we craft experiences. Guided by the philosophy of delivering good karma, one gram at a time, we are committed to redefining wellness through exceptional hemp products that enrich lives and support holistic health. With over 30 years of experience, research, and innovation, we strive to elevate cannabis culture by blending the best of tradition and modern science.",
        Sections: ["Marijuana"],
        SubSections: ["Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://zeropointextraction.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/aliveandwell.life/" },
        { Text: "Twitter", Link: "https://x.com/AWlifeAllDay" },
        { Text: "Youtube", Link: "https://www.youtube.com/@NickAliveandWell" }
        ]
    },
    {
        Title: "Veteran Grown Hemp",
        Description: "Exotic THCa Flower & Concentrates · Veteran-owned, lab-tested, and priced to move. Shop wax, badder, crumble & smalls.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://www.veterangrownhemp.com/" }]
    },
    {
        Title: "DR. Ganja",
        Description: "Dr.Ganja brings customers all around the world the best variety of legal hemp products.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.drganja.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/realdrganja" },
        { Text: "Twitter", Link: "https://twitter.com/realdrganja" },
        ]
    },
    {
        Title: "Southern Harvest Hemp",
        Description: "We are a mom and pop store in Texas. Our family farm and processors are in Oregon. We are Farm Bill compliant.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://southernharvesthemp.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/southern.harvest.hemp" },
        ]
    },
    {
        Title: "Diesel Hemp",
        Description: "The mission of Diesel Hemp™ is to share our passion through the boutique, high-end products that we produce ourselves. Our Cultivar-specific product line derived from our in-house bred and grown, proprietary cultivars are truly unique and rare. Our products are NOT made by someone else, our Hemp is NOT bred, grown or produced by anyone else, as we are truly a vertically integrated company, with 100% control over our supply and quality.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.dieselhemp.com/product-category/thca-flower/" },
        { Text: "Instagram", Link: "https://www.instagram.com/dieselhemp/" },
        { Text: "Facebook", Link: "https://www.facebook.com/Diesel-Hemp-111209963571204/" }
        ]
    },
    {
        Title: "High Hippy",
        Description: "The mission of Diesel Hemp™ is to share our passion through the boutique, high-end products that we produce ourselves. Our Cultivar-specific product line derived from our in-house bred and grown, proprietary cultivars are truly unique and rare. Our products are NOT made by someone else, our Hemp is NOT bred, grown or produced by anyone else, as we are truly a vertically integrated company, with 100% control over our supply and quality.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://highhippy.com/" }
        ]
    },
    {
        Title: "Eight Horses Hemp",
        Description: "We're a small farm that got into the CBD world when the founder needed a way to use his property to make a living. Our first year we grew two strains. Now, we're working with other farmers to offer quality CBD hemp flower. If we don't provide the flower ourselves, we will list the growing methods and details of the farm we sourced our flower from. We'll never take credit for something we didn't produce ourselves, and we want you to know the details behind the plants. ",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://eighthorseshemp.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/8horseshemp" }
        ]
    },
    {
        Title: "Nowicann",
        Description: "Rest easy knowing that all products on our website comply with the 2018 USDA Farm Bill, containing less than 0.3% Delta-9 THC. We prioritize both quality and full compliance, ensuring you receive products you can trust.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://nowicann.com" }
        ]
    },
    {
        Title: "YAGA Farms",
        Description: "At YAGA Farms, we are more than just cultivators—we are passionate artisans dedicated to growing the highest-quality cannabis through innovative techniques, scientific precision, and an unwavering commitment to freshness. Every strain we produce is the result of years of research, hands-on expertise, and a deep love for the plant.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.yagafarms.com/" }
        ]
    },
    {
        Title: "REVELRY HEMP",
        Description: "Revelry is a California-born cannabis and smell proof gear lifestyle brand built for life off the clock. We create high-quality THCA products and purpose-driven gear that elevate everyday experiences—whether you're deep in the woods or just unwinding at home. Our brand is rooted in a love for the outdoors, music, and good company, blending laid-back vibes with premium craftsmanship. From our THCA pre rolls and flower to our smell proof smoking kits, everything we make is designed to support a lifestyle of adventure and ease. Wherever you go, Revelry is made to go with you.",
        Sections: ["Marijuana"],
        SubSections: ["Flower"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.revelryhemp.com/" }
        ]
    },
    {
        Title: "Preston Herb Co",
        Description: "Discover premium herbal products at Preston Herb Co. Explore our selection of natural remedies and wellness solutions.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.prestonherbco.com/" },
        { Text: "Twitter", Link: "https://x.com/Prestonherbco" },
        { Text: "Instagram", Link: "https://www.instagram.com/prestonherbco" },
        { Text: "TikTok", Link: "https://www.tiktok.com/@prestonherbco" },
        { Text: "Discord", Link: "https://discord.gg/9whS9eVBYp" }
        ]
    },
    {
        Title: "Smoky Mountain CBD",
        Description: "Every item we offer is made with peak-quality hemp, directly sourced from plants grown and harvested in the Smoky Mountains of East Tennessee.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.smokymountaincbd.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/smokymountaincbd/" },
        { Text: "Instagram", Link: "https://www.instagram.com/smokymountaincbd/?hl=en" },
        ]
    },
    {
        Title: "Wildflower Hemp Co",
        Description: "At Wildflower Hemp Co, we understand that true quality cannot be rushed. That’s why we allow our carefully cultivated plants to undergo a full month cure before processing. This meticulous approach guarantees the perfect moisture ratio of water to flower, resulting in a smooth and enjoyable burn with every gram.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://wildflowerhempco.com/" }
        ]
    },
    {
        Title: "Lucky Elk",
        Description: "Small-batch THCa flower and concentrates grown by the best farmers in the Pacific Northwest—cultivated with organic practices, rich in terpenes, and crafted with care from seed to sale.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://luckyelk.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/luckyelkhemp/" },
        { Text: "Instagram", Link: "https://www.instagram.com/luckyelkhemp/" },
        { Text: "Twitter", Link: "https://twitter.com/luckyelkhemp" }
        ]
    },
    {
        Title: "Blue Ridge Bubble",
        Description: "Experience all forms of Hashish, Static Sift, Bubble Hash, Rosin, Jam & More, Piatella, Mutantella, & Various other experimental creations.",
        Sections: ["Marijuana"],
        SubSections: ["Concentrates"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://brbubble.com/" },
        ]
    },
    {
        Title: "Revive Hemp",
        Description: "Experience all forms of Hashish, Static Sift, Bubble Hash, Rosin, Jam & More, Piatella, Mutantella, & Various other experimental creations.",
        Sections: ["Marijuana"],
        SubSections: ["Concentrates"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://revivehemp.store/" },
        { Text: "TikTok", Link: "https://www.tiktok.com/@revivehemp3" }
        ]
    },
    {
        Title: "Arete Hemp",
        Description: "Organic Premium Cannabis Products - We are a family owned and operated company that is purpose driven working hard to bring the purest organic natural remedies to market.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://aretehemp.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/aretehemp" },
        { Text: "Instagram", Link: "https://www.instagram.com/aretegoodlife/" },
        { Text: "Twitter", Link: "https://www.twitter.com/aretehemp" },
        { Text: "Youtube", Link: "https://www.youtube.com/channel/UCCYgm16LAFmlCE_VVvGv70Q" },
        { Text: "TikTok", Link: "https://www.tiktok.com/@aretehemp" }
        ]
    },
    {
        Title: "Elk Creek Genetics",
        Description: "Sun-grown, living soil, no-till, organic, Mendocino County cannabis cultivation since 1978. Award Winning Strains, Expert Growers, Elk Creek Genetics.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.elkcreekgenetics.com/category/all-products" },

        ] // Use link to shop since they're home page is so fucking confusing.
    },
    {
        Title: "Herbal Healers CBD",
        Description: "Herbal Healers was started in 2017 out of my college dorm room, on a mission to provide humanity with the highest quality CBD products and education at a fair price. I have always loved cannabis, and in 2017 I saw an opportunity to get in on an industry that would be able to make a real positive impact on people's lives. At the time I was in college for health sciences, not really enjoying what I was learning and knew that wanted to start a business before I graduated, so that I'd have something established for when I graduated. So, I asked my mom if she would help me get it started, and since she already has a few successful businesses, it would provide me the knowledge and habits to run a successful business. She agreed, fast forward to now and she is still along for the ride! Check out what separates us below!",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://herbalhealerscbd.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/theherbalhealers/" },
        { Text: "Instagram", Link: "https://www.instagram.com/herbalhealerscbd/" },
        { Text: "Youtube", Link: "https://www.youtube.com/@herbalhealerscbd1824/" },
        ]
    },
    {
        Title: "Earthy Select",
        Description: "Our potency levels range from mild to strong, so you can control your own cannabis experience. Our Delta-8, Delta-9, and Delta-10 THC and THCa products reward you with feelings of relaxation, relief, energy, creativity and joy to the levels you desire.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.earthyselect.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/earthyselect/" },
        { Text: "Instagram", Link: "https://www.instagram.com/earthyselect/" },
        { Text: "Twitter", Link: "https://twitter.com/earthyselect/" },
        { Text: "Youtube", Link: "https://www.youtube.com/channel/UCGTWWqoqvPe4hKamfl7zLDA/" },
        { Text: "TikTok", Link: "https://www.tiktok.com/@earthyselect/" }
        ]
    },
    {
        Title: "Hemp Hop",
        Description: "Hemp Hop started because of the significant experience with a family member. In 2014, after sourcing CBD capsules, he noticed some relief in different areas. Today he is a healthy, happy person. The delivery service was started to ensure these hemp products get to other families as well. We aim to create and sell quality, affordable products for everyone.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://hemphop.co/" },
        { Text: "Instagram", Link: "https://www.instagram.com/hemphop.farms" },
        { Text: "Twitter", Link: "https://twitter.com/hemphop" },
        ]
    },
    {
        Title: "Roz From Frasier",
        Description: "The folks behind @rozfromfrasier have been involved in the cannabis community since their teenage years. Having witnessed many trends and ideas come and go over the decades, they realized that the cannabis world is changing rapidly and finally decided it was high time to start interacting with the cannabis community in a more modern context.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://rozfromfrasier.com/" }]
    },
    {
        Title: "The Southern Maryland Experience Hemp",
        Description: "Since the very beginning our top priorities have been quality, safety, satisfaction, and good pricing. We continue to uphold these values to this day. Bringing customers top quality organic products, from Greenhouse, Light Deps (light deprivation) and Indoor grown methods. Our Company was founded in the Southern Maryland area and was built from the ground up through passion and dedication to consistent quality and equitable business practice. We look forward with enthusiasm and we welcome you to The Southern Maryland Experience.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://thesomdexp.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/thesomdexperiencellc" },
        { Text: "Facebook", Link: "https://www.facebook.com/TheSOMDExperience" },
        { Text: "Snapchat", Link: "https://www.snapchat.com/add/somdexperience" },
        { Text: "Youtube", Link: "https://www.youtube.com/channel/UC8ITXDDtrw8AretuBqT6FNQ" },
        { Text: "Reddit", Link: "https://www.reddit.com/user/somdexp" }
        ]
    },
    {
        Title: "Green Gas Hemp",
        Description: "At GreenGas, we’re delivering a new generation of hemp — fresh, potent, and fully compliant. Thanks to the 2018 Farm Bill, hemp products containing less than 0.3% Delta-9 THC by dry weight are federally legal. Our flower comes from the same plant species as traditional marijuana, but it’s carefully cultivated and processed to meet strict federal standards — giving you the premium quality you deserve, without the worry.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://greengashemp.me/" },

        ]
    },
    {
        Title: "Sesh City",
        Description: "Shop THCa products at SeshCity! Buy your THCa shatter, flower, dabs, vapes and more online! Free shipping! Ounces of dabs for under $290! NEW DROPS!",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://seshcity.shop/" }]
    },
    {
        Title: "Asheville Dispensary",
        Description: "Asheville Dispensary, the premier cannabis destination in Asheville, NC, & Chattanooga, TN. Buy THCA flower, Delta 9 THC, & CBD. Shop online.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://avldispensary.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/avldispensary/" },
        { Text: "Facebook", Link: "https://www.facebook.com/avldispensary.asheville/" },
        { Text: "Twitter", Link: "https://x.com/avldispensary/" }
        ]
    },
    {
        Title: "Sticky Buds",
        Description: "At Sticky Buds, we pride ourselves on offering the highest quality cannabis products on the market at unbeatable prices. Whether you’re in search of top-shelf flower, cutting-edge vapes, or potent concentrates, we’ve got you covered. With our commitment to excellence, we ensure that every product meets rigorous standards for potency and purity. Plus, with lightning-fast shipping, all orders are dispatched within 24 hours, so you can enjoy your favorite products sooner. Explore our wide selection and experience the Sticky Buds difference today!",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://sticky-buds.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/sti.ckybuds420/" }
        ]
    },
    {
        Title: "Snap Dragon Hemp",
        Description: "Welcome to our cannabis wonderland, where passion meets excellence. Immerse yourself in a world of unparalleled quality and innovation. Our mission is to provide you with top-notch products, exceptional customer service, and a sense of community. Explore our offerings, embrace the magic of cannabis, and unlock a realm of endless possibilities. Join us on this green adventure and let your cannabis journey begin.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.snapdragonhemp.com/" }
        ]
    },
    {
        Title: "Boston Hemp Inc",
        Description: "Tired of buying overpriced and low-quality products in fancy packaging? At Boston Hemp Inc. we stay true to our grassroots approach and are consistent in providing the highest quality products and raw materials at an affordable price. After five years of being in business since the inception of the hemp industry, Boston Hemp Inc has made it a priority to provide our customers with the highest quality hemp products, lab tested, and 100% insured for your maximum confidence in purity.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://bostonhempinc.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/boston_hempire/" },
        { Text: "Facebook", Link: "https://www.facebook.com/bostonhempire/" },
        { Text: "Twitter", Link: "https://x.com/BostonHempire/" }
        ]
    },
    {
        Title: "Elyxr",
        Description: "ELYXR LA was founded in October 2020 with a focus on providing high-quality Delta-8 products, but the brand’s success didn’t happen overnight. By leveraging the strengths of its individual member groups and building a strong infrastructure as a team, ELYXR LA was able to quickly expand its product line and customer base. Unlike many other brands, ELYXR LA is committed to serving a deeper purpose by providing exceptional product quality, artistic design, and unparalleled customer service. With over 2,000+ products, ELYXR LA sets itself apart by offering same-day shipping and putting quality before profit. ELYXR LA is a brand that customers can trust.",
        Sections: ["Marijuana", "Psychedelics"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles", "4-PrO-DMT", "7-OH"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.elyxr.com/" },
        { Text: "Instagram", Link: "https://www.facebook.com/elyxrla101/" },
        { Text: "Facebook", Link: "https://www.facebook.com/bostonhempire/" },
        { Text: "Twitter", Link: "https://x.com/elyxrla" },
        { Text: "TikTok", Link: "https://www.tiktok.com/@elyxr_la" }
        ]
    },
    {
        Title: "Binoid",
        Description: "Binoid is your best source for the highest quality and effective products made from hemp-derived CBD & Delta 8 THC. Based in Los Angeles, California we at Binoid are dedicated to providing you with CBD & Delta 8 products you can trust, and enjoy.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.binoidcbd.com/" }
        ]
    },
    {
        Title: "Stoney Branch",
        Description: "We don't just grow cannabis; we cultivate it in a living, thriving soil system we've crafted from scratch. Our precise blend of coco, peat moss, compost, lava rock & minerals comes to life when properly made compost extract hits the soil. We closely analyze & maintain our ecosystem using microscope analysis and soil testing. These are our living soil beds filled with soil we will use for years to come. While other growers discard soil after each harvest, we're cultivating a permanent, living environment that gets richer and more robust with every cycle.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://stoneybranch.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/stoneybranchag/" }
        ]
    },
    {
        Title: "Holy City Farms",
        Description: "Holy City Farms is a family-owned and operated hemp farm in South Carolina offering premium type 2 and 3 CBD products delivered to your door.",
        Sections: ["Marijuana"],
        SubSections: ["Flower"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://holycityfarms.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/holycityfarms/" },
        { Text: "Facebook", Link: "https://p.facebook.com/HolyCityFarms/" },
        { Text: "Twitter", Link: "https://x.com/HolyCityFarms" },
        { Text: "Reddit", Link: "https://www.reddit.com/user/holycityfarms" },
        { Text: "Youtube", Link: "https://www.youtube.com/@holycityfarms" }
        ]
    },
    {
        Title: "Golden Hour Hemp",
        Description: "Golden Hour Hemp started in 2020 as a hemp farm in Waldo, Florida with 6,000 sqft of greenhouses, 10,000 sqft of garden space, and a 5-acre field. We grew our own flower for 2 years, but farming cannabis in Florida is no easy task, and we wanted to focus on our newest pivot into processing. The time on the farm was a great experience we will always cherish, and  we hope to return to farming again in 2025.  By May of 2021 we opened our first processing and production facility, where we focused primarily on making joints and blunts for shops and brands nationwide. And by 2022, instead of growing our own flower in Florida, we partnered with an Oregon farm who grows all of our flower for us. As of late 2023 we have opened up our website to individual consumers, giving brand-level quality at wholesale pricing directly to the end customer.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://goldenhourhemp.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/goldenhourhemp/" },
        { Text: "Facebook", Link: "https://www.facebook.com/GoldenHourHemp" }
        ]
    },
    {
        Title: "KIND",
        Description: "At Smoke Kind, we are passionate about delivering only the finest products to improve your lifestyle. Whether you're seeking premium strains, exclusive edibles, or top-tier vapes, we carefully curate each item to ensure quality, satisfaction.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://smokekind.com/" },
        { Text: "Instagram", Link: "https://x.com/SmokeKindTHCa" },
        ]
    },
    {
        Title: "Black Tie CBD",
        Description: "Our THCA flower rivals top-shelf dispensary cannabis. Grown indoors and hand-trimmed, our strains deliver dense nugs, loud terpenes, and consistent effects—without the high price or legal risks. We back every batch with third-party lab reports, full compliance under the 2018 Farm Bill, and a 30-day satisfaction guarantee.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.blacktiecbd.net/" },
        { Text: "Instagram", Link: "https://www.instagram.com/blacktiestandard/" }
        ]
    },
    {
        Title: "Secret Nature",
        Description: "Feeling is the secret, and our mission is to help people feel better everyday. High-CBD, low-THC means all the benefits and none of the common negative side effects like anxiety and paranoia. We have been breeding and growing high CBD cannabis for over 10 years, and are excited to finally offer these revolutionary products to people all over the world. It’s time for a new wave of cannabis that can enhance your lifestyle, not hinder it.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://secretnature.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/secretnature_ca/" }
        ]
    },
    {
        Title: "Exhale Wellness",
        Description: "Feeling is the secret, and our mission is to help people feel better everyday. High-CBD, low-THC means all the benefits and none of the common negative side effects like anxiety and paranoia. We have been breeding and growing high CBD cannabis for over 10 years, and are excited to finally offer these revolutionary products to people all over the world. It’s time for a new wave of cannabis that can enhance your lifestyle, not hinder it.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://exhalewell.com/" }]
    },
    {
        Title: "Vivimu",
        Description: "Feeling is the secret, and our mission is to help people feel better everyday. High-CBD, low-THC means all the benefits and none of the common negative side effects like anxiety and paranoia. We have been breeding and growing high CBD cannabis for over 10 years, and are excited to finally offer these revolutionary products to people all over the world. It’s time for a new wave of cannabis that can enhance your lifestyle, not hinder it.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        IsCheap: true, 
        Buttons: [
        { Text: "Website", Link: "https://vivimu.com/" }
        ],
        Issues: [
        { Text: "Distillate contamination (unresolved)", Link: "https://www.reddit.com/r/altcannabinoids/comments/1gjpu6q/vivimu_order_dirty/" },
        { Text: "Distillate contamination 2 (unresolved)", Link: "https://www.reddit.com/r/altcannabinoids/comments/17m1hsw/vivimu_is_hit_or_miss_quality_no_reply_over_bunk/" }
        ]
    },
    {
        Title: "MC Nutraceuticals",
        Description: "MC Nutraceuticals, a subsidiary of MC Global Holdings, is focused on bringing brands the highest quality input materials for their customers, along with same day shipments for our raw materials. Our pricing stays completely competitive and will stay ahead of the price compression in the industry, to make sure that you are getting the best quality, service, and pricing the industry can provide. We also outsource white labeling for our customers, formulations, and custom product development through our partner network.",
        Sections: ["Wholesale"],
        ShipsTo: ["United States Of America"],
        
        Buttons: [{ Text: "Website", Link: "https://mcnutraceuticals.com/" }]
    },
    {
        Title: "Hemp Flower Co",
        Description: "No description currently.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],

        Buttons: [{ Text: "Website", Link: "https://hemp-flower.com/" }]
    },
    {
        Title: "White Ash Reserve",
        Description: "No description currently.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://whiteashreserve.com/" }]
    },
    {
        Title: "Cosmic Hemp Gardens",
        Description: "Cosmic Hemp Gardens was created from a passion for finding the highest quality hemp flower in a fast growing and ever-changing environment. Our goal is to consistently provide our clients with access to some of the best craft hemp flower available on the market. We pride ourselves on our customer service and attention to detail and hope to earn your business for years to come.",
        Sections: ["Marijuana"],
        SubSections: ["Flower"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.cosmichempgardens.com/" }
        ]
    },
    {
        Title: "Akira Botanicals",
        Description: "We are a diversified hemp farm located in Marshall, NC focused on producing the highest quality CBD, CBG, and CBDV products on the market. Our mission is to create products as though the health and well-being of our loved ones depend on it. This starts with the plants themselves, which is why we grow using Beyond Organic methods. This means no pesticides, no synthetic fertilizers—no exceptions. Plant medicine must be pure and without adulterants which is why we focus our energy on small-batch cultivation techniques that allow us to give each plant the attention it deserves. The most potent and effective products will naturally be derived from plants grown this way.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.akirabotanicals.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/akirabotanicals/" },
        { Text: "Facebook", Link: "https://www.facebook.com/Akira-Botanicals-2164492496944524/" },
        { Text: "Youtube", Link: "https://www.youtube.com/channel/UCbsQjbE0aLwHX0LS7UpkBuw" }
        ]
    },
    {
        Title: "Best Buds",
        Description: " Best Buds is a online based premium cannabis company headquartered in the Lowcountry of South Carolina. We focus on top shelf legal cannabis products including flower, edibles, vapes and concentrates. All of Best Buds goods are derived from hemp and are 2018 Farm Bill compliant and Federally legal, meaning you can feel comfortable and safe ordering our products online for discreet delivery to your hands!",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://bestbudsbff.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/bestbudsbff.com_/" },
        { Text: "Facebook", Link: "https://www.facebook.com/bestbudsCHS" },
        { Text: "Youtube", Link: "https://www.youtube.com/channel/UCeTT_ylLa4mwzCJFHwLueYQ" }
        ]
    },
    {
        Title: "Best Kept Secret",
        Description: "We’re not just here to sell you something—we’re here to share a secret. A secret that could change the way you think about hemp. A secret that’s about pure, premium, and perfectly crafted hemp. And the best part? We’re only getting started.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.bkshemp.com/" }
        ]
    },
    {
        Title: "Black Owl Hemp Clinic",
        Description: "We’re a family-owned business driven by a passion for the science of cannabinoids and a commitment to educating our customers on how they work within the body. What sets us apart? It’s our focus on education, exclusive formulations, and using only the highest quality ingredients in all of our products. 🌱 We hold ourselves to the highest standards, with everything produced in our own lab and third-party tested for quality and transparency. As a Christian family, we believe in the power of plant-based medicine and its responsible use. 🌿",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://blackowlhempclinic.com/" },
        { Text: "Instagram", Link: "https://www.instagram.com/blackowlcbd/" },
        { Text: "Facebook", Link: "https://facebook.com/blackowlcbd" }
        ]
    },
    {
        Title: "Fern Valley",
        Description: "In accordance with our commitment to employing organic cultivation practices, every flower strain is cultivated without using any products containing microbial, mycotoxins, heavy metals and pesticides, or foreign matter. This policy also applies to any products derived from any of our hemp flower strains. Samples from every type of flower strain and other products are submitted to an independent and government-approved testing laboratory to provide you with a third-party analysis of the cannabinoid and terpene content We listen to customer feedback and make adjustments accordingly We love what we do and hold each other accountable making it easy to provide superior products, come try us out!",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://fernvalleyfarms.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/fernvalleycbd" },
        { Text: "Instagram", Link: "https://www.instagram.com/fernvalleycbd/" },
        { Text: "Youtube", Link: "https://www.youtube.com/@FernValleyFarms" }
        ]
    },
    {
        Title: "Gold Standard CBD",
        Description: "Gold Standard isn’t just setting a new standard in cannabis—we’re leading a movement. For too long, people have faced uncertainty and inconsistency in their search for clean, high-quality cannabis. That ends now. We connect people with the finest cannabis—pure, potent, and trustworthy—so they can elevate their well-being, expand their potential, and experience life at a higher level. Rooted in integrity and innovation, we’re here to raise the bar for quality, access, and trust in the cannabis industry.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://goldcbd.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/GoldStandardCBD/" },
        { Text: "Instagram", Link: "https://www.instagram.com/gold_cbd/" }
        ]
    },
    {
        Title: "Hand Crafted Farmers",
        Description: "",
        Sections: ["Marijuana"],
        SubSections: ["Flower"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://handcraftedfarmers.com/" }]
    },
    {
        Title: "Retro Bakery",
        Description: "",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://retrobakery.net/" },
        { Text: "Twitter", Link: "https://twitter.com/RetroBakery420" },
        { Text: "Instagram", Link: "https://www.instagram.com/retro.bakery" },
        { Text: "Youtube", Link: "https://www.youtube.com/channel/UC1iB9kPxYtjtwkGYZcq1WlQ" }
        ]
    },
    {
        Title: "Kache Hemp",
        Description: "At Kache, we’re passionate about crafting premium THCA products that deliver unmatched quality, purity, and experience. With over 20 years of industry expertise, we bring deep hemp knowledge and a commitment to excellence in everything we do—from top-shelf flower and high-end extracts to innovative vaporizers and delicious edibles. Our focus is simple: curate premium experiences for connoisseurs who care about what they consume. Every Kache product is single sourced, tested, and formulated with integrity, ensuring clean natural ingredients and consistent potency. In a market full of noise, Kache stands out as a brand you can trust—rooted in experience, backed by science, and driven by passion. Welcome to better hemp. Welcome to Kache.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://kache.shop/" },
        { Text: "Facebook", Link: "https://www.facebook.com/profile.php?id=61580937033659" },
        { Text: "Twitter", Link: "https://x.com/kachethca?lang=en" },
        { Text: "Instagram", Link: "https://www.instagram.com/kache.hemp/" },
        { Text: "TikTok", Link: "https://www.tiktok.com/@kache.hemp" }
        ]
    },
    {
        Title: "Top Cola Tennessee",
        Description: "No description currently.",
        Sections: ["Marijuana"],
        SubSections: ["Flower"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://topcolatn.com/" },
        { Text: "Instagram", Link: "https://instagram.com/topcola_cbd/" }
        ]
    },
        {
        Title: "Amish Grown",
        Description: "Amish Grown is a premium supplier of high-quality THCa products that are handcrafted by skilled artisans using traditional methods. We pride ourselves on our commitment to sustainable farming practices and our dedication to producing pure and potent THCa that delivers a satisfying and enjoyable experience.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.amishgrown.com/s/shop" },
        { Text: "Instagram", Link: "https://instagram.com/topcola_cbd/" }
        ]
    },
    {
        Title: "Granny's",
        Description: "Experience the best in cannabis-infused snacks with Granny's. Our premium-quality gummies and pretzels are made with top-grade ingredients, ensuring consistent potency and flavor. Discover why Granny's is the trusted choice for delicious, reliable cannabis edibles.",
        Sections: ["Marijuana"],
        SubSections: ["Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://yourgrannys.com/" }]
    },
    {
        Title: "Alderson Family Farms",
        Description: "At Alderson Family Farms, we blend quality with care, crafting exceptional hemp strains that support your relaxation and wellness needs.",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],
        ShipsTo: ["United States Of America"],
        IsRecommended: true,
        Buttons: [
        { Text: "Website", Link: "https://aldersonfamilyfarms.store/" },
        { Text: "Twitter", Link: "https://x.com/martybacardi89"},
        { Text: "Facebook", Link: "https://www.facebook.com/aldersonfamilyfarms" }
        ]
    },

    // Psychedelics
    {
        Title: "Wicked Tablets",
        Description: "Wicked Tablets lives for the relentless pursuit to create unique, reliable, and responsibly sourced mind-expanding products more accessible to curious, conscious adults. Wicked is a small, independent brand aiming to leave a big mark in the development of psychedelic treatments, and responsible recreational use",
        Sections: ["Psychedelics", "Opioids"],
        SubSections: ["5-MAPB", "4-HO-MET", "4-HO-DET", "4-PrO-DMT", "SR-17018", "MGM-15", "7-OH"],
        ShipsTo: ["United States Of America"],

        IsNew: false, IsRecommended: true,
        
        Buttons: [
        { Text: "Website", Link: "https://wickedtablets.store/" }
        ]
    },
    {
        Title: "XUM / ADVANCED MYCOLOG",
        Description: "Before we even started our company, we have been long-time psychedelic enthusiasts. Improving access to the benefits of psychedelics has been one of our major goals, and along with our affection for mycology we were happy to bring the magic of mushrooms to people through our grow bags mushroom genetics. We will continue to do so, for those that desire them. We know, however, that mushrooms take time to grow, and metocin is an accessible compound that produces effects we are similarly fond of.",
        Sections: ["Psychedelics"],
        SubSections: ["5-MAPB", "4-HO-MET"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://xumtrip.com/" },
        { Text: "Discord", Link: "https://discord.gg/mgBr6wjY" },
        { Text: "Facebook", Link: "https://www.facebook.com/advancedmyco" },
        { Text: "Twitter", Link: "https://twitter.com/advancedmyco" },
        { Text: "Reddit", Link: "https://www.reddit.com/r/advancedmyco/" },
        { Text: "Instagram", Link: "https://instagram.com/advancedmyco" },
        ]
    },
    {
        Title: "SŌKO CANNABIS",
        Description: "SōKO Cannabis is the highest rated top-shelf luxury Cannabis and Psychedelics company with only the most potent and pure products available online. We use only Premium organic cannabis and pure grade Metocin from the happy farmers and scientists who care for their craft.",
        Sections: ["Psychedelics"],
        SubSections: ["5-MAPB", "4-HO-MET"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://sokocanna.com/" },
        { Text: "TikTok", Link: "https://www.tiktok.com/@sokocanna" },
        { Text: "Facebook", Link: "https://www.facebook.com/Thesokocanna" },
        { Text: "Youtube", Link: "https://www.youtube.com/channel/UCJS_NQuFawULkhViEkwrS-A" },
        { Text: "Instagram", Link: "https://www.instagram.com/sokocannabis/" },
        ]
    },
    {
        Title: "CHEMIVERSE.CA",
        Description: "Chemiverse is a Canadian research chemical company (chemiverse.ca) dedicated to sourcing the highest quality tryptamines and lysergamides. Our mission is to share innovative chemicals to support revolutionary laboratory research.  All our chemicals are tested by a third party laboratory to ensure purity and no contaminants.",
        Sections: ["Psychedelics"],
        SubSections: ["1cP-AL-LAD", "1P-LSD", "1V-LSD", "4-AcO-DMT", "4-AcO-MET", "4-HO-MET", "4-PrO-MET", "5-MeO-DMT", "5-MeO-MiPT", "5-MeO-MALT", "N,N-Dipropyltryptamine (DPT)", "Methallylescaline (MAL)"],
        ShipsTo: ["International", "United States Of America", "Canada"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://chemiverse.ca/" }
        ]
    },
    {
        Title: "CHEMS.CA",
        Description: "Welcome to Chems.ca — North America’s trusted source for authentic, high-purity research materials. Our small, highly dedicated team is focused on one thing: providing researchers with consistent, verified, and reliable compounds sourced only from reputable laboratories. When you choose Chems.ca, you’re not just receiving high-quality products — you’re gaining a partner who genuinely cares about your analytical research. Every compound in our catalog undergoes third-party testing to confirm identity and purity. No substitutes. No inconsistencies. No unexpected deviations. Safety is at the core of everything we do. All materials are stored in cold-regulated environments and nothing is pre-packaged. Every order is freshly prepared inside a clean, sealed environment, separate from storage, ensuring your samples remain uncontaminated.",
        Sections: ["Psychedelics"],
        SubSections: ["ALD-52", "5-MeO-MiPT", "1P-LSD", "5-MeO-MALT", "4-PrO-DMT", "1V-LSD", "4-HO-MET", "1cP-LSD", "ETH-LAD", "4-HO-MiPT", "1D-LSD"],
        ShipsTo: ["International", "United States Of America", "Canada"],

        IsNew: false, RequiresID: true,
        
        Buttons: [
        { Text: "Website", Link: "https://www.chems.ca/" }
        ]
    },
    {
        Title: "PCT.Zone",
        Description: "",
        Sections: ["Peptides", "Other"],
        SubSections: ["Gabapentin", "Retatrutide"],
        ShipsTo: ["International", "United States Of America", "Australia", "Canada"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://pctzone.net/" }
        ]
    },
    {
        Title: "Steroidify",
        Description: "Our vision is to build a reputation for enhancing the quality of life for sports enthusiasts and those who embrace an active lifestyle. We are dedicated to helping people not only look great but also feel their best. Our product range caters to both men and women, from hardcore bodybuilders to everyday fitness enthusiasts. Whether you're pushing your limits in the gym or maintaining a healthy lifestyle, we have the perfect supplements to support your journey. We are backed by a team of highly skilled professionals, including quality control specialists and market researchers, who ensure that we source only the highest-quality products tailored to meet our customers' needs. Our IT specialists are committed to safeguarding the integrity of our online store and, most importantly, protecting customer data with the highest standards of security. Our Shipping Managers ensure prompt deliveries, while our dedicated customer service team is always ready to respond to any queries or concerns within 24 hours.",
        Sections: ["Peptides", "Other"],
        SubSections: ["Retatrutide"],
        ShipsTo: ["International", "United States Of America", "Australia", "Canada"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://steroidify.ltd/" }
        ]
    },
    // Kratom
    {
        Title: "KRATOM DISTRO",
        Description: "With a combined 40 years of experience in importing and selling wholesale kratom Distro, our team has seen just about everything there is to see in this industry.  From bad harvests to import bans to doctored imported powder and customs seizures, we’ve figured out who to trust for our south Asian kratom sources, and what it takes to get the world’s best kratom into your hands without any hassles or stress.  Give us a little patience as we nail down the retail side of things and we we will be the last site you ever need for kratom.",
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-Hydroxymitragynine", "MGM-15"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://www.kratomdistro.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/groups/833891957420924" }
        ]
    },
    {
        Title: "The Powder Solutions",
        Description: "At Powder Solutions, we pride ourselves on providing the finest 7-OH and mitragynine products available. Our commitment to quality and integrity ensures that every product meets the highest standards. We believe in transparency and never cut corners, delivering only the best for our customers. Experience the difference with Powder Solutions! In a fierce market that has new 7OH Tablets and even entirely new vendors popping up every week… The competition is constant. There’s one problem… Most of these vendors have effective 7-OH for your first and second order… then BAM!  For your next order, you finally place a large one and you end up getting diluted 7-Hydroxymitragynine. At PS, we never sell a product we don’t enjoy ourself. Whether it’s our 7OH Tablets, 7OH powder or our tasty 7-OH Strips, we commit to CONSTANT quality in every product we sell PERMANENTLY!",
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-Hydroxymitragynine", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://thepowdersolutions.com/" }
        ]
    },
    {
        Title: "7STAX",
        Description: "No description currently.",
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-Hydroxymitragynine", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://7stax.com/" }
        ]
    },
    {
        Title: "Pure Leaf Kratom",
        Description: "We offer Kratom 100% guaranteed organic and free from additives. Pure Leaf Kratom is entirely transparent and only seeks to connect Kratom lovers to the highest quality Kratom in the market. Every product we offer is safe and chemical-free. So browse with a sense of security that you’re at a trusted source for all things kratom. Our partners harvest the Kratom plant with natural methods passed down for centuries. What you get is a pure experience with a brand that’s on your side.",
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-Hydroxymitragynine", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://pureleafkratom.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/groups/833891957420924" }
        ]
    },
    {
        Title: "7OHMZ",
        Description: "We are proud to be the pioneers of this industry, leading the way as the first company to introduce a pure 7-hydroxymitragynine product to the market. Our commitment to innovation and quality has set the standard, inspiring others to follow in our footsteps. While our product is often imitated, it remains unmatched in its purity and effectiveness—a true testament to our dedication to excellence.",
        Sections: ["Opioids"],
        SubSections: ["7-Hydroxymitragynine"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://7ohmz.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/groups/833891957420924" }
        ]
    },
    {
        Title: "Bulk Kratom Now",
        Description: "Bulk Kratom Now was started to fill the need for quality bulk kratom online. Our goal is to make kratom more affordable to all, whether it be a single buyer on a tight budget, or a company looking for wholesale. There is a better way to buy kratom – a more cost effective and less intrusive process. When buying bulk kratom online from us, you can save a large amount of money and earn redeemable loyalty reward points on each and every purchase. Bulk kratom Now isn’t your typical online kratom vendor because we stock over 33 different strains of kratom powder and capsules. The wide diversity of kratom strains is something we take pride in. Rest assured that even though we are a bulk kratom vendor, we offer high-quality leaf and you can expect the same premium kratom sold for high prices locally and online but at a much lower price point.",
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-Hydroxymitragynine", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://bulkkratomnow.com//" }
        ]
    },
    {
        Title: "Golden Monk",
        Description: "Certified by the American Kratom Association, Golden Monk combines the latest in kratom cultivation practices with the reverence of ancient traditions to provide the highest quality kratom on the market.",
        Sections: ["Opioids"],
        SubSections: ["Natural kratom"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://goldenmonk.com/" }
        ]
    },
    {
        Title: "BRONX EXTRACTS",
        Description: "At Bronx Extracts we pride ourselves on providing the finest 7-OH and mitragynine products available. Our commitment to quality and integrity ensures that every product meets the highest standards. We believe in transparency and never cut corners, delivering only the best for our customers. Experience the difference with Bronx Extracts!",
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-Hydroxymitragynine", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://bxtracts.com/" }
        ]
    },
    {
        Title: "TBK YELLOW",
        Description: "No description currently.",
        Sections: ["Opioids"],
        SubSections: ["MGM-15"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://tbkyellow.com" }
        ]
    },
    {
        Title: "ETXtracts",
        Description: "No description currently.",
        Sections: ["Opioids"],
        SubSections: ["7-Hydroxymitragynine", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://etxtracts.com" },
        { Text: "Discord", Link: "https://discord.com/invite/pfEcCsMq" }
        ]
    },
    {
        Title: "MG Medica Labs",
        Description: "No description currently.",
        Sections: ["Opioids"],
        SubSections: ["MGM-15"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://mgmedicalabs.org/" },
        { Text: "Telegram", Link: "https://t.me/+ORHfSvopRithNjdh" }
        ]
    },
    {
        Title: "Stout Alkz",
        Description: "We’re not here to flood the market. We’re here to raise the bar. Others have approached us with cheaper shortcuts – we don’t take them. We stand by what matters: quality over quantity, integrity over hype, and products that never disappoint. Stout Alkz didn’t join the movement. We built it. For the customer. For the research. For the standar",
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-Hydroxymitragynine", "Pseudoindoxyl", "MGM-15", "SR-17018"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://stoutalkz.com" }
        ]
    },
    {
        Title: "Koalaty Kratom",
        Description: "No description currently.",
        Sections: ["Opioids"],
        SubSections: ["7-Hydroxymitragynine", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://koalatykratom.com" }
        ]
    },
    {
        Title: "Catalyst Edge Labs",
        Description: "At Catalyst Edge Labs, we’re all about making science approachable and exciting for everyone. We started this journey because we believe that groundbreaking tools like 7-OH shouldn’t just be for big labs or elite researchers—they should be available to anyone with a spark of curiosity.",
        Sections: ["Opioids"],
        SubSections: ["7-Hydroxymitragynine", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://catalystedgelab.com" }
        ]
    },
    {
        Title: "Ritually Pure",
        Description: "Try our proprietary Kratom extract. None of our products have synthetic kratom alkaloids. Experience the difference of our exclusive water-based photo conversion process. No solvents, no synthetic chemicals - just pure MGM at honest prices (MGM is 2.5x potent as synthetic kratom alkaloids with same effects, lasts 10 hours!).",
        Sections: ["Opioids"],
        SubSections: ["7-Hydroxymitragynine", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://rituallypure.com" }
        ]
    },
    {
        Title: "Rift Chems",
        Description: "Rift Chems is the best site to buy research chemicals in the USA, including: Bromazolam, Rilmazafone, Clobromazolam, O-dsmt, 2fdck, SR-17018, Fluoprazolam, 2FXiPr, 4fmph, , Phenazolam, 4-metmp, Bromonordiazepam & more.",
        Sections: ["Psychedelics", "Dissociatives", "Stimulants", "Benzodiazepines", "Other"],
        SubSections: ["Clonazepam", "Ritalin", "Tramadol", "Tapetadol", "Tapentadol", "Fluoprazolam", "4-FMA", "2-FMA", "3,4-MD-PCP", "3-HO-PCP", "4-PrO-DMT", "2F-DCK", "3-ME-PCP", "3-MEO-PCE", "2-FXiPr", "Fluorexetamine", "Isophenidine", "Fluprazolam", "Rilmazofone", "Clobromazolam", "Norflurazepam", "Pynazolam", "Bromonordiazepam", "N-Ethyl-Nitrazepam", "Ethyl-Flualprazolam", "Ethyl-Bromazolam", "Isopropylphenidate", "O-DSMT", "O-PCE"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://riftchems.com/" }
        ]
    },
    {
        Title: "EVERYCHEM",
        Description: "We are an innovative company that focuses on providing high-quality reference materials for research labs across the globe. With the best chemists and manufacturers, you are guaranteed the safety and efficacy expected of a leader in the industry.",
        Sections: ["Peptides", "Other"],
        ShipsTo: ["United States Of America"],
        SubSections: ["GB-115"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://everychem.com/" }
        ]
    },
    {
        Title: "OS GEAR",
        Description: "⚠️ ATTENTION - SCAM ALERT! Beware of scam websites - osgear.ORG and osgear.CO⚠️ ✅ osgear.TO is the only genuine site!",
        Sections: ["Peptides", "Other"],
        SubSections: ["Retatrutide", "Trenbolone", "CJC-1295", "Ipamorelin", "BPC-157", "TB-500", "IGF-1 LR3", "GHRP-6", "GHRP-2", "Hexarelin", "MK-677 (Ibutamoren)", "Melanotan II", "AOD-9604", "Tesamorelin", "Selank"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://osgear.to/" }
        ]
    },
    {
        Title: "PRIMAL PHARMA",
        Description: NoDescriptionWarning,
        Sections: ["Peptides", "Other"],
        SubSections: ["Retatrutide", "Trenbolone", "TB-500", "Ipamorelin", "BPC-157", "Melanotan II", "IGF1-LR3", "Viagra", "Semaglutide"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://primalpharma.org/" }
        ]
    },
    {
        Title: "Clandestine / Mol. Sol. LLC",
        Description: NoDescriptionWarning,
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "MGM-15", "7-OH"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://clandestine7oh.com/" }
        ]
    },
    {
        Title: "Autogen Research Services",
        Description: "High quality products, At competitive Price!",
        Sections: ["Psychedelics", "Dissociatives", "Stimulants", "Benzodiazepines", "Opioids", "Other"],
        SubSections: [
            "4-HO-MET", "Ethyl-Bromazolam", "Nifoxipam", "Avizafone", "MDPIHP", 
            "2-Me-PiHP", "O-DSMT", "4-MeTMP", "DMNPC", "Methiodone", "Methyl-K", 
            "DPP-26", "SR-14968", "SR-17018", "O-PCP", "Ethyl-Bromazolam", "MXPCP", 
            "Nortilidine", "PiPTapentadol", "2-FXiPr", "Fluprazolam", "Pynazolam", 
            "Tianeptine", "Ethyl-Flualprazolam"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://autogenresearch.services/" }
        ]
    },
    {
        Title: "NOVEL SCIENCE SHOP",
        Description: NoDescriptionWarning,
        Sections: ["Dissociatives", "Benzodiazepines", "Other"],
        SubSections: [
            "Clobromazolam", "Desalkylgidazepam", "Deschloroetizolam", "Ethyl-Bromazolam", "Flubrotizolam",
            "Fluclotizolam", "Fluloprazolam", "Fluorexetamine", "Pyrazolam", "Rilmazafone"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://novelscienceshop.is/" }
        ]
    },
    {
        Title: "Sunnyside Research Store",
        Description: NoDescriptionWarning,
        Sections: ["Dissociatives", "Benzodiazepines", "Other"],
        SubSections: [
            "Ethyl-Bromazolam", "Ethyl-Flualprazolam", "Rilmazafone", "Tilmetamine",
            "Clobromazolam", "3-Hydroxyphenazepam"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://sunnysideresearchstore.net/" }
        ]
    },
    {
        Title: "Happiness Delivers",
        Description: NoDescriptionWarning,
        Sections: ["Marijuana", "Psychedelics", "Other"],
        SubSections: [
            "Flower", "Concentrates", "Vapes", "Edibles", "Tinctures",
            "N,N-DMT", "MDMA", "Shrooms"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
            { Text: "Website", Link: "https://happinessdelivers.com/" },
            { Text: "Instagram", Link: "https://www.instagram.com/happinessdelivers" }
        ]
    },
    {
        Title: "Divine Science Society Shop",
        Description: "Divine Science Society recognizes that modern life often feels disconnected from the sacred. In a world driven by science, technology, and material pursuits, many feel a longing for something deeper—an inner knowing that transcends the ordinary. At Divine Science Society, we honor the wisdom already within you, guiding you to reconnect with the sacred presence that has always been part of your being.",
        Sections: ["Psychedelics", "Other"],
        SubSections: [
            "Shrooms", "LSD", "MDMA", "N,N-DMT"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
            { Text: "Website", Link: "https://divinesciencesociety.org/" },
            { Text: "Facebook", Link: "https://www.facebook.com/p/Divine-Science-Society-61572709735235/" },
            { Text: "Twitter", Link: "https://x.com/DivineSciSo" },
            { Text: "Instagram", Link: "https://www.instagram.com/Divinescienceso" },
            { Text: "TikTok", Link: "https://www.tiktok.com/@Divinesciencesociety" }
        ]
    },
    {
        Title: "MushMore SuppleMents",
        Description: "Your trusted source for premium mushroom supplements. Discover nature’s powerful remedies with our carefully curated selection of mushroom extracts, crafted to support your well-being naturally. Our products are formulated to harness the incredible benefits of mushrooms. Explore our site to find the perfect supplement for your health journey. Embrace the magic of mushrooms with Mushmore.",
        Sections: ["Psychedelics", "Other"],
        SubSections: [
            "Shrooms", "LSD", "MDMA", "N,N-DMT"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
            { Text: "Website", Link: "https://mushmore.store/" }
        ]
    },
    {
        Title: "I The Universe / Itheom",
        Description: "Our mission is to provide the community and its members with information on safe uses, practices, overall understanding, and general guidance of natural and synthetic psychedelics. We believe these medicines, when approached with intention and respect, can serve as catalysts for healing, expanded awareness, and deeper connection to oneself, others, and the natural world. Through education, guidance, and community support, we seek to promote safe exploration and meaningful integration.",
        Sections: ["Dissociatives", "Psychedelics", "Other"],
        SubSections: [
            "Shrooms", "LSD", "MDMA", "Ketamine"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
            { Text: "Website", Link: "https://itheom.org/" }
        ]
    }
];


/* ADD THESE:
theboozeoutlet.com
unknownresearch.shop
killeredibles.com
everythingfor420.com
gotflower.co
etizola.com
prozacbuy.com
primechems.shop
indusamed.com
medistore24.com
buyetizolam.net
rxdirectmeds.com
medixo.co
comprartapentadol.com
https://purplesticky.com/
*/

return [Countries, Categories, SubCategories, Vendors, Note];