$.support.cors = true;

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
    
    template : `
    <div  class="topbar">
        <ul class="topbar__contact">
        <li><span class="ion-ios-telephone-outline topbar__icon"></span><a href="tel:8801234567" class="topbar__link">{{support.phone}}</a></li>
        <li><span class="ion-ios-email-outline topbar__icon"></span><a href="mailto:ReaLand@support.com" class="topbar__link">{{support.email}}</a></li>
        </ul><!-- .topbar__contact -->
        <ul class="topbar__user">
            <span class="ion-ios-person-outline topbar__user-icon"></span>
            <li><a href="sign_up.html" class="topbar__link">Sign In</a></li>
        </ul>
    </div><!-- .topbar -->
    `
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
                                    link : "contact.html",
                                    label : "Contact"
                                },
                                {
                                    link : "agents.html",
                                    label : "Agent List"
                                },
                                {
                                    link : "agents_single.html",
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

    template : `
    <header class="header header--blue header--top">
	<div class="container">
    <realand-topbar></realand-topbar>
    <div class="header__main">
			<div class="header__logo">
				<a href="index.html">
					<h1 class="screen-reader-text">{{header.brand}}</h1>
					<img src="images/uploads/logo.png" alt="Realand">
				</a>
			</div><!-- .header__main -->

			<div class="nav-mobile">
				<a href="#" class="nav-toggle">
					<span></span>
				</a><!-- .nav-toggle -->
			</div><!-- .nav-mobile -->

			<div class="header__menu header__menu--v1">
				<ul class="header__nav">

        <li v-for="item in header.menu.list" class="header__nav-item" v-bind:data-page="item.link" >
            <a href="#" class="header__nav-link">{{item.label}}</a>
            <template v-if="item.list">
            <ul>
                <li v-for="subitem in item.list" class="page-link" v-bind:data-page="subitem.link" >
                    <a href="#">{{subitem.label}}</a>
                        <template v-if="subitem.list">
                        <ul>
                            <li v-for="subsubitem in subitem.list" class="page-link" v-bind:data-page="subsubitem.link"><a href="#">{{subsubitem.label}}</a></li>
                        </ul>
                        </template>
                </li>
            </ul>
            </template>
        </li>

        </ul><!-- .header__nav -->

        <ul class="topbar__user">
            <li><a href="sign_up.html" class="topbar__link">Sign In</a></li>
            <li><a href="sign_up.html" class="topbar__link">Join</a></li>
        </ul>

    </div><!-- .header__menu -->

    <a href="submit_property.html" class="header__cta">&plus; Submit Property</a>
    </div><!-- .header__main -->
    </div><!-- .container -->
</header><!-- .header -->
    `
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

    template : `
    <section class="main-search main-search--absolute">
    <div class="container">
    <div class="main-search__container">  
    <section class="listing-search">
        <form action="index.html" method="get" class="listing-search__form">
            <div class="row">
                <div v-for="dropdown in searchCriteria.basic" class="col-sm-3">
                    <label v-bind:for="dropdown.select.name" class="listing-search__label">{{dropdown.label}}</label>
                    <select v-bind:name="dropdown.select.name" v-bind:id="dropdown.select.name" class="ht-field">
                        <option v-for="option in dropdown.options" v-bind:value="option.value">{{option.label}}</option>
                    </select>
                </div>
                <div class="col-sm-3">
                    <label for="listing-btn" class="listing-search__label listing-search__label--hidden">Submit</label>
                    <a href="#" id="listing-btn" class="listing-search__btn">Submit</a>
                </div><!-- .col -->
                <div class="col-sm-3">
                    <label for="listing-btn" class="listing-search__label listing-search__label--hidden">Advanced Search</label>
                    <a href="#" id="listing-btn" class="listing-search__btn">Advanced Search</a>
                </div><!-- .col -->
            </div><!-- row -->

            <div class="listing-search__advance">
                <div class="row">
                    <div v-for="dropdown in searchCriteria.advanceDropdowns" class="col-sm-3">
                        <label v-bind:for="dropdown.select.name" class="listing-search__label">{{dropdown.label}}</label>
                        <select v-bind:name="dropdown.select.name" v-bind:id="dropdown.select.name" class="ht-field">
                            <option v-for="option in dropdown.options" v-bind:value="option.value">{{option.label}}</option>
                        </select>
                    </div>
                </div>
                <div class="listing-search__more">
                    <a class="listing-search__more-btn" href="#">Additional Features</a>
                    <div class="listing-search__more-inner">
                        <div class="row">
                            <div v-for="i in Math.ceil(searchCriteria.checkboxes.length/3)"  class="col-sm-6 col-md-3">
                                <div v-for="checkbox in searchCriteria.checkboxes.slice((i-1)*3, i*3)" class="listing-search__more-wrapper">
                                    <input type="checkbox" v-bind:name="checkbox.name" v-bind:id="'checkbox-'+checkbox.name" class="listing-search__more-field">
                                    <label v-bind:for="checkbox.name" class="listing-search__more-label">{{checkbox.label}} ({{checkbox.count}})</label>
                                </div>
                            </div>
                        </div><!-- .row -->
                    </div><!-- .listing-search__more-inner -->
                </div><!-- .listing-search__more -->
            </div><!-- .listing-search__advance -->
        </form><!-- .listing-search__form -->
    </section><!-- .listing-search -->

    <realand-main-search-sort></realand-main-search-sort>

    </div><!-- .main-search__container -->
    </div><!-- .container -->
    </section><!-- .listing-search -->

    
    `
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

    template : `

    <section class="listing-sort">
		<div class="listing-sort__inner">
            <ul class="listing-sort__list">
                <li class="listing-sort__item"><a href="#" class="listing-sort__link"><i class="fa fa-th-list listing-sort__icon" aria-hidden="true"></i></a></li>
                <li class="listing-sort__item"><a href="#" class="listing-sort__link"><i class="fa fa-th listing-sort__icon" aria-hidden="true"></i></a></li>
                <li class="listing-sort__item"><a href="#" class="listing-sort__link listing-sort__link--active "><i class="fa fa-th-large listing-sort__icon" aria-hidden="true"></i></a></li>
            </ul>

            <span class="listing-sort__result">1-9 of {{sortby.result}} results</span>
            <p class="listing-sort__sort">
                <label for="sort-type" class="listing-sort__label"><i class="fa fa-sort-amount-asc" aria-hidden="true"></i> Sort by </label>
                <select name="sort-type" id="sort-type" class="ht-field listing-sort__field">
                    <option v-for="option in sortby.options" v-bind:value="option.value">{{option.label}}</option>
                </select>
            </p>
        </div><!-- .listing-sort__inner -->
	</section><!-- .listing-sort -->
    `
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

    template : `
    <section class="main-slider">
	<div id="rev_slider_1_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" data-alias="realand-slider-1" data-source="gallery" style="margin:0px auto;background:rgba(0,0,0,0.5);padding:0px;margin-top:0px;margin-bottom:0px;">
		<!-- START REVOLUTION SLIDER 5.4.6 fullwidth mode -->
		<div id="rev_slider_1_1" class="rev_slider fullwidthabanner" style="display:none;" data-version="5.4.6">
			<ul>
        <!-- SLIDE  -->
        <li v-for="(item, index) in slides" v-bind:data-index="index" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="images/revslider/main_slider_1-2-100x50.jpeg" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
        <!-- MAIN IMAGE -->
        <img src="images/dummy.png" alt="" title="Main Slider 1-2" width="1920" height="820" v-bind:data-lazyload="item.src" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg" data-no-retina>
        <!-- LAYERS -->

        <!-- LAYER NR. 1 -->
        <div class="tp-caption     rev_group" id="slide-6-layer-1" data-x="['left','left','left','center']" data-hoffset="['100','100','100','0']" data-y="['top','top','top','bottom']" data-voffset="['375','375','375','200']" data-width="['425','425','370','370']" data-height="['190','190','170','170']" data-whitespace="nowrap" data-type="group" data-responsive_offset="on" data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"x:left;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 5; min-width: 425px; max-width: 425px; max-width: 190px; max-width: 190px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;background-color:rgb(255,255,255);">
            <!-- LAYER NR. 2 -->
            <h2 class="tp-caption   tp-resizeme" id="slide-6-layer-2" data-x="['left','left','left','left']" data-hoffset="['30','30','20','20']" data-y="['top','top','top','top']" data-voffset="['30','30','30','30']" data-fontsize="['32','32','28','28']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 6; white-space: nowrap; font-size: 32px; line-height: 22px; font-weight: 700; color: #333333; letter-spacing: 0px;font-family:Open Sans;">{{item.house.title}}</h2>

            <!-- LAYER NR. 3 -->
            <div class="tp-caption   tp-resizeme" id="slide-6-layer-4" data-x="['left','left','left','left']" data-hoffset="['30','30','20','20']" data-y="['top','top','top','top']" data-voffset="['70','70','60','60']" data-fontsize="['16','16','14','14']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 7; white-space: nowrap; font-size: 16px; line-height: 22px; font-weight: 400; color: #666666; letter-spacing: 0px;font-family:Roboto;">{{item.house.address}}</div>
        </div>

        <!-- LAYER NR. 4 -->
        <div class="tp-caption     rev_group" id="slide-6-layer-5" data-x="['left','left','left','left']" data-hoffset="['130','130','120','75']" data-y="['top','top','top','top']" data-voffset="['490','490','475','230']" data-width="34" data-height="45" data-whitespace="nowrap" data-type="group" data-responsive_offset="on" data-frames='[{"delay":1000,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 8; min-width: 34px; max-width: 34px; max-width: 45px; max-width: 45px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;">
            <!-- LAYER NR. 5 -->
            <span class="tp-caption   tp-resizeme" id="slide-6-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 9; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #333333; letter-spacing: 0px;font-family:Roboto;">{{item.house.internal[0].quantity}}</span>

            <!-- LAYER NR. 6 -->
            <span class="tp-caption   tp-resizeme" id="slide-6-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 10; white-space: nowrap; font-size: 12px; line-height: 22px; font-weight: 400; color: #333333; letter-spacing: 0px;font-family:Roboto;">{{item.house.internal[0].unit}}</span>
        </div>

        <!-- LAYER NR. 7 -->
        <div class="tp-caption     rev_group" id="slide-6-layer-12" data-x="['left','left','left','left']" data-hoffset="['255','255','245','180']" data-y="['top','top','top','top']" data-voffset="['490','490','475','230']" data-width="45" data-height="45" data-whitespace="nowrap" data-type="group" data-responsive_offset="on" data-frames='[{"delay":800,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 11; min-width: 45px; max-width: 45px; max-width: 45px; max-width: 45px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;">
            <!-- LAYER NR. 8 -->
            <div class="tp-caption   tp-resizeme" id="slide-6-layer-28" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 12; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #333333; letter-spacing: 0px;font-family:Roboto;">{{item.house.internal[1].quantity}}</div>

            <!-- LAYER NR. 9 -->
            <div class="tp-caption   tp-resizeme" id="slide-6-layer-30" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 13; white-space: nowrap; font-size: 12px; line-height: 22px; font-weight: 400; color: #333333; letter-spacing: 0px;font-family:Roboto;">{{item.house.internal[1].unit}}</div>
        </div>

        <!-- LAYER NR. 10 -->
        <div class="tp-caption     rev_group" id="slide-6-layer-20" data-x="['left','left','left','left']" data-hoffset="['190','190','180','125']" data-y="['top','top','top','top']" data-voffset="['490','490','475','230']" data-width="40" data-height="45" data-whitespace="nowrap" data-type="group" data-responsive_offset="on" data-frames='[{"delay":800,"speed":1010,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 14; min-width: 40px; max-width: 40px; max-width: 45px; max-width: 45px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;">
            <!-- LAYER NR. 11 -->
            <span class="tp-caption   tp-resizeme" id="slide-6-layer-21" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 15; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #333333; letter-spacing: 0px;font-family:Roboto;"> {{item.house.internal[2].quantity}}</span>

            <!-- LAYER NR. 12 -->
            <span class="tp-caption   tp-resizeme" id="slide-6-layer-24" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 16; white-space: nowrap; font-size: 12px; line-height: 22px; font-weight: 400; color: #333333; letter-spacing: 0px;font-family:Roboto;">{{item.house.internal[2].unit}}</span>
        </div>

        <!-- LAYER NR. 13 -->
        <div class="tp-caption     rev_group" id="slide-6-layer-31" data-x="['left','left','left','left']" data-hoffset="['525','525','470','56']" data-y="['top','top','top','top']" data-voffset="['375','375','375','300']" data-width="['245','245','245','185']" data-height="['135','135','125','45']" data-whitespace="nowrap" data-type="group" data-responsive_offset="on" data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 17; min-width: 245px; max-width: 245px; max-width: 135px; max-width: 135px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;background-color:rgb(34,53,91);">
            <!-- LAYER NR. 14 -->
            <h3 class="tp-caption   tp-resizeme" id="slide-6-layer-32" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['24','24','24','20']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 18; white-space: nowrap; font-size: 24px; line-height: 22px; font-weight: 900; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{item.house.price}}</h3>
        </div>

        <!-- LAYER NR. 15 -->
        <div class="tp-caption     rev_group" id="slide-6-layer-33" data-x="['left','left','left','left']" data-hoffset="['525','525','470','240']" data-y="['top','top','top','top']" data-voffset="['510','510','500','300']" data-width="['245','245','245','185']" data-height="['55','55','45','45']" data-whitespace="nowrap" data-type="group" data-responsive_offset="on" data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 19; min-width: 245px; max-width: 245px; max-width: 55px; max-width: 55px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;background-color:rgb(31,195,65);">
            <!-- LAYER NR. 16 -->
            <a class="tp-caption   tp-resizeme" href="#" target="_self" id="slide-6-layer-34" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['16','16','16','15']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-actions='' data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 20; white-space: nowrap; font-size: 16px; line-height: 22px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;text-decoration: none;">VIEW DETAIL </a>
        </div>
        </li>
    </ul>
			<div class="tp-bannertimer tp-bottom" style="visibility: hidden !important;"></div>
		</div>
    </div>
    <!-- END REVOLUTION SLIDER -->

    <realand-main-search></realand-main-search>

    </section><!-- .main-slider -->
    `
});

Vue.component('realand-property-summary',{
    data : function(){
        return {
            properties : [
                {
                    thumbnail : "images/test5.jpg",
                    alt : "Real House Luxury Villa",
                    link : "single_property_1.html",
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
                        price : "$2,500,000"
                    }
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "Real House Luxury Villa",
                    link : "single_property_2.html",
                    label : "Real House Luxury Villa",
                    favorate : "false",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "false",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "false",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "true",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "false",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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

    template : `
    <div class="row">
        <div v-for="property in properties" class="col-md-6 item-grid__container">
        <div class="listing">
        <div class="item-grid__image-container">
            <a v-bind:href="property.link">
            <div class="item-grid__image-overlay"></div><!-- .item-grid__image-overlay -->
            <img v-bind:src="property.thumbnail" v-bind:alt="property.alt" class="listing__img">
            <span class="listing__favorite"><i class="fa fa-heart-o" v-bind:aria-hidden="property.favorate"></i></span>
            </a>
        </div><!-- .item-grid__image-container -->

        <div class="item-grid__content-container">
            <div class="listing__content">
            <div class="listing__header">
                <div class="listing__header-primary">
                <h3 class="listing__title"><a v-bind:href="property.link">{{property.label}}</a></h3>
                <p class="listing__location"><span class="ion-ios-location-outline listing__location-icon"></span>{{property.house.address}}</p>
                </div><!-- .listing__header-primary -->
                <p class="listing__price">{{property.house.price}}</p>
            </div><!-- .listing__header -->
            <div class="listing__details">
                <ul class="listing__stats">
                <li v-for="item in property.house.internal"><span class="listing__figure">{{item.quantity}}</span> {{item.unit}}</li>
                </ul><!-- .listing__stats -->
                <a v-bind:href="property.link" class="listing__btn">Details <span class="listing__btn-icon"><i class="fa fa-angle-right" aria-hidden="false"></i></span></a>
            </div><!-- .listing__details -->
            </div><!-- .listing-content -->
            </div><!-- .item-grid__content-container -->
            </div><!-- .listing -->
        </div><!-- .col -->
  </div><!-- .row -->
    `
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

    template : `
    <section class="features">
    <div class="features__overlay">
    <div class="container">
    <div class="row">
    <div v-for="item in items" class="col-sm-4">
        <div class="feature">
        <img v-bind:src="item.src" v-bind:alt="item.alt" class="feature__icon">
        <h3 class="feature__title">{{item.title}}</h3>
        <p class="feature__desc">
        {{item.description}}
        </p>
        </div><!-- .feature -->
    </div><!-- .col -->
    </div><!-- .row -->
    </div><!-- .container -->
    </div><!-- .features__overlay -->
    </section><!-- .features -->
    `
});

Vue.component('realand-feature-listing', {
    data : function(){
        return {
            properties : [
                {
                    thumbnail : "images/test5.jpg",
                    alt : "Real House Luxury Villa",
                    link : "single_property_1.html",
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
                        price : "$2,500,000"
                    }
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "Real House Luxury Villa",
                    link : "single_property_2.html",
                    label : "Real House Luxury Villa",
                    favorate : "false",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "false",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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

    template : `
    <section class="featured-listing">
    <div class="container">
      <h2 class="section__title">Featured Listing</h2>
      <div class="row">
        <div v-for="property in properties" class="col-md-4 featured-listing__container">
          <div class="listing">
            <div class="item-grid__image-container">
              <a v-bind:href="property.link">
                <div class="item-grid__image-overlay"></div><!-- .item-grid__image-overlay -->
                <img v-bind:src="property.thumbnail" v-bind:alt="property.alt" class="listing__img">
                <span class="listing__favorite"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
              </a>
            </div><!-- item-grid__image-container -->
  
            <div class="item-grid__content-container">
              <div class="listing__content">
                <h3 class="listing__title"><a v-bind:href="property.link">{{property.label}}</a></h3>
                <p class="listing__location"><span class="ion-ios-location-outline listing__location-icon"></span> {{property.house.address}}</p>
                <p class="listing__price">{{property.price}}</p>
                <div class="listing__details">
                  <ul class="listing__stats">
                    <li v-for="item in property.house.internal"><span class="listing__figure">{{item.quantity}}</span>{{item.unit}}</li>
                  </ul><!-- .listing__stats -->
                  <a v-bind:href="property.link" class="listing__btn">Details <span class="listing__btn-icon"><i class="fa fa-angle-right" aria-hidden="true"></i></span></a>
                </div><!-- .listing__details -->
              </div><!-- .listing-content -->
            </div><!-- .item-grid__content-container -->
          </div><!-- .listing -->
        </div><!-- .col -->
        </div><!-- .row -->
        </div><!-- .container -->
      </section><!-- .featured-listing -->
    `
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

    template : `
    <section class="newsletter">
    <div class="container">
      <div class="row">
        <div class="col-md-6 newsletter__content">
          <img v-bind:src="newsletter.icon" v-bind:alt="newsletter.alt" class="newsletter__icon">
          <div class="newsletter__text-content">
            <h2 class="newsletter__title">{{newsletter.title}}</h2>
            <p class="newsletter__desc">{{newsletter.description}}</p>
          </div>
        </div><!-- .col -->
  
        <div class="col-md-6">
          <form v-bind:action="newsletter.form.action" class="newsletter__form">
            <input type="email" class="newsletter__field" placeholder="Enter Your E-mail">
            <button type="submit" class="newsletter__submit">{{newsletter.form.label}}</button>
          </form>
        </div><!-- .col -->   
      </div><!-- .row -->
    </div><!-- .container -->
  </section><!-- .newsletter -->
    `
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

    template : `
    <section class="news">
    <div class="container">
        <div class="row">
        <div v-for="item in news" class="col-md-6">
            <div class="news__single">
            <div class="news__time">
                <span class="news__date">{{item.date.day}}</span>
                <span class="news__my">{{item.date.month}}, {{item.date.year}}</span>
            </div><!-- .news__time -->

            <div class="news__main">
                <h3 class="news__title"><a href="blog_single.html">{{item.title}}</a></h3>
                <span class="news__meta"><span class="ion-ios-chatboxes-outline"></span> 3 Comment(s)</span>
                <p class="news__excerpt">{{item.description}}</p>
                <a href="blog_single.html" class="news__readmore">&plus; Read More</a>
            </div><!-- .news__main-->
            </div><!-- .news__single -->
        </div><!-- .col -->
        </div><!-- .row -->
    </div><!-- .container -->
    </section><!-- .news -->
    `
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

    template : `
    <section class="partners">
        <div class="container">
            <ul class="partners__list">
            <li v-for="partner in partners"><img v-bind:src="partner.src" alt="partner.alt"></li>
            </ul><!-- .partners__list -->
        </div><!-- .container -->
    </section><!-- .partners -->
    `

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

    template : `
    <section class="testimonial">
        <div class="container">
        <div class="testimonial__container testimonial--b-border">
            <div class="testimonial--centered">
                <h2 class="section__title section__title--large">{{testimonial.title}}</h2>
                <img v-bind:src="testimonial.src" v-bind:alt="testimonial.alt" class="testimonial__icon">
                <div class="testimonial__content">
                <div class="testimonial__slider testimonial__slider--top">
                    <p v-for="review in testimonial.reviews">
                    {{review.content}}
                    </p>
                </div><!-- .testimonial__slider -->
    
                <ul class="testimonial__slider testimonial__list testimonial__slider--middle">
                    <li v-for="review in testimonial.reviews"><img v-bind:src="review.avatar.src" v-bind:alt="review.avatar.alt"></li>
                </ul><!-- .testimonial__slider --> 
    
                <div class="testimonial__slider testimonial__slider--bottom">
                    <div v-for="review in testimonial.reviews" class="testimonial__slider-wrapper">
                    <h4 class="testimonial__customer-name">{{review.name}}</h4>
                    <p class="testimonial__customer-company">{{review.company}}</p>
                    <img src="images/rating.png" alt="Five Stars Rating">
                    </div><!-- .testimonial__slider-wrapper -->
                </div><!-- .testimonial__slider -->
                </div><!-- .testimonial__content -->
            </div><!-- .testimonial--center --> 
        </div><!-- .testimonial__container -->
        </div><!-- .container -->
    </section><!-- .testimonial -->
    `
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
                                link : "contact.html",
                                label : "Contact"
                            },
                            {
                                link : "agents.html",
                                label : "Agent List"
                            },
                            {
                                link : "agents_single.html",
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
    template : `
    <header class="header header--blue">
    <div class="container">
      <div class="header__main">
        <div class="header__logo">
          <a href="index.html">
            <h1 class="screen-reader-text">{{header.brand}}</h1>
            <img src="images/uploads/logo.png" alt="Realand">
          </a>
        </div><!-- .header__logo -->
  
        <div class="nav-mobile">
          <a href="#" class="nav-toggle">
            <span></span>
          </a><!-- .nav-toggle -->
        </div><!-- .nav-mobile -->
  
        <div class="header__menu header__menu--v6">
          <ul class="header__nav">
            <li  v-for="item in header.menu.list" class="header__nav-item" v-bind:data-page="item.link">
              <a href="#" class="header__nav-link header__nav-link--v2">{{item.label}}</a>
              <ul>
                <li v-for="subitem in item.list" class="page-link" v-bind:data-page="subitem.link"><a href="#">{{subitem.label}}</a>
                  <template v-if="subitem.list">
                    <ul>
                      <li v-for="subsubitem in subitem.list" class="page-link" v-bind:data-page="subsubitem.link">
                        <a href="#">{{subsubitem.label}}</a>
                      </li>
                    </ul>
                  </template>
                </li>
              </ul>
            </li>
          </ul><!-- .header__nav -->
  
          <ul class="topbar__user topbar__user--uppercase">
            <li><a href="sign_up.html" class="topbar__link topbar__link--white">Sign In</a></li>
            <li><a href="sign_up.html" class="topbar__link topbar__link--white">Join</a></li>
          </ul>
  
        </div><!-- .header__menu -->
  
        <a href="submit_property.html" class="header__cta header__cta--outline">&plus; Submit Property</a>
      </div><!-- .header__main -->
    </div><!-- .container -->
  </header><!-- .header -->
    `
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
    template : `
    
    <div class="property__header">
    <div class="container">
        <div class="property__header-container">
            <ul class="property__main">
                <li class="property__title property__main-item">
                    <div class="property__meta">
                        <span class="property__offer">{{propertyHeader.tags[0].tag}}</span>
                        <span class="property__type">{{propertyHeader.tags[1].tag}}</span>
                    </div><!-- .property__meta -->
                    <h2 class="property__name">{{propertyHeader.label}}</h2>
                   
                </li>
                <li class="property__details property__main-item">
                    <ul class="property__stats">
                        <li v-for="item in propertyHeader.house.internal" class="property__stat"><span class="property__figure">{{item.quantity}}</span> {{item.unit}}</li>
                    </ul><!-- .listing__stats -->
                </li>
                <li class="property__price property__main-item">
                    <h4 class="property__price-primary">{{propertyHeader.house.dollarsign}}{{propertyHeader.house.price}}</h4>
                    <span class="property__price-secondary">{{propertyHeader.house.dollarsign}}{{propertyHeader.house.priceSF}}</span>
                </li>
            </ul><!-- .property__main -->

            <ul class="property__list">
                <li class="property__item">
                    <a href="#" class="property__link">
                        <i class="fa fa-heart-o property__icon" aria-hidden="true"></i>  
                        <span class="property__item-desc">Favorite</span>
                    </a>
                </li>
                <li class="property__item">
                    <a href="#" class="property__link">
                        <i class="ion-ios-loop-strong property__icon"></i>
                        <span class="property__item-desc">Compare</span>
                    </a>
                </li>
                <li class="property__item">
                    <a href="#" class="property__link">
                        <i class="ion-android-share-alt property__icon"></i>
                        <span class="property__item-desc">Share</span>
                    </a>
                </li>
            </ul><!-- .property__list -->
        </div><!-- .property__header-container -->
    </div><!-- .container -->
    </div><!-- .property__header -->
    `
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
    template : `
    <div class="property__slider">
    <div class="container">
      <div class="property__slider-container property__slider-container--vertical">
        <ul class="property__slider-nav property__slider-nav--vertical">
          <li v-for="item in sliders" class="property__slider-item">
            <img v-bind:src="item.src" v-bind:alt="item.alt">
          </li>
        </ul><!-- .property__slider-nav -->

        <div class="property__slider-main property__slider-main--vertical">
          <div class="property__slider-images">
            <div v-for="item in sliders" class="property__slider-image">
              <img v-bind:src="item.src" alt="item.alt">
            </div><!-- .property__slider-image -->
          </div><!-- .property__slider-images -->

          <ul class="image-navigation">
            <li class="image-navigation__prev">
              <span class="ion-ios-arrow-left"></span>
            </li>
            <li class="image-navigation__next">
              <span class="ion-ios-arrow-right"></span>
            </li>
          </ul>

          <span class="property__slider-info"><i class="ion-android-camera"></i><span class="sliderInfo"></span></span>
        </div><!-- .property__slider-main -->
      </div><!-- .property__slider-container -->
    </div><!-- .container -->
  </div><!-- .property__slider -->
    `
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
    template : `
        <div class="property__feature">
              <h3 class="property__feature-title property__feature-title--b-spacing">Property Details</h3>
              <ul class="property__details-list">
                <li v-for="item in details" class="property__details-item"><span class="property__details-item--cat">{{item.label}}:</span> {{item.value}}</li>
              </ul><!-- .property__details-list -->
            </div><!-- .property__feature -->
    `
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
    template : `
        <div class="property__feature">
            <h3 class="property__feature-title property__feature-title--b-spacing">{{features.name}}</h3>
            <ul class="property__features-list">
            <li v-for="item in features.list" class="property__features-item"><span class="property__features-icon ion-checkmark-round"></span>{{item.value}}</li>
            </ul><!-- .property__features-list -->
        </div><!-- .property__feature -->
    `
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
    template : `
    <div class="property__feature">
    <div class="property__feature-header">
      <h3 class="property__feature-title">{{facilities.title}}</h3>
      <nav class="property__tab-list">
        <a v-for="subcategory in facilities.categorizedList" v-bind:href="'#property-'+subcategory.category" class="property__tab" v-bind:class="{'property__tab--active' : subcategory.active}">{{subcategory.category}} ({{subcategory.list.length}})</a>
      </nav>
    </div><!-- .property__feature-header -->
    <div v-for="categorizedList in facilities.categorizedList" class="property__tab-container">
      <table class="property__tab-content" v-bind:class="{'is-visible':categorizedList.active}" v-bind:id="'property-'+categorizedList.category">
        <thead>
          <tr>
            <th v-for="header in facilities.headers">{{header}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in categorizedList.list">
            <td><span class="list-number">{{index+1}}</span> {{item.name}}</td>
            <td>{{item.distance}}km</td>
            <td>{{item.type}}</td>
          </tr>
        </tbody>
      </table><!-- .property__tab-content -->
    </div><!-- .property__tab-container -->
  </div><!-- .property__feature -->
    `
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
    template : `
    <section class="widget">
              <form class="contact-form contact-form--white">
                <div class="contact-form__header">
                  <div class="contact-form__header-container">
                    <img src="images/uploads/contact_agent.png" alt="Tristina Avelon">
                    <div class="contact-info">
                      <span class="contact-company">Realand Real Estate</span>
                      <h3 class="contact-name"><a href="#">Tristina Avelon</a></h3>
                      <a href="tel:+8002883991" class="contact-number">Call: (800) 288 3991</a>
                    </div><!-- .contact-info -->
                  </div><!-- .contact-form__header-container -->
                </div><!-- .contact-form__header -->
                
                <div class="contact-form__body">
                  <input type="text" class="contact-form__field" placeholder="Name" name="name" required>
                  <input type="email" class="contact-form__field" placeholder="Email" name="email" required>
                  <input type="tel" class="contact-form__field" placeholder="Phone number" name="phone number">
                  <textarea class="contact-form__field contact-form__comment" cols="30" rows="5" placeholder="Comment" name="comment" required>I am interested in Golden House Place 72, 1633 Newcomb Ave, San Francisco, CA 94124 (//info from parent component)</textarea>
                </div><!-- .contact-form__body -->

                <div class="contact-form__footer">
                  <input type="submit" class="contact-form__submit" name="submit" value="Contact Agent">
                </div><!-- .contact-form__footer -->
              </form><!-- .contact-form -->
            </section><!-- .widget -->
            `
})

Vue.component('realand-property-schedule-visit',{
    data : function(){
        return {
            form : {
                url : "my.rest.api.com/schedule"
            }
        }
    },

    template : `
    <div class="property__feature">
        <h3 class="property__feature-title property__feature-title--b-spacing">Schedule A Visit</h3>
        <form class="property__form">
        <div class="row">
            <div class="col-sm-6">
            <div class="property__form-wrapper">
                <input type="text" name="date" class="property__form-field property__form-date" placeholder="Monday" data-format="l, F d, Y"  data-min-year="2018"  data-max-year="2020" data-translate-mode="true" data-modal="true" data-large-mode="true" required>
                <span class="ion-android-calendar property__form-icon"></span>
            </div><!-- .property__form-wrapper -->
            </div><!-- col -->
            <div class="col-sm-6">
            <div class="property__form-wrapper">
                <input type="text" name="time" class="property__form-field property__form-time" placeholder="07:30 AM" required>
                <span class="ion-android-alarm-clock property__form-icon"></span>
            </div><!-- .property__form-wrapper -->
            </div><!-- col -->
            <div class="col-sm-6">
            <input type="text" name="name" class="property__form-field" placeholder="Your Name" required>
            </div><!-- col -->
            <div class="col-sm-6">
            <input type="text" name="contact" class="property__form-field" placeholder="Your Email/Phone" required>
            </div><!-- col -->
            <div class="col-sm-12">
            <textarea rows="4" name="message" class="property__form-field" placeholder="Message" required></textarea>
            </div><!-- col -->
            <div class="col-sm-12">
            <input name="submit" type="submit" class="property__form-submit" value="Submit"></input>
            </div><!-- .col -->
        </div><!-- .row -->
        </form>
    </div><!-- .property__feature -->
    `
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
    template :`

    <section class="widget widget--white widget--padding-20">
    <h3 class="widget__title">{{calculator.title}}</h3>
    <form class="form-calculator">
      <div class="form-calculator__group">
        <label for="home-price" class="form-calculator__label">{{calculator.housePrice.label}}</label>
        <span class="form-calculator__icon form-calculator__currency">{{calculator.currency}}</span>
        <input id="home-price" type="text" class="form-calculator__field" required v-bind:value="calculator.housePrice.value">
      </div><!-- .form-calculator__group -->

      <div class="form-calculator__wrapper">
        <div class="form-calculator__group form-calculator__group--larger">
          <label for="down-payment" class="form-calculator__label">{{calculator.downPay.label}}</label>
          <span class="form-calculator__icon form-calculator__currency">{{calculator.currency}}</span>
          <input id="down-payment" type="text" class="form-calculator__field" required v-bind:value="calculator.downPay.value">
        </div><!-- .form-calculator__group -->

        <div class="form-calculator__group form-calculator__group--smaller">
          <label for="percent" class="form-calculator__label">{{calculator.downPay.percentLabel}}</label>
          <span class="form-calculator__icon form-calculator__percent">%</span>
          <input id="percent" type="text" class="form-calculator__field" required v-bind:value="calculator.downPay.percent">
        </div><!-- .form-calculator__group -->
      </div><!-- .form-calculator__wrapper -->  

      <div class="form-calculator__group">
        <label for="annual-rate" class="form-calculator__label">{{calculator.interest.label}}</label>
        <span class="form-calculator__icon form-calculator__percent">%</span>
        <input id="annual-rate" type="text" class="form-calculator__field" required v-bind:value="calculator.interest.value">
      </div><!-- .form-calculator__group -->

      <div class="form-calculator__group">
        <label for="loan-term" class="form-calculator__label">{{calculator.termsLabel}}</label>
        <select id="loan-term" class="ht-field" required>
          <option v-for="term in calculator.terms" v-bind:value="term.value" :selected="term.selected">{{term.label}}</option>
        </select>
      </div><!-- .form-calculator__group -->
      <div class="form-calculator__group">
        <label for="percent" class="form-calculator__label">{{calculator.methodsLabel}}</label>
        <select id="percent" class="ht-field" required>
          <option v-for="method in calculator.methods" v-bind:value="method.value" :selected="method.selected">{{method.label}}</option>
        </select>
      </div><!-- .form-calculator__group -->

      <input type="submit" class="form-calculator__submit" value="Calculate">
      
      <div class="form-calculator__result">
        <h3 class="mortgage-payment">{{calculator.paymentLabel}}<span>{{calculator.currency}}{{calculator.payment}}</span></h3>
      </div>
    </form><!-- .form-calculator -->
  </section><!-- .widget -->
    `
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
    template : `
    <section class="widget widget--white widget--padding-20">
        <h3 class="widget__title">Similar Homes</h3>
        <div v-for="item in similar" class="similar-home">
        <a v-bind:href="item.id">
            <div class="similar-home__image">
            <div class="similar-home__overlay"></div><!-- .similar-home__overlay -->
            <img v-bind:src="item.src" v-bind:alt="item.title">
            <span class="similar-home__favorite"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
            </div><!-- .similar-home__image -->
            <div class="similar-home__content">
            <h3 class="similar-home__title">{{item.title}}</h3>
            <span class="similar-home__price">\${{item.price}}</span>
            </div><!-- .similar-home__content -->
        </a>
        </div><!-- .similar-home -->
    </section><!-- .widget -->          
    
    `
})


Vue.component('realand-property-description',{
    data : function(){
        return {
            title : "Property Description",
            content : "Spacious and grand, 3 bedroom, 2 bath (one en-suite) condo boasts 1,752 Sq Ft. Middle unit of a beautiful three-unit 1890's Victorian designed by William Armitage. Period details: high ceilings, ornate moldings, 2 fireplaces, stained glass, beveled glass transoms, hardwood floors. Spacious dining room, remodeled kitchen and wonderful deeded walk-out deck. Convenient in-unit laundry room, deeded parking & storage space."
        }
    },
    template :`
    <div class="property__feature">
        <h3 class="property__feature-title property__feature-title--b-spacing">{{title}}</h3>
        <p>{{content}}</p>
    </div><!-- .property__feature -->
    `
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
    template : `
    <div class="property__feature">
        <h3 class="property__feature-title">{{openhouse.title}}</h3>
        <div class="property__feature-schedule">
            <ul class="property__feature-time-list">
                <li v-for="timeslot in openhouse.timeslots" class="property__feature-time-item">{{timeslot.day}} {{timeslot.time}}</li>
            </ul>
            <a href="#" class="property__feature-cta">Go See This Home</a>
        </div><!-- .property__feature-schedule -->
        <a href="#" class="property__feature-open-maps"><span class="ion-ios-location-outline"></span> Open on Google Maps</a>
    </div><!-- .property__feature -->
    `
})

const eventbus = new Vue({
    data : {
        eventbuss :"myfuckingeventbussssss"
    }
});


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
        testabc(event){
            console.log(event)
            this.properties[0].alt = event;
        }
    },

    template : `
    <section>
    <div v-for="item in properties" class="item-grid__container">
      <div class="listing listing--v2">
        <div class="item-grid__image-container item-grid__image-container--v2 page-link" v-bind:data-page="'property'">
          <a href="#">
            <div class="item-grid__image-overlay"></div><!-- .item-grid__image-overlay -->
            <img v-bind:src="item.thumbnail" v-bind:alt="item.alt" class="listing__img">
            <span class="item__label">For Sale</span>
            <span class="listing__favorite listing__favorite--v2"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
          </a>
        </div><!-- .col -->

        <div class="item-grid__content-container item-grid__content-container--v2">
          <div class="listing__content--v2">
            <div class="listing__header">
              <div class="listing__header-primary">
                <span class="listing__type">Villa</span>
                <h3 class="listing__title page-link" v-bind:data-page="'property'"><a href="#">{{item.alt}}</a></h3>
                <p class="listing__location"><span class="ion-ios-location-outline listing__location-icon"></span>{{item.house.address}}</p>
              </div><!-- .listing__header-primary -->
              <p class="listing__price">\${{item.house.price}}</p>
            </div><!-- .listing__header -->
            <div class="listing__details">
              <ul class="listing__stats">
                <li v-for="subitem in item.house.internal"><span class="listing__figure">{{subitem.quantity}}</span> {{subitem.unit}}</li>
              </ul><!-- .listing__stats -->
              <div  class="page-link" v-bind:data-page="'property'">
              <a href="#" class="listing__btn">Details <span class="listing__btn-icon"><i class="fa fa-angle-right" aria-hidden="true"></i></span></a>
              </div>
            </div><!-- .listing__details -->
          </div><!-- .listing-content -->
        </div><!-- .col -->
      </div><!-- .listing -->
    </div><!-- .item-grid__container -->
    </section>
    `
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
    template : 
    `
    <div class="listing-sort listing-sort--main-listing">
    <div class="listing-sort__inner">
        <ul class="listing-sort__list">
        <li class="listing-sort__item"><a href="#" class="listing-sort__link listing-sort__link--active"><i class="fa fa-th-list listing-sort__icon" aria-hidden="true"></i></a></li>
        <li class="listing-sort__item"><a href="#" class="listing-sort__link"><i class="fa fa-th-large listing-sort__icon" aria-hidden="true"></i></a></li>
        </ul>

        <span class="listing-sort__result">{{properties.length}} results</span>

        <p class="listing-sort__sort">
        <label for="sort-type" class="listing-sort__label"><i class="fa fa-sort-amount-asc" aria-hidden="true"></i> {{sort.title}} </label>
        <select name="sort-type" id="sort-type" class="ht-field listing-sort__field">
            <option v-for="item in sort.types" v-bind:value="item.value">{{item.label}}</option>
        </select>
        </p><!-- .listing-sort__sort -->
    </div><!-- .listing-sort__inner -->
    </div><!-- .listing-sort -->
    `
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
        test(){
            eventbus.$emit('customevent','event message is right here');
        }
    },
    template : `
    <section class="widget main-listing__widget">
    <form class="main-listing__form">
        <div class="main-listing__wrapper">
        <label class="main-listing__form-title">{{filter.propertyType.title}}</label>
        <div v-for="item in filter.propertyType.list" class="main-listing__form-select">
        <input type="radio" name="property-type" v-bind:id="item.value" class="main-listing__form-radio" v-bind:value="item.value">
        <label v-bind:for="item.value" class="main-listing__form-label">{{item.label}}</label>
        <span class="main-listing__form-desc">({{houses.length}})</span>
        </div><!-- main-listing__form-select -->
        </div><!-- .main-listing__wrapper -->
    <button class="main-listing__form-reset" v-on:click="test" type="reset">Clear Filter</button>
    </form><!-- .main-listing__form -->
    </section><!-- .widget -->
    `
})

Vue.component('realand-list-root',{
    data : function(){
       return { properties : 
            [
                {
                    thumbnail : "images/test5.jpg",
                    alt : "Real House Luxury Villa",
                    link : "single_property_1.html",
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
                        price : "$2,500,000"
                    }
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "Real House Luxury Villa",
                    link : "single_property_2.html",
                    label : "Real House Luxury Villa",
                    favorate : "false",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "false",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : 
                        [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "false",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "true",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "false",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "true",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "true",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "true",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "true",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "true",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "true",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "true",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },

                {
                    thumbnail : "images/test5.jpg",
                    alt : "BiGUi Garden 77",
                    link : "single_property_1.html",
                    label : "BiGUi Garden 77",
                    favorate : "true",
                    house : {
                        address : "111 South 88th St, 88 - Toronto, ON",
                        internal : [ 
                            {
                                quantity : "8",
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
                },
            ]
        }
    },

    template : `
    <div class="main-listing__main">
    <div class="container">
      <div class="row">
        <h1 class="section__title section__title--centered section__title--b-margin-40">Property For Sale</h1>
        <aside class="col-md-3">
        <realand-list-filter v-bind:properties="properties"></realand-list-filter>
        </aside>
        <main class="col-md-9">
        <realand-list-sort v-bind:properties="properties"></realand-list-sort>
        <realand-list-list v-bind:properties="properties"></realand-list-list>
        </main>
    </div><!-- row -->
    </div><!-- .container -->
    </div><!-- .main-listing__main -->
    `

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
    alert("home page function called!");
    $('.page').hide();
    $('.home-page').show();
}

function propertyList(){
    alert("propertyList page function called!");
}

function property(){
    alert("property page function called!");
}

registerPage("home", home);
registerPage("propertyList", propertyList);
registerPage("property", property);

home();

