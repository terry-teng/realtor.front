//var contextUrl = "http://ec2-35-183-15-243.ca-central-1.compute.amazonaws.com:8080";
var contextUrl = "http://localhost:8080";
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
    mounted : function(){
        window.loadListener();
    },
    updated : function(){
        window.hideAllContent(null, true, true);
        window.xxxx()
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
    data : function(){
        return {
            url:contextUrl+"/api/property",
        }
    },
    template : "#admin-realtor-property-detail-template"
})

var admin = new Vue({el:"#app"})


//$(document).ready(loadListener());



function loadListener(){
    
    $(".list-group-flush").on("click", function(e){
        
        if($(e.target).attr("class")!=null){ // if statement to filter out the from tag
            var className = $(e.target).attr("class").split(' ').find(function(name){
                return (name.includes("list-item-"))
            });
        }

        if($(e.target).hasClass("edit")){
            removeClickedPrimary(null);
            hideAllContent(null,true,true);
            $(e.target.parentElement.parentElement.parentElement).addClass("list-group-item-primary");
            $(".form-"+className).removeClass("hide");
        }else if($(e.target).hasClass("delete")){


        }else if($(e.target).hasClass("detail")){
            /*
            $(e.target.parentElement.parentElement).toggleClass("list-group-item-primary");
            $(".detail-"+className).toggleClass("hide");
            */
            if( $(e.target.parentElement.parentElement).hasClass("list-group-item-primary")){
                removeClickedPrimary(null);
                hideAllContent(null,true,true);
            }else{
                removeClickedPrimary(null);
                hideAllContent(null,true,true);
                $(e.target.parentElement.parentElement).addClass("list-group-item-primary");
                $(".detail-"+className).removeClass("hide");
            }
        }    
        
    })
    
   

    
}

function removeClickedPrimary(parent){
    $(".list-group-item").removeClass("list-group-item-primary");
}

function hideAllContent(parent,detail,form){
    if(detail){
        $("div[class^='detail-list-item-']").addClass("hide");
    }
    if(form){
        $("div[class^='form-list-item-']").addClass("hide");
    }    
}


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

function xxxx(){

$("#test").submit(function(){
    var tata = "lala";
    var formObj = $(this);
    var formURL = formObj.attr("action");
    if(window.formData !== undefined){   // for HTML5 browers
        var formData = new FormData(this);
        $.ajax({
            url: 'http://localhost:8080/api/storage/file/abcd',
            type : 'POST',
            data: formData,
            mimeType : "multipart/form-data",
            cache:false,
            contentType:false,
            processData:false,

            success: function(data, textStatus, jqXHR)
            {
                    console.log(data);
            },
            error: function(jqXHR, textStatus, errorThrown) 
            {
                    console.log(errorThrown);
            }     

            /*
            xhr:function(){
                var myXhr = $.ajaxSettings.xhr();
                if(myXhr.upload) {
                    myXhr.upload.addEventListener('progress',function(e){
                        if(e.lengthComputable){
                            $('progress').attr({
                                value: e.loaded,
                                max: e.total,
                            });
                        }
                    },false);
                }
                return myXhr;
            }*/
        });
        e.preventDefault() //??--- why?
    }else{  // for old browsers
        var old = "i am old browsers";
    }    
    
});
}