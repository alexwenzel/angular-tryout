function TextboxItem( options ) {

  this.data = {

    text: options.text || "default",

    style: {
      top: options.top || "0",
      left: options.left || "0",
      color: options.color || "black"
    }
  };

  this.text = function() {
    return this.data.text;
  };

  this.style = function() {

    var style = "";

    for (var index in this.data.style) {

      if (index === 'top' || index === 'left') {
        style += index + ":" + this.data.style[index] + "px;";
      } else {
        style += index + ":" + this.data.style[index] + ";";
      }
    }

    return style;
  };
}
