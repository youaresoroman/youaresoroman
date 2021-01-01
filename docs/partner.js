// items = [
//   [57538, 45082],
//   [106049, 17187],
//   [40087, 25803],
//   [91852, 59396],
//   [54985, 97801],
//   [67071, 78094]
// ]
var items = ['<a href="https://yrsrmn.ebrokerpartner.pl/bc_click?i=319&p=257447&bag_id=41" target="_blank"><img src="https://kreacje.ebroker.pl/kreacje/cbb78196a6225a8d884a6f2681f76378.jpg" border="0" width="750" height="100" /></a><img src="https://yrsrmn.ebrokerpartner.pl/bc_view?i=319&p=257447" width="1" height="1" border="0" />',
'<a href="https://yrsrmn.ebrokerpartner.pl/bc_click?i=289&p=257447&bag_id=37" target="_blank"><img src="https://kreacje.ebroker.pl/kreacje/9430906dbbe687654b79ee02f99c31fa.jpg" border="0" width="750" height="100" /></a><img src="https://yrsrmn.ebrokerpartner.pl/bc_view?i=289&p=257447" width="1" height="1" border="0" />',
'<a href="https://yrsrmn.ebrokerpartner.pl/bc_click?i=141&p=257447&bag_id=21" target="_blank"><img src="https://kreacje.ebroker.pl/kreacje/fc6ef2e9a877bb135f5a24dd936d9d39.jpg" border="0" width="750" height="100" /></a><img src="https://yrsrmn.ebrokerpartner.pl/bc_view?i=141&p=257447" width="1" height="1" border="0" />',
'<a href="https://yrsrmn.ebrokerpartner.pl/bc_click?i=230&p=257447&bag_id=26" target="_blank"><img src="https://kreacje.ebroker.pl/kreacje/c72c4decbda72310b80100e9e864aebc.jpg" border="0" width="750" height="100" /></a><img src="https://yrsrmn.ebrokerpartner.pl/bc_view?i=230&p=257447" width="1" height="1" border="0" />',
'<a href="https://yrsrmn.ebrokerpartner.pl/bc_click?i=157&p=257447&bag_id=23" target="_blank"><img src="https://kreacje.ebroker.pl/kreacje/79e34aa1ced0705c3018d16dddfef6ed.jpg" border="0" width="750" height="100" /></a><img src="https://yrsrmn.ebrokerpartner.pl/bc_view?i=157&p=257447" width="1" height="1" border="0" />',
'<a href="https://yrsrmn.ebrokerpartner.pl/bc_click?i=210&p=257447&bag_id=32" target="_blank"><img src="https://kreacje.ebroker.pl/kreacje/518c2568706a7592d1c5ea0b164f5966.jpg" border="0" width="750" height="100" /></a><img src="https://yrsrmn.ebrokerpartner.pl/bc_view?i=210&p=257447" width="1" height="1" border="0" />',
'<a href="https://yrsrmn.ebrokerpartner.pl/bc_click?i=303&p=257447&bag_id=39" target="_blank"><img src="https://kreacje.ebroker.pl/kreacje/24d28a470cce104cbf08386407d517c5.jpg" border="0" width="750" height="100" /></a><img src="https://yrsrmn.ebrokerpartner.pl/bc_view?i=303&p=257447" width="1" height="1" border="0" />']
var item = items[Math.floor(Math.random() * items.length)]
$("#partner").html(item);
  // '<div id="content_' +
  //     item[0] +
  //     '"></div><script type="text/javascript" id="script_' +
  //     item[1] +
  //     '">var tabw = new Array();' +
  //     "tabw['content_id'] = 'content_" +
  //     item[0] +
  //     "';tabw['vcpt'] = 1;tabw['vcpst'] = '0';tabw['domain'] = 'yrsrmn.ebrokerpartner.pl';(function() {var ebw = document.createElement('script');ebw.type = 'text/javascript';ebw.async = true;ebw.src = '//yrsrmn.ebrokerpartner.pl/js/arcade/widget.js',elemw = document.getElementById('script_" +
  //     item[1] +
  //     "');parentDiv = elemw.parentNode;parentDiv.insertBefore(ebw, elemw);ebw.onload = function(){eWidget.init(tabw);};})();</script>");

      