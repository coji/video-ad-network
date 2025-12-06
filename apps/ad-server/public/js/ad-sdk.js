const U = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", B = U + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", X = "[" + U + "][" + B + "]*", Y = new RegExp("^" + X + "$");
function R(t, e) {
  const n = [];
  let r = e.exec(t);
  for (; r; ) {
    const i = [];
    i.startIndex = e.lastIndex - r[0].length;
    const s = r.length;
    for (let o = 0; o < s; o++)
      i.push(r[o]);
    n.push(i), r = e.exec(t);
  }
  return n;
}
const A = function(t) {
  const e = Y.exec(t);
  return !(e === null || typeof e > "u");
};
function Q(t) {
  return typeof t < "u";
}
const Z = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function W(t, e) {
  e = Object.assign({}, Z, e);
  const n = [];
  let r = !1, i = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let s = 0; s < t.length; s++)
    if (t[s] === "<" && t[s + 1] === "?") {
      if (s += 2, s = F(t, s), s.err) return s;
    } else if (t[s] === "<") {
      let o = s;
      if (s++, t[s] === "!") {
        s = L(t, s);
        continue;
      } else {
        let l = !1;
        t[s] === "/" && (l = !0, s++);
        let f = "";
        for (; s < t.length && t[s] !== ">" && t[s] !== " " && t[s] !== "	" && t[s] !== `
` && t[s] !== "\r"; s++)
          f += t[s];
        if (f = f.trim(), f[f.length - 1] === "/" && (f = f.substring(0, f.length - 1), s--), !D(f)) {
          let a;
          return f.trim().length === 0 ? a = "Invalid space after '<'." : a = "Tag '" + f + "' is an invalid name.", c("InvalidTag", a, p(t, s));
        }
        const u = K(t, s);
        if (u === !1)
          return c("InvalidAttr", "Attributes for '" + f + "' have open quote.", p(t, s));
        let d = u.value;
        if (s = u.index, d[d.length - 1] === "/") {
          const a = s - d.length;
          d = d.substring(0, d.length - 1);
          const h = $(d, e);
          if (h === !0)
            r = !0;
          else
            return c(h.err.code, h.err.msg, p(t, a + h.err.line));
        } else if (l)
          if (u.tagClosed) {
            if (d.trim().length > 0)
              return c("InvalidTag", "Closing tag '" + f + "' can't have attributes or invalid starting.", p(t, o));
            if (n.length === 0)
              return c("InvalidTag", "Closing tag '" + f + "' has not been opened.", p(t, o));
            {
              const a = n.pop();
              if (f !== a.tagName) {
                let h = p(t, a.tagStartPos);
                return c(
                  "InvalidTag",
                  "Expected closing tag '" + a.tagName + "' (opened in line " + h.line + ", col " + h.col + ") instead of closing tag '" + f + "'.",
                  p(t, o)
                );
              }
              n.length == 0 && (i = !0);
            }
          } else return c("InvalidTag", "Closing tag '" + f + "' doesn't have proper closing.", p(t, s));
        else {
          const a = $(d, e);
          if (a !== !0)
            return c(a.err.code, a.err.msg, p(t, s - d.length + a.err.line));
          if (i === !0)
            return c("InvalidXml", "Multiple possible root nodes found.", p(t, s));
          e.unpairedTags.indexOf(f) !== -1 || n.push({ tagName: f, tagStartPos: o }), r = !0;
        }
        for (s++; s < t.length; s++)
          if (t[s] === "<")
            if (t[s + 1] === "!") {
              s++, s = L(t, s);
              continue;
            } else if (t[s + 1] === "?") {
              if (s = F(t, ++s), s.err) return s;
            } else
              break;
          else if (t[s] === "&") {
            const a = H(t, s);
            if (a == -1)
              return c("InvalidChar", "char '&' is not expected.", p(t, s));
            s = a;
          } else if (i === !0 && !M(t[s]))
            return c("InvalidXml", "Extra text at the end", p(t, s));
        t[s] === "<" && s--;
      }
    } else {
      if (M(t[s]))
        continue;
      return c("InvalidChar", "char '" + t[s] + "' is not expected.", p(t, s));
    }
  if (r) {
    if (n.length == 1)
      return c("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", p(t, n[0].tagStartPos));
    if (n.length > 0)
      return c("InvalidXml", "Invalid '" + JSON.stringify(n.map((s) => s.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return c("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function M(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function F(t, e) {
  const n = e;
  for (; e < t.length; e++)
    if (t[e] == "?" || t[e] == " ") {
      const r = t.substr(n, e - n);
      if (e > 5 && r === "xml")
        return c("InvalidXml", "XML declaration allowed only at the start of the document.", p(t, e));
      if (t[e] == "?" && t[e + 1] == ">") {
        e++;
        break;
      } else
        continue;
    }
  return e;
}
function L(t, e) {
  if (t.length > e + 5 && t[e + 1] === "-" && t[e + 2] === "-") {
    for (e += 3; e < t.length; e++)
      if (t[e] === "-" && t[e + 1] === "-" && t[e + 2] === ">") {
        e += 2;
        break;
      }
  } else if (t.length > e + 8 && t[e + 1] === "D" && t[e + 2] === "O" && t[e + 3] === "C" && t[e + 4] === "T" && t[e + 5] === "Y" && t[e + 6] === "P" && t[e + 7] === "E") {
    let n = 1;
    for (e += 8; e < t.length; e++)
      if (t[e] === "<")
        n++;
      else if (t[e] === ">" && (n--, n === 0))
        break;
  } else if (t.length > e + 9 && t[e + 1] === "[" && t[e + 2] === "C" && t[e + 3] === "D" && t[e + 4] === "A" && t[e + 5] === "T" && t[e + 6] === "A" && t[e + 7] === "[") {
    for (e += 8; e < t.length; e++)
      if (t[e] === "]" && t[e + 1] === "]" && t[e + 2] === ">") {
        e += 2;
        break;
      }
  }
  return e;
}
const q = '"', G = "'";
function K(t, e) {
  let n = "", r = "", i = !1;
  for (; e < t.length; e++) {
    if (t[e] === q || t[e] === G)
      r === "" ? r = t[e] : r !== t[e] || (r = "");
    else if (t[e] === ">" && r === "") {
      i = !0;
      break;
    }
    n += t[e];
  }
  return r !== "" ? !1 : {
    value: n,
    index: e,
    tagClosed: i
  };
}
const z = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function $(t, e) {
  const n = R(t, z), r = {};
  for (let i = 0; i < n.length; i++) {
    if (n[i][1].length === 0)
      return c("InvalidAttr", "Attribute '" + n[i][2] + "' has no space in starting.", I(n[i]));
    if (n[i][3] !== void 0 && n[i][4] === void 0)
      return c("InvalidAttr", "Attribute '" + n[i][2] + "' is without value.", I(n[i]));
    if (n[i][3] === void 0 && !e.allowBooleanAttributes)
      return c("InvalidAttr", "boolean attribute '" + n[i][2] + "' is not allowed.", I(n[i]));
    const s = n[i][2];
    if (!x(s))
      return c("InvalidAttr", "Attribute '" + s + "' is an invalid name.", I(n[i]));
    if (!r.hasOwnProperty(s))
      r[s] = 1;
    else
      return c("InvalidAttr", "Attribute '" + s + "' is repeated.", I(n[i]));
  }
  return !0;
}
function J(t, e) {
  let n = /\d/;
  for (t[e] === "x" && (e++, n = /[\da-fA-F]/); e < t.length; e++) {
    if (t[e] === ";")
      return e;
    if (!t[e].match(n))
      break;
  }
  return -1;
}
function H(t, e) {
  if (e++, t[e] === ";")
    return -1;
  if (t[e] === "#")
    return e++, J(t, e);
  let n = 0;
  for (; e < t.length; e++, n++)
    if (!(t[e].match(/\w/) && n < 20)) {
      if (t[e] === ";")
        break;
      return -1;
    }
  return e;
}
function c(t, e, n) {
  return {
    err: {
      code: t,
      msg: e,
      line: n.line || n,
      col: n.col
    }
  };
}
function x(t) {
  return A(t);
}
function D(t) {
  return A(t);
}
function p(t, e) {
  const n = t.substring(0, e).split(/\r?\n/);
  return {
    line: n.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: n[n.length - 1].length + 1
  };
}
function I(t) {
  return t.startIndex + t[1].length;
}
const ee = {
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
  tagValueProcessor: function(t, e) {
    return e;
  },
  attributeValueProcessor: function(t, e) {
    return e;
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
  updateTag: function(t, e, n) {
    return t;
  },
  // skipEmptyListItem: false
  captureMetaData: !1
}, te = function(t) {
  return Object.assign({}, ee, t);
};
let y;
typeof Symbol != "function" ? y = "@@xmlMetadata" : y = Symbol("XML Node Metadata");
class b {
  constructor(e) {
    this.tagname = e, this.child = [], this[":@"] = {};
  }
  add(e, n) {
    e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: n });
  }
  addChild(e, n) {
    e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({ [e.tagname]: e.child, ":@": e[":@"] }) : this.child.push({ [e.tagname]: e.child }), n !== void 0 && (this.child[this.child.length - 1][y] = { startIndex: n });
  }
  /** symbol used for metadata */
  static getMetaDataSymbol() {
    return y;
  }
}
class ne {
  constructor(e) {
    this.suppressValidationErr = !e;
  }
  readDocType(e, n) {
    const r = {};
    if (e[n + 3] === "O" && e[n + 4] === "C" && e[n + 5] === "T" && e[n + 6] === "Y" && e[n + 7] === "P" && e[n + 8] === "E") {
      n = n + 9;
      let i = 1, s = !1, o = !1, l = "";
      for (; n < e.length; n++)
        if (e[n] === "<" && !o) {
          if (s && N(e, "!ENTITY", n)) {
            n += 7;
            let f, u;
            [f, u, n] = this.readEntityExp(e, n + 1, this.suppressValidationErr), u.indexOf("&") === -1 && (r[f] = {
              regx: RegExp(`&${f};`, "g"),
              val: u
            });
          } else if (s && N(e, "!ELEMENT", n)) {
            n += 8;
            const { index: f } = this.readElementExp(e, n + 1);
            n = f;
          } else if (s && N(e, "!ATTLIST", n))
            n += 8;
          else if (s && N(e, "!NOTATION", n)) {
            n += 9;
            const { index: f } = this.readNotationExp(e, n + 1, this.suppressValidationErr);
            n = f;
          } else if (N(e, "!--", n)) o = !0;
          else throw new Error("Invalid DOCTYPE");
          i++, l = "";
        } else if (e[n] === ">") {
          if (o ? e[n - 1] === "-" && e[n - 2] === "-" && (o = !1, i--) : i--, i === 0)
            break;
        } else e[n] === "[" ? s = !0 : l += e[n];
      if (i !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: r, i: n };
  }
  readEntityExp(e, n) {
    n = g(e, n);
    let r = "";
    for (; n < e.length && !/\s/.test(e[n]) && e[n] !== '"' && e[n] !== "'"; )
      r += e[n], n++;
    if (m(r), n = g(e, n), !this.suppressValidationErr) {
      if (e.substring(n, n + 6).toUpperCase() === "SYSTEM")
        throw new Error("External entities are not supported");
      if (e[n] === "%")
        throw new Error("Parameter entities are not supported");
    }
    let i = "";
    return [n, i] = this.readIdentifierVal(e, n, "entity"), n--, [r, i, n];
  }
  readNotationExp(e, n) {
    n = g(e, n);
    let r = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      r += e[n], n++;
    !this.suppressValidationErr && m(r), n = g(e, n);
    const i = e.substring(n, n + 6).toUpperCase();
    if (!this.suppressValidationErr && i !== "SYSTEM" && i !== "PUBLIC")
      throw new Error(`Expected SYSTEM or PUBLIC, found "${i}"`);
    n += i.length, n = g(e, n);
    let s = null, o = null;
    if (i === "PUBLIC")
      [n, s] = this.readIdentifierVal(e, n, "publicIdentifier"), n = g(e, n), (e[n] === '"' || e[n] === "'") && ([n, o] = this.readIdentifierVal(e, n, "systemIdentifier"));
    else if (i === "SYSTEM" && ([n, o] = this.readIdentifierVal(e, n, "systemIdentifier"), !this.suppressValidationErr && !o))
      throw new Error("Missing mandatory system identifier for SYSTEM notation");
    return { notationName: r, publicIdentifier: s, systemIdentifier: o, index: --n };
  }
  readIdentifierVal(e, n, r) {
    let i = "";
    const s = e[n];
    if (s !== '"' && s !== "'")
      throw new Error(`Expected quoted string, found "${s}"`);
    for (n++; n < e.length && e[n] !== s; )
      i += e[n], n++;
    if (e[n] !== s)
      throw new Error(`Unterminated ${r} value`);
    return n++, [n, i];
  }
  readElementExp(e, n) {
    n = g(e, n);
    let r = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      r += e[n], n++;
    if (!this.suppressValidationErr && !A(r))
      throw new Error(`Invalid element name: "${r}"`);
    n = g(e, n);
    let i = "";
    if (e[n] === "E" && N(e, "MPTY", n)) n += 4;
    else if (e[n] === "A" && N(e, "NY", n)) n += 2;
    else if (e[n] === "(") {
      for (n++; n < e.length && e[n] !== ")"; )
        i += e[n], n++;
      if (e[n] !== ")")
        throw new Error("Unterminated content model");
    } else if (!this.suppressValidationErr)
      throw new Error(`Invalid Element Expression, found "${e[n]}"`);
    return {
      elementName: r,
      contentModel: i.trim(),
      index: n
    };
  }
  readAttlistExp(e, n) {
    n = g(e, n);
    let r = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      r += e[n], n++;
    m(r), n = g(e, n);
    let i = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      i += e[n], n++;
    if (!m(i))
      throw new Error(`Invalid attribute name: "${i}"`);
    n = g(e, n);
    let s = "";
    if (e.substring(n, n + 8).toUpperCase() === "NOTATION") {
      if (s = "NOTATION", n += 8, n = g(e, n), e[n] !== "(")
        throw new Error(`Expected '(', found "${e[n]}"`);
      n++;
      let l = [];
      for (; n < e.length && e[n] !== ")"; ) {
        let f = "";
        for (; n < e.length && e[n] !== "|" && e[n] !== ")"; )
          f += e[n], n++;
        if (f = f.trim(), !m(f))
          throw new Error(`Invalid notation name: "${f}"`);
        l.push(f), e[n] === "|" && (n++, n = g(e, n));
      }
      if (e[n] !== ")")
        throw new Error("Unterminated list of notations");
      n++, s += " (" + l.join("|") + ")";
    } else {
      for (; n < e.length && !/\s/.test(e[n]); )
        s += e[n], n++;
      const l = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
      if (!this.suppressValidationErr && !l.includes(s.toUpperCase()))
        throw new Error(`Invalid attribute type: "${s}"`);
    }
    n = g(e, n);
    let o = "";
    return e.substring(n, n + 8).toUpperCase() === "#REQUIRED" ? (o = "#REQUIRED", n += 8) : e.substring(n, n + 7).toUpperCase() === "#IMPLIED" ? (o = "#IMPLIED", n += 7) : [n, o] = this.readIdentifierVal(e, n, "ATTLIST"), {
      elementName: r,
      attributeName: i,
      attributeType: s,
      defaultValue: o,
      index: n
    };
  }
}
const g = (t, e) => {
  for (; e < t.length && /\s/.test(t[e]); )
    e++;
  return e;
};
function N(t, e, n) {
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[n + r + 1]) return !1;
  return !0;
}
function m(t) {
  if (A(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const re = /^[-+]?0x[a-fA-F0-9]+$/, se = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, ie = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function oe(t, e = {}) {
  if (e = Object.assign({}, ie, e), !t || typeof t != "string") return t;
  let n = t.trim();
  if (e.skipLike !== void 0 && e.skipLike.test(n)) return t;
  if (t === "0") return 0;
  if (e.hex && re.test(n))
    return ae(n, 16);
  if (n.search(/.+[eE].+/) !== -1)
    return ue(t, n, e);
  {
    const r = se.exec(n);
    if (r) {
      const i = r[1] || "", s = r[2];
      let o = le(r[3]);
      const l = i ? (
        // 0., -00., 000.
        t[s.length + 1] === "."
      ) : t[s.length] === ".";
      if (!e.leadingZeros && (s.length > 1 || s.length === 1 && !l))
        return t;
      {
        const f = Number(n), u = String(f);
        if (f === 0) return f;
        if (u.search(/[eE]/) !== -1)
          return e.eNotation ? f : t;
        if (n.indexOf(".") !== -1)
          return u === "0" || u === o || u === `${i}${o}` ? f : t;
        let d = s ? o : n;
        return s ? d === u || i + d === u ? f : t : d === u || d === i + u ? f : t;
      }
    } else
      return t;
  }
}
const fe = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function ue(t, e, n) {
  if (!n.eNotation) return t;
  const r = e.match(fe);
  if (r) {
    let i = r[1] || "";
    const s = r[3].indexOf("e") === -1 ? "E" : "e", o = r[2], l = i ? (
      // 0E.
      t[o.length + 1] === s
    ) : t[o.length] === s;
    return o.length > 1 && l ? t : o.length === 1 && (r[3].startsWith(`.${s}`) || r[3][0] === s) ? Number(e) : n.leadingZeros && !l ? (e = (r[1] || "") + r[3], Number(e)) : t;
  } else
    return t;
}
function le(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substring(0, t.length - 1))), t;
}
function ae(t, e) {
  if (parseInt) return parseInt(t, e);
  if (Number.parseInt) return Number.parseInt(t, e);
  if (window && window.parseInt) return window.parseInt(t, e);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function de(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (e) => {
    for (const n of t)
      if (typeof n == "string" && e === n || n instanceof RegExp && n.test(e))
        return !0;
  } : () => !1;
}
class ce {
  constructor(e) {
    if (this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
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
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (n, r) => String.fromCodePoint(Number.parseInt(r, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (n, r) => String.fromCodePoint(Number.parseInt(r, 16)) }
    }, this.addExternalEntities = he, this.parseXml = be, this.parseTextData = pe, this.resolveNameSpace = ge, this.buildAttributesMap = Ne, this.isItStopNode = me, this.replaceEntitiesValue = we, this.readStopNodeData = Ae, this.saveTextToParentTag = Ie, this.addChild = Te, this.ignoreAttributesFn = de(this.options.ignoreAttributes), this.options.stopNodes && this.options.stopNodes.length > 0) {
      this.stopNodesExact = /* @__PURE__ */ new Set(), this.stopNodesWildcard = /* @__PURE__ */ new Set();
      for (let n = 0; n < this.options.stopNodes.length; n++) {
        const r = this.options.stopNodes[n];
        typeof r == "string" && (r.startsWith("*.") ? this.stopNodesWildcard.add(r.substring(2)) : this.stopNodesExact.add(r));
      }
    }
  }
}
function he(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    this.lastEntities[r] = {
      regex: new RegExp("&" + r + ";", "g"),
      val: t[r]
    };
  }
}
function pe(t, e, n, r, i, s, o) {
  if (t !== void 0 && (this.options.trimValues && !r && (t = t.trim()), t.length > 0)) {
    o || (t = this.replaceEntitiesValue(t));
    const l = this.options.tagValueProcessor(e, t, n, i, s);
    return l == null ? t : typeof l != typeof t || l !== t ? l : this.options.trimValues ? V(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? V(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function ge(t) {
  if (this.options.removeNSPrefix) {
    const e = t.split(":"), n = t.charAt(0) === "/" ? "/" : "";
    if (e[0] === "xmlns")
      return "";
    e.length === 2 && (t = n + e[1]);
  }
  return t;
}
const Ee = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function Ne(t, e, n) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const r = R(t, Ee), i = r.length, s = {};
    for (let o = 0; o < i; o++) {
      const l = this.resolveNameSpace(r[o][1]);
      if (this.ignoreAttributesFn(l, e))
        continue;
      let f = r[o][4], u = this.options.attributeNamePrefix + l;
      if (l.length)
        if (this.options.transformAttributeName && (u = this.options.transformAttributeName(u)), u === "__proto__" && (u = "#__proto__"), f !== void 0) {
          this.options.trimValues && (f = f.trim()), f = this.replaceEntitiesValue(f);
          const d = this.options.attributeValueProcessor(l, f, e);
          d == null ? s[u] = f : typeof d != typeof f || d !== f ? s[u] = d : s[u] = V(
            f,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (s[u] = !0);
    }
    if (!Object.keys(s).length)
      return;
    if (this.options.attributesGroupName) {
      const o = {};
      return o[this.options.attributesGroupName] = s, o;
    }
    return s;
  }
}
const be = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const e = new b("!xml");
  let n = e, r = "", i = "";
  const s = new ne(this.options.processEntities);
  for (let o = 0; o < t.length; o++)
    if (t[o] === "<")
      if (t[o + 1] === "/") {
        const f = T(t, ">", o, "Closing Tag is not closed.");
        let u = t.substring(o + 2, f).trim();
        if (this.options.removeNSPrefix) {
          const h = u.indexOf(":");
          h !== -1 && (u = u.substr(h + 1));
        }
        this.options.transformTagName && (u = this.options.transformTagName(u)), n && (r = this.saveTextToParentTag(r, n, i));
        const d = i.substring(i.lastIndexOf(".") + 1);
        if (u && this.options.unpairedTags.indexOf(u) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${u}>`);
        let a = 0;
        d && this.options.unpairedTags.indexOf(d) !== -1 ? (a = i.lastIndexOf(".", i.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : a = i.lastIndexOf("."), i = i.substring(0, a), n = this.tagsNodeStack.pop(), r = "", o = f;
      } else if (t[o + 1] === "?") {
        let f = S(t, o, !1, "?>");
        if (!f) throw new Error("Pi Tag is not closed.");
        if (r = this.saveTextToParentTag(r, n, i), !(this.options.ignoreDeclaration && f.tagName === "?xml" || this.options.ignorePiTags)) {
          const u = new b(f.tagName);
          u.add(this.options.textNodeName, ""), f.tagName !== f.tagExp && f.attrExpPresent && (u[":@"] = this.buildAttributesMap(f.tagExp, i, f.tagName)), this.addChild(n, u, i, o);
        }
        o = f.closeIndex + 1;
      } else if (t.substr(o + 1, 3) === "!--") {
        const f = T(t, "-->", o + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const u = t.substring(o + 4, f - 2);
          r = this.saveTextToParentTag(r, n, i), n.add(this.options.commentPropName, [{ [this.options.textNodeName]: u }]);
        }
        o = f;
      } else if (t.substr(o + 1, 2) === "!D") {
        const f = s.readDocType(t, o);
        this.docTypeEntities = f.entities, o = f.i;
      } else if (t.substr(o + 1, 2) === "![") {
        const f = T(t, "]]>", o, "CDATA is not closed.") - 2, u = t.substring(o + 9, f);
        r = this.saveTextToParentTag(r, n, i);
        let d = this.parseTextData(u, n.tagname, i, !0, !1, !0, !0);
        d == null && (d = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [{ [this.options.textNodeName]: u }]) : n.add(this.options.textNodeName, d), o = f + 2;
      } else {
        let f = S(t, o, this.options.removeNSPrefix), u = f.tagName;
        const d = f.rawTagName;
        let a = f.tagExp, h = f.attrExpPresent, w = f.closeIndex;
        this.options.transformTagName && (u = this.options.transformTagName(u)), n && r && n.tagname !== "!xml" && (r = this.saveTextToParentTag(r, n, i, !1));
        const _ = n;
        _ && this.options.unpairedTags.indexOf(_.tagname) !== -1 && (n = this.tagsNodeStack.pop(), i = i.substring(0, i.lastIndexOf("."))), u !== e.tagname && (i += i ? "." + u : u);
        const v = o;
        if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, i, u)) {
          let E = "";
          if (a.length > 0 && a.lastIndexOf("/") === a.length - 1)
            u[u.length - 1] === "/" ? (u = u.substr(0, u.length - 1), i = i.substr(0, i.length - 1), a = u) : a = a.substr(0, a.length - 1), o = f.closeIndex;
          else if (this.options.unpairedTags.indexOf(u) !== -1)
            o = f.closeIndex;
          else {
            const O = this.readStopNodeData(t, d, w + 1);
            if (!O) throw new Error(`Unexpected end of ${d}`);
            o = O.i, E = O.tagContent;
          }
          const C = new b(u);
          u !== a && h && (C[":@"] = this.buildAttributesMap(a, i, u)), E && (E = this.parseTextData(E, u, i, !0, h, !0, !0)), i = i.substr(0, i.lastIndexOf(".")), C.add(this.options.textNodeName, E), this.addChild(n, C, i, v);
        } else {
          if (a.length > 0 && a.lastIndexOf("/") === a.length - 1) {
            u[u.length - 1] === "/" ? (u = u.substr(0, u.length - 1), i = i.substr(0, i.length - 1), a = u) : a = a.substr(0, a.length - 1), this.options.transformTagName && (u = this.options.transformTagName(u));
            const E = new b(u);
            u !== a && h && (E[":@"] = this.buildAttributesMap(a, i, u)), this.addChild(n, E, i, v), i = i.substr(0, i.lastIndexOf("."));
          } else {
            const E = new b(u);
            this.tagsNodeStack.push(n), u !== a && h && (E[":@"] = this.buildAttributesMap(a, i, u)), this.addChild(n, E, i, v), n = E;
          }
          r = "", o = w;
        }
      }
    else
      r += t[o];
  return e.child;
};
function Te(t, e, n, r) {
  this.options.captureMetaData || (r = void 0);
  const i = this.options.updateTag(e.tagname, n, e[":@"]);
  i === !1 || (typeof i == "string" && (e.tagname = i), t.addChild(e, r));
}
const we = function(t) {
  if (this.options.processEntities) {
    for (let e in this.docTypeEntities) {
      const n = this.docTypeEntities[e];
      t = t.replace(n.regx, n.val);
    }
    for (let e in this.lastEntities) {
      const n = this.lastEntities[e];
      t = t.replace(n.regex, n.val);
    }
    if (this.options.htmlEntities)
      for (let e in this.htmlEntities) {
        const n = this.htmlEntities[e];
        t = t.replace(n.regex, n.val);
      }
    t = t.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return t;
};
function Ie(t, e, n, r) {
  return t && (r === void 0 && (r = e.child.length === 0), t = this.parseTextData(
    t,
    e.tagname,
    n,
    !1,
    e[":@"] ? Object.keys(e[":@"]).length !== 0 : !1,
    r
  ), t !== void 0 && t !== "" && e.add(this.options.textNodeName, t), t = ""), t;
}
function me(t, e, n, r) {
  return !!(e && e.has(r) || t && t.has(n));
}
function ye(t, e, n = ">") {
  let r, i = "";
  for (let s = e; s < t.length; s++) {
    let o = t[s];
    if (r)
      o === r && (r = "");
    else if (o === '"' || o === "'")
      r = o;
    else if (o === n[0])
      if (n[1]) {
        if (t[s + 1] === n[1])
          return {
            data: i,
            index: s
          };
      } else
        return {
          data: i,
          index: s
        };
    else o === "	" && (o = " ");
    i += o;
  }
}
function T(t, e, n, r) {
  const i = t.indexOf(e, n);
  if (i === -1)
    throw new Error(r);
  return i + e.length - 1;
}
function S(t, e, n, r = ">") {
  const i = ye(t, e + 1, r);
  if (!i) return;
  let s = i.data;
  const o = i.index, l = s.search(/\s/);
  let f = s, u = !0;
  l !== -1 && (f = s.substring(0, l), s = s.substring(l + 1).trimStart());
  const d = f;
  if (n) {
    const a = f.indexOf(":");
    a !== -1 && (f = f.substr(a + 1), u = f !== i.data.substr(a + 1));
  }
  return {
    tagName: f,
    tagExp: s,
    closeIndex: o,
    attrExpPresent: u,
    rawTagName: d
  };
}
function Ae(t, e, n) {
  const r = n;
  let i = 1;
  for (; n < t.length; n++)
    if (t[n] === "<")
      if (t[n + 1] === "/") {
        const s = T(t, ">", n, `${e} is not closed`);
        if (t.substring(n + 2, s).trim() === e && (i--, i === 0))
          return {
            tagContent: t.substring(r, n),
            i: s
          };
        n = s;
      } else if (t[n + 1] === "?")
        n = T(t, "?>", n + 1, "StopNode is not closed.");
      else if (t.substr(n + 1, 3) === "!--")
        n = T(t, "-->", n + 3, "StopNode is not closed.");
      else if (t.substr(n + 1, 2) === "![")
        n = T(t, "]]>", n, "StopNode is not closed.") - 2;
      else {
        const s = S(t, n, ">");
        s && ((s && s.tagName) === e && s.tagExp[s.tagExp.length - 1] !== "/" && i++, n = s.closeIndex);
      }
}
function V(t, e, n) {
  if (e && typeof t == "string") {
    const r = t.trim();
    return r === "true" ? !0 : r === "false" ? !1 : oe(t, n);
  } else
    return Q(t) ? t : "";
}
const P = b.getMetaDataSymbol();
function ve(t, e) {
  return j(t, e);
}
function j(t, e, n) {
  let r;
  const i = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s], l = Ce(o);
    let f = "";
    if (n === void 0 ? f = l : f = n + "." + l, l === e.textNodeName)
      r === void 0 ? r = o[l] : r += "" + o[l];
    else {
      if (l === void 0)
        continue;
      if (o[l]) {
        let u = j(o[l], e, f);
        const d = Pe(u, e);
        o[P] !== void 0 && (u[P] = o[P]), o[":@"] ? Oe(u, o[":@"], f, e) : Object.keys(u).length === 1 && u[e.textNodeName] !== void 0 && !e.alwaysCreateTextNode ? u = u[e.textNodeName] : Object.keys(u).length === 0 && (e.alwaysCreateTextNode ? u[e.textNodeName] = "" : u = ""), i[l] !== void 0 && i.hasOwnProperty(l) ? (Array.isArray(i[l]) || (i[l] = [i[l]]), i[l].push(u)) : e.isArray(l, f, d) ? i[l] = [u] : i[l] = u;
      }
    }
  }
  return typeof r == "string" ? r.length > 0 && (i[e.textNodeName] = r) : r !== void 0 && (i[e.textNodeName] = r), i;
}
function Ce(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (r !== ":@") return r;
  }
}
function Oe(t, e, n, r) {
  if (e) {
    const i = Object.keys(e), s = i.length;
    for (let o = 0; o < s; o++) {
      const l = i[o];
      r.isArray(l, n + "." + l, !0, !0) ? t[l] = [e[l]] : t[l] = e[l];
    }
  }
}
function Pe(t, e) {
  const { textNodeName: n } = e, r = Object.keys(t).length;
  return !!(r === 0 || r === 1 && (t[n] || typeof t[n] == "boolean" || t[n] === 0));
}
class ke {
  constructor(e) {
    this.externalEntities = {}, this.options = te(e);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Uint8Array} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(e, n) {
    if (typeof e != "string" && e.toString)
      e = e.toString();
    else if (typeof e != "string")
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (n) {
      n === !0 && (n = {});
      const s = W(e, n);
      if (s !== !0)
        throw Error(`${s.err.msg}:${s.err.line}:${s.err.col}`);
    }
    const r = new ce(this.options);
    r.addExternalEntities(this.externalEntities);
    const i = r.parseXml(e);
    return this.options.preserveOrder || i === void 0 ? i : ve(i, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(e, n) {
    if (n.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (n === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[e] = n;
  }
  /**
   * Returns a Symbol that can be used to access the metadata
   * property on a node.
   * 
   * If Symbol is not available in the environment, an ordinary property is used
   * and the name of the property is here returned.
   * 
   * The XMLMetaData property is only present when `captureMetaData`
   * is true in the options.
   */
  static getMetaDataSymbol() {
    return b.getMetaDataSymbol();
  }
}
function Se(t) {
  if (!t || !t.ClickThrough) return "";
  const e = t.ClickThrough;
  return typeof e == "string" ? e.trim() : e["#text"] ? e["#text"].trim() : (console.warn("VideoClicks has unexpected structure:", t), "");
}
function Ve(t) {
  const e = [];
  if (!t?.Companion) return e;
  const n = Array.isArray(t.Companion) ? t.Companion : [t.Companion];
  for (const r of n) {
    const i = Number.parseInt(r["@_width"], 10), s = Number.parseInt(r["@_height"], 10), o = r.StaticResource["#text"].trim(), l = _e(
      r.CompanionClickThrough
    );
    e.push({
      width: i,
      height: s,
      imageUrl: o,
      clickThroughUrl: l
    });
  }
  return e;
}
function _e(t) {
  return t ? typeof t == "string" ? t.trim() : t["#text"] ? t["#text"].trim() : (console.warn("CompanionClickThrough has unexpected structure:", t), "") : "";
}
function Me(t) {
  let e, n;
  if (Array.isArray(t)) {
    for (const r of t)
      if (r.Linear && !e && (e = r.Linear), r.CompanionAds && !n && (n = r.CompanionAds), e && n) break;
  } else
    e = t.Linear, n = t.CompanionAds;
  return { linear: e, companionAds: n };
}
function Fe(t) {
  if (typeof t == "number")
    return t;
  if (typeof t == "string")
    if (t.includes(":")) {
      const e = t.split(":");
      if (e.length === 3) {
        const [n, r, i] = e;
        return Number.parseInt(n, 10) * 3600 + Number.parseInt(r, 10) * 60 + Number.parseFloat(i);
      }
    } else {
      const e = Number.parseFloat(t);
      if (!Number.isNaN(e))
        return e;
    }
  return console.warn(`Invalid duration format: ${t}. Returning 0.`), 0;
}
function Le(t) {
  if (!t) return "";
  const e = t.MediaFile;
  return Array.isArray(e) ? e[0]["#text"].trim() : e?.["#text"] ? e["#text"].trim() : "";
}
function $e(t, e) {
  const n = {
    impression: [],
    start: [],
    firstQuartile: [],
    midpoint: [],
    thirdQuartile: [],
    complete: []
  };
  if (t && (n.impression = Array.isArray(t) ? t.map((i) => i.trim()) : [t.trim()]), !e?.Tracking) return n;
  const r = Array.isArray(e.Tracking) ? e.Tracking : [e.Tracking];
  for (const i of r) {
    const s = i["@_event"].toLowerCase(), o = i["#text"].trim();
    switch (s) {
      case "start":
        n.start.push(o);
        break;
      case "firstquartile":
        n.firstQuartile.push(o);
        break;
      case "midpoint":
        n.midpoint.push(o);
        break;
      case "thirdquartile":
        n.thirdQuartile.push(o);
        break;
      case "complete":
        n.complete.push(o);
        break;
      case "progress":
        Ue(i, o, n);
        break;
      default:
        console.warn(`Unhandled tracking event: ${s}`);
        break;
    }
  }
  return n;
}
function Ue(t, e, n) {
  const r = t["@_offset"];
  switch (r) {
    case "0%":
      n.start.push(e);
      break;
    case "25%":
      n.firstQuartile.push(e);
      break;
    case "50%":
      n.midpoint.push(e);
      break;
    case "75%":
      n.thirdQuartile.push(e);
      break;
    default:
      console.warn(`Unhandled progress offset: ${r}`);
      break;
  }
}
function Re(t) {
  const r = new ke({
    ignoreAttributes: !1,
    attributeNamePrefix: "@_"
  }).parse(t).VAST?.Ad;
  if (!r)
    throw new Error("No Ad found in VAST XML");
  const i = r["@_adType"] || "unknown", s = r.InLine;
  if (!s)
    throw new Error("No InLine element found in Ad");
  if (s.Creatives === "" || !s.Creatives.Creative)
    throw new Error("No Creative element found in Creatives");
  const o = Me(s.Creatives.Creative), l = o.linear, f = o.companionAds;
  if (!l)
    throw new Error("No Linear element found in Creative");
  const u = Le(l.MediaFiles), d = Fe(l.Duration), a = Se(l.VideoClicks), h = $e(
    s.Impression,
    l.TrackingEvents
  ), w = Ve(f);
  return {
    adType: i,
    mediaUrl: u,
    duration: d,
    clickThroughUrl: a,
    trackingEvents: h,
    companionAds: w.length > 0 ? w : void 0
  };
}
async function je(t) {
  const e = await fetch(
    `/v1/vast?media_id=${t.mediaId}&ad_slot_id=${t.adSlotId}`
  );
  if (!e.ok)
    throw new Error("Failed to fetch VAST XML");
  const n = await e.text();
  return Re(n);
}
function Be(t) {
  if (!t.vastData?.companionAds?.[0] || !t.config.companionContainer)
    return t;
  const e = t.vastData.companionAds[0], n = document.createElement("img");
  return n.src = e.imageUrl, n.width = e.width, n.height = e.height, n.style.objectFit = "contain", n.addEventListener("click", () => {
    window.open(e.clickThroughUrl, "_blank");
  }), t.config.companionContainer.appendChild(n), { ...t, companionElement: n };
}
function Xe(t) {
  if (!t.vastData) return t;
  const e = t.vastData.adType === "video" ? document.createElement("video") : document.createElement("audio");
  return e.src = t.vastData.mediaUrl, e.style.width = "100%", e.style.height = "100%", e.setAttribute("playsinline", ""), e.addEventListener("click", () => Ye(t)), t.config.containerElement.appendChild(e), { ...t, mediaElement: e };
}
function Ye(t) {
  t.vastData && window.open(t.vastData.clickThroughUrl, "_blank");
}
function Qe(t) {
  if (!t.vastData || !t.mediaElement) return t;
  const { trackingEvents: e } = t.vastData, n = {
    start: !1,
    firstQuartile: !1,
    midpoint: !1,
    thirdQuartile: !1,
    complete: !1
  };
  k(e.impression);
  const r = [
    { event: "start", threshold: 0 },
    { event: "firstQuartile", threshold: 0.25 },
    { event: "midpoint", threshold: 0.5 },
    { event: "thirdQuartile", threshold: 0.75 }
  ];
  return t.mediaElement.addEventListener("timeupdate", () => {
    if (!t.vastData || !t.mediaElement) return;
    const i = t.mediaElement.currentTime / t.vastData.duration;
    for (const { event: s, threshold: o } of r)
      i >= o && !n[s] && (k(e[s]), n[s] = !0);
  }), t.mediaElement.addEventListener("ended", () => {
    n.complete || (k(e.complete), n.complete = !0);
  }), t;
}
function k(t) {
  for (const e of t)
    fetch(e, { method: "GET", mode: "no-cors", credentials: "include" });
}
async function Ze(t) {
  const e = {
    config: t,
    vastData: null,
    mediaElement: null,
    companionElement: null
  }, n = await je(t);
  let r = { ...e, vastData: n };
  return r = Xe(r), r = Be(r), r = Qe(r), r;
}
function We(t) {
  if (!t.vastData || !t.mediaElement)
    throw new Error("Ad not loaded");
  t.mediaElement.play();
}
function qe(t) {
  t.mediaElement && t.mediaElement.pause();
}
function Ge(t, e) {
  t.mediaElement && (t.mediaElement.volume = Math.max(0, Math.min(1, e)));
}
export {
  Ze as initializeAdSDK,
  qe as pause,
  We as play,
  Ge as setVolume
};
