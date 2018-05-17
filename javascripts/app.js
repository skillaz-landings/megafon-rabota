!function () {
  "use strict";
  var e = "undefined" == typeof global ? self : global;
  if ("function" != typeof e.require) {
    var t = {}, n = {}, i = {}, o = {}.hasOwnProperty, r = /^\.\.?(\/|$)/, s = function (e, t) {
      for (var n, i = [], o = (r.test(t) ? e + "/" + t : t).split("/"), s = 0, a = o.length; s < a; s++) n = o[s], ".." === n ? i.pop() : "." !== n && "" !== n && i.push(n);
      return i.join("/")
    }, a = function (e) {
      return e.split("/").slice(0, -1).join("/")
    }, l = function (t) {
      return function (n) {
        var i = s(a(t), n);
        return e.require(i, t)
      }
    }, d = function (e, t) {
      var i = v && v.createHot(e), o = {id: e, exports: {}, hot: i};
      return n[e] = o, t(o.exports, l(e), o), o.exports
    }, u = function (e) {
      return i[e] ? u(i[e]) : e
    }, c = function (e, t) {
      return u(s(a(e), t))
    }, p = function (e, i) {
      null == i && (i = "/");
      var r = u(e);
      if (o.call(n, r)) return n[r].exports;
      if (o.call(t, r)) return d(r, t[r]);
      throw new Error("Cannot find module '" + e + "' from '" + i + "'")
    };
    p.alias = function (e, t) {
      i[t] = e
    };
    var f = /\.[^.\/]+$/, h = /\/index(\.[^\/]+)?$/, y = function (e) {
      if (f.test(e)) {
        var t = e.replace(f, "");
        o.call(i, t) && i[t].replace(f, "") !== t + "/index" || (i[t] = e)
      }
      if (h.test(e)) {
        var n = e.replace(h, "");
        o.call(i, n) || (i[n] = e)
      }
    };
    p.register = p.define = function (e, i) {
      if (e && "object" == typeof e) for (var r in e) o.call(e, r) && p.register(r, e[r]); else t[e] = i, delete n[e], y(e)
    }, p.list = function () {
      var e = [];
      for (var n in t) o.call(t, n) && e.push(n);
      return e
    };
    var v = e._hmr && new e._hmr(c, p, t, n);
    p._cache = n, p.hmr = v && v.wrap, p.brunch = !0, e.require = p
  }
}(), function () {
  var e, t = ("undefined" == typeof window ? this : window, function (e, t, n) {
    var i = {}, o = function (t, n) {
      var r;
      try {
        return r = e(n + "/node_modules/" + t)
      } catch (s) {
        if (s.toString().indexOf("Cannot find module") === -1) throw s;
        if (n.indexOf("node_modules") !== -1) {
          var a = n.split("/"), l = a.lastIndexOf("node_modules"), d = a.slice(0, l).join("/");
          return o(t, d)
        }
      }
      return i
    };
    return function (r) {
      if (r in t && (r = t[r]), r) {
        if ("." !== r[0] && n) {
          var s = o(r, n);
          if (s !== i) return s
        }
        return e(r)
      }
    }
  });
  require.register("jquery/dist/jquery.js", function (e, n, i) {
    n = t(n, {}, "jquery"), function () {
      !function (e, t) {
        "use strict";
        "object" == typeof i && "object" == typeof i.exports ? i.exports = e.document ? t(e, !0) : function (e) {
          if (!e.document) throw new Error("jQuery requires a window with a document");
          return t(e)
        } : t(e)
      }("undefined" != typeof window ? window : this, function (e, t) {
        "use strict";

        function n(e, t, n) {
          t = t || se;
          var i, o = t.createElement("script");
          if (o.text = e, n) for (i in we) n[i] && (o[i] = n[i]);
          t.head.appendChild(o).parentNode.removeChild(o)
        }

        function i(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[fe.call(e)] || "object" : typeof e
        }

        function o(e) {
          var t = !!e && "length" in e && e.length, n = i(e);
          return !me(e) && !be(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function r(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function s(e, t, n) {
          return me(t) ? Te.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
          }) : t.nodeType ? Te.grep(e, function (e) {
            return e === t !== n
          }) : "string" != typeof t ? Te.grep(e, function (e) {
            return ce.call(t, e) > -1 !== n
          }) : Te.filter(t, e, n)
        }

        function a(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType;) ;
          return e
        }

        function l(e) {
          var t = {};
          return Te.each(e.match(Ie) || [], function (e, n) {
            t[n] = !0
          }), t
        }

        function d(e) {
          return e
        }

        function u(e) {
          throw e
        }

        function c(e, t, n, i) {
          var o;
          try {
            e && me(o = e.promise) ? o.call(e).done(t).fail(n) : e && me(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
          } catch (e) {
            n.apply(void 0, [e])
          }
        }

        function p() {
          se.removeEventListener("DOMContentLoaded", p), e.removeEventListener("load", p), Te.ready()
        }

        function f(e, t) {
          return t.toUpperCase()
        }

        function h(e) {
          return e.replace(Me, "ms-").replace(Re, f)
        }

        function y() {
          this.expando = Te.expando + y.uid++
        }

        function v(e) {
          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Be.test(e) ? JSON.parse(e) : e)
        }

        function g(e, t, n) {
          var i;
          if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(We, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
            try {
              n = v(n)
            } catch (o) {
            }
            _e.set(e, t, n)
          } else n = void 0;
          return n
        }

        function m(e, t, n, i) {
          var o, r, s = 20, a = i ? function () {
              return i.cur()
            } : function () {
              return Te.css(e, t, "")
            }, l = a(), d = n && n[3] || (Te.cssNumber[t] ? "" : "px"),
            u = (Te.cssNumber[t] || "px" !== d && +l) && Ve.exec(Te.css(e, t));
          if (u && u[3] !== d) {
            for (l /= 2, d = d || u[3], u = +l || 1; s--;) Te.style(e, t, u + d), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
            u = 2 * u, Te.style(e, t, u + d), n = n || []
          }
          return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = u, i.end = o)), o
        }

        function b(e) {
          var t, n = e.ownerDocument, i = e.nodeName, o = Ge[i];
          return o ? o : (t = n.body.appendChild(n.createElement(i)), o = Te.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ge[i] = o, o)
        }

        function w(e, t) {
          for (var n, i, o = [], r = 0, s = e.length; r < s; r++) i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = ze.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Xe(i) && (o[r] = b(i))) : "none" !== n && (o[r] = "none", ze.set(i, "display", n)));
          for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
          return e
        }

        function x(e, t) {
          var n;
          return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? Te.merge([e], n) : n
        }

        function T(e, t) {
          for (var n = 0, i = e.length; n < i; n++) ze.set(e[n], "globalEval", !t || ze.get(t[n], "globalEval"))
        }

        function k(e, t, n, o, r) {
          for (var s, a, l, d, u, c, p = t.createDocumentFragment(), f = [], h = 0, y = e.length; h < y; h++) if (s = e[h], s || 0 === s) if ("object" === i(s)) Te.merge(f, s.nodeType ? [s] : s); else if (tt.test(s)) {
            for (a = a || p.appendChild(t.createElement("div")), l = (Ke.exec(s) || ["", ""])[1].toLowerCase(), d = et[l] || et._default, a.innerHTML = d[1] + Te.htmlPrefilter(s) + d[2], c = d[0]; c--;) a = a.lastChild;
            Te.merge(f, a.childNodes), a = p.firstChild, a.textContent = ""
          } else f.push(t.createTextNode(s));
          for (p.textContent = "", h = 0; s = f[h++];) if (o && Te.inArray(s, o) > -1) r && r.push(s); else if (u = Te.contains(s.ownerDocument, s), a = x(p.appendChild(s), "script"), u && T(a), n) for (c = 0; s = a[c++];) Ze.test(s.type || "") && n.push(s);
          return p
        }

        function S() {
          return !0
        }

        function C() {
          return !1
        }

        function E() {
          try {
            return se.activeElement
          } catch (e) {
          }
        }

        function $(e, t, n, i, o, r) {
          var s, a;
          if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) $(e, a, n, i, t[a], r);
            return e
          }
          if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = C; else if (!o) return e;
          return 1 === r && (s = o, o = function (e) {
            return Te().off(e), s.apply(this, arguments)
          }, o.guid = s.guid || (s.guid = Te.guid++)), e.each(function () {
            Te.event.add(this, t, o, i, n)
          })
        }

        function A(e, t) {
          return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? Te(e).children("tbody")[0] || e : e
        }

        function P(e) {
          return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function D(e) {
          return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function j(e, t) {
          var n, i, o, r, s, a, l, d;
          if (1 === t.nodeType) {
            if (ze.hasData(e) && (r = ze.access(e), s = ze.set(t, r), d = r.events)) {
              delete s.handle, s.events = {};
              for (o in d) for (n = 0, i = d[o].length; n < i; n++) Te.event.add(t, o, d[o][n])
            }
            _e.hasData(e) && (a = _e.access(e), l = Te.extend({}, a), _e.set(t, l))
          }
        }

        function N(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && Je.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function L(e, t, i, o) {
          t = de.apply([], t);
          var r, s, a, l, d, u, c = 0, p = e.length, f = p - 1, h = t[0], y = me(h);
          if (y || p > 1 && "string" == typeof h && !ge.checkClone && lt.test(h)) return e.each(function (n) {
            var r = e.eq(n);
            y && (t[0] = h.call(this, n, r.html())), L(r, t, i, o)
          });
          if (p && (r = k(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (a = Te.map(x(r, "script"), P), l = a.length; c < p; c++) d = r, c !== f && (d = Te.clone(d, !0, !0), l && Te.merge(a, x(d, "script"))), i.call(e[c], d, c);
            if (l) for (u = a[a.length - 1].ownerDocument, Te.map(a, D), c = 0; c < l; c++) d = a[c], Ze.test(d.type || "") && !ze.access(d, "globalEval") && Te.contains(u, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? Te._evalUrl && Te._evalUrl(d.src) : n(d.textContent.replace(dt, ""), u, d))
          }
          return e
        }

        function I(e, t, n) {
          for (var i, o = t ? Te.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || Te.cleanData(x(i)), i.parentNode && (n && Te.contains(i.ownerDocument, i) && T(x(i, "script")), i.parentNode.removeChild(i));
          return e
        }

        function O(e, t, n) {
          var i, o, r, s, a = e.style;
          return n = n || ct(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || Te.contains(e.ownerDocument, e) || (s = Te.style(e, t)), !ge.pixelBoxStyles() && ut.test(s) && pt.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function q(e, t) {
          return {
            get: function () {
              return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
          }
        }

        function H(e) {
          if (e in mt) return e;
          for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--;) if (e = gt[n] + t, e in mt) return e
        }

        function M(e) {
          var t = Te.cssProps[e];
          return t || (t = Te.cssProps[e] = H(e) || e), t
        }

        function R(e, t, n) {
          var i = Ve.exec(t);
          return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function F(e, t, n, i, o, r) {
          var s = "width" === t ? 1 : 0, a = 0, l = 0;
          if (n === (i ? "border" : "content")) return 0;
          for (; s < 4; s += 2) "margin" === n && (l += Te.css(e, n + Qe[s], !0, o)), i ? ("content" === n && (l -= Te.css(e, "padding" + Qe[s], !0, o)), "margin" !== n && (l -= Te.css(e, "border" + Qe[s] + "Width", !0, o))) : (l += Te.css(e, "padding" + Qe[s], !0, o), "padding" !== n ? l += Te.css(e, "border" + Qe[s] + "Width", !0, o) : a += Te.css(e, "border" + Qe[s] + "Width", !0, o));
          return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))), l
        }

        function z(e, t, n) {
          var i = ct(e), o = O(e, t, i), r = "border-box" === Te.css(e, "boxSizing", !1, i), s = r;
          if (ut.test(o)) {
            if (!n) return o;
            o = "auto"
          }
          return s = s && (ge.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === Te.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), o = parseFloat(o) || 0, o + F(e, t, n || (r ? "border" : "content"), s, i, o) + "px"
        }

        function _(e, t, n, i, o) {
          return new _.prototype.init(e, t, n, i, o)
        }

        function B() {
          wt && (se.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(B) : e.setTimeout(B, Te.fx.interval), Te.fx.tick())
        }

        function W() {
          return e.setTimeout(function () {
            bt = void 0
          }), bt = Date.now()
        }

        function U(e, t) {
          var n, i = 0, o = {height: e};
          for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Qe[i], o["margin" + n] = o["padding" + n] = e;
          return t && (o.opacity = o.width = e), o
        }

        function V(e, t, n) {
          for (var i, o = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, t, e)) return i
        }

        function Q(e, t, n) {
          var i, o, r, s, a, l, d, u, c = "width" in t || "height" in t, p = this, f = {}, h = e.style,
            y = e.nodeType && Xe(e), v = ze.get(e, "fxshow");
          n.queue || (s = Te._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a()
          }), s.unqueued++, p.always(function () {
            p.always(function () {
              s.unqueued--, Te.queue(e, "fx").length || s.empty.fire()
            })
          }));
          for (i in t) if (o = t[i], xt.test(o)) {
            if (delete t[i], r = r || "toggle" === o, o === (y ? "hide" : "show")) {
              if ("show" !== o || !v || void 0 === v[i]) continue;
              y = !0
            }
            f[i] = v && v[i] || Te.style(e, i)
          }
          if (l = !Te.isEmptyObject(t), l || !Te.isEmptyObject(f)) {
            c && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], d = v && v.display, null == d && (d = ze.get(e, "display")), u = Te.css(e, "display"), "none" === u && (d ? u = d : (w([e], !0), d = e.style.display || d, u = Te.css(e, "display"), w([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === Te.css(e, "float") && (l || (p.done(function () {
              h.display = d
            }), null == d && (u = h.display, d = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
              h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), l = !1;
            for (i in f) l || (v ? "hidden" in v && (y = v.hidden) : v = ze.access(e, "fxshow", {display: d}), r && (v.hidden = !y), y && w([e], !0), p.done(function () {
              y || w([e]), ze.remove(e, "fxshow");
              for (i in f) Te.style(e, i, f[i])
            })), l = V(y ? v[i] : 0, i, p), i in v || (v[i] = l.start, y && (l.end = l.start, l.start = 0))
          }
        }

        function X(e, t) {
          var n, i, o, r, s;
          for (n in e) if (i = h(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = Te.cssHooks[i], s && "expand" in s) {
            r = s.expand(r), delete e[i];
            for (n in r) n in e || (e[n] = r[n], t[n] = o)
          } else t[i] = o
        }

        function Y(e, t, n) {
          var i, o, r = 0, s = Y.prefilters.length, a = Te.Deferred().always(function () {
            delete l.elem
          }), l = function () {
            if (o) return !1;
            for (var t = bt || W(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, r = 1 - i, s = 0, l = d.tweens.length; s < l; s++) d.tweens[s].run(r);
            return a.notifyWith(e, [d, r, n]), r < 1 && l ? n : (l || a.notifyWith(e, [d, 1, 0]), a.resolveWith(e, [d]), !1)
          }, d = a.promise({
            elem: e,
            props: Te.extend({}, t),
            opts: Te.extend(!0, {specialEasing: {}, easing: Te.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: bt || W(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var i = Te.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
              return d.tweens.push(i), i
            },
            stop: function (t) {
              var n = 0, i = t ? d.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < i; n++) d.tweens[n].run(1);
              return t ? (a.notifyWith(e, [d, 1, 0]), a.resolveWith(e, [d, t])) : a.rejectWith(e, [d, t]), this
            }
          }), u = d.props;
          for (X(u, d.opts.specialEasing); r < s; r++) if (i = Y.prefilters[r].call(d, e, u, d.opts)) return me(i.stop) && (Te._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)), i;
          return Te.map(u, V, d), me(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), Te.fx.timer(Te.extend(l, {
            elem: e,
            anim: d,
            queue: d.opts.queue
          })), d
        }

        function G(e) {
          var t = e.match(Ie) || [];
          return t.join(" ")
        }

        function J(e) {
          return e.getAttribute && e.getAttribute("class") || ""
        }

        function K(e) {
          return Array.isArray(e) ? e : "string" == typeof e ? e.match(Ie) || [] : []
        }

        function Z(e, t, n, o) {
          var r;
          if (Array.isArray(t)) Te.each(t, function (t, i) {
            n || Lt.test(e) ? o(e, i) : Z(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, o)
          }); else if (n || "object" !== i(t)) o(e, t); else for (r in t) Z(e + "[" + r + "]", t[r], n, o)
        }

        function ee(e) {
          return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0, r = t.toLowerCase().match(Ie) || [];
            if (me(n)) for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
          }
        }

        function te(e, t, n, i) {
          function o(a) {
            var l;
            return r[a] = !0, Te.each(e[a] || [], function (e, a) {
              var d = a(t, n, i);
              return "string" != typeof d || s || r[d] ? s ? !(l = d) : void 0 : (t.dataTypes.unshift(d), o(d), !1)
            }), l
          }

          var r = {}, s = e === Ut;
          return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function ne(e, t) {
          var n, i, o = Te.ajaxSettings.flatOptions || {};
          for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
          return i && Te.extend(!0, e, i), e
        }

        function ie(e, t, n) {
          for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i) for (o in a) if (a[o] && a[o].test(i)) {
            l.unshift(o);
            break
          }
          if (l[0] in n) r = l[0]; else {
            for (o in n) {
              if (!l[0] || e.converters[o + " " + l[0]]) {
                r = o;
                break
              }
              s || (s = o)
            }
            r = r || s
          }
          if (r) return r !== l[0] && l.unshift(r), n[r]
        }

        function oe(e, t, n, i) {
          var o, r, s, a, l, d = {}, u = e.dataTypes.slice();
          if (u[1]) for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
          for (r = u.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
            if (s = d[l + " " + r] || d["* " + r], !s) for (o in d) if (a = o.split(" "), a[1] === r && (s = d[l + " " + a[0]] || d["* " + a[0]])) {
              s === !0 ? s = d[o] : d[o] !== !0 && (r = a[0], u.unshift(a[1]));
              break
            }
            if (s !== !0) if (s && e["throws"]) t = s(t); else try {
              t = s(t)
            } catch (c) {
              return {state: "parsererror", error: s ? c : "No conversion from " + l + " to " + r}
            }
          }
          return {state: "success", data: t}
        }

        var re = [], se = e.document, ae = Object.getPrototypeOf, le = re.slice, de = re.concat, ue = re.push,
          ce = re.indexOf, pe = {}, fe = pe.toString, he = pe.hasOwnProperty, ye = he.toString, ve = ye.call(Object),
          ge = {}, me = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
          }, be = function (e) {
            return null != e && e === e.window
          }, we = {type: !0, src: !0, noModule: !0}, xe = "3.3.1", Te = function (e, t) {
            return new Te.fn.init(e, t)
          }, ke = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        Te.fn = Te.prototype = {
          jquery: xe, constructor: Te, length: 0, toArray: function () {
            return le.call(this)
          }, get: function (e) {
            return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
          }, pushStack: function (e) {
            var t = Te.merge(this.constructor(), e);
            return t.prevObject = this, t
          }, each: function (e) {
            return Te.each(this, e)
          }, map: function (e) {
            return this.pushStack(Te.map(this, function (t, n) {
              return e.call(t, n, t)
            }))
          }, slice: function () {
            return this.pushStack(le.apply(this, arguments))
          }, first: function () {
            return this.eq(0)
          }, last: function () {
            return this.eq(-1)
          }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
          }, end: function () {
            return this.prevObject || this.constructor()
          }, push: ue, sort: re.sort, splice: re.splice
        }, Te.extend = Te.fn.extend = function () {
          var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, d = !1;
          for ("boolean" == typeof s && (d = s, s = arguments[a] || {}, a++), "object" == typeof s || me(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], i = e[t], s !== i && (d && i && (Te.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && Te.isPlainObject(n) ? n : {}, s[t] = Te.extend(d, r, i)) : void 0 !== i && (s[t] = i));
          return s
        }, Te.extend({
          expando: "jQuery" + (xe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
          }, noop: function () {
          }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== fe.call(e)) && (!(t = ae(e)) || (n = he.call(t, "constructor") && t.constructor, "function" == typeof n && ye.call(n) === ve))
          }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
          }, globalEval: function (e) {
            n(e)
          }, each: function (e, t) {
            var n, i = 0;
            if (o(e)) for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++) ; else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
            return e
          }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ke, "")
          }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (o(Object(e)) ? Te.merge(n, "string" == typeof e ? [e] : e) : ue.call(n, e)), n
          }, inArray: function (e, t, n) {
            return null == t ? -1 : ce.call(t, e, n)
          }, merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
          }, grep: function (e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; r < s; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
          }, map: function (e, t, n) {
            var i, r, s = 0, a = [];
            if (o(e)) for (i = e.length; s < i; s++) r = t(e[s], s, n), null != r && a.push(r); else for (s in e) r = t(e[s], s, n), null != r && a.push(r);
            return de.apply([], a)
          }, guid: 1, support: ge
        }), "function" == typeof Symbol && (Te.fn[Symbol.iterator] = re[Symbol.iterator]), Te.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
          pe["[object " + t + "]"] = t.toLowerCase()
        });
        var Se = function (e) {
          function t(e, t, n, i) {
            var o, r, s, a, l, d, u, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : z) !== L && N(t), t = t || L, O)) {
              if (11 !== h && (l = ge.exec(e))) if (o = l[1]) {
                if (9 === h) {
                  if (!(s = t.getElementById(o))) return n;
                  if (s.id === o) return n.push(s), n
                } else if (p && (s = p.getElementById(o)) && R(t, s) && s.id === o) return n.push(s), n
              } else {
                if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                if ((o = l[3]) && T.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)), n
              }
              if (T.qsa && !V[e + " "] && (!q || !q.test(e))) {
                if (1 !== h) p = t, u = e; else if ("object" !== t.nodeName.toLowerCase()) {
                  for ((a = t.getAttribute("id")) ? a = a.replace(xe, Te) : t.setAttribute("id", a = F), d = E(e), r = d.length; r--;) d[r] = "#" + a + " " + f(d[r]);
                  u = d.join(","), p = me.test(e) && c(t.parentNode) || t
                }
                if (u) try {
                  return K.apply(n, p.querySelectorAll(u)), n
                } catch (y) {
                } finally {
                  a === F && t.removeAttribute("id")
                }
              }
            }
            return A(e.replace(ae, "$1"), t, n, i)
          }

          function n() {
            function e(n, i) {
              return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
            }

            var t = [];
            return e
          }

          function i(e) {
            return e[F] = !0, e
          }

          function o(e) {
            var t = L.createElement("fieldset");
            try {
              return !!e(t)
            } catch (n) {
              return !1
            } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null
            }
          }

          function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
          }

          function s(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
          }

          function a(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return "input" === n && t.type === e
            }
          }

          function l(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
            }
          }

          function d(e) {
            return function (t) {
              return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
          }

          function u(e) {
            return i(function (t) {
              return t = +t, i(function (n, i) {
                for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
              })
            })
          }

          function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
          }

          function p() {
          }

          function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
          }

          function h(e, t, n) {
            var i = t.dir, o = t.next, r = o || i, s = n && "parentNode" === r, a = B++;
            return t.first ? function (t, n, o) {
              for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, o);
              return !1
            } : function (t, n, l) {
              var d, u, c, p = [_, a];
              if (l) {
                for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, l)) return !0
              } else for (; t = t[i];) if (1 === t.nodeType || s) if (c = t[F] || (t[F] = {}), u = c[t.uniqueID] || (c[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
                if ((d = u[r]) && d[0] === _ && d[1] === a) return p[2] = d[2];
                if (u[r] = p, p[2] = e(t, n, l)) return !0
              }
              return !1
            }
          }

          function y(e) {
            return e.length > 1 ? function (t, n, i) {
              for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
              return !0
            } : e[0]
          }

          function v(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i
          }

          function g(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, d = null != t; a < l; a++) (r = e[a]) && (n && !n(r, i, o) || (s.push(r), d && t.push(a)));
            return s
          }

          function m(e, t, n, o, r, s) {
            return o && !o[F] && (o = m(o)), r && !r[F] && (r = m(r, s)), i(function (i, s, a, l) {
              var d, u, c, p = [], f = [], h = s.length, y = i || v(t || "*", a.nodeType ? [a] : a, []),
                m = !e || !i && t ? y : g(y, p, e, a, l), b = n ? r || (i ? e : h || o) ? [] : s : m;
              if (n && n(m, b, a, l), o) for (d = g(b, f), o(d, [], a, l), u = d.length; u--;) (c = d[u]) && (b[f[u]] = !(m[f[u]] = c));
              if (i) {
                if (r || e) {
                  if (r) {
                    for (d = [], u = b.length; u--;) (c = b[u]) && d.push(m[u] = c);
                    r(null, b = [], d, l)
                  }
                  for (u = b.length; u--;) (c = b[u]) && (d = r ? ee(i, c) : p[u]) > -1 && (i[d] = !(s[d] = c))
                }
              } else b = g(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
            })
          }

          function b(e) {
            for (var t, n, i, o = e.length, r = k.relative[e[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = h(function (e) {
              return e === t
            }, s, !0), d = h(function (e) {
              return ee(t, e) > -1
            }, s, !0), u = [function (e, n, i) {
              var o = !r && (i || n !== P) || ((t = n).nodeType ? l(e, n, i) : d(e, n, i));
              return t = null, o
            }]; a < o; a++) if (n = k.relative[e[a].type]) u = [h(y(u), n)]; else {
              if (n = k.filter[e[a].type].apply(null, e[a].matches), n[F]) {
                for (i = ++a; i < o && !k.relative[e[i].type]; i++) ;
                return m(a > 1 && y(u), a > 1 && f(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ae, "$1"), n, a < i && b(e.slice(a, i)), i < o && b(e = e.slice(i)), i < o && f(e))
              }
              u.push(n)
            }
            return y(u)
          }

          function w(e, n) {
            var o = n.length > 0, r = e.length > 0, s = function (i, s, a, l, d) {
              var u, c, p, f = 0, h = "0", y = i && [], v = [], m = P, b = i || r && k.find.TAG("*", d),
                w = _ += null == m ? 1 : Math.random() || .1, x = b.length;
              for (d && (P = s === L || s || d); h !== x && null != (u = b[h]); h++) {
                if (r && u) {
                  for (c = 0, s || u.ownerDocument === L || (N(u), a = !O); p = e[c++];) if (p(u, s || L, a)) {
                    l.push(u);
                    break
                  }
                  d && (_ = w)
                }
                o && ((u = !p && u) && f--, i && y.push(u))
              }
              if (f += h, o && h !== f) {
                for (c = 0; p = n[c++];) p(y, v, s, a);
                if (i) {
                  if (f > 0) for (; h--;) y[h] || v[h] || (v[h] = G.call(l));
                  v = g(v)
                }
                K.apply(l, v), d && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
              }
              return d && (_ = w, P = m), y
            };
            return o ? i(s) : s
          }

          var x, T, k, S, C, E, $, A, P, D, j, N, L, I, O, q, H, M, R, F = "sizzle" + 1 * new Date, z = e.document,
            _ = 0, B = 0, W = n(), U = n(), V = n(), Q = function (e, t) {
              return e === t && (j = !0), 0
            }, X = {}.hasOwnProperty, Y = [], G = Y.pop, J = Y.push, K = Y.push, Z = Y.slice, ee = function (e, t) {
              for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
              return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"), de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), ce = new RegExp(re),
            pe = new RegExp("^" + ie + "$"), fe = {
              ID: new RegExp("^#(" + ie + ")"),
              CLASS: new RegExp("^\\.(" + ie + ")"),
              TAG: new RegExp("^(" + ie + "|[*])"),
              ATTR: new RegExp("^" + oe),
              PSEUDO: new RegExp("^" + re),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + te + ")$", "i"),
              needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, he = /^(?:input|select|textarea|button)$/i, ye = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
              var i = "0x" + t - 65536;
              return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Te = function (e, t) {
              return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, ke = function () {
              N()
            }, Se = h(function (e) {
              return e.disabled === !0 && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
          try {
            K.apply(Y = Z.call(z.childNodes), z.childNodes), Y[z.childNodes.length].nodeType
          } catch (Ce) {
            K = {
              apply: Y.length ? function (e, t) {
                J.apply(e, Z.call(t))
              } : function (e, t) {
                for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                e.length = n - 1
              }
            }
          }
          T = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
          }, N = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : z;
            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, I = L.documentElement, O = !C(L), z !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), T.attributes = o(function (e) {
              return e.className = "i", !e.getAttribute("className")
            }), T.getElementsByTagName = o(function (e) {
              return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
            }), T.getElementsByClassName = ve.test(L.getElementsByClassName), T.getById = o(function (e) {
              return I.appendChild(e).id = F, !L.getElementsByName || !L.getElementsByName(F).length
            }), T.getById ? (k.filter.ID = function (e) {
              var t = e.replace(be, we);
              return function (e) {
                return e.getAttribute("id") === t
              }
            }, k.find.ID = function (e, t) {
              if ("undefined" != typeof t.getElementById && O) {
                var n = t.getElementById(e);
                return n ? [n] : []
              }
            }) : (k.filter.ID = function (e) {
              var t = e.replace(be, we);
              return function (e) {
                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                return n && n.value === t
              }
            }, k.find.ID = function (e, t) {
              if ("undefined" != typeof t.getElementById && O) {
                var n, i, o, r = t.getElementById(e);
                if (r) {
                  if (n = r.getAttributeNode("id"), n && n.value === e) return [r];
                  for (o = t.getElementsByName(e), i = 0; r = o[i++];) if (n = r.getAttributeNode("id"), n && n.value === e) return [r]
                }
                return []
              }
            }), k.find.TAG = T.getElementsByTagName ? function (e, t) {
              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
              var n, i = [], o = 0, r = t.getElementsByTagName(e);
              if ("*" === e) {
                for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                return i
              }
              return r
            }, k.find.CLASS = T.getElementsByClassName && function (e, t) {
              if ("undefined" != typeof t.getElementsByClassName && O) return t.getElementsByClassName(e)
            }, H = [], q = [], (T.qsa = ve.test(L.querySelectorAll)) && (o(function (e) {
              I.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || q.push(".#.+[+~]")
            }), o(function (e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = L.createElement("input");
              t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), I.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (T.matchesSelector = ve.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function (e) {
              T.disconnectedMatch = M.call(e, "*"), M.call(e, "[s!='']:x"), H.push("!=", re)
            }), q = q.length && new RegExp(q.join("|")), H = H.length && new RegExp(H.join("|")), t = ve.test(I.compareDocumentPosition), R = t || ve.test(I.contains) ? function (e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
              return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
              if (t) for (; t = t.parentNode;) if (t === e) return !0;
              return !1
            }, Q = t ? function (e, t) {
              if (e === t) return j = !0, 0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === z && R(z, e) ? -1 : t === L || t.ownerDocument === z && R(z, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
              if (e === t) return j = !0, 0;
              var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], l = [t];
              if (!o || !r) return e === L ? -1 : t === L ? 1 : o ? -1 : r ? 1 : D ? ee(D, e) - ee(D, t) : 0;
              if (o === r) return s(e, t);
              for (n = e; n = n.parentNode;) a.unshift(n);
              for (n = t; n = n.parentNode;) l.unshift(n);
              for (; a[i] === l[i];) i++;
              return i ? s(a[i], l[i]) : a[i] === z ? -1 : l[i] === z ? 1 : 0
            }, L) : L
          }, t.matches = function (e, n) {
            return t(e, null, null, n)
          }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== L && N(e), n = n.replace(ue, "='$1']"), T.matchesSelector && O && !V[n + " "] && (!H || !H.test(n)) && (!q || !q.test(n))) try {
              var i = M.call(e, n);
              if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) {
            }
            return t(n, L, null, [e]).length > 0
          }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== L && N(e), R(e, t)
          }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== L && N(e);
            var n = k.attrHandle[t.toLowerCase()],
              i = n && X.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i : T.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
          }, t.escape = function (e) {
            return (e + "").replace(xe, Te)
          }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
          }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (j = !T.detectDuplicates, D = !T.sortStable && e.slice(0), e.sort(Q), j) {
              for (; t = e[o++];) t === e[o] && (i = n.push(o));
              for (; i--;) e.splice(n[i], 1)
            }
            return D = null, e
          }, S = t.getText = function (e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
              } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i++];) n += S(t);
            return n
          }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
              ">": {dir: "parentNode", first: !0},
              " ": {dir: "parentNode"},
              "+": {dir: "previousSibling", first: !0},
              "~": {dir: "previousSibling"}
            },
            preFilter: {
              ATTR: function (e) {
                return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
              }, CHILD: function (e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
              }, PSEUDO: function (e) {
                var t, n = !e[6] && e[2];
                return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
              }
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(be, we).toLowerCase();
                return "*" === e ? function () {
                  return !0
                } : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t
                }
              }, CLASS: function (e) {
                var t = W[e + " "];
                return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                  return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                })
              }, ATTR: function (e, n, i) {
                return function (o) {
                  var r = t.attr(o, e);
                  return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                }
              }, CHILD: function (e, t, n, i, o) {
                var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                return 1 === i && 0 === o ? function (e) {
                  return !!e.parentNode
                } : function (t, n, l) {
                  var d, u, c, p, f, h, y = r !== s ? "nextSibling" : "previousSibling", v = t.parentNode,
                    g = a && t.nodeName.toLowerCase(), m = !l && !a, b = !1;
                  if (v) {
                    if (r) {
                      for (; y;) {
                        for (p = t; p = p[y];) if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                        h = y = "only" === e && !h && "nextSibling"
                      }
                      return !0
                    }
                    if (h = [s ? v.firstChild : v.lastChild], s && m) {
                      for (p = v, c = p[F] || (p[F] = {}), u = c[p.uniqueID] || (c[p.uniqueID] = {}), d = u[e] || [], f = d[0] === _ && d[1], b = f && d[2], p = f && v.childNodes[f]; p = ++f && p && p[y] || (b = f = 0) || h.pop();) if (1 === p.nodeType && ++b && p === t) {
                        u[e] = [_, f, b];
                        break
                      }
                    } else if (m && (p = t, c = p[F] || (p[F] = {}), u = c[p.uniqueID] || (c[p.uniqueID] = {}), d = u[e] || [], f = d[0] === _ && d[1], b = f), b === !1) for (; (p = ++f && p && p[y] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (m && (c = p[F] || (p[F] = {}), u = c[p.uniqueID] || (c[p.uniqueID] = {}), u[e] = [_, b]), p !== t));) ;
                    return b -= o, b === i || b % i === 0 && b / i >= 0
                  }
                }
              }, PSEUDO: function (e, n) {
                var o, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                return r[F] ? r(n) : r.length > 1 ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                  for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]), e[i] = !(t[i] = o[s])
                }) : function (e) {
                  return r(e, 0, o)
                }) : r
              }
            },
            pseudos: {
              not: i(function (e) {
                var t = [], n = [], o = $(e.replace(ae, "$1"));
                return o[F] ? i(function (e, t, n, i) {
                  for (var r, s = o(e, null, i, []), a = e.length; a--;) (r = s[a]) && (e[a] = !(t[a] = r))
                }) : function (e, i, r) {
                  return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                }
              }), has: i(function (e) {
                return function (n) {
                  return t(e, n).length > 0
                }
              }), contains: i(function (e) {
                return e = e.replace(be, we), function (t) {
                  return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                }
              }), lang: i(function (e) {
                return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(), function (t) {
                  var n;
                  do if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
              }), target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id
              }, root: function (e) {
                return e === I
              }, focus: function (e) {
                return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              }, enabled: d(!1), disabled: d(!0), checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
              }, selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              }, empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                return !0
              }, parent: function (e) {
                return !k.pseudos.empty(e)
              }, header: function (e) {
                return ye.test(e.nodeName)
              }, input: function (e) {
                return he.test(e.nodeName)
              }, button: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
              }, text: function (e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              }, first: u(function () {
                return [0]
              }), last: u(function (e, t) {
                return [t - 1]
              }), eq: u(function (e, t, n) {
                return [n < 0 ? n + t : n]
              }), even: u(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e
              }), odd: u(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e
              }), lt: u(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                return e
              }), gt: u(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                return e
              })
            }
          }, k.pseudos.nth = k.pseudos.eq;
          for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) k.pseudos[x] = a(x);
          for (x in{submit: !0, reset: !0}) k.pseudos[x] = l(x);
          return p.prototype = k.filters = k.pseudos, k.setFilters = new p, E = t.tokenize = function (e, n) {
            var i, o, r, s, a, l, d, u = U[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], d = k.preFilter; a;) {
              i && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = de.exec(a)) && (i = o.shift(), r.push({
                value: i,
                type: o[0].replace(ae, " ")
              }), a = a.slice(i.length));
              for (s in k.filter) !(o = fe[s].exec(a)) || d[s] && !(o = d[s](o)) || (i = o.shift(), r.push({
                value: i,
                type: s,
                matches: o
              }), a = a.slice(i.length));
              if (!i) break
            }
            return n ? a.length : a ? t.error(e) : U(e, l).slice(0)
          }, $ = t.compile = function (e, t) {
            var n, i = [], o = [], r = V[e + " "];
            if (!r) {
              for (t || (t = E(e)), n = t.length; n--;) r = b(t[n]), r[F] ? i.push(r) : o.push(r);
              r = V(e, w(o, i)), r.selector = e
            }
            return r
          }, A = t.select = function (e, t, n, i) {
            var o, r, s, a, l, d = "function" == typeof e && e, u = !i && E(e = d.selector || e);
            if (n = n || [], 1 === u.length) {
              if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && O && k.relative[r[1].type]) {
                if (t = (k.find.ID(s.matches[0].replace(be, we), t) || [])[0], !t) return n;
                d && (t = t.parentNode), e = e.slice(r.shift().value.length)
              }
              for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);) if ((l = k.find[a]) && (i = l(s.matches[0].replace(be, we), me.test(r[0].type) && c(t.parentNode) || t))) {
                if (r.splice(o, 1), e = i.length && f(r), !e) return K.apply(n, i), n;
                break
              }
            }
            return (d || $(e, u))(i, t, !O, n, !t || me.test(e) && c(t.parentNode) || t), n
          }, T.sortStable = F.split("").sort(Q).join("") === F, T.detectDuplicates = !!j, N(), T.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(L.createElement("fieldset"))
          }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
          }) || r("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
          }), T.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
          }) || r("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
          }), o(function (e) {
            return null == e.getAttribute("disabled")
          }) || r(te, function (e, t, n) {
            var i;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
          }), t
        }(e);
        Te.find = Se, Te.expr = Se.selectors, Te.expr[":"] = Te.expr.pseudos, Te.uniqueSort = Te.unique = Se.uniqueSort, Te.text = Se.getText, Te.isXMLDoc = Se.isXML, Te.contains = Se.contains, Te.escapeSelector = Se.escape;
        var Ce = function (e, t, n) {
          for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (o && Te(e).is(n)) break;
            i.push(e)
          }
          return i
        }, Ee = function (e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
        }, $e = Te.expr.match.needsContext, Ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        Te.filter = function (e, t, n) {
          var i = t[0];
          return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Te.find.matchesSelector(i, e) ? [i] : [] : Te.find.matches(e, Te.grep(t, function (e) {
            return 1 === e.nodeType
          }))
        }, Te.fn.extend({
          find: function (e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e) return this.pushStack(Te(e).filter(function () {
              for (t = 0; t < i; t++) if (Te.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) Te.find(e, o[t], n);
            return i > 1 ? Te.uniqueSort(n) : n
          }, filter: function (e) {
            return this.pushStack(s(this, e || [], !1))
          }, not: function (e) {
            return this.pushStack(s(this, e || [], !0))
          }, is: function (e) {
            return !!s(this, "string" == typeof e && $e.test(e) ? Te(e) : e || [], !1).length
          }
        });
        var Pe, De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, je = Te.fn.init = function (e, t, n) {
          var i, o;
          if (!e) return this;
          if (n = n || Pe, "string" == typeof e) {
            if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : De.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
              if (t = t instanceof Te ? t[0] : t, Te.merge(this, Te.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Ae.test(i[1]) && Te.isPlainObject(t)) for (i in t) me(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this
            }
            return o = se.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
          }
          return e.nodeType ? (this[0] = e, this.length = 1, this) : me(e) ? void 0 !== n.ready ? n.ready(e) : e(Te) : Te.makeArray(e, this)
        };
        je.prototype = Te.fn, Pe = Te(se);
        var Ne = /^(?:parents|prev(?:Until|All))/, Le = {children: !0, contents: !0, next: !0, prev: !0};
        Te.fn.extend({
          has: function (e) {
            var t = Te(e, this), n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (Te.contains(this, t[e])) return !0
            })
          }, closest: function (e, t) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof e && Te(e);
            if (!$e.test(e)) for (; i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Te.find.matchesSelector(n, e))) {
              r.push(n);
              break
            }
            return this.pushStack(r.length > 1 ? Te.uniqueSort(r) : r)
          }, index: function (e) {
            return e ? "string" == typeof e ? ce.call(Te(e), this[0]) : ce.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
          }, add: function (e, t) {
            return this.pushStack(Te.uniqueSort(Te.merge(this.get(), Te(e, t))))
          }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
          }
        }), Te.each({
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
          }, parents: function (e) {
            return Ce(e, "parentNode")
          }, parentsUntil: function (e, t, n) {
            return Ce(e, "parentNode", n)
          }, next: function (e) {
            return a(e, "nextSibling")
          }, prev: function (e) {
            return a(e, "previousSibling")
          }, nextAll: function (e) {
            return Ce(e, "nextSibling")
          }, prevAll: function (e) {
            return Ce(e, "previousSibling")
          }, nextUntil: function (e, t, n) {
            return Ce(e, "nextSibling", n)
          }, prevUntil: function (e, t, n) {
            return Ce(e, "previousSibling", n)
          }, siblings: function (e) {
            return Ee((e.parentNode || {}).firstChild, e)
          }, children: function (e) {
            return Ee(e.firstChild)
          }, contents: function (e) {
            return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), Te.merge([], e.childNodes))
          }
        }, function (e, t) {
          Te.fn[e] = function (n, i) {
            var o = Te.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = Te.filter(i, o)), this.length > 1 && (Le[e] || Te.uniqueSort(o), Ne.test(e) && o.reverse()), this.pushStack(o)
          }
        });
        var Ie = /[^\x20\t\r\n\f]+/g;
        Te.Callbacks = function (e) {
          e = "string" == typeof e ? l(e) : Te.extend({}, e);
          var t, n, o, r, s = [], a = [], d = -1, u = function () {
            for (r = r || e.once, o = t = !0; a.length; d = -1) for (n = a.shift(); ++d < s.length;) s[d].apply(n[0], n[1]) === !1 && e.stopOnFalse && (d = s.length, n = !1);
            e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
          }, c = {
            add: function () {
              return s && (n && !t && (d = s.length - 1, a.push(n)), function o(t) {
                Te.each(t, function (t, n) {
                  me(n) ? e.unique && c.has(n) || s.push(n) : n && n.length && "string" !== i(n) && o(n)
                })
              }(arguments), n && !t && u()), this
            }, remove: function () {
              return Te.each(arguments, function (e, t) {
                for (var n; (n = Te.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= d && d--
              }), this
            }, has: function (e) {
              return e ? Te.inArray(e, s) > -1 : s.length > 0
            }, empty: function () {
              return s && (s = []), this
            }, disable: function () {
              return r = a = [], s = n = "", this
            }, disabled: function () {
              return !s
            }, lock: function () {
              return r = a = [], n || t || (s = n = ""), this
            }, locked: function () {
              return !!r
            }, fireWith: function (e, n) {
              return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
            }, fire: function () {
              return c.fireWith(this, arguments), this
            }, fired: function () {
              return !!o
            }
          };
          return c
        }, Te.extend({
          Deferred: function (t) {
            var n = [["notify", "progress", Te.Callbacks("memory"), Te.Callbacks("memory"), 2], ["resolve", "done", Te.Callbacks("once memory"), Te.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Te.Callbacks("once memory"), Te.Callbacks("once memory"), 1, "rejected"]],
              i = "pending", o = {
                state: function () {
                  return i
                }, always: function () {
                  return r.done(arguments).fail(arguments), this
                }, "catch": function (e) {
                  return o.then(null, e)
                }, pipe: function () {
                  var e = arguments;
                  return Te.Deferred(function (t) {
                    Te.each(n, function (n, i) {
                      var o = me(e[i[4]]) && e[i[4]];
                      r[i[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && me(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                      })
                    }), e = null
                  }).promise()
                }, then: function (t, i, o) {
                  function r(t, n, i, o) {
                    return function () {
                      var a = this, l = arguments, c = function () {
                        var e, c;
                        if (!(t < s)) {
                          if (e = i.apply(a, l), e === n.promise()) throw new TypeError("Thenable self-resolution");
                          c = e && ("object" == typeof e || "function" == typeof e) && e.then, me(c) ? o ? c.call(e, r(s, n, d, o), r(s, n, u, o)) : (s++, c.call(e, r(s, n, d, o), r(s, n, u, o), r(s, n, d, n.notifyWith))) : (i !== d && (a = void 0, l = [e]), (o || n.resolveWith)(a, l))
                        }
                      }, p = o ? c : function () {
                        try {
                          c()
                        } catch (e) {
                          Te.Deferred.exceptionHook && Te.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== u && (a = void 0, l = [e]), n.rejectWith(a, l))
                        }
                      };
                      t ? p() : (Te.Deferred.getStackHook && (p.stackTrace = Te.Deferred.getStackHook()), e.setTimeout(p))
                    }
                  }

                  var s = 0;
                  return Te.Deferred(function (e) {
                    n[0][3].add(r(0, e, me(o) ? o : d, e.notifyWith)), n[1][3].add(r(0, e, me(t) ? t : d)), n[2][3].add(r(0, e, me(i) ? i : u))
                  }).promise()
                }, promise: function (e) {
                  return null != e ? Te.extend(e, o) : o
                }
              }, r = {};
            return Te.each(n, function (e, t) {
              var s = t[2], a = t[5];
              o[t[1]] = s.add, a && s.add(function () {
                i = a
              }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), r[t[0]] = function () {
                return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
              }, r[t[0] + "With"] = s.fireWith
            }), o.promise(r), t && t.call(r, r), r
          }, when: function (e) {
            var t = arguments.length, n = t, i = Array(n), o = le.call(arguments), r = Te.Deferred(), s = function (e) {
              return function (n) {
                i[e] = this, o[e] = arguments.length > 1 ? le.call(arguments) : n, --t || r.resolveWith(i, o)
              }
            };
            if (t <= 1 && (c(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || me(o[n] && o[n].then))) return r.then();
            for (; n--;) c(o[n], s(n), r.reject);
            return r.promise()
          }
        });
        var Oe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        Te.Deferred.exceptionHook = function (t, n) {
          e.console && e.console.warn && t && Oe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
        }, Te.readyException = function (t) {
          e.setTimeout(function () {
            throw t
          })
        };
        var qe = Te.Deferred();
        Te.fn.ready = function (e) {
          return qe.then(e)["catch"](function (e) {
            Te.readyException(e)
          }), this
        }, Te.extend({
          isReady: !1, readyWait: 1, ready: function (e) {
            (e === !0 ? --Te.readyWait : Te.isReady) || (Te.isReady = !0, e !== !0 && --Te.readyWait > 0 || qe.resolveWith(se, [Te]))
          }
        }), Te.ready.then = qe.then, "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll ? e.setTimeout(Te.ready) : (se.addEventListener("DOMContentLoaded", p), e.addEventListener("load", p));
        var He = function (e, t, n, o, r, s, a) {
          var l = 0, d = e.length, u = null == n;
          if ("object" === i(n)) {
            r = !0;
            for (l in n) He(e, t, l, n[l], !0, s, a)
          } else if (void 0 !== o && (r = !0, me(o) || (a = !0), u && (a ? (t.call(e, o), t = null) : (u = t, t = function (e, t, n) {
            return u.call(Te(e), n)
          })), t)) for (; l < d; l++) t(e[l], n, a ? o : o.call(e[l], l, t(e[l], n)));
          return r ? e : u ? t.call(e) : d ? t(e[0], n) : s
        }, Me = /^-ms-/, Re = /-([a-z])/g, Fe = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        y.uid = 1, y.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
            }))), t
          }, set: function (e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[h(t)] = n; else for (i in t) o[h(i)] = t[i];
            return o
          }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)]
          }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
          }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                Array.isArray(t) ? t = t.map(h) : (t = h(t), t = t in i ? [t] : t.match(Ie) || []), n = t.length;
                for (; n--;) delete i[t[n]]
              }
              (void 0 === t || Te.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
          }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !Te.isEmptyObject(t)
          }
        };
        var ze = new y, _e = new y, Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, We = /[A-Z]/g;
        Te.extend({
          hasData: function (e) {
            return _e.hasData(e) || ze.hasData(e)
          }, data: function (e, t, n) {
            return _e.access(e, t, n)
          }, removeData: function (e, t) {
            _e.remove(e, t)
          }, _data: function (e, t, n) {
            return ze.access(e, t, n)
          }, _removeData: function (e, t) {
            ze.remove(e, t)
          }
        }), Te.fn.extend({
          data: function (e, t) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
              if (this.length && (o = _e.get(r), 1 === r.nodeType && !ze.get(r, "hasDataAttrs"))) {
                for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = h(i.slice(5)), g(r, i, o[i])));
                ze.set(r, "hasDataAttrs", !0)
              }
              return o
            }
            return "object" == typeof e ? this.each(function () {
              _e.set(this, e)
            }) : He(this, function (t) {
              var n;
              if (r && void 0 === t) {
                if (n = _e.get(r, e), void 0 !== n) return n;
                if (n = g(r, e), void 0 !== n) return n
              } else this.each(function () {
                _e.set(this, e, t)
              })
            }, null, t, arguments.length > 1, null, !0)
          }, removeData: function (e) {
            return this.each(function () {
              _e.remove(this, e)
            })
          }
        }), Te.extend({
          queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = ze.get(e, t), n && (!i || Array.isArray(n) ? i = ze.access(e, t, Te.makeArray(n)) : i.push(n)), i || []
          }, dequeue: function (e, t) {
            t = t || "fx";
            var n = Te.queue(e, t), i = n.length, o = n.shift(), r = Te._queueHooks(e, t), s = function () {
              Te.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
          }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ze.get(e, n) || ze.access(e, n, {
              empty: Te.Callbacks("once memory").add(function () {
                ze.remove(e, [t + "queue", n])
              })
            })
          }
        }), Te.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Te.queue(this[0], e) : void 0 === t ? this : this.each(function () {
              var n = Te.queue(this, e, t);
              Te._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Te.dequeue(this, e)
            })
          }, dequeue: function (e) {
            return this.each(function () {
              Te.dequeue(this, e)
            })
          }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
          }, promise: function (e, t) {
            var n, i = 1, o = Te.Deferred(), r = this, s = this.length, a = function () {
              --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ze.get(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
          }
        });
        var Ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          Ve = new RegExp("^(?:([+-])=|)(" + Ue + ")([a-z%]*)$", "i"), Qe = ["Top", "Right", "Bottom", "Left"],
          Xe = function (e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && Te.contains(e.ownerDocument, e) && "none" === Te.css(e, "display")
          }, Ye = function (e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o
          }, Ge = {};
        Te.fn.extend({
          show: function () {
            return w(this, !0)
          }, hide: function () {
            return w(this)
          }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
              Xe(this) ? Te(this).show() : Te(this).hide()
            })
          }
        });
        var Je = /^(?:checkbox|radio)$/i, Ke = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
          Ze = /^$|^module$|\/(?:java|ecma)script/i, et = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };
        et.optgroup = et.option, et.tbody = et.tfoot = et.colgroup = et.caption = et.thead, et.th = et.td;
        var tt = /<|&#?\w+;/;
        !function () {
          var e = se.createDocumentFragment(), t = e.appendChild(se.createElement("div")),
            n = se.createElement("input");
          n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ge.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ge.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var nt = se.documentElement, it = /^key/, ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          rt = /^([^.]*)(?:\.(.+)|)/;
        Te.event = {
          global: {}, add: function (e, t, n, i, o) {
            var r, s, a, l, d, u, c, p, f, h, y, v = ze.get(e);
            if (v) for (n.handler && (r = n, n = r.handler, o = r.selector), o && Te.find.matchesSelector(nt, o), n.guid || (n.guid = Te.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
              return "undefined" != typeof Te && Te.event.triggered !== t.type ? Te.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(Ie) || [""], d = t.length; d--;) a = rt.exec(t[d]) || [], f = y = a[1], h = (a[2] || "").split(".").sort(), f && (c = Te.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = Te.event.special[f] || {}, u = Te.extend({
              type: f,
              origType: y,
              data: i,
              handler: n,
              guid: n.guid,
              selector: o,
              needsContext: o && Te.expr.match.needsContext.test(o),
              namespace: h.join(".")
            }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), Te.event.global[f] = !0)
          }, remove: function (e, t, n, i, o) {
            var r, s, a, l, d, u, c, p, f, h, y, v = ze.hasData(e) && ze.get(e);
            if (v && (l = v.events)) {
              for (t = (t || "").match(Ie) || [""], d = t.length; d--;) if (a = rt.exec(t[d]) || [], f = y = a[1], h = (a[2] || "").split(".").sort(), f) {
                for (c = Te.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && y !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, c.remove && c.remove.call(e, u));
                s && !p.length && (c.teardown && c.teardown.call(e, h, v.handle) !== !1 || Te.removeEvent(e, f, v.handle), delete l[f])
              } else for (f in l) Te.event.remove(e, f + t[d], n, i, !0);
              Te.isEmptyObject(l) && ze.remove(e, "handle events")
            }
          }, dispatch: function (e) {
            var t, n, i, o, r, s, a = Te.event.fix(e), l = new Array(arguments.length),
              d = (ze.get(this, "events") || {})[a.type] || [], u = Te.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, a) !== !1) {
              for (s = Te.event.handlers.call(this, a, d), t = 0; (o = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, i = ((Te.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
              return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
          }, handlers: function (e, t) {
            var n, i, o, r, s, a = [], l = t.delegateCount, d = e.target;
            if (l && d.nodeType && !("click" === e.type && e.button >= 1)) for (; d !== this; d = d.parentNode || this) if (1 === d.nodeType && ("click" !== e.type || d.disabled !== !0)) {
              for (r = [], s = {}, n = 0; n < l; n++) i = t[n], o = i.selector + " ", void 0 === s[o] && (s[o] = i.needsContext ? Te(o, this).index(d) > -1 : Te.find(o, this, null, [d]).length), s[o] && r.push(i);
              r.length && a.push({elem: d, handlers: r})
            }
            return d = this, l < t.length && a.push({elem: d, handlers: t.slice(l)}), a
          }, addProp: function (e, t) {
            Object.defineProperty(Te.Event.prototype, e, {
              enumerable: !0, configurable: !0, get: me(t) ? function () {
                if (this.originalEvent) return t(this.originalEvent)
              } : function () {
                if (this.originalEvent) return this.originalEvent[e]
              }, set: function (t) {
                Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
              }
            })
          }, fix: function (e) {
            return e[Te.expando] ? e : new Te.Event(e)
          }, special: {
            load: {noBubble: !0}, focus: {
              trigger: function () {
                if (this !== E() && this.focus) return this.focus(), !1
              }, delegateType: "focusin"
            }, blur: {
              trigger: function () {
                if (this === E() && this.blur) return this.blur(), !1
              }, delegateType: "focusout"
            }, click: {
              trigger: function () {
                if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
              }, _default: function (e) {
                return r(e.target, "a")
              }
            }, beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
            }
          }
        }, Te.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n)
        }, Te.Event = function (e, t) {
          return this instanceof Te.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? S : C, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Te.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), void(this[Te.expando] = !0)) : new Te.Event(e, t)
        }, Te.Event.prototype = {
          constructor: Te.Event,
          isDefaultPrevented: C,
          isPropagationStopped: C,
          isImmediatePropagationStopped: C,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = S, e && !this.isSimulated && e.preventDefault()
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = S, e && !this.isSimulated && e.stopPropagation()
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = S, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
          }
        }, Te.each({
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
          "char": !0,
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
          which: function (e) {
            var t = e.button;
            return null == e.which && it.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ot.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
          }
        }, Te.event.addProp), Te.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function (e, t) {
          Te.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
              var n, i = this, o = e.relatedTarget, r = e.handleObj;
              return o && (o === i || Te.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
          }
        }), Te.fn.extend({
          on: function (e, t, n, i) {
            return $(this, e, t, n, i)
          }, one: function (e, t, n, i) {
            return $(this, e, t, n, i, 1)
          }, off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Te(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = C), this.each(function () {
              Te.event.remove(this, e, n, t)
            })
          }
        });
        var st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          at = /<script|<style|<link/i, lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
          dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        Te.extend({
          htmlPrefilter: function (e) {
            return e.replace(st, "<$1></$2>")
          }, clone: function (e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0), l = Te.contains(e.ownerDocument, e);
            if (!(ge.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Te.isXMLDoc(e))) for (s = x(a), r = x(e), i = 0, o = r.length; i < o; i++) N(r[i], s[i]);
            if (t) if (n) for (r = r || x(e), s = s || x(a), i = 0, o = r.length; i < o; i++) j(r[i], s[i]); else j(e, a);
            return s = x(a, "script"), s.length > 0 && T(s, !l && x(e, "script")), a
          }, cleanData: function (e) {
            for (var t, n, i, o = Te.event.special, r = 0; void 0 !== (n = e[r]); r++) if (Fe(n)) {
              if (t = n[ze.expando]) {
                if (t.events) for (i in t.events) o[i] ? Te.event.remove(n, i) : Te.removeEvent(n, i, t.handle);
                n[ze.expando] = void 0
              }
              n[_e.expando] && (n[_e.expando] = void 0)
            }
          }
        }), Te.fn.extend({
          detach: function (e) {
            return I(this, e, !0)
          }, remove: function (e) {
            return I(this, e)
          }, text: function (e) {
            return He(this, function (e) {
              return void 0 === e ? Te.text(this) : this.empty().each(function () {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              })
            }, null, e, arguments.length)
          }, append: function () {
            return L(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = A(this, e);
                t.appendChild(e)
              }
            })
          }, prepend: function () {
            return L(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = A(this, e);
                t.insertBefore(e, t.firstChild)
              }
            })
          }, before: function () {
            return L(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
            })
          }, after: function () {
            return L(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
          }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Te.cleanData(x(e, !1)), e.textContent = "");
            return this
          }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
              return Te.clone(this, e, t)
            })
          }, html: function (e) {
            return He(this, function (e) {
              var t = this[0] || {}, n = 0, i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if ("string" == typeof e && !at.test(e) && !et[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = Te.htmlPrefilter(e);
                try {
                  for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (Te.cleanData(x(t, !1)), t.innerHTML = e);
                  t = 0
                } catch (o) {
                }
              }
              t && this.empty().append(e)
            }, null, e, arguments.length)
          }, replaceWith: function () {
            var e = [];
            return L(this, arguments, function (t) {
              var n = this.parentNode;
              Te.inArray(this, e) < 0 && (Te.cleanData(x(this)), n && n.replaceChild(t, this))
            }, e)
          }
        }), Te.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function (e, t) {
          Te.fn[e] = function (e) {
            for (var n, i = [], o = Te(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), Te(o[s])[t](n), ue.apply(i, n.get());
            return this.pushStack(i)
          }
        });
        var ut = new RegExp("^(" + Ue + ")(?!px)[a-z%]+$", "i"), ct = function (t) {
          var n = t.ownerDocument.defaultView;
          return n && n.opener || (n = e), n.getComputedStyle(t)
        }, pt = new RegExp(Qe.join("|"), "i");
        !function () {
          function t() {
            if (d) {
              l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(l).appendChild(d);
              var t = e.getComputedStyle(d);
              i = "1%" !== t.top, a = 12 === n(t.marginLeft), d.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), d.style.position = "absolute", r = 36 === d.offsetWidth || "absolute", nt.removeChild(l), d = null
            }
          }

          function n(e) {
            return Math.round(parseFloat(e))
          }

          var i, o, r, s, a, l = se.createElement("div"), d = se.createElement("div");
          d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", ge.clearCloneStyle = "content-box" === d.style.backgroundClip, Te.extend(ge, {
            boxSizingReliable: function () {
              return t(), o
            }, pixelBoxStyles: function () {
              return t(), s
            }, pixelPosition: function () {
              return t(), i
            }, reliableMarginLeft: function () {
              return t(), a
            }, scrollboxSize: function () {
              return t(), r
            }
          }))
        }();
        var ft = /^(none|table(?!-c[ea]).+)/, ht = /^--/,
          yt = {position: "absolute", visibility: "hidden", display: "block"},
          vt = {letterSpacing: "0", fontWeight: "400"}, gt = ["Webkit", "Moz", "ms"],
          mt = se.createElement("div").style;
        Te.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = O(e, "opacity");
                  return "" === n ? "1" : n
                }
              }
            }
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          },
          cssProps: {},
          style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o, r, s, a = h(t), l = ht.test(t), d = e.style;
              return l || (t = M(a)), s = Te.cssHooks[t] || Te.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : d[t] : (r = typeof n, "string" === r && (o = Ve.exec(n)) && o[1] && (n = m(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (Te.cssNumber[a] ? "" : "px")), ge.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? d.setProperty(t, n) : d[t] = n)), void 0)
            }
          },
          css: function (e, t, n, i) {
            var o, r, s, a = h(t), l = ht.test(t);
            return l || (t = M(a)), s = Te.cssHooks[t] || Te.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = O(e, t, i)), "normal" === o && t in vt && (o = vt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
          }
        }), Te.each(["height", "width"], function (e, t) {
          Te.cssHooks[t] = {
            get: function (e, n, i) {
              if (n) return !ft.test(Te.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? z(e, t, i) : Ye(e, yt, function () {
                return z(e, t, i)
              })
            }, set: function (e, n, i) {
              var o, r = ct(e), s = "border-box" === Te.css(e, "boxSizing", !1, r), a = i && F(e, t, i, s, r);
              return s && ge.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - F(e, t, "border", !1, r) - .5)), a && (o = Ve.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = Te.css(e, t)), R(e, n, a)
            }
          }
        }), Te.cssHooks.marginLeft = q(ge.reliableMarginLeft, function (e, t) {
          if (t) return (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - Ye(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
          })) + "px"
        }), Te.each({margin: "", padding: "", border: "Width"}, function (e, t) {
          Te.cssHooks[e + t] = {
            expand: function (n) {
              for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + Qe[i] + t] = r[i] || r[i - 2] || r[0];
              return o
            }
          }, "margin" !== e && (Te.cssHooks[e + t].set = R)
        }), Te.fn.extend({
          css: function (e, t) {
            return He(this, function (e, t, n) {
              var i, o, r = {}, s = 0;
              if (Array.isArray(t)) {
                for (i = ct(e), o = t.length; s < o; s++) r[t[s]] = Te.css(e, t[s], !1, i);
                return r
              }
              return void 0 !== n ? Te.style(e, t, n) : Te.css(e, t)
            }, e, t, arguments.length > 1)
          }
        }), Te.Tween = _, _.prototype = {
          constructor: _, init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || Te.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (Te.cssNumber[n] ? "" : "px")
          }, cur: function () {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this) : _.propHooks._default.get(this)
          }, run: function (e) {
            var t, n = _.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Te.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
          }
        }, _.prototype.init.prototype = _.prototype, _.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Te.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
              Te.fx.step[e.prop] ? Te.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Te.cssProps[e.prop]] && !Te.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Te.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
          }
        }, Te.easing = {
          linear: function (e) {
            return e
          }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
          }, _default: "swing"
        }, Te.fx = _.prototype.init, Te.fx.step = {};
        var bt, wt, xt = /^(?:toggle|show|hide)$/, Tt = /queueHooks$/;
        Te.Animation = Te.extend(Y, {
          tweeners: {
            "*": [function (e, t) {
              var n = this.createTween(e, t);
              return m(n.elem, e, Ve.exec(t), n), n
            }]
          }, tweener: function (e, t) {
            me(e) ? (t = e, e = ["*"]) : e = e.match(Ie);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], Y.tweeners[n] = Y.tweeners[n] || [], Y.tweeners[n].unshift(t)
          }, prefilters: [Q], prefilter: function (e, t) {
            t ? Y.prefilters.unshift(e) : Y.prefilters.push(e)
          }
        }), Te.speed = function (e, t, n) {
          var i = e && "object" == typeof e ? Te.extend({}, e) : {
            complete: n || !n && t || me(e) && e,
            duration: e,
            easing: n && t || t && !me(t) && t
          };
          return Te.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in Te.fx.speeds ? i.duration = Te.fx.speeds[i.duration] : i.duration = Te.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            me(i.old) && i.old.call(this), i.queue && Te.dequeue(this, i.queue)
          }, i
        }, Te.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(Xe).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
          }, animate: function (e, t, n, i) {
            var o = Te.isEmptyObject(e), r = Te.speed(t, n, i), s = function () {
              var t = Y(this, Te.extend({}, e), r);
              (o || ze.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
          }, stop: function (e, t, n) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
              var t = !0, o = null != e && e + "queueHooks", r = Te.timers, s = ze.get(this);
              if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && Tt.test(o) && i(s[o]);
              for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
              !t && n || Te.dequeue(this, e)
            })
          }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
              var t, n = ze.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = Te.timers, s = i ? i.length : 0;
              for (n.finish = !0, Te.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
              for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish
            })
          }
        }), Te.each(["toggle", "show", "hide"], function (e, t) {
          var n = Te.fn[t];
          Te.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, i, o)
          }
        }), Te.each({
          slideDown: U("show"),
          slideUp: U("hide"),
          slideToggle: U("toggle"),
          fadeIn: {opacity: "show"},
          fadeOut: {opacity: "hide"},
          fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
          Te.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
          }
        }), Te.timers = [], Te.fx.tick = function () {
          var e, t = 0, n = Te.timers;
          for (bt = Date.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
          n.length || Te.fx.stop(), bt = void 0
        }, Te.fx.timer = function (e) {
          Te.timers.push(e), Te.fx.start()
        }, Te.fx.interval = 13, Te.fx.start = function () {
          wt || (wt = !0, B())
        }, Te.fx.stop = function () {
          wt = null
        }, Te.fx.speeds = {slow: 600, fast: 200, _default: 400}, Te.fn.delay = function (t, n) {
          return t = Te.fx ? Te.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {
              e.clearTimeout(o)
            }
          })
        }, function () {
          var e = se.createElement("input"), t = se.createElement("select"),
            n = t.appendChild(se.createElement("option"));
          e.type = "checkbox", ge.checkOn = "" !== e.value, ge.optSelected = n.selected, e = se.createElement("input"), e.value = "t", e.type = "radio", ge.radioValue = "t" === e.value
        }();
        var kt, St = Te.expr.attrHandle;
        Te.fn.extend({
          attr: function (e, t) {
            return He(this, Te.attr, e, t, arguments.length > 1)
          }, removeAttr: function (e) {
            return this.each(function () {
              Te.removeAttr(this, e)
            })
          }
        }), Te.extend({
          attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? Te.prop(e, t, n) : (1 === r && Te.isXMLDoc(e) || (o = Te.attrHooks[t.toLowerCase()] || (Te.expr.match.bool.test(t) ? kt : void 0)), void 0 !== n ? null === n ? void Te.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = Te.find.attr(e, t), null == i ? void 0 : i))
          }, attrHooks: {
            type: {
              set: function (e, t) {
                if (!ge.radioValue && "radio" === t && r(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t
                }
              }
            }
          }, removeAttr: function (e, t) {
            var n, i = 0, o = t && t.match(Ie);
            if (o && 1 === e.nodeType) for (; n = o[i++];) e.removeAttribute(n)
          }
        }), kt = {
          set: function (e, t, n) {
            return t === !1 ? Te.removeAttr(e, n) : e.setAttribute(n, n), n
          }
        }, Te.each(Te.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = St[t] || Te.find.attr;
          St[t] = function (e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = St[s], St[s] = o, o = null != n(e, t, i) ? s : null, St[s] = r), o
          }
        });
        var Ct = /^(?:input|select|textarea|button)$/i, Et = /^(?:a|area)$/i;
        Te.fn.extend({
          prop: function (e, t) {
            return He(this, Te.prop, e, t, arguments.length > 1)
          }, removeProp: function (e) {
            return this.each(function () {
              delete this[Te.propFix[e] || e]
            })
          }
        }), Te.extend({
          prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && Te.isXMLDoc(e) || (t = Te.propFix[t] || t, o = Te.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
          }, propHooks: {
            tabIndex: {
              get: function (e) {
                var t = Te.find.attr(e, "tabindex");
                return t ? parseInt(t, 10) : Ct.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
              }
            }
          }, propFix: {"for": "htmlFor", "class": "className"}
        }), ge.optSelected || (Te.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
          }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
          }
        }), Te.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
          Te.propFix[this.toLowerCase()] = this
        }), Te.fn.extend({
          addClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (me(e)) return this.each(function (t) {
              Te(this).addClass(e.call(this, t, J(this)))
            });
            if (t = K(e), t.length) for (; n = this[l++];) if (o = J(n), i = 1 === n.nodeType && " " + G(o) + " ") {
              for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              a = G(i), o !== a && n.setAttribute("class", a)
            }
            return this
          }, removeClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (me(e)) return this.each(function (t) {
              Te(this).removeClass(e.call(this, t, J(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if (t = K(e), t.length) for (; n = this[l++];) if (o = J(n), i = 1 === n.nodeType && " " + G(o) + " ") {
              for (s = 0; r = t[s++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
              a = G(i), o !== a && n.setAttribute("class", a)
            }
            return this
          }, toggleClass: function (e, t) {
            var n = typeof e, i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : me(e) ? this.each(function (n) {
              Te(this).toggleClass(e.call(this, n, J(this), t), t)
            }) : this.each(function () {
              var t, o, r, s;
              if (i) for (o = 0, r = Te(this), s = K(e); t = s[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || (t = J(this), t && ze.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : ze.get(this, "__className__") || ""))
            })
          }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + G(J(n)) + " ").indexOf(t) > -1) return !0;
            return !1
          }
        });
        var $t = /\r/g;
        Te.fn.extend({
          val: function (e) {
            var t, n, i, o = this[0];
            {
              if (arguments.length) return i = me(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, Te(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = Te.map(o, function (e) {
                  return null == e ? "" : e + ""
                })), t = Te.valHooks[this.type] || Te.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
              });
              if (o) return t = Te.valHooks[o.type] || Te.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace($t, "") : null == n ? "" : n)
            }
          }
        }), Te.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = Te.find.attr(e, "value");
                return null != t ? t : G(Te.text(e))
              }
            }, select: {
              get: function (e) {
                var t, n, i, o = e.options, s = e.selectedIndex, a = "select-one" === e.type, l = a ? null : [],
                  d = a ? s + 1 : o.length;
                for (i = s < 0 ? d : a ? s : 0; i < d; i++) if (n = o[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                  if (t = Te(n).val(), a) return t;
                  l.push(t)
                }
                return l
              }, set: function (e, t) {
                for (var n, i, o = e.options, r = Te.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = Te.inArray(Te.valHooks.option.get(i), r) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), r
              }
            }
          }
        }), Te.each(["radio", "checkbox"], function () {
          Te.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t)) return e.checked = Te.inArray(Te(e).val(), t) > -1
            }
          }, ge.checkOn || (Te.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
          })
        }), ge.focusin = "onfocusin" in e;
        var At = /^(?:focusinfocus|focusoutblur)$/, Pt = function (e) {
          e.stopPropagation()
        };
        Te.extend(Te.event, {
          trigger: function (t, n, i, o) {
            var r, s, a, l, d, u, c, p, f = [i || se], h = he.call(t, "type") ? t.type : t,
              y = he.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = p = a = i = i || se, 3 !== i.nodeType && 8 !== i.nodeType && !At.test(h + Te.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), d = h.indexOf(":") < 0 && "on" + h, t = t[Te.expando] ? t : new Te.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Te.makeArray(n, [t]), c = Te.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
              if (!o && !c.noBubble && !be(i)) {
                for (l = c.delegateType || h, At.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                a === (i.ownerDocument || se) && f.push(a.defaultView || a.parentWindow || e)
              }
              for (r = 0; (s = f[r++]) && !t.isPropagationStopped();) p = s, t.type = r > 1 ? l : c.bindType || h, u = (ze.get(s, "events") || {})[t.type] && ze.get(s, "handle"), u && u.apply(s, n), u = d && s[d], u && u.apply && Fe(s) && (t.result = u.apply(s, n), t.result === !1 && t.preventDefault());
              return t.type = h, o || t.isDefaultPrevented() || c._default && c._default.apply(f.pop(), n) !== !1 || !Fe(i) || d && me(i[h]) && !be(i) && (a = i[d], a && (i[d] = null), Te.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, Pt), i[h](), t.isPropagationStopped() && p.removeEventListener(h, Pt), Te.event.triggered = void 0, a && (i[d] = a)), t.result
            }
          }, simulate: function (e, t, n) {
            var i = Te.extend(new Te.Event, n, {type: e, isSimulated: !0});
            Te.event.trigger(i, null, t)
          }
        }), Te.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              Te.event.trigger(e, t, this)
            })
          }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return Te.event.trigger(e, t, n, !0)
          }
        }), ge.focusin || Te.each({focus: "focusin", blur: "focusout"}, function (e, t) {
          var n = function (e) {
            Te.event.simulate(t, e.target, Te.event.fix(e))
          };
          Te.event.special[t] = {
            setup: function () {
              var i = this.ownerDocument || this, o = ze.access(i, t);
              o || i.addEventListener(e, n, !0), ze.access(i, t, (o || 0) + 1)
            }, teardown: function () {
              var i = this.ownerDocument || this, o = ze.access(i, t) - 1;
              o ? ze.access(i, t, o) : (i.removeEventListener(e, n, !0), ze.remove(i, t))
            }
          }
        });
        var Dt = e.location, jt = Date.now(), Nt = /\?/;
        Te.parseXML = function (t) {
          var n;
          if (!t || "string" != typeof t) return null;
          try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
          } catch (i) {
            n = void 0
          }
          return n && !n.getElementsByTagName("parsererror").length || Te.error("Invalid XML: " + t), n
        };
        var Lt = /\[\]$/, It = /\r?\n/g, Ot = /^(?:submit|button|image|reset|file)$/i,
          qt = /^(?:input|select|textarea|keygen)/i;
        Te.param = function (e, t) {
          var n, i = [], o = function (e, t) {
            var n = me(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
          };
          if (Array.isArray(e) || e.jquery && !Te.isPlainObject(e)) Te.each(e, function () {
            o(this.name, this.value)
          }); else for (n in e) Z(n, e[n], t, o);
          return i.join("&")
        }, Te.fn.extend({
          serialize: function () {
            return Te.param(this.serializeArray())
          }, serializeArray: function () {
            return this.map(function () {
              var e = Te.prop(this, "elements");
              return e ? Te.makeArray(e) : this
            }).filter(function () {
              var e = this.type;
              return this.name && !Te(this).is(":disabled") && qt.test(this.nodeName) && !Ot.test(e) && (this.checked || !Je.test(e))
            }).map(function (e, t) {
              var n = Te(this).val();
              return null == n ? null : Array.isArray(n) ? Te.map(n, function (e) {
                return {name: t.name, value: e.replace(It, "\r\n")}
              }) : {name: t.name, value: n.replace(It, "\r\n")}
            }).get()
          }
        });
        var Ht = /%20/g, Mt = /#.*$/, Rt = /([?&])_=[^&]*/, Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, _t = /^(?:GET|HEAD)$/, Bt = /^\/\//,
          Wt = {}, Ut = {}, Vt = "*/".concat("*"), Qt = se.createElement("a");
        Qt.href = Dt.href, Te.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Dt.href,
            type: "GET",
            isLocal: zt.test(Dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Vt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": Te.parseXML},
            flatOptions: {url: !0, context: !0}
          },
          ajaxSetup: function (e, t) {
            return t ? ne(ne(e, Te.ajaxSettings), t) : ne(Te.ajaxSettings, e)
          },
          ajaxPrefilter: ee(Wt),
          ajaxTransport: ee(Ut),
          ajax: function (t, n) {
            function i(t, n, i, a) {
              var d, p, f, w, x, T = n;
              u || (u = !0, l && e.clearTimeout(l), o = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, i && (w = ie(h, k, i)), w = oe(h, w, k, d), d ? (h.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (Te.lastModified[r] = x), x = k.getResponseHeader("etag"), x && (Te.etag[r] = x)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, p = w.data, f = w.error, d = !f)) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || T) + "", d ? g.resolveWith(y, [p, T, k]) : g.rejectWith(y, [k, T, f]), k.statusCode(b), b = void 0, c && v.trigger(d ? "ajaxSuccess" : "ajaxError", [k, h, d ? p : f]), m.fireWith(y, [k, T]), c && (v.trigger("ajaxComplete", [k, h]), --Te.active || Te.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, d, u, c, p, f, h = Te.ajaxSetup({}, n), y = h.context || h,
              v = h.context && (y.nodeType || y.jquery) ? Te(y) : Te.event, g = Te.Deferred(),
              m = Te.Callbacks("once memory"), b = h.statusCode || {}, w = {}, x = {}, T = "canceled", k = {
                readyState: 0, getResponseHeader: function (e) {
                  var t;
                  if (u) {
                    if (!a) for (a = {}; t = Ft.exec(s);) a[t[1].toLowerCase()] = t[2];
                    t = a[e.toLowerCase()]
                  }
                  return null == t ? null : t
                }, getAllResponseHeaders: function () {
                  return u ? s : null
                }, setRequestHeader: function (e, t) {
                  return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                }, overrideMimeType: function (e) {
                  return null == u && (h.mimeType = e), this
                }, statusCode: function (e) {
                  var t;
                  if (e) if (u) k.always(e[k.status]); else for (t in e) b[t] = [b[t], e[t]];
                  return this
                }, abort: function (e) {
                  var t = e || T;
                  return o && o.abort(t), i(0, t), this
                }
              };
            if (g.promise(k), h.url = ((t || h.url || Dt.href) + "").replace(Bt, Dt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ie) || [""], null == h.crossDomain) {
              d = se.createElement("a");
              try {
                d.href = h.url, d.href = d.href, h.crossDomain = Qt.protocol + "//" + Qt.host != d.protocol + "//" + d.host
              } catch (S) {
                h.crossDomain = !0
              }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = Te.param(h.data, h.traditional)), te(Wt, h, n, k), u) return k;
            c = Te.event && h.global, c && 0 === Te.active++ && Te.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !_t.test(h.type), r = h.url.replace(Mt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ht, "+")) : (f = h.url.slice(r.length), h.data && (h.processData || "string" == typeof h.data) && (r += (Nt.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (r = r.replace(Rt, "$1"), f = (Nt.test(r) ? "&" : "?") + "_=" + jt++ + f), h.url = r + f), h.ifModified && (Te.lastModified[r] && k.setRequestHeader("If-Modified-Since", Te.lastModified[r]), Te.etag[r] && k.setRequestHeader("If-None-Match", Te.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) k.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (h.beforeSend.call(y, k, h) === !1 || u)) return k.abort();
            if (T = "abort", m.add(h.complete), k.done(h.success), k.fail(h.error), o = te(Ut, h, n, k)) {
              if (k.readyState = 1, c && v.trigger("ajaxSend", [k, h]), u) return k;
              h.async && h.timeout > 0 && (l = e.setTimeout(function () {
                k.abort("timeout")
              }, h.timeout));
              try {
                u = !1, o.send(w, i)
              } catch (S) {
                if (u) throw S;
                i(-1, S)
              }
            } else i(-1, "No Transport");
            return k
          },
          getJSON: function (e, t, n) {
            return Te.get(e, t, n, "json")
          },
          getScript: function (e, t) {
            return Te.get(e, void 0, t, "script")
          }
        }), Te.each(["get", "post"], function (e, t) {
          Te[t] = function (e, n, i, o) {
            return me(n) && (o = o || i, i = n, n = void 0), Te.ajax(Te.extend({
              url: e,
              type: t,
              dataType: o,
              data: n,
              success: i
            }, Te.isPlainObject(e) && e))
          }
        }), Te._evalUrl = function (e) {
          return Te.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
        }, Te.fn.extend({
          wrapAll: function (e) {
            var t;
            return this[0] && (me(e) && (e = e.call(this[0])), t = Te(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
              for (var e = this; e.firstElementChild;) e = e.firstElementChild;
              return e
            }).append(this)), this
          }, wrapInner: function (e) {
            return me(e) ? this.each(function (t) {
              Te(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
              var t = Te(this), n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
            })
          }, wrap: function (e) {
            var t = me(e);
            return this.each(function (n) {
              Te(this).wrapAll(t ? e.call(this, n) : e)
            })
          }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
              Te(this).replaceWith(this.childNodes)
            }), this
          }
        }), Te.expr.pseudos.hidden = function (e) {
          return !Te.expr.pseudos.visible(e)
        }, Te.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, Te.ajaxSettings.xhr = function () {
          try {
            return new e.XMLHttpRequest
          } catch (t) {
          }
        };
        var Xt = {0: 200, 1223: 204}, Yt = Te.ajaxSettings.xhr();
        ge.cors = !!Yt && "withCredentials" in Yt, ge.ajax = Yt = !!Yt, Te.ajaxTransport(function (t) {
          var n, i;
          if (ge.cors || Yt && !t.crossDomain) return {
            send: function (o, r) {
              var s, a = t.xhr();
              if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
              t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
              for (s in o) a.setRequestHeader(s, o[s]);
              n = function (e) {
                return function () {
                  n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Xt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                }
              }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                4 === a.readyState && e.setTimeout(function () {
                  n && i()
                })
              }, n = n("abort");
              try {
                a.send(t.hasContent && t.data || null)
              } catch (l) {
                if (n) throw l
              }
            }, abort: function () {
              n && n()
            }
          }
        }), Te.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1)
        }), Te.ajaxSetup({
          accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
          contents: {script: /\b(?:java|ecma)script\b/},
          converters: {
            "text script": function (e) {
              return Te.globalEval(e), e
            }
          }
        }), Te.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), Te.ajaxTransport("script", function (e) {
          if (e.crossDomain) {
            var t, n;
            return {
              send: function (i, o) {
                t = Te("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                  t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), se.head.appendChild(t[0])
              }, abort: function () {
                n && n()
              }
            }
          }
        });
        var Gt = [], Jt = /(=)\?(?=&|$)|\?\?/;
        Te.ajaxSetup({
          jsonp: "callback", jsonpCallback: function () {
            var e = Gt.pop() || Te.expando + "_" + jt++;
            return this[e] = !0, e
          }
        }), Te.ajaxPrefilter("json jsonp", function (t, n, i) {
          var o, r, s,
            a = t.jsonp !== !1 && (Jt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(t.data) && "data");
          if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = me(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Jt, "$1" + o) : t.jsonp !== !1 && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return s || Te.error(o + " was not called"), s[0]
          }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            s = arguments
          }, i.always(function () {
            void 0 === r ? Te(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Gt.push(o)), s && me(r) && r(s[0]), s = r = void 0
          }), "script"
        }), ge.createHTMLDocument = function () {
          var e = se.implementation.createHTMLDocument("").body;
          return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), Te.parseHTML = function (e, t, n) {
          if ("string" != typeof e) return [];
          "boolean" == typeof t && (n = t, t = !1);
          var i, o, r;
          return t || (ge.createHTMLDocument ? (t = se.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = se.location.href, t.head.appendChild(i)) : t = se), o = Ae.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = k([e], t, r), r && r.length && Te(r).remove(), Te.merge([], o.childNodes))
        }, Te.fn.load = function (e, t, n) {
          var i, o, r, s = this, a = e.indexOf(" ");
          return a > -1 && (i = G(e.slice(a)), e = e.slice(0, a)), me(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && Te.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
          }).done(function (e) {
            r = arguments, s.html(i ? Te("<div>").append(Te.parseHTML(e)).find(i) : e)
          }).always(n && function (e, t) {
            s.each(function () {
              n.apply(this, r || [e.responseText, t, e])
            })
          }), this
        }, Te.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
          Te.fn[t] = function (e) {
            return this.on(t, e)
          }
        }), Te.expr.pseudos.animated = function (e) {
          return Te.grep(Te.timers, function (t) {
            return e === t.elem
          }).length
        }, Te.offset = {
          setOffset: function (e, t, n) {
            var i, o, r, s, a, l, d, u = Te.css(e, "position"), c = Te(e), p = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), r = Te.css(e, "top"), l = Te.css(e, "left"), d = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, d ? (i = c.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), me(t) && (t = t.call(e, n, Te.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : c.css(p)
          }
        }, Te.fn.extend({
          offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
              Te.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            if (i) return i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
              top: t.top + n.pageYOffset,
              left: t.left + n.pageXOffset
            }) : {top: 0, left: 0}
          }, position: function () {
            if (this[0]) {
              var e, t, n, i = this[0], o = {top: 0, left: 0};
              if ("fixed" === Te.css(i, "position")) t = i.getBoundingClientRect(); else {
                for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Te.css(e, "position");) e = e.parentNode;
                e && e !== i && 1 === e.nodeType && (o = Te(e).offset(), o.top += Te.css(e, "borderTopWidth", !0), o.left += Te.css(e, "borderLeftWidth", !0))
              }
              return {
                top: t.top - o.top - Te.css(i, "marginTop", !0),
                left: t.left - o.left - Te.css(i, "marginLeft", !0)
              }
            }
          }, offsetParent: function () {
            return this.map(function () {
              for (var e = this.offsetParent; e && "static" === Te.css(e, "position");) e = e.offsetParent;
              return e || nt
            })
          }
        }), Te.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
          var n = "pageYOffset" === t;
          Te.fn[e] = function (i) {
            return He(this, function (e, i, o) {
              var r;
              return be(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
            }, e, i, arguments.length)
          }
        }), Te.each(["top", "left"], function (e, t) {
          Te.cssHooks[t] = q(ge.pixelPosition, function (e, n) {
            if (n) return n = O(e, t), ut.test(n) ? Te(e).position()[t] + "px" : n
          })
        }), Te.each({Height: "height", Width: "width"}, function (e, t) {
          Te.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            Te.fn[i] = function (o, r) {
              var s = arguments.length && (n || "boolean" != typeof o),
                a = n || (o === !0 || r === !0 ? "margin" : "border");
              return He(this, function (t, n, o) {
                var r;
                return be(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? Te.css(t, n, a) : Te.style(t, n, o, a)
              }, t, s ? o : void 0, s)
            }
          })
        }), Te.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
          Te.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
          }
        }), Te.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
          }
        }), Te.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n)
          }, unbind: function (e, t) {
            return this.off(e, null, t)
          }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
          }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
          }
        }), Te.proxy = function (e, t) {
          var n, i, o;
          if ("string" == typeof t && (n = e[t], t = e, e = n), me(e)) return i = le.call(arguments, 2), o = function () {
            return e.apply(t || this, i.concat(le.call(arguments)))
          }, o.guid = e.guid = e.guid || Te.guid++, o
        }, Te.holdReady = function (e) {
          e ? Te.readyWait++ : Te.ready(!0)
        }, Te.isArray = Array.isArray, Te.parseJSON = JSON.parse, Te.nodeName = r, Te.isFunction = me, Te.isWindow = be, Te.camelCase = h, Te.type = i, Te.now = Date.now, Te.isNumeric = function (e) {
          var t = Te.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, "function" == typeof define && define.amd && define("jquery", [], function () {
          return Te
        });
        var Kt = e.jQuery, Zt = e.$;
        return Te.noConflict = function (t) {
          return e.$ === Te && (e.$ = Zt), t && e.jQuery === Te && (e.jQuery = Kt), Te
        }, t || (e.jQuery = e.$ = Te), Te
      })
    }()
  }), require.register("process/browser.js", function (e, n, i) {
    n = t(n, {}, "process"), function () {
      function e() {
        throw new Error("setTimeout has not been defined")
      }

      function t() {
        throw new Error("clearTimeout has not been defined")
      }

      function n(t) {
        if (d === setTimeout) return setTimeout(t, 0);
        if ((d === e || !d) && setTimeout) return d = setTimeout, setTimeout(t, 0);
        try {
          return d(t, 0)
        } catch (n) {
          try {
            return d.call(null, t, 0)
          } catch (n) {
            return d.call(this, t, 0)
          }
        }
      }

      function o(e) {
        if (u === clearTimeout) return clearTimeout(e);
        if ((u === t || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e);
        try {
          return u(e)
        } catch (n) {
          try {
            return u.call(null, e)
          } catch (n) {
            return u.call(this, e)
          }
        }
      }

      function r() {
        h && p && (h = !1, p.length ? f = p.concat(f) : y = -1, f.length && s())
      }

      function s() {
        if (!h) {
          var e = n(r);
          h = !0;
          for (var t = f.length; t;) {
            for (p = f, f = []; ++y < t;) p && p[y].run();
            y = -1, t = f.length
          }
          p = null, h = !1, o(e)
        }
      }

      function a(e, t) {
        this.fun = e, this.array = t
      }

      function l() {
      }

      var d, u, c = i.exports = {};
      !function () {
        try {
          d = "function" == typeof setTimeout ? setTimeout : e
        } catch (n) {
          d = e
        }
        try {
          u = "function" == typeof clearTimeout ? clearTimeout : t
        } catch (n) {
          u = t
        }
      }();
      var p, f = [], h = !1, y = -1;
      c.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        f.push(new a(e, t)), 1 !== f.length || h || n(s)
      }, a.prototype.run = function () {
        this.fun.apply(null, this.array)
      }, c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.version = "", c.versions = {}, c.on = l, c.addListener = l, c.once = l, c.off = l, c.removeListener = l, c.removeAllListeners = l, c.emit = l, c.prependListener = l, c.prependOnceListener = l, c.listeners = function (e) {
        return []
      }, c.binding = function (e) {
        throw new Error("process.binding is not supported")
      }, c.cwd = function () {
        return "/"
      }, c.chdir = function (e) {
        throw new Error("process.chdir is not supported")
      }, c.umask = function () {
        return 0
      }
    }()
  }), require.register("slick-carousel/slick/slick.js", function (e, n, i) {
    n = t(n, {}, "slick-carousel"), function () {
      !function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof e ? i.exports = t(n("jquery")) : t(jQuery)
      }(function (e) {
        "use strict";
        var t = window.Slick || {};
        t = function () {
          function t(t, i) {
            var o, r = this;
            r.defaults = {
              accessibility: !0,
              adaptiveHeight: !1,
              appendArrows: e(t),
              appendDots: e(t),
              arrows: !0,
              asNavFor: null,
              prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
              nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
              autoplay: !1,
              autoplaySpeed: 3e3,
              centerMode: !1,
              centerPadding: "50px",
              cssEase: "ease",
              customPaging: function (t, n) {
                return e('<button type="button" />').text(n + 1)
              },
              dots: !1,
              dotsClass: "slick-dots",
              draggable: !0,
              easing: "linear",
              edgeFriction: .35,
              fade: !1,
              focusOnSelect: !1,
              focusOnChange: !1,
              infinite: !0,
              initialSlide: 0,
              lazyLoad: "ondemand",
              mobileFirst: !1,
              pauseOnHover: !0,
              pauseOnFocus: !0,
              pauseOnDotsHover: !1,
              respondTo: "window",
              responsive: null,
              rows: 1,
              rtl: !1,
              slide: "",
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: !0,
              swipeToSlide: !1,
              touchMove: !0,
              touchThreshold: 5,
              useCSS: !0,
              useTransform: !0,
              variableWidth: !1,
              vertical: !1,
              verticalSwiping: !1,
              waitForAnimate: !0,
              zIndex: 1e3
            }, r.initials = {
              animating: !1,
              dragging: !1,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: !1,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: !1,
              slideOffset: 0,
              swipeLeft: null,
              swiping: !1,
              $list: null,
              touchObject: {},
              transformsEnabled: !1,
              unslicked: !1
            }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
          }

          var n = 0;
          return t
        }(), t.prototype.activateADA = function () {
          var e = this;
          e.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
        }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
          var o = this;
          if ("boolean" == typeof n) i = n, n = null; else if (n < 0 || n >= o.slideCount) return !1;
          o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : i === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t)
          }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateHeight = function () {
          var e = this;
          if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({height: t}, e.options.speed)
          }
        }, t.prototype.animateSlide = function (t, n) {
          var i = {}, o = this;
          o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({left: t}, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({top: t}, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({animStart: o.currentLeft}).animate({animStart: t}, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (e) {
              e = Math.ceil(e), o.options.vertical === !1 ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
            },
            complete: function () {
              n && n.call()
            }
          })) : (o.applyTransition(), t = Math.ceil(t), o.options.vertical === !1 ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
            o.disableTransition(), n.call()
          }, o.options.speed))
        }, t.prototype.getNavTarget = function () {
          var t = this, n = t.options.asNavFor;
          return n && null !== n && (n = e(n).not(t.$slider)), n
        }, t.prototype.asNavFor = function (t) {
          var n = this, i = n.getNavTarget();
          null !== i && "object" == typeof i && i.each(function () {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
          })
        }, t.prototype.applyTransition = function (e) {
          var t = this, n = {};
          t.options.fade === !1 ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.autoPlay = function () {
          var e = this;
          e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function () {
          var e = this;
          e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function () {
          var e = this, t = e.currentSlide + e.options.slidesToScroll;
          e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function () {
          var t = this;
          t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
          }))
        }, t.prototype.buildDots = function () {
          var t, n, i = this;
          if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
          }
        }, t.prototype.buildOut = function () {
          var t = this;
          t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
          }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), t.options.centerMode !== !0 && t.options.swipeToSlide !== !0 || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function () {
          var e, t, n, i, o, r, s, a = this;
          if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 0) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
              var l = document.createElement("div");
              for (t = 0; t < a.options.rows; t++) {
                var d = document.createElement("div");
                for (n = 0; n < a.options.slidesPerRow; n++) {
                  var u = e * s + (t * a.options.slidesPerRow + n);
                  r.get(u) && d.appendChild(r.get(u))
                }
                l.appendChild(d)
              }
              i.appendChild(l)
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
              width: 100 / a.options.slidesPerRow + "%",
              display: "inline-block"
            })
          }
        }, t.prototype.checkResponsive = function (t, n) {
          var i, o, r, s = this, a = !1, l = s.$slider.width(), d = window.innerWidth || e(window).width();
          if ("window" === s.respondTo ? r = d : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(d, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || a === !1 || s.$slider.trigger("breakpoint", [s, a])
          }
        }, t.prototype.changeSlide = function (t, n) {
          var i, o, r, s = this, a = e(t.currentTarget);
          switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case"previous":
              o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
              break;
            case"next":
              o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
              break;
            case"index":
              var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
              s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
              break;
            default:
              return
          }
        }, t.prototype.checkNavigable = function (e) {
          var t, n, i = this;
          if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var o in t) {
            if (e < t[o]) {
              e = n;
              break
            }
            n = t[o]
          }
          return e
        }, t.prototype.cleanUpEvents = function () {
          var t = this;
          t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.options.accessibility === !0 && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), t.options.accessibility === !0 && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function () {
          var t = this;
          t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function () {
          var e, t = this;
          t.options.rows > 0 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function (e) {
          var t = this;
          t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function (t) {
          var n = this;
          n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            e(this).attr("style", e(this).data("originalStyling"))
          }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
        }, t.prototype.disableTransition = function (e) {
          var t = this, n = {};
          n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.fadeSlide = function (e, t) {
          var n = this;
          n.cssTransitions === !1 ? (n.$slides.eq(e).css({zIndex: n.options.zIndex}), n.$slides.eq(e).animate({opacity: 1}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
          }), t && setTimeout(function () {
            n.disableTransition(e), t.call()
          }, n.options.speed))
        }, t.prototype.fadeSlideOut = function (e) {
          var t = this;
          t.cssTransitions === !1 ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
          }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
          }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
          var t = this;
          null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function () {
          var t = this;
          t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function () {
              t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
            }, 0)
          })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
          var e = this;
          return e.currentSlide
        }, t.prototype.getDotCount = function () {
          var e = this, t = 0, n = 0, i = 0;
          if (e.options.infinite === !0) if (e.slideCount <= e.options.slidesToShow) ++i; else for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (e.options.centerMode === !0) i = e.slideCount; else if (e.options.asNavFor) for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
          return i - 1
        }, t.prototype.getLeft = function (e) {
          var t, n, i, o, r = this, s = 0;
          return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, r.options.vertical === !0 && r.options.centerMode === !0 && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll !== 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), r.options.centerMode === !0 && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = r.options.vertical === !1 ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, r.options.variableWidth === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = r.options.rtl === !0 ? i[0] ? (r.$slideTrack.width() - i[0].offsetLeft - i.width()) * -1 : 0 : i[0] ? i[0].offsetLeft * -1 : 0, r.options.centerMode === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = r.options.rtl === !0 ? i[0] ? (r.$slideTrack.width() - i[0].offsetLeft - i.width()) * -1 : 0 : i[0] ? i[0].offsetLeft * -1 : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
          var t = this;
          return t.options[e]
        }, t.prototype.getNavigableIndexes = function () {
          var e, t = this, n = 0, i = 0, o = [];
          for (t.options.infinite === !1 ? e = t.slideCount : (n = t.options.slidesToScroll * -1, i = t.options.slidesToScroll * -1, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
          return o
        }, t.prototype.getSlick = function () {
          return this
        }, t.prototype.getSlideCount = function () {
          var t, n, i, o = this;
          return i = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function (t, r) {
            if (r.offsetLeft - i + e(r).outerWidth() / 2 > o.swipeLeft * -1) return n = r, !1
          }), t = Math.abs(e(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
          var n = this;
          n.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
        }, t.prototype.init = function (t) {
          var n = this;
          e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
        }, t.prototype.initADA = function () {
          var t = this, n = Math.ceil(t.slideCount / t.options.slidesToShow),
            i = t.getNavigableIndexes().filter(function (e) {
              return e >= 0 && e < t.slideCount
            });
          t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
          }).find("a, input, button, select").attr({tabindex: "-1"}), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
            var o = i.indexOf(n);
            if (e(this).attr({role: "tabpanel", id: "slick-slide" + t.instanceUid + n, tabindex: -1}), o !== -1) {
              var r = "slick-slide-control" + t.instanceUid + o;
              e("#" + r).length && e(this).attr({"aria-describedby": r})
            }
          }), t.$dots.attr("role", "tablist").find("li").each(function (o) {
            var r = i[o];
            e(this).attr({role: "presentation"}), e(this).find("button").first().attr({
              role: "tab",
              id: "slick-slide-control" + t.instanceUid + o,
              "aria-controls": "slick-slide" + t.instanceUid + r,
              "aria-label": o + 1 + " of " + n,
              "aria-selected": null,
              tabindex: "-1"
            })
          }).eq(t.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
          for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.options.focusOnChange ? t.$slides.eq(o).attr({tabindex: "0"}) : t.$slides.eq(o).removeAttr("tabindex");
          t.activateADA()
        }, t.prototype.initArrowEvents = function () {
          var e = this;
          e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, t.prototype.initDotEvents = function () {
          var t = this;
          t.options.dots === !0 && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), t.options.accessibility === !0 && t.$dots.on("keydown.slick", t.keyHandler)), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function () {
          var t = this;
          t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function () {
          var t = this;
          t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
        }, t.prototype.initUI = function () {
          var e = this;
          e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function (e) {
          var t = this;
          e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({data: {message: t.options.rtl === !0 ? "next" : "previous"}}) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({data: {message: t.options.rtl === !0 ? "previous" : "next"}}))
        }, t.prototype.lazyLoad = function () {
          function t(t) {
            e("img[data-lazy]", t).each(function () {
              var t = e(this), n = e(this).attr("data-lazy"), i = e(this).attr("data-srcset"),
                o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"), r = document.createElement("img");
              r.onload = function () {
                t.animate({opacity: 0}, 100, function () {
                  i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({opacity: 1}, 200, function () {
                    t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                  }), s.$slider.trigger("lazyLoaded", [s, t, n])
                })
              }, r.onerror = function () {
                t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n])
              }, r.src = n
            })
          }

          var n, i, o, r, s = this;
          if (s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), n = s.$slider.find(".slick-slide").slice(o, r), "anticipated" === s.options.lazyLoad) for (var a = o - 1, l = r, d = s.$slider.find(".slick-slide"), u = 0; u < s.options.slidesToScroll; u++) a < 0 && (a = s.slideCount - 1), n = n.add(d.eq(a)), n = n.add(d.eq(l)), a--, l++;
          t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(s.options.slidesToShow * -1), t(i))
        }, t.prototype.loadSlider = function () {
          var e = this;
          e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function () {
          var e = this;
          e.changeSlide({data: {message: "next"}})
        }, t.prototype.orientationChange = function () {
          var e = this;
          e.checkResponsive(), e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function () {
          var e = this;
          e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function () {
          var e = this;
          e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function (t) {
          var n = this;
          if (!n.unslicked && (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), n.options.accessibility === !0 && (n.initADA(), n.options.focusOnChange))) {
            var i = e(n.$slides.get(n.currentSlide));
            i.attr("tabindex", 0).focus()
          }
        }, t.prototype.prev = t.prototype.slickPrev = function () {
          var e = this;
          e.changeSlide({data: {message: "previous"}})
        }, t.prototype.preventDefault = function (e) {
          e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function (t) {
          t = t || 1;
          var n, i, o, r, s, a = this, l = e("img[data-lazy]", a.$slider);
          l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), s = document.createElement("img"), s.onload = function () {
            o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), a.options.adaptiveHeight === !0 && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
          }, s.onerror = function () {
            t < 3 ? setTimeout(function () {
              a.progressiveLazyLoad(t + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
          }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
        }, t.prototype.refresh = function (t) {
          var n, i, o = this;
          i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {currentSlide: n}), o.init(), t || o.changeSlide({
            data: {
              message: "index",
              index: n
            }
          }, !1)
        }, t.prototype.registerBreakpoints = function () {
          var t, n, i, o = this, r = o.options.responsive || null;
          if ("array" === e.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in r) if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
              for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
              o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
            }
            o.breakpoints.sort(function (e, t) {
              return o.options.mobileFirst ? e - t : t - e
            })
          }
        }, t.prototype.reinit = function () {
          var t = this;
          t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function () {
          var t = this;
          e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
          }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
          var i = this;
          return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : i.slideCount - 1) : e = t === !0 ? --e : e, !(i.slideCount < 1 || e < 0 || e > i.slideCount - 1) && (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
        }, t.prototype.setCSS = function (e) {
          var t, n, i = this, o = {};
          i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function () {
          var e = this;
          e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
          var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
          e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function () {
          var t, n = this;
          n.$slides.each(function (i, o) {
            t = n.slideWidth * i * -1, n.options.rtl === !0 ? e(o).css({
              position: "relative",
              right: t,
              top: 0,
              zIndex: n.options.zIndex - 2,
              opacity: 0
            }) : e(o).css({position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0})
          }), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1})
        }, t.prototype.setHeight = function () {
          var e = this;
          if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
          }
        }, t.prototype.setOption = t.prototype.slickSetOption = function () {
          var t, n, i, o, r, s = this, a = !1;
          if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")), "single" === r) s.options[i] = o; else if ("multiple" === r) e.each(i, function (e, t) {
            s.options[e] = t
          }); else if ("responsive" === r) for (n in o) if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]]; else {
            for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
            s.options.responsive.push(o[n])
          }
          a && (s.unload(), s.reinit())
        }, t.prototype.setPosition = function () {
          var e = this;
          e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function () {
          var e = this, t = document.body.style;
          e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
        }, t.prototype.setSlideClasses = function (e) {
          var t, n, i, o, r = this;
          if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), r.options.centerMode === !0) {
            var s = r.options.slidesToShow % 2 === 0 ? 1 : 0;
            t = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
          } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = r.options.infinite === !0 ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
          "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
        }, t.prototype.setupInfinite = function () {
          var t, n, i, o = this;
          if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
              e(this).attr("id", "")
            })
          }
        }, t.prototype.interrupt = function (e) {
          var t = this;
          e || t.autoPlay(), t.interrupted = e
        }, t.prototype.selectHandler = function (t) {
          var n = this, i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
          return o || (o = 0), n.slideCount <= n.options.slidesToShow ? void n.slideHandler(o, !1, !0) : void n.slideHandler(o)
        }, t.prototype.slideHandler = function (e, t, n) {
          var i, o, r, s, a, l = null, d = this;
          if (t = t || !1, !(d.animating === !0 && d.options.waitForAnimate === !0 || d.options.fade === !0 && d.currentSlide === e)) return t === !1 && d.asNavFor(e), i = e, l = d.getLeft(i), s = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? s : d.swipeLeft, d.options.infinite === !1 && d.options.centerMode === !1 && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll) ? void(d.options.fade === !1 && (i = d.currentSlide, n !== !0 && d.slideCount > d.options.slidesToShow ? d.animateSlide(s, function () {
            d.postSlide(i)
          }) : d.postSlide(i))) : d.options.infinite === !1 && d.options.centerMode === !0 && (e < 0 || e > d.slideCount - d.options.slidesToScroll) ? void(d.options.fade === !1 && (i = d.currentSlide, n !== !0 && d.slideCount > d.options.slidesToShow ? d.animateSlide(s, function () {
            d.postSlide(i)
          }) : d.postSlide(i))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), o = i < 0 ? d.slideCount % d.options.slidesToScroll !== 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + i : i >= d.slideCount ? d.slideCount % d.options.slidesToScroll !== 0 ? 0 : i - d.slideCount : i, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), r = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide),
          d.options.asNavFor && (a = d.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), d.options.fade === !0 ? (n !== !0 ? (d.fadeSlideOut(r), d.fadeSlide(o, function () {
            d.postSlide(o)
          })) : d.postSlide(o), void d.animateHeight()) : void(n !== !0 && d.slideCount > d.options.slidesToShow ? d.animateSlide(l, function () {
            d.postSlide(o)
          }) : d.postSlide(o)))
        }, t.prototype.startLoad = function () {
          var e = this;
          e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function () {
          var e, t, n, i, o = this;
          return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), i < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : i <= 360 && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && i <= 225 ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function (e) {
          var t, n, i = this;
          if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
          if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
          if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
              case"left":
              case"down":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                break;
              case"right":
              case"up":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
          } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, t.prototype.swipeHandler = function (e) {
          var t = this;
          if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && e.type.indexOf("mouse") !== -1)) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case"start":
              t.swipeStart(e);
              break;
            case"move":
              t.swipeMove(e);
              break;
            case"end":
              t.swipeEnd(e)
          }
        }, t.prototype.swipeMove = function (e) {
          var t, n, i, o, r, s, a = this;
          return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), a.options.verticalSwiping === !0 && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, a.options.verticalSwiping === !0 && (a.swipeLeft = t + i * o), a.options.fade !== !0 && a.options.touchMove !== !1 && (a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, t.prototype.swipeStart = function (e) {
          var t, n = this;
          return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
          var e = this;
          null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function () {
          var t = this;
          e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function (e) {
          var t = this;
          t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function () {
          var e, t = this;
          e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function () {
          var e = this;
          null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function () {
          var e = this;
          e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function () {
          var e, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
          for (e = 0; e < s; e++) if ("object" == typeof o || "undefined" == typeof o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), "undefined" != typeof n) return n;
          return i
        }
      })
    }()
  }), require.register("index.static.pug", function (e, t, n) {
  }), require.register("initialize.js", function (e, t, n) {
    "use strict";

    function i(e) {
      return e && e.__esModule ? e : {"default": e}
    }

    var o = t("jquery"), r = i(o);
    t("slick-carousel"), t("./youtube"), (0, r["default"])(document).on("click", 'a[href^="#"]', function (e) {
      e.preventDefault(), (0, r["default"])("html, body").animate({scrollTop: (0, r["default"])(r["default"].attr(this, "href")).offset().top}, 500)
    }), (0, r["default"])(document).ready(function () {
      var e = (0, r["default"])(".slider").find(".slider__slide").length;
      (0, r["default"])(".js-amount").html("" + e), (0, r["default"])(".slider").slick({
        slidesToShow: 3,
        infinite: !0,
        arrows: !0,
        autoplay: !0,
        autoplaySpeed: 2500
      }), (0, r["default"])(".slider").on("beforeChange", function (e, t, n, i) {
        (0, r["default"])(".js-curr").html("" + (i + 1))
      }), (0, r["default"])(".head-buttons__button_play").on("click", function () {
        (0, r["default"])("#youtube-video-player").tubeplayer("play"), (0, r["default"])(".video-container").addClass("video-container-visible")
      }), (0, r["default"])(".video-container-close").on("click", function () {
        (0, r["default"])("#youtube-video-player").tubeplayer("stop"), (0, r["default"])(".video-container").removeClass("video-container-visible")
      }), (0, r["default"])("#youtube-video-player").tubeplayer({
        initialVideo: "qB-UdoRzl14",
        controls: 0,
        modestbranding: !1,
        annotations: !1
      })
    })
  }), require.register("youtube.js", function (e, t, n) {
    "use strict";

    function i(e) {
      return e && e.__esModule ? e : {"default": e}
    }

    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, r = t("jquery"), s = i(r);
    !function (e) {
      function t() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
          var t = 0 | 16 * Math.random(), n = "x" == e ? t : 8 | 3 & t;
          return n.toString(16)
        })
      }

      var n = ".tubeplayer", i = "jquery-youtube-tubeplayer", r = "opts" + n, s = {
        inited: !1,
        ytplayers: {},
        inits: [],
        iframeScriptInited: !1,
        State: {UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5},
        Error: {BAD_INIT: 0, INVALID_PARAM: 2, NOT_FOUND: 100, NOT_EMBEDDABLE: 101, CANT_PLAY: 150}
      };
      e.tubeplayer = {TubePlayer: s}, e.tubeplayer.defaults = {
        afterReady: function () {
        },
        stateChange: function (t) {
          var n = this.onPlayer;
          return function (i) {
            var r = e("#" + t).parent();
            switch ("object" == ("undefined" == typeof i ? "undefined" : o(i)) && (i = i.data), i) {
              case s.State.UNSTARTED:
                return n.unstarted[t].call(r);
              case s.State.ENDED:
                return n.ended[t].call(r);
              case s.State.PLAYING:
                return n.playing[t].call(r);
              case s.State.PAUSED:
                return n.paused[t].call(r);
              case s.State.BUFFERING:
                return n.buffering[t].call(r);
              case s.State.CUED:
                return n.cued[t].call(r);
              default:
                return null
            }
          }
        },
        onError: function (t) {
          var n = this.onErr;
          return function (i) {
            var r = e("#" + t).parent();
            switch ("object" == ("undefined" == typeof i ? "undefined" : o(i)) && (i = i.data), i) {
              case s.Error.BAD_INIT:
              case s.Error.INVALID_PARAM:
              case s.Error.CANT_PLAY:
                return n.invalidParameter[t].call(r);
              case s.Error.NOT_FOUND:
                return n.notFound[t].call(r);
              case s.Error.NOT_EMBEDDABLE:
                return n.notEmbeddable[t].call(r);
              default:
                return n.defaultError[t].call(r)
            }
          }
        },
        qualityChange: function (t) {
          var n = this;
          return function (i) {
            var r = e("#" + t).parent();
            return "object" == ("undefined" == typeof i ? "undefined" : o(i)) && (i = i.data), n.onQualityChange[t].call(r, i)
          }
        },
        rateChange: function (t) {
          var n = this;
          return function (i) {
            var r = e("#" + t).parent();
            return "object" == ("undefined" == typeof i ? "undefined" : o(i)) && (i = i.data), n.onRateChange[t].call(r, i)
          }
        },
        onQualityChange: {},
        onRateChange: {},
        onPlayer: {unstarted: {}, ended: {}, playing: {}, paused: {}, buffering: {}, cued: {}, loaded: {}},
        onErr: {defaultError: {}, notFound: {}, notEmbeddable: {}, invalidParameter: {}}
      }, e.tubeplayer.defaults.settings = {
        width: 480,
        height: 270,
        allowFullScreen: "true",
        initialVideo: "DkoeNLuMbcI",
        start: 0,
        preferredQuality: "default",
        controls: 1,
        showRelated: !1,
        playsinline: !1,
        annotations: !0,
        autoPlay: !1,
        loop: 0,
        color: "red",
        showinfo: !1,
        modestbranding: !0,
        protocol: "https:" == window.location.protocol ? "https" : "http",
        allowScriptAccess: "always",
        playerID: "tubeplayer-player-container",
        onPlay: function () {
        },
        onPause: function () {
        },
        onStop: function () {
        },
        onSeek: function () {
        },
        onMute: function () {
        },
        onUnMute: function () {
        },
        onPlayerLoaded: function () {
        },
        onPlayerUnstarted: function () {
        },
        onPlayerEnded: function () {
        },
        onPlayerPlaying: function () {
        },
        onPlayerPaused: function () {
        },
        onPlayerBuffering: function () {
        },
        onPlayerCued: function () {
        },
        onQualityChange: function () {
        },
        onRateChange: function () {
        },
        onError: function () {
        },
        onErrorNotFound: function () {
        },
        onErrorNotEmbeddable: function () {
        },
        onErrorInvalidParameter: function () {
        }
      }, e.fn.tubeplayer = function (t, i) {
        var r = e(this), a = "undefined" == typeof t ? "undefined" : o(t);
        return 0 === arguments.length || "object" === a ? r.each(function () {
          if (r = e(this), "IFRAME" == r.prop("tagName")) {
            var n = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
              i = r.attr("src").match(n);
            if (i && 11 == i[7].length) {
              var o = {initialVideo: i[7]}, a = r.attr("class"), l = r.attr("id");
              r.attr("width") && (o.width = r.attr("width")), r.attr("height") && (o.height = r.attr("height")), o.allowFullScreen = void 0 !== r.attr("allowfullscreen") && "true";
              var d = e("<div></div>").attr({"class": a ? a : "", id: l ? l : ""});
              r.replaceWith(d);
              var u = e.extend({}, e.tubeplayer.defaults.settings, o, t);
              s.init(d, u)
            }
          } else s.init(e(this), t)
        }) : "string" === a ? r.triggerHandler(t + n, void 0 !== i ? i : null) : void 0
      };
      var a = function (e) {
        return function (t, n) {
          var i = s.getPkg(t);
          if (i.ytplayer) {
            var o = e(t, n, i);
            return void 0 === o && (o = i.$player), o
          }
          return i.$player
        }
      };
      e.tubeplayer.getPlayers = function () {
        return s.ytplayers
      }, s.init = function (o, a) {
        if (o.hasClass(i)) return o;
        var d = e.extend({}, e.tubeplayer.defaults.settings, a);
        d.playerID += "-" + t(), o.addClass(i).data(r, d);
        for (var u in l) o.bind(u + n, o, l[u]);
        return s.initDefaults(e.tubeplayer.defaults, d), e("<div></div>").attr("id", d.playerID).appendTo(o), s.initPlayer(o, d), o
      }, s.getPkg = function (e) {
        var t = e.data, n = t.data(r), i = s.ytplayers[n.playerID];
        return {$player: t, opts: n, ytplayer: i}
      }, s.iframeReady = function (t) {
        return s.inits.push(function () {
          new YT.Player(t.playerID, {
            videoId: t.initialVideo,
            width: t.width,
            height: t.height,
            playerVars: {
              autoplay: t.autoPlay ? 1 : 0,
              controls: t.controls ? t.controls : 0,
              loop: t.loop ? 1 : 0,
              playlist: t.playlist ? t.playlist : 0,
              rel: t.showRelated ? 1 : 0,
              fs: t.allowFullScreen ? 1 : 0,
              showinfo: t.showinfo ? 1 : 0,
              modestbranding: t.modestbranding ? 1 : 0,
              iv_load_policy: t.annotations ? 1 : 3,
              start: t.start,
              color: t.color,
              playsinline: t.playsinline,
              origin: window.location.origin
            },
            events: {
              onReady: function (n) {
                s.ytplayers[t.playerID] = n.target;
                var o = e(n.target.getIframe()).parents("." + i);
                o.tubeplayer("opts").onPlayerLoaded.call(o), e.tubeplayer.defaults.afterReady(o)
              },
              onPlaybackQualityChange: e.tubeplayer.defaults.qualityChange(t.playerID),
              onPlaybackRateChange: e.tubeplayer.defaults.rateChange(t.playerID),
              onStateChange: e.tubeplayer.defaults.stateChange(t.playerID),
              onError: e.tubeplayer.defaults.onError(t.playerID)
            }
          })
        }), s.inits.length >= 1 && !s.inited ? function () {
          for (var e = 0; s.inits.length > e; e++) s.inits[e]();
          s.inited = !0
        } : (s.inited && s.inits.pop()(), window.onYouTubePlayerAPIReady)
      }, s.initDefaults = function (e, t) {
        var n = t.playerID, i = e.onPlayer;
        i.unstarted[n] = t.onPlayerUnstarted, i.ended[n] = t.onPlayerEnded, i.playing[n] = t.onPlayerPlaying, i.paused[n] = t.onPlayerPaused, i.buffering[n] = t.onPlayerBuffering, i.cued[n] = t.onPlayerCued, i.loaded[n] = t.onPlayerLoaded, e.onQualityChange[n] = t.onQualityChange, e.onRateChange[n] = t.onRateChange;
        var o = e.onErr;
        o.defaultError[n] = t.onError, o.notFound[n] = t.onErrorNotFound, o.notEmbeddable[n] = t.onErrorNotEmbeddable, o.invalidParameter[n] = t.onErrorInvalidParameter
      }, s.initPlayer = function (e, t) {
        if (!s.iframeScriptInited) {
          var n = document.createElement("script");
          n.src = t.protocol + "://www.youtube.com/iframe_api";
          var i = document.getElementsByTagName("script")[0];
          i.parentNode.insertBefore(n, i), s.iframeScriptInited = !0
        }
        window.onYouTubePlayerAPIReady = s.iframeReady(t)
      }, s.getVideoIDFromURL = function (e) {
        e = e || "";
        var t = e.indexOf("?"), n = e.substring(t, e.length), i = n.indexOf("v=");
        if (i > -1) {
          var o = n.indexOf("&", i);
          return -1 === o && (o = n.length), n.substring(i + "v=".length, o)
        }
        return ""
      };
      var l = {
        opts: a(function (e, t, n) {
          return n.opts
        }), cue: a(function (e, t, n) {
          n.ytplayer.cueVideoById(t, 0, n.opts.preferredQuality)
        }), cuePlaylist: a(function (e, t, n) {
          n.ytplayer.cuePlaylist(t.playlist, t.index || 0, t.startSeconds || 0, n.opts.preferredQuality)
        }), play: a(function (e, t, n) {
          var i, r;
          "object" == ("undefined" == typeof t ? "undefined" : o(t)) ? (i = t.id, r = t.time) : void 0 !== t && (i = t, r = 0), i ? n.ytplayer.loadVideoById({
            videoId: i,
            startSeconds: r,
            suggestedQuality: n.opts.preferredQuality
          }) : n.ytplayer.playVideo(), n.opts.onPlay(t)
        }), playPlaylist: a(function (e, t, n) {
          var i, r, s;
          if ("object" == ("undefined" == typeof t ? "undefined" : o(t))) {
            var a = void 0 !== t.length;
            i = a ? t : t.playlist, s = a ? 0 : t.time || 0, r = a ? 0 : t.index || 0
          } else void 0 !== t && (i = t, s = 0, r = 0);
          i && (n.ytplayer.loadPlaylist(i, r, s, n.opts.preferredQuality), n.opts.onPlay(t))
        }), next: a(function (e, t, n) {
          n.ytplayer.nextVideo()
        }), previous: a(function (e, t, n) {
          n.ytplayer.previousVideo()
        }), playVideoAt: a(function (e, t, n) {
          n.ytplayer.playVideoAt(t)
        }), pause: a(function (e, t, n) {
          n.ytplayer.pauseVideo(), n.opts.onPause(n)
        }), stop: a(function (e, t, n) {
          n.ytplayer.stopVideo(), n.opts.onStop(n)
        }), seek: a(function (e, t, n) {
          if (/:/.test(t)) {
            var i = t.split(":").reverse();
            t = 0;
            for (var o = 0; i.length > o; o++) t += Math.pow(60, o) * (0 | i[o])
          }
          n.ytplayer.seekTo(t, !0), n.opts.onSeek(t)
        }), mute: a(function (e, t, n) {
          n.$player.attr("data-prev-mute-volume", n.ytplayer.getVolume()), n.ytplayer.mute(), n.opts.onMute(n)
        }), unmute: a(function (e, t, n) {
          n.ytplayer.unMute(), n.ytplayer.setVolume(n.$player.attr("data-prev-mute-volume") || 50), n.opts.onUnMute()
        }), isMuted: a(function (e, t, n) {
          return n.ytplayer.isMuted()
        }), volume: a(function (e, t, n) {
          return void 0 === t ? n.ytplayer.getVolume() : (n.ytplayer.setVolume(t), void n.$player.attr("data-prev-mute-volume", n.ytplayer.getVolume()))
        }), quality: a(function (e, t, n) {
          return void 0 === t ? n.ytplayer.getPlaybackQuality() : void n.ytplayer.setPlaybackQuality(t)
        }), playbackRate: a(function (e, t, n) {
          return void 0 === t ? n.ytplayer.getPlaybackRate() : void n.ytplayer.setPlaybackRate(t)
        }), data: a(function (e, t, n) {
          var i = {}, o = n.ytplayer;
          return i.videoLoadedFraction = o.getVideoLoadedFraction(), i.bytesLoaded = o.getVideoBytesLoaded(), i.bytesTotal = o.getVideoBytesTotal(), i.startBytes = o.getVideoStartBytes(), i.state = o.getPlayerState(), i.currentTime = o.getCurrentTime(), i.duration = o.getDuration(), i.videoURL = o.getVideoUrl(), i.playlist = {
            videoIDs: o.getPlaylist(),
            currentIndex: o.getPlaylistIndex()
          }, i.videoEmbedCode = o.getVideoEmbedCode(), i.videoID = s.getVideoIDFromURL(i.videoURL), i.availableQualityLevels = o.getAvailableQualityLevels(), i.availablePlaybackRates = o.getAvailablePlaybackRates(), i
        }), videoId: a(function (e, t, n) {
          return s.getVideoIDFromURL(n.ytplayer.getVideoUrl())
        }), size: a(function (t, n, i) {
          void 0 !== n && n.width && n.height && (i.ytplayer.setSize(n.width, n.height), e(i.ytplayer).css(n))
        }), destroy: a(function (t, o, a) {
          a.$player.removeClass(i).data(r, null).unbind(n).html(""), delete s.ytplayers[a.opts.playerID];
          var l = e.tubeplayer.defaults, d = ["unstarted", "ended", "playing", "paused", "buffering", "cued", "loaded"];
          return e.each(d, function (e, t) {
            delete l.onPlayer[t][a.opts.playerID]
          }), d = ["defaultError", "notFound", "notEmbeddable", "invalidParameter"], e.each(d, function (e, t) {
            delete l.onErr[t][a.opts.playerID]
          }), delete l.onQualityChange[a.opts.playerID], delete l.onRateChange[a.opts.playerID], "destroy" in a.ytplayer && a.ytplayer.destroy(), e(a.ytplayer).remove(), null
        }), player: a(function (e, t, n) {
          return n.ytplayer
        })
      }
    }(s["default"]), function (e) {
      function t() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
          var t = 0 | 16 * Math.random(), n = "x" == e ? t : 8 | 3 & t;
          return n.toString(16)
        })
      }

      var n = ".tubeplayer", i = "jquery-youtube-tubeplayer", r = "opts" + n, s = {
        inited: !1,
        ytplayers: {},
        inits: [],
        iframeScriptInited: !1,
        State: {UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5},
        Error: {BAD_INIT: 0, INVALID_PARAM: 2, NOT_FOUND: 100, NOT_EMBEDDABLE: 101, CANT_PLAY: 150}
      };
      e.tubeplayer = {TubePlayer: s}, e.tubeplayer.defaults = {
        afterReady: function () {
        },
        stateChange: function (t) {
          var n = this.onPlayer;
          return function (i) {
            var r = e("#" + t).parent();
            switch ("object" == ("undefined" == typeof i ? "undefined" : o(i)) && (i = i.data), i) {
              case s.State.UNSTARTED:
                return n.unstarted[t].call(r);
              case s.State.ENDED:
                return n.ended[t].call(r);
              case s.State.PLAYING:
                return n.playing[t].call(r);
              case s.State.PAUSED:
                return n.paused[t].call(r);
              case s.State.BUFFERING:
                return n.buffering[t].call(r);
              case s.State.CUED:
                return n.cued[t].call(r);
              default:
                return null
            }
          }
        },
        onError: function (t) {
          var n = this.onErr;
          return function (i) {
            var r = e("#" + t).parent();
            switch ("object" == ("undefined" == typeof i ? "undefined" : o(i)) && (i = i.data), i) {
              case s.Error.BAD_INIT:
              case s.Error.INVALID_PARAM:
              case s.Error.CANT_PLAY:
                return n.invalidParameter[t].call(r);
              case s.Error.NOT_FOUND:
                return n.notFound[t].call(r);
              case s.Error.NOT_EMBEDDABLE:
                return n.notEmbeddable[t].call(r);
              default:
                return n.defaultError[t].call(r)
            }
          }
        },
        qualityChange: function (t) {
          var n = this;
          return function (i) {
            var r = e("#" + t).parent();
            return "object" == ("undefined" == typeof i ? "undefined" : o(i)) && (i = i.data), n.onQualityChange[t].call(r, i)
          }
        },
        rateChange: function (t) {
          var n = this;
          return function (i) {
            var r = e("#" + t).parent();
            return "object" == ("undefined" == typeof i ? "undefined" : o(i)) && (i = i.data), n.onRateChange[t].call(r, i)
          }
        },
        onQualityChange: {},
        onRateChange: {},
        onPlayer: {unstarted: {}, ended: {}, playing: {}, paused: {}, buffering: {}, cued: {}, loaded: {}},
        onErr: {defaultError: {}, notFound: {}, notEmbeddable: {}, invalidParameter: {}}
      }, e.tubeplayer.defaults.settings = {
        width: 480,
        height: 270,
        allowFullScreen: "true",
        initialVideo: "DkoeNLuMbcI",
        start: 0,
        preferredQuality: "default",
        controls: 1,
        showRelated: !1,
        playsinline: !1,
        annotations: !0,
        autoPlay: !1,
        loop: 0,
        color: "red",
        showinfo: !1,
        modestbranding: !0,
        protocol: "https:" == window.location.protocol ? "https" : "http",
        allowScriptAccess: "always",
        playerID: "tubeplayer-player-container",
        onPlay: function () {
        },
        onPause: function () {
        },
        onStop: function () {
        },
        onSeek: function () {
        },
        onMute: function () {
        },
        onUnMute: function () {
        },
        onPlayerLoaded: function () {
        },
        onPlayerUnstarted: function () {
        },
        onPlayerEnded: function () {
        },
        onPlayerPlaying: function () {
        },
        onPlayerPaused: function () {
        },
        onPlayerBuffering: function () {
        },
        onPlayerCued: function () {
        },
        onQualityChange: function () {
        },
        onRateChange: function () {
        },
        onError: function () {
        },
        onErrorNotFound: function () {
        },
        onErrorNotEmbeddable: function () {
        },
        onErrorInvalidParameter: function () {
        }
      }, e.fn.tubeplayer = function (t, i) {
        var r = e(this), a = "undefined" == typeof t ? "undefined" : o(t);
        return 0 === arguments.length || "object" === a ? r.each(function () {
          if (r = e(this), "IFRAME" == r.prop("tagName")) {
            var n = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
              i = r.attr("src").match(n);
            if (i && 11 == i[7].length) {
              var o = {initialVideo: i[7]}, a = r.attr("class"), l = r.attr("id");
              r.attr("width") && (o.width = r.attr("width")), r.attr("height") && (o.height = r.attr("height")), o.allowFullScreen = void 0 !== r.attr("allowfullscreen") && "true";
              var d = e("<div></div>").attr({"class": a ? a : "", id: l ? l : ""});
              r.replaceWith(d);
              var u = e.extend({}, e.tubeplayer.defaults.settings, o, t);
              s.init(d, u)
            }
          } else s.init(e(this), t)
        }) : "string" === a ? r.triggerHandler(t + n, void 0 !== i ? i : null) : void 0
      };
      var a = function (e) {
        return function (t, n) {
          var i = s.getPkg(t);
          if (i.ytplayer) {
            var o = e(t, n, i);
            return void 0 === o && (o = i.$player), o
          }
          return i.$player
        }
      };
      e.tubeplayer.getPlayers = function () {
        return s.ytplayers
      }, s.init = function (o, a) {
        if (o.hasClass(i)) return o;
        var d = e.extend({}, e.tubeplayer.defaults.settings, a);
        d.playerID += "-" + t(), o.addClass(i).data(r, d);
        for (var u in l) o.bind(u + n, o, l[u]);
        return s.initDefaults(e.tubeplayer.defaults, d), e("<div></div>").attr("id", d.playerID).appendTo(o), s.initPlayer(o, d), o
      }, s.getPkg = function (e) {
        var t = e.data, n = t.data(r), i = s.ytplayers[n.playerID];
        return {$player: t, opts: n, ytplayer: i}
      }, s.iframeReady = function (t) {
        return s.inits.push(function () {
          new YT.Player(t.playerID, {
            videoId: t.initialVideo,
            width: t.width,
            height: t.height,
            playerVars: {
              autoplay: t.autoPlay ? 1 : 0,
              controls: t.controls ? t.controls : 0,
              loop: t.loop ? 1 : 0,
              playlist: t.playlist ? t.playlist : 0,
              rel: t.showRelated ? 1 : 0,
              fs: t.allowFullScreen ? 1 : 0,
              showinfo: t.showinfo ? 1 : 0,
              modestbranding: t.modestbranding ? 1 : 0,
              iv_load_policy: t.annotations ? 1 : 3,
              start: t.start,
              color: t.color,
              playsinline: t.playsinline,
              origin: window.location.origin
            },
            events: {
              onReady: function (n) {
                s.ytplayers[t.playerID] = n.target;
                var o = e(n.target.getIframe()).parents("." + i);
                o.tubeplayer("opts").onPlayerLoaded.call(o), e.tubeplayer.defaults.afterReady(o)
              },
              onPlaybackQualityChange: e.tubeplayer.defaults.qualityChange(t.playerID),
              onPlaybackRateChange: e.tubeplayer.defaults.rateChange(t.playerID),
              onStateChange: e.tubeplayer.defaults.stateChange(t.playerID),
              onError: e.tubeplayer.defaults.onError(t.playerID)
            }
          })
        }), s.inits.length >= 1 && !s.inited ? function () {
          for (var e = 0; s.inits.length > e; e++) s.inits[e]();
          s.inited = !0
        } : (s.inited && s.inits.pop()(), window.onYouTubePlayerAPIReady)
      }, s.initDefaults = function (e, t) {
        var n = t.playerID, i = e.onPlayer;
        i.unstarted[n] = t.onPlayerUnstarted, i.ended[n] = t.onPlayerEnded, i.playing[n] = t.onPlayerPlaying, i.paused[n] = t.onPlayerPaused, i.buffering[n] = t.onPlayerBuffering, i.cued[n] = t.onPlayerCued, i.loaded[n] = t.onPlayerLoaded, e.onQualityChange[n] = t.onQualityChange, e.onRateChange[n] = t.onRateChange;
        var o = e.onErr;
        o.defaultError[n] = t.onError, o.notFound[n] = t.onErrorNotFound, o.notEmbeddable[n] = t.onErrorNotEmbeddable, o.invalidParameter[n] = t.onErrorInvalidParameter
      }, s.initPlayer = function (e, t) {
        if (!s.iframeScriptInited) {
          var n = document.createElement("script");
          n.src = t.protocol + "://www.youtube.com/iframe_api";
          var i = document.getElementsByTagName("script")[0];
          i.parentNode.insertBefore(n, i), s.iframeScriptInited = !0
        }
        window.onYouTubePlayerAPIReady = s.iframeReady(t)
      }, s.getVideoIDFromURL = function (e) {
        e = e || "";
        var t = e.indexOf("?"), n = e.substring(t, e.length), i = n.indexOf("v=");
        if (i > -1) {
          var o = n.indexOf("&", i);
          return -1 === o && (o = n.length), n.substring(i + "v=".length, o)
        }
        return ""
      };
      var l = {
        opts: a(function (e, t, n) {
          return n.opts
        }), cue: a(function (e, t, n) {
          n.ytplayer.cueVideoById(t, 0, n.opts.preferredQuality)
        }), cuePlaylist: a(function (e, t, n) {
          n.ytplayer.cuePlaylist(t.playlist, t.index || 0, t.startSeconds || 0, n.opts.preferredQuality)
        }), play: a(function (e, t, n) {
          var i, r;
          "object" == ("undefined" == typeof t ? "undefined" : o(t)) ? (i = t.id, r = t.time) : void 0 !== t && (i = t, r = 0), i ? n.ytplayer.loadVideoById({
            videoId: i,
            startSeconds: r,
            suggestedQuality: n.opts.preferredQuality
          }) : n.ytplayer.playVideo(), n.opts.onPlay(t)
        }), playPlaylist: a(function (e, t, n) {
          var i, r, s;
          if ("object" == ("undefined" == typeof t ? "undefined" : o(t))) {
            var a = void 0 !== t.length;
            i = a ? t : t.playlist, s = a ? 0 : t.time || 0, r = a ? 0 : t.index || 0
          } else void 0 !== t && (i = t, s = 0, r = 0);
          i && (n.ytplayer.loadPlaylist(i, r, s, n.opts.preferredQuality), n.opts.onPlay(t))
        }), next: a(function (e, t, n) {
          n.ytplayer.nextVideo()
        }), previous: a(function (e, t, n) {
          n.ytplayer.previousVideo()
        }), playVideoAt: a(function (e, t, n) {
          n.ytplayer.playVideoAt(t)
        }), pause: a(function (e, t, n) {
          n.ytplayer.pauseVideo(), n.opts.onPause(n)
        }), stop: a(function (e, t, n) {
          n.ytplayer.stopVideo(), n.opts.onStop(n)
        }), seek: a(function (e, t, n) {
          if (/:/.test(t)) {
            var i = t.split(":").reverse();
            t = 0;
            for (var o = 0; i.length > o; o++) t += Math.pow(60, o) * (0 | i[o])
          }
          n.ytplayer.seekTo(t, !0), n.opts.onSeek(t)
        }), mute: a(function (e, t, n) {
          n.$player.attr("data-prev-mute-volume", n.ytplayer.getVolume()), n.ytplayer.mute(), n.opts.onMute(n)
        }), unmute: a(function (e, t, n) {
          n.ytplayer.unMute(), n.ytplayer.setVolume(n.$player.attr("data-prev-mute-volume") || 50), n.opts.onUnMute()
        }), isMuted: a(function (e, t, n) {
          return n.ytplayer.isMuted()
        }), volume: a(function (e, t, n) {
          return void 0 === t ? n.ytplayer.getVolume() : (n.ytplayer.setVolume(t), void n.$player.attr("data-prev-mute-volume", n.ytplayer.getVolume()))
        }), quality: a(function (e, t, n) {
          return void 0 === t ? n.ytplayer.getPlaybackQuality() : void n.ytplayer.setPlaybackQuality(t)
        }), playbackRate: a(function (e, t, n) {
          return void 0 === t ? n.ytplayer.getPlaybackRate() : void n.ytplayer.setPlaybackRate(t)
        }), data: a(function (e, t, n) {
          var i = {}, o = n.ytplayer;
          return i.videoLoadedFraction = o.getVideoLoadedFraction(), i.bytesLoaded = o.getVideoBytesLoaded(), i.bytesTotal = o.getVideoBytesTotal(), i.startBytes = o.getVideoStartBytes(), i.state = o.getPlayerState(), i.currentTime = o.getCurrentTime(), i.duration = o.getDuration(), i.videoURL = o.getVideoUrl(), i.playlist = {
            videoIDs: o.getPlaylist(),
            currentIndex: o.getPlaylistIndex()
          }, i.videoEmbedCode = o.getVideoEmbedCode(), i.videoID = s.getVideoIDFromURL(i.videoURL), i.availableQualityLevels = o.getAvailableQualityLevels(), i.availablePlaybackRates = o.getAvailablePlaybackRates(), i
        }), videoId: a(function (e, t, n) {
          return s.getVideoIDFromURL(n.ytplayer.getVideoUrl())
        }), size: a(function (t, n, i) {
          void 0 !== n && n.width && n.height && (i.ytplayer.setSize(n.width, n.height), e(i.ytplayer).css(n))
        }), destroy: a(function (t, o, a) {
          a.$player.removeClass(i).data(r, null).unbind(n).html(""), delete s.ytplayers[a.opts.playerID];
          var l = e.tubeplayer.defaults, d = ["unstarted", "ended", "playing", "paused", "buffering", "cued", "loaded"];
          return e.each(d, function (e, t) {
            delete l.onPlayer[t][a.opts.playerID]
          }), d = ["defaultError", "notFound", "notEmbeddable", "invalidParameter"], e.each(d, function (e, t) {
            delete l.onErr[t][a.opts.playerID]
          }), delete l.onQualityChange[a.opts.playerID], delete l.onRateChange[a.opts.playerID], "destroy" in a.ytplayer && a.ytplayer.destroy(), e(a.ytplayer).remove(), null
        }), player: a(function (e, t, n) {
          return n.ytplayer
        })
      }
    }(s["default"])
  }), require.alias("jquery/dist/jquery.js", "jquery"), require.alias("process/browser.js", "process"), require.alias("slick-carousel/slick/slick.js", "slick-carousel"), e = require("process"), require.register("___globals___", function (e, t, n) {
  })
}(), require("___globals___");
