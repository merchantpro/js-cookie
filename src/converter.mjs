export default {
  read: function (value, type) {
    if (type === 'value') {
      if (value[0] === '"') {
        value = value.slice(1, -1)
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    }
    else {
      return value;
    }
  },
  write: function (value, type) {
    if (type === 'value') {
      return encodeURIComponent(value).replace(
          /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
          decodeURIComponent
      )
    }
    else {
      return encodeURIComponent(value).replace(
          /%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape)
    }
  }
}
