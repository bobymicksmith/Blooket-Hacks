javascript://%20Blooket-Hacks%20%20-%20%20@%202022%20CrazyH%20%26%20cph101%0A%0Aif%20(console_msg(%22Godmode%22))%20%7B%0Afunction%20reactEventHandler()%20%7B%0A%20%20%20%20let%20react%20%3D%20Object.values(document.querySelector(%22%23body%22))%5B0%5D.stateNode;%0A%20%20%20%20return%20react%5BObject.keys(react).filter(a%20%3D%3E%20a.includes(%22reactInternalInstance%22))%5D.return.stateNode;%0A%7D%0A%0A(()%20%3D%3E%20%7B%0A%20%20%20%20let%20n%20%3D%20document.createElement('iframe');%0A%20%20%20%20document.body.append(n);%0A%20%20%20%20window.prompt%20%3D%20n.contentWindow.prompt.bind(window);%0A%20%20%20%20window.alert%20%3D%20n.contentWindow.alert.bind(window);%0A%20%20%20%20n.remove();%0A%7D)();%0Adamage%20%3D%201000000000000000000e10000000000;%0A%0AdmgSetter%20%3D%20setInterval(()%20%3D%3E%20%7B%0A%20%20%20%20reactEventHandler().state.dmgArray.map(a%20%3D%3E%20a.dmg%20%3D%20damage);%0A%7D,%201);%0A%0A(function()%7B%0Afunction%20getStateNode()%7B%0A%20%20%20%20for(let%20i%20of%20Object.keys(document.querySelector(%22%23app%3Ediv%3Ediv%22)))%7B%0A%20%20%20%20%20%20%20%20if(i.toString().includes(%22__reactEventHandlers%22))%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20for(let%20p%20of%20Object.values(document.querySelector(%22%23app%3Ediv%3Ediv%22)%5Bi%5D.children.filter(n%3D%3En)))%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(p._owner%26%26p._owner.stateNode)return%20p._owner.stateNode%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0Afunction%20bypass()%7B%0A%20%20%20%20let%20_bypass%20%3D%20document.createElement(%22iframe%22);%0A%20%20%20%20_bypass.style.display%20%3D%20'none';%0A%20%20%20%20document.body.appendChild(_bypass);%0A%20%20%20%20return%20%7Bwindow:%20_bypass.contentWindow,%20document:%20_bypass.contentDocument%7D%0A%7D%0Afunction%20findByProp(prop,first%3Dtrue)%7B%0Aconst%20wp%20%3D%20Object.values(webpackJsonp.push(%5B%0A%20%20%20%20%20%20%20%20%5B%5D,%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%5B''%5D:%20(_,%20a,%20b)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a.cache%20%3D%20b.c%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%5B''%5D%0A%20%20%20%20%20%20%20%20%5D,%0A%20%20%20%20%5D).cache);%0Aif(first)%7B%0A%20%20%20%20return%20wp.find((x)%3D%3Ex.exports%26%26x.exports.a%26%26x.exports.a%5Bprop%5D).exports.a;%0A%7Delse%7B%0A%20%20%20%20return%20wp.filter(x%3D%3Ex.exports%3F.a%26%26x.exports%3F.a%5Bprop%5D).map(n%3D%3En.exports.a)%0A%7D%0A%7D%0Awindow.setInterval(()%3D%3EgetStateNode().state.game.scene.children.list.filter(x%3D%3Ex.dmg%26%26x.hp).map(e%3D%3Ee.dmg%3D0));%0A%7D)();%0A%7D%0A%0A//%20Console%20Message%20Code%0Afunction%20console_msg(file,%20state)%20%7B%0A%20%20%20if%20(!state)%20%7B%0A%20%20%20%20%20%20%20if%20(window.location.href.indexOf(%22blooket.com%22)%20%3E%20-1%20%26%26%20window.location.host%20!%3D%3D%20%22www.blooket.com%22%20%26%26%20window.location.host%20!%3D%3D%20%22id.blooket.com%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20console_msg(file,%20true);%0A%20%20%20%20%20%20%20%20%20%20%20return%20true;%0A%20%20%20%20%20%20%20%7D%20else%20if%20(window.location.host%20%3D%3D%3D%20%22www.blooket.com%22%20%7C%7C%20window.location.host%20%3D%3D%3D%20%22id.blooket.com%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20console_msg(file,%20%22Please%20run%20this%20hack%20on%20the%20dashboard%20or%20in%20a%20game%22);%0A%20%20%20%20%20%20%20%20%20%20%20return;%0A%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20console_msg(file,%20%22Please%20run%20this%20hack%20on%20blooket%22);%0A%20%20%20%20%20%20%20%20%20%20%20return;%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20console.log(%22%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%22);%20//%20Spacing:%2060%0A%20%20%20%20%20%20%20var%20style%20%3D%20'color:%20yellow;%20-webkit-text-stroke:%201px%20black;%20font-size:30px;';%0A%20%20%20%20%20%20%20console.info('%25c%F0%9F%93%81%20Loaded:%20'+file+'.js%5Cn',%20style%20);%0A%20%20%20%20%20%20%20console.group(%22%F0%9F%93%A3%20Blooket%20Hacks%20By%20cph101%20%26%20CrazyH%20-%20Announcement%20%F0%9F%93%A3%22);%20//%20Open%20Console%20Group%0A%20%20%20%20%20%20%20var%20style%20%3D%20'color:%20tomato;%20-webkit-text-stroke:%201px%20black;%20font-size:30px;';%0A%20%20%20%20%20%20%20console.info('%25c%F0%9F%91%8B%F0%9F%8F%BB%20Hi,%20We%20are%20Happy%20to%20have%20you%20as%20one%20of%20our%20users',%20style%20);%0A%20%20%20%20%20%20%20var%20style%20%3D%20'color:%20blue;%20-webkit-text-stroke:%201px%20black;%20font-size:30px;';%0A%20%20%20%20%20%20%20console.info('%25c%E2%AD%90%EF%B8%8F%20Please%20star%20our%20Github%20repo',%20style%20);%0A%20%20%20%20%20%20%20if%20(state%20%3D%3D%3D%20true)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20var%20style%20%3D%20'color:%20green;%20-webkit-text-stroke:%201px%20black;%20font-size:30px;';%0A%20%20%20%20%20%20%20%20%20%20%20console.info('%25c%E2%9C%85%20Hack%20Successfully%20Enabled',%20style%20);%0A%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20var%20style%20%3D%20'color:%20red;%20-webkit-text-stroke:%201px%20black;%20font-size:30px;';%0A%20%20%20%20%20%20%20%20%20%20%20console.info('%25c%E2%9D%8C%20Failed%20To%20Enable%20Hack',%20style%20);%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20console.groupEnd();%20//%20Close%20Console%20Group%0A%20%20%20%20%20%20%20if%20(state%20!%3D%20true)%20alert(state);%0A%7D%7D;%0A