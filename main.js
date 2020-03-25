
// start-window 
window.onload = function() {menu_view(1),sidemenu_view(1)};

//addEventListener
document.getElementById('navbar1').addEventListener('click' ,function(){menu_view(1)});
document.getElementById('navbar1').addEventListener('click' ,function(){sidemenu_view(1)});

document.getElementById('navbar2').addEventListener('click' ,function(){menu_view(2)});
document.getElementById('navbar2').addEventListener('click' ,function(){sidemenu_view(2)});

document.getElementById('navbar3').addEventListener('click' ,function(){menu_view(3)});
document.getElementById('navbar3').addEventListener('click' ,function(){sidemenu_view(3)});

document.getElementById('navbar4').addEventListener('click' ,function(){menu_view(4)});
document.getElementById('navbar4').addEventListener('click' ,function(){sidemenu_view(4)});

document.getElementById('navbar5').addEventListener('click' ,function(){menu_view(5)});
document.getElementById('navbar5').addEventListener('click' ,function(){sidemenu_view(5)});


/*======= function ========= */
var old_viewid = 0;
var old_sviewid = 0;

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

/*   function menu_hide(hideid){
        document.getElementById("submenu"+hideid).style.display="none";
        old_viewid = 0;
    
    }*/

