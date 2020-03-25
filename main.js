
// start-window 
window.onload = function() {menu_view(1),change_sideTitle(1)};

// navbar 
var navbar1 = document.getElementById('navbar1');
var navbar2 = document.getElementById('navbar2');
var navbar3 = document.getElementById('navbar3');
var navbar4 = document.getElementById('navbar4');
var navbar5 = document.getElementById('navbar5');

//addEventListener
navbar1.addEventListener('click' ,function(){menu_view(1),sidemenu_view(1),change_sideTitle(1)});
navbar2.addEventListener('click' ,function(){menu_view(2),sidemenu_view(2),change_sideTitle(2)});
navbar3.addEventListener('click' ,function(){menu_view(3),sidemenu_view(3),change_sideTitle(3)});
navbar4.addEventListener('click' ,function(){menu_view(4),sidemenu_view(4),change_sideTitle(4)});
navbar5.addEventListener('click' ,function(){menu_view(5),sidemenu_view(5),change_sideTitle(5)});


/*======= function ========= */
var old_viewid = 0;
var old_sviewid = 0;

function change_sideTitle(viewid){
    var title = document.getElementById("navbar"+viewid);
    document.getElementById("sideTitle").textContent = title.textContent;
}

function menu_view(viewid){
    if(viewid!=old_viewid){
    document.getElementById("submenu"+viewid).style.display="block";

    if(old_viewid!="0")document.getElementById("submenu"+old_viewid).style.display="none";
    old_viewid = viewid;
    }
    
}

function sidemenu_view(viewid){
    if(viewid!=old_sviewid){
    document.getElementById("sidemenu"+viewid).style.display="block";

    if(old_sviewid!="0")document.getElementById("sidemenu"+old_sviewid).style.display="none";
    old_sviewid = viewid;
    }
}

// function menu_hide(hideid){
//     document.getElementById("submenu"+hideid).style.display="none";
//     // document.getElementById("sub-bar").style.backgroundColor ="none";
//     old_viewid = 0;

// }

