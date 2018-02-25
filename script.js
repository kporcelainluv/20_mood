function getButtonHandler() {
  var quotes = [{
      "phrase": "Кукурузные хлопья - теперь без асбеста!",
      "signature": "©Неизвестный маркетолог"
    },
    {
      "phrase": "Собираюсь жить вечно, пока всё идёт нормально"
    },
    {
      "phrase": "Вывеска над кафе — '\u003cМы открылись\u003e'. Что-то не так. Где же '\u003c/Мы открылись\u003e'?"
    },
    {
      "phrase": "Если ты будешь усердно работать по 8 часов в день, то обязательно станешь боссом и начнешь работать по 12"
    }
  ]

  function get_text(index) {
    const quote = quotes[index];
    if (quote.signature) {
      return `${quote.phrase} ${quote.signature}`;
    }
    return quote.phrase
  }

  const quote_node = document.getElementById('quote');
  quote_node.innerHTML = get_text(0)

  var num_of_quote = 1;

  return function button_click() {
    quote_node.innerHTML = get_text(num_of_quote)
    num_of_quote += 1
    num_of_quote = num_of_quote % quotes.length

  }
}

document.querySelector(".button").addEventListener("click", getButtonHandler())