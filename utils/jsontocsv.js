exports = module.exports = exports = module.exports = exports = module.exports = function() {
  var mod = {
    clean: function(value) {
      if (app.has(value) !== true) value = "";
      if (typeof value === "object") value = value.join(", ");
      if (typeof value === "number") value = String(value);
      return "\"" + value.split("\"").join("").trim() + "\"";
    },
    convert: function(list) {
      var contents = "";
      if (list.length > 0) {
        var row = list[0];
        for (var key in row) {
          if (contents !== "") contents += ",";
          contents += mod.clean(app.properCase(key));
        }
        contents += "\n";
      }
      for (var i=0; i<=list.length-1; i++) {
        var row = list[i];
        var count = 0;
        for (var key in row) {
          if (count !== 0) contents += ",";
          contents += mod.clean(row[key]);
          count += 1;
        }
        contents += "\n";
      }
      return contents;
    }
  };
  return mod;
};