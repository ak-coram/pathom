goog.provide("goog.fs.url");
/**
 @param {!Blob} blob
 @return {string}
 */
goog.fs.url.createObjectUrl = function(blob) {
  return goog.fs.url.getUrlObject_().createObjectURL(blob);
};
/**
 @param {string} url
 */
goog.fs.url.revokeObjectUrl = function(url) {
  goog.fs.url.getUrlObject_().revokeObjectURL(url);
};
/** @typedef {{createObjectURL:function(!Blob):string,revokeObjectURL:function(string):void}} */ goog.fs.url.UrlObject_;
/**
 @private
 @return {goog.fs.url.UrlObject_}
 */
goog.fs.url.getUrlObject_ = function() {
  var urlObject = goog.fs.url.findUrlObject_();
  if (urlObject != null) {
    return urlObject;
  } else {
    throw new Error("This browser doesn't seem to support blob URLs");
  }
};
/**
 @private
 @return {?goog.fs.url.UrlObject_}
 */
goog.fs.url.findUrlObject_ = function() {
  if (goog.isDef(goog.global.URL) && goog.isDef(goog.global.URL.createObjectURL)) {
    return (/** @type {goog.fs.url.UrlObject_} */ (goog.global.URL));
  } else {
    if (goog.isDef(goog.global.webkitURL) && goog.isDef(goog.global.webkitURL.createObjectURL)) {
      return (/** @type {goog.fs.url.UrlObject_} */ (goog.global.webkitURL));
    } else {
      if (goog.isDef(goog.global.createObjectURL)) {
        return (/** @type {goog.fs.url.UrlObject_} */ (goog.global));
      } else {
        return null;
      }
    }
  }
};
/**
 @return {boolean}
 */
goog.fs.url.browserSupportsObjectUrls = function() {
  return goog.fs.url.findUrlObject_() != null;
};

//# sourceMappingURL=goog.fs.url.js.map
