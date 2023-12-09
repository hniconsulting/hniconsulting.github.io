function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HjHuUjDxxA":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
  var Score = player.GetVar("Score");

  // Alert the value of name variable
  alert("The value of Score variable is: " + Score);
  window.channelName.postMessage(Score);
  // Set the value of the second variable
  player.SetVar("Name", "Osama");
}

