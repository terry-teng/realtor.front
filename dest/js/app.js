$.support.cors = true;

const eventbus = new Vue({
    data : {
        eventbuss :"myfuckingeventbussssss"
    }
});

Vue.component('realand-root',{
    data : function(){
        return {
            loadCompanyUrl : "http://localhost:8080/api/company/1",
            company : { 
            }
        }
    },
    created : function(){
        var self  = this;
        //initial load company, realtors, and property list info from backend
        $.ajax({
            url : this.loadCompanyUrl,
            dataType:"json",
            success : function(response){
                self.company = response;
                self.loadContactUs();
                self.loadPropertySummary();
                self.loadFeatureListing();
                self.loadListRoot();
                
                
            }
        }); 
    },
    methods:{
        loadContactUs : function(){
            eventbus.$emit("loadContact", this.company.companyContact);           
        },

        loadPropertySummary : function(){
            eventbus.$emit("loadPropertiesSummary", this.company.properties);
        },

        loadFeatureListing : function(){
            var list = this.company.properties;
            var featurelist = list.filter( function(property){
                return property.featured === true;
            });
            eventbus.$emit("loadFeatureListing", featurelist);
        },

        loadListRoot : function(){
            eventbus.$emit("loadListRoot", this.company.properties);
        }
    },
    template : '#realand-root-template'
})

Vue.component('realand-topbar',{
    data:function (){
        return{
            support : {
                phone : "(880)-123-4567",
                email : "ReaLand@support.com"
            }
        }
    },
    /*
    methods: {
        testme : function() {
            $.ajax({
                url : "https://api.myjson.com/bins/1at3w2",
                type: "json",
            }.done(function(resp){
    
            }));
        },
    },
    */
    
    template : '#realand-topbar-template'
});

Vue.component('realand-menu',{
    data: function(){
        return {
            header : {
                brand : "Charlie's Compnay",
                menu : {
                    list :[
                        {
                        link : "home",
                        label : "Home",
                        list : [
                                {
                                    link : "home",
                                    label : "Home 1"
                                },
                                {
                                    link : "index_2.html",
                                    label : "Home 2"
                                },
                                {
                                    link : "index_3.html",
                                    label : "Home 3"
                                },
                                {
                                    link : "index_4.html",
                                    label : "Home 4"
                                }
                            ]
                        },

                        {
                        link : "propertyList",
                        label : "Listing",
                        list : [
                                {
                                    link : "propertyList",
                                    label : "Listing List 1"
                                    
                                },
                                {
                                    link : "listing_2.html",
                                    label : "Listing List 2"
                                },
                                {
                                    link : "listing_2.html",
                                    label : "Listing Grid"
                                },
                                {
                                    link : "listing_3.html",
                                    label : "Listing Full Map"
                                },
                                {
                                    link : "listing_4.html",
                                    label : "Listing Half Map"
                                }
                            ]
                        },

                        {
                        link : "property",
                        label : "Property",
                        list : [
                                {
                                    link : "property",
                                    label : "Single Property 1"
                                },
                                {
                                    link : "single_property_2.html",
                                    label : "Single Property 2"
                                },
                                {
                                    link : "single_property_3.html",
                                    label : "Single Property 3"
                                }
                            ]  
                        },
                        {
                        link : "pages",
                        label : "Pages",
                        list : [
                                {
                                    link : "myaccount",
                                    label : "My Account",
                                    list : [
                                        {
                                            link : "my_profile.html",
                                            label : "My Profile"
                                        },
                                        {
                                            link : "my_property.html",
                                            label : "My Property"
                                        },
                                        {
                                            link : "bookmarked_listing.html",
                                            label : "Bookmarked Listing"
                                        },
                                        {
                                            link : "bookmarked_listing.html",
                                            label : "Bookmarked Listing"
                                        },
                                        {
                                            link : "change_password.html",
                                            label : "Change Password"
                                        }  
                                    ]
                                },
                                {
                                    link : "about_us.html",
                                    label : "About Us"
                                },
                                {
                                    link : "contactUs",
                                    label : "Contact"
                                },
                                {
                                    link : "agents.html",
                                    label : "Agent List"
                                },
                                {
                                    link : "realtorDetail",
                                    label : "Agent Single"
                                },
                                {
                                    link : "coming_soon.html",
                                    label : "Coming Soon"
                                },
                                {
                                    link : "404.html",
                                    label : "404 Page"
                                },
                                {
                                    link : "package.html",
                                    label : "Packages"
                                },
                                {
                                    link : "sign_up.html",
                                    label : "Login/Signup"
                                },
                                {
                                    link : "test",
                                    label : "test"
                                }
                            ] 
                        },
                        {
                            link : "blog.html",
                            label : "Blog"
                        }



                    ]
                }
            }
        }
    },

    template : '#realand-menu-template'
});

Vue.component('realand-main-search',{
    data : function(){
        return {
            searchCriteria : {
                basic : [
                    {
                        label : "Listing Type",
                        select : {
                            name : "listingType"
                        },
                        options : [
                            {
                                value : "All",
                                label : "All Listing Type"
                            },
                            {
                                value : "rent",
                                label : "For Rent"
                            },
                            {
                                value : "sale",
                                label : "For Sale"
                            },
                            {
                                value : "open",
                                label : "Open House"
                            }
                        ]
                    },
                    {
                        label : "Areas",
                        select : {
                            name : "area"
                        },
                        options : [
                            {
                                value : "toronto",
                                label : "Toronto City"
                            },
                            {
                                value : "northyork",
                                label : "North York"
                            },
                            {
                                value : "markham",
                                label : "Markham"
                            },
                            {
                                value : "richmondhill",
                                label : "Richmond Hill"
                            },
                            {
                                value : "etobicoke",
                                label : "Etobicoke"
                            },
                            {
                                value : "mississauga",
                                label : "Mississauga"
                            }
                        ]
                    },
                ],
                advanceDropdowns : [
                    {
                        label : "Offer Types",
                        select : {
                            name : "offerType"
                        },
                        options : [
                            {
                                value : "All",
                                label : "All Listing Type"
                            },
                            {
                                value : "rent",
                                label : "For Rent"
                            },
                            {
                                value : "sale",
                                label : "For Sale"
                            },
                            {
                                value : "open",
                                label : "Open House"
                            }
                        ]
                    },
                    {
                        label : "City",
                        select : {
                            name : "city"
                        },
                        options : [
                            {
                                value : "toronto",
                                label : "Toronto City"
                            },
                            {
                                value : "okaville",
                                label : "Okaville"
                            },
                            {
                                value : "pickry",
                                label : "Pickry"
                            },
                            {
                                value : "oshava",
                                label : "Oshava"
                            },
                            {
                                value : "london",
                                label : "London"
                            },
                            {
                                value : "waterloo",
                                label : "Waterloo"
                            }
                        ]
                    },
                    {
                        label : "Min Price",
                        select : {
                            name : "price"
                        },
                        options : [
                            {
                                value : "10000",
                                label : "$10,000"
                            },
                            {
                                value : "500000",
                                label : "$50,000"
                            },
                            {
                                value : "700000",
                                label : "$70,000"
                            },
                            {
                                value : "1000000",
                                label : "$100,000"
                            },
                            {
                                value : "2000000",
                                label : "$200,000"
                            },
                            {
                                value : "5000000",
                                label : "$500,000"
                            }
                        ]
                    },
                    {
                        label : "Bedrooms",
                        select : {
                            name : "bedroom"
                        },
                        options : [
                            {
                                value : "1",
                                label : "01 bedroom(s)"
                            },
                            {
                                value : "2",
                                label : "02 bedroom(s)"
                            },
                            {
                                value : "3",
                                label : "03 bedroom(s)"
                            },
                            {
                                value : "4",
                                label : "04 bedroom(s)"
                            },
                            {
                                value : "5",
                                label : "05 bedroom(s)"
                            },
                            {
                                value : "6",
                                label : "06 bedroom(s)"
                            }
                        ]
                    },
                    {
                        label : "Bathrooms",
                        select : {
                            name : "bathroom"
                        },
                        options : [
                            {
                                value : "1",
                                label : "01 bathroom(s)"
                            },
                            {
                                value : "2",
                                label : "02 bathroom(s)"
                            },
                            {
                                value : "3",
                                label : "03 bathroom(s)"
                            },
                            {
                                value : "4",
                                label : "04 bathroom(s)"
                            }
                        ]
                    },
                    {
                        label : "Garages",
                        select : {
                            name : "garage"
                        },
                        options : [
                            {
                                value : "1",
                                label : "01 garage(s)"
                            },
                            {
                                value : "2",
                                label : "02 garage(s)"
                            },
                            {
                                value : "3",
                                label : "03 garage(s)"
                            },
                            {
                                value : "4",
                                label : "04 garage(s)"
                            }
                        ]
                    }    
                ],
                checkboxes : [
                    {
                        name : "balcony",
                        label : "Balcony/Terrace",
                        count : 24
                    },
                    {
                        name : "garage",
                        label : "Parking/Garage",
                        count : 26
                    },
                    {
                        name : "garden",
                        label : "Garden",
                        count : 21
                    },
                    {
                        name : "porter",
                        label : "Porter/Security",
                        count : 18
                    },
                    {
                        name : "fireplace",
                        label : "Fireplace",
                        count : 7
                    },
                    {
                        name : "rural",
                        label : "Rural/Secluded",
                        count : 4
                    },
                    {
                        name : "ac",
                        label : "Air Conditioning",
                        count : 24
                    },
                    {
                        name : "lawn",
                        label : "Lawn",
                        count : 29
                    },
                    {
                        name : "pool",
                        label : "Swimming Pool",
                        count : 11
                    },
                    {
                        name : "barbecue",
                        label : "Barbecue",
                        count : 16
                    },
                    {
                        name : "tv",
                        label : "TV Cable",
                        count : 9
                    }
                ],
                sliders : [
                    {

                    },
                    {

                    }
                ]
            }
        }
    },

    template :'#realand-main-search-template'
});

Vue.component('realand-main-search-sort', {
    data : function(){
        return {
            sortby : {
                result : 25,
                options : [
                    {
                        value : "default",
                        label : "Default"
                    },
                    {
                        value : "low",
                        label : "Price (Low to High)"
                    },
                    {
                        value : "high",
                        label : "Price (High to Low)"
                    },
                    {
                        value : "featured",
                        label : "Featured"
                    }

                ]
            }
        }
    },

    template : '#realand-main-search-sort-template'
});

Vue.component('realand-main-slider',{
    data:function(){
        return {
            slides:[
                {
                    src : "images/test.jpg",
                    house : {
                        title : "GOLDEN SUNSHINE 86",
                        address : "157 West 57th St, 77 - Central Park South, NYC",
                        internal : [ 
                            {
                                quantity : "5+",
                                unit : "BEDS"    
                            },
                            {
                                quantity : "2450",
                                unit : "SQ. FT"
                            },
                            {
                                quantity : "3",
                                unit : "BATHS"
                            }
                        ],
                        price : "$2,500,000"
                    }
                },
                {
                    src : "images/test2.jpg",
                    house : {
                        title : "BiGUi Garden 77",
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8+",
                                unit : "BEDS"    
                            },
                            {
                                quantity : "5720",
                                unit : "SQ. FT"
                            },
                            {
                                quantity : "5",
                                unit : "BATHS"
                            }
                        ],
                        price : "$8,888,000"
                    }
                }    
            ]
        }
    },

    template : '#realand-main-slider-template'
});

Vue.component('realand-property-summary',{
    data : function(){
        return {
            properties : [
               
            ]
        }
    },
    created : function(){
        eventbus.$on("loadPropertiesSummary", this.loadPropertiesSummary)
    },
    methods : {
        loadPropertiesSummary : function(data){
            this.properties = data;
        }
    },
    template :'#realand-property-summary-template'
});

Vue.component('realand-main-banner',{
    data : function(){
        return {
            items : [
                {
                    src : "images/icon_map.png",
                    alt : "Map",
                    title : "Freshest Market Info",
                    description : "Our extensive database of listings and market info provide the most accurate."
                },
                {
                    src : "images/icon_search.png",
                    alt : "Search",
                    title : "Top Local Agents",
                    description : "Our extensive database of listings and market info provide the most accurate."
                },
                {
                    src : "images/icon_negotiation.png",
                    alt : "Negotiation",
                    title : "Peace of Mind",
                    description : "Our extensive database of listings and market info provide the most accurate."
                },


            ]
        }
    },

    template :'#realand-main-banner-template'
});

Vue.component('realand-feature-listing', {
    data : function(){
        return {
            properties : [
               
            ]
        }
    },
    created : function(){
        eventbus.$on("loadFeatureListing", this.loadFeatureListing);
    },
    methods : {
        loadFeatureListing : function(data){
            this.properties = data;
        }
    },

    template : '#realand-feature-listing-template'
});

Vue.component('realand-newsletter',{
    data : function(){
        return {
            newsletter : {
                icon : "images/icon_mail.png",
                alt : "News letter",
                title : "Newsletter",
                description : "Sign up for our newsletter to get up-to-date from us",
                form :{
                    action : "index.html",
                    label : "Subscribe"
                }
            }
        }
    },

    template : '#realand-newsletter-template'
});

Vue.component('realand-news',{
    data : function(){
        return {
            news : [
                {
                    date :{
                        day : "26",
                        month : "July",
                        year : "2017"
                    },
                    title : "Releases 2Q 2017 Tokyo, Japan",
                    description : "The upper level has three bedrooms, with the main bedroom having built-in wardrobes and an ensuite with...",

                },
                {
                    date :{
                        day : "28",
                        month : "July",
                        year : "2017"
                    },
                    title : "Releases SS test on Titles",
                    description : "The upper level has three bedrooms, with the main bedroom having built-in wardrobes and an ensuite with...",

                }
            ]
        }
    },

    template : '#realand-news-template'
});

Vue.component('realand-partners',{
    data : function(){
        return {
            partners:[
                {
                    src : "images/uploads/partner3.jpg",
                    alt : "Partner"
                },
                {
                    src : "images/uploads/partner3.jpg",
                    alt : "Partner"
                },
                {
                    src : "images/uploads/partner3.jpg",
                    alt : "Partner"
                },
                {
                    src : "images/uploads/partner3.jpg",
                    alt : "Partner"
                },
                {
                    src : "images/uploads/partner3.jpg",
                    alt : "Partner"
                }
            ]
        }
    },

    template :'#realand-partners-template'

})

Vue.component('realand-testimonial',{
    data : function(){
        return {
            testimonial : {
                title : "2000&plus; Happy Clients",
                src : "images/icon_chat.png",
                alt : "Testimonial",
                reviews : [
                    {
                        content : "I would like to thank Felix for her outstanding and professional service she has provided as a ReaLand sales agent. I found Felix to be very approachable, professional and nothing was any trouble. I would recommend Felix to any future seller without a doubt, I could not fault her service.",
                        avatar : {
                            src : "images/uploads/testimonial_avatar_1.png",
                            alt : "Mary Jane"
                        },
                        name : "Mary Jane",
                        company : "Sunderland, Haintheme"
                    },
                    {
                        content : "I would like to thank Felix for her outstanding and professional service she has provided as a ReaLand sales agent. I found Felix to be very approachable, professional and nothing was any trouble. I would recommend Felix to any future seller without a doubt, I could not fault her service.",
                        avatar : {
                            src : "images/uploads/testimonial_avatar_4.png",
                            alt : "Karty & Will"
                        },
                        name : "Karty & Will",
                        company : "Sunderland, Haintheme"
                    },
                    {
                        content : "I would like to thank Felix for her outstanding and professional service she has provided as a ReaLand sales agent. I found Felix to be very approachable, professional and nothing was any trouble. I would recommend Felix to any future seller without a doubt, I could not fault her service.",
                        avatar : {
                            src : "images/uploads/testimonial_avatar_5.png",
                            alt : "Jim Kay"
                        },
                        name : "Jim Kay",
                        company : "Sunderland, Haintheme"
                    },
                    {
                        content : "I would like to thank Felix for her outstanding and professional service she has provided as a ReaLand sales agent. I found Felix to be very approachable, professional and nothing was any trouble. I would recommend Felix to any future seller without a doubt, I could not fault her service.",
                        avatar : {
                            src : "images/uploads/testimonial_avatar_1.png",
                            alt : "Terry Teng"
                        },
                        name : "Terry Teng",
                        company : "Sunderland, Haintheme"
                    }
                ]
            }
        }
    },

    template : '#realand-testimonial-template'
})

Vue.component('realand-menu-simple',{
    data : function(){
        return { 
        header : {
            brand : "Charlie's Compnay",
            menu : {
                list :[
                    {
                    link : "home",
                    label : "Home",
                    list : [
                            {
                                link : "home",
                                label : "Home 1"
                            },
                            {
                                link : "index_2.html",
                                label : "Home 2"
                            },
                            {
                                link : "index_3.html",
                                label : "Home 3"
                            },
                            {
                                link : "index_4.html",
                                label : "Home 4"
                            }
                        ]
                    },

                    {
                    link : "propertyList",
                    label : "Listing",
                    list : [
                            {
                                link : "propertyList",
                                label : "Listing List 1"
                                
                            },
                            {
                                link : "listing_2.html",
                                label : "Listing List 2"
                            },
                            {
                                link : "listing_2.html",
                                label : "Listing Grid"
                            },
                            {
                                link : "listing_3.html",
                                label : "Listing Full Map"
                            },
                            {
                                link : "listing_4.html",
                                label : "Listing Half Map"
                            }
                        ]
                    },

                    {
                    link : "property",
                    label : "Property",
                    list : [
                            {
                                link : "property",
                                label : "Single Property 1"
                            },
                            {
                                link : "single_property_2.html",
                                label : "Single Property 2"
                            },
                            {
                                link : "single_property_3.html",
                                label : "Single Property 3"
                            }
                        ]  
                    },
                    {
                    link : "pages",
                    label : "Pages",
                    list : [
                            {
                                link : "myaccount",
                                label : "My Account",
                                list : [
                                    {
                                        link : "my_profile.html",
                                        label : "My Profile"
                                    },
                                    {
                                        link : "my_property.html",
                                        label : "My Property"
                                    },
                                    {
                                        link : "bookmarked_listing.html",
                                        label : "Bookmarked Listing"
                                    },
                                    {
                                        link : "bookmarked_listing.html",
                                        label : "Bookmarked Listing"
                                    },
                                    {
                                        link : "change_password.html",
                                        label : "Change Password"
                                    }  
                                ]
                            },
                            {
                                link : "about_us.html",
                                label : "About Us"
                            },
                            {
                                link : "contact",
                                label : "Contact"
                            },
                            {
                                link : "agents.html",
                                label : "Agent List"
                            },
                            {
                                link : "realtorDetail",
                                label : "Agent Single"
                            },
                            {
                                link : "coming_soon.html",
                                label : "Coming Soon"
                            },
                            {
                                link : "404.html",
                                label : "404 Page"
                            },
                            {
                                link : "package.html",
                                label : "Packages"
                            },
                            {
                                link : "sign_up.html",
                                label : "Login/Signup"
                            },
                            {
                                link : "test",
                                label : "test"
                            }
                        ] 
                    },
                    {
                        link : "blog.html",
                        label : "Blog"
                    }



                ]
            }
        }
        }
    },
    template : '#realand-menu-simple-template'
});

Vue.component('realand-property-header',{
    data : function(){
        return {
            propertyHeader : {  
                tags : [
                    {tag : "FOR SALES"},
                    {tag : "LUXURY HOUSE"}
                ],
                label : "Rel House Luxury Villa",
                favorate : "true",
                house : {
                    address : "157 West 57th St, 77 - Central Park South, NYC",
                    internal : [ 
                        {
                            quantity : "5",
                            unit : "BEDS"    
                        },
                        {
                            quantity : "2450",
                            unit : "SQ. FT"
                        },
                        {
                            quantity : "3",
                            unit : "BATHS"
                        }
                    ],
                    price : "2,500,000",
                    dollarsign : "$",
                    priceSF : "4,824/sq.ft"
                }
            }
        }
    },
    template :'#realand-property-header-template'
});

Vue.component('realand-property-slider',{
    data : function(){
        return { 
            sliders : [
                {
                    src : "images/uploads/property_slider_1.jpeg",
                    alt : "Image 1"
                },
                {
                    src : "images/uploads/property_slider_2.jpeg",
                    alt : "Image 2"
                },
                {
                    src : "images/uploads/property_slider_3.jpeg",
                    alt : "Image 3"
                },
                {
                    src : "images/uploads/property_slider_4.jpeg",
                    alt : "Image 4"
                },
                {
                    src : "images/uploads/property_slider_5.jpeg",
                    alt : "Image 5"
                },
                {
                    src : "images/uploads/property_slider_6.jpeg",
                    alt : "Image 6"
                },
                {
                    src : "images/uploads/property_slider_7.jpeg",
                    alt : "Image 7"
                },
                {
                    src : "images/uploads/property_slider_8.jpeg",
                    alt : "Image 8"
                },
                {
                    src : "images/uploads/property_slider_9.jpeg",
                    alt : "Image 9"
                },
                {
                    src : "images/uploads/property_slider_10.jpeg",
                    alt : "Image 10"
                }

            ] 
        }
    },
    template : '#realand-property-slider-template'
});

Vue.component('realand-property-details',{
    data : function(){
        return {
            details : [
                {
                    label : "Type",
                    value : "Flat, Low-Rise (1-3)"
                },
                {
                    label : "Year Build",
                    value : "1890"
                },
                {
                    label : "Square Footage",
                    value : "1752"
                },
                {
                    label : "Property Subtype",
                    value : "Condominium"
                },
                {
                    label : "Property Type",
                    value : "Condo/Coop/TIC/Loft"
                },
                {
                    label : "HOA Dues",
                    value : "375 HOA"
                },
                {
                    label : "Fee Includes:",
                    value : "Water, Electricity, Garbage, Ext Bldg Maintainance, Security Service, Homeowners Insurance"
                },
                {
                    label : "HOA",
                    value : "Yes"
                }
            ]
        }
    },
    template : '#realand-property-details-template'
})

Vue.component('realand-property-features',{
    data : function(){
        return {
            features : {
            name : "Property features",
            list: 
            [
                {
                    value : "Air Conditioning"
                },
                {
                    value : "Barbeque"
                },
                {
                    value : "Dryer"
                },
                {
                    value : "Gym"
                },
                {
                    value : "Laundry"
                },
                {
                    value : "Lawn"
                },
                {
                    value : "Microwave"
                },
                {
                    value : "Outdoor Shower"
                },
                {
                    value : "Refrigerator"
                },
                {
                    value : "Sauna"
                },
                {
                    value : "Swimming Pool"
                },
                {
                    value : "TV Cable"
                },
                {
                    value : "Washer"
                },
                {
                    value : "Wifi"
                },
                {
                    value : "Window Coverings"
                }
            ]
        }
    }
    },
    template :'#realand-property-features-template'
});

// Google search once when upload the property info 
// nearby entity stores in database ?
Vue.component('realand-property-nearby',{
    data : function(){
        return {
            facilities : {
            title : "Near By",
            
            headers : [
                "List number /Name",
                "Distance",
                "Type"
            ],

            categorizedList :    [
                {
                    category : "School",
                    active:true,
                    list : [
                        {
                            category : "school",
                            name : "GuangZhu Chinese Education Center",
                            distance : "1.5",
                            type : "Language Center"
                        },
                        {
                            category : "school",
                            name : "Galieo High School",
                            distance : "3",
                            type : "High School"
                        },
                        {
                            category : "school",
                            name : "Daniel Webster Elementary School",
                            distance : "5",
                            type : "High School"
                        }
                    ]
                },
                {
                    category : "Market",
                    list :[
                        {
                            category : "market",
                            name : "Roche Bros",
                            distance : "2",
                            type : "Grocery"
                        },
                        {
                            category : "market",
                            name : "mings Supermarket",
                            distance : "5",
                            type : "Grocery"
                        }
                    ]
                    
                },
                {
                    category : "Restaurant",
                    list : [
                        {
                            category : "restaurant",
                            name : "Ostra",
                            distance : "4",
                            type : "Seafood"
                        },
                        {
                            category : "restaurant",
                            name : "Mistral",
                            distance : "2.5",
                            type : "French"
                        }
                    ]
                },
                {
                    category : "Hospital",
                    list : [
                        {
                            category : "hospital",
                            name : "Mass General Hostpial Back Bay",
                            distance : "3",
                            type : "Medical Clinic"
                        }
                    ]
                }
            ]
        }
          
        }
    },
    template : '#realand-property-nearby-template'
})

// realand-property-contact is NOT DONE yet
Vue.component('realand-property-contact',{
    data : function(){
        return {
            /*
            //get agent object from parent component
            //get house information from parent component
            
            agent : {
                
                avatar : {
                    src : "images/uploads/contact_agent.png",
                    alt : "Tristina Avelon",
                },
                company : {
                    name : "Realand Real Estate",
                },
                name : "Tristina Avelon",
                tels : [
                    {tel : "8002883991"}
                ],
                cells : [
                ],
               // form? need a json object below 
            }
            */
           url : "action.url"
        }
    },
    template : '#realand-property-contact-template'
})

Vue.component('realand-property-schedule-visit',{
    data : function(){
        return {
            form : {
                url : "my.rest.api.com/schedule"
            }
        }
    },

    template :'#realand-property-schedule-visit-template'
})

Vue.component('realand-mortgage-calculator', {
    data : function(){
        return {
            calculator : {
                title : "Mortgage Calculator",
                currency : "$",
                housePrice : {
                    label : "Home Price",
                    value : "256800"
                },
                downPay : {
                    label : "Down Payment",
                    value : "317600",
                    percentLabel: "Percent",
                    percent : "20"
                }, 
                interest : {
                    label : "Annual Interest Rate",
                    value : "3.5"
                },
                termsLabel : "Loan Term (Years)",
                terms : [
                    {
                        value : "1",
                        label : "1 year",
                        selected : false
                    },
                    {
                        value : "2",
                        label : "2 years",
                        selected : false
                    },
                    {
                        value : "3",
                        label : "3 years",
                        selected : false
                    },
                    {
                        value : "4",
                        label : "4 years",
                        selected : false
                    },
                    {
                        value : "5",
                        label : "5 years",
                        selected : true
                    },
                    {
                        value : "6",
                        label : "6 years",
                        selected : false
                    },
                    {
                        value : "7",
                        label : "7 years",
                        selected : false
                    },
                    {
                        value : "8",
                        label : "8 years",
                        selected : false
                    },
                ],
                methodsLabel : "Payment Methods",
                methods : [
                    {
                        value : "W",
                        label : "Weekly",
                        selected : false
                    },
                    {
                        value : "B",
                        label : "Bi-Weekly",
                        selected : false
                    },
                    {
                        value : "M",
                        label : "Monthly",
                        selected : true
                    }

                ],
                paymentLabel : "Mortgage Payments:",
                payment : "22253.28"
            }
        }
    },
    template :'#realand-mortgage-calculator-template'
})


Vue.component('realand-property-similar',{
    data : function(){
        return {
            similar : [
                {
                    src : "images/test.jpg",
                    title : "Residia Nishi Azabu",
                    price : "2185000",
                    like : "false",
                    id : "123456"
                },
                {
                    src : "images/test.jpg",
                    title : "Dream House Take Away",
                    price : "2185000",
                    like : "false",
                    id : "123456"
                },
                {
                    src : "images/test.jpg",
                    title : "Castalia Shibakoen",
                    price : "2185000",
                    like : "false",
                    id : "123456"
                }
            ]
        }
    },
    template : '#realand-property-similar-template'
})


Vue.component('realand-property-description',{
    data : function(){
        return {
            title : "Property Description",
            content : "Spacious and grand, 3 bedroom, 2 bath (one en-suite) condo boasts 1,752 Sq Ft. Middle unit of a beautiful three-unit 1890's Victorian designed by William Armitage. Period details: high ceilings, ornate moldings, 2 fireplaces, stained glass, beveled glass transoms, hardwood floors. Spacious dining room, remodeled kitchen and wonderful deeded walk-out deck. Convenient in-unit laundry room, deeded parking & storage space."
        }
    },
    template : '#realand-property-description-template'
})

Vue.component('realand-property-openhouse',{
    data : function(){
        return {
          openhouse : {
              title : "Open House",
              timeslots : [
                  {
                      day : "Thu 8/3",
                      time : "6:00pm - 7:30pm"
                  },
                  {
                    day : "Sat 8/5",
                    time : "6:00pm - 7:30pm"
                  },
                  {
                    day : "Sun 8/6",
                    time : "6:00pm - 7:30pm"
                  }
              ],

          }  
        }
    },
    template : '#realand-property-openhouse-template'
})

Vue.component('realand-list-list',{
    props : ['properties'],
    data : function(){
        return {
            lala : "babababa"
        }
    },

    created : function(){
        eventbus.$on('customevent',this.testabc);
    },

    methods : {
        testabc : function(event){
            console.log(event)
            this.properties[0].alt = event;
        }
    },

    template : '#realand-list-list-template'
})

Vue.component('realand-list-sort',{
    props : ['properties'],

    data : function(){
      return  {
          sort : {
          title : "Sort by",
          types : [
              {
                value : "d",
                label : "Default"
              },
              {
                value : "l",
                label : "Price (Low to High)"
              },
              {
                value : "h",
                label : "Price (High to Low)"
              },
              {
                value : "f",
                label : "Featured"
              }
          ]
        }  
      } 

    },

    methods : {
        testme : function(event){
            this.properties[0].alt = "Muahahahahaha";
        }
    },
    template : '#realand-list-sort-template'
});

Vue.component('realand-list-filter',{
    props : ['properties'],
    data : function(){
        return {
            filter : {
                propertyType : {
                    title : "Property Type",
                    list : [
                        {
                            value : "a",
                            label : "All"
                        },
                        {
                            value : "h",
                            label : "House"
                        },
                        {
                            value : "c",
                            label : "condo"
                        },
                        {
                            value : "office",
                            label : "Office"
                        }
                    ]
                }
            },
            houses : this.properties.slice(0,4),
        }
    },
    methods : {
        test : function(){
            eventbus.$emit('customevent','event message is right here');
        }
    },
    template :'#realand-list-filter-template'
})

Vue.component('realand-list-root',{
    data : function(){
       return { properties : 
            [
               
            ]
        }
    },
    created : function(){
        eventbus.$on("loadListRoot", this.loadListRoot);
    },

    methods : {
        loadListRoot:function(data){
            this.properties = data;
        }
    },

    template :'#realand-list-root-template'

})

Vue.component('realand-realtor-detail', {
    data : function(){
        return {
            realtor : "Here WE ARE MAN@@"
        }
    },
    created : function(){
        eventbus.$on('loadRealtor', this.test3);
    },
    methods : {
        test3 : function(data){
            console.log(data)
            this.realtor = data;
        }
        
    },
    template : '#realand-realtor-detail-template'
})

Vue.component('realand-contact-us',{
    data : function(){
        return {
            contactInfo : {}
        } 
    },
    
    created : function(){
        eventbus.$on("loadContact", this.loadContact);
    },
    methods : {
        loadContact : function(data){
            this.contactInfo = data;
        }
    },
    template : '#realand-contact-us-template'
})








var test = new Vue({
    el:"#app"
});

$(".page-link").click(function(event){
    event.preventDefault();
    console.log(this.dataset.page);
    var pagename = this.dataset.page + '-page';
    $('.page').hide();
    $('.'+pagename).show();

    pageFunctions[this.dataset.page]();
});

const pageFunctions = [];

function registerPage(name, pageFunction){
    pageFunctions[name] = pageFunction;
}

function home(){
    $('.page').hide();
    $('.home-page').show();
}

function propertyList(){
    alert("propertyList page function called!");
}

function property(){
    alert("property page function called!");
}

function realtorDetail(){
    var url = "http://localhost:8080/api/realtor/1"
    var obj = {}
    //var result = ajaxCall(url ,obj);
    $.ajax({
        url : url,
        success : function(data){
            eventbus.$emit('loadRealtor',data);
        }
    })


    //eventbus.$emit('loadRealtor',{abc:"COOOMMMON MANNNNN!"});
    
}

function contactUs(){
    alert("contact us page has been called!!!");
}





registerPage("home", home);
registerPage("propertyList", propertyList);
registerPage("property", property);
registerPage("realtorDetail", realtorDetail);
registerPage("contactUs", contactUs);

home();

