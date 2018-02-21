var quotes = JSON.parse(document.getElementById('quotes_json').innerHTML);

function get_text(i) {
    if (quotes[i]["signature"] === undefined) {
        text = quotes[i]["phrase"];
  } else {
        text = quotes[i]["phrase"] + " " + quotes[i]["signature"];
  }
  return text
}

var new_li_element = document.createElement('li');
new_li_element.innerHTML = get_text(0)
quote_block.appendChild(new_li_element);

var num_of_quote = 1;

function button_click() {
    new_li_element.innerHTML = get_text(num_of_quote)
    num_of_quote += 1
    num_of_quote = num_of_quote % quotes.length
}