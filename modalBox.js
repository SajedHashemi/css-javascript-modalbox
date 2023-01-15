const _X_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16" id="IconChangeColor"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" id="mainIconPathAttribute" fill="#ffffff"></path></svg>';
var modalOpened=false;

function modalBox(id, opt=[], timeout=0){
  if(modalOpened) return;
  var elem = document.getElementById(id);
  var contents = elem.innerHTML;
  elem.innerHTML = '<div class="modal-box-body"><span style="float: right; margin: 6px 6px;" onclick="modalBoxHide(\''+id+'\')">'+_X_icon+'</span>'+contents+'</div>';
  opt.forEach((item) => {
    var el = elem.querySelector(item.selector);
    //console.log("selector:"+item.selector+" -> type:"+el.type+" -> value:"+item.value);
    if(el.type=="checkbox"){
      el.checked = ((item.value=="false" || item.value=="0")?false:true);
    }else if(el.type=="radio"){
      el = document.querySelectorAll(item.selector);
      el.forEach((r)=>{
        if(r.value == item.value) {
          r.checked = true;
        }
      });
    }else if(el.type==undefined)
      el.innerHTML = item.value;
    else
      el.value = item.value;
  });
  modalBoxShow(id, timeout);
}

function collectionHas(a, b) {
  for(var i = 0, len = a.length; i < len; i++) if(a[i] == b) return true;
  return false;
}

function findParentBySelector(elm, selector) {
  var all = document.querySelectorAll(selector);
  var cur = elm.parentNode;
  while(cur && !collectionHas(all, cur)) cur = cur.parentNode;
  return cur;
}

function modalBoxShow(id, tm){
  var elem = document.getElementById(id);
  elem.querySelector('.modal-box-body').classList.remove('close');
  elem.style.display = 'block';
  if(tm>0) setTimeout(()=>modalBoxHide(id),tm);
  modalOpened=true;
}

function modalBoxHide(id, lockClicked=false, reload=false){
  if(!lockClicked){
    var elem = document.getElementById(id);
    elem.querySelector('.modal-box-body').classList.add('close');
    setTimeout(()=>{
      var contents = '<div class="modal-box-header">'+elem.querySelector('.modal-box-header').innerHTML+'</div>';
      contents += '<div class="modal-box-content">'+elem.querySelector('.modal-box-content').innerHTML+'</div>';
      contents += '<div class="modal-box-footer">'+elem.querySelector('.modal-box-footer').innerHTML+'</div>';
      elem.innerHTML=contents;
      modalOpened=false;
      elem.style.display = 'none';
      if(reload) location.reload();
    },400);
  }
}

function modalBoxHideByElement(elem){
  modalBoxHide(findParentBySelector(elem, '.modal-box').id);
}

function modalBoxTitle(id, title){
  var elem = document.getElementById(id).querySelector('.modal-box-header');
  if(title==null || title==undefined || title=='')
    elem.style.display='none';
  else
    elem.innerHTML = title;
}

function modalBoxContent(id, content){
  var elem = document.getElementById(id).querySelector('.modal-box-content');
  if(content==null || content==undefined || content=='')
    elem.innerHTML = '';
  else
    elem.innerHTML = content;
}

function modalBoxFooter(id, footer){
  var elem = document.getElementById(id).querySelector('.modal-box-footer');
  if(footer==null || footer==undefined || footer=='')
    elem.style.display='none';
  else
    elem.innerHTML = footer;
}

function modalBoxTimeout(id, timeout){
  if(timeout>0) setTimeout(()=>modalBoxHide(id),timeout);
}

