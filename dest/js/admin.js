var contextUrl = "http://ec2-35-183-15-243.ca-central-1.compute.amazonaws.com:8080";
var eventBus = new Vue();

Vue.component("admin-realtor-root",{
    data : function(){
        return {
            loadCompanyUrl : contextUrl+"/api/company/",
            compID : null,
            company : { 
            }
        }
    },
    created : function(){
        var self  = this;
        //initial load company, realtors, and property list info from backend
        var compId = window.GetQueryStringParams("id");
        $.ajax({
            url : this.loadCompanyUrl+compId,
            dataType:"json",
            success : function(response){
                self.company = response;
                self.loadCompany();
                self.loadPropertyList();
                self.loadProfileList(); 
            }
        }); 
    },
    methods : {
        loadCompany : function(){
            eventBus.$emit("loadCompany", this.company);
        },
        loadProfileList : function(){
            eventBus.$emit("loadProfileList", this.company);
        },
        loadPropertyList : function(){
            eventBus.$emit("loadPropertyList", this.company);
        }
    },
    template : "#admin-realtor-root-template"
})

Vue.component("admin-realtor-property-list",{
    data : function(){
        return {
            properties : []
        }
    },
    created : function(){
        eventBus.$on("loadPropertyList", this.loadPropertyList);
    },
    updated : function(){
        window.loadListener();
    },
    methods : {
        loadPropertyList : function(data){
            this.properties = data.properties;
        }
    },
    template : "#admin-realtor-property-list-template"
})

Vue.component("admin-realtor-profile-list",{
    template : "#admin-realtor-profile-list-template"
})

Vue.component("admin-realtor-company-list",{
    template : "#admin-realtor-company-list-template"
})

Vue.component("admin-realtor-property-detail",{
    props : ["detail"],
    template : "#admin-realtor-property-detail-template"
})

var admin = new Vue({el:"#app"})


$(document).ready(loadListener());



function loadListener(){
    hideAllContent($(".property-list"),true, true);
    $(".list-group").on("click", function(e){
        if($(e.target).hasClass("list-item-link")){
            if($(e.target).hasClass("list-group-item-primary")){
                $(e.target).removeClass("list-group-item-primary");
                hideAllContent($(".property-list"),true, true);
            }else{
                $(e.target).addClass("list-group-item-primary");
                hideAllContent($(".property-list"),true, true);
                $(e.target).closest(".list-item-display").show();
            }
        }else if($(e.target).hasClass("list-item-form-link")){
            hideAllContent($(".property-list"),true, true);
            $(e.target).closest(".list-item-form-display").show();
        }
    })
}

function hideAllContent(el,detail,form){
    //el.find(".")
    if(detail){
        $(".list-item-display").hide();
    }
    if(form){
        $(".list-item-form-display").hide();
    }
    
}

/*
function resetListener(){
    $(".list-item-display").hide();
    $(".list-item-form-display").hide();

    $(".list-item-link").on("click", function(){
        if($(this).hasClass("list-group-item-primary")){
            $(this).removeClass("list-group-item-primary");
            $(this).next().find(".list-item-display").hide();
        }else{
            $(".list-item-link").removeClass("list-group-item-primary");
            $(this).addClass("list-group-item-primary");
            $(".list-item-display").hide();
            $(this).next().find(".list-item-display").show();
        }
    });

    $(".list-item-form-link").on("click", function(){

        $(this).closest(".list-item-link").addClass("list-group-item-secondary");
    });
}
*/

function GetQueryStringParams(sParam){
    var sPageUrl = window.location.search.substring(1);
    var sUrlVariables = sPageUrl.split('&');
    for(var i=0; i<sUrlVariables.length; i++){
        var sParameterName=sUrlVariables[i].split('=');
        if(sParameterName[0]==sParam){
            return sParameterName[1];
        }
    }
}