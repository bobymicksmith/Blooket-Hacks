javascript://%20Blooket-Hacks%20%20-%20%20@%202022%20CrazyH%20%26%20cph101%0A%0Aif%20(console_msg(%22Spam%20Open%20Boxes%22))%20%7B%0Alet%20i%20%3D%20document.createElement('iframe');%0Adocument.body.append(i);%0Awindow.alert%20%3D%20i.contentWindow.alert.bind(window);%0Awindow.prompt%20%3D%20i.contentWindow.prompt.bind(window);%0Awindow.confirm%20%3D%20i.contentWindow.confirm.bind(window);%0Ai.remove();%0Avar%20axios%20%3D%20Object.values(webpackJsonp.push(%5B%5B%5D,%20%7B%20%5B''%5D:%20(_,%20a,%20b)%20%3D%3E%20%7B%20a.cache%20%3D%20b.c%20%7D,%20%7D,%20%5B%5B''%5D%5D,%5D).cache).find((x)%20%3D%3E%20x.exports%3F.a%3F.get).exports.a;%0A%0Aaxios.get(%22https://dashboard.blooket.com/api/users%22).then(async%20(%7B%20data:%20%7B%20name,%20tokens%20%7D%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20let%20prices%20%3D%20Object.values(webpackJsonp.push(%5B%5B%5D,%20%7B%20%5B''%5D:%20(_,%20a,%20b)%20%3D%3E%20%7B%20a.cache%20%3D%20b.c%20%7D,%20%7D,%20%5B%5B''%5D%5D,%5D).cache).find(x%20%3D%3E%20x%3F.exports%3F.a%3F.Safari).exports.a%20%7C%7C%20%7B%0A%20%20%20%20%20%20%20%20Medieval:%2015,%0A%20%20%20%20%20%20%20%20Breakfast:%2015,%0A%20%20%20%20%20%20%20%20Wonderland:%2015,%0A%20%20%20%20%20%20%20%20Space:%2020,%0A%20%20%20%20%20%20%20%20Bot:%2020,%0A%20%20%20%20%20%20%20%20Aquatic:%2020,%0A%20%20%20%20%20%20%20%20Safari:%2020,%0A%20%20%20%20%20%20%20%20Dino:%2025,%0A%20%20%20%20%20%20%20%20%22Ice%20Monster%22:%2025%0A%20%20%20%20%7D;;%0A%20%20%20%20let%20box%20%3D%20prompt(%22Which%20box%20do%20you%20want%20to%20open%3F%20(ex:%20%5C%22Ice%20Monster%5C%22)%22).split('%20').map(str%20%3D%3E%20str.charAt(0).toUpperCase()%20+%20str.slice(1).toLowerCase()).join('%20');%0A%20%20%20%20if%20(!Object.keys(prices).map(x%20%3D%3E%20x.toLowerCase()).includes(box.toLowerCase()))%20return%20alert(%22I%20couldn't%20find%20that%20box!%22);%0A%0A%20%20%20%20let%20amount%20%3D%20Math.min(Math.floor(tokens%20/%20Object.entries(prices).find(x%20%3D%3E%20x%5B0%5D.toLowerCase()%20%3D%3D%20box.toLowerCase())%5B1%5D),%20parseInt(%600$%7Bprompt(%22How%20many%20boxes%20do%20you%20want%20to%20open%3F%22)%7D%60));%0A%20%20%20%20if%20(amount%20%3D%3D%200)%20return%20alert(%22You%20do%20not%20have%20enough%20tokens!%22);%0A%0A%20%20%20%20let%20alertBlooks%20%3D%20confirm(%22Would%20you%20like%20to%20alert%20blooks%20upon%20unlocking%3F%22);%0A%20%20%20%20let%20blooks%20%3D%20%7B%7D;%0A%20%20%20%20let%20now%20%3D%20Date.now();%0A%20%20%20%20let%20error%20%3D%20false;%0A%0A%20%20%20%20for%20(let%20i%20%3D%200;%20i%20%3C%20amount;%20i++)%20%7B%0A%20%20%20%20%20%20%20%20await%20axios.put(%22https://dashboard.blooket.com/api/users/unlockblook%22,%20%7B%20name,%20box%20%7D).then((%7B%20data:%20%7B%20unlockedBlook,%20tokens,%20isNewBlook%20%7D%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20blooks%5BunlockedBlook%5D%20%7C%7C%3D%200;%0A%20%20%20%20%20%20%20%20%20%20%20%20blooks%5BunlockedBlook%5D++;%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20before%20%3D%20Date.now();%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(alertBlooks)%20alert(%60$%7BunlockedBlook%7D%20($%7Bi%20+%201%7D/$%7Bamount%7D)%20$%7BisNewBlook%20%3F%20%22NEW!%20%22%20:%20''%7D$%7Btokens%7D%20tokens%20left%60);%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20now%20+%3D%20Date.now()%20-%20before;%0A%20%20%20%20%20%20%20%20%7D).catch(e%20%3D%3E%20error%20%3D%20true);%0A%20%20%20%20%20%20%20%20if%20(error)%20break;%0A%20%20%20%20%7D%0A%20%20%20%20alert(%60($%7BDate.now()%20-%20now%7Dms)%20Results:%5Cn$%7BObject.entries(blooks).map((%5Bblook,%20amount%5D)%20%3D%3E%20%60%20%20%20%20$%7Bblook%7D%20$%7Bamount%7D%60).join(%60%5Cn%60)%7D%60);%0A%7D).catch(()%20%3D%3E%20alert('There%20was%20an%20error%20user%20data!'));%0Aconst%20original_open%20%3D%20XMLHttpRequest.prototype.open;%0AXMLHttpRequest.prototype.open%20%3D%20function%20()%20%7B%0A%20%20%20%20if%20(!arguments%5B1%5D.includes(%22suspend%22))%20original_open.apply(this,%20arguments)%0A%7D;%0A%7D%0A%0A//%20Console%20Message%20Code%0Afunction%20console_msg(file,%20state)%20%7B%0A%20%20%20if%20(!state)%20%7B%0A%20%20%20%20%20%20%20if%20(window.location.href.indexOf(%22blooket.com%22)%20%3E%20-1%20%26%26%20window.location.host%20!%3D%3D%20%22www.blooket.com%22%20%26%26%20window.location.host%20!%3D%3D%20%22id.blooket.com%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20console_msg(file,%20true);%0A%20%20%20%20%20%20%20%20%20%20%20return%20true;%0A%20%20%20%20%20%20%20%7D%20else%20if%20(window.location.host%20%3D%3D%3D%20%22www.blooket.com%22%20%7C%7C%20window.location.host%20%3D%3D%3D%20%22id.blooket.com%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20console_msg(file,%20%22Please%20run%20this%20hack%20on%20the%20dashboard%20or%20in%20a%20game%22);%0A%20%20%20%20%20%20%20%20%20%20%20return;%0A%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20console_msg(file,%20%22Please%20run%20this%20hack%20on%20blooket%22);%0A%20%20%20%20%20%20%20%20%20%20%20return;%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20console.log(%22%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%22);%20//%20Spacing:%2060%0A%20%20%20%20%20%20%20var%20style%20%3D%20'color:%20yellow;%20-webkit-text-stroke:%201px%20black;%20font-size:30px;';%0A%20%20%20%20%20%20%20console.info('%25c%F0%9F%93%81%20Loaded:%20'+file+'.js%5Cn',%20style%20);%0A%20%20%20%20%20%20%20console.group(%22%F0%9F%93%A3%20Blooket%20Hacks%20By%20cph101%20%26%20CrazyH%20-%20Announcement%20%F0%9F%93%A3%22);%20//%20Open%20Console%20Group%0A%20%20%20%20%20%20%20var%20style%20%3D%20'color:%20tomato;%20-webkit-text-stroke:%201px%20black;%20font-size:30px;';%0A%20%20%20%20%20%20%20console.info('%25c%F0%9F%91%8B%F0%9F%8F%BB%20Hi,%20We%20are%20Happy%20to%20have%20you%20as%20one%20of%20our%20users',%20style%20);%0A%20%20%20%20%20%20%20var%20style%20%3D%20'color:%20blue;%20-webkit-text-stroke:%201px%20black;%20font-size:30px;';%0A%20%20%20%20%20%20%20console.info('%25c%E2%AD%90%EF%B8%8F%20Please%20star%20our%20Github%20repo',%20style%20);%0A%20%20%20%20%20%20%20if%20(state%20%3D%3D%3D%20true)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20var%20style%20%3D%20'color:%20green;%20-webkit-text-stroke:%201px%20black;%20font-size:30px;';%0A%20%20%20%20%20%20%20%20%20%20%20console.info('%25c%E2%9C%85%20Hack%20Successfully%20Enabled',%20style%20);%0A%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20var%20style%20%3D%20'color:%20red;%20-webkit-text-stroke:%201px%20black;%20font-size:30px;';%0A%20%20%20%20%20%20%20%20%20%20%20console.info('%25c%E2%9D%8C%20Failed%20To%20Enable%20Hack',%20style%20);%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20console.groupEnd();%20//%20Close%20Console%20Group%0A%20%20%20%20%20%20%20if%20(state%20!%3D%20true)%20alert(state);%0A%7D%7D;%0A