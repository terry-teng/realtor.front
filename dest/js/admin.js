Vue.component("admin-realtor-root",{
    template : "#admin-realtor-root-template"
})

Vue.component("admin-realtor-property-list",{
    template : "#admin-realtor-property-list-template"
})

Vue.component("admin-realtor-property-detail",{
    template : "#admin-realtor-property-detail-template"
})

var admin = new Vue({el:"#app"})


$(".item-detail").css("display","none");

$(".list-link").on("click", function(){
    $(".list-link").removeClass("list-group-item-primary");
    $(this).addClass("list-group-item-primary");
    $(".item-detail").css("display","none");
    $(this).next().css("display","block");
})