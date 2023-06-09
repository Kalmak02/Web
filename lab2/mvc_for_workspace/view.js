function View() {}

View.prototype.updateSessionList = function(sessionData)
{
  var sessionList = document.getElementById('sessionList');
  sessionList.innerHTML = '';

  if (sessionData.length === 0) 
  {
    var emptyItem = document.createElement('li');
    emptyItem.classList.add('list-group-item');
    emptyItem.innerText = 'It\'s empty! To add a new session press the button "Save Session"';
    sessionList.appendChild(emptyItem);
  } 
  else 
  {
    for (var i = 0; i < sessionData.length; i++)
    {
      var sessionItem = document.createElement('li');
      sessionItem.classList.add('list-group-item');
      sessionItem.innerText = sessionData[i];
      sessionList.appendChild(sessionItem);
    }
  }
};
