/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */ !(function (
  e,
  t
) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    r = Object.getPrototypeOf,
    i = n.slice,
    o = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    s = n.push,
    a = n.indexOf,
    u = {},
    l = u.toString,
    c = u.hasOwnProperty,
    f = c.toString,
    p = f.call(Object),
    d = {},
    h = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    g = function (e) {
      return null != e && e === e.window;
    },
    v = e.document,
    m = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var r,
      i,
      o = (n = n || v).createElement("script");
    if (((o.text = e), t))
      for (r in m)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function $(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? u[l.call(e)] || "object"
      : typeof e;
  }
  var x = "3.6.3",
    b = function (e, t) {
      return new b.fn.init(e, t);
    };
  function _(e) {
    var t = !!e && "length" in e && e.length,
      n = $(e);
    return (
      !h(e) &&
      !g(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (b.fn = b.prototype =
    {
      jquery: x,
      constructor: b,
      length: 0,
      toArray: function () {
        return i.call(this);
      },
      get: function (e) {
        return null == e
          ? i.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = b.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return b.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          b.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(i.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          b.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          b.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (b.extend = b.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          s = arguments[0] || {},
          a = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || h(s) || (s = {}),
            a === u && ((s = this), a--);
          a < u;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  s !== r &&
                  (l && r && (b.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = s[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || b.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (s[t] = b.extend(l, o, r)))
                    : void 0 !== r && (s[t] = r));
        return s;
      }),
    b.extend({
      expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== l.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = c.call(t, "constructor") && t.constructor) &&
              f.call(n) === p))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        y(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (_(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (_(Object(e))
              ? b.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : a.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
          !t(e[i], i) !== s && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          s = 0,
          a = [];
        if (_(e))
          for (r = e.length; s < r; s++)
            null != (i = t(e[s], s, n)) && a.push(i);
        else for (s in e) null != (i = t(e[s], s, n)) && a.push(i);
        return o(a);
      },
      guid: 1,
      support: d,
    }),
    "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
    b.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        u["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var T = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      s,
      a,
      u,
      l,
      c,
      f,
      p,
      d,
      h,
      g,
      v,
      m,
      y,
      $,
      x = "sizzle" + 1 * new Date(),
      b = e.document,
      _ = 0,
      T = 0,
      w = el(),
      C = el(),
      S = el(),
      k = el(),
      E = function (e, t) {
        return e === t && (f = !0), 0;
      },
      N = {}.hasOwnProperty,
      A = [],
      D = A.pop,
      j = A.push,
      q = A.push,
      L = A.slice,
      H = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      O = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        O +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      M =
        "\\[" +
        O +
        "*(" +
        I +
        ")(?:" +
        O +
        "*([*^$|!~]?=)" +
        O +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        O +
        "*\\]",
      W =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      B = RegExp(O + "+", "g"),
      R = RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
      F = RegExp("^" + O + "*," + O + "*"),
      z = RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
      X = RegExp(O + "|>"),
      U = RegExp(W),
      V = RegExp("^" + I + "$"),
      G = {
        ID: RegExp("^#(" + I + ")"),
        CLASS: RegExp("^\\.(" + I + ")"),
        TAG: RegExp("^(" + I + "|[*])"),
        ATTR: RegExp("^" + M),
        PSEUDO: RegExp("^" + W),
        CHILD: RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            O +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            O +
            "*(?:([+-]|)" +
            O +
            "*(\\d+)|))" +
            O +
            "*\\)|)",
          "i"
        ),
        bool: RegExp("^(?:" + P + ")$", "i"),
        needsContext: RegExp(
          "^" +
            O +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            O +
            "*((?:-\\d)?\\d*)" +
            O +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      et = RegExp("\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\([^\\r\\n\\f])", "g"),
      en = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      er = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ei = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      eo = function () {
        p();
      },
      es = eb(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      q.apply((A = L.call(b.childNodes)), b.childNodes),
        A[b.childNodes.length].nodeType;
    } catch (ea) {
      q = {
        apply: A.length
          ? function (e, t) {
              j.apply(e, L.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function eu(e, t, r, i) {
      var o,
        a,
        l,
        c,
        f,
        h,
        m,
        y = t && t.ownerDocument,
        b = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== b && 9 !== b && 11 !== b))
      )
        return r;
      if (!i && (p(t), (t = t || d), g)) {
        if (11 !== b && (f = Z.exec(e))) {
          if ((o = f[1])) {
            if (9 === b) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (y && (l = y.getElementById(o)) && $(t, l) && l.id === o)
              return r.push(l), r;
          } else {
            if (f[2]) return q.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return q.apply(r, t.getElementsByClassName(o)), r;
          }
        }
        if (
          n.qsa &&
          !k[e + " "] &&
          (!v || !v.test(e)) &&
          (1 !== b || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((m = e), (y = t), 1 === b && (X.test(e) || z.test(e)))) {
            for (
              ((y = (ee.test(e) && ey(t.parentNode)) || t) === t && n.scope) ||
                ((c = t.getAttribute("id"))
                  ? (c = c.replace(er, ei))
                  : t.setAttribute("id", (c = x))),
                a = (h = s(e)).length;
              a--;

            )
              h[a] = (c ? "#" + c : ":scope") + " " + ex(h[a]);
            m = h.join(",");
          }
          try {
            if (
              n.cssSupportsSelector &&
              !CSS.supports("selector(:is(" + m + "))")
            )
              throw Error();
            return q.apply(r, y.querySelectorAll(m)), r;
          } catch (_) {
            k(e, !0);
          } finally {
            c === x && t.removeAttribute("id");
          }
        }
      }
      return u(e.replace(R, "$1"), t, r, i);
    }
    function el() {
      var e = [];
      return function t(n, i) {
        return (
          e.push(n + " ") > r.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      };
    }
    function ec(e) {
      return (e[x] = !0), e;
    }
    function ef(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ep(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
    }
    function ed(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) {
        for (; (n = n.nextSibling); ) if (n === t) return -1;
      }
      return e ? 1 : -1;
    }
    function eh(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function eg(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function ev(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (!e !== t.isDisabled && es(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function em(e) {
      return ec(function (t) {
        return (
          (t = +t),
          ec(function (n, r) {
            for (var i, o = e([], n.length, t), s = o.length; s--; )
              n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ey(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = eu.support = {}),
    (o = eu.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (p = eu.setDocument =
      function (e) {
        var t,
          i,
          s = e ? e.ownerDocument || e : b;
        return (
          s != d &&
            9 === s.nodeType &&
            s.documentElement &&
            ((h = (d = s).documentElement),
            (g = !o(d)),
            b != d &&
              (i = d.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener("unload", eo, !1)
                : i.attachEvent && i.attachEvent("onunload", eo)),
            (n.scope = ef(function (e) {
              return (
                h.appendChild(e).appendChild(d.createElement("div")),
                void 0 !== e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (n.cssSupportsSelector = ef(function () {
              return (
                CSS.supports("selector(*)") &&
                d.querySelectorAll(":is(:jqfake)") &&
                !CSS.supports("selector(:is(*,:jqfake))")
              );
            })),
            (n.attributes = ef(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ef(function (e) {
              return (
                e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = J.test(d.getElementsByClassName)),
            (n.getById = ef(function (e) {
              return (
                (h.appendChild(e).id = x),
                !d.getElementsByName || !d.getElementsByName(x).length
              );
            })),
            n.getById
              ? ((r.filter.ID = function (e) {
                  var t = e.replace(et, en);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((r.filter.ID = function (e) {
                  var t = e.replace(et, en);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (r.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (r.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                  return t.getElementsByClassName(e);
              }),
            (m = []),
            (v = []),
            (n.qsa = J.test(d.querySelectorAll)) &&
              (ef(function (e) {
                var t;
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  x +
                  "'></a><select id='" +
                  x +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + O + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + O + "*(?:value|" + P + ")"),
                  e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="),
                  (t = d.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + O + "*name" + O + "*=" + O + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + x + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ef(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + O + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (h.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (n.matchesSelector = J.test(
              (y =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              ef(function (e) {
                (n.disconnectedMatch = y.call(e, "*")),
                  y.call(e, "[s!='']:x"),
                  m.push("!=", W);
              }),
            n.cssSupportsSelector || v.push(":has"),
            (v = v.length && RegExp(v.join("|"))),
            (m = m.length && RegExp(m.join("|"))),
            ($ =
              (t = J.test(h.compareDocumentPosition)) || J.test(h.contains)
                ? function (e, t) {
                    var n = (9 === e.nodeType && e.documentElement) || e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) {
                      for (; (t = t.parentNode); ) if (t === e) return !0;
                    }
                    return !1;
                  }),
            (E = t
              ? function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var r =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e == d || (e.ownerDocument == b && $(b, e))
                        ? -1
                        : t == d || (t.ownerDocument == b && $(b, t))
                        ? 1
                        : c
                        ? H(c, e) - H(c, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!i || !o)
                    return e == d
                      ? -1
                      : t == d
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : c
                      ? H(c, e) - H(c, t)
                      : 0;
                  if (i === o) return ed(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[r] === a[r]; ) r++;
                  return r
                    ? ed(s[r], a[r])
                    : s[r] == b
                    ? -1
                    : a[r] == b
                    ? 1
                    : 0;
                })),
          d
        );
      }),
    (eu.matches = function (e, t) {
      return eu(e, null, null, t);
    }),
    (eu.matchesSelector = function (e, t) {
      if (
        (p(e),
        n.matchesSelector &&
          g &&
          !k[t + " "] &&
          (!m || !m.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var r = y.call(e, t);
          if (
            r ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (i) {
          k(t, !0);
        }
      return 0 < eu(t, d, null, [e]).length;
    }),
    (eu.contains = function (e, t) {
      return (e.ownerDocument || e) != d && p(e), $(e, t);
    }),
    (eu.attr = function (e, t) {
      (e.ownerDocument || e) != d && p(e);
      var i = r.attrHandle[t.toLowerCase()],
        o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !g
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (eu.escape = function (e) {
      return (e + "").replace(er, ei);
    }),
    (eu.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }),
    (eu.uniqueSort = function (e) {
      var t,
        r = [],
        i = 0,
        o = 0;
      if (
        ((f = !n.detectDuplicates),
        (c = !n.sortStable && e.slice(0)),
        e.sort(E),
        f)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
        for (; i--; ) e.splice(r[i], 1);
      }
      return (c = null), e;
    }),
    (i = eu.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += i(t);
        return n;
      }),
    ((r = eu.selectors =
      {
        cacheLength: 50,
        createPseudo: ec,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(et, en)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(et, en)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || eu.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && eu.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    U.test(n) &&
                    (t = s(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(et, en).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = w[e + " "];
            return (
              t ||
              ((t = RegExp("(^|" + O + ")" + e + "(" + O + "|$)")),
              w(e, function (e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                    ""
                );
              }))
            );
          },
          ATTR: function (e, t, n) {
            return function (r) {
              var i = eu.attr(r, e);
              return null == i
                ? "!=" === t
                : !t ||
                    ((i += ""),
                    "=" === t
                      ? i === n
                      : "!=" === t
                      ? i !== n
                      : "^=" === t
                      ? n && 0 === i.indexOf(n)
                      : "*=" === t
                      ? n && -1 < i.indexOf(n)
                      : "$=" === t
                      ? n && i.slice(-n.length) === n
                      : "~=" === t
                      ? -1 < (" " + i.replace(B, " ") + " ").indexOf(n)
                      : "|=" === t &&
                        (i === n || i.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    p,
                    d,
                    h,
                    g = o !== s ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    m = a && t.nodeName.toLowerCase(),
                    y = !u && !a,
                    $ = !1;
                  if (v) {
                    if (o) {
                      for (; g; ) {
                        for (p = t; (p = p[g]); )
                          if (
                            a
                              ? p.nodeName.toLowerCase() === m
                              : 1 === p.nodeType
                          )
                            return !1;
                        h = g = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
                      for (
                        $ =
                          (d =
                            (l =
                              (c =
                                (f = (p = v)[x] || (p[x] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === _ &&
                            l[1]) && l[2],
                          p = d && v.childNodes[d];
                        (p = (++d && p && p[g]) || ($ = d = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++$ && p === t) {
                          c[e] = [_, d, $];
                          break;
                        }
                    } else if (
                      (y &&
                        ($ = d =
                          (l =
                            (c =
                              (f = (p = t)[x] || (p[x] = {}))[p.uniqueID] ||
                              (f[p.uniqueID] = {}))[e] || [])[0] === _ && l[1]),
                      !1 === $)
                    )
                      for (
                        ;
                        (p = (++d && p && p[g]) || ($ = d = 0) || h.pop()) &&
                        (!(
                          (a
                            ? p.nodeName.toLowerCase() === m
                            : 1 === p.nodeType) && ++$
                        ) ||
                          (y &&
                            ((c =
                              (f = p[x] || (p[x] = {}))[p.uniqueID] ||
                              (f[p.uniqueID] = {}))[e] = [_, $]),
                          p !== t));

                      );
                    return ($ -= i) === r || ($ % r == 0 && 0 <= $ / r);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              i =
                r.pseudos[e] ||
                r.setFilters[e.toLowerCase()] ||
                eu.error("unsupported pseudo: " + e);
            return i[x]
              ? i(t)
              : 1 < i.length
              ? ((n = [e, e, "", t]),
                r.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ec(function (e, n) {
                      for (var r, o = i(e, t), s = o.length; s--; )
                        e[(r = H(e, o[s]))] = !(n[r] = o[s]);
                    })
                  : function (e) {
                      return i(e, 0, n);
                    })
              : i;
          },
        },
        pseudos: {
          not: ec(function (e) {
            var t = [],
              n = [],
              r = a(e.replace(R, "$1"));
            return r[x]
              ? ec(function (e, t, n, i) {
                  for (var o, s = r(e, null, i, []), a = e.length; a--; )
                    (o = s[a]) && (e[a] = !(t[a] = o));
                })
              : function (e, i, o) {
                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: ec(function (e) {
            return function (t) {
              return 0 < eu(e, t).length;
            };
          }),
          contains: ec(function (e) {
            return (
              (e = e.replace(et, en)),
              function (t) {
                return -1 < (t.textContent || i(t)).indexOf(e);
              }
            );
          }),
          lang: ec(function (e) {
            return (
              V.test(e || "") || eu.error("unsupported lang: " + e),
              (e = e.replace(et, en).toLowerCase()),
              function (t) {
                var n;
                do
                  if (
                    (n = g
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === d.activeElement &&
              (!d.hasFocus || d.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ev(!1),
          disabled: ev(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !r.pseudos.empty(e);
          },
          header: function (e) {
            return K.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: em(function () {
            return [0];
          }),
          last: em(function (e, t) {
            return [t - 1];
          }),
          eq: em(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: em(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: em(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: em(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: em(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = r.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      r.pseudos[t] = eh(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = eg(t);
    function e$() {}
    function ex(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function eb(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        s = n && "parentNode" === o,
        a = T++;
      return t.first
        ? function (t, n, i) {
            for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, i);
            return !1;
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              p = [_, a];
            if (u) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || s) {
                  if (
                    ((c =
                      (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                      (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === _ && l[1] === a)
                      return (p[2] = l[2]);
                    if (((c[o] = p)[2] = e(t, n, u))) return !0;
                  }
                }
            return !1;
          };
    }
    function e_(e) {
      return 1 < e.length
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function eT(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
        (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
      return s;
    }
    function ew(e, t, n, r, i, o) {
      return (
        r && !r[x] && (r = ew(r)),
        i && !i[x] && (i = ew(i, o)),
        ec(function (o, s, a, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = s.length,
            g =
              o ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) eu(e, t[r], n);
                return n;
              })(t || "*", a.nodeType ? [a] : a, []),
            v = e && (o || !t) ? eT(g, p, e, a, u) : g,
            m = n ? (i || (o ? e : h || r) ? [] : s) : v;
          if ((n && n(v, m, a, u), r))
            for (l = eT(m, d), r(l, [], a, u), c = l.length; c--; )
              (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
          if (o) {
            if (i || e) {
              if (i) {
                for (l = [], c = m.length; c--; )
                  (f = m[c]) && l.push((v[c] = f));
                i(null, (m = []), l, u);
              }
              for (c = m.length; c--; )
                (f = m[c]) &&
                  -1 < (l = i ? H(o, f) : p[c]) &&
                  (o[l] = !(s[l] = f));
            }
          } else (m = eT(m === s ? m.splice(h, m.length) : m)), i ? i(null, s, m, u) : q.apply(s, m);
        })
      );
    }
    function eC(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          s = r.relative[e[0].type],
          a = s || r.relative[" "],
          u = s ? 1 : 0,
          c = eb(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          f = eb(
            function (e) {
              return -1 < H(t, e);
            },
            a,
            !0
          ),
          p = [
            function (e, n, r) {
              var i =
                (!s && (r || n !== l)) ||
                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            },
          ];
        u < o;
        u++
      )
        if ((n = r.relative[e[u].type])) p = [eb(e_(p), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
            for (i = ++u; i < o && !r.relative[e[i].type]; i++);
            return ew(
              1 < u && e_(p),
              1 < u &&
                ex(
                  e
                    .slice(0, u - 1)
                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              n,
              u < i && eC(e.slice(u, i)),
              i < o && eC((e = e.slice(i))),
              i < o && ex(e)
            );
          }
          p.push(n);
        }
      return e_(p);
    }
    return (
      (e$.prototype = r.filters = r.pseudos),
      (r.setFilters = new e$()),
      (s = eu.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            s,
            a,
            u,
            l,
            c = C[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (a = e, u = [], l = r.preFilter; a; ) {
            for (s in ((!n || (i = F.exec(a))) &&
              (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
            (n = !1),
            (i = z.exec(a)) &&
              ((n = i.shift()),
              o.push({ value: n, type: i[0].replace(R, " ") }),
              (a = a.slice(n.length))),
            r.filter))
              (i = G[s].exec(a)) &&
                (!l[s] || (i = l[s](i))) &&
                ((n = i.shift()),
                o.push({ value: n, type: s, matches: i }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? eu.error(e) : C(e, u).slice(0);
        }),
      (a = eu.compile =
        function (e, t) {
          var n,
            i,
            o,
            a,
            u,
            c,
            f = [],
            h = [],
            v = S[e + " "];
          if (!v) {
            for (t || (t = s(e)), n = t.length; n--; )
              (v = eC(t[n]))[x] ? f.push(v) : h.push(v);
            (v = S(
              e,
              ((i = h),
              (a = 0 < (o = f).length),
              (u = 0 < i.length),
              (c = function (e, t, n, s, c) {
                var f,
                  h,
                  v,
                  m = 0,
                  y = "0",
                  $ = e && [],
                  x = [],
                  b = l,
                  T = e || (u && r.find.TAG("*", c)),
                  w = (_ += null == b ? 1 : Math.random() || 0.1),
                  C = T.length;
                for (
                  c && (l = t == d || t || c);
                  y !== C && null != (f = T[y]);
                  y++
                ) {
                  if (u && f) {
                    for (
                      h = 0, t || f.ownerDocument == d || (p(f), (n = !g));
                      (v = i[h++]);

                    )
                      if (v(f, t || d, n)) {
                        s.push(f);
                        break;
                      }
                    c && (_ = w);
                  }
                  a && ((f = !v && f) && m--, e && $.push(f));
                }
                if (((m += y), a && y !== m)) {
                  for (h = 0; (v = o[h++]); ) v($, x, t, n);
                  if (e) {
                    if (0 < m) for (; y--; ) $[y] || x[y] || (x[y] = D.call(s));
                    x = eT(x);
                  }
                  q.apply(s, x),
                    c &&
                      !e &&
                      0 < x.length &&
                      1 < m + o.length &&
                      eu.uniqueSort(s);
                }
                return c && ((_ = w), (l = b)), $;
              }),
              a ? ec(c) : c)
            )).selector = e;
          }
          return v;
        }),
      (u = eu.select =
        function (e, t, n, i) {
          var o,
            u,
            l,
            c,
            f,
            p = "function" == typeof e && e,
            d = !i && s((e = p.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              2 < (u = d[0] = d[0].slice(0)).length &&
              "ID" === (l = u[0]).type &&
              9 === t.nodeType &&
              g &&
              r.relative[u[1].type]
            ) {
              if (!(t = (r.find.ID(l.matches[0].replace(et, en), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
            }
            for (
              o = G.needsContext.test(e) ? 0 : u.length;
              o-- && ((l = u[o]), !r.relative[(c = l.type)]);

            )
              if (
                (f = r.find[c]) &&
                (i = f(
                  l.matches[0].replace(et, en),
                  (ee.test(u[0].type) && ey(t.parentNode)) || t
                ))
              ) {
                if ((u.splice(o, 1), !(e = i.length && ex(u))))
                  return q.apply(n, i), n;
                break;
              }
          }
          return (
            (p || a(e, d))(
              i,
              t,
              !g,
              n,
              !t || (ee.test(e) && ey(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = x.split("").sort(E).join("") === x),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = ef(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      })),
      ef(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        ep("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ef(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        ep("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ef(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ep(P, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      eu
    );
  })(e);
  (b.find = T),
    (b.expr = T.selectors),
    (b.expr[":"] = b.expr.pseudos),
    (b.uniqueSort = b.unique = T.uniqueSort),
    (b.text = T.getText),
    (b.isXMLDoc = T.isXML),
    (b.contains = T.contains),
    (b.escapeSelector = T.escape);
  var w = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && b(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    C = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    S = b.expr.match.needsContext;
  function k(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function N(e, t, n) {
    return h(t)
      ? b.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? b.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? b.grep(e, function (e) {
          return -1 < a.call(t, e) !== n;
        })
      : b.filter(t, e, n);
  }
  (b.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? b.find.matchesSelector(r, e)
          ? [r]
          : []
        : b.find.matches(
            e,
            b.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    b.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            b(e).filter(function () {
              for (t = 0; t < r; t++) if (b.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) b.find(e, i[t], n);
        return 1 < r ? b.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(N(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(N(this, e || [], !0));
      },
      is: function (e) {
        return !!N(this, "string" == typeof e && S.test(e) ? b(e) : e || [], !1)
          .length;
      },
    });
  var A,
    D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((b.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || A), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : D.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof b ? t[0] : t),
          b.merge(
            this,
            b.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)
          ),
          E.test(r[1]) && b.isPlainObject(t))
        )
          for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = v.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : h(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(b)
      : b.makeArray(e, this);
  }).prototype = b.fn),
    (A = b(v));
  var j = /^(?:parents|prev(?:Until|All))/,
    q = { children: !0, contents: !0, next: !0, prev: !0 };
  function L(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  b.fn.extend({
    has: function (e) {
      var t = b(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (b.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        s = "string" != typeof e && b(e);
      if (!S.test(e)) {
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? -1 < s.index(n)
                : 1 === n.nodeType && b.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      }
      return this.pushStack(1 < o.length ? b.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? a.call(b(e), this[0])
          : a.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    b.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return w(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return w(e, "parentNode", n);
        },
        next: function (e) {
          return L(e, "nextSibling");
        },
        prev: function (e) {
          return L(e, "previousSibling");
        },
        nextAll: function (e) {
          return w(e, "nextSibling");
        },
        prevAll: function (e) {
          return w(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return w(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return w(e, "previousSibling", n);
        },
        siblings: function (e) {
          return C((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return C(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (k(e, "template") && (e = e.content || e),
              b.merge([], e.childNodes));
        },
      },
      function (e, t) {
        b.fn[e] = function (n, r) {
          var i = b.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = b.filter(r, i)),
            1 < this.length &&
              (q[e] || b.uniqueSort(i), j.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var H = /[^\x20\t\r\n\f]+/g;
  function P(e) {
    return e;
  }
  function O(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && h((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && h((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (o) {
      n.apply(void 0, [o]);
    }
  }
  (b.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? ((t = e),
          (n = {}),
          b.each(t.match(H) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : b.extend({}, e);
    var t,
      n,
      r,
      i,
      o,
      s,
      a = [],
      u = [],
      l = -1,
      c = function () {
        for (s = s || e.once, o = r = !0; u.length; l = -1)
          for (i = u.shift(); ++l < a.length; )
            !1 === a[l].apply(i[0], i[1]) &&
              e.stopOnFalse &&
              ((l = a.length), (i = !1));
        e.memory || (i = !1), (r = !1), s && (a = i ? [] : "");
      },
      f = {
        add: function () {
          return (
            a &&
              (i && !r && ((l = a.length - 1), u.push(i)),
              (function t(n) {
                b.each(n, function (n, r) {
                  h(r)
                    ? (e.unique && f.has(r)) || a.push(r)
                    : r && r.length && "string" !== $(r) && t(r);
                });
              })(arguments),
              i && !r && c()),
            this
          );
        },
        remove: function () {
          return (
            b.each(arguments, function (e, t) {
              for (var n; -1 < (n = b.inArray(t, a, n)); )
                a.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < b.inArray(e, a) : 0 < a.length;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (s = u = []), (a = i = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (s = u = []), i || r || (a = i = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              r || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    b.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              b.Callbacks("memory"),
              b.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              b.Callbacks("once memory"),
              b.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              b.Callbacks("once memory"),
              b.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return b
                .Deferred(function (t) {
                  b.each(n, function (n, r) {
                    var i = h(e[r[4]]) && e[r[4]];
                    o[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && h(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[r[0] + "With"](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, r, i) {
              var o = 0;
              function s(t, n, r, i) {
                return function () {
                  var a = this,
                    u = arguments,
                    l = function () {
                      var e, l;
                      if (!(t < o)) {
                        if ((e = r.apply(a, u)) === n.promise())
                          throw TypeError("Thenable self-resolution");
                        h(
                          (l =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then)
                        )
                          ? i
                            ? l.call(e, s(o, n, P, i), s(o, n, O, i))
                            : (o++,
                              l.call(
                                e,
                                s(o, n, P, i),
                                s(o, n, O, i),
                                s(o, n, P, n.notifyWith)
                              ))
                          : (r !== P && ((a = void 0), (u = [e])),
                            (i || n.resolveWith)(a, u));
                      }
                    },
                    c = i
                      ? l
                      : function () {
                          try {
                            l();
                          } catch (e) {
                            b.Deferred.exceptionHook &&
                              b.Deferred.exceptionHook(e, c.stackTrace),
                              o <= t + 1 &&
                                (r !== O && ((a = void 0), (u = [e])),
                                n.rejectWith(a, u));
                          }
                        };
                  t
                    ? c()
                    : (b.Deferred.getStackHook &&
                        (c.stackTrace = b.Deferred.getStackHook()),
                      e.setTimeout(c));
                };
              }
              return b
                .Deferred(function (e) {
                  n[0][3].add(s(0, e, h(i) ? i : P, e.notifyWith)),
                    n[1][3].add(s(0, e, h(t) ? t : P)),
                    n[2][3].add(s(0, e, h(r) ? r : O));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? b.extend(e, i) : i;
            },
          },
          o = {};
        return (
          b.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (i[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    r = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = s.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          o = i.call(arguments),
          s = b.Deferred(),
          a = function (e) {
            return function (n) {
              (r[e] = this),
                (o[e] = 1 < arguments.length ? i.call(arguments) : n),
                --t || s.resolveWith(r, o);
            };
          };
        if (
          t <= 1 &&
          (I(e, s.done(a(n)).resolve, s.reject, !t),
          "pending" === s.state() || h(o[n] && o[n].then))
        )
          return s.then();
        for (; n--; ) I(o[n], a(n), s.reject);
        return s.promise();
      },
    });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (b.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      M.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (b.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var W = b.Deferred();
  function B() {
    v.removeEventListener("DOMContentLoaded", B),
      e.removeEventListener("load", B),
      b.ready();
  }
  (b.fn.ready = function (e) {
    return (
      W.then(e).catch(function (e) {
        b.readyException(e);
      }),
      this
    );
  }),
    b.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --b.readyWait : b.isReady) ||
          ((b.isReady = !0) !== e && 0 < --b.readyWait) ||
          W.resolveWith(v, [b]);
      },
    }),
    (b.ready.then = W.then),
    "complete" !== v.readyState &&
    ("loading" === v.readyState || v.documentElement.doScroll)
      ? (v.addEventListener("DOMContentLoaded", B),
        e.addEventListener("load", B))
      : e.setTimeout(b.ready);
  var R = function (e, t, n, r, i, o, s) {
      var a = 0,
        u = e.length,
        l = null == n;
      if ("object" === $(n))
        for (a in ((i = !0), n)) R(e, t, a, n[a], !0, o, s);
      else if (
        void 0 !== r &&
        ((i = !0),
        h(r) || (s = !0),
        l &&
          (s
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(b(e), n);
              }))),
        t)
      )
        for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    F = /^-ms-/,
    z = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function U(e) {
    return e.replace(F, "ms-").replace(z, X);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = b.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[U(t)] = n;
        else for (r in t) i[U(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][U(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t)
            for (
              n = (t = Array.isArray(t)
                ? t.map(U)
                : ((t = U(t)) in r)
                ? [t]
                : t.match(H) || []).length;
              n--;

            )
              delete r[t[n]];
          (void 0 === t || b.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !b.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) {
      if (
        ((r = "data-" + t.replace(J, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : K.test(i)
                ? JSON.parse(i)
                : i));
        } catch (o) {}
        Q.set(e, t, n);
      } else n = void 0;
    }
    return n;
  }
  b.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    b.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (r = s[n].name).indexOf("data-") &&
                Z(o, (r = U(r.slice(5))), i[r]);
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              Q.set(this, e);
            })
          : R(
              this,
              function (t) {
                var n;
                if (o && void 0 === t)
                  return void 0 !== (n = Q.get(o, e))
                    ? n
                    : void 0 !== (n = Z(o, e))
                    ? n
                    : void 0;
                this.each(function () {
                  Q.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    b.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, b.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = b.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = b._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                b.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: b.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    b.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? b.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          b.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = b.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = Y.get(o[s], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(a));
        return a(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    et = RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    en = ["Top", "Right", "Bottom", "Left"],
    er = v.documentElement,
    ei = function (e) {
      return b.contains(e.ownerDocument, e);
    },
    eo = { composed: !0 };
  er.getRootNode &&
    (ei = function (e) {
      return (
        b.contains(e.ownerDocument, e) || e.getRootNode(eo) === e.ownerDocument
      );
    });
  var es = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ei(e) && "none" === b.css(e, "display"))
    );
  };
  function ea(e, t, n, r) {
    var i,
      o,
      s = 20,
      a = r
        ? function () {
            return r.cur();
          }
        : function () {
            return b.css(e, t, "");
          },
      u = a(),
      l = (n && n[3]) || (b.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (b.cssNumber[t] || ("px" !== l && +u)) &&
        et.exec(b.css(e, t));
    if (c && c[3] !== l) {
      for (u /= 2, l = l || c[3], c = +u || 1; s--; )
        b.style(e, t, c + l),
          (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0),
          (c /= o);
      (c *= 2), b.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var eu = {};
  function el(e, t) {
    for (var n, r, i, o, s, a, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              es(r) &&
              (l[c] =
                ((u = s = o = void 0),
                (s = (i = r).ownerDocument),
                (u = eu[(a = i.nodeName)]) ||
                  ((o = s.body.appendChild(s.createElement(a))),
                  (u = b.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (eu[a] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  b.fn.extend({
    show: function () {
      return el(this, !0);
    },
    hide: function () {
      return el(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            es(this) ? b(this).show() : b(this).hide();
          });
    },
  });
  var ec,
    ef,
    ep = /^(?:checkbox|radio)$/i,
    ed = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    eh = /^$|^module$|\/(?:java|ecma)script/i;
  (ec = v.createDocumentFragment().appendChild(v.createElement("div"))),
    (ef = v.createElement("input")).setAttribute("type", "radio"),
    ef.setAttribute("checked", "checked"),
    ef.setAttribute("name", "t"),
    ec.appendChild(ef),
    (d.checkClone = ec.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ec.innerHTML = "<textarea>x</textarea>"),
    (d.noCloneChecked = !!ec.cloneNode(!0).lastChild.defaultValue),
    (ec.innerHTML = "<option></option>"),
    (d.option = !!ec.lastChild);
  var eg = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ev(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && k(e, t)) ? b.merge([e], n) : n
    );
  }
  function em(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (eg.tbody = eg.tfoot = eg.colgroup = eg.caption = eg.thead),
    (eg.th = eg.td),
    d.option ||
      (eg.optgroup = eg.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ey = /<|&#?\w+;/;
  function e$(e, t, n, r, i) {
    for (
      var o,
        s,
        a,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o) {
        if ("object" === $(o)) b.merge(p, o.nodeType ? [o] : o);
        else if (ey.test(o)) {
          for (
            s = s || f.appendChild(t.createElement("div")),
              u =
                eg[(a = (ed.exec(o) || ["", ""])[1].toLowerCase())] ||
                eg._default,
              s.innerHTML = u[1] + b.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            s = s.lastChild;
          b.merge(p, s.childNodes), ((s = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
      }
    for (f.textContent = "", d = 0; (o = p[d++]); )
      if (r && -1 < b.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ei(o)), (s = ev(f.appendChild(o), "script")), l && em(s), n)
      )
        for (c = 0; (o = s[c++]); ) eh.test(o.type || "") && n.push(o);
    return f;
  }
  var ex = /^([^.]*)(?:\.(.+)|)/;
  function eb() {
    return !0;
  }
  function e_() {
    return !1;
  }
  function eT(e, t) {
    return (
      (e ===
        (function () {
          try {
            return v.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function ew(e, t, n, r, i, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ew(e, a, n, r, t[a], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = e_;
    else if (!i) return e;
    return (
      1 === o &&
        ((s = i),
        ((i = function (e) {
          return b().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = b.guid++))),
      e.each(function () {
        b.event.add(this, t, i, r, n);
      })
    );
  }
  function eC(e, t, n) {
    n
      ? (Y.set(e, t, !1),
        b.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var r,
              o,
              s = Y.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (s.length)
                (b.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((s = i.call(arguments)),
                Y.set(this, t, s),
                (r = n(this, t)),
                this[t](),
                s !== (o = Y.get(this, t)) || r ? Y.set(this, t, !1) : (o = {}),
                s !== o)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                );
            } else
              s.length &&
                (Y.set(this, t, {
                  value: b.event.trigger(
                    b.extend(s[0], b.Event.prototype),
                    s.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, t) && b.event.add(e, t, eb);
  }
  (b.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(e);
      if (V(e))
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && b.find.matchesSelector(er, i),
            n.guid || (n.guid = b.guid++),
            (u = v.events) || (u = v.events = Object.create(null)),
            (s = v.handle) ||
              (s = v.handle =
                function (t) {
                  return b.event.triggered !== t.type
                    ? b.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            l = (t = (t || "").match(H) || [""]).length;
          l--;

        )
          (d = g = (a = ex.exec(t[l]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            d &&
              ((f = b.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = b.event.special[d] || {}),
              (c = b.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && b.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, s)) ||
                  (e.addEventListener && e.addEventListener(d, s))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (b.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        for (l = (t = (t || "").match(H) || [""]).length; l--; )
          if (
            ((d = g = (a = ex.exec(t[l]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = b.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                a =
                  a[2] &&
                  RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            s &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                b.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) b.event.remove(e, d + t[l], n, r, !0);
        b.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a = Array(arguments.length),
        u = b.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = b.event.special[u.type] || {};
      for (a[0] = u, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        for (
          s = b.event.handlers.call(this, u, l), t = 0;
          (i = s[t++]) && !u.isPropagationStopped();

        )
          for (
            u.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

          )
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (b.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, a)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        s,
        a = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) {
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], s = {}, n = 0; n < u; n++)
              void 0 === s[(i = (r = t[n]).selector + " ")] &&
                (s[i] = r.needsContext
                  ? -1 < b(i, this).index(l)
                  : b.find(i, this, null, [l]).length),
                s[i] && o.push(r);
            o.length && a.push({ elem: l, handlers: o });
          }
      }
      return (
        (l = this), u < t.length && a.push({ elem: l, handlers: t.slice(u) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(b.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: h(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[b.expando] ? e : new b.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            ep.test(t.type) && t.click && k(t, "input") && eC(t, "click", eb),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            ep.test(t.type) && t.click && k(t, "input") && eC(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (ep.test(t.type) &&
              t.click &&
              k(t, "input") &&
              Y.get(t, "click")) ||
            k(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (b.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (b.Event = function (e, t) {
      if (!(this instanceof b.Event)) return new b.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? eb
              : e_),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && b.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[b.expando] = !0);
    }),
    (b.Event.prototype = {
      constructor: b.Event,
      isDefaultPrevented: e_,
      isPropagationStopped: e_,
      isImmediatePropagationStopped: e_,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = eb),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = eb),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = eb),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    b.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      b.event.addProp
    ),
    b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      b.event.special[e] = {
        setup: function () {
          return eC(this, e, eT), !1;
        },
        trigger: function () {
          return eC(this, e), !0;
        },
        _default: function (t) {
          return Y.get(t.target, e);
        },
        delegateType: t,
      };
    }),
    b.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        b.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = e.relatedTarget,
              i = e.handleObj;
            return (
              (r && (r === this || b.contains(this, r))) ||
                ((e.type = i.origType),
                (n = i.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    b.fn.extend({
      on: function (e, t, n, r) {
        return ew(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ew(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            b(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = e_),
          this.each(function () {
            b.event.remove(this, e, n, t);
          })
        );
      },
    });
  var eS = /<script|<style|<link/i,
    ek = /checked\s*(?:[^=]|=\s*.checked.)/i,
    eE = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function eN(e, t) {
    return (
      (k(e, "table") &&
        k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        b(e).children("tbody")[0]) ||
      e
    );
  }
  function eA(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function eD(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function ej(e, t) {
    var n, r, i, o, s, a;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (a = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), a))
          for (n = 0, r = a[i].length; n < r; n++) b.event.add(t, i, a[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (s = b.extend({}, o)), Q.set(t, s));
    }
  }
  function eq(e, t, n, r) {
    t = o(t);
    var i,
      s,
      a,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      g = p - 1,
      v = t[0],
      m = h(v);
    if (m || (1 < p && "string" == typeof v && !d.checkClone && ek.test(v)))
      return e.each(function (i) {
        var o = e.eq(i);
        m && (t[0] = v.call(this, i, o.html())), eq(o, t, n, r);
      });
    if (
      p &&
      ((s = (i = e$(t, e[0].ownerDocument, !1, e, r)).firstChild),
      1 === i.childNodes.length && (i = s),
      s || r)
    ) {
      for (u = (a = b.map(ev(i, "script"), eA)).length; f < p; f++)
        (l = i),
          f !== g &&
            ((l = b.clone(l, !0, !0)), u && b.merge(a, ev(l, "script"))),
          n.call(e[f], l, f);
      if (u)
        for (c = a[a.length - 1].ownerDocument, b.map(a, eD), f = 0; f < u; f++)
          (l = a[f]),
            eh.test(l.type || "") &&
              !Y.access(l, "globalEval") &&
              b.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? b._evalUrl &&
                  !l.noModule &&
                  b._evalUrl(
                    l.src,
                    { nonce: l.nonce || l.getAttribute("nonce") },
                    c
                  )
                : y(l.textContent.replace(eE, ""), l, c));
    }
    return e;
  }
  function eL(e, t, n) {
    for (var r, i = t ? b.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || b.cleanData(ev(r)),
        r.parentNode &&
          (n && ei(r) && em(ev(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  b.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c = e.cloneNode(!0),
        f = ei(e);
      if (
        !(
          d.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          b.isXMLDoc(e)
        )
      )
        for (s = ev(c), r = 0, i = (o = ev(e)).length; r < i; r++)
          (a = o[r]),
            "input" === (l = (u = s[r]).nodeName.toLowerCase()) &&
            ep.test(a.type)
              ? (u.checked = a.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = a.defaultValue);
      if (t) {
        if (n)
          for (o = o || ev(e), s = s || ev(c), r = 0, i = o.length; r < i; r++)
            ej(o[r], s[r]);
        else ej(e, c);
      }
      return (
        0 < (s = ev(c, "script")).length && em(s, !f && ev(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? b.event.remove(n, r) : b.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    b.fn.extend({
      detach: function (e) {
        return eL(this, e, !0);
      },
      remove: function (e) {
        return eL(this, e);
      },
      text: function (e) {
        return R(
          this,
          function (e) {
            return void 0 === e
              ? b.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return eq(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            eN(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return eq(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = eN(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return eq(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return eq(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (b.cleanData(ev(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return b.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return R(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !eS.test(e) &&
              !eg[(ed.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = b.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (b.cleanData(ev(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (i) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return eq(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            0 > b.inArray(this, e) &&
              (b.cleanData(ev(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    b.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        b.fn[e] = function (e) {
          for (var n, r = [], i = b(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              b(i[a])[t](n),
              s.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var eH = RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    eP = /^--/,
    eO = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    e0 = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    eI = RegExp(en.join("|"), "i"),
    eM = "[\\x20\\t\\r\\n\\f]",
    eW = RegExp("^" + eM + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eM + "+$", "g");
  function e9(e, t, n) {
    var r,
      i,
      o,
      s,
      a = eP.test(t),
      u = e.style;
    return (
      (n = n || eO(e)) &&
        ((s = n.getPropertyValue(t) || n[t]),
        a && s && (s = s.replace(eW, "$1") || void 0),
        "" !== s || ei(e) || (s = b.style(e, t)),
        !d.pixelBoxStyles() &&
          eH.test(s) &&
          eI.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = s),
          (s = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== s ? s + "" : s
    );
  }
  function e1(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          er.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (r = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (s = 36 === n(t.right)),
          (i = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (o = 12 === n(c.offsetWidth / 3)),
          er.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var r,
      i,
      o,
      s,
      a,
      u,
      l = v.createElement("div"),
      c = v.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (d.clearCloneStyle = "content-box" === c.style.backgroundClip),
      b.extend(d, {
        boxSizingReliable: function () {
          return t(), i;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), r;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, n, r, i;
          return (
            null == a &&
              ((t = v.createElement("table")),
              (n = v.createElement("tr")),
              (r = v.createElement("div")),
              (t.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (n.style.cssText = "border:1px solid"),
              (n.style.height = "1px"),
              (r.style.height = "9px"),
              (r.style.display = "block"),
              er.appendChild(t).appendChild(n).appendChild(r),
              (a =
                parseInt((i = e.getComputedStyle(n)).height, 10) +
                  parseInt(i.borderTopWidth, 10) +
                  parseInt(i.borderBottomWidth, 10) ===
                n.offsetHeight),
              er.removeChild(t)),
            a
          );
        },
      }));
  })();
  var eB = ["Webkit", "Moz", "ms"],
    eR = v.createElement("div").style,
    eF = {};
  function e8(e) {
    return (
      b.cssProps[e] ||
      eF[e] ||
      (e in eR
        ? e
        : (eF[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = eB.length;
                n--;

              )
                if ((e = eB[n] + t) in eR) return e;
            })(e) || e))
    );
  }
  var ez = /^(none|table(?!-c[ea]).+)/,
    eX = { position: "absolute", visibility: "hidden", display: "block" },
    e2 = { letterSpacing: "0", fontWeight: "400" };
  function eU(e, t, n) {
    var r = et.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function e3(e, t, n, r, i, o) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (u += b.css(e, n + en[s], !0, i)),
        r
          ? ("content" === n && (u -= b.css(e, "padding" + en[s], !0, i)),
            "margin" !== n &&
              (u -= b.css(e, "border" + en[s] + "Width", !0, i)))
          : ((u += b.css(e, "padding" + en[s], !0, i)),
            "padding" !== n
              ? (u += b.css(e, "border" + en[s] + "Width", !0, i))
              : (a += b.css(e, "border" + en[s] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - 0.5
            )
          ) || 0),
      u
    );
  }
  function e4(e, t, n) {
    var r = eO(e),
      i =
        (!d.boxSizingReliable() || n) &&
        "border-box" === b.css(e, "boxSizing", !1, r),
      o = i,
      s = e9(e, t, r),
      a = "offset" + t[0].toUpperCase() + t.slice(1);
    if (eH.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!d.boxSizingReliable() && i) ||
        (!d.reliableTrDimensions() && k(e, "tr")) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === b.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === b.css(e, "boxSizing", !1, r)),
        (o = a in e) && (s = e[a])),
      (s = parseFloat(s) || 0) +
        e3(e, t, n || (i ? "border" : "content"), o, r, s) +
        "px"
    );
  }
  function e7(e, t, n, r, i) {
    return new e7.prototype.init(e, t, n, r, i);
  }
  b.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = e9(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          s,
          a = U(t),
          u = eP.test(t),
          l = e.style;
        if (
          (u || (t = e8(a)), (s = b.cssHooks[t] || b.cssHooks[a]), void 0 === n)
        )
          return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
        "string" == (o = typeof n) &&
          (i = et.exec(n)) &&
          i[1] &&
          ((n = ea(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (b.cssNumber[a] ? "" : "px")),
            d.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        s,
        a = U(t);
      return (
        eP.test(t) || (t = e8(a)),
        (s = b.cssHooks[t] || b.cssHooks[a]) &&
          "get" in s &&
          (i = s.get(e, !0, n)),
        void 0 === i && (i = e9(e, t, r)),
        "normal" === i && t in e2 && (i = e2[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    b.each(["height", "width"], function (e, t) {
      b.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !ez.test(b.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? e4(e, t, r)
              : e0(e, eX, function () {
                  return e4(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = eO(e),
            s = !d.scrollboxSize() && "absolute" === o.position,
            a = (s || r) && "border-box" === b.css(e, "boxSizing", !1, o),
            u = r ? e3(e, t, r, a, o) : 0;
          return (
            a &&
              s &&
              (u -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  e3(e, t, "border", !1, o) -
                  0.5
              )),
            u &&
              (i = et.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = b.css(e, t))),
            eU(0, n, u)
          );
        },
      };
    }),
    (b.cssHooks.marginLeft = e1(d.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(e9(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              e0(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    b.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (b.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + en[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (b.cssHooks[e + t].set = eU);
    }),
    b.fn.extend({
      css: function (e, t) {
        return R(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (r = eO(e), i = t.length; s < i; s++)
                o[t[s]] = b.css(e, t[s], !1, r);
              return o;
            }
            return void 0 !== n ? b.style(e, t, n) : b.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((b.Tween = e7).prototype = {
      constructor: e7,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || b.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (b.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = e7.propHooks[this.prop];
        return e && e.get ? e.get(this) : e7.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = e7.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                b.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : e7.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = e7.prototype),
    ((e7.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = b.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          b.fx.step[e.prop]
            ? b.fx.step[e.prop](e)
            : 1 === e.elem.nodeType &&
              (b.cssHooks[e.prop] || null != e.elem.style[e8(e.prop)])
            ? b.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }).scrollTop = e7.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (b.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (b.fx = e7.prototype.init),
    (b.fx.step = {});
  var eV,
    eG,
    eY,
    eQ,
    e6 = /^(?:toggle|show|hide)$/,
    eK = /queueHooks$/;
  function e5() {
    return (
      e.setTimeout(function () {
        eV = void 0;
      }),
      (eV = Date.now())
    );
  }
  function eJ(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = en[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function eZ(e, t, n) {
    for (
      var r,
        i = (te.tweeners[t] || []).concat(te.tweeners["*"]),
        o = 0,
        s = i.length;
      o < s;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function te(e, t, n) {
    var r,
      i,
      o = 0,
      s = te.prefilters.length,
      a = b.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = eV || e5(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            s = l.tweens.length;
          o < s;
          o++
        )
          l.tweens[o].run(r);
        return (
          a.notifyWith(e, [l, r, n]),
          r < 1 && s
            ? n
            : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
        );
      },
      l = a.promise({
        elem: e,
        props: b.extend({}, t),
        opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: eV || e5(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = b.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t]))
              : a.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, s;
        for (n in e)
          if (
            ((i = t[(r = U(n))]),
            Array.isArray((o = e[n])) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (s = b.cssHooks[r]) && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      o < s;
      o++
    )
      if ((r = te.prefilters[o].call(l, e, c, l.opts)))
        return (
          h(r.stop) &&
            (b._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      b.map(c, eZ, l),
      h(l.opts.start) && l.opts.start.call(e, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      b.fx.timer(b.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (b.Animation = b.extend(te, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ea(n.elem, e, et.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      h(e) ? ((t = e), (e = ["*"])) : (e = e.match(H));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (te.tweeners[n] = te.tweeners[n] || []),
          te.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && es(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (s = b._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          p.always(function () {
            p.always(function () {
              s.unqueued--, b.queue(e, "fx").length || s.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), e6.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || b.style(e, r);
          }
        if ((u = !b.isEmptyObject(t)) || !b.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = b.css(e, "display")) &&
              (l
                ? (c = l)
                : (el([e], !0),
                  (l = e.style.display || l),
                  (c = b.css(e, "display")),
                  el([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === b.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && (l = "none" === (c = h.display) ? "" : c)),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && el([e], !0),
              p.done(function () {
                for (r in (g || el([e]), Y.remove(e, "fxshow"), d))
                  b.style(e, r, d[r]);
              })),
              (u = eZ(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? te.prefilters.unshift(e) : te.prefilters.push(e);
    },
  })),
    (b.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? b.extend({}, e)
          : {
              complete: n || (!n && t) || (h(e) && e),
              duration: e,
              easing: (n && t) || (t && !h(t) && t),
            };
      return (
        b.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in b.fx.speeds
              ? (r.duration = b.fx.speeds[r.duration])
              : (r.duration = b.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          h(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue);
        }),
        r
      );
    }),
    b.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(es)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = b.isEmptyObject(e),
          o = b.speed(t, n, r),
          s = function () {
            var t = te(this, b.extend({}, e), o);
            (i || Y.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = b.timers,
              s = Y.get(this);
            if (i) s[i] && s[i].stop && r(s[i]);
            else for (i in s) s[i] && s[i].stop && eK.test(i) && r(s[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || b.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = Y.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = b.timers,
              s = r ? r.length : 0;
            for (
              n.finish = !0,
                b.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    b.each(["toggle", "show", "hide"], function (e, t) {
      var n = b.fn[t];
      b.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(eJ(t, !0), e, r, i);
      };
    }),
    b.each(
      {
        slideDown: eJ("show"),
        slideUp: eJ("hide"),
        slideToggle: eJ("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        b.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (b.timers = []),
    (b.fx.tick = function () {
      var e,
        t = 0,
        n = b.timers;
      for (eV = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || b.fx.stop(), (eV = void 0);
    }),
    (b.fx.timer = function (e) {
      b.timers.push(e), b.fx.start();
    }),
    (b.fx.interval = 13),
    (b.fx.start = function () {
      eG ||
        ((eG = !0),
        (function t() {
          eG &&
            (!1 === v.hidden && e.requestAnimationFrame
              ? e.requestAnimationFrame(t)
              : e.setTimeout(t, b.fx.interval),
            b.fx.tick());
        })());
    }),
    (b.fx.stop = function () {
      eG = null;
    }),
    (b.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (b.fn.delay = function (t, n) {
      return (
        (t = (b.fx && b.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (eY = v.createElement("input")),
    (eQ = v.createElement("select").appendChild(v.createElement("option"))),
    (eY.type = "checkbox"),
    (d.checkOn = "" !== eY.value),
    (d.optSelected = eQ.selected),
    ((eY = v.createElement("input")).value = "t"),
    (eY.type = "radio"),
    (d.radioValue = "t" === eY.value);
  var tt,
    tn = b.expr.attrHandle;
  b.fn.extend({
    attr: function (e, t) {
      return R(this, b.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        b.removeAttr(this, e);
      });
    },
  }),
    b.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? b.prop(e, t, n)
            : ((1 === o && b.isXMLDoc(e)) ||
                (i =
                  b.attrHooks[t.toLowerCase()] ||
                  (b.expr.match.bool.test(t) ? tt : void 0)),
              void 0 !== n
                ? null === n
                  ? void b.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = b.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!d.radioValue && "radio" === t && k(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(H);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (tt = {
      set: function (e, t, n) {
        return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    b.each(b.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = tn[t] || b.find.attr;
      tn[t] = function (e, t, r) {
        var i,
          o,
          s = t.toLowerCase();
        return (
          r ||
            ((o = tn[s]),
            (tn[s] = i),
            (i = null != n(e, t, r) ? s : null),
            (tn[s] = o)),
          i
        );
      };
    });
  var tr = /^(?:input|select|textarea|button)$/i,
    ti = /^(?:a|area)$/i;
  function to(e) {
    return (e.match(H) || []).join(" ");
  }
  function ts(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function ta(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(H)) || [];
  }
  b.fn.extend({
    prop: function (e, t) {
      return R(this, b.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[b.propFix[e] || e];
      });
    },
  }),
    b.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && b.isXMLDoc(e)) ||
              ((t = b.propFix[t] || t), (i = b.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = b.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : tr.test(e.nodeName) || (ti.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    d.optSelected ||
      (b.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    b.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        b.propFix[this.toLowerCase()] = this;
      }
    ),
    b.fn.extend({
      addClass: function (e) {
        var t, n, r, i, o, s;
        return h(e)
          ? this.each(function (t) {
              b(this).addClass(e.call(this, t, ts(this)));
            })
          : (t = ta(e)).length
          ? this.each(function () {
              if (
                ((r = ts(this)), (n = 1 === this.nodeType && " " + to(r) + " "))
              ) {
                for (o = 0; o < t.length; o++)
                  (i = t[o]), 0 > n.indexOf(" " + i + " ") && (n += i + " ");
                r !== (s = to(n)) && this.setAttribute("class", s);
              }
            })
          : this;
      },
      removeClass: function (e) {
        var t, n, r, i, o, s;
        return h(e)
          ? this.each(function (t) {
              b(this).removeClass(e.call(this, t, ts(this)));
            })
          : arguments.length
          ? (t = ta(e)).length
            ? this.each(function () {
                if (
                  ((r = ts(this)),
                  (n = 1 === this.nodeType && " " + to(r) + " "))
                ) {
                  for (o = 0; o < t.length; o++)
                    for (i = t[o]; -1 < n.indexOf(" " + i + " "); )
                      n = n.replace(" " + i + " ", " ");
                  r !== (s = to(n)) && this.setAttribute("class", s);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (e, t) {
        var n,
          r,
          i,
          o,
          s = typeof e,
          a = "string" === s || Array.isArray(e);
        return h(e)
          ? this.each(function (n) {
              b(this).toggleClass(e.call(this, n, ts(this), t), t);
            })
          : "boolean" == typeof t && a
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ((n = ta(e)),
            this.each(function () {
              if (a)
                for (o = b(this), i = 0; i < n.length; i++)
                  (r = n[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== e && "boolean" !== s) ||
                  ((r = ts(this)) && Y.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === e ? "" : Y.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); )
          if (1 === n.nodeType && -1 < (" " + to(ts(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var tu = /\r/g;
  b.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = h(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, b(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : Array.isArray(i) &&
                  (i = b.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                b.valHooks[this.type] ||
                b.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? (t = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(i, "value"))
          ? n
          : "string" == typeof (n = i.value)
          ? n.replace(tu, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    b.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = b.find.attr(e, "value");
            return null != t ? t : to(b.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              u = s ? o + 1 : i.length;
            for (r = o < 0 ? u : s ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))
              ) {
                if (((t = b(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = b.makeArray(t), s = i.length;
              s--;

            )
              ((r = i[s]).selected =
                -1 < b.inArray(b.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    b.each(["radio", "checkbox"], function () {
      (b.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < b.inArray(b(e).val(), t));
        },
      }),
        d.checkOn ||
          (b.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (d.focusin = "onfocusin" in e);
  var tl = /^(?:focusinfocus|focusoutblur)$/,
    tc = function (e) {
      e.stopPropagation();
    };
  b.extend(b.event, {
    trigger: function (t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        f,
        p,
        d,
        m = [r || v],
        y = c.call(t, "type") ? t.type : t,
        $ = c.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = d = a = r = r || v),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !tl.test(y + b.event.triggered) &&
          (-1 < y.indexOf(".") && ((y = ($ = y.split(".")).shift()), $.sort()),
          (l = 0 > y.indexOf(":") && "on" + y),
          ((t = t[b.expando]
            ? t
            : new b.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
          (t.namespace = $.join(".")),
          (t.rnamespace = t.namespace
            ? RegExp("(^|\\.)" + $.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : b.makeArray(n, [t])),
          (p = b.event.special[y] || {}),
          i || !p.trigger || !1 !== p.trigger.apply(r, n)))
      ) {
        if (!i && !p.noBubble && !g(r)) {
          for (
            u = p.delegateType || y, tl.test(u + y) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            m.push(s), (a = s);
          a === (r.ownerDocument || v) &&
            m.push(a.defaultView || a.parentWindow || e);
        }
        for (o = 0; (s = m[o++]) && !t.isPropagationStopped(); )
          (d = s),
            (t.type = 1 < o ? u : p.bindType || y),
            (f =
              (Y.get(s, "events") || Object.create(null))[t.type] &&
              Y.get(s, "handle")) && f.apply(s, n),
            (f = l && s[l]) &&
              f.apply &&
              V(s) &&
              ((t.result = f.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          i ||
            t.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(m.pop(), n)) ||
            !V(r) ||
            (l &&
              h(r[y]) &&
              !g(r) &&
              ((a = r[l]) && (r[l] = null),
              (b.event.triggered = y),
              t.isPropagationStopped() && d.addEventListener(y, tc),
              r[y](),
              t.isPropagationStopped() && d.removeEventListener(y, tc),
              (b.event.triggered = void 0),
              a && (r[l] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = b.extend(new b.Event(), n, { type: e, isSimulated: !0 });
      b.event.trigger(r, null, t);
    },
  }),
    b.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          b.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return b.event.trigger(e, t, n, !0);
      },
    }),
    d.focusin ||
      b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          b.event.simulate(t, e.target, b.event.fix(e));
        };
        b.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this.document || this,
              i = Y.access(r, t);
            i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this.document || this,
              i = Y.access(r, t) - 1;
            i
              ? Y.access(r, t, i)
              : (r.removeEventListener(e, n, !0), Y.remove(r, t));
          },
        };
      });
  var tf = e.location,
    tp = { guid: Date.now() },
    td = /\?/;
  b.parseXML = function (t) {
    var n, r;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (i) {}
    return (
      (r = n && n.getElementsByTagName("parsererror")[0]),
      (n && !r) ||
        b.error(
          "Invalid XML: " +
            (r
              ? b
                  .map(r.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : t)
        ),
      n
    );
  };
  var th = /\[\]$/,
    tg = /\r?\n/g,
    tv = /^(?:submit|button|image|reset|file)$/i,
    tm = /^(?:input|select|textarea|keygen)/i;
  function ty(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      b.each(t, function (t, i) {
        n || th.test(e)
          ? r(e, i)
          : ty(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== $(t)) r(e, t);
    else for (i in t) ty(e + "[" + i + "]", t[i], n, r);
  }
  (b.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = h(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !b.isPlainObject(e)))
      b.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) ty(n, e[n], t, i);
    return r.join("&");
  }),
    b.fn.extend({
      serialize: function () {
        return b.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = b.prop(this, "elements");
          return e ? b.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !b(this).is(":disabled") &&
              tm.test(this.nodeName) &&
              !tv.test(e) &&
              (this.checked || !ep.test(e))
            );
          })
          .map(function (e, t) {
            var n = b(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? b.map(n, function (e) {
                  return { name: t.name, value: e.replace(tg, "\r\n") };
                })
              : { name: t.name, value: n.replace(tg, "\r\n") };
          })
          .get();
      },
    });
  var t$ = /%20/g,
    tx = /#.*$/,
    tb = /([?&])_=[^&]*/,
    t_ = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    tT = /^(?:GET|HEAD)$/,
    tw = /^\/\//,
    tC = {},
    tS = {},
    tk = "*/".concat("*"),
    tE = v.createElement("a");
  function tN(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(H) || [];
      if (h(n))
        for (; (r = o[i++]); )
          "+" === r[0]
            ? (e[(r = r.slice(1) || "*")] = e[r] || []).unshift(n)
            : (e[r] = e[r] || []).push(n);
    };
  }
  function tA(e, t, n, r) {
    var i = {},
      o = e === tS;
    function s(a) {
      var u;
      return (
        (i[a] = !0),
        b.each(e[a] || [], function (e, a) {
          var l = a(t, n, r);
          return "string" != typeof l || o || i[l]
            ? o
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), s(l), !1);
        }),
        u
      );
    }
    return s(t.dataTypes[0]) || (!i["*"] && s("*"));
  }
  function tD(e, t) {
    var n,
      r,
      i = b.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && b.extend(!0, e, r), e;
  }
  (tE.href = tf.href),
    b.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: tf.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            tf.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": tk,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": b.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? tD(tD(e, b.ajaxSettings), t) : tD(b.ajaxSettings, e);
      },
      ajaxPrefilter: tN(tC),
      ajaxTransport: tN(tS),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c,
          f,
          p,
          d = b.ajaxSetup({}, n),
          h = d.context || d,
          g = d.context && (h.nodeType || h.jquery) ? b(h) : b.event,
          m = b.Deferred(),
          y = b.Callbacks("once memory"),
          $ = d.statusCode || {},
          x = {},
          _ = {},
          T = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (l) {
                if (!s)
                  for (s = {}; (t = t_.exec(o)); )
                    s[t[1].toLowerCase() + " "] = (
                      s[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = s[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return l ? o : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == l &&
                  (x[(e = _[e.toLowerCase()] = _[e.toLowerCase()] || e)] = t),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == l && (d.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e) {
                if (l) w.always(e[w.status]);
                else for (t in e) $[t] = [$[t], e[t]];
              }
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return r && r.abort(t), k(0, t), this;
            },
          };
        if (
          (m.promise(w),
          (d.url = ((t || d.url || tf.href) + "").replace(
            tw,
            tf.protocol + "//"
          )),
          (d.type = n.method || n.type || d.method || d.type),
          (d.dataTypes = (d.dataType || "*").toLowerCase().match(H) || [""]),
          null == d.crossDomain)
        ) {
          u = v.createElement("a");
          try {
            (u.href = d.url),
              (u.href = u.href),
              (d.crossDomain =
                tE.protocol + "//" + tE.host != u.protocol + "//" + u.host);
          } catch (C) {
            d.crossDomain = !0;
          }
        }
        if (
          (d.data &&
            d.processData &&
            "string" != typeof d.data &&
            (d.data = b.param(d.data, d.traditional)),
          tA(tC, d, n, w),
          l)
        )
          return w;
        for (f in ((c = b.event && d.global) &&
          0 == b.active++ &&
          b.event.trigger("ajaxStart"),
        (d.type = d.type.toUpperCase()),
        (d.hasContent = !tT.test(d.type)),
        (i = d.url.replace(tx, "")),
        d.hasContent
          ? d.data &&
            d.processData &&
            0 ===
              (d.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (d.data = d.data.replace(t$, "+"))
          : ((p = d.url.slice(i.length)),
            d.data &&
              (d.processData || "string" == typeof d.data) &&
              ((i += (td.test(i) ? "&" : "?") + d.data), delete d.data),
            !1 === d.cache &&
              ((i = i.replace(tb, "$1")),
              (p = (td.test(i) ? "&" : "?") + "_=" + tp.guid++ + p)),
            (d.url = i + p)),
        d.ifModified &&
          (b.lastModified[i] &&
            w.setRequestHeader("If-Modified-Since", b.lastModified[i]),
          b.etag[i] && w.setRequestHeader("If-None-Match", b.etag[i])),
        ((d.data && d.hasContent && !1 !== d.contentType) || n.contentType) &&
          w.setRequestHeader("Content-Type", d.contentType),
        w.setRequestHeader(
          "Accept",
          d.dataTypes[0] && d.accepts[d.dataTypes[0]]
            ? d.accepts[d.dataTypes[0]] +
                ("*" !== d.dataTypes[0] ? ", " + tk + "; q=0.01" : "")
            : d.accepts["*"]
        ),
        d.headers))
          w.setRequestHeader(f, d.headers[f]);
        if (d.beforeSend && (!1 === d.beforeSend.call(h, w, d) || l))
          return w.abort();
        if (
          ((T = "abort"),
          y.add(d.complete),
          w.done(d.success),
          w.fail(d.error),
          (r = tA(tS, d, n, w)))
        ) {
          if (((w.readyState = 1), c && g.trigger("ajaxSend", [w, d]), l))
            return w;
          d.async &&
            0 < d.timeout &&
            (a = e.setTimeout(function () {
              w.abort("timeout");
            }, d.timeout));
          try {
            (l = !1), r.send(x, k);
          } catch (S) {
            if (l) throw S;
            k(-1, S);
          }
        } else k(-1, "No Transport");
        function k(t, n, s, u) {
          var f,
            p,
            v,
            x,
            _,
            T = n;
          l ||
            ((l = !0),
            a && e.clearTimeout(a),
            (r = void 0),
            (o = u || ""),
            (w.readyState = 0 < t ? 4 : 0),
            (f = (200 <= t && t < 300) || 304 === t),
            s &&
              (x = (function (e, t, n) {
                for (
                  var r, i, o, s, a = e.contents, u = e.dataTypes;
                  "*" === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r) {
                  for (i in a)
                    if (a[i] && a[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    s || (s = i);
                  }
                  o = o || s;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(d, w, s)),
            !f &&
              -1 < b.inArray("script", d.dataTypes) &&
              0 > b.inArray("json", d.dataTypes) &&
              (d.converters["text script"] = function () {}),
            (x = (function (e, t, n, r) {
              var i,
                o,
                s,
                a,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                ) {
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(s = l[u + " " + o] || l["* " + o])) {
                      for (i in l)
                        if (
                          (a = i.split(" "))[1] === o &&
                          (s = l[u + " " + a[0]] || l["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = l[i])
                            : !0 !== l[i] && ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    }
                    if (!0 !== s) {
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (f) {
                          return {
                            state: "parsererror",
                            error: s
                              ? f
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                    }
                  }
                }
              return { state: "success", data: t };
            })(d, x, w, f)),
            f
              ? (d.ifModified &&
                  ((_ = w.getResponseHeader("Last-Modified")) &&
                    (b.lastModified[i] = _),
                  (_ = w.getResponseHeader("etag")) && (b.etag[i] = _)),
                204 === t || "HEAD" === d.type
                  ? (T = "nocontent")
                  : 304 === t
                  ? (T = "notmodified")
                  : ((T = x.state), (p = x.data), (f = !(v = x.error))))
              : ((v = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
            (w.status = t),
            (w.statusText = (n || T) + ""),
            f ? m.resolveWith(h, [p, T, w]) : m.rejectWith(h, [w, T, v]),
            w.statusCode($),
            ($ = void 0),
            c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [w, d, f ? p : v]),
            y.fireWith(h, [w, T]),
            c &&
              (g.trigger("ajaxComplete", [w, d]),
              --b.active || b.event.trigger("ajaxStop")));
        }
        return w;
      },
      getJSON: function (e, t, n) {
        return b.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return b.get(e, void 0, t, "script");
      },
    }),
    b.each(["get", "post"], function (e, t) {
      b[t] = function (e, n, r, i) {
        return (
          h(n) && ((i = i || r), (r = n), (n = void 0)),
          b.ajax(
            b.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              b.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    b.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (b._evalUrl = function (e, t, n) {
      return b.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          b.globalEval(e, t, n);
        },
      });
    }),
    b.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (h(e) && (e = e.call(this[0])),
            (t = b(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return h(e)
          ? this.each(function (t) {
              b(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = b(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = h(e);
        return this.each(function (n) {
          b(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              b(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (b.expr.pseudos.hidden = function (e) {
      return !b.expr.pseudos.visible(e);
    }),
    (b.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (b.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var tj = { 0: 200, 1223: 204 },
    tq = b.ajaxSettings.xhr();
  (d.cors = !!tq && "withCredentials" in tq),
    (d.ajax = tq = !!tq),
    b.ajaxTransport(function (t) {
      var n, r;
      if (d.cors || (tq && !t.crossDomain))
        return {
          send: function (i, o) {
            var s,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            for (s in (t.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(t.mimeType),
            t.crossDomain ||
              i["X-Requested-With"] ||
              (i["X-Requested-With"] = "XMLHttpRequest"),
            i))
              a.setRequestHeader(s, i[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? o(0, "error")
                      : o(a.status, a.statusText)
                    : o(
                        tj[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (r = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = r)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (u) {
              if (n) throw u;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    b.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    b.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return b.globalEval(e), e;
        },
      },
    }),
    b.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    b.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (r, i) {
            (t = b("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && i("error" === e.type ? 404 : 200, e.type);
                })
              )),
              v.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var tL,
    tH = [],
    tP = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = tH.pop() || b.expando + "_" + tp.guid++;
      return (this[e] = !0), e;
    },
  }),
    b.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        s,
        a =
          !1 !== t.jsonp &&
          (tP.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              tP.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(tP, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (td.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return s || b.error(i + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            s = arguments;
          }),
          r.always(function () {
            void 0 === o ? b(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), tH.push(i)),
              s && h(o) && o(s[0]),
              (s = o = void 0);
          }),
          "script"
        );
    }),
    (d.createHTMLDocument =
      (((tL = v.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === tL.childNodes.length)),
    (b.parseHTML = function (e, t, n) {
      var r, i, o;
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (d.createHTMLDocument
              ? (((r = (t =
                  v.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = v.location.href),
                t.head.appendChild(r))
              : (t = v)),
          (o = !n && []),
          (i = E.exec(e))
            ? [t.createElement(i[1])]
            : ((i = e$([e], t, o)),
              o && o.length && b(o).remove(),
              b.merge([], i.childNodes)));
    }),
    (b.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        s = this,
        a = e.indexOf(" ");
      return (
        -1 < a && ((r = to(e.slice(a))), (e = e.slice(0, a))),
        h(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < s.length &&
          b
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                s.html(r ? b("<div>").append(b.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (b.expr.pseudos.animated = function (e) {
      return b.grep(b.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (b.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l = b.css(e, "position"),
          c = b(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (a = c.offset()),
          (o = b.css(e, "top")),
          (u = b.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((s = (r = c.position()).top), (i = r.left))
            : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          h(t) && (t = t.call(e, n, b.extend({}, a))),
          null != t.top && (f.top = t.top - a.top + s),
          null != t.left && (f.left = t.left - a.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    b.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                b.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === b.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === b.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = b(e).offset()).top += b.css(e, "borderTopWidth", !0)),
              (i.left += b.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - b.css(r, "marginTop", !0),
            left: t.left - i.left - b.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === b.css(e, "position");

          )
            e = e.offsetParent;
          return e || er;
        });
      },
    }),
    b.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function (r) {
          return R(
            this,
            function (e, r, i) {
              var o;
              if (
                (g(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    b.each(["top", "left"], function (e, t) {
      b.cssHooks[t] = e1(d.pixelPosition, function (e, n) {
        if (n)
          return (n = e9(e, t)), eH.test(n) ? b(e).position()[t] + "px" : n;
      });
    }),
    b.each({ Height: "height", Width: "width" }, function (e, t) {
      b.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          b.fn[r] = function (i, o) {
            var s = arguments.length && (n || "boolean" != typeof i),
              a = n || (!0 === i || !0 === o ? "margin" : "border");
            return R(
              this,
              function (t, n, i) {
                var o;
                return g(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? b.css(t, n, a)
                  : b.style(t, n, i, a);
              },
              t,
              s ? i : void 0,
              s
            );
          };
        }
      );
    }),
    b.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        b.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    b.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    b.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        b.fn[t] = function (e, n) {
          return 0 < arguments.length
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var tO = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (b.proxy = function (e, t) {
    var n, r, o;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), h(e)))
      return (
        (r = i.call(arguments, 2)),
        ((o = function () {
          return e.apply(t || this, r.concat(i.call(arguments)));
        }).guid = e.guid =
          e.guid || b.guid++),
        o
      );
  }),
    (b.holdReady = function (e) {
      e ? b.readyWait++ : b.ready(!0);
    }),
    (b.isArray = Array.isArray),
    (b.parseJSON = JSON.parse),
    (b.nodeName = k),
    (b.isFunction = h),
    (b.isWindow = g),
    (b.camelCase = U),
    (b.type = $),
    (b.now = Date.now),
    (b.isNumeric = function (e) {
      var t = b.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (b.trim = function (e) {
      return null == e ? "" : (e + "").replace(tO, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return b;
      });
  var t0 = e.jQuery,
    tI = e.$;
  return (
    (b.noConflict = function (t) {
      return e.$ === b && (e.$ = tI), t && e.jQuery === b && (e.jQuery = t0), b;
    }),
    void 0 === t && (e.jQuery = e.$ = b),
    b
  );
});
