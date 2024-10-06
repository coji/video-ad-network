var $ = {}, O = {};
(function(e) {
  const t = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", n = t + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", i = "[" + t + "][" + n + "]*", s = new RegExp("^" + i + "$"), r = function(u, o) {
    const f = [];
    let l = o.exec(u);
    for (; l; ) {
      const c = [];
      c.startIndex = o.lastIndex - l[0].length;
      const d = l.length;
      for (let p = 0; p < d; p++)
        c.push(l[p]);
      f.push(c), l = o.exec(u);
    }
    return f;
  }, a = function(u) {
    const o = s.exec(u);
    return !(o === null || typeof o > "u");
  };
  e.isExist = function(u) {
    return typeof u < "u";
  }, e.isEmptyObject = function(u) {
    return Object.keys(u).length === 0;
  }, e.merge = function(u, o, f) {
    if (o) {
      const l = Object.keys(o), c = l.length;
      for (let d = 0; d < c; d++)
        f === "strict" ? u[l[d]] = [o[l[d]]] : u[l[d]] = o[l[d]];
    }
  }, e.getValue = function(u) {
    return e.isExist(u) ? u : "";
  }, e.isName = a, e.getAllMatches = r, e.nameRegexp = i;
})(O);
const L = O, z = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
$.validate = function(e, t) {
  t = Object.assign({}, z, t);
  const n = [];
  let i = !1, s = !1;
  e[0] === "\uFEFF" && (e = e.substr(1));
  for (let r = 0; r < e.length; r++)
    if (e[r] === "<" && e[r + 1] === "?") {
      if (r += 2, r = S(e, r), r.err) return r;
    } else if (e[r] === "<") {
      let a = r;
      if (r++, e[r] === "!") {
        r = _(e, r);
        continue;
      } else {
        let u = !1;
        e[r] === "/" && (u = !0, r++);
        let o = "";
        for (; r < e.length && e[r] !== ">" && e[r] !== " " && e[r] !== "	" && e[r] !== `
` && e[r] !== "\r"; r++)
          o += e[r];
        if (o = o.trim(), o[o.length - 1] === "/" && (o = o.substring(0, o.length - 1), r--), !se(o)) {
          let c;
          return o.trim().length === 0 ? c = "Invalid space after '<'." : c = "Tag '" + o + "' is an invalid name.", g("InvalidTag", c, N(e, r));
        }
        const f = D(e, r);
        if (f === !1)
          return g("InvalidAttr", "Attributes for '" + o + "' have open quote.", N(e, r));
        let l = f.value;
        if (r = f.index, l[l.length - 1] === "/") {
          const c = r - l.length;
          l = l.substring(0, l.length - 1);
          const d = M(l, t);
          if (d === !0)
            i = !0;
          else
            return g(d.err.code, d.err.msg, N(e, c + d.err.line));
        } else if (u)
          if (f.tagClosed) {
            if (l.trim().length > 0)
              return g("InvalidTag", "Closing tag '" + o + "' can't have attributes or invalid starting.", N(e, a));
            if (n.length === 0)
              return g("InvalidTag", "Closing tag '" + o + "' has not been opened.", N(e, a));
            {
              const c = n.pop();
              if (o !== c.tagName) {
                let d = N(e, c.tagStartPos);
                return g(
                  "InvalidTag",
                  "Expected closing tag '" + c.tagName + "' (opened in line " + d.line + ", col " + d.col + ") instead of closing tag '" + o + "'.",
                  N(e, a)
                );
              }
              n.length == 0 && (s = !0);
            }
          } else return g("InvalidTag", "Closing tag '" + o + "' doesn't have proper closing.", N(e, r));
        else {
          const c = M(l, t);
          if (c !== !0)
            return g(c.err.code, c.err.msg, N(e, r - l.length + c.err.line));
          if (s === !0)
            return g("InvalidXml", "Multiple possible root nodes found.", N(e, r));
          t.unpairedTags.indexOf(o) !== -1 || n.push({ tagName: o, tagStartPos: a }), i = !0;
        }
        for (r++; r < e.length; r++)
          if (e[r] === "<")
            if (e[r + 1] === "!") {
              r++, r = _(e, r);
              continue;
            } else if (e[r + 1] === "?") {
              if (r = S(e, ++r), r.err) return r;
            } else
              break;
          else if (e[r] === "&") {
            const c = ne(e, r);
            if (c == -1)
              return g("InvalidChar", "char '&' is not expected.", N(e, r));
            r = c;
          } else if (s === !0 && !F(e[r]))
            return g("InvalidXml", "Extra text at the end", N(e, r));
        e[r] === "<" && r--;
      }
    } else {
      if (F(e[r]))
        continue;
      return g("InvalidChar", "char '" + e[r] + "' is not expected.", N(e, r));
    }
  if (i) {
    if (n.length == 1)
      return g("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", N(e, n[0].tagStartPos));
    if (n.length > 0)
      return g("InvalidXml", "Invalid '" + JSON.stringify(n.map((r) => r.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return g("InvalidXml", "Start tag expected.", 1);
  return !0;
};
function F(e) {
  return e === " " || e === "	" || e === `
` || e === "\r";
}
function S(e, t) {
  const n = t;
  for (; t < e.length; t++)
    if (e[t] == "?" || e[t] == " ") {
      const i = e.substr(n, t - n);
      if (t > 5 && i === "xml")
        return g("InvalidXml", "XML declaration allowed only at the start of the document.", N(e, t));
      if (e[t] == "?" && e[t + 1] == ">") {
        t++;
        break;
      } else
        continue;
    }
  return t;
}
function _(e, t) {
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
const H = '"', j = "'";
function D(e, t) {
  let n = "", i = "", s = !1;
  for (; t < e.length; t++) {
    if (e[t] === H || e[t] === j)
      i === "" ? i = e[t] : i !== e[t] || (i = "");
    else if (e[t] === ">" && i === "") {
      s = !0;
      break;
    }
    n += e[t];
  }
  return i !== "" ? !1 : {
    value: n,
    index: t,
    tagClosed: s
  };
}
const ee = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function M(e, t) {
  const n = L.getAllMatches(e, ee), i = {};
  for (let s = 0; s < n.length; s++) {
    if (n[s][1].length === 0)
      return g("InvalidAttr", "Attribute '" + n[s][2] + "' has no space in starting.", I(n[s]));
    if (n[s][3] !== void 0 && n[s][4] === void 0)
      return g("InvalidAttr", "Attribute '" + n[s][2] + "' is without value.", I(n[s]));
    if (n[s][3] === void 0 && !t.allowBooleanAttributes)
      return g("InvalidAttr", "boolean attribute '" + n[s][2] + "' is not allowed.", I(n[s]));
    const r = n[s][2];
    if (!re(r))
      return g("InvalidAttr", "Attribute '" + r + "' is an invalid name.", I(n[s]));
    if (!i.hasOwnProperty(r))
      i[r] = 1;
    else
      return g("InvalidAttr", "Attribute '" + r + "' is repeated.", I(n[s]));
  }
  return !0;
}
function te(e, t) {
  let n = /\d/;
  for (e[t] === "x" && (t++, n = /[\da-fA-F]/); t < e.length; t++) {
    if (e[t] === ";")
      return t;
    if (!e[t].match(n))
      break;
  }
  return -1;
}
function ne(e, t) {
  if (t++, e[t] === ";")
    return -1;
  if (e[t] === "#")
    return t++, te(e, t);
  let n = 0;
  for (; t < e.length; t++, n++)
    if (!(e[t].match(/\w/) && n < 20)) {
      if (e[t] === ";")
        break;
      return -1;
    }
  return t;
}
function g(e, t, n) {
  return {
    err: {
      code: e,
      msg: t,
      line: n.line || n,
      col: n.col
    }
  };
}
function re(e) {
  return L.isName(e);
}
function se(e) {
  return L.isName(e);
}
function N(e, t) {
  const n = e.substring(0, t).split(/\r?\n/);
  return {
    line: n.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: n[n.length - 1].length + 1
  };
}
function I(e) {
  return e.startIndex + e[1].length;
}
var V = {};
const Q = {
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
}, ie = function(e) {
  return Object.assign({}, Q, e);
};
V.buildOptions = ie;
V.defaultOptions = Q;
class oe {
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
var ue = oe;
const ae = O;
function fe(e, t) {
  const n = {};
  if (e[t + 3] === "O" && e[t + 4] === "C" && e[t + 5] === "T" && e[t + 6] === "Y" && e[t + 7] === "P" && e[t + 8] === "E") {
    t = t + 9;
    let i = 1, s = !1, r = !1, a = "";
    for (; t < e.length; t++)
      if (e[t] === "<" && !r) {
        if (s && de(e, t))
          t += 7, [entityName, val, t] = le(e, t + 1), val.indexOf("&") === -1 && (n[Ne(entityName)] = {
            regx: RegExp(`&${entityName};`, "g"),
            val
          });
        else if (s && he(e, t)) t += 8;
        else if (s && pe(e, t)) t += 8;
        else if (s && ge(e, t)) t += 9;
        else if (ce) r = !0;
        else throw new Error("Invalid DOCTYPE");
        i++, a = "";
      } else if (e[t] === ">") {
        if (r ? e[t - 1] === "-" && e[t - 2] === "-" && (r = !1, i--) : i--, i === 0)
          break;
      } else e[t] === "[" ? s = !0 : a += e[t];
    if (i !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: n, i: t };
}
function le(e, t) {
  let n = "";
  for (; t < e.length && e[t] !== "'" && e[t] !== '"'; t++)
    n += e[t];
  if (n = n.trim(), n.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const i = e[t++];
  let s = "";
  for (; t < e.length && e[t] !== i; t++)
    s += e[t];
  return [n, s, t];
}
function ce(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "-" && e[t + 3] === "-";
}
function de(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "E" && e[t + 3] === "N" && e[t + 4] === "T" && e[t + 5] === "I" && e[t + 6] === "T" && e[t + 7] === "Y";
}
function he(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "E" && e[t + 3] === "L" && e[t + 4] === "E" && e[t + 5] === "M" && e[t + 6] === "E" && e[t + 7] === "N" && e[t + 8] === "T";
}
function pe(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "A" && e[t + 3] === "T" && e[t + 4] === "T" && e[t + 5] === "L" && e[t + 6] === "I" && e[t + 7] === "S" && e[t + 8] === "T";
}
function ge(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "N" && e[t + 3] === "O" && e[t + 4] === "T" && e[t + 5] === "A" && e[t + 6] === "T" && e[t + 7] === "I" && e[t + 8] === "O" && e[t + 9] === "N";
}
function Ne(e) {
  if (ae.isName(e))
    return e;
  throw new Error(`Invalid entity name ${e}`);
}
var me = fe;
const be = /^[-+]?0x[a-fA-F0-9]+$/, Te = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
!Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
const Ee = {
  hex: !0,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function ye(e, t = {}) {
  if (t = Object.assign({}, Ee, t), !e || typeof e != "string") return e;
  let n = e.trim();
  if (t.skipLike !== void 0 && t.skipLike.test(n)) return e;
  if (t.hex && be.test(n))
    return Number.parseInt(n, 16);
  {
    const i = Te.exec(n);
    if (i) {
      const s = i[1], r = i[2];
      let a = Ae(i[3]);
      const u = i[4] || i[6];
      if (!t.leadingZeros && r.length > 0 && s && n[2] !== ".") return e;
      if (!t.leadingZeros && r.length > 0 && !s && n[1] !== ".") return e;
      {
        const o = Number(n), f = "" + o;
        return f.search(/[eE]/) !== -1 || u ? t.eNotation ? o : e : n.indexOf(".") !== -1 ? f === "0" && a === "" || f === a || s && f === "-" + a ? o : e : r ? a === f || s + a === f ? o : e : n === f || n === s + f ? o : e;
      }
    } else
      return e;
  }
}
function Ae(e) {
  return e && e.indexOf(".") !== -1 && (e = e.replace(/0+$/, ""), e === "." ? e = "0" : e[0] === "." ? e = "0" + e : e[e.length - 1] === "." && (e = e.substr(0, e.length - 1))), e;
}
var we = ye;
function Ce(e) {
  return typeof e == "function" ? e : Array.isArray(e) ? (t) => {
    for (const n of e)
      if (typeof n == "string" && t === n || n instanceof RegExp && n.test(t))
        return !0;
  } : () => !1;
}
var Z = Ce;
const q = O, P = ue, Ie = me, Pe = we, Oe = Z;
let ve = class {
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
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (n, i) => String.fromCharCode(Number.parseInt(i, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (n, i) => String.fromCharCode(Number.parseInt(i, 16)) }
    }, this.addExternalEntities = xe, this.parseXml = Fe, this.parseTextData = $e, this.resolveNameSpace = Le, this.buildAttributesMap = ke, this.isItStopNode = Xe, this.replaceEntitiesValue = _e, this.readStopNodeData = Re, this.saveTextToParentTag = Me, this.addChild = Se, this.ignoreAttributesFn = Oe(this.options.ignoreAttributes);
  }
};
function xe(e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    this.lastEntities[i] = {
      regex: new RegExp("&" + i + ";", "g"),
      val: e[i]
    };
  }
}
function $e(e, t, n, i, s, r, a) {
  if (e !== void 0 && (this.options.trimValues && !i && (e = e.trim()), e.length > 0)) {
    a || (e = this.replaceEntitiesValue(e));
    const u = this.options.tagValueProcessor(t, e, n, s, r);
    return u == null ? e : typeof u != typeof e || u !== e ? u : this.options.trimValues ? x(e, this.options.parseTagValue, this.options.numberParseOptions) : e.trim() === e ? x(e, this.options.parseTagValue, this.options.numberParseOptions) : e;
  }
}
function Le(e) {
  if (this.options.removeNSPrefix) {
    const t = e.split(":"), n = e.charAt(0) === "/" ? "/" : "";
    if (t[0] === "xmlns")
      return "";
    t.length === 2 && (e = n + t[1]);
  }
  return e;
}
const Ve = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function ke(e, t, n) {
  if (this.options.ignoreAttributes !== !0 && typeof e == "string") {
    const i = q.getAllMatches(e, Ve), s = i.length, r = {};
    for (let a = 0; a < s; a++) {
      const u = this.resolveNameSpace(i[a][1]);
      if (this.ignoreAttributesFn(u, t))
        continue;
      let o = i[a][4], f = this.options.attributeNamePrefix + u;
      if (u.length)
        if (this.options.transformAttributeName && (f = this.options.transformAttributeName(f)), f === "__proto__" && (f = "#__proto__"), o !== void 0) {
          this.options.trimValues && (o = o.trim()), o = this.replaceEntitiesValue(o);
          const l = this.options.attributeValueProcessor(u, o, t);
          l == null ? r[f] = o : typeof l != typeof o || l !== o ? r[f] = l : r[f] = x(
            o,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (r[f] = !0);
    }
    if (!Object.keys(r).length)
      return;
    if (this.options.attributesGroupName) {
      const a = {};
      return a[this.options.attributesGroupName] = r, a;
    }
    return r;
  }
}
const Fe = function(e) {
  e = e.replace(/\r\n?/g, `
`);
  const t = new P("!xml");
  let n = t, i = "", s = "";
  for (let r = 0; r < e.length; r++)
    if (e[r] === "<")
      if (e[r + 1] === "/") {
        const u = A(e, ">", r, "Closing Tag is not closed.");
        let o = e.substring(r + 2, u).trim();
        if (this.options.removeNSPrefix) {
          const c = o.indexOf(":");
          c !== -1 && (o = o.substr(c + 1));
        }
        this.options.transformTagName && (o = this.options.transformTagName(o)), n && (i = this.saveTextToParentTag(i, n, s));
        const f = s.substring(s.lastIndexOf(".") + 1);
        if (o && this.options.unpairedTags.indexOf(o) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${o}>`);
        let l = 0;
        f && this.options.unpairedTags.indexOf(f) !== -1 ? (l = s.lastIndexOf(".", s.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : l = s.lastIndexOf("."), s = s.substring(0, l), n = this.tagsNodeStack.pop(), i = "", r = u;
      } else if (e[r + 1] === "?") {
        let u = v(e, r, !1, "?>");
        if (!u) throw new Error("Pi Tag is not closed.");
        if (i = this.saveTextToParentTag(i, n, s), !(this.options.ignoreDeclaration && u.tagName === "?xml" || this.options.ignorePiTags)) {
          const o = new P(u.tagName);
          o.add(this.options.textNodeName, ""), u.tagName !== u.tagExp && u.attrExpPresent && (o[":@"] = this.buildAttributesMap(u.tagExp, s, u.tagName)), this.addChild(n, o, s);
        }
        r = u.closeIndex + 1;
      } else if (e.substr(r + 1, 3) === "!--") {
        const u = A(e, "-->", r + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const o = e.substring(r + 4, u - 2);
          i = this.saveTextToParentTag(i, n, s), n.add(this.options.commentPropName, [{ [this.options.textNodeName]: o }]);
        }
        r = u;
      } else if (e.substr(r + 1, 2) === "!D") {
        const u = Ie(e, r);
        this.docTypeEntities = u.entities, r = u.i;
      } else if (e.substr(r + 1, 2) === "![") {
        const u = A(e, "]]>", r, "CDATA is not closed.") - 2, o = e.substring(r + 9, u);
        i = this.saveTextToParentTag(i, n, s);
        let f = this.parseTextData(o, n.tagname, s, !0, !1, !0, !0);
        f == null && (f = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [{ [this.options.textNodeName]: o }]) : n.add(this.options.textNodeName, f), r = u + 2;
      } else {
        let u = v(e, r, this.options.removeNSPrefix), o = u.tagName;
        const f = u.rawTagName;
        let l = u.tagExp, c = u.attrExpPresent, d = u.closeIndex;
        this.options.transformTagName && (o = this.options.transformTagName(o)), n && i && n.tagname !== "!xml" && (i = this.saveTextToParentTag(i, n, s, !1));
        const p = n;
        if (p && this.options.unpairedTags.indexOf(p.tagname) !== -1 && (n = this.tagsNodeStack.pop(), s = s.substring(0, s.lastIndexOf("."))), o !== t.tagname && (s += s ? "." + o : o), this.isItStopNode(this.options.stopNodes, s, o)) {
          let h = "";
          if (l.length > 0 && l.lastIndexOf("/") === l.length - 1)
            o[o.length - 1] === "/" ? (o = o.substr(0, o.length - 1), s = s.substr(0, s.length - 1), l = o) : l = l.substr(0, l.length - 1), r = u.closeIndex;
          else if (this.options.unpairedTags.indexOf(o) !== -1)
            r = u.closeIndex;
          else {
            const b = this.readStopNodeData(e, f, d + 1);
            if (!b) throw new Error(`Unexpected end of ${f}`);
            r = b.i, h = b.tagContent;
          }
          const E = new P(o);
          o !== l && c && (E[":@"] = this.buildAttributesMap(l, s, o)), h && (h = this.parseTextData(h, o, s, !0, c, !0, !0)), s = s.substr(0, s.lastIndexOf(".")), E.add(this.options.textNodeName, h), this.addChild(n, E, s);
        } else {
          if (l.length > 0 && l.lastIndexOf("/") === l.length - 1) {
            o[o.length - 1] === "/" ? (o = o.substr(0, o.length - 1), s = s.substr(0, s.length - 1), l = o) : l = l.substr(0, l.length - 1), this.options.transformTagName && (o = this.options.transformTagName(o));
            const h = new P(o);
            o !== l && c && (h[":@"] = this.buildAttributesMap(l, s, o)), this.addChild(n, h, s), s = s.substr(0, s.lastIndexOf("."));
          } else {
            const h = new P(o);
            this.tagsNodeStack.push(n), o !== l && c && (h[":@"] = this.buildAttributesMap(l, s, o)), this.addChild(n, h, s), n = h;
          }
          i = "", r = d;
        }
      }
    else
      i += e[r];
  return t.child;
};
function Se(e, t, n) {
  const i = this.options.updateTag(t.tagname, n, t[":@"]);
  i === !1 || (typeof i == "string" && (t.tagname = i), e.addChild(t));
}
const _e = function(e) {
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
function Me(e, t, n, i) {
  return e && (i === void 0 && (i = Object.keys(t.child).length === 0), e = this.parseTextData(
    e,
    t.tagname,
    n,
    !1,
    t[":@"] ? Object.keys(t[":@"]).length !== 0 : !1,
    i
  ), e !== void 0 && e !== "" && t.add(this.options.textNodeName, e), e = ""), e;
}
function Xe(e, t, n) {
  const i = "*." + n;
  for (const s in e) {
    const r = e[s];
    if (i === r || t === r) return !0;
  }
  return !1;
}
function Be(e, t, n = ">") {
  let i, s = "";
  for (let r = t; r < e.length; r++) {
    let a = e[r];
    if (i)
      a === i && (i = "");
    else if (a === '"' || a === "'")
      i = a;
    else if (a === n[0])
      if (n[1]) {
        if (e[r + 1] === n[1])
          return {
            data: s,
            index: r
          };
      } else
        return {
          data: s,
          index: r
        };
    else a === "	" && (a = " ");
    s += a;
  }
}
function A(e, t, n, i) {
  const s = e.indexOf(t, n);
  if (s === -1)
    throw new Error(i);
  return s + t.length - 1;
}
function v(e, t, n, i = ">") {
  const s = Be(e, t + 1, i);
  if (!s) return;
  let r = s.data;
  const a = s.index, u = r.search(/\s/);
  let o = r, f = !0;
  u !== -1 && (o = r.substring(0, u), r = r.substring(u + 1).trimStart());
  const l = o;
  if (n) {
    const c = o.indexOf(":");
    c !== -1 && (o = o.substr(c + 1), f = o !== s.data.substr(c + 1));
  }
  return {
    tagName: o,
    tagExp: r,
    closeIndex: a,
    attrExpPresent: f,
    rawTagName: l
  };
}
function Re(e, t, n) {
  const i = n;
  let s = 1;
  for (; n < e.length; n++)
    if (e[n] === "<")
      if (e[n + 1] === "/") {
        const r = A(e, ">", n, `${t} is not closed`);
        if (e.substring(n + 2, r).trim() === t && (s--, s === 0))
          return {
            tagContent: e.substring(i, n),
            i: r
          };
        n = r;
      } else if (e[n + 1] === "?")
        n = A(e, "?>", n + 1, "StopNode is not closed.");
      else if (e.substr(n + 1, 3) === "!--")
        n = A(e, "-->", n + 3, "StopNode is not closed.");
      else if (e.substr(n + 1, 2) === "![")
        n = A(e, "]]>", n, "StopNode is not closed.") - 2;
      else {
        const r = v(e, n, ">");
        r && ((r && r.tagName) === t && r.tagExp[r.tagExp.length - 1] !== "/" && s++, n = r.closeIndex);
      }
}
function x(e, t, n) {
  if (t && typeof e == "string") {
    const i = e.trim();
    return i === "true" ? !0 : i === "false" ? !1 : Pe(e, n);
  } else
    return q.isExist(e) ? e : "";
}
var Ue = ve, W = {};
function Ge(e, t) {
  return Y(e, t);
}
function Y(e, t, n) {
  let i;
  const s = {};
  for (let r = 0; r < e.length; r++) {
    const a = e[r], u = Qe(a);
    let o = "";
    if (n === void 0 ? o = u : o = n + "." + u, u === t.textNodeName)
      i === void 0 ? i = a[u] : i += "" + a[u];
    else {
      if (u === void 0)
        continue;
      if (a[u]) {
        let f = Y(a[u], t, o);
        const l = qe(f, t);
        a[":@"] ? Ze(f, a[":@"], o, t) : Object.keys(f).length === 1 && f[t.textNodeName] !== void 0 && !t.alwaysCreateTextNode ? f = f[t.textNodeName] : Object.keys(f).length === 0 && (t.alwaysCreateTextNode ? f[t.textNodeName] = "" : f = ""), s[u] !== void 0 && s.hasOwnProperty(u) ? (Array.isArray(s[u]) || (s[u] = [s[u]]), s[u].push(f)) : t.isArray(u, o, l) ? s[u] = [f] : s[u] = f;
      }
    }
  }
  return typeof i == "string" ? i.length > 0 && (s[t.textNodeName] = i) : i !== void 0 && (s[t.textNodeName] = i), s;
}
function Qe(e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (i !== ":@") return i;
  }
}
function Ze(e, t, n, i) {
  if (t) {
    const s = Object.keys(t), r = s.length;
    for (let a = 0; a < r; a++) {
      const u = s[a];
      i.isArray(u, n + "." + u, !0, !0) ? e[u] = [t[u]] : e[u] = t[u];
    }
  }
}
function qe(e, t) {
  const { textNodeName: n } = t, i = Object.keys(e).length;
  return !!(i === 0 || i === 1 && (e[n] || typeof e[n] == "boolean" || e[n] === 0));
}
W.prettify = Ge;
const { buildOptions: We } = V, Ye = Ue, { prettify: Je } = W, Ke = $;
let ze = class {
  constructor(t) {
    this.externalEntities = {}, this.options = We(t);
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
      const r = Ke.validate(t, n);
      if (r !== !0)
        throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`);
    }
    const i = new Ye(this.options);
    i.addExternalEntities(this.externalEntities);
    const s = i.parseXml(t);
    return this.options.preserveOrder || s === void 0 ? s : Je(s, this.options);
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
var He = ze;
const je = `
`;
function De(e, t) {
  let n = "";
  return t.format && t.indentBy.length > 0 && (n = je), J(e, t, "", n);
}
function J(e, t, n, i) {
  let s = "", r = !1;
  for (let a = 0; a < e.length; a++) {
    const u = e[a], o = et(u);
    if (o === void 0) continue;
    let f = "";
    if (n.length === 0 ? f = o : f = `${n}.${o}`, o === t.textNodeName) {
      let h = u[o];
      tt(f, t) || (h = t.tagValueProcessor(o, h), h = K(h, t)), r && (s += i), s += h, r = !1;
      continue;
    } else if (o === t.cdataPropName) {
      r && (s += i), s += `<![CDATA[${u[o][0][t.textNodeName]}]]>`, r = !1;
      continue;
    } else if (o === t.commentPropName) {
      s += i + `<!--${u[o][0][t.textNodeName]}-->`, r = !0;
      continue;
    } else if (o[0] === "?") {
      const h = X(u[":@"], t), E = o === "?xml" ? "" : i;
      let b = u[o][0][t.textNodeName];
      b = b.length !== 0 ? " " + b : "", s += E + `<${o}${b}${h}?>`, r = !0;
      continue;
    }
    let l = i;
    l !== "" && (l += t.indentBy);
    const c = X(u[":@"], t), d = i + `<${o}${c}`, p = J(u[o], t, f, l);
    t.unpairedTags.indexOf(o) !== -1 ? t.suppressUnpairedNode ? s += d + ">" : s += d + "/>" : (!p || p.length === 0) && t.suppressEmptyNode ? s += d + "/>" : p && p.endsWith(">") ? s += d + `>${p}${i}</${o}>` : (s += d + ">", p && i !== "" && (p.includes("/>") || p.includes("</")) ? s += i + t.indentBy + p + i : s += p, s += `</${o}>`), r = !0;
  }
  return s;
}
function et(e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (e.hasOwnProperty(i) && i !== ":@")
      return i;
  }
}
function X(e, t) {
  let n = "";
  if (e && !t.ignoreAttributes)
    for (let i in e) {
      if (!e.hasOwnProperty(i)) continue;
      let s = t.attributeValueProcessor(i, e[i]);
      s = K(s, t), s === !0 && t.suppressBooleanAttributes ? n += ` ${i.substr(t.attributeNamePrefix.length)}` : n += ` ${i.substr(t.attributeNamePrefix.length)}="${s}"`;
    }
  return n;
}
function tt(e, t) {
  e = e.substr(0, e.length - t.textNodeName.length - 1);
  let n = e.substr(e.lastIndexOf(".") + 1);
  for (let i in t.stopNodes)
    if (t.stopNodes[i] === e || t.stopNodes[i] === "*." + n) return !0;
  return !1;
}
function K(e, t) {
  if (e && e.length > 0 && t.processEntities)
    for (let n = 0; n < t.entities.length; n++) {
      const i = t.entities[n];
      e = e.replace(i.regex, i.val);
    }
  return e;
}
var nt = De;
const rt = nt, st = Z, it = {
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
function y(e) {
  this.options = Object.assign({}, it, e), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
    return !1;
  } : (this.ignoreAttributesFn = st(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = at), this.processTextOrObjNode = ot, this.options.format ? (this.indentate = ut, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
    return "";
  }, this.tagEndChar = ">", this.newLine = "");
}
y.prototype.build = function(e) {
  return this.options.preserveOrder ? rt(e, this.options) : (Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = {
    [this.options.arrayNodeName]: e
  }), this.j2x(e, 0, []).val);
};
y.prototype.j2x = function(e, t, n) {
  let i = "", s = "";
  const r = n.join(".");
  for (let a in e)
    if (Object.prototype.hasOwnProperty.call(e, a))
      if (typeof e[a] > "u")
        this.isAttribute(a) && (s += "");
      else if (e[a] === null)
        this.isAttribute(a) ? s += "" : a[0] === "?" ? s += this.indentate(t) + "<" + a + "?" + this.tagEndChar : s += this.indentate(t) + "<" + a + "/" + this.tagEndChar;
      else if (e[a] instanceof Date)
        s += this.buildTextValNode(e[a], a, "", t);
      else if (typeof e[a] != "object") {
        const u = this.isAttribute(a);
        if (u && !this.ignoreAttributesFn(u, r))
          i += this.buildAttrPairStr(u, "" + e[a]);
        else if (!u)
          if (a === this.options.textNodeName) {
            let o = this.options.tagValueProcessor(a, "" + e[a]);
            s += this.replaceEntitiesValue(o);
          } else
            s += this.buildTextValNode(e[a], a, "", t);
      } else if (Array.isArray(e[a])) {
        const u = e[a].length;
        let o = "", f = "";
        for (let l = 0; l < u; l++) {
          const c = e[a][l];
          if (!(typeof c > "u")) if (c === null)
            a[0] === "?" ? s += this.indentate(t) + "<" + a + "?" + this.tagEndChar : s += this.indentate(t) + "<" + a + "/" + this.tagEndChar;
          else if (typeof c == "object")
            if (this.options.oneListGroup) {
              const d = this.j2x(c, t + 1, n.concat(a));
              o += d.val, this.options.attributesGroupName && c.hasOwnProperty(this.options.attributesGroupName) && (f += d.attrStr);
            } else
              o += this.processTextOrObjNode(c, a, t, n);
          else if (this.options.oneListGroup) {
            let d = this.options.tagValueProcessor(a, c);
            d = this.replaceEntitiesValue(d), o += d;
          } else
            o += this.buildTextValNode(c, a, "", t);
        }
        this.options.oneListGroup && (o = this.buildObjectNode(o, a, f, t)), s += o;
      } else if (this.options.attributesGroupName && a === this.options.attributesGroupName) {
        const u = Object.keys(e[a]), o = u.length;
        for (let f = 0; f < o; f++)
          i += this.buildAttrPairStr(u[f], "" + e[a][u[f]]);
      } else
        s += this.processTextOrObjNode(e[a], a, t, n);
  return { attrStr: i, val: s };
};
y.prototype.buildAttrPairStr = function(e, t) {
  return t = this.options.attributeValueProcessor(e, "" + t), t = this.replaceEntitiesValue(t), this.options.suppressBooleanAttributes && t === "true" ? " " + e : " " + e + '="' + t + '"';
};
function ot(e, t, n, i) {
  const s = this.j2x(e, n + 1, i.concat(t));
  return e[this.options.textNodeName] !== void 0 && Object.keys(e).length === 1 ? this.buildTextValNode(e[this.options.textNodeName], t, s.attrStr, n) : this.buildObjectNode(s.val, t, s.attrStr, n);
}
y.prototype.buildObjectNode = function(e, t, n, i) {
  if (e === "")
    return t[0] === "?" ? this.indentate(i) + "<" + t + n + "?" + this.tagEndChar : this.indentate(i) + "<" + t + n + this.closeTag(t) + this.tagEndChar;
  {
    let s = "</" + t + this.tagEndChar, r = "";
    return t[0] === "?" && (r = "?", s = ""), (n || n === "") && e.indexOf("<") === -1 ? this.indentate(i) + "<" + t + n + r + ">" + e + s : this.options.commentPropName !== !1 && t === this.options.commentPropName && r.length === 0 ? this.indentate(i) + `<!--${e}-->` + this.newLine : this.indentate(i) + "<" + t + n + r + this.tagEndChar + e + this.indentate(i) + s;
  }
};
y.prototype.closeTag = function(e) {
  let t = "";
  return this.options.unpairedTags.indexOf(e) !== -1 ? this.options.suppressUnpairedNode || (t = "/") : this.options.suppressEmptyNode ? t = "/" : t = `></${e}`, t;
};
y.prototype.buildTextValNode = function(e, t, n, i) {
  if (this.options.cdataPropName !== !1 && t === this.options.cdataPropName)
    return this.indentate(i) + `<![CDATA[${e}]]>` + this.newLine;
  if (this.options.commentPropName !== !1 && t === this.options.commentPropName)
    return this.indentate(i) + `<!--${e}-->` + this.newLine;
  if (t[0] === "?")
    return this.indentate(i) + "<" + t + n + "?" + this.tagEndChar;
  {
    let s = this.options.tagValueProcessor(t, e);
    return s = this.replaceEntitiesValue(s), s === "" ? this.indentate(i) + "<" + t + n + this.closeTag(t) + this.tagEndChar : this.indentate(i) + "<" + t + n + ">" + s + "</" + t + this.tagEndChar;
  }
};
y.prototype.replaceEntitiesValue = function(e) {
  if (e && e.length > 0 && this.options.processEntities)
    for (let t = 0; t < this.options.entities.length; t++) {
      const n = this.options.entities[t];
      e = e.replace(n.regex, n.val);
    }
  return e;
};
function ut(e) {
  return this.options.indentBy.repeat(e);
}
function at(e) {
  return e.startsWith(this.options.attributeNamePrefix) && e !== this.options.textNodeName ? e.substr(this.attrPrefixLen) : !1;
}
var ft = y;
const lt = $, ct = He, dt = ft;
var ht = {
  XMLParser: ct,
  XMLValidator: lt,
  XMLBuilder: dt
};
function pt(e) {
  var E, b, k;
  const i = (E = new ht.XMLParser({
    ignoreAttributes: !1,
    attributeNamePrefix: "@_"
  }).parse(e).VAST) == null ? void 0 : E.Ad;
  if (!i)
    throw new Error("No Ad found in VAST XML");
  const s = i["@_adType"] || "unknown", r = i.InLine;
  if (!r)
    throw new Error("No InLine element found in Ad");
  const a = (b = r.Creatives) == null ? void 0 : b.Creative;
  if (!a)
    throw new Error("No Creatives found in InLine");
  let u, o, f;
  if (Array.isArray(a)) {
    const w = a.find((T) => T.Linear);
    w && (u = w.Linear);
    const m = a.find((T) => T.NonLinearAds);
    m && (o = m.NonLinearAds), f = (k = a.find((T) => T.CompanionAds)) == null ? void 0 : k.CompanionAds;
  } else
    u = a.Linear, o = a.NonLinearAds, f = a.CompanionAds;
  let l = "", c = 0, d = "";
  const p = {
    impression: [],
    start: [],
    firstQuartile: [],
    midpoint: [],
    thirdQuartile: [],
    complete: []
  };
  if (r.Impression && (p.impression = Array.isArray(r.Impression) ? r.Impression.map((w) => w.trim()) : [r.Impression.trim()]), u)
    l = B(u.MediaFiles), c = G(u.Duration), d = R(u.VideoClicks), U(u.TrackingEvents, p);
  else if (o)
    l = B(o.MediaFiles), c = G(o.Duration), d = R(o.VideoClicks), U(o.TrackingEvents, p);
  else
    throw new Error("No Linear or NonLinearAds element found in Creative");
  const h = [];
  if (f != null && f.Companion) {
    const w = Array.isArray(f.Companion) ? f.Companion : [f.Companion];
    for (const m of w) {
      let T = "";
      typeof m.CompanionClickThrough == "string" ? T = m.CompanionClickThrough.trim() : typeof m.CompanionClickThrough == "object" && m.CompanionClickThrough["#text"] ? T = m.CompanionClickThrough["#text"].trim() : console.warn(
        "CompanionClickThrough is missing or has unexpected structure:",
        m.CompanionClickThrough
      ), h.push({
        width: Number.parseInt(m["@_width"]),
        height: Number.parseInt(m["@_height"]),
        imageUrl: m.StaticResource["#text"].trim(),
        clickThroughUrl: T
      });
    }
  }
  return {
    adType: s,
    mediaUrl: l,
    duration: c,
    clickThroughUrl: d,
    trackingEvents: p,
    companionAds: h.length > 0 ? h : void 0
  };
}
function B(e) {
  if (!e) return "";
  const t = e.MediaFile;
  return t ? Array.isArray(t) ? t[0]["#text"].trim() : t["#text"].trim() : "";
}
function R(e) {
  if (!e || !e.ClickThrough) return "";
  const t = e.ClickThrough;
  return typeof t == "string" ? t.trim() : typeof t == "object" && t["#text"] ? t["#text"].trim() : (console.warn(
    "VideoClicks is missing or has unexpected structure:",
    e
  ), "");
}
function U(e, t = {
  impression: [],
  start: [],
  firstQuartile: [],
  midpoint: [],
  thirdQuartile: [],
  complete: []
}) {
  if (!(e != null && e.Tracking)) return;
  const n = Array.isArray(e.Tracking) ? e.Tracking : [e.Tracking];
  for (const i of n) {
    const s = i["@_event"].toLowerCase(), r = i["#text"].trim();
    switch (s) {
      case "start":
        t.start.push(r);
        break;
      case "firstquartile":
        t.firstQuartile.push(r);
        break;
      case "midpoint":
        t.midpoint.push(r);
        break;
      case "thirdquartile":
        t.thirdQuartile.push(r);
        break;
      case "complete":
        t.complete.push(r);
        break;
      case "progress": {
        const a = i["@_offset"];
        a === "0%" ? t.start.push(r) : a === "25%" ? t.firstQuartile.push(r) : a === "50%" ? t.midpoint.push(r) : a === "75%" && t.thirdQuartile.push(r);
        break;
      }
    }
  }
}
function G(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string") {
    if (e.includes(":")) {
      const [n, i, s] = e.split(":").map(Number);
      return n * 3600 + i * 60 + s;
    }
    const t = Number.parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return console.warn(`Invalid duration format: ${e}. Returning 0.`), 0;
}
const gt = "https://video-ad-network.techtalkjp.workers.dev";
async function Nt(e) {
  const t = await fetch(
    `${gt}/vast?adSlotId=${e.adSlotId}&mediaId=${e.mediaId}`
  );
  if (!t.ok)
    throw new Error("Failed to fetch VAST XML");
  const n = await t.text();
  return pt(n);
}
function mt(e) {
  if (!e.vastData || !e.mediaElement) return e;
  const { trackingEvents: t } = e.vastData;
  return C(t.impression), e.mediaElement.addEventListener("timeupdate", () => {
    if (!e.vastData || !e.mediaElement) return;
    const n = e.mediaElement.currentTime / e.vastData.duration;
    n <= 0 ? C(t.start) : n >= 0.25 && n < 0.5 ? C(t.firstQuartile) : n >= 0.5 && n < 0.75 ? C(t.midpoint) : n >= 0.75 && n < 1 && C(t.thirdQuartile);
  }), e.mediaElement.addEventListener(
    "ended",
    () => C(t.complete)
  ), e;
}
function C(e) {
  for (const t of e)
    fetch(t, { method: "GET", mode: "no-cors" });
}
function bt(e) {
  if (!e.vastData) return e;
  const t = e.vastData.adType === "video" ? document.createElement("video") : document.createElement("audio");
  return t.src = e.vastData.mediaUrl, t.style.width = "100%", t.style.height = "100%", t.setAttribute("playsinline", ""), t.addEventListener("click", () => Tt(e)), e.config.containerElement.appendChild(t), { ...e, mediaElement: t };
}
function Tt(e) {
  e.vastData && window.open(e.vastData.clickThroughUrl, "_blank");
}
function Et(e) {
  var i, s;
  if (!((s = (i = e.vastData) == null ? void 0 : i.companionAds) != null && s[0]) || !e.config.companionContainer)
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
  let i = { ...t, vastData: n };
  return i = bt(i), i = Et(i), i = mt(i), i;
}
function Ct(e) {
  if (!e.vastData || !e.mediaElement)
    throw new Error("Ad not loaded");
  e.mediaElement.play();
}
function It(e) {
  e.mediaElement && e.mediaElement.pause();
}
function Pt(e, t) {
  e.mediaElement && (e.mediaElement.volume = Math.max(0, Math.min(1, t)));
}
export {
  wt as initializeAdSDK,
  It as pause,
  Ct as play,
  Pt as setVolume
};
