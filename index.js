function scuberGreetingForFeet(feet) {

  if (feet <= 400) {
    return 'This one is on me!'
  }
  else if (feet >=2001 && feet <2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (feet >= 2500) {
    return 'No can do.'
  }
};

function ternaryCheckCity(city){
  return ternaryCheckCity = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
};

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return ('Thank you so much.');
    break;
    case 'not as generous':
      return ('Thank you.');
    break;
    case 'thanks for everything':
      return ('Bye.');
    break;
  }
};