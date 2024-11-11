var P = {}, w = {};
(function(e) {
  const t = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", n = t + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", s = "[" + t + "][" + n + "]*", i = new RegExp("^" + s + "$"), r = function(a, o) {
    const f = [];
    let l = o.exec(a);
    for (; l; ) {
      const c = [];
      c.startIndex = o.lastIndex - l[0].length;
      const d = l.length;
      for (let g = 0; g < d; g++)
        c.push(l[g]);
      f.push(c), l = o.exec(a);
    }
    return f;
  }, u = function(a) {
    const o = i.exec(a);
    return !(o === null || typeof o > "u");
  };
  e.isExist = function(a) {
    return typeof a < "u";
  }, e.isEmptyObject = function(a) {
    return Object.keys(a).length === 0;
  }, e.merge = function(a, o, f) {
    if (o) {
      const l = Object.keys(o), c = l.length;
      for (let d = 0; d < c; d++)
        f === "strict" ? a[l[d]] = [o[l[d]]] : a[l[d]] = o[l[d]];
    }
  }, e.getValue = function(a) {
    return e.isExist(a) ? a : "";
  }, e.isName = u, e.getAllMatches = r, e.nameRegexp = s;
})(w);
const O = w, G = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
P.validate = function(e, t) {
  t = Object.assign({}, G, t);
  const n = [];
  let s = !1, i = !1;
  e[0] === "\uFEFF" && (e = e.substr(1));
  for (let r = 0; r < e.length; r++)
    if (e[r] === "<" && e[r + 1] === "?") {
      if (r += 2, r = k(e, r), r.err) return r;
    } else if (e[r] === "<") {
      let u = r;
      if (r++, e[r] === "!") {
        r = V(e, r);
        continue;
      } else {
        let a = !1;
        e[r] === "/" && (a = !0, r++);
        let o = "";
        for (; r < e.length && e[r] !== ">" && e[r] !== " " && e[r] !== "	" && e[r] !== `
` && e[r] !== "\r"; r++)
          o += e[r];
        if (o = o.trim(), o[o.length - 1] === "/" && (o = o.substring(0, o.length - 1), r--), !z(o)) {
          let c;
          return o.trim().length === 0 ? c = "Invalid space after '<'." : c = "Tag '" + o + "' is an invalid name.", p("InvalidTag", c, N(e, r));
        }
        const f = q(e, r);
        if (f === !1)
          return p("InvalidAttr", "Attributes for '" + o + "' have open quote.", N(e, r));
        let l = f.value;
        if (r = f.index, l[l.length - 1] === "/") {
          const c = r - l.length;
          l = l.substring(0, l.length - 1);
          const d = S(l, t);
          if (d === !0)
            s = !0;
          else
            return p(d.err.code, d.err.msg, N(e, c + d.err.line));
        } else if (a)
          if (f.tagClosed) {
            if (l.trim().length > 0)
              return p("InvalidTag", "Closing tag '" + o + "' can't have attributes or invalid starting.", N(e, u));
            if (n.length === 0)
              return p("InvalidTag", "Closing tag '" + o + "' has not been opened.", N(e, u));
            {
              const c = n.pop();
              if (o !== c.tagName) {
                let d = N(e, c.tagStartPos);
                return p(
                  "InvalidTag",
                  "Expected closing tag '" + c.tagName + "' (opened in line " + d.line + ", col " + d.col + ") instead of closing tag '" + o + "'.",
                  N(e, u)
                );
              }
              n.length == 0 && (i = !0);
            }
          } else return p("InvalidTag", "Closing tag '" + o + "' doesn't have proper closing.", N(e, r));
        else {
          const c = S(l, t);
          if (c !== !0)
            return p(c.err.code, c.err.msg, N(e, r - l.length + c.err.line));
          if (i === !0)
            return p("InvalidXml", "Multiple possible root nodes found.", N(e, r));
          t.unpairedTags.indexOf(o) !== -1 || n.push({ tagName: o, tagStartPos: u }), s = !0;
        }
        for (r++; r < e.length; r++)
          if (e[r] === "<")
            if (e[r + 1] === "!") {
              r++, r = V(e, r);
              continue;
            } else if (e[r + 1] === "?") {
              if (r = k(e, ++r), r.err) return r;
            } else
              break;
          else if (e[r] === "&") {
            const c = W(e, r);
            if (c == -1)
              return p("InvalidChar", "char '&' is not expected.", N(e, r));
            r = c;
          } else if (i === !0 && !$(e[r]))
            return p("InvalidXml", "Extra text at the end", N(e, r));
        e[r] === "<" && r--;
      }
    } else {
      if ($(e[r]))
        continue;
      return p("InvalidChar", "char '" + e[r] + "' is not expected.", N(e, r));
    }
  if (s) {
    if (n.length == 1)
      return p("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", N(e, n[0].tagStartPos));
    if (n.length > 0)
      return p("InvalidXml", "Invalid '" + JSON.stringify(n.map((r) => r.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return p("InvalidXml", "Start tag expected.", 1);
  return !0;
};
function $(e) {
  return e === " " || e === "	" || e === `
` || e === "\r";
}
function k(e, t) {
  const n = t;
  for (; t < e.length; t++)
    if (e[t] == "?" || e[t] == " ") {
      const s = e.substr(n, t - n);
      if (t > 5 && s === "xml")
        return p("InvalidXml", "XML declaration allowed only at the start of the document.", N(e, t));
      if (e[t] == "?" && e[t + 1] == ">") {
        t++;
        break;
      } else
        continue;
    }
  return t;
}
function V(e, t) {
  if (e.length > t + 5 && e[t + 1] === "-" && e[t + 2] === "-") {
    for (t += 3; t < e.length; t++)
      if (e[t] === "-" && e[t + 1] === "-" && e[t + 2] === ">") {
        t += 2;
        break;
      }
  } else if (e.length > t + 8 && e[t + 1] === "D" && e[t + 2] === "O" && e[t + 3] === "C" && e[t + 4] === "T" && e[t + 5] === "Y" && e[t + 6] === "P" && e[t + 7] === "E") {
    let n = 1;
    for (t += 8; t < e.length; t++)
      if (e[t] === "<")
        n++;
      else if (e[t] === ">" && (n--, n === 0))
        break;
  } else if (e.length > t + 9 && e[t + 1] === "[" && e[t + 2] === "C" && e[t + 3] === "D" && e[t + 4] === "A" && e[t + 5] === "T" && e[t + 6] === "A" && e[t + 7] === "[") {
    for (t += 8; t < e.length; t++)
      if (e[t] === "]" && e[t + 1] === "]" && e[t + 2] === ">") {
        t += 2;
        break;
      }
  }
  return t;
}
const Q = '"', Z = "'";
function q(e, t) {
  let n = "", s = "", i = !1;
  for (; t < e.length; t++) {
    if (e[t] === Q || e[t] === Z)
      s === "" ? s = e[t] : s !== e[t] || (s = "");
    else if (e[t] === ">" && s === "") {
      i = !0;
      break;
    }
    n += e[t];
  }
  return s !== "" ? !1 : {
    value: n,
    index: t,
    tagClosed: i
  };
}
const Y = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function S(e, t) {
  const n = O.getAllMatches(e, Y), s = {};
  for (let i = 0; i < n.length; i++) {
    if (n[i][1].length === 0)
      return p("InvalidAttr", "Attribute '" + n[i][2] + "' has no space in starting.", y(n[i]));
    if (n[i][3] !== void 0 && n[i][4] === void 0)
      return p("InvalidAttr", "Attribute '" + n[i][2] + "' is without value.", y(n[i]));
    if (n[i][3] === void 0 && !t.allowBooleanAttributes)
      return p("InvalidAttr", "boolean attribute '" + n[i][2] + "' is not allowed.", y(n[i]));
    const r = n[i][2];
    if (!K(r))
      return p("InvalidAttr", "Attribute '" + r + "' is an invalid name.", y(n[i]));
    if (!s.hasOwnProperty(r))
      s[r] = 1;
    else
      return p("InvalidAttr", "Attribute '" + r + "' is repeated.", y(n[i]));
  }
  return !0;
}
function J(e, t) {
  let n = /\d/;
  for (e[t] === "x" && (t++, n = /[\da-fA-F]/); t < e.length; t++) {
    if (e[t] === ";")
      return t;
    if (!e[t].match(n))
      break;
  }
  return -1;
}
function W(e, t) {
  if (t++, e[t] === ";")
    return -1;
  if (e[t] === "#")
    return t++, J(e, t);
  let n = 0;
  for (; t < e.length; t++, n++)
    if (!(e[t].match(/\w/) && n < 20)) {
      if (e[t] === ";")
        break;
      return -1;
    }
  return t;
}
function p(e, t, n) {
  return {
    err: {
      code: e,
      msg: t,
      line: n.line || n,
      col: n.col
    }
  };
}
function K(e) {
  return O.isName(e);
}
function z(e) {
  return O.isName(e);
}
function N(e, t) {
  const n = e.substring(0, t).split(/\r?\n/);
  return {
    line: n.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: n[n.length - 1].length + 1
  };
}
function y(e) {
  return e.startIndex + e[1].length;
}
var x = {};
const F = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(e, t) {
    return t;
  },
  attributeValueProcessor: function(e, t) {
    return t;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(e, t, n) {
    return e;
  }
  // skipEmptyListItem: false
}, H = function(e) {
  return Object.assign({}, F, e);
};
x.buildOptions = H;
x.defaultOptions = F;
class j {
  constructor(t) {
    this.tagname = t, this.child = [], this[":@"] = {};
  }
  add(t, n) {
    t === "__proto__" && (t = "#__proto__"), this.child.push({ [t]: n });
  }
  addChild(t) {
    t.tagname === "__proto__" && (t.tagname = "#__proto__"), t[":@"] && Object.keys(t[":@"]).length > 0 ? this.child.push({ [t.tagname]: t.child, ":@": t[":@"] }) : this.child.push({ [t.tagname]: t.child });
  }
}
var D = j;
const ee = w;
function te(e, t) {
  const n = {};
  if (e[t + 3] === "O" && e[t + 4] === "C" && e[t + 5] === "T" && e[t + 6] === "Y" && e[t + 7] === "P" && e[t + 8] === "E") {
    t = t + 9;
    let s = 1, i = !1, r = !1, u = "";
    for (; t < e.length; t++)
      if (e[t] === "<" && !r) {
        if (i && se(e, t))
          t += 7, [entityName, val, t] = ne(e, t + 1), val.indexOf("&") === -1 && (n[ue(entityName)] = {
            regx: RegExp(`&${entityName};`, "g"),
            val
          });
        else if (i && ie(e, t)) t += 8;
        else if (i && oe(e, t)) t += 8;
        else if (i && ae(e, t)) t += 9;
        else if (re) r = !0;
        else throw new Error("Invalid DOCTYPE");
        s++, u = "";
      } else if (e[t] === ">") {
        if (r ? e[t - 1] === "-" && e[t - 2] === "-" && (r = !1, s--) : s--, s === 0)
          break;
      } else e[t] === "[" ? i = !0 : u += e[t];
    if (s !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: n, i: t };
}
function ne(e, t) {
  let n = "";
  for (; t < e.length && e[t] !== "'" && e[t] !== '"'; t++)
    n += e[t];
  if (n = n.trim(), n.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const s = e[t++];
  let i = "";
  for (; t < e.length && e[t] !== s; t++)
    i += e[t];
  return [n, i, t];
}
function re(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "-" && e[t + 3] === "-";
}
function se(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "E" && e[t + 3] === "N" && e[t + 4] === "T" && e[t + 5] === "I" && e[t + 6] === "T" && e[t + 7] === "Y";
}
function ie(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "E" && e[t + 3] === "L" && e[t + 4] === "E" && e[t + 5] === "M" && e[t + 6] === "E" && e[t + 7] === "N" && e[t + 8] === "T";
}
function oe(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "A" && e[t + 3] === "T" && e[t + 4] === "T" && e[t + 5] === "L" && e[t + 6] === "I" && e[t + 7] === "S" && e[t + 8] === "T";
}
function ae(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "N" && e[t + 3] === "O" && e[t + 4] === "T" && e[t + 5] === "A" && e[t + 6] === "T" && e[t + 7] === "I" && e[t + 8] === "O" && e[t + 9] === "N";
}
function ue(e) {
  if (ee.isName(e))
    return e;
  throw new Error(`Invalid entity name ${e}`);
}
var fe = te;
const le = /^[-+]?0x[a-fA-F0-9]+$/, ce = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
!Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
const de = {
  hex: !0,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function he(e, t = {}) {
  if (t = Object.assign({}, de, t), !e || typeof e != "string") return e;
  let n = e.trim();
  if (t.skipLike !== void 0 && t.skipLike.test(n)) return e;
  if (t.hex && le.test(n))
    return Number.parseInt(n, 16);
  {
    const s = ce.exec(n);
    if (s) {
      const i = s[1], r = s[2];
      let u = pe(s[3]);
      const a = s[4] || s[6];
      if (!t.leadingZeros && r.length > 0 && i && n[2] !== ".") return e;
      if (!t.leadingZeros && r.length > 0 && !i && n[1] !== ".") return e;
      {
        const o = Number(n), f = "" + o;
        return f.search(/[eE]/) !== -1 || a ? t.eNotation ? o : e : n.indexOf(".") !== -1 ? f === "0" && u === "" || f === u || i && f === "-" + u ? o : e : r ? u === f || i + u === f ? o : e : n === f || n === i + f ? o : e;
      }
    } else
      return e;
  }
}
function pe(e) {
  return e && e.indexOf(".") !== -1 && (e = e.replace(/0+$/, ""), e === "." ? e = "0" : e[0] === "." ? e = "0" + e : e[e.length - 1] === "." && (e = e.substr(0, e.length - 1))), e;
}
var ge = he;
function Ne(e) {
  return typeof e == "function" ? e : Array.isArray(e) ? (t) => {
    for (const n of e)
      if (typeof n == "string" && t === n || n instanceof RegExp && n.test(t))
        return !0;
  } : () => !1;
}
var L = Ne;
const X = w, A = D, me = fe, be = ge, Ee = L;
let Te = class {
  constructor(t) {
    this.options = t, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
      apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
      gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
      lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
      quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
    }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
      space: { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      cent: { regex: /&(cent|#162);/g, val: "¢" },
      pound: { regex: /&(pound|#163);/g, val: "£" },
      yen: { regex: /&(yen|#165);/g, val: "¥" },
      euro: { regex: /&(euro|#8364);/g, val: "€" },
      copyright: { regex: /&(copy|#169);/g, val: "©" },
      reg: { regex: /&(reg|#174);/g, val: "®" },
      inr: { regex: /&(inr|#8377);/g, val: "₹" },
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (n, s) => String.fromCharCode(Number.parseInt(s, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (n, s) => String.fromCharCode(Number.parseInt(s, 16)) }
    }, this.addExternalEntities = ye, this.parseXml = Ie, this.parseTextData = Ae, this.resolveNameSpace = we, this.buildAttributesMap = ve, this.isItStopNode = $e, this.replaceEntitiesValue = Oe, this.readStopNodeData = Ve, this.saveTextToParentTag = xe, this.addChild = Pe, this.ignoreAttributesFn = Ee(this.options.ignoreAttributes);
  }
};
function ye(e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: e[s]
    };
  }
}
function Ae(e, t, n, s, i, r, u) {
  if (e !== void 0 && (this.options.trimValues && !s && (e = e.trim()), e.length > 0)) {
    u || (e = this.replaceEntitiesValue(e));
    const a = this.options.tagValueProcessor(t, e, n, i, r);
    return a == null ? e : typeof a != typeof e || a !== e ? a : this.options.trimValues ? I(e, this.options.parseTagValue, this.options.numberParseOptions) : e.trim() === e ? I(e, this.options.parseTagValue, this.options.numberParseOptions) : e;
  }
}
function we(e) {
  if (this.options.removeNSPrefix) {
    const t = e.split(":"), n = e.charAt(0) === "/" ? "/" : "";
    if (t[0] === "xmlns")
      return "";
    t.length === 2 && (e = n + t[1]);
  }
  return e;
}
const Ce = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function ve(e, t, n) {
  if (this.options.ignoreAttributes !== !0 && typeof e == "string") {
    const s = X.getAllMatches(e, Ce), i = s.length, r = {};
    for (let u = 0; u < i; u++) {
      const a = this.resolveNameSpace(s[u][1]);
      if (this.ignoreAttributesFn(a, t))
        continue;
      let o = s[u][4], f = this.options.attributeNamePrefix + a;
      if (a.length)
        if (this.options.transformAttributeName && (f = this.options.transformAttributeName(f)), f === "__proto__" && (f = "#__proto__"), o !== void 0) {
          this.options.trimValues && (o = o.trim()), o = this.replaceEntitiesValue(o);
          const l = this.options.attributeValueProcessor(a, o, t);
          l == null ? r[f] = o : typeof l != typeof o || l !== o ? r[f] = l : r[f] = I(
            o,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (r[f] = !0);
    }
    if (!Object.keys(r).length)
      return;
    if (this.options.attributesGroupName) {
      const u = {};
      return u[this.options.attributesGroupName] = r, u;
    }
    return r;
  }
}
const Ie = function(e) {
  e = e.replace(/\r\n?/g, `
`);
  const t = new A("!xml");
  let n = t, s = "", i = "";
  for (let r = 0; r < e.length; r++)
    if (e[r] === "<")
      if (e[r + 1] === "/") {
        const a = E(e, ">", r, "Closing Tag is not closed.");
        let o = e.substring(r + 2, a).trim();
        if (this.options.removeNSPrefix) {
          const c = o.indexOf(":");
          c !== -1 && (o = o.substr(c + 1));
        }
        this.options.transformTagName && (o = this.options.transformTagName(o)), n && (s = this.saveTextToParentTag(s, n, i));
        const f = i.substring(i.lastIndexOf(".") + 1);
        if (o && this.options.unpairedTags.indexOf(o) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${o}>`);
        let l = 0;
        f && this.options.unpairedTags.indexOf(f) !== -1 ? (l = i.lastIndexOf(".", i.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : l = i.lastIndexOf("."), i = i.substring(0, l), n = this.tagsNodeStack.pop(), s = "", r = a;
      } else if (e[r + 1] === "?") {
        let a = v(e, r, !1, "?>");
        if (!a) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, n, i), !(this.options.ignoreDeclaration && a.tagName === "?xml" || this.options.ignorePiTags)) {
          const o = new A(a.tagName);
          o.add(this.options.textNodeName, ""), a.tagName !== a.tagExp && a.attrExpPresent && (o[":@"] = this.buildAttributesMap(a.tagExp, i, a.tagName)), this.addChild(n, o, i);
        }
        r = a.closeIndex + 1;
      } else if (e.substr(r + 1, 3) === "!--") {
        const a = E(e, "-->", r + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const o = e.substring(r + 4, a - 2);
          s = this.saveTextToParentTag(s, n, i), n.add(this.options.commentPropName, [{ [this.options.textNodeName]: o }]);
        }
        r = a;
      } else if (e.substr(r + 1, 2) === "!D") {
        const a = me(e, r);
        this.docTypeEntities = a.entities, r = a.i;
      } else if (e.substr(r + 1, 2) === "![") {
        const a = E(e, "]]>", r, "CDATA is not closed.") - 2, o = e.substring(r + 9, a);
        s = this.saveTextToParentTag(s, n, i);
        let f = this.parseTextData(o, n.tagname, i, !0, !1, !0, !0);
        f == null && (f = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [{ [this.options.textNodeName]: o }]) : n.add(this.options.textNodeName, f), r = a + 2;
      } else {
        let a = v(e, r, this.options.removeNSPrefix), o = a.tagName;
        const f = a.rawTagName;
        let l = a.tagExp, c = a.attrExpPresent, d = a.closeIndex;
        this.options.transformTagName && (o = this.options.transformTagName(o)), n && s && n.tagname !== "!xml" && (s = this.saveTextToParentTag(s, n, i, !1));
        const g = n;
        if (g && this.options.unpairedTags.indexOf(g.tagname) !== -1 && (n = this.tagsNodeStack.pop(), i = i.substring(0, i.lastIndexOf("."))), o !== t.tagname && (i += i ? "." + o : o), this.isItStopNode(this.options.stopNodes, i, o)) {
          let h = "";
          if (l.length > 0 && l.lastIndexOf("/") === l.length - 1)
            o[o.length - 1] === "/" ? (o = o.substr(0, o.length - 1), i = i.substr(0, i.length - 1), l = o) : l = l.substr(0, l.length - 1), r = a.closeIndex;
          else if (this.options.unpairedTags.indexOf(o) !== -1)
            r = a.closeIndex;
          else {
            const m = this.readStopNodeData(e, f, d + 1);
            if (!m) throw new Error(`Unexpected end of ${f}`);
            r = m.i, h = m.tagContent;
          }
          const T = new A(o);
          o !== l && c && (T[":@"] = this.buildAttributesMap(l, i, o)), h && (h = this.parseTextData(h, o, i, !0, c, !0, !0)), i = i.substr(0, i.lastIndexOf(".")), T.add(this.options.textNodeName, h), this.addChild(n, T, i);
        } else {
          if (l.length > 0 && l.lastIndexOf("/") === l.length - 1) {
            o[o.length - 1] === "/" ? (o = o.substr(0, o.length - 1), i = i.substr(0, i.length - 1), l = o) : l = l.substr(0, l.length - 1), this.options.transformTagName && (o = this.options.transformTagName(o));
            const h = new A(o);
            o !== l && c && (h[":@"] = this.buildAttributesMap(l, i, o)), this.addChild(n, h, i), i = i.substr(0, i.lastIndexOf("."));
          } else {
            const h = new A(o);
            this.tagsNodeStack.push(n), o !== l && c && (h[":@"] = this.buildAttributesMap(l, i, o)), this.addChild(n, h, i), n = h;
          }
          s = "", r = d;
        }
      }
    else
      s += e[r];
  return t.child;
};
function Pe(e, t, n) {
  const s = this.options.updateTag(t.tagname, n, t[":@"]);
  s === !1 || (typeof s == "string" && (t.tagname = s), e.addChild(t));
}
const Oe = function(e) {
  if (this.options.processEntities) {
    for (let t in this.docTypeEntities) {
      const n = this.docTypeEntities[t];
      e = e.replace(n.regx, n.val);
    }
    for (let t in this.lastEntities) {
      const n = this.lastEntities[t];
      e = e.replace(n.regex, n.val);
    }
    if (this.options.htmlEntities)
      for (let t in this.htmlEntities) {
        const n = this.htmlEntities[t];
        e = e.replace(n.regex, n.val);
      }
    e = e.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return e;
};
function xe(e, t, n, s) {
  return e && (s === void 0 && (s = Object.keys(t.child).length === 0), e = this.parseTextData(
    e,
    t.tagname,
    n,
    !1,
    t[":@"] ? Object.keys(t[":@"]).length !== 0 : !1,
    s
  ), e !== void 0 && e !== "" && t.add(this.options.textNodeName, e), e = ""), e;
}
function $e(e, t, n) {
  const s = "*." + n;
  for (const i in e) {
    const r = e[i];
    if (s === r || t === r) return !0;
  }
  return !1;
}
function ke(e, t, n = ">") {
  let s, i = "";
  for (let r = t; r < e.length; r++) {
    let u = e[r];
    if (s)
      u === s && (s = "");
    else if (u === '"' || u === "'")
      s = u;
    else if (u === n[0])
      if (n[1]) {
        if (e[r + 1] === n[1])
          return {
            data: i,
            index: r
          };
      } else
        return {
          data: i,
          index: r
        };
    else u === "	" && (u = " ");
    i += u;
  }
}
function E(e, t, n, s) {
  const i = e.indexOf(t, n);
  if (i === -1)
    throw new Error(s);
  return i + t.length - 1;
}
function v(e, t, n, s = ">") {
  const i = ke(e, t + 1, s);
  if (!i) return;
  let r = i.data;
  const u = i.index, a = r.search(/\s/);
  let o = r, f = !0;
  a !== -1 && (o = r.substring(0, a), r = r.substring(a + 1).trimStart());
  const l = o;
  if (n) {
    const c = o.indexOf(":");
    c !== -1 && (o = o.substr(c + 1), f = o !== i.data.substr(c + 1));
  }
  return {
    tagName: o,
    tagExp: r,
    closeIndex: u,
    attrExpPresent: f,
    rawTagName: l
  };
}
function Ve(e, t, n) {
  const s = n;
  let i = 1;
  for (; n < e.length; n++)
    if (e[n] === "<")
      if (e[n + 1] === "/") {
        const r = E(e, ">", n, `${t} is not closed`);
        if (e.substring(n + 2, r).trim() === t && (i--, i === 0))
          return {
            tagContent: e.substring(s, n),
            i: r
          };
        n = r;
      } else if (e[n + 1] === "?")
        n = E(e, "?>", n + 1, "StopNode is not closed.");
      else if (e.substr(n + 1, 3) === "!--")
        n = E(e, "-->", n + 3, "StopNode is not closed.");
      else if (e.substr(n + 1, 2) === "![")
        n = E(e, "]]>", n, "StopNode is not closed.") - 2;
      else {
        const r = v(e, n, ">");
        r && ((r && r.tagName) === t && r.tagExp[r.tagExp.length - 1] !== "/" && i++, n = r.closeIndex);
      }
}
function I(e, t, n) {
  if (t && typeof e == "string") {
    const s = e.trim();
    return s === "true" ? !0 : s === "false" ? !1 : be(e, n);
  } else
    return X.isExist(e) ? e : "";
}
var Se = Te, M = {};
function _e(e, t) {
  return B(e, t);
}
function B(e, t, n) {
  let s;
  const i = {};
  for (let r = 0; r < e.length; r++) {
    const u = e[r], a = Fe(u);
    let o = "";
    if (n === void 0 ? o = a : o = n + "." + a, a === t.textNodeName)
      s === void 0 ? s = u[a] : s += "" + u[a];
    else {
      if (a === void 0)
        continue;
      if (u[a]) {
        let f = B(u[a], t, o);
        const l = Xe(f, t);
        u[":@"] ? Le(f, u[":@"], o, t) : Object.keys(f).length === 1 && f[t.textNodeName] !== void 0 && !t.alwaysCreateTextNode ? f = f[t.textNodeName] : Object.keys(f).length === 0 && (t.alwaysCreateTextNode ? f[t.textNodeName] = "" : f = ""), i[a] !== void 0 && i.hasOwnProperty(a) ? (Array.isArray(i[a]) || (i[a] = [i[a]]), i[a].push(f)) : t.isArray(a, o, l) ? i[a] = [f] : i[a] = f;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (i[t.textNodeName] = s) : s !== void 0 && (i[t.textNodeName] = s), i;
}
function Fe(e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s !== ":@") return s;
  }
}
function Le(e, t, n, s) {
  if (t) {
    const i = Object.keys(t), r = i.length;
    for (let u = 0; u < r; u++) {
      const a = i[u];
      s.isArray(a, n + "." + a, !0, !0) ? e[a] = [t[a]] : e[a] = t[a];
    }
  }
}
function Xe(e, t) {
  const { textNodeName: n } = t, s = Object.keys(e).length;
  return !!(s === 0 || s === 1 && (e[n] || typeof e[n] == "boolean" || e[n] === 0));
}
M.prettify = _e;
const { buildOptions: Me } = x, Be = Se, { prettify: Re } = M, Ue = P;
let Ge = class {
  constructor(t) {
    this.externalEntities = {}, this.options = Me(t);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(t, n) {
    if (typeof t != "string") if (t.toString)
      t = t.toString();
    else
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (n) {
      n === !0 && (n = {});
      const r = Ue.validate(t, n);
      if (r !== !0)
        throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`);
    }
    const s = new Be(this.options);
    s.addExternalEntities(this.externalEntities);
    const i = s.parseXml(t);
    return this.options.preserveOrder || i === void 0 ? i : Re(i, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(t, n) {
    if (n.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (t.indexOf("&") !== -1 || t.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (n === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[t] = n;
  }
};
var Qe = Ge;
const Ze = `
`;
function qe(e, t) {
  let n = "";
  return t.format && t.indentBy.length > 0 && (n = Ze), R(e, t, "", n);
}
function R(e, t, n, s) {
  let i = "", r = !1;
  for (let u = 0; u < e.length; u++) {
    const a = e[u], o = Ye(a);
    if (o === void 0) continue;
    let f = "";
    if (n.length === 0 ? f = o : f = `${n}.${o}`, o === t.textNodeName) {
      let h = a[o];
      Je(f, t) || (h = t.tagValueProcessor(o, h), h = U(h, t)), r && (i += s), i += h, r = !1;
      continue;
    } else if (o === t.cdataPropName) {
      r && (i += s), i += `<![CDATA[${a[o][0][t.textNodeName]}]]>`, r = !1;
      continue;
    } else if (o === t.commentPropName) {
      i += s + `<!--${a[o][0][t.textNodeName]}-->`, r = !0;
      continue;
    } else if (o[0] === "?") {
      const h = _(a[":@"], t), T = o === "?xml" ? "" : s;
      let m = a[o][0][t.textNodeName];
      m = m.length !== 0 ? " " + m : "", i += T + `<${o}${m}${h}?>`, r = !0;
      continue;
    }
    let l = s;
    l !== "" && (l += t.indentBy);
    const c = _(a[":@"], t), d = s + `<${o}${c}`, g = R(a[o], t, f, l);
    t.unpairedTags.indexOf(o) !== -1 ? t.suppressUnpairedNode ? i += d + ">" : i += d + "/>" : (!g || g.length === 0) && t.suppressEmptyNode ? i += d + "/>" : g && g.endsWith(">") ? i += d + `>${g}${s}</${o}>` : (i += d + ">", g && s !== "" && (g.includes("/>") || g.includes("</")) ? i += s + t.indentBy + g + s : i += g, i += `</${o}>`), r = !0;
  }
  return i;
}
function Ye(e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (e.hasOwnProperty(s) && s !== ":@")
      return s;
  }
}
function _(e, t) {
  let n = "";
  if (e && !t.ignoreAttributes)
    for (let s in e) {
      if (!e.hasOwnProperty(s)) continue;
      let i = t.attributeValueProcessor(s, e[s]);
      i = U(i, t), i === !0 && t.suppressBooleanAttributes ? n += ` ${s.substr(t.attributeNamePrefix.length)}` : n += ` ${s.substr(t.attributeNamePrefix.length)}="${i}"`;
    }
  return n;
}
function Je(e, t) {
  e = e.substr(0, e.length - t.textNodeName.length - 1);
  let n = e.substr(e.lastIndexOf(".") + 1);
  for (let s in t.stopNodes)
    if (t.stopNodes[s] === e || t.stopNodes[s] === "*." + n) return !0;
  return !1;
}
function U(e, t) {
  if (e && e.length > 0 && t.processEntities)
    for (let n = 0; n < t.entities.length; n++) {
      const s = t.entities[n];
      e = e.replace(s.regex, s.val);
    }
  return e;
}
var We = qe;
const Ke = We, ze = L, He = {
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  cdataPropName: !1,
  format: !1,
  indentBy: "  ",
  suppressEmptyNode: !1,
  suppressUnpairedNode: !0,
  suppressBooleanAttributes: !0,
  tagValueProcessor: function(e, t) {
    return t;
  },
  attributeValueProcessor: function(e, t) {
    return t;
  },
  preserveOrder: !1,
  commentPropName: !1,
  unpairedTags: [],
  entities: [
    { regex: new RegExp("&", "g"), val: "&amp;" },
    //it must be on top
    { regex: new RegExp(">", "g"), val: "&gt;" },
    { regex: new RegExp("<", "g"), val: "&lt;" },
    { regex: new RegExp("'", "g"), val: "&apos;" },
    { regex: new RegExp('"', "g"), val: "&quot;" }
  ],
  processEntities: !0,
  stopNodes: [],
  // transformTagName: false,
  // transformAttributeName: false,
  oneListGroup: !1
};
function b(e) {
  this.options = Object.assign({}, He, e), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
    return !1;
  } : (this.ignoreAttributesFn = ze(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = et), this.processTextOrObjNode = je, this.options.format ? (this.indentate = De, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
    return "";
  }, this.tagEndChar = ">", this.newLine = "");
}
b.prototype.build = function(e) {
  return this.options.preserveOrder ? Ke(e, this.options) : (Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = {
    [this.options.arrayNodeName]: e
  }), this.j2x(e, 0, []).val);
};
b.prototype.j2x = function(e, t, n) {
  let s = "", i = "";
  const r = n.join(".");
  for (let u in e)
    if (Object.prototype.hasOwnProperty.call(e, u))
      if (typeof e[u] > "u")
        this.isAttribute(u) && (i += "");
      else if (e[u] === null)
        this.isAttribute(u) ? i += "" : u[0] === "?" ? i += this.indentate(t) + "<" + u + "?" + this.tagEndChar : i += this.indentate(t) + "<" + u + "/" + this.tagEndChar;
      else if (e[u] instanceof Date)
        i += this.buildTextValNode(e[u], u, "", t);
      else if (typeof e[u] != "object") {
        const a = this.isAttribute(u);
        if (a && !this.ignoreAttributesFn(a, r))
          s += this.buildAttrPairStr(a, "" + e[u]);
        else if (!a)
          if (u === this.options.textNodeName) {
            let o = this.options.tagValueProcessor(u, "" + e[u]);
            i += this.replaceEntitiesValue(o);
          } else
            i += this.buildTextValNode(e[u], u, "", t);
      } else if (Array.isArray(e[u])) {
        const a = e[u].length;
        let o = "", f = "";
        for (let l = 0; l < a; l++) {
          const c = e[u][l];
          if (!(typeof c > "u")) if (c === null)
            u[0] === "?" ? i += this.indentate(t) + "<" + u + "?" + this.tagEndChar : i += this.indentate(t) + "<" + u + "/" + this.tagEndChar;
          else if (typeof c == "object")
            if (this.options.oneListGroup) {
              const d = this.j2x(c, t + 1, n.concat(u));
              o += d.val, this.options.attributesGroupName && c.hasOwnProperty(this.options.attributesGroupName) && (f += d.attrStr);
            } else
              o += this.processTextOrObjNode(c, u, t, n);
          else if (this.options.oneListGroup) {
            let d = this.options.tagValueProcessor(u, c);
            d = this.replaceEntitiesValue(d), o += d;
          } else
            o += this.buildTextValNode(c, u, "", t);
        }
        this.options.oneListGroup && (o = this.buildObjectNode(o, u, f, t)), i += o;
      } else if (this.options.attributesGroupName && u === this.options.attributesGroupName) {
        const a = Object.keys(e[u]), o = a.length;
        for (let f = 0; f < o; f++)
          s += this.buildAttrPairStr(a[f], "" + e[u][a[f]]);
      } else
        i += this.processTextOrObjNode(e[u], u, t, n);
  return { attrStr: s, val: i };
};
b.prototype.buildAttrPairStr = function(e, t) {
  return t = this.options.attributeValueProcessor(e, "" + t), t = this.replaceEntitiesValue(t), this.options.suppressBooleanAttributes && t === "true" ? " " + e : " " + e + '="' + t + '"';
};
function je(e, t, n, s) {
  const i = this.j2x(e, n + 1, s.concat(t));
  return e[this.options.textNodeName] !== void 0 && Object.keys(e).length === 1 ? this.buildTextValNode(e[this.options.textNodeName], t, i.attrStr, n) : this.buildObjectNode(i.val, t, i.attrStr, n);
}
b.prototype.buildObjectNode = function(e, t, n, s) {
  if (e === "")
    return t[0] === "?" ? this.indentate(s) + "<" + t + n + "?" + this.tagEndChar : this.indentate(s) + "<" + t + n + this.closeTag(t) + this.tagEndChar;
  {
    let i = "</" + t + this.tagEndChar, r = "";
    return t[0] === "?" && (r = "?", i = ""), (n || n === "") && e.indexOf("<") === -1 ? this.indentate(s) + "<" + t + n + r + ">" + e + i : this.options.commentPropName !== !1 && t === this.options.commentPropName && r.length === 0 ? this.indentate(s) + `<!--${e}-->` + this.newLine : this.indentate(s) + "<" + t + n + r + this.tagEndChar + e + this.indentate(s) + i;
  }
};
b.prototype.closeTag = function(e) {
  let t = "";
  return this.options.unpairedTags.indexOf(e) !== -1 ? this.options.suppressUnpairedNode || (t = "/") : this.options.suppressEmptyNode ? t = "/" : t = `></${e}`, t;
};
b.prototype.buildTextValNode = function(e, t, n, s) {
  if (this.options.cdataPropName !== !1 && t === this.options.cdataPropName)
    return this.indentate(s) + `<![CDATA[${e}]]>` + this.newLine;
  if (this.options.commentPropName !== !1 && t === this.options.commentPropName)
    return this.indentate(s) + `<!--${e}-->` + this.newLine;
  if (t[0] === "?")
    return this.indentate(s) + "<" + t + n + "?" + this.tagEndChar;
  {
    let i = this.options.tagValueProcessor(t, e);
    return i = this.replaceEntitiesValue(i), i === "" ? this.indentate(s) + "<" + t + n + this.closeTag(t) + this.tagEndChar : this.indentate(s) + "<" + t + n + ">" + i + "</" + t + this.tagEndChar;
  }
};
b.prototype.replaceEntitiesValue = function(e) {
  if (e && e.length > 0 && this.options.processEntities)
    for (let t = 0; t < this.options.entities.length; t++) {
      const n = this.options.entities[t];
      e = e.replace(n.regex, n.val);
    }
  return e;
};
function De(e) {
  return this.options.indentBy.repeat(e);
}
function et(e) {
  return e.startsWith(this.options.attributeNamePrefix) && e !== this.options.textNodeName ? e.substr(this.attrPrefixLen) : !1;
}
var tt = b;
const nt = P, rt = Qe, st = tt;
var it = {
  XMLParser: rt,
  XMLValidator: nt,
  XMLBuilder: st
};
function ot(e) {
  let t, n;
  if (Array.isArray(e)) {
    for (const s of e)
      if (s.Linear && !t && (t = s.Linear), s.CompanionAds && !n && (n = s.CompanionAds), t && n) break;
  } else
    t = e.Linear, n = e.CompanionAds;
  return { linear: t, companionAds: n };
}
function at(e) {
  if (!e) return "";
  const t = e.MediaFile;
  return Array.isArray(t) ? t[0]["#text"].trim() : t != null && t["#text"] ? t["#text"].trim() : "";
}
function ut(e) {
  if (!e || !e.ClickThrough) return "";
  const t = e.ClickThrough;
  return typeof t == "string" ? t.trim() : t["#text"] ? t["#text"].trim() : (console.warn("VideoClicks has unexpected structure:", e), "");
}
function ft(e, t) {
  const n = {
    impression: [],
    start: [],
    firstQuartile: [],
    midpoint: [],
    thirdQuartile: [],
    complete: []
  };
  if (e && (n.impression = Array.isArray(e) ? e.map((i) => i.trim()) : [e.trim()]), !(t != null && t.Tracking)) return n;
  const s = Array.isArray(t.Tracking) ? t.Tracking : [t.Tracking];
  for (const i of s) {
    const r = i["@_event"].toLowerCase(), u = i["#text"].trim();
    switch (r) {
      case "start":
        n.start.push(u);
        break;
      case "firstquartile":
        n.firstQuartile.push(u);
        break;
      case "midpoint":
        n.midpoint.push(u);
        break;
      case "thirdquartile":
        n.thirdQuartile.push(u);
        break;
      case "complete":
        n.complete.push(u);
        break;
      case "progress":
        lt(i, u, n);
        break;
      default:
        console.warn(`Unhandled tracking event: ${r}`);
        break;
    }
  }
  return n;
}
function lt(e, t, n) {
  const s = e["@_offset"];
  switch (s) {
    case "0%":
      n.start.push(t);
      break;
    case "25%":
      n.firstQuartile.push(t);
      break;
    case "50%":
      n.midpoint.push(t);
      break;
    case "75%":
      n.thirdQuartile.push(t);
      break;
    default:
      console.warn(`Unhandled progress offset: ${s}`);
      break;
  }
}
function ct(e) {
  const t = [];
  if (!(e != null && e.Companion)) return t;
  const n = Array.isArray(e.Companion) ? e.Companion : [e.Companion];
  for (const s of n) {
    const i = Number.parseInt(s["@_width"], 10), r = Number.parseInt(s["@_height"], 10), u = s.StaticResource["#text"].trim(), a = dt(
      s.CompanionClickThrough
    );
    t.push({
      width: i,
      height: r,
      imageUrl: u,
      clickThroughUrl: a
    });
  }
  return t;
}
function dt(e) {
  return e ? typeof e == "string" ? e.trim() : e["#text"] ? e["#text"].trim() : (console.warn("CompanionClickThrough has unexpected structure:", e), "") : "";
}
function ht(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string")
    if (e.includes(":")) {
      const t = e.split(":");
      if (t.length === 3) {
        const [n, s, i] = t;
        return Number.parseInt(n, 10) * 3600 + Number.parseInt(s, 10) * 60 + Number.parseFloat(i);
      }
    } else {
      const t = Number.parseFloat(e);
      if (!Number.isNaN(t))
        return t;
    }
  return console.warn(`Invalid duration format: ${e}. Returning 0.`), 0;
}
function pt(e) {
  var h;
  const s = (h = new it.XMLParser({
    ignoreAttributes: !1,
    attributeNamePrefix: "@_"
  }).parse(e).VAST) == null ? void 0 : h.Ad;
  if (!s)
    throw new Error("No Ad found in VAST XML");
  const i = s["@_adType"] || "unknown", r = s.InLine;
  if (!r)
    throw new Error("No InLine element found in Ad");
  if (r.Creatives === "" || !r.Creatives.Creative)
    throw new Error("No Creative element found in Creatives");
  const u = ot(r.Creatives.Creative), a = u.linear, o = u.companionAds;
  if (!a)
    throw new Error("No Linear element found in Creative");
  const f = at(a.MediaFiles), l = ht(a.Duration), c = ut(a.VideoClicks), d = ft(
    r.Impression,
    a.TrackingEvents
  ), g = ct(o);
  return {
    adType: i,
    mediaUrl: f,
    duration: l,
    clickThroughUrl: c,
    trackingEvents: d,
    companionAds: g.length > 0 ? g : void 0
  };
}
const gt = "";
async function Nt(e) {
  const t = await fetch(
    `${gt}/v1/vast?media_id=${e.mediaId}&ad_slot_id=${e.adSlotId}`
  );
  if (!t.ok)
    throw new Error("Failed to fetch VAST XML");
  const n = await t.text();
  return pt(n);
}
function mt(e) {
  if (!e.vastData || !e.mediaElement) return e;
  const { trackingEvents: t } = e.vastData, n = {
    start: !1,
    firstQuartile: !1,
    midpoint: !1,
    thirdQuartile: !1,
    complete: !1
  };
  C(t.impression);
  const s = [
    { event: "start", threshold: 0 },
    { event: "firstQuartile", threshold: 0.25 },
    { event: "midpoint", threshold: 0.5 },
    { event: "thirdQuartile", threshold: 0.75 }
  ];
  return e.mediaElement.addEventListener("timeupdate", () => {
    if (!e.vastData || !e.mediaElement) return;
    const i = e.mediaElement.currentTime / e.vastData.duration;
    for (const { event: r, threshold: u } of s)
      i >= u && !n[r] && (C(t[r]), n[r] = !0);
  }), e.mediaElement.addEventListener("ended", () => {
    n.complete || (C(t.complete), n.complete = !0);
  }), e;
}
function C(e) {
  for (const t of e)
    fetch(t, { method: "GET", mode: "no-cors" });
}
function bt(e) {
  if (!e.vastData) return e;
  const t = e.vastData.adType === "video" ? document.createElement("video") : document.createElement("audio");
  return t.src = e.vastData.mediaUrl, t.style.width = "100%", t.style.height = "100%", t.setAttribute("playsinline", ""), t.addEventListener("click", () => Et(e)), e.config.containerElement.appendChild(t), { ...e, mediaElement: t };
}
function Et(e) {
  e.vastData && window.open(e.vastData.clickThroughUrl, "_blank");
}
function Tt(e) {
  var s, i;
  if (!((i = (s = e.vastData) == null ? void 0 : s.companionAds) != null && i[0]) || !e.config.companionContainer)
    return e;
  const t = e.vastData.companionAds[0], n = document.createElement("img");
  return n.src = t.imageUrl, n.width = t.width, n.height = t.height, n.style.objectFit = "contain", n.addEventListener("click", () => {
    window.open(t.clickThroughUrl, "_blank");
  }), e.config.companionContainer.appendChild(n), { ...e, companionElement: n };
}
async function wt(e) {
  const t = {
    config: e,
    vastData: null,
    mediaElement: null,
    companionElement: null
  }, n = await Nt(e);
  let s = { ...t, vastData: n };
  return s = bt(s), s = Tt(s), s = mt(s), s;
}
function Ct(e) {
  if (!e.vastData || !e.mediaElement)
    throw new Error("Ad not loaded");
  e.mediaElement.play();
}
function vt(e) {
  e.mediaElement && e.mediaElement.pause();
}
function It(e, t) {
  e.mediaElement && (e.mediaElement.volume = Math.max(0, Math.min(1, t)));
}
export {
  wt as initializeAdSDK,
  vt as pause,
  Ct as play,
  It as setVolume
};
