const api_data = [
    {
        id: 1,
        number:'(37)',
        name: 'Marvel NXT',
        price: '₹13,699',
        SKU: 'SKU: SBMW-001-009-4',
        category: 'Category: Copper Water Purifier',
        image: './productImages/1b.jpg',
        ratings: '&#9733 &#9733 &#9733 &#9733 &#9733',
        reviewerName:'Olivia Martinez - July 15, 2024',
        review:'I’m very satisfied with my new water purifier. The 5-litre in-built storage tank is perfect for my family, and the 10 Stage Advanced Purification ensures that we always have clean water. The Taste Adjuster makes the water taste great, and the Zero Pressure Pump guarantees a steady flow. I also love that it saves up to 60% more water, which is great for the environment.',
        description: 'A superior purifier that delivers pure water by removing 99.9999% bacteria and 99.99% viruses through its RO technology,UV-e Boiling & Ultra Filtration. It is suitable for all water sources and gives sweet tasting water always along with the Goodness of Copper'
    
    },
    {
        id: 2,
        number:'(45)',
        name: 'Delight NXT',
        price: '₹12,499',
        SKU: 'SKU: SBMW-022-089-1',
        category: 'Category: Aquasaver Water Purifier',
        image: './productImages/2b.jpg',
        ratings: '&#9733 &#9733 &#9733 &#9734 &#9734',
        reviewerName:'Emily Johnson - August 19, 2024',
        review:'Im thrilled with my new water purifier! The 6L storage tank is perfect for our needs, and the Taste Adjuster ensures our water always tastes great. The RO Maxx and UV e-Boiling technologies offer top-notch purification, while the Aquasaver feature saves up to 60% more water. With 9-stage purification and compatibility with all water sources, it’s a fantastic addition to our home.',
        description: 'A superior purifier that delivers pure water by removing 99.9999% bacteria and 99.99% viruses through its RO technology. It is suitable for all water sources and gives sweet tasting water always. Instantly charges water with essential minerals like Calcium and Magnesium.'
    
    },
    {
        id: 3,
        number:'(1021)',
        name: 'Aura 2X',
        price: '₹15,999',
        SKU: 'SKU: SBMW-051-800-4',
        category: 'Category: Copper Water Purifier',
        image: './productImages/3b.jpg',
        ratings: '&#9733 &#9733 &#9733 &#9733 &#9733',
        reviewerName:'Noah Davis - June 22, 2024',
        review:'This water purifier is fantastic! The 7-litre in-built storage tank is very convenient, and the filters that last for 2 years are a real bonus. I also appreciate that it comes with a free pre-filter in the box. It works perfectly with all water sources, making it a versatile and reliable choice for any home.',
        description: 'It needs no service for 2 years as it comes with advanced filters that lasts for 2 years and offers 99.9999% bacteria and 99.99% virus reduction. The Double Layer Filter Technology increases the surface area of the RO membrane and thus, ensures 50% water saving. It is also 30x more effective at dust & dirt removal and provides 10x more protection against chemicals compared to ordinary RO purifiers.'
    
    },
    {
        id: 4,
        number:'(457)',
        name: 'Ritz RO+UV',
        price: '₹17,199',
        SKU: 'SKU: SBMW-111-009-4',
        category: 'Category:Taste Adjuster Water Purifier',
        image: './productImages/4b.jpg',
        ratings: '&#9733 &#9733 &#9733 &#9733 &#9734',
        reviewerName:'Sophia Lee - July 18, 2024',
        review:'I’m really impressed with this water purifier! The tough, durable, and corrosion-free stainless steel tank is both robust and reliable. The Taste Adjuster consistently delivers sweet-tasting water, and the in-built Zero Pressure Pump ensures a steady flow. Plus, it works with all water sources, making it a great all-around choice.',
        description: 'Stylish water purifier with RO+UV technology which stores purified water in a 304 grade stainless steel tank. It can purify water from multiple sources.'
    
    },
    {
        id: 5,
        number:'(1212)',
        name: 'Slimtech Glass',
        price: '₹26,999',
        SKU: 'SKU: SBMW-001-009-5',
        category: 'Category: Adjuster Copper Water Purifier',
        image: './productImages/5b.jpg',
        ratings: '&#9733 &#9733 &#9734 &#9734 &#9734',
        reviewerName:'Ethan Brown - August 12, 2024',
        review:'I’m thrilled with this water purifier! The free service plan worth ₹2,500 is an excellent value, covering free installation, two maintenance visits, and unlimited repair visits. The 1-year warranty provides added peace of mind, and the 10-day easy return policy makes it risk-free. It’s a great investment for reliable and hassle-free water purification.',
        description: 'Introducing the Aquaguard Slimtech Glass RO water purifier.Its Water Saver RO alongwith cutting-edge 5th Gen UV LED Technology premium Toughened Glass comes with goodness of Copper.Say hello to mould breaking design, minimalist style, and innovation all in one!'
    
    },
    {
        id: 6,
        number:'(900)',
        name: 'Blaze Insta',
        price: '₹26,999',
        SKU: 'SKU: SBMW-551-339-4',
        category: 'Category: Ambient Copper Water Purifier',
        image: './productImages/6b.jpg',
        ratings: '&#9733 &#9733 &#9733 &#9733 &#9733',
        reviewerName:'Mia Wilson - June 30, 2024',
        review:'This water purifier is fantastic! The dual stainless steel tanks with a lifetime warranty are incredibly durable. The child lock feature and removable tray add a great level of convenience. The Taste Adjuster ensures the water always tastes sweet, and it’s suitable for all water sources. Highly recommended for its reliability and functionality!',
        description: 'Introducing the all new Aquaguard Blaze Insta water purifier which delivers instant hot and ambient water coupled with the Goodness of Copper. Combining functionality, innovation, and stylish design, it stands as the best-looking hot water purifier, redefining sophistication in every drop.'
    
    },
    {
        id: 7,
        number:'(90)',
        name: 'Designo NXT',
        price: '₹26,999',
        SKU: 'SKU: SBMW-588-339-4',
        category: 'Category: Copper Water Purifier',
        image: './productImages/7b.jpg',
        ratings: '&#9733 &#9733 &#9733 &#9733 &#9733',
        reviewerName:'Lucas White - July 25, 2024',
        review:'This water purifier is a game-changer! The Water Saver RO Technology efficiently conserves water, and the integrated single-unit design makes it sleek and compact. The inbuilt pressure pump ensures a consistent flow, and the wheels and handle make it easy to move around. It’s both practical and effective, perfect for any home.',
        description: 'Aquaguard Designo NXT Under the Counter RO+UV delivers 99.99% pure & safe drinking water which is free of bacteria, viruses, microplastics, pesticides, and heavy metals through its superior water saving RO technology & advanced 5th Gen UV Technology.'
    
    },
    {
        id: 8,
        number:'(550)',
        name: 'Slimtech Taste Adjuster',
        price: '₹23,990',
        SKU: 'SKU: SBMW-111-339-9',
        category: 'Category:Ambient Copper Water Purifier',
        image: './productImages/8b.jpg',
        ratings: '&#9733 &#9733 &#9733 &#9733 &#9734',
        reviewerName:'Ava Smith - August 5, 2024',
        review:'I’m very pleased with this water purifier. The free service plan worth ₹2,500 is a fantastic deal, covering installation, two maintenance visits, and unlimited repairs. The 1-year warranty is reassuring, and the 10-day easy return policy adds extra peace of mind. It’s a great value for a dependable and hassle-free water purifier.',
        description: 'Aquaguard Blaze Slim water purifier delivers instant hot and ambient water coupled with the Goodness of Copper.'
    
    },
    {
        id: 9,
        number:'(10)',
        name: 'Slimtech Glass',
        price: '₹18,999',
        SKU: 'SKU: SBMW-551-339-6',
        category: 'Category:UV Storage Copper Water Purifier',
        image: './productImages/9b.jpg',
        ratings: '&#9733 &#9733 &#9733 &#9733 &#9734',
        reviewerName:'Jack Taylor - July 2, 2024',
        review:'This water purifier is outstanding! The toughened glass exterior is both stylish and durable. The water quality indicator is a handy feature, and the latest 5th Gen UV LED technology ensures superior purification. It’s perfect for municipal water sources and combines form with function seamlessly.',
        description: 'Introducing the Aquaguard Slimtech Glass UV Storage water purifier. Its has cutting-edge 5th Gen UV LED Technology,Ultra Filtration and premium Toughened Glass which comes with goodness of Copper. Say hello to mould breaking design, minimalist style, and innovation all in one!'
    
    },
    {
        id: 10,
        number:'(50)',
        name: 'RO+UV Kit',
        price: '₹3,999',
        SKU: 'SKU: SBMW-998-229-4',
        category: 'Category: Kit with Active Copper',
        image: './productImages/10b.jpg',
        ratings: '&#9733 &#9733 &#9733 &#9733 &#9733',
        reviewerName:'Isabella Clark - June 15, 2024',
        review:'This water purifier has exceeded my expectations with its comprehensive features. The Sedi-Shield, Chemi Block, and Ultra Filter work together to provide exceptional water quality. The Active Copper feature adds an extra layer of purification, and the included HP2-HP1 extension harness, 5/16" x 1/4" reducing fitting, straight connector, stem elbow, and PL4/PL6 tube ensure easy installation and compatibility. Highly effective and well-equipped!',
        description: 'Removes 99.99% of bacteria and viruses, along with protection against pesticides, microplastics, and heavy metals Active Copper Filter: Provides instant and accurate copper ion infusion according to BIS norms, ensuring optimal health benefits for all age groups Filter life: 6000 L or 1 year Aquaguard’s Promise: Backed by India widest service network across 17,000+ pin-codes and supported by 8,500+ certified trained technicians'
    
    },
    {
        id: 11,
        number:'(1800)',
        name: 'Enhance UV Kit',
        price: '₹1,632',
        SKU: 'SKU: SBMW-661-339-4',
        category: 'Category: Enhance UV Kit',
        image: './productImages/11b.jpg',
        ratings: '&#9733 &#9733 &#9733 &#9734 &#9734',
        reviewerName:'Liam Harris - August 8, 2024',
        review:'This water purifier is fantastic! It comes with sediment, chemi block, and active copper cartridges, which are all essential for thorough filtration. The long-lasting genuine Aquaguard cartridges provide peace of mind, ensuring safe and clean water at all times. Its a reliable choice for maintaining high water quality.',
        description: 'It comes with sediment, chemi block & active copper cartridges. The long lasting genuine aquaguard cartrdiges ensures safe water always.'
    
    },
    {
        id: 12,
        number:'(110)',
        name: 'Pre Filter Assembly',
        price: '₹832',
        SKU: 'SKU: SBMW-787-459-4',
        category: 'Category: RO - PL6',
        image: './productImages/12b.jpg',
        ratings: '&#9733 &#9733 &#9733 &#9733 &#9734',
        reviewerName:'Chloe Adams - July 20, 2024',
        review:'This water purifier is excellent for maintaining clean water. It effectively removes suspended particles, and the cartridges are designed for long life and enhanced efficiency. This ensures that the purifier works effectively over time, providing consistent and high-quality water.',
        description: 'It removes suspended particles are designed for long cartridge life & better efficiency.'
    
    },
]

const showProductDetails=(id)=>{
    const productData = api_data.find(data => data.id===id);
    const queryString =new URLSearchParams(productData).toString()
    window.location.href=`singleProduct.html?${queryString}`;
}


