const pe = "";
var $ = {}, q = {}, D;
function z() {
  return D || (D = 1, function(o) {
    const f = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", l = f + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", T = "[" + f + "][" + l + "]*", I = new RegExp("^" + T + "$"), m = function(n, r) {
      const t = [];
      let e = r.exec(n);
      for (; e; ) {
        const d = [];
        d.startIndex = r.lastIndex - e[0].length;
        const h = e.length;
        for (let N = 0; N < h; N++)
          d.push(e[N]);
        t.push(d), e = r.exec(n);
      }
      return t;
    }, b = function(n) {
      const r = I.exec(n);
      return !(r === null || typeof r > "u");
    };
    o.isExist = function(n) {
      return typeof n < "u";
    }, o.isEmptyObject = function(n) {
      return Object.keys(n).length === 0;
    }, o.merge = function(n, r, t) {
      if (r) {
        const e = Object.keys(r), d = e.length;
        for (let h = 0; h < d; h++)
          t === "strict" ? n[e[h]] = [r[e[h]]] : n[e[h]] = r[e[h]];
      }
    }, o.getValue = function(n) {
      return o.isExist(n) ? n : "";
    }, o.isName = b, o.getAllMatches = m, o.nameRegexp = T;
  }(q)), q;
}
var ee;
function de() {
  if (ee) return $;
  ee = 1;
  const o = z(), f = {
    allowBooleanAttributes: !1,
    //A tag can have attributes without any value
    unpairedTags: []
  };
  $.validate = function(s, a) {
    a = Object.assign({}, f, a);
    const y = [];
    let x = !1, i = !1;
    s[0] === "\uFEFF" && (s = s.substr(1));
    for (let u = 0; u < s.length; u++)
      if (s[u] === "<" && s[u + 1] === "?") {
        if (u += 2, u = T(s, u), u.err) return u;
      } else if (s[u] === "<") {
        let c = u;
        if (u++, s[u] === "!") {
          u = I(s, u);
          continue;
        } else {
          let w = !1;
          s[u] === "/" && (w = !0, u++);
          let p = "";
          for (; u < s.length && s[u] !== ">" && s[u] !== " " && s[u] !== "	" && s[u] !== `
` && s[u] !== "\r"; u++)
            p += s[u];
          if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), u--), !C(p)) {
            let A;
            return p.trim().length === 0 ? A = "Invalid space after '<'." : A = "Tag '" + p + "' is an invalid name.", h("InvalidTag", A, v(s, u));
          }
          const E = n(s, u);
          if (E === !1)
            return h("InvalidAttr", "Attributes for '" + p + "' have open quote.", v(s, u));
          let P = E.value;
          if (u = E.index, P[P.length - 1] === "/") {
            const A = u - P.length;
            P = P.substring(0, P.length - 1);
            const g = t(P, a);
            if (g === !0)
              x = !0;
            else
              return h(g.err.code, g.err.msg, v(s, A + g.err.line));
          } else if (w)
            if (E.tagClosed) {
              if (P.trim().length > 0)
                return h("InvalidTag", "Closing tag '" + p + "' can't have attributes or invalid starting.", v(s, c));
              if (y.length === 0)
                return h("InvalidTag", "Closing tag '" + p + "' has not been opened.", v(s, c));
              {
                const A = y.pop();
                if (p !== A.tagName) {
                  let g = v(s, A.tagStartPos);
                  return h(
                    "InvalidTag",
                    "Expected closing tag '" + A.tagName + "' (opened in line " + g.line + ", col " + g.col + ") instead of closing tag '" + p + "'.",
                    v(s, c)
                  );
                }
                y.length == 0 && (i = !0);
              }
            } else return h("InvalidTag", "Closing tag '" + p + "' doesn't have proper closing.", v(s, u));
          else {
            const A = t(P, a);
            if (A !== !0)
              return h(A.err.code, A.err.msg, v(s, u - P.length + A.err.line));
            if (i === !0)
              return h("InvalidXml", "Multiple possible root nodes found.", v(s, u));
            a.unpairedTags.indexOf(p) !== -1 || y.push({ tagName: p, tagStartPos: c }), x = !0;
          }
          for (u++; u < s.length; u++)
            if (s[u] === "<")
              if (s[u + 1] === "!") {
                u++, u = I(s, u);
                continue;
              } else if (s[u + 1] === "?") {
                if (u = T(s, ++u), u.err) return u;
              } else
                break;
            else if (s[u] === "&") {
              const A = d(s, u);
              if (A == -1)
                return h("InvalidChar", "char '&' is not expected.", v(s, u));
              u = A;
            } else if (i === !0 && !l(s[u]))
              return h("InvalidXml", "Extra text at the end", v(s, u));
          s[u] === "<" && u--;
        }
      } else {
        if (l(s[u]))
          continue;
        return h("InvalidChar", "char '" + s[u] + "' is not expected.", v(s, u));
      }
    if (x) {
      if (y.length == 1)
        return h("InvalidTag", "Unclosed tag '" + y[0].tagName + "'.", v(s, y[0].tagStartPos));
      if (y.length > 0)
        return h("InvalidXml", "Invalid '" + JSON.stringify(y.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
    } else return h("InvalidXml", "Start tag expected.", 1);
    return !0;
  };
  function l(s) {
    return s === " " || s === "	" || s === `
` || s === "\r";
  }
  function T(s, a) {
    const y = a;
    for (; a < s.length; a++)
      if (s[a] == "?" || s[a] == " ") {
        const x = s.substr(y, a - y);
        if (a > 5 && x === "xml")
          return h("InvalidXml", "XML declaration allowed only at the start of the document.", v(s, a));
        if (s[a] == "?" && s[a + 1] == ">") {
          a++;
          break;
        } else
          continue;
      }
    return a;
  }
  function I(s, a) {
    if (s.length > a + 5 && s[a + 1] === "-" && s[a + 2] === "-") {
      for (a += 3; a < s.length; a++)
        if (s[a] === "-" && s[a + 1] === "-" && s[a + 2] === ">") {
          a += 2;
          break;
        }
    } else if (s.length > a + 8 && s[a + 1] === "D" && s[a + 2] === "O" && s[a + 3] === "C" && s[a + 4] === "T" && s[a + 5] === "Y" && s[a + 6] === "P" && s[a + 7] === "E") {
      let y = 1;
      for (a += 8; a < s.length; a++)
        if (s[a] === "<")
          y++;
        else if (s[a] === ">" && (y--, y === 0))
          break;
    } else if (s.length > a + 9 && s[a + 1] === "[" && s[a + 2] === "C" && s[a + 3] === "D" && s[a + 4] === "A" && s[a + 5] === "T" && s[a + 6] === "A" && s[a + 7] === "[") {
      for (a += 8; a < s.length; a++)
        if (s[a] === "]" && s[a + 1] === "]" && s[a + 2] === ">") {
          a += 2;
          break;
        }
    }
    return a;
  }
  const m = '"', b = "'";
  function n(s, a) {
    let y = "", x = "", i = !1;
    for (; a < s.length; a++) {
      if (s[a] === m || s[a] === b)
        x === "" ? x = s[a] : x !== s[a] || (x = "");
      else if (s[a] === ">" && x === "") {
        i = !0;
        break;
      }
      y += s[a];
    }
    return x !== "" ? !1 : {
      value: y,
      index: a,
      tagClosed: i
    };
  }
  const r = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function t(s, a) {
    const y = o.getAllMatches(s, r), x = {};
    for (let i = 0; i < y.length; i++) {
      if (y[i][1].length === 0)
        return h("InvalidAttr", "Attribute '" + y[i][2] + "' has no space in starting.", V(y[i]));
      if (y[i][3] !== void 0 && y[i][4] === void 0)
        return h("InvalidAttr", "Attribute '" + y[i][2] + "' is without value.", V(y[i]));
      if (y[i][3] === void 0 && !a.allowBooleanAttributes)
        return h("InvalidAttr", "boolean attribute '" + y[i][2] + "' is not allowed.", V(y[i]));
      const u = y[i][2];
      if (!N(u))
        return h("InvalidAttr", "Attribute '" + u + "' is an invalid name.", V(y[i]));
      if (!x.hasOwnProperty(u))
        x[u] = 1;
      else
        return h("InvalidAttr", "Attribute '" + u + "' is repeated.", V(y[i]));
    }
    return !0;
  }
  function e(s, a) {
    let y = /\d/;
    for (s[a] === "x" && (a++, y = /[\da-fA-F]/); a < s.length; a++) {
      if (s[a] === ";")
        return a;
      if (!s[a].match(y))
        break;
    }
    return -1;
  }
  function d(s, a) {
    if (a++, s[a] === ";")
      return -1;
    if (s[a] === "#")
      return a++, e(s, a);
    let y = 0;
    for (; a < s.length; a++, y++)
      if (!(s[a].match(/\w/) && y < 20)) {
        if (s[a] === ";")
          break;
        return -1;
      }
    return a;
  }
  function h(s, a, y) {
    return {
      err: {
        code: s,
        msg: a,
        line: y.line || y,
        col: y.col
      }
    };
  }
  function N(s) {
    return o.isName(s);
  }
  function C(s) {
    return o.isName(s);
  }
  function v(s, a) {
    const y = s.substring(0, a).split(/\r?\n/);
    return {
      line: y.length,
      // column number is last line's length + 1, because column numbering starts at 1:
      col: y[y.length - 1].length + 1
    };
  }
  function V(s) {
    return s.startIndex + s[1].length;
  }
  return $;
}
var F = {}, te;
function ge() {
  if (te) return F;
  te = 1;
  const o = {
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
    tagValueProcessor: function(l, T) {
      return T;
    },
    attributeValueProcessor: function(l, T) {
      return T;
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
    updateTag: function(l, T, I) {
      return l;
    }
    // skipEmptyListItem: false
  }, f = function(l) {
    return Object.assign({}, o, l);
  };
  return F.buildOptions = f, F.defaultOptions = o, F;
}
var X, ne;
function Ne() {
  if (ne) return X;
  ne = 1;
  class o {
    constructor(l) {
      this.tagname = l, this.child = [], this[":@"] = {};
    }
    add(l, T) {
      l === "__proto__" && (l = "#__proto__"), this.child.push({ [l]: T });
    }
    addChild(l) {
      l.tagname === "__proto__" && (l.tagname = "#__proto__"), l[":@"] && Object.keys(l[":@"]).length > 0 ? this.child.push({ [l.tagname]: l.child, ":@": l[":@"] }) : this.child.push({ [l.tagname]: l.child });
    }
  }
  return X = o, X;
}
var M, re;
function me() {
  if (re) return M;
  re = 1;
  const o = z();
  function f(t, e) {
    const d = {};
    if (t[e + 3] === "O" && t[e + 4] === "C" && t[e + 5] === "T" && t[e + 6] === "Y" && t[e + 7] === "P" && t[e + 8] === "E") {
      e = e + 9;
      let h = 1, N = !1, C = !1, v = "";
      for (; e < t.length; e++)
        if (t[e] === "<" && !C) {
          if (N && I(t, e)) {
            e += 7;
            let V, s;
            [V, s, e] = l(t, e + 1), s.indexOf("&") === -1 && (d[r(V)] = {
              regx: RegExp(`&${V};`, "g"),
              val: s
            });
          } else if (N && m(t, e)) e += 8;
          else if (N && b(t, e)) e += 8;
          else if (N && n(t, e)) e += 9;
          else if (T) C = !0;
          else throw new Error("Invalid DOCTYPE");
          h++, v = "";
        } else if (t[e] === ">") {
          if (C ? t[e - 1] === "-" && t[e - 2] === "-" && (C = !1, h--) : h--, h === 0)
            break;
        } else t[e] === "[" ? N = !0 : v += t[e];
      if (h !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: d, i: e };
  }
  function l(t, e) {
    let d = "";
    for (; e < t.length && t[e] !== "'" && t[e] !== '"'; e++)
      d += t[e];
    if (d = d.trim(), d.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    const h = t[e++];
    let N = "";
    for (; e < t.length && t[e] !== h; e++)
      N += t[e];
    return [d, N, e];
  }
  function T(t, e) {
    return t[e + 1] === "!" && t[e + 2] === "-" && t[e + 3] === "-";
  }
  function I(t, e) {
    return t[e + 1] === "!" && t[e + 2] === "E" && t[e + 3] === "N" && t[e + 4] === "T" && t[e + 5] === "I" && t[e + 6] === "T" && t[e + 7] === "Y";
  }
  function m(t, e) {
    return t[e + 1] === "!" && t[e + 2] === "E" && t[e + 3] === "L" && t[e + 4] === "E" && t[e + 5] === "M" && t[e + 6] === "E" && t[e + 7] === "N" && t[e + 8] === "T";
  }
  function b(t, e) {
    return t[e + 1] === "!" && t[e + 2] === "A" && t[e + 3] === "T" && t[e + 4] === "T" && t[e + 5] === "L" && t[e + 6] === "I" && t[e + 7] === "S" && t[e + 8] === "T";
  }
  function n(t, e) {
    return t[e + 1] === "!" && t[e + 2] === "N" && t[e + 3] === "O" && t[e + 4] === "T" && t[e + 5] === "A" && t[e + 6] === "T" && t[e + 7] === "I" && t[e + 8] === "O" && t[e + 9] === "N";
  }
  function r(t) {
    if (o.isName(t))
      return t;
    throw new Error(`Invalid entity name ${t}`);
  }
  return M = f, M;
}
var B, se;
function be() {
  if (se) return B;
  se = 1;
  const o = /^[-+]?0x[a-fA-F0-9]+$/, f = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
  !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
  const l = {
    hex: !0,
    leadingZeros: !0,
    decimalPoint: ".",
    eNotation: !0
    //skipLike: /regex/
  };
  function T(m, b = {}) {
    if (b = Object.assign({}, l, b), !m || typeof m != "string") return m;
    let n = m.trim();
    if (b.skipLike !== void 0 && b.skipLike.test(n)) return m;
    if (b.hex && o.test(n))
      return Number.parseInt(n, 16);
    {
      const r = f.exec(n);
      if (r) {
        const t = r[1], e = r[2];
        let d = I(r[3]);
        const h = r[4] || r[6];
        if (!b.leadingZeros && e.length > 0 && t && n[2] !== ".") return m;
        if (!b.leadingZeros && e.length > 0 && !t && n[1] !== ".") return m;
        {
          const N = Number(n), C = "" + N;
          return C.search(/[eE]/) !== -1 || h ? b.eNotation ? N : m : n.indexOf(".") !== -1 ? C === "0" && d === "" || C === d || t && C === "-" + d ? N : m : e ? d === C || t + d === C ? N : m : n === C || n === t + C ? N : m;
        }
      } else
        return m;
    }
  }
  function I(m) {
    return m && m.indexOf(".") !== -1 && (m = m.replace(/0+$/, ""), m === "." ? m = "0" : m[0] === "." ? m = "0" + m : m[m.length - 1] === "." && (m = m.substr(0, m.length - 1))), m;
  }
  return B = T, B;
}
var U, ie;
function he() {
  if (ie) return U;
  ie = 1;
  function o(f) {
    return typeof f == "function" ? f : Array.isArray(f) ? (l) => {
      for (const T of f)
        if (typeof T == "string" && l === T || T instanceof RegExp && T.test(l))
          return !0;
    } : () => !1;
  }
  return U = o, U;
}
var G, oe;
function Ee() {
  if (oe) return G;
  oe = 1;
  const o = z(), f = Ne(), l = me(), T = be(), I = he();
  class m {
    constructor(u) {
      this.options = u, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
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
        num_dec: { regex: /&#([0-9]{1,7});/g, val: (c, w) => String.fromCharCode(Number.parseInt(w, 10)) },
        num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (c, w) => String.fromCharCode(Number.parseInt(w, 16)) }
      }, this.addExternalEntities = b, this.parseXml = d, this.parseTextData = n, this.resolveNameSpace = r, this.buildAttributesMap = e, this.isItStopNode = v, this.replaceEntitiesValue = N, this.readStopNodeData = y, this.saveTextToParentTag = C, this.addChild = h, this.ignoreAttributesFn = I(this.options.ignoreAttributes);
    }
  }
  function b(i) {
    const u = Object.keys(i);
    for (let c = 0; c < u.length; c++) {
      const w = u[c];
      this.lastEntities[w] = {
        regex: new RegExp("&" + w + ";", "g"),
        val: i[w]
      };
    }
  }
  function n(i, u, c, w, p, E, P) {
    if (i !== void 0 && (this.options.trimValues && !w && (i = i.trim()), i.length > 0)) {
      P || (i = this.replaceEntitiesValue(i));
      const A = this.options.tagValueProcessor(u, i, c, p, E);
      return A == null ? i : typeof A != typeof i || A !== i ? A : this.options.trimValues ? x(i, this.options.parseTagValue, this.options.numberParseOptions) : i.trim() === i ? x(i, this.options.parseTagValue, this.options.numberParseOptions) : i;
    }
  }
  function r(i) {
    if (this.options.removeNSPrefix) {
      const u = i.split(":"), c = i.charAt(0) === "/" ? "/" : "";
      if (u[0] === "xmlns")
        return "";
      u.length === 2 && (i = c + u[1]);
    }
    return i;
  }
  const t = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function e(i, u, c) {
    if (this.options.ignoreAttributes !== !0 && typeof i == "string") {
      const w = o.getAllMatches(i, t), p = w.length, E = {};
      for (let P = 0; P < p; P++) {
        const A = this.resolveNameSpace(w[P][1]);
        if (this.ignoreAttributesFn(A, u))
          continue;
        let g = w[P][4], k = this.options.attributeNamePrefix + A;
        if (A.length)
          if (this.options.transformAttributeName && (k = this.options.transformAttributeName(k)), k === "__proto__" && (k = "#__proto__"), g !== void 0) {
            this.options.trimValues && (g = g.trim()), g = this.replaceEntitiesValue(g);
            const O = this.options.attributeValueProcessor(A, g, u);
            O == null ? E[k] = g : typeof O != typeof g || O !== g ? E[k] = O : E[k] = x(
              g,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          } else this.options.allowBooleanAttributes && (E[k] = !0);
      }
      if (!Object.keys(E).length)
        return;
      if (this.options.attributesGroupName) {
        const P = {};
        return P[this.options.attributesGroupName] = E, P;
      }
      return E;
    }
  }
  const d = function(i) {
    i = i.replace(/\r\n?/g, `
`);
    const u = new f("!xml");
    let c = u, w = "", p = "";
    for (let E = 0; E < i.length; E++)
      if (i[E] === "<")
        if (i[E + 1] === "/") {
          const A = s(i, ">", E, "Closing Tag is not closed.");
          let g = i.substring(E + 2, A).trim();
          if (this.options.removeNSPrefix) {
            const _ = g.indexOf(":");
            _ !== -1 && (g = g.substr(_ + 1));
          }
          this.options.transformTagName && (g = this.options.transformTagName(g)), c && (w = this.saveTextToParentTag(w, c, p));
          const k = p.substring(p.lastIndexOf(".") + 1);
          if (g && this.options.unpairedTags.indexOf(g) !== -1)
            throw new Error(`Unpaired tag can not be used as closing tag: </${g}>`);
          let O = 0;
          k && this.options.unpairedTags.indexOf(k) !== -1 ? (O = p.lastIndexOf(".", p.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : O = p.lastIndexOf("."), p = p.substring(0, O), c = this.tagsNodeStack.pop(), w = "", E = A;
        } else if (i[E + 1] === "?") {
          let A = a(i, E, !1, "?>");
          if (!A) throw new Error("Pi Tag is not closed.");
          if (w = this.saveTextToParentTag(w, c, p), !(this.options.ignoreDeclaration && A.tagName === "?xml" || this.options.ignorePiTags)) {
            const g = new f(A.tagName);
            g.add(this.options.textNodeName, ""), A.tagName !== A.tagExp && A.attrExpPresent && (g[":@"] = this.buildAttributesMap(A.tagExp, p, A.tagName)), this.addChild(c, g, p);
          }
          E = A.closeIndex + 1;
        } else if (i.substr(E + 1, 3) === "!--") {
          const A = s(i, "-->", E + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const g = i.substring(E + 4, A - 2);
            w = this.saveTextToParentTag(w, c, p), c.add(this.options.commentPropName, [{ [this.options.textNodeName]: g }]);
          }
          E = A;
        } else if (i.substr(E + 1, 2) === "!D") {
          const A = l(i, E);
          this.docTypeEntities = A.entities, E = A.i;
        } else if (i.substr(E + 1, 2) === "![") {
          const A = s(i, "]]>", E, "CDATA is not closed.") - 2, g = i.substring(E + 9, A);
          w = this.saveTextToParentTag(w, c, p);
          let k = this.parseTextData(g, c.tagname, p, !0, !1, !0, !0);
          k == null && (k = ""), this.options.cdataPropName ? c.add(this.options.cdataPropName, [{ [this.options.textNodeName]: g }]) : c.add(this.options.textNodeName, k), E = A + 2;
        } else {
          let A = a(i, E, this.options.removeNSPrefix), g = A.tagName;
          const k = A.rawTagName;
          let O = A.tagExp, _ = A.attrExpPresent, H = A.closeIndex;
          this.options.transformTagName && (g = this.options.transformTagName(g)), c && w && c.tagname !== "!xml" && (w = this.saveTextToParentTag(w, c, p, !1));
          const j = c;
          if (j && this.options.unpairedTags.indexOf(j.tagname) !== -1 && (c = this.tagsNodeStack.pop(), p = p.substring(0, p.lastIndexOf("."))), g !== u.tagname && (p += p ? "." + g : g), this.isItStopNode(this.options.stopNodes, p, g)) {
            let S = "";
            if (O.length > 0 && O.lastIndexOf("/") === O.length - 1)
              g[g.length - 1] === "/" ? (g = g.substr(0, g.length - 1), p = p.substr(0, p.length - 1), O = g) : O = O.substr(0, O.length - 1), E = A.closeIndex;
            else if (this.options.unpairedTags.indexOf(g) !== -1)
              E = A.closeIndex;
            else {
              const R = this.readStopNodeData(i, k, H + 1);
              if (!R) throw new Error(`Unexpected end of ${k}`);
              E = R.i, S = R.tagContent;
            }
            const L = new f(g);
            g !== O && _ && (L[":@"] = this.buildAttributesMap(O, p, g)), S && (S = this.parseTextData(S, g, p, !0, _, !0, !0)), p = p.substr(0, p.lastIndexOf(".")), L.add(this.options.textNodeName, S), this.addChild(c, L, p);
          } else {
            if (O.length > 0 && O.lastIndexOf("/") === O.length - 1) {
              g[g.length - 1] === "/" ? (g = g.substr(0, g.length - 1), p = p.substr(0, p.length - 1), O = g) : O = O.substr(0, O.length - 1), this.options.transformTagName && (g = this.options.transformTagName(g));
              const S = new f(g);
              g !== O && _ && (S[":@"] = this.buildAttributesMap(O, p, g)), this.addChild(c, S, p), p = p.substr(0, p.lastIndexOf("."));
            } else {
              const S = new f(g);
              this.tagsNodeStack.push(c), g !== O && _ && (S[":@"] = this.buildAttributesMap(O, p, g)), this.addChild(c, S, p), c = S;
            }
            w = "", E = H;
          }
        }
      else
        w += i[E];
    return u.child;
  };
  function h(i, u, c) {
    const w = this.options.updateTag(u.tagname, c, u[":@"]);
    w === !1 || (typeof w == "string" && (u.tagname = w), i.addChild(u));
  }
  const N = function(i) {
    if (this.options.processEntities) {
      for (let u in this.docTypeEntities) {
        const c = this.docTypeEntities[u];
        i = i.replace(c.regx, c.val);
      }
      for (let u in this.lastEntities) {
        const c = this.lastEntities[u];
        i = i.replace(c.regex, c.val);
      }
      if (this.options.htmlEntities)
        for (let u in this.htmlEntities) {
          const c = this.htmlEntities[u];
          i = i.replace(c.regex, c.val);
        }
      i = i.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return i;
  };
  function C(i, u, c, w) {
    return i && (w === void 0 && (w = Object.keys(u.child).length === 0), i = this.parseTextData(
      i,
      u.tagname,
      c,
      !1,
      u[":@"] ? Object.keys(u[":@"]).length !== 0 : !1,
      w
    ), i !== void 0 && i !== "" && u.add(this.options.textNodeName, i), i = ""), i;
  }
  function v(i, u, c) {
    const w = "*." + c;
    for (const p in i) {
      const E = i[p];
      if (w === E || u === E) return !0;
    }
    return !1;
  }
  function V(i, u, c = ">") {
    let w, p = "";
    for (let E = u; E < i.length; E++) {
      let P = i[E];
      if (w)
        P === w && (w = "");
      else if (P === '"' || P === "'")
        w = P;
      else if (P === c[0])
        if (c[1]) {
          if (i[E + 1] === c[1])
            return {
              data: p,
              index: E
            };
        } else
          return {
            data: p,
            index: E
          };
      else P === "	" && (P = " ");
      p += P;
    }
  }
  function s(i, u, c, w) {
    const p = i.indexOf(u, c);
    if (p === -1)
      throw new Error(w);
    return p + u.length - 1;
  }
  function a(i, u, c, w = ">") {
    const p = V(i, u + 1, w);
    if (!p) return;
    let E = p.data;
    const P = p.index, A = E.search(/\s/);
    let g = E, k = !0;
    A !== -1 && (g = E.substring(0, A), E = E.substring(A + 1).trimStart());
    const O = g;
    if (c) {
      const _ = g.indexOf(":");
      _ !== -1 && (g = g.substr(_ + 1), k = g !== p.data.substr(_ + 1));
    }
    return {
      tagName: g,
      tagExp: E,
      closeIndex: P,
      attrExpPresent: k,
      rawTagName: O
    };
  }
  function y(i, u, c) {
    const w = c;
    let p = 1;
    for (; c < i.length; c++)
      if (i[c] === "<")
        if (i[c + 1] === "/") {
          const E = s(i, ">", c, `${u} is not closed`);
          if (i.substring(c + 2, E).trim() === u && (p--, p === 0))
            return {
              tagContent: i.substring(w, c),
              i: E
            };
          c = E;
        } else if (i[c + 1] === "?")
          c = s(i, "?>", c + 1, "StopNode is not closed.");
        else if (i.substr(c + 1, 3) === "!--")
          c = s(i, "-->", c + 3, "StopNode is not closed.");
        else if (i.substr(c + 1, 2) === "![")
          c = s(i, "]]>", c, "StopNode is not closed.") - 2;
        else {
          const E = a(i, c, ">");
          E && ((E && E.tagName) === u && E.tagExp[E.tagExp.length - 1] !== "/" && p++, c = E.closeIndex);
        }
  }
  function x(i, u, c) {
    if (u && typeof i == "string") {
      const w = i.trim();
      return w === "true" ? !0 : w === "false" ? !1 : T(i, c);
    } else
      return o.isExist(i) ? i : "";
  }
  return G = m, G;
}
var Q = {}, ue;
function Te() {
  if (ue) return Q;
  ue = 1;
  function o(m, b) {
    return f(m, b);
  }
  function f(m, b, n) {
    let r;
    const t = {};
    for (let e = 0; e < m.length; e++) {
      const d = m[e], h = l(d);
      let N = "";
      if (n === void 0 ? N = h : N = n + "." + h, h === b.textNodeName)
        r === void 0 ? r = d[h] : r += "" + d[h];
      else {
        if (h === void 0)
          continue;
        if (d[h]) {
          let C = f(d[h], b, N);
          const v = I(C, b);
          d[":@"] ? T(C, d[":@"], N, b) : Object.keys(C).length === 1 && C[b.textNodeName] !== void 0 && !b.alwaysCreateTextNode ? C = C[b.textNodeName] : Object.keys(C).length === 0 && (b.alwaysCreateTextNode ? C[b.textNodeName] = "" : C = ""), t[h] !== void 0 && t.hasOwnProperty(h) ? (Array.isArray(t[h]) || (t[h] = [t[h]]), t[h].push(C)) : b.isArray(h, N, v) ? t[h] = [C] : t[h] = C;
        }
      }
    }
    return typeof r == "string" ? r.length > 0 && (t[b.textNodeName] = r) : r !== void 0 && (t[b.textNodeName] = r), t;
  }
  function l(m) {
    const b = Object.keys(m);
    for (let n = 0; n < b.length; n++) {
      const r = b[n];
      if (r !== ":@") return r;
    }
  }
  function T(m, b, n, r) {
    if (b) {
      const t = Object.keys(b), e = t.length;
      for (let d = 0; d < e; d++) {
        const h = t[d];
        r.isArray(h, n + "." + h, !0, !0) ? m[h] = [b[h]] : m[h] = b[h];
      }
    }
  }
  function I(m, b) {
    const { textNodeName: n } = b, r = Object.keys(m).length;
    return !!(r === 0 || r === 1 && (m[n] || typeof m[n] == "boolean" || m[n] === 0));
  }
  return Q.prettify = o, Q;
}
var J, ae;
function ye() {
  if (ae) return J;
  ae = 1;
  const { buildOptions: o } = ge(), f = Ee(), { prettify: l } = Te(), T = de();
  class I {
    constructor(b) {
      this.externalEntities = {}, this.options = o(b);
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(b, n) {
      if (typeof b != "string") if (b.toString)
        b = b.toString();
      else
        throw new Error("XML data is accepted in String or Bytes[] form.");
      if (n) {
        n === !0 && (n = {});
        const e = T.validate(b, n);
        if (e !== !0)
          throw Error(`${e.err.msg}:${e.err.line}:${e.err.col}`);
      }
      const r = new f(this.options);
      r.addExternalEntities(this.externalEntities);
      const t = r.parseXml(b);
      return this.options.preserveOrder || t === void 0 ? t : l(t, this.options);
    }
    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(b, n) {
      if (n.indexOf("&") !== -1)
        throw new Error("Entity value can't have '&'");
      if (b.indexOf("&") !== -1 || b.indexOf(";") !== -1)
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (n === "&")
        throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[b] = n;
    }
  }
  return J = I, J;
}
var Z, fe;
function Ae() {
  if (fe) return Z;
  fe = 1;
  const o = `
`;
  function f(n, r) {
    let t = "";
    return r.format && r.indentBy.length > 0 && (t = o), l(n, r, "", t);
  }
  function l(n, r, t, e) {
    let d = "", h = !1;
    for (let N = 0; N < n.length; N++) {
      const C = n[N], v = T(C);
      if (v === void 0) continue;
      let V = "";
      if (t.length === 0 ? V = v : V = `${t}.${v}`, v === r.textNodeName) {
        let i = C[v];
        m(V, r) || (i = r.tagValueProcessor(v, i), i = b(i, r)), h && (d += e), d += i, h = !1;
        continue;
      } else if (v === r.cdataPropName) {
        h && (d += e), d += `<![CDATA[${C[v][0][r.textNodeName]}]]>`, h = !1;
        continue;
      } else if (v === r.commentPropName) {
        d += e + `<!--${C[v][0][r.textNodeName]}-->`, h = !0;
        continue;
      } else if (v[0] === "?") {
        const i = I(C[":@"], r), u = v === "?xml" ? "" : e;
        let c = C[v][0][r.textNodeName];
        c = c.length !== 0 ? " " + c : "", d += u + `<${v}${c}${i}?>`, h = !0;
        continue;
      }
      let s = e;
      s !== "" && (s += r.indentBy);
      const a = I(C[":@"], r), y = e + `<${v}${a}`, x = l(C[v], r, V, s);
      r.unpairedTags.indexOf(v) !== -1 ? r.suppressUnpairedNode ? d += y + ">" : d += y + "/>" : (!x || x.length === 0) && r.suppressEmptyNode ? d += y + "/>" : x && x.endsWith(">") ? d += y + `>${x}${e}</${v}>` : (d += y + ">", x && e !== "" && (x.includes("/>") || x.includes("</")) ? d += e + r.indentBy + x + e : d += x, d += `</${v}>`), h = !0;
    }
    return d;
  }
  function T(n) {
    const r = Object.keys(n);
    for (let t = 0; t < r.length; t++) {
      const e = r[t];
      if (n.hasOwnProperty(e) && e !== ":@")
        return e;
    }
  }
  function I(n, r) {
    let t = "";
    if (n && !r.ignoreAttributes)
      for (let e in n) {
        if (!n.hasOwnProperty(e)) continue;
        let d = r.attributeValueProcessor(e, n[e]);
        d = b(d, r), d === !0 && r.suppressBooleanAttributes ? t += ` ${e.substr(r.attributeNamePrefix.length)}` : t += ` ${e.substr(r.attributeNamePrefix.length)}="${d}"`;
      }
    return t;
  }
  function m(n, r) {
    n = n.substr(0, n.length - r.textNodeName.length - 1);
    let t = n.substr(n.lastIndexOf(".") + 1);
    for (let e in r.stopNodes)
      if (r.stopNodes[e] === n || r.stopNodes[e] === "*." + t) return !0;
    return !1;
  }
  function b(n, r) {
    if (n && n.length > 0 && r.processEntities)
      for (let t = 0; t < r.entities.length; t++) {
        const e = r.entities[t];
        n = n.replace(e.regex, e.val);
      }
    return n;
  }
  return Z = f, Z;
}
var Y, le;
function we() {
  if (le) return Y;
  le = 1;
  const o = Ae(), f = he(), l = {
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
    tagValueProcessor: function(n, r) {
      return r;
    },
    attributeValueProcessor: function(n, r) {
      return r;
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
  function T(n) {
    this.options = Object.assign({}, l, n), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.ignoreAttributesFn = f(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = b), this.processTextOrObjNode = I, this.options.format ? (this.indentate = m, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  T.prototype.build = function(n) {
    return this.options.preserveOrder ? o(n, this.options) : (Array.isArray(n) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (n = {
      [this.options.arrayNodeName]: n
    }), this.j2x(n, 0, []).val);
  }, T.prototype.j2x = function(n, r, t) {
    let e = "", d = "";
    const h = t.join(".");
    for (let N in n)
      if (Object.prototype.hasOwnProperty.call(n, N))
        if (typeof n[N] > "u")
          this.isAttribute(N) && (d += "");
        else if (n[N] === null)
          this.isAttribute(N) ? d += "" : N[0] === "?" ? d += this.indentate(r) + "<" + N + "?" + this.tagEndChar : d += this.indentate(r) + "<" + N + "/" + this.tagEndChar;
        else if (n[N] instanceof Date)
          d += this.buildTextValNode(n[N], N, "", r);
        else if (typeof n[N] != "object") {
          const C = this.isAttribute(N);
          if (C && !this.ignoreAttributesFn(C, h))
            e += this.buildAttrPairStr(C, "" + n[N]);
          else if (!C)
            if (N === this.options.textNodeName) {
              let v = this.options.tagValueProcessor(N, "" + n[N]);
              d += this.replaceEntitiesValue(v);
            } else
              d += this.buildTextValNode(n[N], N, "", r);
        } else if (Array.isArray(n[N])) {
          const C = n[N].length;
          let v = "", V = "";
          for (let s = 0; s < C; s++) {
            const a = n[N][s];
            if (!(typeof a > "u")) if (a === null)
              N[0] === "?" ? d += this.indentate(r) + "<" + N + "?" + this.tagEndChar : d += this.indentate(r) + "<" + N + "/" + this.tagEndChar;
            else if (typeof a == "object")
              if (this.options.oneListGroup) {
                const y = this.j2x(a, r + 1, t.concat(N));
                v += y.val, this.options.attributesGroupName && a.hasOwnProperty(this.options.attributesGroupName) && (V += y.attrStr);
              } else
                v += this.processTextOrObjNode(a, N, r, t);
            else if (this.options.oneListGroup) {
              let y = this.options.tagValueProcessor(N, a);
              y = this.replaceEntitiesValue(y), v += y;
            } else
              v += this.buildTextValNode(a, N, "", r);
          }
          this.options.oneListGroup && (v = this.buildObjectNode(v, N, V, r)), d += v;
        } else if (this.options.attributesGroupName && N === this.options.attributesGroupName) {
          const C = Object.keys(n[N]), v = C.length;
          for (let V = 0; V < v; V++)
            e += this.buildAttrPairStr(C[V], "" + n[N][C[V]]);
        } else
          d += this.processTextOrObjNode(n[N], N, r, t);
    return { attrStr: e, val: d };
  }, T.prototype.buildAttrPairStr = function(n, r) {
    return r = this.options.attributeValueProcessor(n, "" + r), r = this.replaceEntitiesValue(r), this.options.suppressBooleanAttributes && r === "true" ? " " + n : " " + n + '="' + r + '"';
  };
  function I(n, r, t, e) {
    const d = this.j2x(n, t + 1, e.concat(r));
    return n[this.options.textNodeName] !== void 0 && Object.keys(n).length === 1 ? this.buildTextValNode(n[this.options.textNodeName], r, d.attrStr, t) : this.buildObjectNode(d.val, r, d.attrStr, t);
  }
  T.prototype.buildObjectNode = function(n, r, t, e) {
    if (n === "")
      return r[0] === "?" ? this.indentate(e) + "<" + r + t + "?" + this.tagEndChar : this.indentate(e) + "<" + r + t + this.closeTag(r) + this.tagEndChar;
    {
      let d = "</" + r + this.tagEndChar, h = "";
      return r[0] === "?" && (h = "?", d = ""), (t || t === "") && n.indexOf("<") === -1 ? this.indentate(e) + "<" + r + t + h + ">" + n + d : this.options.commentPropName !== !1 && r === this.options.commentPropName && h.length === 0 ? this.indentate(e) + `<!--${n}-->` + this.newLine : this.indentate(e) + "<" + r + t + h + this.tagEndChar + n + this.indentate(e) + d;
    }
  }, T.prototype.closeTag = function(n) {
    let r = "";
    return this.options.unpairedTags.indexOf(n) !== -1 ? this.options.suppressUnpairedNode || (r = "/") : this.options.suppressEmptyNode ? r = "/" : r = `></${n}`, r;
  }, T.prototype.buildTextValNode = function(n, r, t, e) {
    if (this.options.cdataPropName !== !1 && r === this.options.cdataPropName)
      return this.indentate(e) + `<![CDATA[${n}]]>` + this.newLine;
    if (this.options.commentPropName !== !1 && r === this.options.commentPropName)
      return this.indentate(e) + `<!--${n}-->` + this.newLine;
    if (r[0] === "?")
      return this.indentate(e) + "<" + r + t + "?" + this.tagEndChar;
    {
      let d = this.options.tagValueProcessor(r, n);
      return d = this.replaceEntitiesValue(d), d === "" ? this.indentate(e) + "<" + r + t + this.closeTag(r) + this.tagEndChar : this.indentate(e) + "<" + r + t + ">" + d + "</" + r + this.tagEndChar;
    }
  }, T.prototype.replaceEntitiesValue = function(n) {
    if (n && n.length > 0 && this.options.processEntities)
      for (let r = 0; r < this.options.entities.length; r++) {
        const t = this.options.entities[r];
        n = n.replace(t.regex, t.val);
      }
    return n;
  };
  function m(n) {
    return this.options.indentBy.repeat(n);
  }
  function b(n) {
    return n.startsWith(this.options.attributeNamePrefix) && n !== this.options.textNodeName ? n.substr(this.attrPrefixLen) : !1;
  }
  return Y = T, Y;
}
var W, ce;
function ve() {
  if (ce) return W;
  ce = 1;
  const o = de(), f = ye(), l = we();
  return W = {
    XMLParser: f,
    XMLValidator: o,
    XMLBuilder: l
  }, W;
}
var Ce = ve();
function Ie(o) {
  if (!o || !o.ClickThrough) return "";
  const f = o.ClickThrough;
  return typeof f == "string" ? f.trim() : f["#text"] ? f["#text"].trim() : (console.warn("VideoClicks has unexpected structure:", o), "");
}
function Pe(o) {
  const f = [];
  if (!(o != null && o.Companion)) return f;
  const l = Array.isArray(o.Companion) ? o.Companion : [o.Companion];
  for (const T of l) {
    const I = Number.parseInt(T["@_width"], 10), m = Number.parseInt(T["@_height"], 10), b = T.StaticResource["#text"].trim(), n = Oe(
      T.CompanionClickThrough
    );
    f.push({
      width: I,
      height: m,
      imageUrl: b,
      clickThroughUrl: n
    });
  }
  return f;
}
function Oe(o) {
  return o ? typeof o == "string" ? o.trim() : o["#text"] ? o["#text"].trim() : (console.warn("CompanionClickThrough has unexpected structure:", o), "") : "";
}
function xe(o) {
  let f, l;
  if (Array.isArray(o)) {
    for (const T of o)
      if (T.Linear && !f && (f = T.Linear), T.CompanionAds && !l && (l = T.CompanionAds), f && l) break;
  } else
    f = o.Linear, l = o.CompanionAds;
  return { linear: f, companionAds: l };
}
function Ve(o) {
  if (typeof o == "number")
    return o;
  if (typeof o == "string")
    if (o.includes(":")) {
      const f = o.split(":");
      if (f.length === 3) {
        const [l, T, I] = f;
        return Number.parseInt(l, 10) * 3600 + Number.parseInt(T, 10) * 60 + Number.parseFloat(I);
      }
    } else {
      const f = Number.parseFloat(o);
      if (!Number.isNaN(f))
        return f;
    }
  return console.warn(`Invalid duration format: ${o}. Returning 0.`), 0;
}
function ke(o) {
  if (!o) return "";
  const f = o.MediaFile;
  return Array.isArray(f) ? f[0]["#text"].trim() : f != null && f["#text"] ? f["#text"].trim() : "";
}
function Se(o, f) {
  const l = {
    impression: [],
    start: [],
    firstQuartile: [],
    midpoint: [],
    thirdQuartile: [],
    complete: []
  };
  if (o && (l.impression = Array.isArray(o) ? o.map((I) => I.trim()) : [o.trim()]), !(f != null && f.Tracking)) return l;
  const T = Array.isArray(f.Tracking) ? f.Tracking : [f.Tracking];
  for (const I of T) {
    const m = I["@_event"].toLowerCase(), b = I["#text"].trim();
    switch (m) {
      case "start":
        l.start.push(b);
        break;
      case "firstquartile":
        l.firstQuartile.push(b);
        break;
      case "midpoint":
        l.midpoint.push(b);
        break;
      case "thirdquartile":
        l.thirdQuartile.push(b);
        break;
      case "complete":
        l.complete.push(b);
        break;
      case "progress":
        _e(I, b, l);
        break;
      default:
        console.warn(`Unhandled tracking event: ${m}`);
        break;
    }
  }
  return l;
}
function _e(o, f, l) {
  const T = o["@_offset"];
  switch (T) {
    case "0%":
      l.start.push(f);
      break;
    case "25%":
      l.firstQuartile.push(f);
      break;
    case "50%":
      l.midpoint.push(f);
      break;
    case "75%":
      l.thirdQuartile.push(f);
      break;
    default:
      console.warn(`Unhandled progress offset: ${T}`);
      break;
  }
}
function Fe(o) {
  var C;
  const T = (C = new Ce.XMLParser({
    ignoreAttributes: !1,
    attributeNamePrefix: "@_"
  }).parse(o).VAST) == null ? void 0 : C.Ad;
  if (!T)
    throw new Error("No Ad found in VAST XML");
  const I = T["@_adType"] || "unknown", m = T.InLine;
  if (!m)
    throw new Error("No InLine element found in Ad");
  if (m.Creatives === "" || !m.Creatives.Creative)
    throw new Error("No Creative element found in Creatives");
  const b = xe(m.Creatives.Creative), n = b.linear, r = b.companionAds;
  if (!n)
    throw new Error("No Linear element found in Creative");
  const t = ke(n.MediaFiles), e = Ve(n.Duration), d = Ie(n.VideoClicks), h = Se(
    m.Impression,
    n.TrackingEvents
  ), N = Pe(r);
  return {
    adType: I,
    mediaUrl: t,
    duration: e,
    clickThroughUrl: d,
    trackingEvents: h,
    companionAds: N.length > 0 ? N : void 0
  };
}
async function Le(o) {
  const f = await fetch(
    `${pe}/v1/vast?media_id=${o.mediaId}&ad_slot_id=${o.adSlotId}`
  );
  if (!f.ok)
    throw new Error("Failed to fetch VAST XML");
  const l = await f.text();
  return Fe(l);
}
function Re(o) {
  var T, I;
  if (!((I = (T = o.vastData) == null ? void 0 : T.companionAds) != null && I[0]) || !o.config.companionContainer)
    return o;
  const f = o.vastData.companionAds[0], l = document.createElement("img");
  return l.src = f.imageUrl, l.width = f.width, l.height = f.height, l.style.objectFit = "contain", l.addEventListener("click", () => {
    window.open(f.clickThroughUrl, "_blank");
  }), o.config.companionContainer.appendChild(l), { ...o, companionElement: l };
}
function $e(o) {
  if (!o.vastData) return o;
  const f = o.vastData.adType === "video" ? document.createElement("video") : document.createElement("audio");
  return f.src = o.vastData.mediaUrl, f.style.width = "100%", f.style.height = "100%", f.setAttribute("playsinline", ""), f.addEventListener("click", () => qe(o)), o.config.containerElement.appendChild(f), { ...o, mediaElement: f };
}
function qe(o) {
  o.vastData && window.open(o.vastData.clickThroughUrl, "_blank");
}
function Xe(o) {
  if (!o.vastData || !o.mediaElement) return o;
  const { trackingEvents: f } = o.vastData, l = {
    start: !1,
    firstQuartile: !1,
    midpoint: !1,
    thirdQuartile: !1,
    complete: !1
  };
  K(f.impression);
  const T = [
    { event: "start", threshold: 0 },
    { event: "firstQuartile", threshold: 0.25 },
    { event: "midpoint", threshold: 0.5 },
    { event: "thirdQuartile", threshold: 0.75 }
  ];
  return o.mediaElement.addEventListener("timeupdate", () => {
    if (!o.vastData || !o.mediaElement) return;
    const I = o.mediaElement.currentTime / o.vastData.duration;
    for (const { event: m, threshold: b } of T)
      I >= b && !l[m] && (K(f[m]), l[m] = !0);
  }), o.mediaElement.addEventListener("ended", () => {
    l.complete || (K(f.complete), l.complete = !0);
  }), o;
}
function K(o) {
  for (const f of o)
    fetch(f, { method: "GET", mode: "no-cors", credentials: "include" });
}
async function Me(o) {
  const f = {
    config: o,
    vastData: null,
    mediaElement: null,
    companionElement: null
  }, l = await Le(o);
  let T = { ...f, vastData: l };
  return T = $e(T), T = Re(T), T = Xe(T), T;
}
function Be(o) {
  if (!o.vastData || !o.mediaElement)
    throw new Error("Ad not loaded");
  o.mediaElement.play();
}
function Ue(o) {
  o.mediaElement && o.mediaElement.pause();
}
function Ge(o, f) {
  o.mediaElement && (o.mediaElement.volume = Math.max(0, Math.min(1, f)));
}
export {
  Me as initializeAdSDK,
  Ue as pause,
  Be as play,
  Ge as setVolume
};
