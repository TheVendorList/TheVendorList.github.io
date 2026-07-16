const Note = {
    title: "📋 What's New",
    text: `If you would like your website removed from the The Vendor List or need any changes made, please contact me using the details below.

Proof of ownership is required for all removal or modification requests. If you email me directly from your business email, there is no need.

Have a question or need to get in contact? Reach out via our <a href="https://discord.gg/4mnGTXbzk4" target="_blank" rel="noopener noreferrer">Discord server</a> or email <b>thevendorlist@proton.me</b> directly.

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
    "Partners",
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
  Marijuana: [
    { name: "Flower", url: "https://psychonautwiki.org/wiki/THC" },
    { name: "Concentrates", url: "https://psychonautwiki.org/wiki/THC" },
    { name: "Vapes", url: "https://psychonautwiki.org/wiki/THC" },
    { name: "Edibles", url: "https://psychonautwiki.org/wiki/THC" },
    { name: "Tinctures", url: "https://psychonautwiki.org/wiki/THC" }
  ],

  Psychedelics: [
    { name: "Shrooms", url: "https://psychonautwiki.org/wiki/Psilocybin_mushrooms" },
    { name: "Mescaline", url: "https://psychonautwiki.org/wiki/Mescaline" },
    { name: "MDMA", url: "https://psychonautwiki.org/wiki/MDMA" },
    { name: "MDA", url: "https://psychonautwiki.org/wiki/MDA" },
    { name: "2C-B", url: "https://psychonautwiki.org/wiki/2C-B" },
    { name: "5-MAPB", url: "https://psychonautwiki.org/wiki/5-MAPB" },
    { name: "N,N-DMT", url: "https://psychonautwiki.org/wiki/N,N-DMT" },
    { name: "4-HO-MET", url: "https://psychonautwiki.org/wiki/4-ho-met" },
    { name: "4-HO-DET", url: "https://psychonautwiki.org/wiki/4-ho-det" },
    { name: "4-HO-MiPT", url: "https://psychonautwiki.org/wiki/4-HO-MiPT" },
    { name: "4-AcO-DMT", url: "https://psychonautwiki.org/wiki/4-AcO-DMT" },
    { name: "4-AcO-MET", url: "https://psychonautwiki.org/wiki/4-AcO-MET" },
    { name: "4-PrO-DMT", url: "https://en.wikipedia.org/wiki/4-PrO-DMT" },
    { name: "4-PrO-MET", url: "https://en.wikipedia.org/wiki/4-PrO-MET" },
    { name: "5-MeO-DMT", url: "https://psychonautwiki.org/wiki/5-MeO-DMT" },
    { name: "5-MeO-MiPT", url: "https://psychonautwiki.org/wiki/5-MeO-MiPT" },
    { name: "5-MeO-MALT", url: "https://en.wikipedia.org/wiki/5-MeO-MALT" },
    { name: "LSD", url: "https://psychonautwiki.org/wiki/LSD" },
    { name: "1P-LSD", url: "https://psychonautwiki.org/wiki/1P-LSD" },
    { name: "1cP-LSD", url: "https://psychonautwiki.org/wiki/1cP-LSD" },
    { name: "1V-LSD", url: "https://psychonautwiki.org/wiki/1V-LSD" },
    { name: "1D-LSD", url: "https://en.wikipedia.org/wiki/1D-LSD" },
    { name: "ALD-52", url: "https://psychonautwiki.org/wiki/ALD-52" },
    { name: "ETH-LAD", url: "https://psychonautwiki.org/wiki/ETH-LAD" },
    { name: "1cP-AL-LAD", url: "https://psychonautwiki.org/wiki/1cP-AL-LAD" },
    { name: "N,N-Dipropyltryptamine (DPT)", url: "https://psychonautwiki.org/wiki/DPT" },
    { name: "Methallylescaline (MAL)", url: "https://psychonautwiki.org/wiki/MAL" }
  ],

  Dissociatives: [
    { name: "Ketamine", url: "https://psychonautwiki.org/wiki/Ketamine" },
    { name: "2F-DCK", url: "https://psychonautwiki.org/wiki/2-Fluorodeschloroketamine" },
    { name: "2-FXiPr", url: null },
    { name: "3-ME-PCP", url: "https://psychonautwiki.org/wiki/Talk:3-Me-PCP" },
    { name: "3-MEO-PCE", url: "https://psychonautwiki.org/wiki/3-MeO-PCE" },
    { name: "3,4-MD-PCP", url: "https://en.wikipedia.org/wiki/MDPCP" },
    { name: "3-HO-PCP", url: "https://psychonautwiki.org/wiki/3-HO-PCP" },
    { name: "O-PCP", url: null },
    { name: "O-PCE", url: "https://psychonautwiki.org/wiki/2-Oxo-PCE" },
    { name: "MXPCP", url: null },
    { name: "FXE", url: "https://psychonautwiki.org/wiki/FXE" },
    { name: "Isophenidine", url: "https://en.wikipedia.org/wiki/NPDPA" },
    { name: "Tilmetamine", url: "https://en.wikipedia.org/wiki/Tilmetamine" }
  ],

  Stimulants: [
    { name: "Amphetamine", url: "https://psychonautwiki.org/wiki/Amphetamine" },
    { name: "Isopropylphenidate", url: "https://psychonautwiki.org/wiki/Isopropylphenidate" },
    { name: "2-FMA", url: "https://psychonautwiki.org/wiki/2-FMA" },
    { name: "4-FMA", url: "https://psychonautwiki.org/wiki/4-FMA" },
    { name: "Methylphenidate", url: "https://psychonautwiki.org/wiki/methylphenidate" },
    { name: "Dexmethylphenidate", url: "https://en.wikipedia.org/wiki/Dexmethylphenidate"},
    { name: "MDPIHP", url: null },
    { name: "2-Me-PiHP", url: null },
    { name: "4-MeTMP", url: "https://en.wikipedia.org/wiki/4-Methylmethylphenidate" },
    { name: "DMNPC", url: "https://en.wikipedia.org/wiki/N,O-Dimethyl-4-(2-naphthyl)piperidine-3-carboxylate" },
    { name: "Lisdexamfetamine", url: "https://en.wikipedia.org/wiki/Lisdexamfetamine"}
  ],

  Benzodiazepines: [
    { name: "Alprazolam", url: "https://psychonautwiki.org/wiki/alprazolam"},
    { name: "Flualprazolam", url: "https://psychonautwiki.org/wiki/Flualprazolam" },
    { name: "Rilmazofone", url: "https://en.wikipedia.org/wiki/Rilmazafone" },
    { name: "Bromazolam", url: "https://en.wikipedia.org/wiki/Bromazolam"},
    { name: "Etizolam", url: "https://en.wikipedia.org/wiki/Etizolam"},
    { name: "Clobromazolam", url: "https://en.wikipedia.org/wiki/Phenazolam" },
    { name: "Norflurazepam", url: "https://en.wikipedia.org/wiki/N-Desalkylflurazepam" },
    { name: "Pynazolam", url: "https://en.wikipedia.org/wiki/Pynazolam" },
    { name: "Bromonordiazepam", url: "https://en.wikipedia.org/wiki/Bromonordiazepam" },
    { name: "N-Ethyl-Nitrazepam", url: null },
    { name: "Ethyl-Flualprazolam", url: "https://en.wikipedia.org/wiki/Ethylflualprazolam" },
    { name: "Ethyl-Bromazolam", url: "https://en.wikipedia.org/wiki/Ethylbromazolam" },
    { name: "Clonazepam", url: "https://en.wikipedia.org/wiki/Clonazepam" },
    { name: "Lorazepam", url: "https://en.wikipedia.org/wiki/Lorazepam" },
    { name: "Bromazepam", url: "https://en.wikipedia.org/wiki/Bromazepam" },
    { name: "Nifoxipam", url: "https://en.wikipedia.org/wiki/Nifoxipam" },
    { name: "Avizafone", url: "https://en.wikipedia.org/wiki/Avizafone" },
    { name: "Tianeptine", url: "https://en.wikipedia.org/wiki/Tianeptine" },
    { name: "Bromonordiazepam", url: "https://en.wikipedia.org/wiki/Bromonordiazepam" },
    { name: "Deschloroetizolam", url: "https://en.wikipedia.org/wiki/Deschloroetizolam" },
    { name: "Flubrotizolam", url: "https://en.wikipedia.org/wiki/Flubrotizolam" },
    { name: "Fluclotizolam", url: "https://en.wikipedia.org/wiki/Fluclotizolam" },
    { name: "Fluloprazolam", url: "https://en.wikipedia.org/wiki/Fluloprazolam" },
    { name: "Rilmazafone", url: "https://en.wikipedia.org/wiki/Rilmazafone" },
    { name: "3-Hydroxyphenazepam", url: "https://en.wikipedia.org/wiki/3-Hydroxyphenazepam" },
    { name: "Midazolam", url: "https://en.wikipedia.org/wiki/Midazolam"},
    { name: "Temazepam", url: "https://en.wikipedia.org/wiki/Temazepam"}
  ],

  Opioids: [
    { name: "Natural kratom", url: "https://psychonautwiki.org/wiki/Kratom" },
    { name: "7-OH", url: "https://en.wikipedia.org/wiki/7-OH" },
    { name: "MGM-15", url: "https://en.wikipedia.org/wiki/MGM-15" },
    { name: "Pseudoindoxyl", url: "https://en.wikipedia.org/wiki/Mitragynine_pseudoindoxyl" },
    { name: "O-DSMT", url: "https://psychonautwiki.org/wiki/O-DSMT" },
    { name: "Codiene", url: "https://psychonautwiki.org/wiki/Codiene" },
    { name: "Dihydrocodiene", url: "https://en.wikipedia.org/wiki/Dihydrocodeine" },
    { name: "Hydrocodone", url: "https://psychonautwiki.org/wiki/Hydrocodone"},
    { name: "Oxycodone", url: "https://psychonautwiki.org/wiki/Oxycodone" },
    { name: "Morphine", url: "https://psychonautwiki.org/wiki/Morphine"},
    { name: "Oxymorphone", url: "https://psychonautwiki.org/wiki/Oxymorphone"},
    { name: "Tramadol", url: "https://psychonautwiki.org/wiki/Tramadol" },
    { name: "Tapetadol", url: null },
    { name: "Tapentadol", url: "https://en.wikipedia.org/wiki/Tapentadol" },
    { name: "PiPTapentadol", url: null },
    { name: "Methiodone", url: "https://en.wikipedia.org/wiki/IC-26" },
    { name: "DPP-26", url: "https://en.wikipedia.org/wiki/DPP-26" },
    { name: "SR-17018", url: "https://en.wikipedia.org/wiki/SR-17018" },
    { name: "SR-14968", url: "https://en.wikipedia.org/wiki/SR-14968" },
    { name: "Nortilidine", url: "https://en.wikipedia.org/wiki/Nortilidine" },
    { name: "Methadone", url: "https://en.wikipedia.org/wiki/Methadone"},
    { name: "Hydromorphone", url: "https://en.wikipedia.org/wiki/Hydromorphone"},
    { name: "Buprenorphine", url: "https://en.wikipedia.org/wiki/Buprenorphine"}
  ],

  Peptides: [
    { name: "Trenbolone", url: "https://en.wikipedia.org/wiki/Trenbolone" },
    { name: "Retatrutide", url: "https://en.wikipedia.org/wiki/Retatrutide" },
    { name: "CJC-1295", url: "https://en.wikipedia.org/wiki/CJC-1295" },
    { name: "Ipamorelin", url: "https://en.wikipedia.org/wiki/Ipamorelin" },
    { name: "BPC-157", url: "https://en.wikipedia.org/wiki/BPC-157" },
    { name: "TB-500", url: "https://en.wikipedia.org/wiki/TB-500" },
    { name: "IGF-1 LR3", url: "https://en.wikipedia.org/wiki/IGF-1_LR3" },
    { name: "GHRP-6", url: "https://en.wikipedia.org/wiki/GHRP-6" },
    { name: "Pralmorelin", url: "https://en.wikipedia.org/wiki/Pralmorelin" },
    { name: "Hexarelin", url: "https://en.wikipedia.org/wiki/Examorelin" },
    { name: "Ibutamoren", url: "https://en.wikipedia.org/wiki/Ibutamoren" },
    { name: "Melanotan II", url: "https://en.wikipedia.org/wiki/Melanotan_II" },
    { name: "AOD-9604", url: "https://en.wikipedia.org/wiki/AOD9604" },
    { name: "Tesamorelin", url: "https://en.wikipedia.org/wiki/Tesamorelin" },
    { name: "Selank", url: "https://en.wikipedia.org/wiki/Selank" },
    { name: "Semaglutide", url: "https://en.wikipedia.org/wiki/Semaglutide" },
    { name: "GB-115", url: null }
  ],

  Other: [
    { name: "Gabapentin", url: "https://psychonautwiki.org/wiki/Gabapentin" },
    { name: "Sildenafil", url: "https://en.wikipedia.org/wiki/Sildenafil" },
    { name: "Methyl-K", url: "https://en.wikipedia.org/wiki/1,3-Benzodioxolyl-N-methylpentanamine" },
    { name: "Tianeptine", url: "https://psychonautwiki.org/wiki/Tianeptine" },
    { name: "Modafinil", url: "https://en.wikipedia.org/wiki/Modafinil" },
    { name: "Carisoprodol", url: "https://en.wikipedia.org/wiki/Carisoprodol" },
    { name: "Zopiclone", url: "https://en.wikipedia.org/wiki/Zopiclone" },
    { name: "Zolpidem", url: "https://en.wikipedia.org/wiki/Zolpidem" },
    { name: "Promethazine", url: "https://psychonautwiki.org/wiki/Promethazine"},
    { name: "Cyclobenzaprine", url: "https://en.wikipedia.org/wiki/Cyclobenzaprine"},
    { name: "Eszopiclone", url: "https://en.wikipedia.org/wiki/Eszopiclone"},
    { name: "Pregabalin", url: "https://en.wikipedia.org/wiki/Pregabalin"},
    { name: "Baclofen", url: "https://en.wikipedia.org/wiki/Baclofen"},
    { name: "Selegiline", url: "https://en.wikipedia.org/wiki/Selegiline"},
    { name: "Atomoxetine", url: "https://en.wikipedia.org/wiki/Atomoxetine"},
    { name: "Clomipramine", url: "https://en.wikipedia.org/wiki/Clomipramine"},
    { name: "Clozapine", url: "https://en.wikipedia.org/wiki/Clozapine"},
    { name: "Fluoxetine", url: "https://en.wikipedia.org/wiki/Fluoxetine"},
    { name: "Tofisopam", url: "https://en.wikipedia.org/wiki/Tofisopam"},
    { name: "Trazodone", url: "https://en.wikipedia.org/wiki/Trazodone"},
    { name: "Armodafinil", url: "https://en.wikipedia.org/wiki/Armodafinil"},
    { name: "Finasteride", url: "https://en.wikipedia.org/wiki/Finasteride"},
    { name: "Phentermine", url: "https://en.wikipedia.org/wiki/Phentermine"},
    { name: "Buspirone", url: "https://en.wikipedia.org/wiki/Buspirone"},
    { name: "Escitalopram", url: "https://en.wikipedia.org/wiki/Escitalopram"},
    { name: "Liraglutide", url: "https://en.wikipedia.org/wiki/Liraglutide"},
    { name: "Prednisone", url: "https://en.wikipedia.org/wiki/Prednisone"},
    { name: "Oxandrolone", url: "https://en.wikipedia.org/wiki/Oxandrolone"},
    { name: "Sertraline", url: "https://en.wikipedia.org/wiki/Sertraline"},
    { name: "Paroxetine", url: "https://en.wikipedia.org/wiki/Paroxetine"}
  ]
};

const NoDescriptionWarning = "No description, if you'd like one to be added get in contact."

const Vendors = [
    {
        Title: "VERDANTA",

        Sections: [
            "Partners",
            "Marijuana", "Psychedelics", "Dissociatives", "Stimulants", 
            "Benzodiazepines", "Opioids", "Peptides", "Other"
        ],
        SubSections: [
            "4-HO-MET", "5-MAPB", "LSD", "MDMA", "2C-B", "Promethazine",
            "Modafinil", "Ketamine", "Amphetamine", "Eszopiclone", "Pregabalin",
            "Baclofen", "Flower", "Concentrates", "Vapes"
        ],

        DateAdded: "7/3/2026", IsCheap: true,
        ShipsTo: ["United States Of America"],

        Buttons: [
            { Text: "Website", Link: "https://www.verdanta.net/" }
        ]
    },
    {
        Title: "Clubhouse Drops",

        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        
        Buttons: [{ Text: "Website", Link: "https://homegrownhappiness.store/" }]
    },
    {
        Title: "The Flower Girls",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates"],
        ShipsTo: ["United States Of America"],

        Buttons: [{ Text: "Website", Link: "https://theflowergirls.shop/" }]
    },
    {
        Title: "Well Crafted Canna",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "http://wellcraftedcanna.com/" }]
    },
    {
        Title: "DAMN GOOD",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://upstatehempco.com/" }]
    },
    {
        Title: "hmp.",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://mysticsmoke.cloud/" },

        ]
    },
    {
        Title: "Enlighten Hemp Co",
        Sections: ["Marijuana"],
        SubSections: ["Concentrates"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://enlightenhemp.co/" },

        ]
    },
    {
        Title: "Bay Smokes",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        IsCheap: true, IsRecommended: false, 
        Buttons: [{ Text: "Website", Link: "https://cannacruncherscbd.com/" }]
    },
    {
        Title: "Canna Cured",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://cannacured.com/" }]
    },
    {
        Title: "Pure Canna Co",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://www.veterangrownhemp.com/" }]
    },
    {
        Title: "DR. Ganja",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://highhippy.com/" }
        ]
    },
    {
        Title: "Eight Horses Hemp",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://nowicann.com" }
        ]
    },
    {
        Title: "YAGA Farms",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.yagafarms.com/" }
        ]
    },
    {
        Title: "REVELRY HEMP",
        Sections: ["Marijuana"],
        SubSections: ["Flower"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.revelryhemp.com/" }
        ]
    },
    {
        Title: "Preston Herb Co",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://wildflowerhempco.com/" }
        ]
    },
    {
        Title: "Lucky Elk",
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
        Sections: ["Marijuana"],
        SubSections: ["Concentrates"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://brbubble.com/" },
        ]
    },
    {
        Title: "Revive Hemp",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.elkcreekgenetics.com/category/all-products" },

        ] // Use link to shop since they're home page is so fucking confusing.
    },
    {
        Title: "Herbal Healers CBD",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://rozfromfrasier.com/" }]
    },
    {
        Title: "The Southern Maryland Experience Hemp",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://greengashemp.me/" },

        ]
    },
    {
        Title: "Sesh City",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://seshcity.shop/" }]
    },
    {
        Title: "Asheville Dispensary",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.snapdragonhemp.com/" }
        ]
    },
    {
        Title: "Boston Hemp Inc",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.binoidcbd.com/" }
        ]
    },
    {
        Title: "Stoney Branch",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://exhalewell.com/" }]
    },
    {
        Title: "Vivimu",
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
        Sections: ["Wholesale"],
        ShipsTo: ["United States Of America"],
        
        Buttons: [{ Text: "Website", Link: "https://mcnutraceuticals.com/" }]
    },
    {
        Title: "Hemp Flower Co",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],

        Buttons: [{ Text: "Website", Link: "https://hemp-flower.com/" }]
    },
    {
        Title: "White Ash Reserve",
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://whiteashreserve.com/" }]
    },
    {
        Title: "Cosmic Hemp Gardens",
        Sections: ["Marijuana"],
        SubSections: ["Flower"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.cosmichempgardens.com/" }
        ]
    },
    {
        Title: "Akira Botanicals",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower", "Concentrates", "Vapes", "Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [
        { Text: "Website", Link: "https://www.bkshemp.com/" }
        ]
    },
    {
        Title: "Black Owl Hemp Clinic",
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
        Sections: ["Marijuana"],
        SubSections: ["Flower"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://handcraftedfarmers.com/" }]
    },
    {
        Title: "Retro Bakery",
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
        Sections: ["Marijuana"],
        SubSections: ["Edibles"],
        ShipsTo: ["United States Of America"],
        Buttons: [{ Text: "Website", Link: "https://yourgrannys.com/" }]
    },
    {
        Title: "Alderson Family Farms",
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
        Sections: ["Psychedelics", "Opioids"],
        SubSections: ["5-MAPB", "4-HO-MET", "4-HO-DET", "4-PrO-DMT", "SR-17018", "MGM-15", "7-OH"],
        ShipsTo: ["United States Of America"],

        IsNew: false, IsRecommended: false,
        
        Buttons: [
            { Text: "Website", Link: "https://wickedtablets.store/" }
        ]
    },
    {
        Title: "XUM / ADVANCED MYCOLOG",
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
        Sections: ["Psychedelics"],
        SubSections: ["ALD-52", "5-MeO-MiPT", "1P-LSD", "5-MeO-MALT", "4-PrO-DMT", "1V-LSD", "4-HO-MET", "1cP-LSD", "ETH-LAD", "4-HO-MiPT", "1D-LSD"],
        ShipsTo: ["International", "United States Of America", "Canada"],
        PaymentMethods: ["💳 Credit Card", "₿ Crypto"],

        IsRecommended: true, IsNew: false, RequiresID: true,
        
        Buttons: [
        { Text: "Website", Link: "https://www.chems.ca/" }
        ]
    },
    {
        Title: "PCT.Zone",
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
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-OH", "MGM-15"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://www.kratomdistro.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/groups/833891957420924" }
        ]
    },
    {
        Title: "The Powder Solutions",
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-OH", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://thepowdersolutions.com/" }
        ]
    },
    {
        Title: "7STAX",
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-OH", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://7stax.com/" }
        ]
    },
    {
        Title: "Pure Leaf Kratom",
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-OH", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://pureleafkratom.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/groups/833891957420924" }
        ]
    },
    {
        Title: "7OHMZ",
        Sections: ["Opioids"],
        SubSections: ["7-OH"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://7ohmz.com/" },
        { Text: "Facebook", Link: "https://www.facebook.com/groups/833891957420924" }
        ]
    },
    {
        Title: "Bulk Kratom Now",
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-OH", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://bulkkratomnow.com//" }
        ]
    },
    {
        Title: "Golden Monk",
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
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-OH", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],

        IsNew: false,
        
        Buttons: [
        { Text: "Website", Link: "https://bxtracts.com/" }
        ]
    },
    {
        Title: "TBK YELLOW",
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
        Sections: ["Opioids"],
        SubSections: ["7-OH", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://etxtracts.com" },
        { Text: "Discord", Link: "https://discord.com/invite/pfEcCsMq" }
        ]
    },
    {
        Title: "MG Medica Labs",Sections: ["Opioids"],
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
        Sections: ["Opioids"],
        SubSections: ["Natural kratom", "7-OH", "Pseudoindoxyl", "MGM-15", "SR-17018"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://stoutalkz.com" }
        ]
    },
    {
        Title: "Koalaty Kratom",
        Sections: ["Opioids"],
        SubSections: ["7-OH", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://koalatykratom.com" }
        ]
    },
    {
        Title: "Catalyst Edge Labs",
        Sections: ["Opioids"],
        SubSections: ["7-OH", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://catalystedgelab.com" }
        ]
    },
    {
        Title: "Ritually Pure",
        Sections: ["Opioids"],
        SubSections: ["7-OH", "Pseudoindoxyl", "MGM-15"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://rituallypure.com" }
        ]
    },
    {
        Title: "Rift Chems",
        Sections: ["Psychedelics", "Dissociatives", "Stimulants", "Benzodiazepines", "Other"],
        SubSections: ["Clonazepam", "Methylphenidate", "Tramadol", "Tapetadol", "Tapentadol", "Fluloprazolam", "4-FMA", "2-FMA", "3,4-MD-PCP", "3-HO-PCP", "4-PrO-DMT", "2F-DCK", "3-ME-PCP", "3-MEO-PCE", "2-FXiPr", "FXE", "Isophenidine", "Flualprazolam", "Rilmazofone", "Clobromazolam", "Norflurazepam", "Pynazolam", "Bromonordiazepam", "N-Ethyl-Nitrazepam", "Ethyl-Flualprazolam", "Ethyl-Bromazolam", "Isopropylphenidate", "O-DSMT", "O-PCE"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://riftchems.com/" }
        ]
    },
    {
        Title: "EVERYCHEM",
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
        Sections: ["Peptides", "Other"],
        SubSections: ["Retatrutide", "Trenbolone", "CJC-1295", "Ipamorelin", "BPC-157", "TB-500", "IGF-1 LR3", "GHRP-6", "Pralmorelin", "Examorelin", "Ibutamoren", "Melanotan II", "AOD-9604", "Tesamorelin", "Selank"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://osgear.to/" }
        ]
    },
    {
        Title: "PRIMAL PHARMA",
        Sections: ["Peptides", "Other"],
        SubSections: ["Retatrutide", "Trenbolone", "TB-500", "Ipamorelin", "BPC-157", "Melanotan II", "IGF1-LR3", "Sildenafil", "Semaglutide"],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://primalpharma.org/" }
        ]
    },
    {
        Title: "Clandestine / Mol. Sol. LLC",
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
        Sections: ["Psychedelics", "Dissociatives", "Stimulants", "Benzodiazepines", "Opioids", "Other"],
        SubSections: [
            "4-HO-MET", "Ethyl-Bromazolam", "Nifoxipam", "Avizafone", "MDPIHP", 
            "2-Me-PiHP", "O-DSMT", "4-MeTMP", "DMNPC", "Methiodone", "Methyl-K", 
            "DPP-26", "SR-14968", "SR-17018", "O-PCP", "Ethyl-Bromazolam", "MXPCP", 
            "Nortilidine", "PiPTapentadol", "2-FXiPr", "Flualprazolam", "Pynazolam", 
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
        Sections: ["Dissociatives", "Benzodiazepines", "Other"],
        SubSections: [
            "Clobromazolam", "Bromonordiazepam", "Deschloroetizolam", "Ethyl-Bromazolam", "Flubrotizolam",
            "Fluclotizolam", "Fluloprazolam", "FXE", "Pyrazolam", "Rilmazafone"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
        { Text: "Website", Link: "https://novelscienceshop.is/" }
        ]
    },
    {
        Title: "Sunnyside Research Store",
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
        Sections: ["Dissociatives", "Psychedelics", "Other"],
        SubSections: [
            "Shrooms", "LSD", "MDMA", "Ketamine"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
            { Text: "Website", Link: "https://itheom.org/" }
        ]
    },
    {
        Title: "The Booze Outlet",
        Sections: ["Other"],
        SubSections: [
            "Alcohol"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
            { Text: "Website", Link: "https://theboozeoutlet.com/" }
        ]
    },
    {
        Title: "Unknown Research",
        Sections: [
            "Marijuana", "Benzodiazepines"
        ],
        SubSections: [
            "Concentrates", "Fluloprazolam", "Ethyl-Flualprazolam", 
            "Ethyl-Bromazolam", "Bromonordiazepam", "Rilmazafone"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
            { Text: "Website", Link: "https://unknownresearch.shop/" }
        ]
    },
    {
        Title: "Killer Edibles",
        Sections: [
            "Marijuana"
        ],
        SubSections: [
            "Concentrates", "Edibles", "Tinctures"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
            { Text: "Website", Link: "https://www.killeredibles.com/" }
        ]
    },
    {
        Title: "EVERYTHING 420",
        Sections: [
            "Marijuana"
        ],
        SubSections: [
            "Flower", "Concentrates", "Vapes", "Edibles", "Tinctures"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
            { Text: "Website", Link: "https://everythingfor420.com/" }
        ]
    },
    {
        Title: "Got Flower",
        Sections: [
            "Marijuana", "Psychedelics"
        ],
        SubSections: [
            "Flower", "Edibles", "Concentrates", "Vapes", "Shrooms"
        ],
        ShipsTo: ["United States Of America"],
        IsNew: false,
        Buttons: [
            { Text: "Website", Link: "https://gotflower.co/" }
        ]
    },
    {
        Title: "Etizola",
        Sections: [
            "Opioids", "Benzodiazepines", "Other"
        ],
        SubSections: [
            "Bromazolam", "Deschloroetizolam", "Clonazepam", "Modafinil", "Carisoprodol",
            "Zopiclone", "Ambein", "Zolpidem", "Alprazolam", "Gabapentin", "Tapentadol"
        ],
        ShipsTo: ["United States Of America"],
        DateAdded: "7/3/2026",
        Buttons: [
            { Text: "Website", Link: "https://etizola.com/" }
        ]
    },
    {
        Title: "Prozac Buy",
        Sections: [
            "Opioids", "Benzodiazepines", "Other"
        ],
        SubSections: [
            "Clonazepam", "Diazepam", "Gabapentin", "Lorazepam", "Modafinil", "Carisoprodol",
            "Tapentadol", "Zopiclone", "Zolpidem", "Baclofen", "Selegiline", "Tianeptine", "Atomoxetine",
            "Clomipramine", "Clozapine", "Fluoxetine", "Tofisopam", "Eszopiclone"
        ],
        ShipsTo: ["United States Of America"],
        DateAdded: "7/8/2026",
        Buttons: [
            { Text: "Website", Link: "https://prozacbuy.com/" }
        ]
    },
    {
        Title: "Prime Chems",
        Sections: [
            "Stimulants", "Opioids", "Benzodiazepines", "Other"
        ],
        SubSections: [
            "Armodafinil", "Tapentadol", "Bromazepam", "Carisoprodol", "Sildenafil", "Tramadol", "Diazepam",
            "Gabapentin", "Finasteride", "Lorazepam", "Methadone", "Modafinil", "Phentermine", "Methylphenidate",
            "Alprazolam", "Zolpidem", "Zopiclone", "Bromazolam", "Etizolam"
        ],
        ShipsTo: ["United States Of America"],
        DateAdded: "7/8/2026",
        Buttons: [
            { Text: "Website", Link: "https://primechems.shop/" }
        ]
    },
    {
        Title: "INDUSAMED",
        Sections: [
            "Opioids", "Benzodiazepines", "Other"
        ],
        SubSections: [
            "Etizolam", "Armodafinil", "Cyclobenzaprine", "Eszopiclone", "Gabapentin", "Pregabalin", "Tapentadol", "Tofisopam", "Zopiclone",
            "Carisoprodol"
        ],
        ShipsTo: ["United States Of America"],
        DateAdded: "7/8/2026",
        Buttons: [
            { Text: "Website", Link: "https://indusamed.com/" }
        ]
    },
    {
        Title: "MediStore24",
        Sections: [
            "Opioids", "Benzodiazepines", "Other"
        ],
        SubSections: [
            "Etizolam", "Armodafinil", "Bromazolam", "Buspirone", "Alprazolam", "Clonazepam", "Diazepam", "Gabapentin", "Modafinil", "Carisoprodol",
            "Tapentadol", "Lorazepam", "Zolpidem", "Zopiclone", "Escitalopram", "Eszopiclone", "Clobromazolam", "Selegiline", "Tofisopam", "Trazodone",
            "Liraglutide"
        ],
        ShipsTo: ["United States Of America"],
        DateAdded: "7/8/2026",
        Buttons: [
            { Text: "Website", Link: "https://medistore24.com/" }
        ]
    },
    {
        Title: "BUY ETIZOLAM",
        Sections: [
            "Opioids", "Benzodiazepines", "Other"
        ],
        SubSections: [
            "Armodafinil", "Carisoprodol", "Gabapentin", "Cyclobenzaprine", "Modafinil", "Pregabalin", "Tapentadol", "Tofisopam", "Zopiclone",
            "Sertraline", "Eszopiclone", "Prednisone", "Oxandrolone"
        ],
        ShipsTo: ["United States Of America"],
        DateAdded: "7/8/2026",
        Buttons: [
            { Text: "Website", Link: "https://buyetizolam.net/" }
        ]
    },
    {
        Title: "MEDIXO",
        Sections: [
            "Stimulants", "Psychedelics", "Opioids", "Benzodiazepines", "Dissociatives", "Other"
        ],
        SubSections: [
            "Amphetamine", "Zolpidem", "Bromazepam", "Codiene", "Methylphenidate", "Diazepam", "Hydromorphone", "Methadone", "Etizolam", "Fluoxetine",
            "Dexmethylphenidate", "Gabapentin", "Hydrocodone", "Ketamine", "Escitalopram", "Lorazepam", "Midazolam", "Nitrazepam", "Morphine", "Oxymorphone",
            "Oxycodone", "Paroxetine", "Phentermine", "Modafinil", "Shrooms", "Temazepam", "Clonazepam", "Carisoprodol", "Buprenorphine", "Tapentadol",
            "Tramadol", "Sildenafil", "Lisdexamfetamine", "Alprazolam", "Sertraline", "Zopiclone"
        ],
        ShipsTo: ["International", "United States Of America"],
        DateAdded: "7/8/2026",
        Buttons: [
            { Text: "Website", Link: "https://medixo.co/" }
        ]
    }
];


/* ADD THESE:
rxdirectmeds.com
comprartapentadol.com
https://purplesticky.com/
*/

return [Countries, Categories, SubCategories, Vendors, Note];