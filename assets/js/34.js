var WOW;
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (t, e, n, i, a) {
            return jQuery.easing[jQuery.easing.def](t, e, n, i, a)
        },
        easeInQuad: function (t, e, n, i, a) {
            return i * (e /= a) * e + n
        },
        easeOutQuad: function (t, e, n, i, a) {
            return -i * (e /= a) * (e - 2) + n
        },
        easeInOutQuad: function (t, e, n, i, a) {
            return (e /= a / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function (t, e, n, i, a) {
            return i * (e /= a) * e * e + n
        },
        easeOutCubic: function (t, e, n, i, a) {
            return i * ((e = e / a - 1) * e * e + 1) + n
        },
        easeInOutCubic: function (t, e, n, i, a) {
            return (e /= a / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function (t, e, n, i, a) {
            return i * (e /= a) * e * e * e + n
        },
        easeOutQuart: function (t, e, n, i, a) {
            return -i * ((e = e / a - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function (t, e, n, i, a) {
            return (e /= a / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function (t, e, n, i, a) {
            return i * (e /= a) * e * e * e * e + n
        },
        easeOutQuint: function (t, e, n, i, a) {
            return i * ((e = e / a - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function (t, e, n, i, a) {
            return (e /= a / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function (t, e, n, i, a) {
            return -i * Math.cos(e / a * (Math.PI / 2)) + i + n
        },
        easeOutSine: function (t, e, n, i, a) {
            return i * Math.sin(e / a * (Math.PI / 2)) + n
        },
        easeInOutSine: function (t, e, n, i, a) {
            return -i / 2 * (Math.cos(Math.PI * e / a) - 1) + n
        },
        easeInExpo: function (t, e, n, i, a) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / a - 1)) + n
        },
        easeOutExpo: function (t, e, n, i, a) {
            return e == a ? n + i : i * (1 - Math.pow(2, -10 * e / a)) + n
        },
        easeInOutExpo: function (t, e, n, i, a) {
            return 0 == e ? n : e == a ? n + i : (e /= a / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --e)) + n
        },
        easeInCirc: function (t, e, n, i, a) {
            return -i * (Math.sqrt(1 - (e /= a) * e) - 1) + n
        },
        easeOutCirc: function (t, e, n, i, a) {
            return i * Math.sqrt(1 - (e = e / a - 1) * e) + n
        },
        easeInOutCirc: function (t, e, n, i, a) {
            return (e /= a / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        },
        easeInElastic: function (t, e, n, i, a) {
            var r = 1.70158,
                o = 0,
                s = i;
            if (0 == e) return n;
            if (1 == (e /= a)) return n + i;
            if (o || (o = .3 * a), s < Math.abs(i)) {
                s = i;
                r = o / 4
            } else r = o / (2 * Math.PI) * Math.asin(i / s);
            return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / o) + n
        },
        easeOutElastic: function (t, e, n, i, a) {
            var r = 1.70158,
                o = 0,
                s = i;
            if (0 == e) return n;
            if (1 == (e /= a)) return n + i;
            if (o || (o = .3 * a), s < Math.abs(i)) {
                s = i;
                r = o / 4
            } else r = o / (2 * Math.PI) * Math.asin(i / s);
            return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / o) + i + n
        },
        easeInOutElastic: function (t, e, n, i, a) {
            var r = 1.70158,
                o = 0,
                s = i;
            if (0 == e) return n;
            if (2 == (e /= a / 2)) return n + i;
            if (o || (o = a * (.3 * 1.5)), s < Math.abs(i)) {
                s = i;
                r = o / 4
            } else r = o / (2 * Math.PI) * Math.asin(i / s);
            return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / o) * -.5 + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / o) * .5 + i + n
        },
        easeInBack: function (t, e, n, i, a, r) {
            return null == r && (r = 1.70158), i * (e /= a) * e * ((r + 1) * e - r) + n
        },
        easeOutBack: function (t, e, n, i, a, r) {
            return null == r && (r = 1.70158), i * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + n
        },
        easeInOutBack: function (t, e, n, i, a, r) {
            return null == r && (r = 1.70158), (e /= a / 2) < 1 ? i / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + n : i / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + n
        },
        easeInBounce: function (t, e, n, i, a) {
            return i - jQuery.easing.easeOutBounce(t, a - e, 0, i, a) + n
        },
        easeOutBounce: function (t, e, n, i, a) {
            return (e /= a) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function (t, e, n, i, a) {
            return e < a / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, a) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - a, 0, i, a) + .5 * i + n
        }
    }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (t) {
        function e(t) {
            var e = t.length,
                i = n.type(t);
            return "function" !== i && !n.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }
        if (!t.jQuery) {
            var n = function (t, e) {
                return new n.fn.init(t, e)
            };
            n.isWindow = function (t) {
                return null != t && t == t.window
            }, n.type = function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? a[o.call(t)] || "object" : typeof t
            }, n.isArray = Array.isArray || function (t) {
                return "array" === n.type(t)
            }, n.isPlainObject = function (t) {
                var e;
                if (!t || "object" !== n.type(t) || t.nodeType || n.isWindow(t)) return !1;
                try {
                    if (t.constructor && !r.call(t, "constructor") && !r.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                for (e in t);
                return void 0 === e || r.call(t, e)
            }, n.each = function (t, n, i) {
                var a = 0,
                    r = t.length,
                    o = e(t);
                if (i) {
                    if (o)
                        for (; r > a && !1 !== n.apply(t[a], i); a++);
                    else
                        for (a in t)
                            if (!1 === n.apply(t[a], i)) break
                } else if (o)
                    for (; r > a && !1 !== n.call(t[a], a, t[a]); a++);
                else
                    for (a in t)
                        if (!1 === n.call(t[a], a, t[a])) break;
                return t
            }, n.data = function (t, e, a) {
                if (void 0 === a) {
                    var r = (o = t[n.expando]) && i[o];
                    if (void 0 === e) return r;
                    if (r && e in r) return r[e]
                } else if (void 0 !== e) {
                    var o = t[n.expando] || (t[n.expando] = ++n.uuid);
                    return i[o] = i[o] || {}, i[o][e] = a, a
                }
            }, n.removeData = function (t, e) {
                var a = t[n.expando],
                    r = a && i[a];
                r && n.each(e, function (t, e) {
                    delete r[e]
                })
            }, n.extend = function () {
                var t, e, i, a, r, o, s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                    if (null != (r = arguments[l]))
                        for (a in r) t = s[a], s !== (i = r[a]) && (c && i && (n.isPlainObject(i) || (e = n.isArray(i))) ? (e ? (e = !1, o = t && n.isArray(t) ? t : []) : o = t && n.isPlainObject(t) ? t : {}, s[a] = n.extend(c, o, i)) : void 0 !== i && (s[a] = i));
                return s
            }, n.queue = function (t, i, a) {
                if (t) {
                    i = (i || "fx") + "queue";
                    var r = n.data(t, i);
                    return a ? (!r || n.isArray(a) ? r = n.data(t, i, function (t, n) {
                        var i = n || [];
                        return null != t && (e(Object(t)) ? function (t, e) {
                            for (var n = +e.length, i = 0, a = t.length; n > i;) t[a++] = e[i++];
                            if (n != n)
                                for (; void 0 !== e[i];) t[a++] = e[i++];
                            t.length = a
                        }(i, "string" == typeof t ? [t] : t) : [].push.call(i, t)), i
                    }(a)) : r.push(a), r) : r || []
                }
            }, n.dequeue = function (t, e) {
                n.each(t.nodeType ? [t] : t, function (t, i) {
                    e = e || "fx";
                    var a = n.queue(i, e),
                        r = a.shift();
                    "inprogress" === r && (r = a.shift()), r && ("fx" === e && a.unshift("inprogress"), r.call(i, function () {
                        n.dequeue(i, e)
                    }))
                })
            }, n.fn = n.prototype = {
                init: function (t) {
                    if (t.nodeType) return this[0] = t, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function () {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function () {
                    function t() {
                        for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                        return t || document
                    }
                    var e = this[0],
                        t = t.apply(e),
                        i = this.offset(),
                        a = /^(?:body|html)$/i.test(t.nodeName) ? {
                            top: 0,
                            left: 0
                        } : n(t).offset();
                    return i.top -= parseFloat(e.style.marginTop) || 0, i.left -= parseFloat(e.style.marginLeft) || 0, t.style && (a.top += parseFloat(t.style.borderTopWidth) || 0, a.left += parseFloat(t.style.borderLeftWidth) || 0), {
                        top: i.top - a.top,
                        left: i.left - a.left
                    }
                }
            };
            var i = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var a = {}, r = a.hasOwnProperty, o = a.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) a["[object " + s[l] + "]"] = s[l].toLowerCase();
            n.fn.init.prototype = n.fn, t.Velocity = {
                Utilities: n
            }
        }
    }(window), function (t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
    }(function () {
        return function (t, e, n, i) {
            function a(t) {
                return f.isWrapped(t) ? t = [].slice.call(t) : f.isNode(t) && (t = [t]), t
            }

            function r(t) {
                var e = c.data(t, "velocity");
                return null === e ? i : e
            }

            function o(t, n, i, a) {
                function r(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function o(t, e) {
                    return 3 * e - 6 * t
                }

                function s(t) {
                    return 3 * t
                }

                function l(t, e, n) {
                    return ((r(e, n) * t + o(e, n)) * t + s(e)) * t
                }

                function u(t, e, n) {
                    return 3 * r(e, n) * t * t + 2 * o(e, n) * t + s(e)
                }

                function c(e, n) {
                    for (var a = 0; f > a; ++a) {
                        var r = u(n, t, i);
                        if (0 === r) return n;
                        n -= (l(n, t, i) - e) / r
                    }
                    return n
                }

                function d(e, n, a) {
                    var r, o, s = 0;
                    do {
                        (r = l(o = n + (a - n) / 2, t, i) - e) > 0 ? a = o : n = o
                    } while (Math.abs(r) > g && ++s < m);
                    return o
                }

                function h() {
                    k = !0, (t != n || i != a) && function () {
                        for (var e = 0; v > e; ++e) w[e] = l(e * b, t, i)
                    }()
                }
                var f = 4,
                    p = .001,
                    g = 1e-7,
                    m = 10,
                    v = 11,
                    b = 1 / (v - 1),
                    y = "Float32Array" in e;
                if (4 !== arguments.length) return !1;
                for (var x = 0; 4 > x; ++x)
                    if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
                t = Math.min(t, 1), i = Math.min(i, 1), t = Math.max(t, 0), i = Math.max(i, 0);
                var w = y ? new Float32Array(v) : new Array(v),
                    k = !1,
                    C = function (e) {
                        return k || h(), t === n && i === a ? e : 0 === e ? 0 : 1 === e ? 1 : l(function (e) {
                            for (var n = 0, a = 1, r = v - 1; a != r && w[a] <= e; ++a) n += b;
                            var o = n + (e - w[--a]) / (w[a + 1] - w[a]) * b,
                                s = u(o, t, i);
                            return s >= p ? c(e, o) : 0 == s ? o : d(e, n, n + b)
                        }(e), n, a)
                    };
                C.getControlPoints = function () {
                    return [{
                        x: t,
                        y: n
                    }, {
                        x: i,
                        y: a
                    }]
                };
                var S = "generateBezier(" + [t, n, i, a] + ")";
                return C.toString = function () {
                    return S
                }, C
            }

            function s(t, e) {
                var n = t;
                return f.isString(t) ? v.Easings[t] || (n = !1) : n = f.isArray(t) && 1 === t.length ? function (t) {
                    return function (e) {
                        return Math.round(e * t) * (1 / t)
                    }
                }.apply(null, t) : f.isArray(t) && 2 === t.length ? b.apply(null, t.concat([e])) : !(!f.isArray(t) || 4 !== t.length) && o.apply(null, t), !1 === n && (n = v.Easings[v.defaults.easing] ? v.defaults.easing : m), n
            }

            function l(t) {
                if (t) {
                    var e = (new Date).getTime(),
                        n = v.State.calls.length;
                    n > 1e4 && (v.State.calls = function (t) {
                        for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                            var a = t[e];
                            a && i.push(a)
                        }
                        return i
                    }(v.State.calls));
                    for (var a = 0; n > a; a++)
                        if (v.State.calls[a]) {
                            var o = v.State.calls[a],
                                s = o[0],
                                d = o[2],
                                h = o[3],
                                p = !!h,
                                g = null;
                            h || (h = v.State.calls[a][3] = e - 16);
                            for (var m = Math.min((e - h) / d.duration, 1), b = 0, x = s.length; x > b; b++) {
                                var k = s[b],
                                    C = k.element;
                                if (r(C)) {
                                    var S = !1;
                                    if (d.display !== i && null !== d.display && "none" !== d.display) {
                                        if ("flex" === d.display) {
                                            c.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function (t, e) {
                                                y.setPropertyValue(C, "display", e)
                                            })
                                        }
                                        y.setPropertyValue(C, "display", d.display)
                                    }
                                    for (var M in d.visibility !== i && "hidden" !== d.visibility && y.setPropertyValue(C, "visibility", d.visibility), k)
                                        if ("element" !== M) {
                                            var P, T = k[M],
                                                A = f.isString(T.easing) ? v.Easings[T.easing] : T.easing;
                                            if (1 === m) P = T.endValue;
                                            else {
                                                var I = T.endValue - T.startValue;
                                                if (P = T.startValue + I * A(m, d, I), !p && P === T.currentValue) continue
                                            }
                                            if (T.currentValue = P, "tween" === M) g = P;
                                            else {
                                                if (y.Hooks.registered[M]) {
                                                    var _ = y.Hooks.getRoot(M),
                                                        D = r(C).rootPropertyValueCache[_];
                                                    D && (T.rootPropertyValue = D)
                                                }
                                                var F = y.setPropertyValue(C, M, T.currentValue + (0 === parseFloat(P) ? "" : T.unitType), T.rootPropertyValue, T.scrollData);
                                                y.Hooks.registered[M] && (r(C).rootPropertyValueCache[_] = y.Normalizations.registered[_] ? y.Normalizations.registered[_]("extract", null, F[1]) : F[1]), "transform" === F[0] && (S = !0)
                                            }
                                        } d.mobileHA && r(C).transformCache.translate3d === i && (r(C).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && y.flushTransformCache(C)
                                }
                            }
                            d.display !== i && "none" !== d.display && (v.State.calls[a][2].display = !1), d.visibility !== i && "hidden" !== d.visibility && (v.State.calls[a][2].visibility = !1), d.progress && d.progress.call(o[1], o[1], m, Math.max(0, h + d.duration - e), h, g), 1 === m && u(a)
                        }
                }
                v.State.isTicking && w(l)
            }

            function u(t, e) {
                if (!v.State.calls[t]) return !1;
                for (var n = v.State.calls[t][0], a = v.State.calls[t][1], o = v.State.calls[t][2], s = v.State.calls[t][4], l = !1, u = 0, d = n.length; d > u; u++) {
                    var h = n[u].element;
                    if (e || o.loop || ("none" === o.display && y.setPropertyValue(h, "display", o.display), "hidden" === o.visibility && y.setPropertyValue(h, "visibility", o.visibility)), !0 !== o.loop && (c.queue(h)[1] === i || !/\.velocityQueueEntryFlag/i.test(c.queue(h)[1])) && r(h)) {
                        r(h).isAnimating = !1, r(h).rootPropertyValueCache = {};
                        var f = !1;
                        c.each(y.Lists.transforms3D, function (t, e) {
                            var n = /^scale/.test(e) ? 1 : 0,
                                a = r(h).transformCache[e];
                            r(h).transformCache[e] !== i && new RegExp("^\\(" + n + "[^.]").test(a) && (f = !0, delete r(h).transformCache[e])
                        }), o.mobileHA && (f = !0, delete r(h).transformCache.translate3d), f && y.flushTransformCache(h), y.Values.removeClass(h, "velocity-animating")
                    }
                    if (!e && o.complete && !o.loop && u === d - 1) try {
                        o.complete.call(a, a)
                    } catch (t) {
                        setTimeout(function () {
                            throw t
                        }, 1)
                    }
                    s && !0 !== o.loop && s(a), r(h) && !0 === o.loop && !e && (c.each(r(h).tweensContainer, function (t, e) {
                        /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                    }), v(h, "reverse", {
                        loop: !0,
                        delay: o.delay
                    })), !1 !== o.queue && c.dequeue(h, o.queue)
                }
                v.State.calls[t] = !1;
                for (var p = 0, g = v.State.calls.length; g > p; p++)
                    if (!1 !== v.State.calls[p]) {
                        l = !0;
                        break
                    }! 1 === l && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
            }
            var c, d = function () {
                    if (n.documentMode) return n.documentMode;
                    for (var t = 7; t > 4; t--) {
                        var e = n.createElement("div");
                        if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length) return e = null, t
                    }
                    return i
                }(),
                h = function () {
                    var t = 0;
                    return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) {
                        var n, i = (new Date).getTime();
                        return n = Math.max(0, 16 - (i - t)), t = i + n, setTimeout(function () {
                            e(i + n)
                        }, n)
                    }
                }(),
                f = {
                    isString: function (t) {
                        return "string" == typeof t
                    },
                    isArray: Array.isArray || function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    isFunction: function (t) {
                        return "[object Function]" === Object.prototype.toString.call(t)
                    },
                    isNode: function (t) {
                        return t && t.nodeType
                    },
                    isNodeList: function (t) {
                        return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== i && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                    },
                    isWrapped: function (t) {
                        return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                    },
                    isSVG: function (t) {
                        return e.SVGElement && t instanceof e.SVGElement
                    },
                    isEmptyObject: function (t) {
                        for (var e in t) return !1;
                        return !0
                    }
                },
                p = !1;
            if (t.fn && t.fn.jquery ? (c = t, p = !0) : c = e.Velocity.Utilities, 8 >= d && !p) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (!(7 >= d)) {
                var g = 400,
                    m = "swing",
                    v = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: e.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: n.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: c,
                        Redirects: {},
                        Easings: {},
                        Promise: e.Promise,
                        defaults: {
                            queue: "",
                            duration: g,
                            easing: m,
                            begin: i,
                            complete: i,
                            progress: i,
                            display: i,
                            visibility: i,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function (t) {
                            c.data(t, "velocity", {
                                isSVG: f.isSVG(t),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
                e.pageYOffset !== i ? (v.State.scrollAnchor = e, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
                var b = function () {
                    function t(t) {
                        return -t.tension * t.x - t.friction * t.v
                    }

                    function e(e, n, i) {
                        var a = {
                            x: e.x + i.dx * n,
                            v: e.v + i.dv * n,
                            tension: e.tension,
                            friction: e.friction
                        };
                        return {
                            dx: a.v,
                            dv: t(a)
                        }
                    }

                    function n(n, i) {
                        var a = {
                                dx: n.v,
                                dv: t(n)
                            },
                            r = e(n, .5 * i, a),
                            o = e(n, .5 * i, r),
                            s = e(n, i, o),
                            l = 1 / 6 * (a.dx + 2 * (r.dx + o.dx) + s.dx),
                            u = 1 / 6 * (a.dv + 2 * (r.dv + o.dv) + s.dv);
                        return n.x = n.x + l * i, n.v = n.v + u * i, n
                    }
                    return function t(e, i, a) {
                        var r, o, s, l = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            u = [0],
                            c = 0;
                        for (e = parseFloat(e) || 500, i = parseFloat(i) || 20, a = a || null, l.tension = e, l.friction = i, (r = null !== a) ? o = (c = t(e, i)) / a * .016 : o = .016; s = n(s || l, o), u.push(1 + s.x), c += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                        return r ? function (t) {
                            return u[t * (u.length - 1) | 0]
                        } : c
                    }
                }();
                v.Easings = {
                    linear: function (t) {
                        return t
                    },
                    swing: function (t) {
                        return .5 - Math.cos(t * Math.PI) / 2
                    },
                    spring: function (t) {
                        return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                    }
                }, c.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (t, e) {
                    v.Easings[e[0]] = o.apply(null, e[1])
                });
                var y = v.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function () {
                            for (var t = 0; t < y.Lists.colors.length; t++) {
                                var e = "color" === y.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                                y.Hooks.templates[y.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                            }
                            var n, i, a;
                            if (d)
                                for (n in y.Hooks.templates) {
                                    a = (i = y.Hooks.templates[n])[0].split(" ");
                                    var r = i[1].match(y.RegEx.valueSplit);
                                    "Color" === a[0] && (a.push(a.shift()), r.push(r.shift()), y.Hooks.templates[n] = [a.join(" "), r.join(" ")])
                                }
                            for (n in y.Hooks.templates)
                                for (var t in a = (i = y.Hooks.templates[n])[0].split(" ")) {
                                    var o = n + a[t],
                                        s = t;
                                    y.Hooks.registered[o] = [n, s]
                                }
                        },
                        getRoot: function (t) {
                            var e = y.Hooks.registered[t];
                            return e ? e[0] : t
                        },
                        cleanRootPropertyValue: function (t, e) {
                            return y.RegEx.valueUnwrap.test(e) && (e = e.match(y.RegEx.valueUnwrap)[1]), y.Values.isCSSNullValue(e) && (e = y.Hooks.templates[t][1]), e
                        },
                        extractValue: function (t, e) {
                            var n = y.Hooks.registered[t];
                            if (n) {
                                var i = n[0],
                                    a = n[1];
                                return (e = y.Hooks.cleanRootPropertyValue(i, e)).toString().match(y.RegEx.valueSplit)[a]
                            }
                            return e
                        },
                        injectValue: function (t, e, n) {
                            var i = y.Hooks.registered[t];
                            if (i) {
                                var a, r = i[0],
                                    o = i[1];
                                return (a = (n = y.Hooks.cleanRootPropertyValue(r, n)).toString().match(y.RegEx.valueSplit))[o] = e, a.join(" ")
                            }
                            return n
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function (t, e, n) {
                                switch (t) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var i;
                                        return y.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : i = (i = n.toString().match(y.RegEx.valueUnwrap)) ? i[1].replace(/,(\s+)?/g, " ") : n, i;
                                    case "inject":
                                        return "rect(" + n + ")"
                                }
                            },
                            blur: function (t, e, n) {
                                switch (t) {
                                    case "name":
                                        return v.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        var i = parseFloat(n);
                                        if (!i && 0 !== i) {
                                            var a = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            i = a ? a[1] : 0
                                        }
                                        return i;
                                    case "inject":
                                        return parseFloat(n) ? "blur(" + n + ")" : "none"
                                }
                            },
                            opacity: function (t, e, n) {
                                if (8 >= d) switch (t) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return i ? i[1] / 100 : 1;
                                    case "inject":
                                        return e.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                } else switch (t) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return n
                                }
                            }
                        },
                        register: function () {
                            9 >= d || v.State.isGingerbread || (y.Lists.transformsBase = y.Lists.transformsBase.concat(y.Lists.transforms3D));
                            for (var t = 0; t < y.Lists.transformsBase.length; t++) ! function () {
                                var e = y.Lists.transformsBase[t];
                                y.Normalizations.registered[e] = function (t, n, a) {
                                    switch (t) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return r(n) === i || r(n).transformCache[e] === i ? /^scale/i.test(e) ? 1 : 0 : r(n).transformCache[e].replace(/[()]/g, "");
                                        case "inject":
                                            var o = !1;
                                            switch (e.substr(0, e.length - 1)) {
                                                case "translate":
                                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(a);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    v.State.isAndroid && r(n).transformCache[e] === i && 1 > a && (a = 1), o = !/(\d)$/i.test(a);
                                                    break;
                                                case "skew":
                                                    o = !/(deg|\d)$/i.test(a);
                                                    break;
                                                case "rotate":
                                                    o = !/(deg|\d)$/i.test(a)
                                            }
                                            return o || (r(n).transformCache[e] = "(" + a + ")"), r(n).transformCache[e]
                                    }
                                }
                            }();
                            for (t = 0; t < y.Lists.colors.length; t++) ! function () {
                                var e = y.Lists.colors[t];
                                y.Normalizations.registered[e] = function (t, n, a) {
                                    switch (t) {
                                        case "name":
                                            return e;
                                        case "extract":
                                            var r;
                                            if (y.RegEx.wrappedValueAlreadyExtracted.test(a)) r = a;
                                            else {
                                                var o, s = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(a) ? o = s[a] !== i ? s[a] : s.black : y.RegEx.isHex.test(a) ? o = "rgb(" + y.Values.hexToRgb(a).join(" ") + ")" : /^rgba?\(/i.test(a) || (o = s.black), r = (o || a).toString().match(y.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= d || 3 !== r.split(" ").length || (r += " 1"), r;
                                        case "inject":
                                            return 8 >= d ? 4 === a.split(" ").length && (a = a.split(/\s+/).slice(0, 3).join(" ")) : 3 === a.split(" ").length && (a += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + a.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function (t) {
                            return t.replace(/-(\w)/g, function (t, e) {
                                return e.toUpperCase()
                            })
                        },
                        SVGAttribute: function (t) {
                            var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (d || v.State.isAndroid && !v.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                        },
                        prefixCheck: function (t) {
                            if (v.State.prefixMatches[t]) return [v.State.prefixMatches[t], !0];
                            for (var e = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = e.length; i > n; n++) {
                                var a;
                                if (a = 0 === n ? t : e[n] + t.replace(/^\w/, function (t) {
                                        return t.toUpperCase()
                                    }), f.isString(v.State.prefixElement.style[a])) return v.State.prefixMatches[t] = a, [a, !0]
                            }
                            return [t, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function (t) {
                            var e;
                            return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, n, i) {
                                return e + e + n + n + i + i
                            }), (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function (t) {
                            return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                        },
                        getUnitType: function (t) {
                            return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                        },
                        getDisplayType: function (t) {
                            var e = t && t.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                        },
                        addClass: function (t, e) {
                            t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                        },
                        removeClass: function (t, e) {
                            t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function (t, n, a, o) {
                        function s(t, n) {
                            function a() {
                                h && y.setPropertyValue(t, "display", "none")
                            }
                            var l = 0;
                            if (8 >= d) l = c.css(t, n);
                            else {
                                var u, h = !1;
                                if (/^(width|height)$/.test(n) && 0 === y.getPropertyValue(t, "display") && (h = !0, y.setPropertyValue(t, "display", y.Values.getDisplayType(t))), !o) {
                                    if ("height" === n && "border-box" !== y.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                        var f = t.offsetHeight - (parseFloat(y.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingBottom")) || 0);
                                        return a(), f
                                    }
                                    if ("width" === n && "border-box" !== y.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                        var p = t.offsetWidth - (parseFloat(y.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingRight")) || 0);
                                        return a(), p
                                    }
                                }
                                u = r(t) === i ? e.getComputedStyle(t, null) : r(t).computedStyle ? r(t).computedStyle : r(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === n && (n = "borderTopColor"), ("" === (l = 9 === d && "filter" === n ? u.getPropertyValue(n) : u[n]) || null === l) && (l = t.style[n]), a()
                            }
                            if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                                var g = s(t, "position");
                                ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = c(t).position()[n] + "px")
                            }
                            return l
                        }
                        var l;
                        if (y.Hooks.registered[n]) {
                            var u = n,
                                h = y.Hooks.getRoot(u);
                            a === i && (a = y.getPropertyValue(t, y.Names.prefixCheck(h)[0])), y.Normalizations.registered[h] && (a = y.Normalizations.registered[h]("extract", t, a)), l = y.Hooks.extractValue(u, a)
                        } else if (y.Normalizations.registered[n]) {
                            var f, p;
                            "transform" !== (f = y.Normalizations.registered[n]("name", t)) && (p = s(t, y.Names.prefixCheck(f)[0]), y.Values.isCSSNullValue(p) && y.Hooks.templates[n] && (p = y.Hooks.templates[n][1])), l = y.Normalizations.registered[n]("extract", t, p)
                        }
                        if (!/^[\d-]/.test(l))
                            if (r(t) && r(t).isSVG && y.Names.SVGAttribute(n))
                                if (/^(height|width)$/i.test(n)) try {
                                    l = t.getBBox()[n]
                                } catch (t) {
                                    l = 0
                                } else l = t.getAttribute(n);
                                else l = s(t, y.Names.prefixCheck(n)[0]);
                        return y.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + n + ": " + l), l
                    },
                    setPropertyValue: function (t, n, i, a, o) {
                        var s = n;
                        if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = i : "Left" === o.direction ? e.scrollTo(i, o.alternateValue) : e.scrollTo(o.alternateValue, i);
                        else if (y.Normalizations.registered[n] && "transform" === y.Normalizations.registered[n]("name", t)) y.Normalizations.registered[n]("inject", t, i), s = "transform", i = r(t).transformCache[n];
                        else {
                            if (y.Hooks.registered[n]) {
                                var l = n,
                                    u = y.Hooks.getRoot(n);
                                a = a || y.getPropertyValue(t, u), i = y.Hooks.injectValue(l, i, a), n = u
                            }
                            if (y.Normalizations.registered[n] && (i = y.Normalizations.registered[n]("inject", t, i), n = y.Normalizations.registered[n]("name", t)), s = y.Names.prefixCheck(n)[0], 8 >= d) try {
                                t.style[s] = i
                            } catch (t) {
                                v.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                            } else r(t) && r(t).isSVG && y.Names.SVGAttribute(n) ? t.setAttribute(n, i) : t.style[s] = i;
                            v.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                        }
                        return [s, i]
                    },
                    flushTransformCache: function (t) {
                        function e(e) {
                            return parseFloat(y.getPropertyValue(t, e))
                        }
                        var n = "";
                        if ((d || v.State.isAndroid && !v.State.isChrome) && r(t).isSVG) {
                            var i = {
                                translate: [e("translateX"), e("translateY")],
                                skewX: [e("skewX")],
                                skewY: [e("skewY")],
                                scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                                rotate: [e("rotateZ"), 0, 0]
                            };
                            c.each(r(t).transformCache, function (t) {
                                /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), i[t] && (n += t + "(" + i[t].join(" ") + ") ", delete i[t])
                            })
                        } else {
                            var a, o;
                            c.each(r(t).transformCache, function (e) {
                                return a = r(t).transformCache[e], "transformPerspective" === e ? (o = a, !0) : (9 === d && "rotateZ" === e && (e = "rotate"), void(n += e + a + " "))
                            }), o && (n = "perspective" + o + " " + n)
                        }
                        y.setPropertyValue(t, "transform", n)
                    }
                };
                y.Hooks.register(), y.Normalizations.register(), v.hook = function (t, e, n) {
                    var o = i;
                    return t = a(t), c.each(t, function (t, a) {
                        if (r(a) === i && v.init(a), n === i) o === i && (o = v.CSS.getPropertyValue(a, e));
                        else {
                            var s = v.CSS.setPropertyValue(a, e, n);
                            "transform" === s[0] && v.CSS.flushTransformCache(a), o = s
                        }
                    }), o
                };
                var x = function () {
                    function t() {
                        return d ? T.promise || null : h
                    }

                    function o() {
                        function t(t) {
                            function h(t, e) {
                                var n = i,
                                    a = i,
                                    r = i;
                                return f.isArray(t) ? (n = t[0], !f.isArray(t[1]) && /^[\d-]/.test(t[1]) || f.isFunction(t[1]) || y.RegEx.isHex.test(t[1]) ? r = t[1] : (f.isString(t[1]) && !y.RegEx.isHex.test(t[1]) || f.isArray(t[1])) && (a = e ? t[1] : s(t[1], u.duration), t[2] !== i && (r = t[2]))) : n = t, e || (a = a || u.easing), f.isFunction(n) && (n = n.call(o, S, C)), f.isFunction(r) && (r = r.call(o, S, C)), [n || 0, a, r]
                            }

                            function p(t, e) {
                                var n, i;
                                return i = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (t) {
                                    return n = t, ""
                                }), n || (n = y.Values.getUnitType(t)), [i, n]
                            }

                            function g() {
                                var t = {
                                        myParent: o.parentNode || n.body,
                                        position: y.getPropertyValue(o, "position"),
                                        fontSize: y.getPropertyValue(o, "fontSize")
                                    },
                                    i = t.position === L.lastPosition && t.myParent === L.lastParent,
                                    a = t.fontSize === L.lastFontSize;
                                L.lastParent = t.myParent, L.lastPosition = t.position, L.lastFontSize = t.fontSize;
                                var s = 100,
                                    l = {};
                                if (a && i) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                                else {
                                    var u = r(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                    v.init(u), t.myParent.appendChild(u), c.each(["overflow", "overflowX", "overflowY"], function (t, e) {
                                        v.CSS.setPropertyValue(u, e, "hidden")
                                    }), v.CSS.setPropertyValue(u, "position", t.position), v.CSS.setPropertyValue(u, "fontSize", t.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), c.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (t, e) {
                                        v.CSS.setPropertyValue(u, e, s + "%")
                                    }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(y.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(y.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(y.getPropertyValue(u, "paddingLeft")) || 1) / s, t.myParent.removeChild(u)
                                }
                                return null === L.remToPx && (L.remToPx = parseFloat(y.getPropertyValue(n.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(e.innerWidth) / 100, L.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                            }
                            if (u.begin && 0 === S) try {
                                u.begin.call(m, m)
                            } catch (t) {
                                setTimeout(function () {
                                    throw t
                                }, 1)
                            }
                            if ("scroll" === P) {
                                var x, k, M, A = /^x$/i.test(u.axis) ? "Left" : "Top",
                                    I = parseFloat(u.offset) || 0;
                                u.container ? f.isWrapped(u.container) || f.isNode(u.container) ? (u.container = u.container[0] || u.container, M = (x = u.container["scroll" + A]) + c(o).position()[A.toLowerCase()] + I) : u.container = null : (x = v.State.scrollAnchor[v.State["scrollProperty" + A]], k = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], M = c(o).offset()[A.toLowerCase()] + I), d = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: x,
                                        currentValue: x,
                                        endValue: M,
                                        unitType: "",
                                        easing: u.easing,
                                        scrollData: {
                                            container: u.container,
                                            direction: A,
                                            alternateValue: k
                                        }
                                    },
                                    element: o
                                }, v.debug && console.log("tweensContainer (scroll): ", d.scroll, o)
                            } else if ("reverse" === P) {
                                if (!r(o).tweensContainer) return void c.dequeue(o, u.queue);
                                "none" === r(o).opts.display && (r(o).opts.display = "auto"), "hidden" === r(o).opts.visibility && (r(o).opts.visibility = "visible"), r(o).opts.loop = !1, r(o).opts.begin = null, r(o).opts.complete = null, w.easing || delete u.easing, w.duration || delete u.duration, u = c.extend({}, r(o).opts, u);
                                var _ = c.extend(!0, {}, r(o).tweensContainer);
                                for (var D in _)
                                    if ("element" !== D) {
                                        var F = _[D].startValue;
                                        _[D].startValue = _[D].currentValue = _[D].endValue, _[D].endValue = F, f.isEmptyObject(w) || (_[D].easing = u.easing), v.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(_[D]), o)
                                    } d = _
                            } else if ("start" === P) {
                                for (var O in r(o).tweensContainer && !0 === r(o).isAnimating && (_ = r(o).tweensContainer), c.each(b, function (t, e) {
                                        if (RegExp("^" + y.Lists.colors.join("$|^") + "$").test(t)) {
                                            var n = h(e, !0),
                                                a = n[0],
                                                r = n[1],
                                                o = n[2];
                                            if (y.RegEx.isHex.test(a)) {
                                                for (var s = ["Red", "Green", "Blue"], l = y.Values.hexToRgb(a), u = o ? y.Values.hexToRgb(o) : i, c = 0; c < s.length; c++) {
                                                    var d = [l[c]];
                                                    r && d.push(r), u !== i && d.push(u[c]), b[t + s[c]] = d
                                                }
                                                delete b[t]
                                            }
                                        }
                                    }), b) {
                                    var V = h(b[O]),
                                        z = V[0],
                                        N = V[1],
                                        E = V[2];
                                    O = y.Names.camelCase(O);
                                    var W = y.Hooks.getRoot(O),
                                        B = !1;
                                    if (r(o).isSVG || "tween" === W || !1 !== y.Names.prefixCheck(W)[1] || y.Normalizations.registered[W] !== i) {
                                        (u.display !== i && null !== u.display && "none" !== u.display || u.visibility !== i && "hidden" !== u.visibility) && /opacity|filter/.test(O) && !E && 0 !== z && (E = 0), u._cacheValues && _ && _[O] ? (E === i && (E = _[O].endValue + _[O].unitType), B = r(o).rootPropertyValueCache[W]) : y.Hooks.registered[O] ? E === i ? (B = y.getPropertyValue(o, W), E = y.getPropertyValue(o, O, B)) : B = y.Hooks.templates[W][1] : E === i && (E = y.getPropertyValue(o, O));
                                        var H, j, q, Y = !1;
                                        if (E = (H = p(O, E))[0], q = H[1], z = (H = p(O, z))[0].replace(/^([+-\/*])=/, function (t, e) {
                                                return Y = e, ""
                                            }), j = H[1], E = parseFloat(E) || 0, z = parseFloat(z) || 0, "%" === j && (/^(fontSize|lineHeight)$/.test(O) ? (z /= 100, j = "em") : /^scale/.test(O) ? (z /= 100, j = "") : /(Red|Green|Blue)$/i.test(O) && (z = z / 100 * 255, j = "")), /[\/*]/.test(Y)) j = q;
                                        else if (q !== j && 0 !== E)
                                            if (0 === z) j = q;
                                            else {
                                                a = a || g();
                                                var U = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";
                                                switch (q) {
                                                    case "%":
                                                        E *= "x" === U ? a.percentToPxWidth : a.percentToPxHeight;
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        E *= a[q + "ToPx"]
                                                }
                                                switch (j) {
                                                    case "%":
                                                        E *= 1 / ("x" === U ? a.percentToPxWidth : a.percentToPxHeight);
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        E *= 1 / a[j + "ToPx"]
                                                }
                                            } switch (Y) {
                                            case "+":
                                                z = E + z;
                                                break;
                                            case "-":
                                                z = E - z;
                                                break;
                                            case "*":
                                                z *= E;
                                                break;
                                            case "/":
                                                z = E / z
                                        }
                                        d[O] = {
                                            rootPropertyValue: B,
                                            startValue: E,
                                            currentValue: E,
                                            endValue: z,
                                            unitType: j,
                                            easing: N
                                        }, v.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(d[O]), o)
                                    } else v.debug && console.log("Skipping [" + W + "] due to a lack of browser support.")
                                }
                                d.element = o
                            }
                            d.element && (y.Values.addClass(o, "velocity-animating"), R.push(d), "" === u.queue && (r(o).tweensContainer = d, r(o).opts = u), r(o).isAnimating = !0, S === C - 1 ? (v.State.calls.push([R, m, u, null, T.resolver]), !1 === v.State.isTicking && (v.State.isTicking = !0, l())) : S++)
                        }
                        var a, o = this,
                            u = c.extend({}, v.defaults, w),
                            d = {};
                        switch (r(o) === i && v.init(o), parseFloat(u.delay) && !1 !== u.queue && c.queue(o, u.queue, function (t) {
                            v.velocityQueueEntryFlag = !0, r(o).delayTimer = {
                                setTimeout: setTimeout(t, parseFloat(u.delay)),
                                next: t
                            }
                        }), u.duration.toString().toLowerCase()) {
                            case "fast":
                                u.duration = 200;
                                break;
                            case "normal":
                                u.duration = g;
                                break;
                            case "slow":
                                u.duration = 600;
                                break;
                            default:
                                u.duration = parseFloat(u.duration) || 1
                        }!1 !== v.mock && (!0 === v.mock ? u.duration = u.delay = 1 : (u.duration *= parseFloat(v.mock) || 1, u.delay *= parseFloat(v.mock) || 1)), u.easing = s(u.easing, u.duration), u.begin && !f.isFunction(u.begin) && (u.begin = null), u.progress && !f.isFunction(u.progress) && (u.progress = null), u.complete && !f.isFunction(u.complete) && (u.complete = null), u.display !== i && null !== u.display && (u.display = u.display.toString().toLowerCase(), "auto" === u.display && (u.display = v.CSS.Values.getDisplayType(o))), u.visibility !== i && null !== u.visibility && (u.visibility = u.visibility.toString().toLowerCase()), u.mobileHA = u.mobileHA && v.State.isMobile && !v.State.isGingerbread, !1 === u.queue ? u.delay ? setTimeout(t, u.delay) : t() : c.queue(o, u.queue, function (e, n) {
                            return !0 === n ? (T.promise && T.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void t())
                        }), "" !== u.queue && "fx" !== u.queue || "inprogress" === c.queue(o)[0] || c.dequeue(o)
                    }
                    var d, h, p, m, b, w, k = arguments[0] && (arguments[0].p || c.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || f.isString(arguments[0].properties));
                    if (f.isWrapped(this) ? (d = !1, p = 0, m = this, h = this) : (d = !0, p = 1, m = k ? arguments[0].elements || arguments[0].e : arguments[0]), m = a(m)) {
                        k ? (b = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (b = arguments[p], w = arguments[p + 1]);
                        var C = m.length,
                            S = 0;
                        if (!/^(stop|finish)$/i.test(b) && !c.isPlainObject(w)) {
                            w = {};
                            for (var M = p + 1; M < arguments.length; M++) f.isArray(arguments[M]) || !/^(fast|normal|slow)$/i.test(arguments[M]) && !/^\d/.test(arguments[M]) ? f.isString(arguments[M]) || f.isArray(arguments[M]) ? w.easing = arguments[M] : f.isFunction(arguments[M]) && (w.complete = arguments[M]) : w.duration = arguments[M]
                        }
                        var P, T = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        switch (d && v.Promise && (T.promise = new v.Promise(function (t, e) {
                            T.resolver = t, T.rejecter = e
                        })), b) {
                            case "scroll":
                                P = "scroll";
                                break;
                            case "reverse":
                                P = "reverse";
                                break;
                            case "finish":
                            case "stop":
                                c.each(m, function (t, e) {
                                    r(e) && r(e).delayTimer && (clearTimeout(r(e).delayTimer.setTimeout), r(e).delayTimer.next && r(e).delayTimer.next(), delete r(e).delayTimer)
                                });
                                var A = [];
                                return c.each(v.State.calls, function (t, e) {
                                    e && c.each(e[1], function (n, a) {
                                        var o = w === i ? "" : w;
                                        return !0 !== o && e[2].queue !== o && (w !== i || !1 !== e[2].queue) || void c.each(m, function (n, i) {
                                            i === a && ((!0 === w || f.isString(w)) && (c.each(c.queue(i, f.isString(w) ? w : ""), function (t, e) {
                                                f.isFunction(e) && e(null, !0)
                                            }), c.queue(i, f.isString(w) ? w : "", [])), "stop" === b ? (r(i) && r(i).tweensContainer && !1 !== o && c.each(r(i).tweensContainer, function (t, e) {
                                                e.endValue = e.currentValue
                                            }), A.push(t)) : "finish" === b && (e[2].duration = 1))
                                        })
                                    })
                                }), "stop" === b && (c.each(A, function (t, e) {
                                    u(e, !0)
                                }), T.promise && T.resolver(m)), t();
                            default:
                                if (!c.isPlainObject(b) || f.isEmptyObject(b)) {
                                    if (f.isString(b) && v.Redirects[b]) {
                                        var I = (O = c.extend({}, w)).duration,
                                            _ = O.delay || 0;
                                        return !0 === O.backwards && (m = c.extend(!0, [], m).reverse()), c.each(m, function (t, e) {
                                            parseFloat(O.stagger) ? O.delay = _ + parseFloat(O.stagger) * t : f.isFunction(O.stagger) && (O.delay = _ + O.stagger.call(e, t, C)), O.drag && (O.duration = parseFloat(I) || (/^(callout|transition)/.test(b) ? 1e3 : g), O.duration = Math.max(O.duration * (O.backwards ? 1 - t / C : (t + 1) / C), .75 * O.duration, 200)), v.Redirects[b].call(e, e, O || {}, t, C, m, T.promise ? T : i)
                                        }), t()
                                    }
                                    var D = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return T.promise ? T.rejecter(new Error(D)) : console.log(D), t()
                                }
                                P = "start"
                        }
                        var F, O, L = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            R = [];
                        if (c.each(m, function (t, e) {
                                f.isNode(e) && o.call(e)
                            }), (O = c.extend({}, v.defaults, w)).loop = parseInt(O.loop), F = 2 * O.loop - 1, O.loop)
                            for (var V = 0; F > V; V++) {
                                var z = {
                                    delay: O.delay,
                                    progress: O.progress
                                };
                                V === F - 1 && (z.display = O.display, z.visibility = O.visibility, z.complete = O.complete), x(m, "reverse", z)
                            }
                        return t()
                    }
                };
                (v = c.extend(x, v)).animate = x;
                var w = e.requestAnimationFrame || h;
                return v.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function () {
                    n.hidden ? (w = function (t) {
                        return setTimeout(function () {
                            t(!0)
                        }, 16)
                    }, l()) : w = e.requestAnimationFrame || h
                }), t.Velocity = v, t !== e && (t.fn.velocity = x, t.fn.velocity.defaults = v.defaults), c.each(["Down", "Up"], function (t, e) {
                    v.Redirects["slide" + e] = function (t, n, a, r, o, s) {
                        var l = c.extend({}, n),
                            u = l.begin,
                            d = l.complete,
                            h = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            f = {};
                        l.display === i && (l.display = "Down" === e ? "inline" === v.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function () {
                            for (var n in u && u.call(o, o), h) {
                                f[n] = t.style[n];
                                var i = v.CSS.getPropertyValue(t, n);
                                h[n] = "Down" === e ? [i, 0] : [0, i]
                            }
                            f.overflow = t.style.overflow, t.style.overflow = "hidden"
                        }, l.complete = function () {
                            for (var e in f) t.style[e] = f[e];
                            d && d.call(o, o), s && s.resolver(o)
                        }, v(t, h, l)
                    }
                }), c.each(["In", "Out"], function (t, e) {
                    v.Redirects["fade" + e] = function (t, n, a, r, o, s) {
                        var l = c.extend({}, n),
                            u = {
                                opacity: "In" === e ? 1 : 0
                            },
                            d = l.complete;
                        l.complete = a !== r - 1 ? l.begin = null : function () {
                            d && d.call(o, o), s && s.resolver(o)
                        }, l.display === i && (l.display = "In" === e ? "auto" : "none"), v(this, u, l)
                    }
                }), v
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function (t) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
            ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t()
        }
    }(function () {
        return function () {
            return function t(e, n, i) {
                function a(o, s) {
                    if (!n[o]) {
                        if (!e[o]) {
                            var l = "function" == typeof require && require;
                            if (!s && l) return l(o, !0);
                            if (r) return r(o, !0);
                            var u = new Error("Cannot find module '" + o + "'");
                            throw u.code = "MODULE_NOT_FOUND", u
                        }
                        var c = n[o] = {
                            exports: {}
                        };
                        e[o][0].call(c.exports, function (t) {
                            return a(e[o][1][t] || t)
                        }, c, c.exports, t, e, n, i)
                    }
                    return n[o].exports
                }
                for (var r = "function" == typeof require && require, o = 0; o < i.length; o++) a(i[o]);
                return a
            }
        }()({
            1: [function (t, e, n) {}, {}],
            2: [function (t, e, n) {
                var i = t(6);

                function a(t) {
                    if (t) {
                        var e = [0, 0, 0],
                            n = 1,
                            a = t.match(/^#([a-fA-F0-9]{3})$/i);
                        if (a) {
                            a = a[1];
                            for (var r = 0; r < e.length; r++) e[r] = parseInt(a[r] + a[r], 16)
                        } else if (a = t.match(/^#([a-fA-F0-9]{6})$/i)) {
                            a = a[1];
                            for (r = 0; r < e.length; r++) e[r] = parseInt(a.slice(2 * r, 2 * r + 2), 16)
                        } else if (a = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                            for (r = 0; r < e.length; r++) e[r] = parseInt(a[r + 1]);
                            n = parseFloat(a[4])
                        } else if (a = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                            for (r = 0; r < e.length; r++) e[r] = Math.round(2.55 * parseFloat(a[r + 1]));
                            n = parseFloat(a[4])
                        } else if (a = t.match(/(\w+)/)) {
                            if ("transparent" == a[1]) return [0, 0, 0, 0];
                            if (!(e = i[a[1]])) return
                        }
                        for (r = 0; r < e.length; r++) e[r] = c(e[r], 0, 255);
                        return n = n || 0 == n ? c(n, 0, 1) : 1, e[3] = n, e
                    }
                }

                function r(t) {
                    if (t) {
                        var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                        if (e) {
                            var n = parseFloat(e[4]);
                            return [c(parseInt(e[1]), 0, 360), c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)]
                        }
                    }
                }

                function o(t) {
                    if (t) {
                        var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                        if (e) {
                            var n = parseFloat(e[4]);
                            return [c(parseInt(e[1]), 0, 360), c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)]
                        }
                    }
                }

                function s(t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
                }

                function l(t, e) {
                    return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
                }

                function u(t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
                }

                function c(t, e, n) {
                    return Math.min(Math.max(e, t), n)
                }

                function d(t) {
                    var e = t.toString(16).toUpperCase();
                    return e.length < 2 ? "0" + e : e
                }
                e.exports = {
                    getRgba: a,
                    getHsla: r,
                    getRgb: function (t) {
                        var e = a(t);
                        return e && e.slice(0, 3)
                    },
                    getHsl: function (t) {
                        var e = r(t);
                        return e && e.slice(0, 3)
                    },
                    getHwb: o,
                    getAlpha: function (t) {
                        var e = a(t);
                        if (e) return e[3];
                        if (e = r(t)) return e[3];
                        if (e = o(t)) return e[3]
                    },
                    hexString: function (t) {
                        return "#" + d(t[0]) + d(t[1]) + d(t[2])
                    },
                    rgbString: function (t, e) {
                        if (e < 1 || t[3] && t[3] < 1) return s(t, e);
                        return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                    },
                    rgbaString: s,
                    percentString: function (t, e) {
                        if (e < 1 || t[3] && t[3] < 1) return l(t, e);
                        var n = Math.round(t[0] / 255 * 100),
                            i = Math.round(t[1] / 255 * 100),
                            a = Math.round(t[2] / 255 * 100);
                        return "rgb(" + n + "%, " + i + "%, " + a + "%)"
                    },
                    percentaString: l,
                    hslString: function (t, e) {
                        if (e < 1 || t[3] && t[3] < 1) return u(t, e);
                        return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                    },
                    hslaString: u,
                    hwbString: function (t, e) {
                        void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                        return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                    },
                    keyword: function (t) {
                        return h[t.slice(0, 3)]
                    }
                };
                var h = {};
                for (var f in i) h[i[f]] = f
            }, {
                6: 6
            }],
            3: [function (t, e, n) {
                var i = t(5),
                    a = t(2),
                    r = function (t) {
                        return t instanceof r ? t : this instanceof r ? (this.valid = !1, this.values = {
                            rgb: [0, 0, 0],
                            hsl: [0, 0, 0],
                            hsv: [0, 0, 0],
                            hwb: [0, 0, 0],
                            cmyk: [0, 0, 0, 0],
                            alpha: 1
                        }, void("string" == typeof t ? (e = a.getRgba(t)) ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new r(t);
                        var e
                    };
                r.prototype = {
                    isValid: function () {
                        return this.valid
                    },
                    rgb: function () {
                        return this.setSpace("rgb", arguments)
                    },
                    hsl: function () {
                        return this.setSpace("hsl", arguments)
                    },
                    hsv: function () {
                        return this.setSpace("hsv", arguments)
                    },
                    hwb: function () {
                        return this.setSpace("hwb", arguments)
                    },
                    cmyk: function () {
                        return this.setSpace("cmyk", arguments)
                    },
                    rgbArray: function () {
                        return this.values.rgb
                    },
                    hslArray: function () {
                        return this.values.hsl
                    },
                    hsvArray: function () {
                        return this.values.hsv
                    },
                    hwbArray: function () {
                        var t = this.values;
                        return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                    },
                    cmykArray: function () {
                        return this.values.cmyk
                    },
                    rgbaArray: function () {
                        var t = this.values;
                        return t.rgb.concat([t.alpha])
                    },
                    hslaArray: function () {
                        var t = this.values;
                        return t.hsl.concat([t.alpha])
                    },
                    alpha: function (t) {
                        return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                    },
                    red: function (t) {
                        return this.setChannel("rgb", 0, t)
                    },
                    green: function (t) {
                        return this.setChannel("rgb", 1, t)
                    },
                    blue: function (t) {
                        return this.setChannel("rgb", 2, t)
                    },
                    hue: function (t) {
                        return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                    },
                    saturation: function (t) {
                        return this.setChannel("hsl", 1, t)
                    },
                    lightness: function (t) {
                        return this.setChannel("hsl", 2, t)
                    },
                    saturationv: function (t) {
                        return this.setChannel("hsv", 1, t)
                    },
                    whiteness: function (t) {
                        return this.setChannel("hwb", 1, t)
                    },
                    blackness: function (t) {
                        return this.setChannel("hwb", 2, t)
                    },
                    value: function (t) {
                        return this.setChannel("hsv", 2, t)
                    },
                    cyan: function (t) {
                        return this.setChannel("cmyk", 0, t)
                    },
                    magenta: function (t) {
                        return this.setChannel("cmyk", 1, t)
                    },
                    yellow: function (t) {
                        return this.setChannel("cmyk", 2, t)
                    },
                    black: function (t) {
                        return this.setChannel("cmyk", 3, t)
                    },
                    hexString: function () {
                        return a.hexString(this.values.rgb)
                    },
                    rgbString: function () {
                        return a.rgbString(this.values.rgb, this.values.alpha)
                    },
                    rgbaString: function () {
                        return a.rgbaString(this.values.rgb, this.values.alpha)
                    },
                    percentString: function () {
                        return a.percentString(this.values.rgb, this.values.alpha)
                    },
                    hslString: function () {
                        return a.hslString(this.values.hsl, this.values.alpha)
                    },
                    hslaString: function () {
                        return a.hslaString(this.values.hsl, this.values.alpha)
                    },
                    hwbString: function () {
                        return a.hwbString(this.values.hwb, this.values.alpha)
                    },
                    keyword: function () {
                        return a.keyword(this.values.rgb, this.values.alpha)
                    },
                    rgbNumber: function () {
                        var t = this.values.rgb;
                        return t[0] << 16 | t[1] << 8 | t[2]
                    },
                    luminosity: function () {
                        for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                            var i = t[n] / 255;
                            e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                        }
                        return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                    },
                    contrast: function (t) {
                        var e = this.luminosity(),
                            n = t.luminosity();
                        return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
                    },
                    level: function (t) {
                        var e = this.contrast(t);
                        return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                    },
                    dark: function () {
                        var t = this.values.rgb;
                        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                    },
                    light: function () {
                        return !this.dark()
                    },
                    negate: function () {
                        for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                        return this.setValues("rgb", t), this
                    },
                    lighten: function (t) {
                        var e = this.values.hsl;
                        return e[2] += e[2] * t, this.setValues("hsl", e), this
                    },
                    darken: function (t) {
                        var e = this.values.hsl;
                        return e[2] -= e[2] * t, this.setValues("hsl", e), this
                    },
                    saturate: function (t) {
                        var e = this.values.hsl;
                        return e[1] += e[1] * t, this.setValues("hsl", e), this
                    },
                    desaturate: function (t) {
                        var e = this.values.hsl;
                        return e[1] -= e[1] * t, this.setValues("hsl", e), this
                    },
                    whiten: function (t) {
                        var e = this.values.hwb;
                        return e[1] += e[1] * t, this.setValues("hwb", e), this
                    },
                    blacken: function (t) {
                        var e = this.values.hwb;
                        return e[2] += e[2] * t, this.setValues("hwb", e), this
                    },
                    greyscale: function () {
                        var t = this.values.rgb,
                            e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                        return this.setValues("rgb", [e, e, e]), this
                    },
                    clearer: function (t) {
                        var e = this.values.alpha;
                        return this.setValues("alpha", e - e * t), this
                    },
                    opaquer: function (t) {
                        var e = this.values.alpha;
                        return this.setValues("alpha", e + e * t), this
                    },
                    rotate: function (t) {
                        var e = this.values.hsl,
                            n = (e[0] + t) % 360;
                        return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
                    },
                    mix: function (t, e) {
                        var n = t,
                            i = void 0 === e ? .5 : e,
                            a = 2 * i - 1,
                            r = this.alpha() - n.alpha(),
                            o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
                            s = 1 - o;
                        return this.rgb(o * this.red() + s * n.red(), o * this.green() + s * n.green(), o * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i))
                    },
                    toJSON: function () {
                        return this.rgb()
                    },
                    clone: function () {
                        var t, e, n = new r,
                            i = this.values,
                            a = n.values;
                        for (var o in i) i.hasOwnProperty(o) && (t = i[o], "[object Array]" === (e = {}.toString.call(t)) ? a[o] = t.slice(0) : "[object Number]" === e ? a[o] = t : console.error("unexpected color value:", t));
                        return n
                    }
                }, r.prototype.spaces = {
                    rgb: ["red", "green", "blue"],
                    hsl: ["hue", "saturation", "lightness"],
                    hsv: ["hue", "saturation", "value"],
                    hwb: ["hue", "whiteness", "blackness"],
                    cmyk: ["cyan", "magenta", "yellow", "black"]
                }, r.prototype.maxes = {
                    rgb: [255, 255, 255],
                    hsl: [360, 100, 100],
                    hsv: [360, 100, 100],
                    hwb: [360, 100, 100],
                    cmyk: [100, 100, 100, 100]
                }, r.prototype.getValues = function (t) {
                    for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
                    return 1 !== e.alpha && (n.a = e.alpha), n
                }, r.prototype.setValues = function (t, e) {
                    var n, a, r = this.values,
                        o = this.spaces,
                        s = this.maxes,
                        l = 1;
                    if (this.valid = !0, "alpha" === t) l = e;
                    else if (e.length) r[t] = e.slice(0, t.length), l = e[t.length];
                    else if (void 0 !== e[t.charAt(0)]) {
                        for (n = 0; n < t.length; n++) r[t][n] = e[t.charAt(n)];
                        l = e.a
                    } else if (void 0 !== e[o[t][0]]) {
                        var u = o[t];
                        for (n = 0; n < t.length; n++) r[t][n] = e[u[n]];
                        l = e.alpha
                    }
                    if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === t) return !1;
                    for (n = 0; n < t.length; n++) a = Math.max(0, Math.min(s[t][n], r[t][n])), r[t][n] = Math.round(a);
                    for (var c in o) c !== t && (r[c] = i[t][c](r[t]));
                    return !0
                }, r.prototype.setSpace = function (t, e) {
                    var n = e[0];
                    return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
                }, r.prototype.setChannel = function (t, e, n) {
                    var i = this.values[t];
                    return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this)
                }, "undefined" != typeof window && (window.Color = r), e.exports = r
            }, {
                2: 2,
                5: 5
            }],
            4: [function (t, e, n) {
                function i(t) {
                    var e, n, i = t[0] / 255,
                        a = t[1] / 255,
                        r = t[2] / 255,
                        o = Math.min(i, a, r),
                        s = Math.max(i, a, r),
                        l = s - o;
                    return s == o ? e = 0 : i == s ? e = (a - r) / l : a == s ? e = 2 + (r - i) / l : r == s && (e = 4 + (i - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + s) / 2, [e, 100 * (s == o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n]
                }

                function a(t) {
                    var e, n, i = t[0],
                        a = t[1],
                        r = t[2],
                        o = Math.min(i, a, r),
                        s = Math.max(i, a, r),
                        l = s - o;
                    return n = 0 == s ? 0 : l / s * 1e3 / 10, s == o ? e = 0 : i == s ? e = (a - r) / l : a == s ? e = 2 + (r - i) / l : r == s && (e = 4 + (i - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, n, s / 255 * 1e3 / 10]
                }

                function o(t) {
                    var e = t[0],
                        n = t[1],
                        a = t[2];
                    return [i(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(n, a)))]
                }

                function s(t) {
                    var e, n = t[0] / 255,
                        i = t[1] / 255,
                        a = t[2] / 255;
                    return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - a))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
                }

                function l(t) {
                    return M[JSON.stringify(t)]
                }

                function u(t) {
                    var e = t[0] / 255,
                        n = t[1] / 255,
                        i = t[2] / 255;
                    return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]
                }

                function c(t) {
                    var e = u(t),
                        n = e[0],
                        i = e[1],
                        a = e[2];
                    return i /= 100, a /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
                }

                function d(t) {
                    var e, n, i, a, r, o = t[0] / 360,
                        s = t[1] / 100,
                        l = t[2] / 100;
                    if (0 == s) return [r = 255 * l, r, r];
                    e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
                    for (var u = 0; u < 3; u++)(i = o + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, r = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, a[u] = 255 * r;
                    return a
                }

                function h(t) {
                    var e = t[0] / 60,
                        n = t[1] / 100,
                        i = t[2] / 100,
                        a = Math.floor(e) % 6,
                        r = e - Math.floor(e),
                        o = 255 * i * (1 - n),
                        s = 255 * i * (1 - n * r),
                        l = 255 * i * (1 - n * (1 - r));
                    i *= 255;
                    switch (a) {
                        case 0:
                            return [i, l, o];
                        case 1:
                            return [s, i, o];
                        case 2:
                            return [o, i, l];
                        case 3:
                            return [o, s, i];
                        case 4:
                            return [l, o, i];
                        case 5:
                            return [i, o, s]
                    }
                }

                function f(t) {
                    var e, n, i, a, o = t[0] / 360,
                        s = t[1] / 100,
                        l = t[2] / 100,
                        u = s + l;
                    switch (u > 1 && (s /= u, l /= u), i = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (i = 1 - i), a = s + i * ((n = 1 - l) - s), e) {
                        default:
                        case 6:
                        case 0:
                            r = n, g = a, b = s;
                            break;
                        case 1:
                            r = a, g = n, b = s;
                            break;
                        case 2:
                            r = s, g = n, b = a;
                            break;
                        case 3:
                            r = s, g = a, b = n;
                            break;
                        case 4:
                            r = a, g = s, b = n;
                            break;
                        case 5:
                            r = n, g = s, b = a
                    }
                    return [255 * r, 255 * g, 255 * b]
                }

                function p(t) {
                    var e = t[0] / 100,
                        n = t[1] / 100,
                        i = t[2] / 100,
                        a = t[3] / 100;
                    return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a))]
                }

                function m(t) {
                    var e, n, i, a = t[0] / 100,
                        r = t[1] / 100,
                        o = t[2] / 100;
                    return n = -.9689 * a + 1.8758 * r + .0415 * o, i = .0557 * a + -.204 * r + 1.057 * o, e = (e = 3.2406 * a + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
                }

                function v(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2];
                    return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
                }

                function y(t) {
                    var e, n, i, a, r = t[0],
                        o = t[1],
                        s = t[2];
                    return r <= 8 ? a = (n = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((r + 16) / 116, 3), a = Math.pow(n / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), n, i = i / 108.883 <= .008859 ? i = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)]
                }

                function x(t) {
                    var e, n = t[0],
                        i = t[1],
                        a = t[2];
                    return (e = 360 * Math.atan2(a, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + a * a), e]
                }

                function w(t) {
                    return m(y(t))
                }

                function k(t) {
                    var e, n = t[0],
                        i = t[1];
                    return e = t[2] / 360 * 2 * Math.PI, [n, i * Math.cos(e), i * Math.sin(e)]
                }

                function C(t) {
                    return S[t]
                }
                e.exports = {
                    rgb2hsl: i,
                    rgb2hsv: a,
                    rgb2hwb: o,
                    rgb2cmyk: s,
                    rgb2keyword: l,
                    rgb2xyz: u,
                    rgb2lab: c,
                    rgb2lch: function (t) {
                        return x(c(t))
                    },
                    hsl2rgb: d,
                    hsl2hsv: function (t) {
                        var e = t[0],
                            n = t[1] / 100,
                            i = t[2] / 100;
                        if (0 === i) return [0, 0, 0];
                        return [e, 100 * (2 * (n *= (i *= 2) <= 1 ? i : 2 - i) / (i + n)), 100 * ((i + n) / 2)]
                    },
                    hsl2hwb: function (t) {
                        return o(d(t))
                    },
                    hsl2cmyk: function (t) {
                        return s(d(t))
                    },
                    hsl2keyword: function (t) {
                        return l(d(t))
                    },
                    hsv2rgb: h,
                    hsv2hsl: function (t) {
                        var e, n, i = t[0],
                            a = t[1] / 100,
                            r = t[2] / 100;
                        return e = a * r, [i, 100 * (e = (e /= (n = (2 - a) * r) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
                    },
                    hsv2hwb: function (t) {
                        return o(h(t))
                    },
                    hsv2cmyk: function (t) {
                        return s(h(t))
                    },
                    hsv2keyword: function (t) {
                        return l(h(t))
                    },
                    hwb2rgb: f,
                    hwb2hsl: function (t) {
                        return i(f(t))
                    },
                    hwb2hsv: function (t) {
                        return a(f(t))
                    },
                    hwb2cmyk: function (t) {
                        return s(f(t))
                    },
                    hwb2keyword: function (t) {
                        return l(f(t))
                    },
                    cmyk2rgb: p,
                    cmyk2hsl: function (t) {
                        return i(p(t))
                    },
                    cmyk2hsv: function (t) {
                        return a(p(t))
                    },
                    cmyk2hwb: function (t) {
                        return o(p(t))
                    },
                    cmyk2keyword: function (t) {
                        return l(p(t))
                    },
                    keyword2rgb: C,
                    keyword2hsl: function (t) {
                        return i(C(t))
                    },
                    keyword2hsv: function (t) {
                        return a(C(t))
                    },
                    keyword2hwb: function (t) {
                        return o(C(t))
                    },
                    keyword2cmyk: function (t) {
                        return s(C(t))
                    },
                    keyword2lab: function (t) {
                        return c(C(t))
                    },
                    keyword2xyz: function (t) {
                        return u(C(t))
                    },
                    xyz2rgb: m,
                    xyz2lab: v,
                    xyz2lch: function (t) {
                        return x(v(t))
                    },
                    lab2xyz: y,
                    lab2rgb: w,
                    lab2lch: x,
                    lch2lab: k,
                    lch2xyz: function (t) {
                        return y(k(t))
                    },
                    lch2rgb: function (t) {
                        return w(k(t))
                    }
                };
                var S = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50]
                    },
                    M = {};
                for (var P in S) M[JSON.stringify(S[P])] = P
            }, {}],
            5: [function (t, e, n) {
                var i = t(4),
                    a = function () {
                        return new u
                    };
                for (var r in i) {
                    a[r + "Raw"] = function (t) {
                        return function (e) {
                            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e)
                        }
                    }(r);
                    var o = /(\w+)2(\w+)/.exec(r),
                        s = o[1],
                        l = o[2];
                    (a[s] = a[s] || {})[l] = a[r] = function (t) {
                        return function (e) {
                            "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                            var n = i[t](e);
                            if ("string" == typeof n || void 0 === n) return n;
                            for (var a = 0; a < n.length; a++) n[a] = Math.round(n[a]);
                            return n
                        }
                    }(r)
                }
                var u = function () {
                    this.convs = {}
                };
                u.prototype.routeSpace = function (t, e) {
                    var n = e[0];
                    return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
                }, u.prototype.setValues = function (t, e) {
                    return this.space = t, this.convs = {}, this.convs[t] = e, this
                }, u.prototype.getValues = function (t) {
                    var e = this.convs[t];
                    if (!e) {
                        var n = this.space,
                            i = this.convs[n];
                        e = a[n][t](i), this.convs[t] = e
                    }
                    return e
                }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
                    u.prototype[t] = function (e) {
                        return this.routeSpace(t, arguments)
                    }
                }), e.exports = a
            }, {
                4: 4
            }],
            6: [function (t, e, n) {
                "use strict";
                e.exports = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                }
            }, {}],
            7: [function (t, e, n) {
                var i = t(30)();
                i.helpers = t(46), t(28)(i), i.Animation = t(22), i.animationService = t(23), i.defaults = t(26), i.Element = t(27), i.elements = t(41), i.Interaction = t(29), i.layouts = t(31), i.platform = t(49), i.plugins = t(32), i.Scale = t(33), i.scaleService = t(34), i.Ticks = t(35), i.Tooltip = t(36), t(24)(i), t(25)(i), t(56)(i), t(54)(i), t(55)(i), t(57)(i), t(58)(i), t(59)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(21)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i);
                var a = t(50);
                for (var r in a) a.hasOwnProperty(r) && i.plugins.register(a[r]);
                i.platform.initialize(), e.exports = i, "undefined" != typeof window && (window.Chart = i), i.Legend = a.legend._element, i.Title = a.title._element, i.pluginService = i.plugins, i.PluginBase = i.Element.extend({}), i.canvasHelpers = i.helpers.canvas, i.layoutService = i.layouts
            }, {
                10: 10,
                11: 11,
                12: 12,
                13: 13,
                14: 14,
                15: 15,
                16: 16,
                17: 17,
                18: 18,
                19: 19,
                20: 20,
                21: 21,
                22: 22,
                23: 23,
                24: 24,
                25: 25,
                26: 26,
                27: 27,
                28: 28,
                29: 29,
                30: 30,
                31: 31,
                32: 32,
                33: 33,
                34: 34,
                35: 35,
                36: 36,
                41: 41,
                46: 46,
                49: 49,
                50: 50,
                54: 54,
                55: 55,
                56: 56,
                57: 57,
                58: 58,
                59: 59,
                8: 8,
                9: 9
            }],
            8: [function (t, e, n) {
                "use strict";
                e.exports = function (t) {
                    t.Bar = function (e, n) {
                        return n.type = "bar", new t(e, n)
                    }
                }
            }, {}],
            9: [function (t, e, n) {
                "use strict";
                e.exports = function (t) {
                    t.Bubble = function (e, n) {
                        return n.type = "bubble", new t(e, n)
                    }
                }
            }, {}],
            10: [function (t, e, n) {
                "use strict";
                e.exports = function (t) {
                    t.Doughnut = function (e, n) {
                        return n.type = "doughnut", new t(e, n)
                    }
                }
            }, {}],
            11: [function (t, e, n) {
                "use strict";
                e.exports = function (t) {
                    t.Line = function (e, n) {
                        return n.type = "line", new t(e, n)
                    }
                }
            }, {}],
            12: [function (t, e, n) {
                "use strict";
                e.exports = function (t) {
                    t.PolarArea = function (e, n) {
                        return n.type = "polarArea", new t(e, n)
                    }
                }
            }, {}],
            13: [function (t, e, n) {
                "use strict";
                e.exports = function (t) {
                    t.Radar = function (e, n) {
                        return n.type = "radar", new t(e, n)
                    }
                }
            }, {}],
            14: [function (t, e, n) {
                "use strict";
                e.exports = function (t) {
                    t.Scatter = function (e, n) {
                        return n.type = "scatter", new t(e, n)
                    }
                }
            }, {}],
            15: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(41),
                    r = t(46);
                i._set("bar", {
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            offset: !0,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }],
                        yAxes: [{
                            type: "linear"
                        }]
                    }
                }), i._set("horizontalBar", {
                    hover: {
                        mode: "index",
                        axis: "y"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom"
                        }],
                        yAxes: [{
                            position: "left",
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            offset: !0,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }]
                    },
                    elements: {
                        rectangle: {
                            borderSkipped: "left"
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function (t, e) {
                                var n = "";
                                return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                            },
                            label: function (t, e) {
                                return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                            }
                        },
                        mode: "index",
                        axis: "y"
                    }
                }), e.exports = function (t) {
                    t.controllers.bar = t.DatasetController.extend({
                        dataElementType: a.Rectangle,
                        initialize: function () {
                            var e;
                            t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0
                        },
                        update: function (t) {
                            var e, n, i = this.getMeta().data;
                            for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) this.updateElement(i[e], e, t)
                        },
                        updateElement: function (t, e, n) {
                            var i = this,
                                a = i.chart,
                                o = i.getMeta(),
                                s = i.getDataset(),
                                l = t.custom || {},
                                u = a.options.elements.rectangle;
                            t._xScale = i.getScaleForId(o.xAxisID), t._yScale = i.getScaleForId(o.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
                                datasetLabel: s.label,
                                label: a.data.labels[e],
                                borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
                                backgroundColor: l.backgroundColor ? l.backgroundColor : r.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
                                borderColor: l.borderColor ? l.borderColor : r.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
                                borderWidth: l.borderWidth ? l.borderWidth : r.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
                            }, i.updateElementGeometry(t, e, n), t.pivot()
                        },
                        updateElementGeometry: function (t, e, n) {
                            var i = this,
                                a = t._model,
                                r = i.getValueScale(),
                                o = r.getBasePixel(),
                                s = r.isHorizontal(),
                                l = i._ruler || i.getRuler(),
                                u = i.calculateBarValuePixels(i.index, e),
                                c = i.calculateBarIndexPixels(i.index, e, l);
                            a.horizontal = s, a.base = n ? o : u.base, a.x = s ? n ? o : u.head : c.center, a.y = s ? c.center : n ? o : u.head, a.height = s ? c.size : void 0, a.width = s ? void 0 : c.size
                        },
                        getValueScaleId: function () {
                            return this.getMeta().yAxisID
                        },
                        getIndexScaleId: function () {
                            return this.getMeta().xAxisID
                        },
                        getValueScale: function () {
                            return this.getScaleForId(this.getValueScaleId())
                        },
                        getIndexScale: function () {
                            return this.getScaleForId(this.getIndexScaleId())
                        },
                        _getStacks: function (t) {
                            var e, n, i = this.chart,
                                a = this.getIndexScale().options.stacked,
                                r = void 0 === t ? i.data.datasets.length : t + 1,
                                o = [];
                            for (e = 0; e < r; ++e)(n = i.getDatasetMeta(e)).bar && i.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === o.indexOf(n.stack) || void 0 === a && (void 0 === n.stack || -1 === o.indexOf(n.stack))) && o.push(n.stack);
                            return o
                        },
                        getStackCount: function () {
                            return this._getStacks().length
                        },
                        getStackIndex: function (t, e) {
                            var n = this._getStacks(t),
                                i = void 0 !== e ? n.indexOf(e) : -1;
                            return -1 === i ? n.length - 1 : i
                        },
                        getRuler: function () {
                            var t, e, n = this.getIndexScale(),
                                i = this.getStackCount(),
                                a = this.index,
                                o = n.isHorizontal(),
                                s = o ? n.left : n.top,
                                l = s + (o ? n.width : n.height),
                                u = [];
                            for (t = 0, e = this.getMeta().data.length; t < e; ++t) u.push(n.getPixelForValue(null, t, a));
                            return {
                                min: r.isNullOrUndef(n.options.barThickness) ? function (t, e) {
                                    var n, i, a, r, o = t.isHorizontal() ? t.width : t.height,
                                        s = t.getTicks();
                                    for (a = 1, r = e.length; a < r; ++a) o = Math.min(o, e[a] - e[a - 1]);
                                    for (a = 0, r = s.length; a < r; ++a) i = t.getPixelForTick(a), o = a > 0 ? Math.min(o, i - n) : o, n = i;
                                    return o
                                }(n, u) : -1,
                                pixels: u,
                                start: s,
                                end: l,
                                stackCount: i,
                                scale: n
                            }
                        },
                        calculateBarValuePixels: function (t, e) {
                            var n, i, a, r, o, s, l = this.chart,
                                u = this.getMeta(),
                                c = this.getValueScale(),
                                d = l.data.datasets,
                                h = c.getRightValue(d[t].data[e]),
                                f = c.options.stacked,
                                p = u.stack,
                                g = 0;
                            if (f || void 0 === f && void 0 !== p)
                                for (n = 0; n < t; ++n)(i = l.getDatasetMeta(n)).bar && i.stack === p && i.controller.getValueScaleId() === c.id && l.isDatasetVisible(n) && (a = c.getRightValue(d[n].data[e]), (h < 0 && a < 0 || h >= 0 && a > 0) && (g += a));
                            return r = c.getPixelForValue(g), {
                                size: s = ((o = c.getPixelForValue(g + h)) - r) / 2,
                                base: r,
                                head: o,
                                center: o + s / 2
                            }
                        },
                        calculateBarIndexPixels: function (t, e, n) {
                            var i = n.scale.options,
                                a = "flex" === i.barThickness ? function (t, e, n) {
                                    var i, a = e.pixels,
                                        r = a[t],
                                        o = t > 0 ? a[t - 1] : null,
                                        s = t < a.length - 1 ? a[t + 1] : null,
                                        l = n.categoryPercentage;
                                    return null === o && (o = r - (null === s ? e.end - r : s - r)), null === s && (s = r + r - o), i = r - (r - o) / 2 * l, {
                                        chunk: (s - o) / 2 * l / e.stackCount,
                                        ratio: n.barPercentage,
                                        start: i
                                    }
                                }(e, n, i) : function (t, e, n) {
                                    var i, a, o = n.barThickness,
                                        s = e.stackCount,
                                        l = e.pixels[t];
                                    return r.isNullOrUndef(o) ? (i = e.min * n.categoryPercentage, a = n.barPercentage) : (i = o * s, a = 1), {
                                        chunk: i / s,
                                        ratio: a,
                                        start: l - i / 2
                                    }
                                }(e, n, i),
                                o = this.getStackIndex(t, this.getMeta().stack),
                                s = a.start + a.chunk * o + a.chunk / 2,
                                l = Math.min(r.valueOrDefault(i.maxBarThickness, 1 / 0), a.chunk * a.ratio);
                            return {
                                base: s - l / 2,
                                head: s + l / 2,
                                center: s,
                                size: l
                            }
                        },
                        draw: function () {
                            var t = this.chart,
                                e = this.getValueScale(),
                                n = this.getMeta().data,
                                i = this.getDataset(),
                                a = n.length,
                                o = 0;
                            for (r.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o) isNaN(e.getRightValue(i.data[o])) || n[o].draw();
                            r.canvas.unclipArea(t.ctx)
                        }
                    }), t.controllers.horizontalBar = t.controllers.bar.extend({
                        getValueScaleId: function () {
                            return this.getMeta().xAxisID
                        },
                        getIndexScaleId: function () {
                            return this.getMeta().yAxisID
                        }
                    })
                }
            }, {
                26: 26,
                41: 41,
                46: 46
            }],
            16: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(41),
                    r = t(46);
                i._set("bubble", {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-0"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function () {
                                return ""
                            },
                            label: function (t, e) {
                                var n = e.datasets[t.datasetIndex].label || "",
                                    i = e.datasets[t.datasetIndex].data[t.index];
                                return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                            }
                        }
                    }
                }), e.exports = function (t) {
                    t.controllers.bubble = t.DatasetController.extend({
                        dataElementType: a.Point,
                        update: function (t) {
                            var e = this,
                                n = e.getMeta().data;
                            r.each(n, function (n, i) {
                                e.updateElement(n, i, t)
                            })
                        },
                        updateElement: function (t, e, n) {
                            var i = this,
                                a = i.getMeta(),
                                r = t.custom || {},
                                o = i.getScaleForId(a.xAxisID),
                                s = i.getScaleForId(a.yAxisID),
                                l = i._resolveElementOptions(t, e),
                                u = i.getDataset().data[e],
                                c = i.index,
                                d = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, e, c),
                                h = n ? s.getBasePixel() : s.getPixelForValue(u, e, c);
                            t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = c, t._index = e, t._model = {
                                backgroundColor: l.backgroundColor,
                                borderColor: l.borderColor,
                                borderWidth: l.borderWidth,
                                hitRadius: l.hitRadius,
                                pointStyle: l.pointStyle,
                                rotation: l.rotation,
                                radius: n ? 0 : l.radius,
                                skip: r.skip || isNaN(d) || isNaN(h),
                                x: d,
                                y: h
                            }, t.pivot()
                        },
                        setHoverStyle: function (t) {
                            var e = t._model,
                                n = t._options;
                            t.$previousStyle = {
                                backgroundColor: e.backgroundColor,
                                borderColor: e.borderColor,
                                borderWidth: e.borderWidth,
                                radius: e.radius
                            }, e.backgroundColor = r.valueOrDefault(n.hoverBackgroundColor, r.getHoverColor(n.backgroundColor)), e.borderColor = r.valueOrDefault(n.hoverBorderColor, r.getHoverColor(n.borderColor)), e.borderWidth = r.valueOrDefault(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
                        },
                        _resolveElementOptions: function (t, e) {
                            var n, i, a, o = this.chart,
                                s = o.data.datasets[this.index],
                                l = t.custom || {},
                                u = o.options.elements.point,
                                c = r.options.resolve,
                                d = s.data[e],
                                h = {},
                                f = {
                                    chart: o,
                                    dataIndex: e,
                                    dataset: s,
                                    datasetIndex: this.index
                                },
                                p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                            for (n = 0, i = p.length; n < i; ++n) h[a = p[n]] = c([l[a], s[a], u[a]], f, e);
                            return h.radius = c([l.radius, d ? d.r : void 0, s.radius, u.radius], f, e), h
                        }
                    })
                }
            }, {
                26: 26,
                41: 41,
                46: 46
            }],
            17: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(41),
                    r = t(46);
                i._set("doughnut", {
                    animation: {
                        animateRotate: !0,
                        animateScale: !1
                    },
                    hover: {
                        mode: "single"
                    },
                    legendCallback: function (t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var n = t.data,
                            i = n.datasets,
                            a = n.labels;
                        if (i.length)
                            for (var r = 0; r < i[0].data.length; ++r) e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function (t) {
                                var e = t.data;
                                return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                                    var a = t.getDatasetMeta(0),
                                        o = e.datasets[0],
                                        s = a.data[i],
                                        l = s && s.custom || {},
                                        u = r.valueAtIndexOrDefault,
                                        c = t.options.elements.arc;
                                    return {
                                        text: n,
                                        fillStyle: l.backgroundColor ? l.backgroundColor : u(o.backgroundColor, i, c.backgroundColor),
                                        strokeStyle: l.borderColor ? l.borderColor : u(o.borderColor, i, c.borderColor),
                                        lineWidth: l.borderWidth ? l.borderWidth : u(o.borderWidth, i, c.borderWidth),
                                        hidden: isNaN(o.data[i]) || a.data[i].hidden,
                                        index: i
                                    }
                                }) : []
                            }
                        },
                        onClick: function (t, e) {
                            var n, i, a, r = e.index,
                                o = this.chart;
                            for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(a = o.getDatasetMeta(n)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
                            o.update()
                        }
                    },
                    cutoutPercentage: 50,
                    rotation: -.5 * Math.PI,
                    circumference: 2 * Math.PI,
                    tooltips: {
                        callbacks: {
                            title: function () {
                                return ""
                            },
                            label: function (t, e) {
                                var n = e.labels[t.index],
                                    i = ": " + e.datasets[t.datasetIndex].data[t.index];
                                return r.isArray(n) ? (n = n.slice())[0] += i : n += i, n
                            }
                        }
                    }
                }), i._set("pie", r.clone(i.doughnut)), i._set("pie", {
                    cutoutPercentage: 0
                }), e.exports = function (t) {
                    t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                        dataElementType: a.Arc,
                        linkScales: r.noop,
                        getRingIndex: function (t) {
                            for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
                            return e
                        },
                        update: function (t) {
                            var e = this,
                                n = e.chart,
                                i = n.chartArea,
                                a = n.options,
                                o = a.elements.arc,
                                s = i.right - i.left - o.borderWidth,
                                l = i.bottom - i.top - o.borderWidth,
                                u = Math.min(s, l),
                                c = {
                                    x: 0,
                                    y: 0
                                },
                                d = e.getMeta(),
                                h = a.cutoutPercentage,
                                f = a.circumference;
                            if (f < 2 * Math.PI) {
                                var p = a.rotation % (2 * Math.PI),
                                    g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f,
                                    m = {
                                        x: Math.cos(p),
                                        y: Math.sin(p)
                                    },
                                    v = {
                                        x: Math.cos(g),
                                        y: Math.sin(g)
                                    },
                                    b = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                                    y = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                    x = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                                    w = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                    k = h / 100,
                                    C = {
                                        x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : k), v.x * (v.x < 0 ? 1 : k)),
                                        y: w ? -1 : Math.min(m.y * (m.y < 0 ? 1 : k), v.y * (v.y < 0 ? 1 : k))
                                    },
                                    S = {
                                        x: b ? 1 : Math.max(m.x * (m.x > 0 ? 1 : k), v.x * (v.x > 0 ? 1 : k)),
                                        y: y ? 1 : Math.max(m.y * (m.y > 0 ? 1 : k), v.y * (v.y > 0 ? 1 : k))
                                    },
                                    M = {
                                        width: .5 * (S.x - C.x),
                                        height: .5 * (S.y - C.y)
                                    };
                                u = Math.min(s / M.width, l / M.height), c = {
                                    x: -.5 * (S.x + C.x),
                                    y: -.5 * (S.y + C.y)
                                }
                            }
                            n.borderWidth = e.getMaxBorderWidth(d.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(h ? n.outerRadius / 100 * h : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = c.x * n.outerRadius, n.offsetY = c.y * n.outerRadius, d.total = e.calculateTotal(), e.outerRadius = n.outerRadius - n.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - n.radiusLength, 0), r.each(d.data, function (n, i) {
                                e.updateElement(n, i, t)
                            })
                        },
                        updateElement: function (t, e, n) {
                            var i = this,
                                a = i.chart,
                                o = a.chartArea,
                                s = a.options,
                                l = s.animation,
                                u = (o.left + o.right) / 2,
                                c = (o.top + o.bottom) / 2,
                                d = s.rotation,
                                h = s.rotation,
                                f = i.getDataset(),
                                p = n && l.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                                g = n && l.animateScale ? 0 : i.innerRadius,
                                m = n && l.animateScale ? 0 : i.outerRadius,
                                v = r.valueAtIndexOrDefault;
                            r.extend(t, {
                                _datasetIndex: i.index,
                                _index: e,
                                _model: {
                                    x: u + a.offsetX,
                                    y: c + a.offsetY,
                                    startAngle: d,
                                    endAngle: h,
                                    circumference: p,
                                    outerRadius: m,
                                    innerRadius: g,
                                    label: v(f.label, e, a.data.labels[e])
                                }
                            });
                            var b = t._model,
                                y = t.custom || {},
                                x = r.valueAtIndexOrDefault,
                                w = this.chart.options.elements.arc;
                            b.backgroundColor = y.backgroundColor ? y.backgroundColor : x(f.backgroundColor, e, w.backgroundColor), b.borderColor = y.borderColor ? y.borderColor : x(f.borderColor, e, w.borderColor), b.borderWidth = y.borderWidth ? y.borderWidth : x(f.borderWidth, e, w.borderWidth), n && l.animateRotate || (b.startAngle = 0 === e ? s.rotation : i.getMeta().data[e - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot()
                        },
                        calculateTotal: function () {
                            var t, e = this.getDataset(),
                                n = this.getMeta(),
                                i = 0;
                            return r.each(n.data, function (n, a) {
                                t = e.data[a], isNaN(t) || n.hidden || (i += Math.abs(t))
                            }), i
                        },
                        calculateCircumference: function (t) {
                            var e = this.getMeta().total;
                            return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
                        },
                        getMaxBorderWidth: function (t) {
                            for (var e, n, i = 0, a = this.index, r = t.length, o = 0; o < r; o++) e = t[o]._model ? t[o]._model.borderWidth : 0, i = (n = t[o]._chart ? t[o]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (i = e > i ? e : i) ? n : i;
                            return i
                        }
                    })
                }
            }, {
                26: 26,
                41: 41,
                46: 46
            }],
            18: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(41),
                    r = t(46);
                i._set("line", {
                    showLines: !0,
                    spanGaps: !1,
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            id: "y-axis-0"
                        }]
                    }
                }), e.exports = function (t) {
                    function e(t, e) {
                        return r.valueOrDefault(t.showLine, e.showLines)
                    }
                    t.controllers.line = t.DatasetController.extend({
                        datasetElementType: a.Line,
                        dataElementType: a.Point,
                        update: function (t) {
                            var n, i, a, o = this,
                                s = o.getMeta(),
                                l = s.dataset,
                                u = s.data || [],
                                c = o.chart.options,
                                d = c.elements.line,
                                h = o.getScaleForId(s.yAxisID),
                                f = o.getDataset(),
                                p = e(f, c);
                            for (p && (a = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = o.index, l._children = u, l._model = {
                                    spanGaps: f.spanGaps ? f.spanGaps : c.spanGaps,
                                    tension: a.tension ? a.tension : r.valueOrDefault(f.lineTension, d.tension),
                                    backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || d.backgroundColor,
                                    borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || d.borderWidth,
                                    borderColor: a.borderColor ? a.borderColor : f.borderColor || d.borderColor,
                                    borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || d.borderCapStyle,
                                    borderDash: a.borderDash ? a.borderDash : f.borderDash || d.borderDash,
                                    borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || d.borderDashOffset,
                                    borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || d.borderJoinStyle,
                                    fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : d.fill,
                                    steppedLine: a.steppedLine ? a.steppedLine : r.valueOrDefault(f.steppedLine, d.stepped),
                                    cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : r.valueOrDefault(f.cubicInterpolationMode, d.cubicInterpolationMode)
                                }, l.pivot()), n = 0, i = u.length; n < i; ++n) o.updateElement(u[n], n, t);
                            for (p && 0 !== l._model.tension && o.updateBezierControlPoints(), n = 0, i = u.length; n < i; ++n) u[n].pivot()
                        },
                        getPointBackgroundColor: function (t, e) {
                            var n = this.chart.options.elements.point.backgroundColor,
                                i = this.getDataset(),
                                a = t.custom || {};
                            return a.backgroundColor ? n = a.backgroundColor : i.pointBackgroundColor ? n = r.valueAtIndexOrDefault(i.pointBackgroundColor, e, n) : i.backgroundColor && (n = i.backgroundColor), n
                        },
                        getPointBorderColor: function (t, e) {
                            var n = this.chart.options.elements.point.borderColor,
                                i = this.getDataset(),
                                a = t.custom || {};
                            return a.borderColor ? n = a.borderColor : i.pointBorderColor ? n = r.valueAtIndexOrDefault(i.pointBorderColor, e, n) : i.borderColor && (n = i.borderColor), n
                        },
                        getPointBorderWidth: function (t, e) {
                            var n = this.chart.options.elements.point.borderWidth,
                                i = this.getDataset(),
                                a = t.custom || {};
                            return isNaN(a.borderWidth) ? !isNaN(i.pointBorderWidth) || r.isArray(i.pointBorderWidth) ? n = r.valueAtIndexOrDefault(i.pointBorderWidth, e, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = a.borderWidth, n
                        },
                        getPointRotation: function (t, e) {
                            var n = this.chart.options.elements.point.rotation,
                                i = this.getDataset(),
                                a = t.custom || {};
                            return isNaN(a.rotation) ? isNaN(i.pointRotation) && !r.isArray(i.pointRotation) || (n = r.valueAtIndexOrDefault(i.pointRotation, e, n)) : n = a.rotation, n
                        },
                        updateElement: function (t, e, n) {
                            var i, a, o = this,
                                s = o.getMeta(),
                                l = t.custom || {},
                                u = o.getDataset(),
                                c = o.index,
                                d = u.data[e],
                                h = o.getScaleForId(s.yAxisID),
                                f = o.getScaleForId(s.xAxisID),
                                p = o.chart.options.elements.point;
                            void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), i = f.getPixelForValue("object" == typeof d ? d : NaN, e, c), a = n ? h.getBasePixel() : o.calculatePointY(d, e, c), t._xScale = f, t._yScale = h, t._datasetIndex = c, t._index = e, t._model = {
                                x: i,
                                y: a,
                                skip: l.skip || isNaN(i) || isNaN(a),
                                radius: l.radius || r.valueAtIndexOrDefault(u.pointRadius, e, p.radius),
                                pointStyle: l.pointStyle || r.valueAtIndexOrDefault(u.pointStyle, e, p.pointStyle),
                                rotation: o.getPointRotation(t, e),
                                backgroundColor: o.getPointBackgroundColor(t, e),
                                borderColor: o.getPointBorderColor(t, e),
                                borderWidth: o.getPointBorderWidth(t, e),
                                tension: s.dataset._model ? s.dataset._model.tension : 0,
                                steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                                hitRadius: l.hitRadius || r.valueAtIndexOrDefault(u.pointHitRadius, e, p.hitRadius)
                            }
                        },
                        calculatePointY: function (t, e, n) {
                            var i, a, r, o = this.chart,
                                s = this.getMeta(),
                                l = this.getScaleForId(s.yAxisID),
                                u = 0,
                                c = 0;
                            if (l.options.stacked) {
                                for (i = 0; i < n; i++)
                                    if (a = o.data.datasets[i], "line" === (r = o.getDatasetMeta(i)).type && r.yAxisID === l.id && o.isDatasetVisible(i)) {
                                        var d = Number(l.getRightValue(a.data[e]));
                                        d < 0 ? c += d || 0 : u += d || 0
                                    } var h = Number(l.getRightValue(t));
                                return h < 0 ? l.getPixelForValue(c + h) : l.getPixelForValue(u + h)
                            }
                            return l.getPixelForValue(t)
                        },
                        updateBezierControlPoints: function () {
                            var t, e, n, i, a = this.getMeta(),
                                o = this.chart.chartArea,
                                s = a.data || [];

                            function l(t, e, n) {
                                return Math.max(Math.min(t, n), e)
                            }
                            if (a.dataset._model.spanGaps && (s = s.filter(function (t) {
                                    return !t._model.skip
                                })), "monotone" === a.dataset._model.cubicInterpolationMode) r.splineCurveMonotone(s);
                            else
                                for (t = 0, e = s.length; t < e; ++t) n = s[t]._model, i = r.splineCurve(r.previousItem(s, t)._model, n, r.nextItem(s, t)._model, a.dataset._model.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
                            if (this.chart.options.elements.line.capBezierPoints)
                                for (t = 0, e = s.length; t < e; ++t)(n = s[t]._model).controlPointPreviousX = l(n.controlPointPreviousX, o.left, o.right), n.controlPointPreviousY = l(n.controlPointPreviousY, o.top, o.bottom), n.controlPointNextX = l(n.controlPointNextX, o.left, o.right), n.controlPointNextY = l(n.controlPointNextY, o.top, o.bottom)
                        },
                        draw: function () {
                            var t, n = this.chart,
                                i = this.getMeta(),
                                a = i.data || [],
                                o = n.chartArea,
                                s = a.length,
                                l = 0;
                            for (e(this.getDataset(), n.options) && (t = (i.dataset._model.borderWidth || 0) / 2, r.canvas.clipArea(n.ctx, {
                                    left: o.left,
                                    right: o.right,
                                    top: o.top - t,
                                    bottom: o.bottom + t
                                }), i.dataset.draw(), r.canvas.unclipArea(n.ctx)); l < s; ++l) a[l].draw(o)
                        },
                        setHoverStyle: function (t) {
                            var e = this.chart.data.datasets[t._datasetIndex],
                                n = t._index,
                                i = t.custom || {},
                                a = t._model;
                            t.$previousStyle = {
                                backgroundColor: a.backgroundColor,
                                borderColor: a.borderColor,
                                borderWidth: a.borderWidth,
                                radius: a.radius
                            }, a.backgroundColor = i.hoverBackgroundColor || r.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, r.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor || r.valueAtIndexOrDefault(e.pointHoverBorderColor, n, r.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth || r.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth), a.radius = i.hoverRadius || r.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius)
                        }
                    })
                }
            }, {
                26: 26,
                41: 41,
                46: 46
            }],
            19: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(41),
                    r = t(46);
                i._set("polarArea", {
                    scale: {
                        type: "radialLinear",
                        angleLines: {
                            display: !1
                        },
                        gridLines: {
                            circular: !0
                        },
                        pointLabels: {
                            display: !1
                        },
                        ticks: {
                            beginAtZero: !0
                        }
                    },
                    animation: {
                        animateRotate: !0,
                        animateScale: !0
                    },
                    startAngle: -.5 * Math.PI,
                    legendCallback: function (t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var n = t.data,
                            i = n.datasets,
                            a = n.labels;
                        if (i.length)
                            for (var r = 0; r < i[0].data.length; ++r) e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function (t) {
                                var e = t.data;
                                return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                                    var a = t.getDatasetMeta(0),
                                        o = e.datasets[0],
                                        s = a.data[i].custom || {},
                                        l = r.valueAtIndexOrDefault,
                                        u = t.options.elements.arc;
                                    return {
                                        text: n,
                                        fillStyle: s.backgroundColor ? s.backgroundColor : l(o.backgroundColor, i, u.backgroundColor),
                                        strokeStyle: s.borderColor ? s.borderColor : l(o.borderColor, i, u.borderColor),
                                        lineWidth: s.borderWidth ? s.borderWidth : l(o.borderWidth, i, u.borderWidth),
                                        hidden: isNaN(o.data[i]) || a.data[i].hidden,
                                        index: i
                                    }
                                }) : []
                            }
                        },
                        onClick: function (t, e) {
                            var n, i, a, r = e.index,
                                o = this.chart;
                            for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
                            o.update()
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function () {
                                return ""
                            },
                            label: function (t, e) {
                                return e.labels[t.index] + ": " + t.yLabel
                            }
                        }
                    }
                }), e.exports = function (t) {
                    t.controllers.polarArea = t.DatasetController.extend({
                        dataElementType: a.Arc,
                        linkScales: r.noop,
                        update: function (t) {
                            var e, n, i, a = this,
                                o = a.getDataset(),
                                s = a.getMeta(),
                                l = a.chart.options.startAngle || 0,
                                u = a._starts = [],
                                c = a._angles = [];
                            for (a._updateRadius(), s.count = a.countVisibleElements(), e = 0, n = o.data.length; e < n; e++) u[e] = l, i = a._computeAngle(e), c[e] = i, l += i;
                            r.each(s.data, function (e, n) {
                                a.updateElement(e, n, t)
                            })
                        },
                        _updateRadius: function () {
                            var t = this,
                                e = t.chart,
                                n = e.chartArea,
                                i = e.options,
                                a = i.elements.arc,
                                r = Math.min(n.right - n.left, n.bottom - n.top);
                            e.outerRadius = Math.max((r - a.borderWidth / 2) / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
                        },
                        updateElement: function (t, e, n) {
                            var i = this,
                                a = i.chart,
                                o = i.getDataset(),
                                s = a.options,
                                l = s.animation,
                                u = a.scale,
                                c = a.data.labels,
                                d = u.xCenter,
                                h = u.yCenter,
                                f = s.startAngle,
                                p = t.hidden ? 0 : u.getDistanceFromCenterForValue(o.data[e]),
                                g = i._starts[e],
                                m = g + (t.hidden ? 0 : i._angles[e]),
                                v = l.animateScale ? 0 : u.getDistanceFromCenterForValue(o.data[e]);
                            r.extend(t, {
                                _datasetIndex: i.index,
                                _index: e,
                                _scale: u,
                                _model: {
                                    x: d,
                                    y: h,
                                    innerRadius: 0,
                                    outerRadius: n ? v : p,
                                    startAngle: n && l.animateRotate ? f : g,
                                    endAngle: n && l.animateRotate ? f : m,
                                    label: r.valueAtIndexOrDefault(c, e, c[e])
                                }
                            });
                            var b = this.chart.options.elements.arc,
                                y = t.custom || {},
                                x = r.valueAtIndexOrDefault,
                                w = t._model;
                            w.backgroundColor = y.backgroundColor ? y.backgroundColor : x(o.backgroundColor, e, b.backgroundColor), w.borderColor = y.borderColor ? y.borderColor : x(o.borderColor, e, b.borderColor), w.borderWidth = y.borderWidth ? y.borderWidth : x(o.borderWidth, e, b.borderWidth), t.pivot()
                        },
                        countVisibleElements: function () {
                            var t = this.getDataset(),
                                e = this.getMeta(),
                                n = 0;
                            return r.each(e.data, function (e, i) {
                                isNaN(t.data[i]) || e.hidden || n++
                            }), n
                        },
                        _computeAngle: function (t) {
                            var e = this,
                                n = this.getMeta().count,
                                i = e.getDataset(),
                                a = e.getMeta();
                            if (isNaN(i.data[t]) || a.data[t].hidden) return 0;
                            var o = {
                                chart: e.chart,
                                dataIndex: t,
                                dataset: i,
                                datasetIndex: e.index
                            };
                            return r.options.resolve([e.chart.options.elements.arc.angle, 2 * Math.PI / n], o, t)
                        }
                    })
                }
            }, {
                26: 26,
                41: 41,
                46: 46
            }],
            20: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(41),
                    r = t(46);
                i._set("radar", {
                    scale: {
                        type: "radialLinear"
                    },
                    elements: {
                        line: {
                            tension: 0
                        }
                    }
                }), e.exports = function (t) {
                    t.controllers.radar = t.DatasetController.extend({
                        datasetElementType: a.Line,
                        dataElementType: a.Point,
                        linkScales: r.noop,
                        update: function (t) {
                            var e = this,
                                n = e.getMeta(),
                                i = n.dataset,
                                a = n.data,
                                o = i.custom || {},
                                s = e.getDataset(),
                                l = e.chart.options.elements.line,
                                u = e.chart.scale;
                            void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), r.extend(n.dataset, {
                                _datasetIndex: e.index,
                                _scale: u,
                                _children: a,
                                _loop: !0,
                                _model: {
                                    tension: o.tension ? o.tension : r.valueOrDefault(s.lineTension, l.tension),
                                    backgroundColor: o.backgroundColor ? o.backgroundColor : s.backgroundColor || l.backgroundColor,
                                    borderWidth: o.borderWidth ? o.borderWidth : s.borderWidth || l.borderWidth,
                                    borderColor: o.borderColor ? o.borderColor : s.borderColor || l.borderColor,
                                    fill: o.fill ? o.fill : void 0 !== s.fill ? s.fill : l.fill,
                                    borderCapStyle: o.borderCapStyle ? o.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                    borderDash: o.borderDash ? o.borderDash : s.borderDash || l.borderDash,
                                    borderDashOffset: o.borderDashOffset ? o.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                    borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                                }
                            }), n.dataset.pivot(), r.each(a, function (n, i) {
                                e.updateElement(n, i, t)
                            }, e), e.updateBezierControlPoints()
                        },
                        updateElement: function (t, e, n) {
                            var i = this,
                                a = t.custom || {},
                                o = i.getDataset(),
                                s = i.chart.scale,
                                l = i.chart.options.elements.point,
                                u = s.getPointPositionForValue(e, o.data[e]);
                            void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), r.extend(t, {
                                _datasetIndex: i.index,
                                _index: e,
                                _scale: s,
                                _model: {
                                    x: n ? s.xCenter : u.x,
                                    y: n ? s.yCenter : u.y,
                                    tension: a.tension ? a.tension : r.valueOrDefault(o.lineTension, i.chart.options.elements.line.tension),
                                    radius: a.radius ? a.radius : r.valueAtIndexOrDefault(o.pointRadius, e, l.radius),
                                    backgroundColor: a.backgroundColor ? a.backgroundColor : r.valueAtIndexOrDefault(o.pointBackgroundColor, e, l.backgroundColor),
                                    borderColor: a.borderColor ? a.borderColor : r.valueAtIndexOrDefault(o.pointBorderColor, e, l.borderColor),
                                    borderWidth: a.borderWidth ? a.borderWidth : r.valueAtIndexOrDefault(o.pointBorderWidth, e, l.borderWidth),
                                    pointStyle: a.pointStyle ? a.pointStyle : r.valueAtIndexOrDefault(o.pointStyle, e, l.pointStyle),
                                    rotation: a.rotation ? a.rotation : r.valueAtIndexOrDefault(o.pointRotation, e, l.rotation),
                                    hitRadius: a.hitRadius ? a.hitRadius : r.valueAtIndexOrDefault(o.pointHitRadius, e, l.hitRadius)
                                }
                            }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y)
                        },
                        updateBezierControlPoints: function () {
                            var t = this.chart.chartArea,
                                e = this.getMeta();
                            r.each(e.data, function (n, i) {
                                var a = n._model,
                                    o = r.splineCurve(r.previousItem(e.data, i, !0)._model, a, r.nextItem(e.data, i, !0)._model, a.tension);
                                a.controlPointPreviousX = Math.max(Math.min(o.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(o.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(o.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(o.next.y, t.bottom), t.top), n.pivot()
                            })
                        },
                        setHoverStyle: function (t) {
                            var e = this.chart.data.datasets[t._datasetIndex],
                                n = t.custom || {},
                                i = t._index,
                                a = t._model;
                            t.$previousStyle = {
                                backgroundColor: a.backgroundColor,
                                borderColor: a.borderColor,
                                borderWidth: a.borderWidth,
                                radius: a.radius
                            }, a.radius = n.hoverRadius ? n.hoverRadius : r.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : r.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, r.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : r.valueAtIndexOrDefault(e.pointHoverBorderColor, i, r.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : r.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth)
                        }
                    })
                }
            }, {
                26: 26,
                41: 41,
                46: 46
            }],
            21: [function (t, e, n) {
                "use strict";
                t(26)._set("scatter", {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            id: "x-axis-1",
                            type: "linear",
                            position: "bottom"
                        }],
                        yAxes: [{
                            id: "y-axis-1",
                            type: "linear",
                            position: "left"
                        }]
                    },
                    showLines: !1,
                    tooltips: {
                        callbacks: {
                            title: function () {
                                return ""
                            },
                            label: function (t) {
                                return "(" + t.xLabel + ", " + t.yLabel + ")"
                            }
                        }
                    }
                }), e.exports = function (t) {
                    t.controllers.scatter = t.controllers.line
                }
            }, {
                26: 26
            }],
            22: [function (t, e, n) {
                "use strict";
                var i = t(27);
                n = e.exports = i.extend({
                    chart: null,
                    currentStep: 0,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                });
                Object.defineProperty(n.prototype, "animationObject", {
                    get: function () {
                        return this
                    }
                }), Object.defineProperty(n.prototype, "chartInstance", {
                    get: function () {
                        return this.chart
                    },
                    set: function (t) {
                        this.chart = t
                    }
                })
            }, {
                27: 27
            }],
            23: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(46);
                i._set("global", {
                    animation: {
                        duration: 1e3,
                        easing: "easeOutQuart",
                        onProgress: a.noop,
                        onComplete: a.noop
                    }
                }), e.exports = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function (t, e, n, i) {
                        var a, r, o = this.animations;
                        for (e.chart = t, i || (t.animating = !0), a = 0, r = o.length; a < r; ++a)
                            if (o[a].chart === t) return void(o[a] = e);
                        o.push(e), 1 === o.length && this.requestAnimationFrame()
                    },
                    cancelAnimation: function (t) {
                        var e = a.findIndex(this.animations, function (e) {
                            return e.chart === t
                        }); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
                    },
                    requestAnimationFrame: function () {
                        var t = this;
                        null === t.request && (t.request = a.requestAnimFrame.call(window, function () {
                            t.request = null, t.startDigest()
                        }))
                    },
                    startDigest: function () {
                        var t = this,
                            e = Date.now(),
                            n = 0;
                        t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
                        var i = Date.now();
                        t.dropFrames += (i - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
                    },
                    advance: function (t) {
                        for (var e, n, i = this.animations, r = 0; r < i.length;) n = (e = i[r]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), a.callback(e.render, [n, e], n), a.callback(e.onAnimationProgress, [e], n), e.currentStep >= e.numSteps ? (a.callback(e.onAnimationComplete, [e], n), n.animating = !1, i.splice(r, 1)) : ++r
                    }
                }
            }, {
                26: 26,
                46: 46
            }],
            24: [function (t, e, n) {
                "use strict";
                var i = t(22),
                    a = t(23),
                    r = t(26),
                    o = t(46),
                    s = t(29),
                    l = t(31),
                    u = t(49),
                    c = t(32),
                    d = t(34),
                    h = t(36);
                e.exports = function (t) {
                    function e(t) {
                        return "top" === t || "bottom" === t
                    }
                    t.types = {}, t.instances = {}, t.controllers = {}, o.extend(t.prototype, {
                        construct: function (e, n) {
                            var i = this;
                            n = function (t) {
                                var e = (t = t || {}).data = t.data || {};
                                return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = o.configMerge(r.global, r[t.type], t.options || {}), t
                            }(n);
                            var a = u.acquireContext(e, n),
                                s = a && a.canvas,
                                l = s && s.height,
                                c = s && s.width;
                            i.id = o.uid(), i.ctx = a, i.canvas = s, i.config = n, i.width = c, i.height = l, i.aspectRatio = l ? c / l : null, i.options = n.options, i._bufferedRender = !1, i.chart = i, i.controller = i, t.instances[i.id] = i, Object.defineProperty(i, "data", {
                                get: function () {
                                    return i.config.data
                                },
                                set: function (t) {
                                    i.config.data = t
                                }
                            }), a && s ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                        },
                        initialize: function () {
                            var t = this;
                            return c.notify(t, "beforeInit"), o.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), c.notify(t, "afterInit"), t
                        },
                        clear: function () {
                            return o.canvas.clear(this), this
                        },
                        stop: function () {
                            return a.cancelAnimation(this), this
                        },
                        resize: function (t) {
                            var e = this,
                                n = e.options,
                                i = e.canvas,
                                a = n.maintainAspectRatio && e.aspectRatio || null,
                                r = Math.max(0, Math.floor(o.getMaximumWidth(i))),
                                s = Math.max(0, Math.floor(a ? r / a : o.getMaximumHeight(i)));
                            if ((e.width !== r || e.height !== s) && (i.width = e.width = r, i.height = e.height = s, i.style.width = r + "px", i.style.height = s + "px", o.retinaScale(e, n.devicePixelRatio), !t)) {
                                var l = {
                                    width: r,
                                    height: s
                                };
                                c.notify(e, "resize", [l]), e.options.onResize && e.options.onResize(e, l), e.stop(), e.update({
                                    duration: e.options.responsiveAnimationDuration
                                })
                            }
                        },
                        ensureScalesHaveIDs: function () {
                            var t = this.options,
                                e = t.scales || {},
                                n = t.scale;
                            o.each(e.xAxes, function (t, e) {
                                t.id = t.id || "x-axis-" + e
                            }), o.each(e.yAxes, function (t, e) {
                                t.id = t.id || "y-axis-" + e
                            }), n && (n.id = n.id || "scale")
                        },
                        buildOrUpdateScales: function () {
                            var t = this,
                                n = t.options,
                                i = t.scales || {},
                                a = [],
                                r = Object.keys(i).reduce(function (t, e) {
                                    return t[e] = !1, t
                                }, {});
                            n.scales && (a = a.concat((n.scales.xAxes || []).map(function (t) {
                                return {
                                    options: t,
                                    dtype: "category",
                                    dposition: "bottom"
                                }
                            }), (n.scales.yAxes || []).map(function (t) {
                                return {
                                    options: t,
                                    dtype: "linear",
                                    dposition: "left"
                                }
                            }))), n.scale && a.push({
                                options: n.scale,
                                dtype: "radialLinear",
                                isDefault: !0,
                                dposition: "chartArea"
                            }), o.each(a, function (n) {
                                var a = n.options,
                                    s = a.id,
                                    l = o.valueOrDefault(a.type, n.dtype);
                                e(a.position) !== e(n.dposition) && (a.position = n.dposition), r[s] = !0;
                                var u = null;
                                if (s in i && i[s].type === l)(u = i[s]).options = a, u.ctx = t.ctx, u.chart = t;
                                else {
                                    var c = d.getScaleConstructor(l);
                                    if (!c) return;
                                    u = new c({
                                        id: s,
                                        type: l,
                                        options: a,
                                        ctx: t.ctx,
                                        chart: t
                                    }), i[u.id] = u
                                }
                                u.mergeTicksOptions(), n.isDefault && (t.scale = u)
                            }), o.each(r, function (t, e) {
                                t || delete i[e]
                            }), t.scales = i, d.addScalesToLayout(this)
                        },
                        buildOrUpdateControllers: function () {
                            var e = this,
                                n = [],
                                i = [];
                            return o.each(e.data.datasets, function (a, r) {
                                var o = e.getDatasetMeta(r),
                                    s = a.type || e.config.type;
                                if (o.type && o.type !== s && (e.destroyDatasetMeta(r), o = e.getDatasetMeta(r)), o.type = s, n.push(o.type), o.controller) o.controller.updateIndex(r), o.controller.linkScales();
                                else {
                                    var l = t.controllers[o.type];
                                    if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
                                    o.controller = new l(e, r), i.push(o.controller)
                                }
                            }, e), i
                        },
                        resetElements: function () {
                            var t = this;
                            o.each(t.data.datasets, function (e, n) {
                                t.getDatasetMeta(n).controller.reset()
                            }, t)
                        },
                        reset: function () {
                            this.resetElements(), this.tooltip.initialize()
                        },
                        update: function (e) {
                            var n, i, a = this;
                            if (e && "object" == typeof e || (e = {
                                    duration: e,
                                    lazy: arguments[1]
                                }), i = (n = a).options, o.each(n.scales, function (t) {
                                    l.removeBox(n, t)
                                }), i = o.configMerge(t.defaults.global, t.defaults[n.config.type], i), n.options = n.config.options = i, n.ensureScalesHaveIDs(), n.buildOrUpdateScales(), n.tooltip._options = i.tooltips, n.tooltip.initialize(), c._invalidate(a), !1 !== c.notify(a, "beforeUpdate")) {
                                a.tooltip._data = a.data;
                                var r = a.buildOrUpdateControllers();
                                o.each(a.data.datasets, function (t, e) {
                                    a.getDatasetMeta(e).controller.buildOrUpdateElements()
                                }, a), a.updateLayout(), a.options.animation && a.options.animation.duration && o.each(r, function (t) {
                                    t.reset()
                                }), a.updateDatasets(), a.tooltip.initialize(), a.lastActive = [], c.notify(a, "afterUpdate"), a._bufferedRender ? a._bufferedRequest = {
                                    duration: e.duration,
                                    easing: e.easing,
                                    lazy: e.lazy
                                } : a.render(e)
                            }
                        },
                        updateLayout: function () {
                            !1 !== c.notify(this, "beforeLayout") && (l.update(this, this.width, this.height), c.notify(this, "afterScaleUpdate"), c.notify(this, "afterLayout"))
                        },
                        updateDatasets: function () {
                            if (!1 !== c.notify(this, "beforeDatasetsUpdate")) {
                                for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                                c.notify(this, "afterDatasetsUpdate")
                            }
                        },
                        updateDataset: function (t) {
                            var e = this.getDatasetMeta(t),
                                n = {
                                    meta: e,
                                    index: t
                                };
                            !1 !== c.notify(this, "beforeDatasetUpdate", [n]) && (e.controller.update(), c.notify(this, "afterDatasetUpdate", [n]))
                        },
                        render: function (t) {
                            var e = this;
                            t && "object" == typeof t || (t = {
                                duration: t,
                                lazy: arguments[1]
                            });
                            var n = t.duration,
                                r = t.lazy;
                            if (!1 !== c.notify(e, "beforeRender")) {
                                var s = e.options.animation,
                                    l = function (t) {
                                        c.notify(e, "afterRender"), o.callback(s && s.onComplete, [t], e)
                                    };
                                if (s && (void 0 !== n && 0 !== n || void 0 === n && 0 !== s.duration)) {
                                    var u = new i({
                                        numSteps: (n || s.duration) / 16.66,
                                        easing: t.easing || s.easing,
                                        render: function (t, e) {
                                            var n = o.easing.effects[e.easing],
                                                i = e.currentStep,
                                                a = i / e.numSteps;
                                            t.draw(n(a), a, i)
                                        },
                                        onAnimationProgress: s.onProgress,
                                        onAnimationComplete: l
                                    });
                                    a.addAnimation(e, u, n, r)
                                } else e.draw(), l(new i({
                                    numSteps: 0,
                                    chart: e
                                }));
                                return e
                            }
                        },
                        draw: function (t) {
                            var e = this;
                            e.clear(), o.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== c.notify(e, "beforeDraw", [t]) && (o.each(e.boxes, function (t) {
                                t.draw(e.chartArea)
                            }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), c.notify(e, "afterDraw", [t]))
                        },
                        transition: function (t) {
                            for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                            this.tooltip.transition(t)
                        },
                        drawDatasets: function (t) {
                            var e = this;
                            if (!1 !== c.notify(e, "beforeDatasetsDraw", [t])) {
                                for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) e.isDatasetVisible(n) && e.drawDataset(n, t);
                                c.notify(e, "afterDatasetsDraw", [t])
                            }
                        },
                        drawDataset: function (t, e) {
                            var n = this.getDatasetMeta(t),
                                i = {
                                    meta: n,
                                    index: t,
                                    easingValue: e
                                };
                            !1 !== c.notify(this, "beforeDatasetDraw", [i]) && (n.controller.draw(e), c.notify(this, "afterDatasetDraw", [i]))
                        },
                        _drawTooltip: function (t) {
                            var e = this.tooltip,
                                n = {
                                    tooltip: e,
                                    easingValue: t
                                };
                            !1 !== c.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), c.notify(this, "afterTooltipDraw", [n]))
                        },
                        getElementAtEvent: function (t) {
                            return s.modes.single(this, t)
                        },
                        getElementsAtEvent: function (t) {
                            return s.modes.label(this, t, {
                                intersect: !0
                            })
                        },
                        getElementsAtXAxis: function (t) {
                            return s.modes["x-axis"](this, t, {
                                intersect: !0
                            })
                        },
                        getElementsAtEventForMode: function (t, e, n) {
                            var i = s.modes[e];
                            return "function" == typeof i ? i(this, t, n) : []
                        },
                        getDatasetAtEvent: function (t) {
                            return s.modes.dataset(this, t, {
                                intersect: !0
                            })
                        },
                        getDatasetMeta: function (t) {
                            var e = this.data.datasets[t];
                            e._meta || (e._meta = {});
                            var n = e._meta[this.id];
                            return n || (n = e._meta[this.id] = {
                                type: null,
                                data: [],
                                dataset: null,
                                controller: null,
                                hidden: null,
                                xAxisID: null,
                                yAxisID: null
                            }), n
                        },
                        getVisibleDatasetCount: function () {
                            for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
                            return t
                        },
                        isDatasetVisible: function (t) {
                            var e = this.getDatasetMeta(t);
                            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                        },
                        generateLegend: function () {
                            return this.options.legendCallback(this)
                        },
                        destroyDatasetMeta: function (t) {
                            var e = this.id,
                                n = this.data.datasets[t],
                                i = n._meta && n._meta[e];
                            i && (i.controller.destroy(), delete n._meta[e])
                        },
                        destroy: function () {
                            var e, n, i = this,
                                a = i.canvas;
                            for (i.stop(), e = 0, n = i.data.datasets.length; e < n; ++e) i.destroyDatasetMeta(e);
                            a && (i.unbindEvents(), o.canvas.clear(i), u.releaseContext(i.ctx), i.canvas = null, i.ctx = null), c.notify(i, "destroy"), delete t.instances[i.id]
                        },
                        toBase64Image: function () {
                            return this.canvas.toDataURL.apply(this.canvas, arguments)
                        },
                        initToolTip: function () {
                            var t = this;
                            t.tooltip = new h({
                                _chart: t,
                                _chartInstance: t,
                                _data: t.data,
                                _options: t.options.tooltips
                            }, t)
                        },
                        bindEvents: function () {
                            var t = this,
                                e = t._listeners = {},
                                n = function () {
                                    t.eventHandler.apply(t, arguments)
                                };
                            o.each(t.options.events, function (i) {
                                u.addEventListener(t, i, n), e[i] = n
                            }), t.options.responsive && (n = function () {
                                t.resize()
                            }, u.addEventListener(t, "resize", n), e.resize = n)
                        },
                        unbindEvents: function () {
                            var t = this,
                                e = t._listeners;
                            e && (delete t._listeners, o.each(e, function (e, n) {
                                u.removeEventListener(t, n, e)
                            }))
                        },
                        updateHoverStyle: function (t, e, n) {
                            var i, a, r, o = n ? "setHoverStyle" : "removeHoverStyle";
                            for (a = 0, r = t.length; a < r; ++a)(i = t[a]) && this.getDatasetMeta(i._datasetIndex).controller[o](i)
                        },
                        eventHandler: function (t) {
                            var e = this,
                                n = e.tooltip;
                            if (!1 !== c.notify(e, "beforeEvent", [t])) {
                                e._bufferedRender = !0, e._bufferedRequest = null;
                                var i = e.handleEvent(t);
                                n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), c.notify(e, "afterEvent", [t]);
                                var a = e._bufferedRequest;
                                return a ? e.render(a) : i && !e.animating && (e.stop(), e.render({
                                    duration: e.options.hover.animationDuration,
                                    lazy: !0
                                })), e._bufferedRender = !1, e._bufferedRequest = null, e
                            }
                        },
                        handleEvent: function (t) {
                            var e, n = this,
                                i = n.options || {},
                                a = i.hover;
                            return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, a.mode, a), o.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, a.mode, !1), n.active.length && a.mode && n.updateHoverStyle(n.active, a.mode, !0), e = !o.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e
                        }
                    }), t.Controller = t
                }
            }, {
                22: 22,
                23: 23,
                26: 26,
                29: 29,
                31: 31,
                32: 32,
                34: 34,
                36: 36,
                46: 46,
                49: 49
            }],
            25: [function (t, e, n) {
                "use strict";
                var i = t(46);
                e.exports = function (t) {
                    var e = ["push", "pop", "shift", "splice", "unshift"];

                    function n(t, n) {
                        var i = t._chartjs;
                        if (i) {
                            var a = i.listeners,
                                r = a.indexOf(n); - 1 !== r && a.splice(r, 1), a.length > 0 || (e.forEach(function (e) {
                                delete t[e]
                            }), delete t._chartjs)
                        }
                    }
                    t.DatasetController = function (t, e) {
                        this.initialize(t, e)
                    }, i.extend(t.DatasetController.prototype, {
                        datasetElementType: null,
                        dataElementType: null,
                        initialize: function (t, e) {
                            this.chart = t, this.index = e, this.linkScales(), this.addElements()
                        },
                        updateIndex: function (t) {
                            this.index = t
                        },
                        linkScales: function () {
                            var t = this,
                                e = t.getMeta(),
                                n = t.getDataset();
                            null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
                        },
                        getDataset: function () {
                            return this.chart.data.datasets[this.index]
                        },
                        getMeta: function () {
                            return this.chart.getDatasetMeta(this.index)
                        },
                        getScaleForId: function (t) {
                            return this.chart.scales[t]
                        },
                        reset: function () {
                            this.update(!0)
                        },
                        destroy: function () {
                            this._data && n(this._data, this)
                        },
                        createMetaDataset: function () {
                            var t = this.datasetElementType;
                            return t && new t({
                                _chart: this.chart,
                                _datasetIndex: this.index
                            })
                        },
                        createMetaData: function (t) {
                            var e = this.dataElementType;
                            return e && new e({
                                _chart: this.chart,
                                _datasetIndex: this.index,
                                _index: t
                            })
                        },
                        addElements: function () {
                            var t, e, n = this.getMeta(),
                                i = this.getDataset().data || [],
                                a = n.data;
                            for (t = 0, e = i.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
                            n.dataset = n.dataset || this.createMetaDataset()
                        },
                        addElementAndReset: function (t) {
                            var e = this.createMetaData(t);
                            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                        },
                        buildOrUpdateElements: function () {
                            var t, a, r = this,
                                o = r.getDataset(),
                                s = o.data || (o.data = []);
                            r._data !== s && (r._data && n(r._data, r), a = r, (t = s)._chartjs ? t._chartjs.listeners.push(a) : (Object.defineProperty(t, "_chartjs", {
                                configurable: !0,
                                enumerable: !1,
                                value: {
                                    listeners: [a]
                                }
                            }), e.forEach(function (e) {
                                var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                                    a = t[e];
                                Object.defineProperty(t, e, {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: function () {
                                        var e = Array.prototype.slice.call(arguments),
                                            r = a.apply(this, e);
                                        return i.each(t._chartjs.listeners, function (t) {
                                            "function" == typeof t[n] && t[n].apply(t, e)
                                        }), r
                                    }
                                })
                            })), r._data = s), r.resyncElements()
                        },
                        update: i.noop,
                        transition: function (t) {
                            for (var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; a < i; ++a) n[a].transition(t);
                            e.dataset && e.dataset.transition(t)
                        },
                        draw: function () {
                            var t = this.getMeta(),
                                e = t.data || [],
                                n = e.length,
                                i = 0;
                            for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw()
                        },
                        removeHoverStyle: function (t) {
                            i.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
                        },
                        setHoverStyle: function (t) {
                            var e = this.chart.data.datasets[t._datasetIndex],
                                n = t._index,
                                a = t.custom || {},
                                r = i.valueAtIndexOrDefault,
                                o = i.getHoverColor,
                                s = t._model;
                            t.$previousStyle = {
                                backgroundColor: s.backgroundColor,
                                borderColor: s.borderColor,
                                borderWidth: s.borderWidth
                            }, s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : r(e.hoverBackgroundColor, n, o(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : r(e.hoverBorderColor, n, o(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : r(e.hoverBorderWidth, n, s.borderWidth)
                        },
                        resyncElements: function () {
                            var t = this.getMeta(),
                                e = this.getDataset().data,
                                n = t.data.length,
                                i = e.length;
                            i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n)
                        },
                        insertElements: function (t, e) {
                            for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
                        },
                        onDataPush: function () {
                            this.insertElements(this.getDataset().data.length - 1, arguments.length)
                        },
                        onDataPop: function () {
                            this.getMeta().data.pop()
                        },
                        onDataShift: function () {
                            this.getMeta().data.shift()
                        },
                        onDataSplice: function (t, e) {
                            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                        },
                        onDataUnshift: function () {
                            this.insertElements(0, arguments.length)
                        }
                    }), t.DatasetController.extend = i.inherits
                }
            }, {
                46: 46
            }],
            26: [function (t, e, n) {
                "use strict";
                var i = t(46);
                e.exports = {
                    _set: function (t, e) {
                        return i.merge(this[t] || (this[t] = {}), e)
                    }
                }
            }, {
                46: 46
            }],
            27: [function (t, e, n) {
                "use strict";
                var i = t(3),
                    a = t(46);
                var r = function (t) {
                    a.extend(this, t), this.initialize.apply(this, arguments)
                };
                a.extend(r.prototype, {
                    initialize: function () {
                        this.hidden = !1
                    },
                    pivot: function () {
                        var t = this;
                        return t._view || (t._view = a.clone(t._model)), t._start = {}, t
                    },
                    transition: function (t) {
                        var e = this,
                            n = e._model,
                            a = e._start,
                            r = e._view;
                        return n && 1 !== t ? (r || (r = e._view = {}), a || (a = e._start = {}), function (t, e, n, a) {
                            var r, o, s, l, u, c, d, h, f, p = Object.keys(n);
                            for (r = 0, o = p.length; r < o; ++r)
                                if (c = n[s = p[r]], e.hasOwnProperty(s) || (e[s] = c), (l = e[s]) !== c && "_" !== s[0]) {
                                    if (t.hasOwnProperty(s) || (t[s] = l), (d = typeof c) == typeof (u = t[s]))
                                        if ("string" === d) {
                                            if ((h = i(u)).valid && (f = i(c)).valid) {
                                                e[s] = f.mix(h, a).rgbString();
                                                continue
                                            }
                                        } else if ("number" === d && isFinite(u) && isFinite(c)) {
                                        e[s] = u + (c - u) * a;
                                        continue
                                    }
                                    e[s] = c
                                }
                        }(a, r, n, t), e) : (e._view = n, e._start = null, e)
                    },
                    tooltipPosition: function () {
                        return {
                            x: this._model.x,
                            y: this._model.y
                        }
                    },
                    hasValue: function () {
                        return a.isNumber(this._model.x) && a.isNumber(this._model.y)
                    }
                }), r.extend = a.inherits, e.exports = r
            }, {
                3: 3,
                46: 46
            }],
            28: [function (t, e, n) {
                "use strict";
                var i = t(3),
                    a = t(26),
                    r = t(46),
                    o = t(34);
                e.exports = function () {
                    function t(t, e, n) {
                        var i;
                        return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
                    }

                    function e(t) {
                        return null != t && "none" !== t
                    }

                    function n(n, i, a) {
                        var o = document.defaultView,
                            s = r._getParentNode(n),
                            l = o.getComputedStyle(n)[i],
                            u = o.getComputedStyle(s)[i],
                            c = e(l),
                            d = e(u),
                            h = Number.POSITIVE_INFINITY;
                        return c || d ? Math.min(c ? t(l, n, a) : h, d ? t(u, s, a) : h) : "none"
                    }
                    r.configMerge = function () {
                        return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                            merger: function (t, e, n, i) {
                                var a = e[t] || {},
                                    s = n[t];
                                "scales" === t ? e[t] = r.scaleMerge(a, s) : "scale" === t ? e[t] = r.merge(a, [o.getScaleDefaults(s.type), s]) : r._merger(t, e, n, i)
                            }
                        })
                    }, r.scaleMerge = function () {
                        return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                            merger: function (t, e, n, i) {
                                if ("xAxes" === t || "yAxes" === t) {
                                    var a, s, l, u = n[t].length;
                                    for (e[t] || (e[t] = []), a = 0; a < u; ++a) l = n[t][a], s = r.valueOrDefault(l.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || l.type && l.type !== e[t][a].type ? r.merge(e[t][a], [o.getScaleDefaults(s), l]) : r.merge(e[t][a], l)
                                } else r._merger(t, e, n, i)
                            }
                        })
                    }, r.where = function (t, e) {
                        if (r.isArray(t) && Array.prototype.filter) return t.filter(e);
                        var n = [];
                        return r.each(t, function (t) {
                            e(t) && n.push(t)
                        }), n
                    }, r.findIndex = Array.prototype.findIndex ? function (t, e, n) {
                        return t.findIndex(e, n)
                    } : function (t, e, n) {
                        n = void 0 === n ? t : n;
                        for (var i = 0, a = t.length; i < a; ++i)
                            if (e.call(n, t[i], i, t)) return i;
                        return -1
                    }, r.findNextWhere = function (t, e, n) {
                        r.isNullOrUndef(n) && (n = -1);
                        for (var i = n + 1; i < t.length; i++) {
                            var a = t[i];
                            if (e(a)) return a
                        }
                    }, r.findPreviousWhere = function (t, e, n) {
                        r.isNullOrUndef(n) && (n = t.length);
                        for (var i = n - 1; i >= 0; i--) {
                            var a = t[i];
                            if (e(a)) return a
                        }
                    }, r.isNumber = function (t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    }, r.almostEquals = function (t, e, n) {
                        return Math.abs(t - e) < n
                    }, r.almostWhole = function (t, e) {
                        var n = Math.round(t);
                        return n - e < t && n + e > t
                    }, r.max = function (t) {
                        return t.reduce(function (t, e) {
                            return isNaN(e) ? t : Math.max(t, e)
                        }, Number.NEGATIVE_INFINITY)
                    }, r.min = function (t) {
                        return t.reduce(function (t, e) {
                            return isNaN(e) ? t : Math.min(t, e)
                        }, Number.POSITIVE_INFINITY)
                    }, r.sign = Math.sign ? function (t) {
                        return Math.sign(t)
                    } : function (t) {
                        return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                    }, r.log10 = Math.log10 ? function (t) {
                        return Math.log10(t)
                    } : function (t) {
                        var e = Math.log(t) * Math.LOG10E,
                            n = Math.round(e);
                        return t === Math.pow(10, n) ? n : e
                    }, r.toRadians = function (t) {
                        return t * (Math.PI / 180)
                    }, r.toDegrees = function (t) {
                        return t * (180 / Math.PI)
                    }, r.getAngleFromPoint = function (t, e) {
                        var n = e.x - t.x,
                            i = e.y - t.y,
                            a = Math.sqrt(n * n + i * i),
                            r = Math.atan2(i, n);
                        return r < -.5 * Math.PI && (r += 2 * Math.PI), {
                            angle: r,
                            distance: a
                        }
                    }, r.distanceBetweenPoints = function (t, e) {
                        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                    }, r.aliasPixel = function (t) {
                        return t % 2 == 0 ? 0 : .5
                    }, r.splineCurve = function (t, e, n, i) {
                        var a = t.skip ? e : t,
                            r = e,
                            o = n.skip ? e : n,
                            s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
                            l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                            u = s / (s + l),
                            c = l / (s + l),
                            d = i * (u = isNaN(u) ? 0 : u),
                            h = i * (c = isNaN(c) ? 0 : c);
                        return {
                            previous: {
                                x: r.x - d * (o.x - a.x),
                                y: r.y - d * (o.y - a.y)
                            },
                            next: {
                                x: r.x + h * (o.x - a.x),
                                y: r.y + h * (o.y - a.y)
                            }
                        }
                    }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function (t) {
                        var e, n, i, a, o, s, l, u, c, d = (t || []).map(function (t) {
                                return {
                                    model: t._model,
                                    deltaK: 0,
                                    mK: 0
                                }
                            }),
                            h = d.length;
                        for (e = 0; e < h; ++e)
                            if (!(i = d[e]).model.skip) {
                                if (n = e > 0 ? d[e - 1] : null, (a = e < h - 1 ? d[e + 1] : null) && !a.model.skip) {
                                    var f = a.model.x - i.model.x;
                                    i.deltaK = 0 !== f ? (a.model.y - i.model.y) / f : 0
                                }!n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                            } for (e = 0; e < h - 1; ++e) i = d[e], a = d[e + 1], i.model.skip || a.model.skip || (r.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (o = i.mK / i.deltaK, s = a.mK / i.deltaK, (u = Math.pow(o, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), i.mK = o * l * i.deltaK, a.mK = s * l * i.deltaK)));
                        for (e = 0; e < h; ++e)(i = d[e]).model.skip || (n = e > 0 ? d[e - 1] : null, a = e < h - 1 ? d[e + 1] : null, n && !n.model.skip && (c = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - c, i.model.controlPointPreviousY = i.model.y - c * i.mK), a && !a.model.skip && (c = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + c, i.model.controlPointNextY = i.model.y + c * i.mK))
                    }, r.nextItem = function (t, e, n) {
                        return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                    }, r.previousItem = function (t, e, n) {
                        return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                    }, r.niceNum = function (t, e) {
                        var n = Math.floor(r.log10(t)),
                            i = t / Math.pow(10, n);
                        return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
                    }, r.requestAnimFrame = "undefined" == typeof window ? function (t) {
                        t()
                    } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                        return window.setTimeout(t, 1e3 / 60)
                    }, r.getRelativePosition = function (t, e) {
                        var n, i, a = t.originalEvent || t,
                            o = t.target || t.srcElement,
                            s = o.getBoundingClientRect(),
                            l = a.touches;
                        l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = a.clientX, i = a.clientY);
                        var u = parseFloat(r.getStyle(o, "padding-left")),
                            c = parseFloat(r.getStyle(o, "padding-top")),
                            d = parseFloat(r.getStyle(o, "padding-right")),
                            h = parseFloat(r.getStyle(o, "padding-bottom")),
                            f = s.right - s.left - u - d,
                            p = s.bottom - s.top - c - h;
                        return {
                            x: n = Math.round((n - s.left - u) / f * o.width / e.currentDevicePixelRatio),
                            y: i = Math.round((i - s.top - c) / p * o.height / e.currentDevicePixelRatio)
                        }
                    }, r.getConstraintWidth = function (t) {
                        return n(t, "max-width", "clientWidth")
                    }, r.getConstraintHeight = function (t) {
                        return n(t, "max-height", "clientHeight")
                    }, r._calculatePadding = function (t, e, n) {
                        return (e = r.getStyle(t, e)).indexOf("%") > -1 ? n / parseInt(e, 10) : parseInt(e, 10)
                    }, r._getParentNode = function (t) {
                        var e = t.parentNode;
                        return e && e.host && (e = e.host), e
                    }, r.getMaximumWidth = function (t) {
                        var e = r._getParentNode(t);
                        if (!e) return t.clientWidth;
                        var n = e.clientWidth,
                            i = n - r._calculatePadding(e, "padding-left", n) - r._calculatePadding(e, "padding-right", n),
                            a = r.getConstraintWidth(t);
                        return isNaN(a) ? i : Math.min(i, a)
                    }, r.getMaximumHeight = function (t) {
                        var e = r._getParentNode(t);
                        if (!e) return t.clientHeight;
                        var n = e.clientHeight,
                            i = n - r._calculatePadding(e, "padding-top", n) - r._calculatePadding(e, "padding-bottom", n),
                            a = r.getConstraintHeight(t);
                        return isNaN(a) ? i : Math.min(i, a)
                    }, r.getStyle = function (t, e) {
                        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                    }, r.retinaScale = function (t, e) {
                        var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                        if (1 !== n) {
                            var i = t.canvas,
                                a = t.height,
                                r = t.width;
                            i.height = a * n, i.width = r * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = a + "px", i.style.width = r + "px")
                        }
                    }, r.fontString = function (t, e, n) {
                        return e + " " + t + "px " + n
                    }, r.longestText = function (t, e, n, i) {
                        var a = (i = i || {}).data = i.data || {},
                            o = i.garbageCollect = i.garbageCollect || [];
                        i.font !== e && (a = i.data = {}, o = i.garbageCollect = [], i.font = e), t.font = e;
                        var s = 0;
                        r.each(n, function (e) {
                            null != e && !0 !== r.isArray(e) ? s = r.measureText(t, a, o, s, e) : r.isArray(e) && r.each(e, function (e) {
                                null == e || r.isArray(e) || (s = r.measureText(t, a, o, s, e))
                            })
                        });
                        var l = o.length / 2;
                        if (l > n.length) {
                            for (var u = 0; u < l; u++) delete a[o[u]];
                            o.splice(0, l)
                        }
                        return s
                    }, r.measureText = function (t, e, n, i, a) {
                        var r = e[a];
                        return r || (r = e[a] = t.measureText(a).width, n.push(a)), r > i && (i = r), i
                    }, r.numberOfLabelLines = function (t) {
                        var e = 1;
                        return r.each(t, function (t) {
                            r.isArray(t) && t.length > e && (e = t.length)
                        }), e
                    }, r.color = i ? function (t) {
                        return t instanceof CanvasGradient && (t = a.global.defaultColor), i(t)
                    } : function (t) {
                        return console.error("Color.js not found!"), t
                    }, r.getHoverColor = function (t) {
                        return t instanceof CanvasPattern ? t : r.color(t).saturate(.5).darken(.1).rgbString()
                    }
                }
            }, {
                26: 26,
                3: 3,
                34: 34,
                46: 46
            }],
            29: [function (t, e, n) {
                "use strict";
                var i = t(46);

                function a(t, e) {
                    return t.native ? {
                        x: t.x,
                        y: t.y
                    } : i.getRelativePosition(t, e)
                }

                function r(t, e) {
                    var n, i, a, r, o;
                    for (i = 0, r = t.data.datasets.length; i < r; ++i)
                        if (t.isDatasetVisible(i))
                            for (a = 0, o = (n = t.getDatasetMeta(i)).data.length; a < o; ++a) {
                                var s = n.data[a];
                                s._view.skip || e(s)
                            }
                }

                function o(t, e) {
                    var n = [];
                    return r(t, function (t) {
                        t.inRange(e.x, e.y) && n.push(t)
                    }), n
                }

                function s(t, e, n, i) {
                    var a = Number.POSITIVE_INFINITY,
                        o = [];
                    return r(t, function (t) {
                        if (!n || t.inRange(e.x, e.y)) {
                            var r = t.getCenterPoint(),
                                s = i(e, r);
                            s < a ? (o = [t], a = s) : s === a && o.push(t)
                        }
                    }), o
                }

                function l(t) {
                    var e = -1 !== t.indexOf("x"),
                        n = -1 !== t.indexOf("y");
                    return function (t, i) {
                        var a = e ? Math.abs(t.x - i.x) : 0,
                            r = n ? Math.abs(t.y - i.y) : 0;
                        return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2))
                    }
                }

                function u(t, e, n) {
                    var i = a(e, t);
                    n.axis = n.axis || "x";
                    var r = l(n.axis),
                        u = n.intersect ? o(t, i) : s(t, i, !1, r),
                        c = [];
                    return u.length ? (t.data.datasets.forEach(function (e, n) {
                        if (t.isDatasetVisible(n)) {
                            var i = t.getDatasetMeta(n).data[u[0]._index];
                            i && !i._view.skip && c.push(i)
                        }
                    }), c) : []
                }
                e.exports = {
                    modes: {
                        single: function (t, e) {
                            var n = a(e, t),
                                i = [];
                            return r(t, function (t) {
                                if (t.inRange(n.x, n.y)) return i.push(t), i
                            }), i.slice(0, 1)
                        },
                        label: u,
                        index: u,
                        dataset: function (t, e, n) {
                            var i = a(e, t);
                            n.axis = n.axis || "xy";
                            var r = l(n.axis),
                                u = n.intersect ? o(t, i) : s(t, i, !1, r);
                            return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u
                        },
                        "x-axis": function (t, e) {
                            return u(t, e, {
                                intersect: !1
                            })
                        },
                        point: function (t, e) {
                            return o(t, a(e, t))
                        },
                        nearest: function (t, e, n) {
                            var i = a(e, t);
                            n.axis = n.axis || "xy";
                            var r = l(n.axis),
                                o = s(t, i, n.intersect, r);
                            return o.length > 1 && o.sort(function (t, e) {
                                var n = t.getArea() - e.getArea();
                                return 0 === n && (n = t._datasetIndex - e._datasetIndex), n
                            }), o.slice(0, 1)
                        },
                        x: function (t, e, n) {
                            var i = a(e, t),
                                o = [],
                                s = !1;
                            return r(t, function (t) {
                                t.inXRange(i.x) && o.push(t), t.inRange(i.x, i.y) && (s = !0)
                            }), n.intersect && !s && (o = []), o
                        },
                        y: function (t, e, n) {
                            var i = a(e, t),
                                o = [],
                                s = !1;
                            return r(t, function (t) {
                                t.inYRange(i.y) && o.push(t), t.inRange(i.x, i.y) && (s = !0)
                            }), n.intersect && !s && (o = []), o
                        }
                    }
                }
            }, {
                46: 46
            }],
            30: [function (t, e, n) {
                "use strict";
                t(26)._set("global", {
                    responsive: !0,
                    responsiveAnimationDuration: 0,
                    maintainAspectRatio: !0,
                    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                    hover: {
                        onHover: null,
                        mode: "nearest",
                        intersect: !0,
                        animationDuration: 400
                    },
                    onClick: null,
                    defaultColor: "rgba(0,0,0,0.1)",
                    defaultFontColor: "#666",
                    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    defaultFontSize: 12,
                    defaultFontStyle: "normal",
                    showLines: !0,
                    elements: {},
                    layout: {
                        padding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                }), e.exports = function () {
                    var t = function (t, e) {
                        return this.construct(t, e), this
                    };
                    return t.Chart = t, t
                }
            }, {
                26: 26
            }],
            31: [function (t, e, n) {
                "use strict";
                var i = t(46);

                function a(t, e) {
                    return i.where(t, function (t) {
                        return t.position === e
                    })
                }

                function r(t, e) {
                    t.forEach(function (t, e) {
                        return t._tmpIndex_ = e, t
                    }), t.sort(function (t, n) {
                        var i = e ? n : t,
                            a = e ? t : n;
                        return i.weight === a.weight ? i._tmpIndex_ - a._tmpIndex_ : i.weight - a.weight
                    }), t.forEach(function (t) {
                        delete t._tmpIndex_
                    })
                }
                e.exports = {
                    defaults: {},
                    addBox: function (t, e) {
                        t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                    },
                    removeBox: function (t, e) {
                        var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
                    },
                    configure: function (t, e, n) {
                        for (var i, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) i = a[o], n.hasOwnProperty(i) && (e[i] = n[i])
                    },
                    update: function (t, e, n) {
                        if (t) {
                            var o = t.options.layout || {},
                                s = i.options.toPadding(o.padding),
                                l = s.left,
                                u = s.right,
                                c = s.top,
                                d = s.bottom,
                                h = a(t.boxes, "left"),
                                f = a(t.boxes, "right"),
                                p = a(t.boxes, "top"),
                                g = a(t.boxes, "bottom"),
                                m = a(t.boxes, "chartArea");
                            r(h, !0), r(f, !1), r(p, !0), r(g, !1);
                            var v = e - l - u,
                                b = n - c - d,
                                y = b / 2,
                                x = (e - v / 2) / (h.length + f.length),
                                w = (n - y) / (p.length + g.length),
                                k = v,
                                C = b,
                                S = [];
                            i.each(h.concat(f, p, g), function (t) {
                                var e, n = t.isHorizontal();
                                n ? (e = t.update(t.fullWidth ? v : k, w), C -= e.height) : (e = t.update(x, C), k -= e.width), S.push({
                                    horizontal: n,
                                    minSize: e,
                                    box: t
                                })
                            });
                            var M = 0,
                                P = 0,
                                T = 0,
                                A = 0;
                            i.each(p.concat(g), function (t) {
                                if (t.getPadding) {
                                    var e = t.getPadding();
                                    M = Math.max(M, e.left), P = Math.max(P, e.right)
                                }
                            }), i.each(h.concat(f), function (t) {
                                if (t.getPadding) {
                                    var e = t.getPadding();
                                    T = Math.max(T, e.top), A = Math.max(A, e.bottom)
                                }
                            });
                            var I = l,
                                _ = u,
                                D = c,
                                F = d;
                            i.each(h.concat(f), E), i.each(h, function (t) {
                                I += t.width
                            }), i.each(f, function (t) {
                                _ += t.width
                            }), i.each(p.concat(g), E), i.each(p, function (t) {
                                D += t.height
                            }), i.each(g, function (t) {
                                F += t.height
                            }), i.each(h.concat(f), function (t) {
                                var e = i.findNextWhere(S, function (e) {
                                        return e.box === t
                                    }),
                                    n = {
                                        left: 0,
                                        right: 0,
                                        top: D,
                                        bottom: F
                                    };
                                e && t.update(e.minSize.width, C, n)
                            }), I = l, _ = u, D = c, F = d, i.each(h, function (t) {
                                I += t.width
                            }), i.each(f, function (t) {
                                _ += t.width
                            }), i.each(p, function (t) {
                                D += t.height
                            }), i.each(g, function (t) {
                                F += t.height
                            });
                            var O = Math.max(M - I, 0);
                            I += O, _ += Math.max(P - _, 0);
                            var L = Math.max(T - D, 0);
                            D += L, F += Math.max(A - F, 0);
                            var R = n - D - F,
                                V = e - I - _;
                            V === k && R === C || (i.each(h, function (t) {
                                t.height = R
                            }), i.each(f, function (t) {
                                t.height = R
                            }), i.each(p, function (t) {
                                t.fullWidth || (t.width = V)
                            }), i.each(g, function (t) {
                                t.fullWidth || (t.width = V)
                            }), C = R, k = V);
                            var z = l + O,
                                N = c + L;
                            i.each(h.concat(p), W), z += k, N += C, i.each(f, W), i.each(g, W), t.chartArea = {
                                left: I,
                                top: D,
                                right: I + k,
                                bottom: D + C
                            }, i.each(m, function (e) {
                                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, C)
                            })
                        }

                        function E(t) {
                            var e = i.findNextWhere(S, function (e) {
                                return e.box === t
                            });
                            if (e)
                                if (t.isHorizontal()) {
                                    var n = {
                                        left: Math.max(I, M),
                                        right: Math.max(_, P),
                                        top: 0,
                                        bottom: 0
                                    };
                                    t.update(t.fullWidth ? v : k, b / 2, n)
                                } else t.update(e.minSize.width, C)
                        }

                        function W(t) {
                            t.isHorizontal() ? (t.left = t.fullWidth ? l : I, t.right = t.fullWidth ? e - u : I + k, t.top = N, t.bottom = N + t.height, N = t.bottom) : (t.left = z, t.right = z + t.width, t.top = D, t.bottom = D + C, z = t.right)
                        }
                    }
                }
            }, {
                46: 46
            }],
            32: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(46);
                i._set("global", {
                    plugins: {}
                }), e.exports = {
                    _plugins: [],
                    _cacheId: 0,
                    register: function (t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function (t) {
                            -1 === e.indexOf(t) && e.push(t)
                        }), this._cacheId++
                    },
                    unregister: function (t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function (t) {
                            var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                        }), this._cacheId++
                    },
                    clear: function () {
                        this._plugins = [], this._cacheId++
                    },
                    count: function () {
                        return this._plugins.length
                    },
                    getAll: function () {
                        return this._plugins
                    },
                    notify: function (t, e, n) {
                        var i, a, r, o, s, l = this.descriptors(t),
                            u = l.length;
                        for (i = 0; i < u; ++i)
                            if ("function" == typeof (s = (r = (a = l[i]).plugin)[e]) && ((o = [t].concat(n || [])).push(a.options), !1 === s.apply(r, o))) return !1;
                        return !0
                    },
                    descriptors: function (t) {
                        var e = t.$plugins || (t.$plugins = {});
                        if (e.id === this._cacheId) return e.descriptors;
                        var n = [],
                            r = [],
                            o = t && t.config || {},
                            s = o.options && o.options.plugins || {};
                        return this._plugins.concat(o.plugins || []).forEach(function (t) {
                            if (-1 === n.indexOf(t)) {
                                var e = t.id,
                                    o = s[e];
                                !1 !== o && (!0 === o && (o = a.clone(i.global.plugins[e])), n.push(t), r.push({
                                    plugin: t,
                                    options: o || {}
                                }))
                            }
                        }), e.descriptors = r, e.id = this._cacheId, r
                    },
                    _invalidate: function (t) {
                        delete t.$plugins
                    }
                }
            }, {
                26: 26,
                46: 46
            }],
            33: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(27),
                    r = t(46),
                    o = t(35);

                function s(t) {
                    var e, n, i = [];
                    for (e = 0, n = t.length; e < n; ++e) i.push(t[e].label);
                    return i
                }

                function l(t, e, n) {
                    var i = t.getPixelForTick(e);
                    return n && (i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i
                }

                function u(t, e, n) {
                    return r.isArray(e) ? r.longestText(t, n, e) : t.measureText(e).width
                }

                function c(t) {
                    var e = r.valueOrDefault,
                        n = i.global,
                        a = e(t.fontSize, n.defaultFontSize),
                        o = e(t.fontStyle, n.defaultFontStyle),
                        s = e(t.fontFamily, n.defaultFontFamily);
                    return {
                        size: a,
                        style: o,
                        family: s,
                        font: r.fontString(a, o, s)
                    }
                }

                function d(t) {
                    return r.options.toLineHeight(r.valueOrDefault(t.lineHeight, 1.2), r.valueOrDefault(t.fontSize, i.global.defaultFontSize))
                }
                i._set("scale", {
                    display: !0,
                    position: "left",
                    offset: !1,
                    gridLines: {
                        display: !0,
                        color: "rgba(0, 0, 0, 0.1)",
                        lineWidth: 1,
                        drawBorder: !0,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickMarkLength: 10,
                        zeroLineWidth: 1,
                        zeroLineColor: "rgba(0,0,0,0.25)",
                        zeroLineBorderDash: [],
                        zeroLineBorderDashOffset: 0,
                        offsetGridLines: !1,
                        borderDash: [],
                        borderDashOffset: 0
                    },
                    scaleLabel: {
                        display: !1,
                        labelString: "",
                        lineHeight: 1.2,
                        padding: {
                            top: 4,
                            bottom: 4
                        }
                    },
                    ticks: {
                        beginAtZero: !1,
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        padding: 0,
                        reverse: !1,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 0,
                        labelOffset: 0,
                        callback: o.formatters.values,
                        minor: {},
                        major: {}
                    }
                }), e.exports = a.extend({
                    getPadding: function () {
                        return {
                            left: this.paddingLeft || 0,
                            top: this.paddingTop || 0,
                            right: this.paddingRight || 0,
                            bottom: this.paddingBottom || 0
                        }
                    },
                    getTicks: function () {
                        return this._ticks
                    },
                    mergeTicksOptions: function () {
                        var t = this.options.ticks;
                        for (var e in !1 === t.minor && (t.minor = {
                                display: !1
                            }), !1 === t.major && (t.major = {
                                display: !1
                            }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
                    },
                    beforeUpdate: function () {
                        r.callback(this.options.beforeUpdate, [this])
                    },
                    update: function (t, e, n) {
                        var i, a, o, s, l, u, c = this;
                        for (c.beforeUpdate(), c.maxWidth = t, c.maxHeight = e, c.margins = r.extend({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, n), c.longestTextCache = c.longestTextCache || {}, c.beforeSetDimensions(), c.setDimensions(), c.afterSetDimensions(), c.beforeDataLimits(), c.determineDataLimits(), c.afterDataLimits(), c.beforeBuildTicks(), l = c.buildTicks() || [], c.afterBuildTicks(), c.beforeTickToLabelConversion(), o = c.convertTicksToLabels(l) || c.ticks, c.afterTickToLabelConversion(), c.ticks = o, i = 0, a = o.length; i < a; ++i) s = o[i], (u = l[i]) ? u.label = s : l.push(u = {
                            label: s,
                            major: !1
                        });
                        return c._ticks = l, c.beforeCalculateTickRotation(), c.calculateTickRotation(), c.afterCalculateTickRotation(), c.beforeFit(), c.fit(), c.afterFit(), c.afterUpdate(), c.minSize
                    },
                    afterUpdate: function () {
                        r.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function () {
                        r.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function () {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    },
                    afterSetDimensions: function () {
                        r.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function () {
                        r.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: r.noop,
                    afterDataLimits: function () {
                        r.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function () {
                        r.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: r.noop,
                    afterBuildTicks: function () {
                        r.callback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function () {
                        r.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function () {
                        var t = this.options.ticks;
                        this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                    },
                    afterTickToLabelConversion: function () {
                        r.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function () {
                        r.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function () {
                        var t = this,
                            e = t.ctx,
                            n = t.options.ticks,
                            i = s(t._ticks),
                            a = c(n);
                        e.font = a.font;
                        var o = n.minRotation || 0;
                        if (i.length && t.options.display && t.isHorizontal())
                            for (var l, u = r.longestText(e, a.font, i, t.longestTextCache), d = u, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d > h && o < n.maxRotation;) {
                                var f = r.toRadians(o);
                                if (l = Math.cos(f), Math.sin(f) * u > t.maxHeight) {
                                    o--;
                                    break
                                }
                                o++, d = l * u
                            }
                        t.labelRotation = o
                    },
                    afterCalculateTickRotation: function () {
                        r.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function () {
                        r.callback(this.options.beforeFit, [this])
                    },
                    fit: function () {
                        var t = this,
                            e = t.minSize = {
                                width: 0,
                                height: 0
                            },
                            n = s(t._ticks),
                            i = t.options,
                            a = i.ticks,
                            o = i.scaleLabel,
                            l = i.gridLines,
                            h = i.display,
                            f = t.isHorizontal(),
                            p = c(a),
                            g = i.gridLines.tickMarkLength;
                        if (e.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && l.drawTicks ? g : 0, e.height = f ? h && l.drawTicks ? g : 0 : t.maxHeight, o.display && h) {
                            var m = d(o) + r.options.toPadding(o.padding).height;
                            f ? e.height += m : e.width += m
                        }
                        if (a.display && h) {
                            var v = r.longestText(t.ctx, p.font, n, t.longestTextCache),
                                b = r.numberOfLabelLines(n),
                                y = .5 * p.size,
                                x = t.options.ticks.padding;
                            if (f) {
                                t.longestLabelWidth = v;
                                var w = r.toRadians(t.labelRotation),
                                    k = Math.cos(w),
                                    C = Math.sin(w) * v + p.size * b + y * (b - 1) + y;
                                e.height = Math.min(t.maxHeight, e.height + C + x), t.ctx.font = p.font;
                                var S = u(t.ctx, n[0], p.font),
                                    M = u(t.ctx, n[n.length - 1], p.font);
                                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === i.position ? k * S + 3 : k * y + 3, t.paddingRight = "bottom" === i.position ? k * y + 3 : k * M + 3) : (t.paddingLeft = S / 2 + 3, t.paddingRight = M / 2 + 3)
                            } else a.mirror ? v = 0 : v += x + y, e.width = Math.min(t.maxWidth, e.width + v), t.paddingTop = p.size / 2, t.paddingBottom = p.size / 2
                        }
                        t.handleMargins(), t.width = e.width, t.height = e.height
                    },
                    handleMargins: function () {
                        var t = this;
                        t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                    },
                    afterFit: function () {
                        r.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function () {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function () {
                        return this.options.fullWidth
                    },
                    getRightValue: function (t) {
                        if (r.isNullOrUndef(t)) return NaN;
                        if ("number" == typeof t && !isFinite(t)) return NaN;
                        if (t)
                            if (this.isHorizontal()) {
                                if (void 0 !== t.x) return this.getRightValue(t.x)
                            } else if (void 0 !== t.y) return this.getRightValue(t.y);
                        return t
                    },
                    getLabelForIndex: r.noop,
                    getPixelForValue: r.noop,
                    getValueForPixel: r.noop,
                    getPixelForTick: function (t) {
                        var e = this,
                            n = e.options.offset;
                        if (e.isHorizontal()) {
                            var i = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                                a = i * t + e.paddingLeft;
                            n && (a += i / 2);
                            var r = e.left + Math.round(a);
                            return r += e.isFullWidth() ? e.margins.left : 0
                        }
                        var o = e.height - (e.paddingTop + e.paddingBottom);
                        return e.top + t * (o / (e._ticks.length - 1))
                    },
                    getPixelForDecimal: function (t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var n = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                                i = e.left + Math.round(n);
                            return i += e.isFullWidth() ? e.margins.left : 0
                        }
                        return e.top + t * e.height
                    },
                    getBasePixel: function () {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function () {
                        var t = this.min,
                            e = this.max;
                        return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                    },
                    _autoSkip: function (t) {
                        var e, n, i, a, o = this,
                            s = o.isHorizontal(),
                            l = o.options.ticks.minor,
                            u = t.length,
                            c = r.toRadians(o.labelRotation),
                            d = Math.cos(c),
                            h = o.longestLabelWidth * d,
                            f = [];
                        for (l.maxTicksLimit && (a = l.maxTicksLimit), s && (e = !1, (h + l.autoSkipPadding) * u > o.width - (o.paddingLeft + o.paddingRight) && (e = 1 + Math.floor((h + l.autoSkipPadding) * u / (o.width - (o.paddingLeft + o.paddingRight)))), a && u > a && (e = Math.max(e, Math.floor(u / a)))), n = 0; n < u; n++) i = t[n], (e > 1 && n % e > 0 || n % e == 0 && n + e >= u) && n !== u - 1 && delete i.label, f.push(i);
                        return f
                    },
                    draw: function (t) {
                        var e = this,
                            n = e.options;
                        if (n.display) {
                            var a = e.ctx,
                                o = i.global,
                                s = n.ticks.minor,
                                u = n.ticks.major || s,
                                h = n.gridLines,
                                f = n.scaleLabel,
                                p = 0 !== e.labelRotation,
                                g = e.isHorizontal(),
                                m = s.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                                v = r.valueOrDefault(s.fontColor, o.defaultFontColor),
                                b = c(s),
                                y = r.valueOrDefault(u.fontColor, o.defaultFontColor),
                                x = c(u),
                                w = h.drawTicks ? h.tickMarkLength : 0,
                                k = r.valueOrDefault(f.fontColor, o.defaultFontColor),
                                C = c(f),
                                S = r.options.toPadding(f.padding),
                                M = r.toRadians(e.labelRotation),
                                P = [],
                                T = e.options.gridLines.lineWidth,
                                A = "right" === n.position ? e.left : e.right - T - w,
                                I = "right" === n.position ? e.left + w : e.right,
                                _ = "bottom" === n.position ? e.top + T : e.bottom - w - T,
                                D = "bottom" === n.position ? e.top + T + w : e.bottom + T;
                            if (r.each(m, function (i, a) {
                                    if (!r.isNullOrUndef(i.label)) {
                                        var u, c, d, f, v, b, y, x, k, C, S, F, O, L, R = i.label;
                                        a === e.zeroLineIndex && n.offset === h.offsetGridLines ? (u = h.zeroLineWidth, c = h.zeroLineColor, d = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (u = r.valueAtIndexOrDefault(h.lineWidth, a), c = r.valueAtIndexOrDefault(h.color, a), d = r.valueOrDefault(h.borderDash, o.borderDash), f = r.valueOrDefault(h.borderDashOffset, o.borderDashOffset));
                                        var V = "middle",
                                            z = "middle",
                                            N = s.padding;
                                        if (g) {
                                            var E = w + N;
                                            "bottom" === n.position ? (z = p ? "middle" : "top", V = p ? "right" : "center", L = e.top + E) : (z = p ? "middle" : "bottom", V = p ? "left" : "center", L = e.bottom - E);
                                            var W = l(e, a, h.offsetGridLines && m.length > 1);
                                            W < e.left && (c = "rgba(0,0,0,0)"), W += r.aliasPixel(u), O = e.getPixelForTick(a) + s.labelOffset, v = y = k = S = W, b = _, x = D, C = t.top, F = t.bottom + T
                                        } else {
                                            var B, H = "left" === n.position;
                                            s.mirror ? (V = H ? "left" : "right", B = N) : (V = H ? "right" : "left", B = w + N), O = H ? e.right - B : e.left + B;
                                            var j = l(e, a, h.offsetGridLines && m.length > 1);
                                            j < e.top && (c = "rgba(0,0,0,0)"), j += r.aliasPixel(u), L = e.getPixelForTick(a) + s.labelOffset, v = A, y = I, k = t.left, S = t.right + T, b = x = C = F = j
                                        }
                                        P.push({
                                            tx1: v,
                                            ty1: b,
                                            tx2: y,
                                            ty2: x,
                                            x1: k,
                                            y1: C,
                                            x2: S,
                                            y2: F,
                                            labelX: O,
                                            labelY: L,
                                            glWidth: u,
                                            glColor: c,
                                            glBorderDash: d,
                                            glBorderDashOffset: f,
                                            rotation: -1 * M,
                                            label: R,
                                            major: i.major,
                                            textBaseline: z,
                                            textAlign: V
                                        })
                                    }
                                }), r.each(P, function (t) {
                                    if (h.display && (a.save(), a.lineWidth = t.glWidth, a.strokeStyle = t.glColor, a.setLineDash && (a.setLineDash(t.glBorderDash), a.lineDashOffset = t.glBorderDashOffset), a.beginPath(), h.drawTicks && (a.moveTo(t.tx1, t.ty1), a.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (a.moveTo(t.x1, t.y1), a.lineTo(t.x2, t.y2)), a.stroke(), a.restore()), s.display) {
                                        a.save(), a.translate(t.labelX, t.labelY), a.rotate(t.rotation), a.font = t.major ? x.font : b.font, a.fillStyle = t.major ? y : v, a.textBaseline = t.textBaseline, a.textAlign = t.textAlign;
                                        var n = t.label;
                                        if (r.isArray(n))
                                            for (var i = n.length, o = 1.5 * b.size, l = e.isHorizontal() ? 0 : -o * (i - 1) / 2, u = 0; u < i; ++u) a.fillText("" + n[u], 0, l), l += o;
                                        else a.fillText(n, 0, 0);
                                        a.restore()
                                    }
                                }), f.display) {
                                var F, O, L = 0,
                                    R = d(f) / 2;
                                if (g) F = e.left + (e.right - e.left) / 2, O = "bottom" === n.position ? e.bottom - R - S.bottom : e.top + R + S.top;
                                else {
                                    var V = "left" === n.position;
                                    F = V ? e.left + R + S.top : e.right - R - S.top, O = e.top + (e.bottom - e.top) / 2, L = V ? -.5 * Math.PI : .5 * Math.PI
                                }
                                a.save(), a.translate(F, O), a.rotate(L), a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = k, a.font = C.font, a.fillText(f.labelString, 0, 0), a.restore()
                            }
                            if (h.drawBorder) {
                                a.lineWidth = r.valueAtIndexOrDefault(h.lineWidth, 0), a.strokeStyle = r.valueAtIndexOrDefault(h.color, 0);
                                var z = e.left,
                                    N = e.right + T,
                                    E = e.top,
                                    W = e.bottom + T,
                                    B = r.aliasPixel(a.lineWidth);
                                g ? (E = W = "top" === n.position ? e.bottom : e.top, E += B, W += B) : (z = N = "left" === n.position ? e.right : e.left, z += B, N += B), a.beginPath(), a.moveTo(z, E), a.lineTo(N, W), a.stroke()
                            }
                        }
                    }
                })
            }, {
                26: 26,
                27: 27,
                35: 35,
                46: 46
            }],
            34: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(46),
                    r = t(31);
                e.exports = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function (t, e, n) {
                        this.constructors[t] = e, this.defaults[t] = a.clone(n)
                    },
                    getScaleConstructor: function (t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    },
                    getScaleDefaults: function (t) {
                        return this.defaults.hasOwnProperty(t) ? a.merge({}, [i.scale, this.defaults[t]]) : {}
                    },
                    updateScaleDefaults: function (t, e) {
                        this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e))
                    },
                    addScalesToLayout: function (t) {
                        a.each(t.scales, function (e) {
                            e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, r.addBox(t, e)
                        })
                    }
                }
            }, {
                26: 26,
                31: 31,
                46: 46
            }],
            35: [function (t, e, n) {
                "use strict";
                var i = t(46);
                e.exports = {
                    formatters: {
                        values: function (t) {
                            return i.isArray(t) ? t : "" + t
                        },
                        linear: function (t, e, n) {
                            var a = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                            Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
                            var r = i.log10(Math.abs(a)),
                                o = "";
                            if (0 !== t)
                                if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                                    var s = i.log10(Math.abs(t));
                                    o = t.toExponential(Math.floor(s) - Math.floor(r))
                                } else {
                                    var l = -1 * Math.floor(r);
                                    l = Math.max(Math.min(l, 20), 0), o = t.toFixed(l)
                                }
                            else o = "0";
                            return o
                        },
                        logarithmic: function (t, e, n) {
                            var a = t / Math.pow(10, Math.floor(i.log10(t)));
                            return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === e || e === n.length - 1 ? t.toExponential() : ""
                        }
                    }
                }
            }, {
                46: 46
            }],
            36: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(27),
                    r = t(46);
                i._set("global", {
                    tooltips: {
                        enabled: !0,
                        custom: null,
                        mode: "nearest",
                        position: "average",
                        intersect: !0,
                        backgroundColor: "rgba(0,0,0,0.8)",
                        titleFontStyle: "bold",
                        titleSpacing: 2,
                        titleMarginBottom: 6,
                        titleFontColor: "#fff",
                        titleAlign: "left",
                        bodySpacing: 2,
                        bodyFontColor: "#fff",
                        bodyAlign: "left",
                        footerFontStyle: "bold",
                        footerSpacing: 2,
                        footerMarginTop: 6,
                        footerFontColor: "#fff",
                        footerAlign: "left",
                        yPadding: 6,
                        xPadding: 6,
                        caretPadding: 2,
                        caretSize: 5,
                        cornerRadius: 6,
                        multiKeyBackground: "#fff",
                        displayColors: !0,
                        borderColor: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        callbacks: {
                            beforeTitle: r.noop,
                            title: function (t, e) {
                                var n = "",
                                    i = e.labels,
                                    a = i ? i.length : 0;
                                if (t.length > 0) {
                                    var r = t[0];
                                    r.xLabel ? n = r.xLabel : a > 0 && r.index < a && (n = i[r.index])
                                }
                                return n
                            },
                            afterTitle: r.noop,
                            beforeBody: r.noop,
                            beforeLabel: r.noop,
                            label: function (t, e) {
                                var n = e.datasets[t.datasetIndex].label || "";
                                return n && (n += ": "), n += t.yLabel
                            },
                            labelColor: function (t, e) {
                                var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                                return {
                                    borderColor: n.borderColor,
                                    backgroundColor: n.backgroundColor
                                }
                            },
                            labelTextColor: function () {
                                return this._options.bodyFontColor
                            },
                            afterLabel: r.noop,
                            afterBody: r.noop,
                            beforeFooter: r.noop,
                            footer: r.noop,
                            afterFooter: r.noop
                        }
                    }
                });
                var o = {
                    average: function (t) {
                        if (!t.length) return !1;
                        var e, n, i = 0,
                            a = 0,
                            r = 0;
                        for (e = 0, n = t.length; e < n; ++e) {
                            var o = t[e];
                            if (o && o.hasValue()) {
                                var s = o.tooltipPosition();
                                i += s.x, a += s.y, ++r
                            }
                        }
                        return {
                            x: Math.round(i / r),
                            y: Math.round(a / r)
                        }
                    },
                    nearest: function (t, e) {
                        var n, i, a, o = e.x,
                            s = e.y,
                            l = Number.POSITIVE_INFINITY;
                        for (n = 0, i = t.length; n < i; ++n) {
                            var u = t[n];
                            if (u && u.hasValue()) {
                                var c = u.getCenterPoint(),
                                    d = r.distanceBetweenPoints(e, c);
                                d < l && (l = d, a = u)
                            }
                        }
                        if (a) {
                            var h = a.tooltipPosition();
                            o = h.x, s = h.y
                        }
                        return {
                            x: o,
                            y: s
                        }
                    }
                };

                function s(t, e) {
                    var n = r.color(t);
                    return n.alpha(e * n.alpha()).rgbaString()
                }

                function l(t, e) {
                    return e && (r.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }

                function u(t) {
                    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
                }

                function c(t) {
                    var e = i.global,
                        n = r.valueOrDefault;
                    return {
                        xPadding: t.xPadding,
                        yPadding: t.yPadding,
                        xAlign: t.xAlign,
                        yAlign: t.yAlign,
                        bodyFontColor: t.bodyFontColor,
                        _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily),
                        _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle),
                        _bodyAlign: t.bodyAlign,
                        bodyFontSize: n(t.bodyFontSize, e.defaultFontSize),
                        bodySpacing: t.bodySpacing,
                        titleFontColor: t.titleFontColor,
                        _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily),
                        _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle),
                        titleFontSize: n(t.titleFontSize, e.defaultFontSize),
                        _titleAlign: t.titleAlign,
                        titleSpacing: t.titleSpacing,
                        titleMarginBottom: t.titleMarginBottom,
                        footerFontColor: t.footerFontColor,
                        _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily),
                        _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle),
                        footerFontSize: n(t.footerFontSize, e.defaultFontSize),
                        _footerAlign: t.footerAlign,
                        footerSpacing: t.footerSpacing,
                        footerMarginTop: t.footerMarginTop,
                        caretSize: t.caretSize,
                        cornerRadius: t.cornerRadius,
                        backgroundColor: t.backgroundColor,
                        opacity: 0,
                        legendColorBackground: t.multiKeyBackground,
                        displayColors: t.displayColors,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth
                    }
                }

                function d(t) {
                    return l([], u(t))
                }(e.exports = a.extend({
                    initialize: function () {
                        this._model = c(this._options), this._lastActive = []
                    },
                    getTitle: function () {
                        var t = this._options.callbacks,
                            e = t.beforeTitle.apply(this, arguments),
                            n = t.title.apply(this, arguments),
                            i = t.afterTitle.apply(this, arguments),
                            a = [];
                        return a = l(a, u(e)), a = l(a, u(n)), a = l(a, u(i))
                    },
                    getBeforeBody: function () {
                        return d(this._options.callbacks.beforeBody.apply(this, arguments))
                    },
                    getBody: function (t, e) {
                        var n = this,
                            i = n._options.callbacks,
                            a = [];
                        return r.each(t, function (t) {
                            var r = {
                                before: [],
                                lines: [],
                                after: []
                            };
                            l(r.before, u(i.beforeLabel.call(n, t, e))), l(r.lines, i.label.call(n, t, e)), l(r.after, u(i.afterLabel.call(n, t, e))), a.push(r)
                        }), a
                    },
                    getAfterBody: function () {
                        return d(this._options.callbacks.afterBody.apply(this, arguments))
                    },
                    getFooter: function () {
                        var t = this._options.callbacks,
                            e = t.beforeFooter.apply(this, arguments),
                            n = t.footer.apply(this, arguments),
                            i = t.afterFooter.apply(this, arguments),
                            a = [];
                        return a = l(a, u(e)), a = l(a, u(n)), a = l(a, u(i))
                    },
                    update: function (t) {
                        var e, n, i, a, s, l, u, d = this,
                            h = d._options,
                            f = d._model,
                            p = d._model = c(h),
                            g = d._active,
                            m = d._data,
                            v = {
                                xAlign: f.xAlign,
                                yAlign: f.yAlign
                            },
                            b = {
                                x: f.x,
                                y: f.y
                            },
                            y = {
                                width: f.width,
                                height: f.height
                            },
                            x = {
                                x: f.caretX,
                                y: f.caretY
                            };
                        if (g.length) {
                            p.opacity = 1;
                            var w = [],
                                k = [];
                            x = o[h.position].call(d, g, d._eventPosition);
                            var C = [];
                            for (e = 0, n = g.length; e < n; ++e) C.push((i = g[e], a = void 0, s = void 0, l = void 0, u = void 0, a = i._xScale, s = i._yScale || i._scale, l = i._index, u = i._datasetIndex, {
                                xLabel: a ? a.getLabelForIndex(l, u) : "",
                                yLabel: s ? s.getLabelForIndex(l, u) : "",
                                index: l,
                                datasetIndex: u,
                                x: i._model.x,
                                y: i._model.y
                            }));
                            h.filter && (C = C.filter(function (t) {
                                return h.filter(t, m)
                            })), h.itemSort && (C = C.sort(function (t, e) {
                                return h.itemSort(t, e, m)
                            })), r.each(C, function (t) {
                                w.push(h.callbacks.labelColor.call(d, t, d._chart)), k.push(h.callbacks.labelTextColor.call(d, t, d._chart))
                            }), p.title = d.getTitle(C, m), p.beforeBody = d.getBeforeBody(C, m), p.body = d.getBody(C, m), p.afterBody = d.getAfterBody(C, m), p.footer = d.getFooter(C, m), p.x = Math.round(x.x), p.y = Math.round(x.y), p.caretPadding = h.caretPadding, p.labelColors = w, p.labelTextColors = k, p.dataPoints = C, y = function (t, e) {
                                var n = t._chart.ctx,
                                    i = 2 * e.yPadding,
                                    a = 0,
                                    o = e.body,
                                    s = o.reduce(function (t, e) {
                                        return t + e.before.length + e.lines.length + e.after.length
                                    }, 0);
                                s += e.beforeBody.length + e.afterBody.length;
                                var l = e.title.length,
                                    u = e.footer.length,
                                    c = e.titleFontSize,
                                    d = e.bodyFontSize,
                                    h = e.footerFontSize;
                                i += l * c, i += l ? (l - 1) * e.titleSpacing : 0, i += l ? e.titleMarginBottom : 0, i += s * d, i += s ? (s - 1) * e.bodySpacing : 0, i += u ? e.footerMarginTop : 0, i += u * h, i += u ? (u - 1) * e.footerSpacing : 0;
                                var f = 0,
                                    p = function (t) {
                                        a = Math.max(a, n.measureText(t).width + f)
                                    };
                                return n.font = r.fontString(c, e._titleFontStyle, e._titleFontFamily), r.each(e.title, p), n.font = r.fontString(d, e._bodyFontStyle, e._bodyFontFamily), r.each(e.beforeBody.concat(e.afterBody), p), f = e.displayColors ? d + 2 : 0, r.each(o, function (t) {
                                    r.each(t.before, p), r.each(t.lines, p), r.each(t.after, p)
                                }), f = 0, n.font = r.fontString(h, e._footerFontStyle, e._footerFontFamily), r.each(e.footer, p), {
                                    width: a += 2 * e.xPadding,
                                    height: i
                                }
                            }(this, p), b = function (t, e, n, i) {
                                var a = t.x,
                                    r = t.y,
                                    o = t.caretSize,
                                    s = t.caretPadding,
                                    l = t.cornerRadius,
                                    u = n.xAlign,
                                    c = n.yAlign,
                                    d = o + s,
                                    h = l + s;
                                return "right" === u ? a -= e.width : "center" === u && ((a -= e.width / 2) + e.width > i.width && (a = i.width - e.width), a < 0 && (a = 0)), "top" === c ? r += d : r -= "bottom" === c ? e.height + d : e.height / 2, "center" === c ? "left" === u ? a += d : "right" === u && (a -= d) : "left" === u ? a -= h : "right" === u && (a += h), {
                                    x: a,
                                    y: r
                                }
                            }(p, y, v = function (t, e) {
                                var n, i, a, r, o, s = t._model,
                                    l = t._chart,
                                    u = t._chart.chartArea,
                                    c = "center",
                                    d = "center";
                                s.y < e.height ? d = "top" : s.y > l.height - e.height && (d = "bottom");
                                var h = (u.left + u.right) / 2,
                                    f = (u.top + u.bottom) / 2;
                                "center" === d ? (n = function (t) {
                                    return t <= h
                                }, i = function (t) {
                                    return t > h
                                }) : (n = function (t) {
                                    return t <= e.width / 2
                                }, i = function (t) {
                                    return t >= l.width - e.width / 2
                                }), a = function (t) {
                                    return t + e.width + s.caretSize + s.caretPadding > l.width
                                }, r = function (t) {
                                    return t - e.width - s.caretSize - s.caretPadding < 0
                                }, o = function (t) {
                                    return t <= f ? "top" : "bottom"
                                }, n(s.x) ? (c = "left", a(s.x) && (c = "center", d = o(s.y))) : i(s.x) && (c = "right", r(s.x) && (c = "center", d = o(s.y)));
                                var p = t._options;
                                return {
                                    xAlign: p.xAlign ? p.xAlign : c,
                                    yAlign: p.yAlign ? p.yAlign : d
                                }
                            }(this, y), d._chart)
                        } else p.opacity = 0;
                        return p.xAlign = v.xAlign, p.yAlign = v.yAlign, p.x = b.x, p.y = b.y, p.width = y.width, p.height = y.height, p.caretX = x.x, p.caretY = x.y, d._model = p, t && h.custom && h.custom.call(d, p), d
                    },
                    drawCaret: function (t, e) {
                        var n = this._chart.ctx,
                            i = this._view,
                            a = this.getCaretPosition(t, e, i);
                        n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3)
                    },
                    getCaretPosition: function (t, e, n) {
                        var i, a, r, o, s, l, u = n.caretSize,
                            c = n.cornerRadius,
                            d = n.xAlign,
                            h = n.yAlign,
                            f = t.x,
                            p = t.y,
                            g = e.width,
                            m = e.height;
                        if ("center" === h) s = p + m / 2, "left" === d ? (a = (i = f) - u, r = i, o = s + u, l = s - u) : (a = (i = f + g) + u, r = i, o = s - u, l = s + u);
                        else if ("left" === d ? (i = (a = f + c + u) - u, r = a + u) : "right" === d ? (i = (a = f + g - c - u) - u, r = a + u) : (i = (a = n.caretX) - u, r = a + u), "top" === h) s = (o = p) - u, l = o;
                        else {
                            s = (o = p + m) + u, l = o;
                            var v = r;
                            r = i, i = v
                        }
                        return {
                            x1: i,
                            x2: a,
                            x3: r,
                            y1: o,
                            y2: s,
                            y3: l
                        }
                    },
                    drawTitle: function (t, e, n, i) {
                        var a = e.title;
                        if (a.length) {
                            n.textAlign = e._titleAlign, n.textBaseline = "top";
                            var o, l, u = e.titleFontSize,
                                c = e.titleSpacing;
                            for (n.fillStyle = s(e.titleFontColor, i), n.font = r.fontString(u, e._titleFontStyle, e._titleFontFamily), o = 0, l = a.length; o < l; ++o) n.fillText(a[o], t.x, t.y), t.y += u + c, o + 1 === a.length && (t.y += e.titleMarginBottom - c)
                        }
                    },
                    drawBody: function (t, e, n, i) {
                        var a = e.bodyFontSize,
                            o = e.bodySpacing,
                            l = e.body;
                        n.textAlign = e._bodyAlign, n.textBaseline = "top", n.font = r.fontString(a, e._bodyFontStyle, e._bodyFontFamily);
                        var u = 0,
                            c = function (e) {
                                n.fillText(e, t.x + u, t.y), t.y += a + o
                            };
                        n.fillStyle = s(e.bodyFontColor, i), r.each(e.beforeBody, c);
                        var d = e.displayColors;
                        u = d ? a + 2 : 0, r.each(l, function (o, l) {
                            var u = s(e.labelTextColors[l], i);
                            n.fillStyle = u, r.each(o.before, c), r.each(o.lines, function (r) {
                                d && (n.fillStyle = s(e.legendColorBackground, i), n.fillRect(t.x, t.y, a, a), n.lineWidth = 1, n.strokeStyle = s(e.labelColors[l].borderColor, i), n.strokeRect(t.x, t.y, a, a), n.fillStyle = s(e.labelColors[l].backgroundColor, i), n.fillRect(t.x + 1, t.y + 1, a - 2, a - 2), n.fillStyle = u), c(r)
                            }), r.each(o.after, c)
                        }), u = 0, r.each(e.afterBody, c), t.y -= o
                    },
                    drawFooter: function (t, e, n, i) {
                        var a = e.footer;
                        a.length && (t.y += e.footerMarginTop, n.textAlign = e._footerAlign, n.textBaseline = "top", n.fillStyle = s(e.footerFontColor, i), n.font = r.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), r.each(a, function (i) {
                            n.fillText(i, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
                        }))
                    },
                    drawBackground: function (t, e, n, i, a) {
                        n.fillStyle = s(e.backgroundColor, a), n.strokeStyle = s(e.borderColor, a), n.lineWidth = e.borderWidth;
                        var r = e.xAlign,
                            o = e.yAlign,
                            l = t.x,
                            u = t.y,
                            c = i.width,
                            d = i.height,
                            h = e.cornerRadius;
                        n.beginPath(), n.moveTo(l + h, u), "top" === o && this.drawCaret(t, i), n.lineTo(l + c - h, u), n.quadraticCurveTo(l + c, u, l + c, u + h), "center" === o && "right" === r && this.drawCaret(t, i), n.lineTo(l + c, u + d - h), n.quadraticCurveTo(l + c, u + d, l + c - h, u + d), "bottom" === o && this.drawCaret(t, i), n.lineTo(l + h, u + d), n.quadraticCurveTo(l, u + d, l, u + d - h), "center" === o && "left" === r && this.drawCaret(t, i), n.lineTo(l, u + h), n.quadraticCurveTo(l, u, l + h, u), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke()
                    },
                    draw: function () {
                        var t = this._chart.ctx,
                            e = this._view;
                        if (0 !== e.opacity) {
                            var n = {
                                    width: e.width,
                                    height: e.height
                                },
                                i = {
                                    x: e.x,
                                    y: e.y
                                },
                                a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                            this._options.enabled && r && (this.drawBackground(i, e, t, n, a), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, a), this.drawBody(i, e, t, a), this.drawFooter(i, e, t, a))
                        }
                    },
                    handleEvent: function (t) {
                        var e, n = this,
                            i = n._options;
                        return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), (e = !r.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
                            x: t.x,
                            y: t.y
                        }, n.update(!0), n.pivot())), e
                    }
                })).positioners = o
            }, {
                26: 26,
                27: 27,
                46: 46
            }],
            37: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(27),
                    r = t(46);
                i._set("global", {
                    elements: {
                        arc: {
                            backgroundColor: i.global.defaultColor,
                            borderColor: "#fff",
                            borderWidth: 2
                        }
                    }
                }), e.exports = a.extend({
                    inLabelRange: function (t) {
                        var e = this._view;
                        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                    },
                    inRange: function (t, e) {
                        var n = this._view;
                        if (n) {
                            for (var i = r.getAngleFromPoint(n, {
                                    x: t,
                                    y: e
                                }), a = i.angle, o = i.distance, s = n.startAngle, l = n.endAngle; l < s;) l += 2 * Math.PI;
                            for (; a > l;) a -= 2 * Math.PI;
                            for (; a < s;) a += 2 * Math.PI;
                            var u = a >= s && a <= l,
                                c = o >= n.innerRadius && o <= n.outerRadius;
                            return u && c
                        }
                        return !1
                    },
                    getCenterPoint: function () {
                        var t = this._view,
                            e = (t.startAngle + t.endAngle) / 2,
                            n = (t.innerRadius + t.outerRadius) / 2;
                        return {
                            x: t.x + Math.cos(e) * n,
                            y: t.y + Math.sin(e) * n
                        }
                    },
                    getArea: function () {
                        var t = this._view;
                        return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                    },
                    tooltipPosition: function () {
                        var t = this._view,
                            e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                            n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                        return {
                            x: t.x + Math.cos(e) * n,
                            y: t.y + Math.sin(e) * n
                        }
                    },
                    draw: function () {
                        var t = this._chart.ctx,
                            e = this._view,
                            n = e.startAngle,
                            i = e.endAngle;
                        t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                    }
                })
            }, {
                26: 26,
                27: 27,
                46: 46
            }],
            38: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(27),
                    r = t(46),
                    o = i.global;
                i._set("global", {
                    elements: {
                        line: {
                            tension: .4,
                            backgroundColor: o.defaultColor,
                            borderWidth: 3,
                            borderColor: o.defaultColor,
                            borderCapStyle: "butt",
                            borderDash: [],
                            borderDashOffset: 0,
                            borderJoinStyle: "miter",
                            capBezierPoints: !0,
                            fill: !0
                        }
                    }
                }), e.exports = a.extend({
                    draw: function () {
                        var t, e, n, i, a = this._view,
                            s = this._chart.ctx,
                            l = a.spanGaps,
                            u = this._children.slice(),
                            c = o.elements.line,
                            d = -1;
                        for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = a.borderCapStyle || c.borderCapStyle, s.setLineDash && s.setLineDash(a.borderDash || c.borderDash), s.lineDashOffset = a.borderDashOffset || c.borderDashOffset, s.lineJoin = a.borderJoinStyle || c.borderJoinStyle, s.lineWidth = a.borderWidth || c.borderWidth, s.strokeStyle = a.borderColor || o.defaultColor, s.beginPath(), d = -1, t = 0; t < u.length; ++t) e = u[t], n = r.previousItem(u, t), i = e._view, 0 === t ? i.skip || (s.moveTo(i.x, i.y), d = t) : (n = -1 === d ? n : u[d], i.skip || (d !== t - 1 && !l || -1 === d ? s.moveTo(i.x, i.y) : r.canvas.lineTo(s, n._view, e._view), d = t));
                        s.stroke(), s.restore()
                    }
                })
            }, {
                26: 26,
                27: 27,
                46: 46
            }],
            39: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(27),
                    r = t(46),
                    o = i.global.defaultColor;

                function s(t) {
                    var e = this._view;
                    return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
                }
                i._set("global", {
                    elements: {
                        point: {
                            radius: 3,
                            pointStyle: "circle",
                            backgroundColor: o,
                            borderColor: o,
                            borderWidth: 1,
                            hitRadius: 1,
                            hoverRadius: 4,
                            hoverBorderWidth: 1
                        }
                    }
                }), e.exports = a.extend({
                    inRange: function (t, e) {
                        var n = this._view;
                        return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                    },
                    inLabelRange: s,
                    inXRange: s,
                    inYRange: function (t) {
                        var e = this._view;
                        return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
                    },
                    getCenterPoint: function () {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    },
                    getArea: function () {
                        return Math.PI * Math.pow(this._view.radius, 2)
                    },
                    tooltipPosition: function () {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y,
                            padding: t.radius + t.borderWidth
                        }
                    },
                    draw: function (t) {
                        var e = this._view,
                            n = this._model,
                            a = this._chart.ctx,
                            s = e.pointStyle,
                            l = e.rotation,
                            u = e.radius,
                            c = e.x,
                            d = e.y;
                        e.skip || (void 0 === t || n.x >= t.left && 1.01 * t.right >= n.x && n.y >= t.top && 1.01 * t.bottom >= n.y) && (a.strokeStyle = e.borderColor || o, a.lineWidth = r.valueOrDefault(e.borderWidth, i.global.elements.point.borderWidth), a.fillStyle = e.backgroundColor || o, r.canvas.drawPoint(a, s, u, c, d, l))
                    }
                })
            }, {
                26: 26,
                27: 27,
                46: 46
            }],
            40: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(27);

                function r(t) {
                    return void 0 !== t._view.width
                }

                function o(t) {
                    var e, n, i, a, o = t._view;
                    if (r(t)) {
                        var s = o.width / 2;
                        e = o.x - s, n = o.x + s, i = Math.min(o.y, o.base), a = Math.max(o.y, o.base)
                    } else {
                        var l = o.height / 2;
                        e = Math.min(o.x, o.base), n = Math.max(o.x, o.base), i = o.y - l, a = o.y + l
                    }
                    return {
                        left: e,
                        top: i,
                        right: n,
                        bottom: a
                    }
                }
                i._set("global", {
                    elements: {
                        rectangle: {
                            backgroundColor: i.global.defaultColor,
                            borderColor: i.global.defaultColor,
                            borderSkipped: "bottom",
                            borderWidth: 0
                        }
                    }
                }), e.exports = a.extend({
                    draw: function () {
                        var t, e, n, i, a, r, o, s = this._chart.ctx,
                            l = this._view,
                            u = l.borderWidth;
                        if (l.horizontal ? (t = l.base, e = l.x, n = l.y - l.height / 2, i = l.y + l.height / 2, a = e > t ? 1 : -1, r = 1, o = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, n = l.y, a = 1, r = (i = l.base) > n ? 1 : -1, o = l.borderSkipped || "bottom"), u) {
                            var c = Math.min(Math.abs(t - e), Math.abs(n - i)),
                                d = (u = u > c ? c : u) / 2,
                                h = t + ("left" !== o ? d * a : 0),
                                f = e + ("right" !== o ? -d * a : 0),
                                p = n + ("top" !== o ? d * r : 0),
                                g = i + ("bottom" !== o ? -d * r : 0);
                            h !== f && (n = p, i = g), p !== g && (t = h, e = f)
                        }
                        s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
                        var m = [[t, i], [t, n], [e, n], [e, i]],
                            v = ["bottom", "left", "top", "right"].indexOf(o, 0);

                        function b(t) {
                            return m[(v + t) % 4]
                        } - 1 === v && (v = 0);
                        var y = b(0);
                        s.moveTo(y[0], y[1]);
                        for (var x = 1; x < 4; x++) y = b(x), s.lineTo(y[0], y[1]);
                        s.fill(), u && s.stroke()
                    },
                    height: function () {
                        var t = this._view;
                        return t.base - t.y
                    },
                    inRange: function (t, e) {
                        var n = !1;
                        if (this._view) {
                            var i = o(this);
                            n = t >= i.left && t <= i.right && e >= i.top && e <= i.bottom
                        }
                        return n
                    },
                    inLabelRange: function (t, e) {
                        if (!this._view) return !1;
                        var n = o(this);
                        return r(this) ? t >= n.left && t <= n.right : e >= n.top && e <= n.bottom
                    },
                    inXRange: function (t) {
                        var e = o(this);
                        return t >= e.left && t <= e.right
                    },
                    inYRange: function (t) {
                        var e = o(this);
                        return t >= e.top && t <= e.bottom
                    },
                    getCenterPoint: function () {
                        var t, e, n = this._view;
                        return r(this) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                            x: t,
                            y: e
                        }
                    },
                    getArea: function () {
                        var t = this._view;
                        return t.width * Math.abs(t.y - t.base)
                    },
                    tooltipPosition: function () {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    }
                })
            }, {
                26: 26,
                27: 27
            }],
            41: [function (t, e, n) {
                "use strict";
                e.exports = {}, e.exports.Arc = t(37), e.exports.Line = t(38), e.exports.Point = t(39), e.exports.Rectangle = t(40)
            }, {
                37: 37,
                38: 38,
                39: 39,
                40: 40
            }],
            42: [function (t, e, n) {
                "use strict";
                var i = t(43);
                n = e.exports = {
                    clear: function (t) {
                        t.ctx.clearRect(0, 0, t.width, t.height)
                    },
                    roundedRect: function (t, e, n, i, a, r) {
                        if (r) {
                            var o = Math.min(r, a / 2 - 1e-7, i / 2 - 1e-7);
                            t.moveTo(e + o, n), t.lineTo(e + i - o, n), t.arcTo(e + i, n, e + i, n + o, o), t.lineTo(e + i, n + a - o), t.arcTo(e + i, n + a, e + i - o, n + a, o), t.lineTo(e + o, n + a), t.arcTo(e, n + a, e, n + a - o, o), t.lineTo(e, n + o), t.arcTo(e, n, e + o, n, o), t.closePath(), t.moveTo(e, n)
                        } else t.rect(e, n, i, a)
                    },
                    drawPoint: function (t, e, n, i, a, r) {
                        var o, s, l, u, c, d;
                        if (r = r || 0, !e || "object" != typeof e || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
                            if (!(isNaN(n) || n <= 0)) {
                                switch (t.save(), t.translate(i, a), t.rotate(r * Math.PI / 180), t.beginPath(), e) {
                                    default:
                                        t.arc(0, 0, n, 0, 2 * Math.PI), t.closePath();
                                        break;
                                    case "triangle":
                                        c = (s = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(-s / 2, c / 3), t.lineTo(s / 2, c / 3), t.lineTo(0, -2 * c / 3), t.closePath();
                                        break;
                                    case "rect":
                                        d = 1 / Math.SQRT2 * n, t.rect(-d, -d, 2 * d, 2 * d);
                                        break;
                                    case "rectRounded":
                                        var h = n / Math.SQRT2,
                                            f = -h,
                                            p = -h,
                                            g = Math.SQRT2 * n;
                                        this.roundedRect(t, f, p, g, g, .425 * n);
                                        break;
                                    case "rectRot":
                                        d = 1 / Math.SQRT2 * n, t.moveTo(-d, 0), t.lineTo(0, d), t.lineTo(d, 0), t.lineTo(0, -d), t.closePath();
                                        break;
                                    case "cross":
                                        t.moveTo(0, n), t.lineTo(0, -n), t.moveTo(-n, 0), t.lineTo(n, 0);
                                        break;
                                    case "crossRot":
                                        l = Math.cos(Math.PI / 4) * n, u = Math.sin(Math.PI / 4) * n, t.moveTo(-l, -u), t.lineTo(l, u), t.moveTo(-l, u), t.lineTo(l, -u);
                                        break;
                                    case "star":
                                        t.moveTo(0, n), t.lineTo(0, -n), t.moveTo(-n, 0), t.lineTo(n, 0), l = Math.cos(Math.PI / 4) * n, u = Math.sin(Math.PI / 4) * n, t.moveTo(-l, -u), t.lineTo(l, u), t.moveTo(-l, u), t.lineTo(l, -u);
                                        break;
                                    case "line":
                                        t.moveTo(-n, 0), t.lineTo(n, 0);
                                        break;
                                    case "dash":
                                        t.moveTo(0, 0), t.lineTo(n, 0)
                                }
                                t.fill(), t.stroke(), t.restore()
                            }
                        } else t.drawImage(e, i - e.width / 2, a - e.height / 2, e.width, e.height)
                    },
                    clipArea: function (t, e) {
                        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                    },
                    unclipArea: function (t) {
                        t.restore()
                    },
                    lineTo: function (t, e, n, i) {
                        if (n.steppedLine) return "after" === n.steppedLine && !i || "after" !== n.steppedLine && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y);
                        n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
                    }
                };
                i.clear = n.clear, i.drawRoundedRectangle = function (t) {
                    t.beginPath(), n.roundedRect.apply(n, arguments)
                }
            }, {
                43: 43
            }],
            43: [function (t, e, n) {
                "use strict";
                var i, a = {
                    noop: function () {},
                    uid: (i = 0, function () {
                        return i++
                    }),
                    isNullOrUndef: function (t) {
                        return null == t
                    },
                    isArray: Array.isArray ? Array.isArray : function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    isObject: function (t) {
                        return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                    },
                    valueOrDefault: function (t, e) {
                        return void 0 === t ? e : t
                    },
                    valueAtIndexOrDefault: function (t, e, n) {
                        return a.valueOrDefault(a.isArray(t) ? t[e] : t, n)
                    },
                    callback: function (t, e, n) {
                        if (t && "function" == typeof t.call) return t.apply(n, e)
                    },
                    each: function (t, e, n, i) {
                        var r, o, s;
                        if (a.isArray(t))
                            if (o = t.length, i)
                                for (r = o - 1; r >= 0; r--) e.call(n, t[r], r);
                            else
                                for (r = 0; r < o; r++) e.call(n, t[r], r);
                        else if (a.isObject(t))
                            for (o = (s = Object.keys(t)).length, r = 0; r < o; r++) e.call(n, t[s[r]], s[r])
                    },
                    arrayEquals: function (t, e) {
                        var n, i, r, o;
                        if (!t || !e || t.length !== e.length) return !1;
                        for (n = 0, i = t.length; n < i; ++n)
                            if (r = t[n], o = e[n], r instanceof Array && o instanceof Array) {
                                if (!a.arrayEquals(r, o)) return !1
                            } else if (r !== o) return !1;
                        return !0
                    },
                    clone: function (t) {
                        if (a.isArray(t)) return t.map(a.clone);
                        if (a.isObject(t)) {
                            for (var e = {}, n = Object.keys(t), i = n.length, r = 0; r < i; ++r) e[n[r]] = a.clone(t[n[r]]);
                            return e
                        }
                        return t
                    },
                    _merger: function (t, e, n, i) {
                        var r = e[t],
                            o = n[t];
                        a.isObject(r) && a.isObject(o) ? a.merge(r, o, i) : e[t] = a.clone(o)
                    },
                    _mergerIf: function (t, e, n) {
                        var i = e[t],
                            r = n[t];
                        a.isObject(i) && a.isObject(r) ? a.mergeIf(i, r) : e.hasOwnProperty(t) || (e[t] = a.clone(r))
                    },
                    merge: function (t, e, n) {
                        var i, r, o, s, l, u = a.isArray(e) ? e : [e],
                            c = u.length;
                        if (!a.isObject(t)) return t;
                        for (i = (n = n || {}).merger || a._merger, r = 0; r < c; ++r)
                            if (e = u[r], a.isObject(e))
                                for (l = 0, s = (o = Object.keys(e)).length; l < s; ++l) i(o[l], t, e, n);
                        return t
                    },
                    mergeIf: function (t, e) {
                        return a.merge(t, e, {
                            merger: a._mergerIf
                        })
                    },
                    extend: function (t) {
                        for (var e = function (e, n) {
                                t[n] = e
                            }, n = 1, i = arguments.length; n < i; ++n) a.each(arguments[n], e);
                        return t
                    },
                    inherits: function (t) {
                        var e = this,
                            n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                                return e.apply(this, arguments)
                            },
                            i = function () {
                                this.constructor = n
                            };
                        return i.prototype = e.prototype, n.prototype = new i, n.extend = a.inherits, t && a.extend(n.prototype, t), n.__super__ = e.prototype, n
                    }
                };
                e.exports = a, a.callCallback = a.callback, a.indexOf = function (t, e, n) {
                    return Array.prototype.indexOf.call(t, e, n)
                }, a.getValueOrDefault = a.valueOrDefault, a.getValueAtIndexOrDefault = a.valueAtIndexOrDefault
            }, {}],
            44: [function (t, e, n) {
                "use strict";
                var i = t(43),
                    a = {
                        linear: function (t) {
                            return t
                        },
                        easeInQuad: function (t) {
                            return t * t
                        },
                        easeOutQuad: function (t) {
                            return -t * (t - 2)
                        },
                        easeInOutQuad: function (t) {
                            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                        },
                        easeInCubic: function (t) {
                            return t * t * t
                        },
                        easeOutCubic: function (t) {
                            return (t -= 1) * t * t + 1
                        },
                        easeInOutCubic: function (t) {
                            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                        },
                        easeInQuart: function (t) {
                            return t * t * t * t
                        },
                        easeOutQuart: function (t) {
                            return -((t -= 1) * t * t * t - 1)
                        },
                        easeInOutQuart: function (t) {
                            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                        },
                        easeInQuint: function (t) {
                            return t * t * t * t * t
                        },
                        easeOutQuint: function (t) {
                            return (t -= 1) * t * t * t * t + 1
                        },
                        easeInOutQuint: function (t) {
                            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                        },
                        easeInSine: function (t) {
                            return 1 - Math.cos(t * (Math.PI / 2))
                        },
                        easeOutSine: function (t) {
                            return Math.sin(t * (Math.PI / 2))
                        },
                        easeInOutSine: function (t) {
                            return -.5 * (Math.cos(Math.PI * t) - 1)
                        },
                        easeInExpo: function (t) {
                            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                        },
                        easeOutExpo: function (t) {
                            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                        },
                        easeInOutExpo: function (t) {
                            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                        },
                        easeInCirc: function (t) {
                            return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                        },
                        easeOutCirc: function (t) {
                            return Math.sqrt(1 - (t -= 1) * t)
                        },
                        easeInOutCirc: function (t) {
                            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                        },
                        easeInElastic: function (t) {
                            var e = 1.70158,
                                n = 0,
                                i = 1;
                            return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
                        },
                        easeOutElastic: function (t) {
                            var e = 1.70158,
                                n = 0,
                                i = 1;
                            return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                        },
                        easeInOutElastic: function (t) {
                            var e = 1.70158,
                                n = 0,
                                i = 1;
                            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                        },
                        easeInBack: function (t) {
                            var e = 1.70158;
                            return t * t * ((e + 1) * t - e)
                        },
                        easeOutBack: function (t) {
                            var e = 1.70158;
                            return (t -= 1) * t * ((e + 1) * t + e) + 1
                        },
                        easeInOutBack: function (t) {
                            var e = 1.70158;
                            return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                        },
                        easeInBounce: function (t) {
                            return 1 - a.easeOutBounce(1 - t)
                        },
                        easeOutBounce: function (t) {
                            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        },
                        easeInOutBounce: function (t) {
                            return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5
                        }
                    };
                e.exports = {
                    effects: a
                }, i.easingEffects = a
            }, {
                43: 43
            }],
            45: [function (t, e, n) {
                "use strict";
                var i = t(43);
                e.exports = {
                    toLineHeight: function (t, e) {
                        var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                        if (!n || "normal" === n[1]) return 1.2 * e;
                        switch (t = +n[2], n[3]) {
                            case "px":
                                return t;
                            case "%":
                                t /= 100
                        }
                        return e * t
                    },
                    toPadding: function (t) {
                        var e, n, a, r;
                        return i.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, a = +t.bottom || 0, r = +t.left || 0) : e = n = a = r = +t || 0, {
                            top: e,
                            right: n,
                            bottom: a,
                            left: r,
                            height: e + a,
                            width: r + n
                        }
                    },
                    resolve: function (t, e, n) {
                        var a, r, o;
                        for (a = 0, r = t.length; a < r; ++a)
                            if (void 0 !== (o = t[a]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== n && i.isArray(o) && (o = o[n]), void 0 !== o)) return o
                    }
                }
            }, {
                43: 43
            }],
            46: [function (t, e, n) {
                "use strict";
                e.exports = t(43), e.exports.easing = t(44), e.exports.canvas = t(42), e.exports.options = t(45)
            }, {
                42: 42,
                43: 43,
                44: 44,
                45: 45
            }],
            47: [function (t, e, n) {
                e.exports = {
                    acquireContext: function (t) {
                        return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                    }
                }
            }, {}],
            48: [function (t, e, n) {
                "use strict";
                var i = t(46),
                    a = "$chartjs",
                    r = "chartjs-",
                    o = r + "render-monitor",
                    s = r + "render-animation",
                    l = ["animationstart", "webkitAnimationStart"],
                    u = {
                        touchstart: "mousedown",
                        touchmove: "mousemove",
                        touchend: "mouseup",
                        pointerenter: "mouseenter",
                        pointerdown: "mousedown",
                        pointermove: "mousemove",
                        pointerup: "mouseup",
                        pointerleave: "mouseout",
                        pointerout: "mouseout"
                    };

                function c(t, e) {
                    var n = i.getStyle(t, e),
                        a = n && n.match(/^(\d+)(\.\d+)?px$/);
                    return a ? Number(a[1]) : void 0
                }
                var d = !! function () {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0
                            }
                        });
                        window.addEventListener("e", null, e)
                    } catch (t) {}
                    return t
                }() && {
                    passive: !0
                };

                function h(t, e, n) {
                    t.addEventListener(e, n, d)
                }

                function f(t, e, n) {
                    t.removeEventListener(e, n, d)
                }

                function p(t, e, n, i, a) {
                    return {
                        type: t,
                        chart: e,
                        native: a || null,
                        x: void 0 !== n ? n : null,
                        y: void 0 !== i ? i : null
                    }
                }

                function g(t, e, n) {
                    var u, c, d, f, g = t[a] || (t[a] = {}),
                        m = g.resizer = function (t) {
                            var e = document.createElement("div"),
                                n = r + "size-monitor",
                                i = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                            e.style.cssText = i, e.className = n, e.innerHTML = '<div class="' + n + '-expand" style="' + i + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + i + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                            var a = e.childNodes[0],
                                o = e.childNodes[1];
                            e._reset = function () {
                                a.scrollLeft = 1e6, a.scrollTop = 1e6, o.scrollLeft = 1e6, o.scrollTop = 1e6
                            };
                            var s = function () {
                                e._reset(), t()
                            };
                            return h(a, "scroll", s.bind(a, "expand")), h(o, "scroll", s.bind(o, "shrink")), e
                        }((u = function () {
                            if (g.resizer) return e(p("resize", n))
                        }, d = !1, f = [], function () {
                            f = Array.prototype.slice.call(arguments), c = c || this, d || (d = !0, i.requestAnimFrame.call(window, function () {
                                d = !1, u.apply(c, f)
                            }))
                        }));
                    ! function (t, e) {
                        var n = t[a] || (t[a] = {}),
                            r = n.renderProxy = function (t) {
                                t.animationName === s && e()
                            };
                        i.each(l, function (e) {
                            h(t, e, r)
                        }), n.reflow = !!t.offsetParent, t.classList.add(o)
                    }(t, function () {
                        if (g.resizer) {
                            var e = t.parentNode;
                            e && e !== m.parentNode && e.insertBefore(m, e.firstChild), m._reset()
                        }
                    })
                }

                function m(t) {
                    var e = t[a] || {},
                        n = e.resizer;
                    delete e.resizer,
                        function (t) {
                            var e = t[a] || {},
                                n = e.renderProxy;
                            n && (i.each(l, function (e) {
                                f(t, e, n)
                            }), delete e.renderProxy), t.classList.remove(o)
                        }(t), n && n.parentNode && n.parentNode.removeChild(n)
                }
                e.exports = {
                    _enabled: "undefined" != typeof window && "undefined" != typeof document,
                    initialize: function () {
                        var t, e, n, i = "from{opacity:0.99}to{opacity:1}";
                        e = "@-webkit-keyframes " + s + "{" + i + "}@keyframes " + s + "{" + i + "}." + o + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", n = (t = this)._style || document.createElement("style"), t._style || (t._style = n, e = "/* Chart.js */\n" + e, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(e))
                    },
                    acquireContext: function (t, e) {
                        "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                        var n = t && t.getContext && t.getContext("2d");
                        return n && n.canvas === t ? (function (t, e) {
                            var n = t.style,
                                i = t.getAttribute("height"),
                                r = t.getAttribute("width");
                            if (t[a] = {
                                    initial: {
                                        height: i,
                                        width: r,
                                        style: {
                                            display: n.display,
                                            height: n.height,
                                            width: n.width
                                        }
                                    }
                                }, n.display = n.display || "block", null === r || "" === r) {
                                var o = c(t, "width");
                                void 0 !== o && (t.width = o)
                            }
                            if (null === i || "" === i)
                                if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                                else {
                                    var s = c(t, "height");
                                    void 0 !== o && (t.height = s)
                                }
                        }(t, e), n) : null
                    },
                    releaseContext: function (t) {
                        var e = t.canvas;
                        if (e[a]) {
                            var n = e[a].initial;
                            ["height", "width"].forEach(function (t) {
                                var a = n[t];
                                i.isNullOrUndef(a) ? e.removeAttribute(t) : e.setAttribute(t, a)
                            }), i.each(n.style || {}, function (t, n) {
                                e.style[n] = t
                            }), e.width = e.width, delete e[a]
                        }
                    },
                    addEventListener: function (t, e, n) {
                        var r = t.canvas;
                        if ("resize" !== e) {
                            var o = n[a] || (n[a] = {});
                            h(r, e, (o.proxies || (o.proxies = {}))[t.id + "_" + e] = function (e) {
                                n(function (t, e) {
                                    var n = u[t.type] || t.type,
                                        a = i.getRelativePosition(t, e);
                                    return p(n, e, a.x, a.y, t)
                                }(e, t))
                            })
                        } else g(r, n, t)
                    },
                    removeEventListener: function (t, e, n) {
                        var i = t.canvas;
                        if ("resize" !== e) {
                            var r = ((n[a] || {}).proxies || {})[t.id + "_" + e];
                            r && f(i, e, r)
                        } else m(i)
                    }
                }, i.addEvent = h, i.removeEvent = f
            }, {
                46: 46
            }],
            49: [function (t, e, n) {
                "use strict";
                var i = t(46),
                    a = t(47),
                    r = t(48),
                    o = r._enabled ? r : a;
                e.exports = i.extend({
                    initialize: function () {},
                    acquireContext: function () {},
                    releaseContext: function () {},
                    addEventListener: function () {},
                    removeEventListener: function () {}
                }, o)
            }, {
                46: 46,
                47: 47,
                48: 48
            }],
            50: [function (t, e, n) {
                "use strict";
                e.exports = {}, e.exports.filler = t(51), e.exports.legend = t(52), e.exports.title = t(53)
            }, {
                51: 51,
                52: 52,
                53: 53
            }],
            51: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(41),
                    r = t(46);
                i._set("global", {
                    plugins: {
                        filler: {
                            propagate: !0
                        }
                    }
                });
                var o = {
                    dataset: function (t) {
                        var e = t.fill,
                            n = t.chart,
                            i = n.getDatasetMeta(e),
                            a = i && n.isDatasetVisible(e) && i.dataset._children || [],
                            r = a.length || 0;
                        return r ? function (t, e) {
                            return e < r && a[e]._view || null
                        } : null
                    },
                    boundary: function (t) {
                        var e = t.boundary,
                            n = e ? e.x : null,
                            i = e ? e.y : null;
                        return function (t) {
                            return {
                                x: null === n ? t.x : n,
                                y: null === i ? t.y : i
                            }
                        }
                    }
                };

                function s(t, e, n) {
                    var i, a = t._model || {},
                        r = a.fill;
                    if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;
                    if (!0 === r) return "origin";
                    if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;
                    switch (r) {
                        case "bottom":
                            return "start";
                        case "top":
                            return "end";
                        case "zero":
                            return "origin";
                        case "origin":
                        case "start":
                        case "end":
                            return r;
                        default:
                            return !1
                    }
                }

                function l(t) {
                    var e, n = t.el._model || {},
                        i = t.el._scale || {},
                        a = t.fill,
                        r = null;
                    if (isFinite(a)) return null;
                    if ("start" === a ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === a ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePosition ? r = i.getBasePosition() : i.getBasePixel && (r = i.getBasePixel()), null != r) {
                        if (void 0 !== r.x && void 0 !== r.y) return r;
                        if ("number" == typeof r && isFinite(r)) return {
                            x: (e = i.isHorizontal()) ? r : null,
                            y: e ? null : r
                        }
                    }
                    return null
                }

                function u(t, e, n) {
                    var i, a = t[e].fill,
                        r = [e];
                    if (!n) return a;
                    for (; !1 !== a && -1 === r.indexOf(a);) {
                        if (!isFinite(a)) return a;
                        if (!(i = t[a])) return !1;
                        if (i.visible) return a;
                        r.push(a), a = i.fill
                    }
                    return !1
                }

                function c(t) {
                    var e = t.fill,
                        n = "dataset";
                    return !1 === e ? null : (isFinite(e) || (n = "boundary"), o[n](t))
                }

                function d(t) {
                    return t && !t.skip
                }

                function h(t, e, n, i, a) {
                    var o;
                    if (i && a) {
                        for (t.moveTo(e[0].x, e[0].y), o = 1; o < i; ++o) r.canvas.lineTo(t, e[o - 1], e[o]);
                        for (t.lineTo(n[a - 1].x, n[a - 1].y), o = a - 1; o > 0; --o) r.canvas.lineTo(t, n[o], n[o - 1], !0)
                    }
                }
                e.exports = {
                    id: "filler",
                    afterDatasetsUpdate: function (t, e) {
                        var n, i, r, o, d = (t.data.datasets || []).length,
                            h = e.propagate,
                            f = [];
                        for (i = 0; i < d; ++i) o = null, (r = (n = t.getDatasetMeta(i)).dataset) && r._model && r instanceof a.Line && (o = {
                            visible: t.isDatasetVisible(i),
                            fill: s(r, i, d),
                            chart: t,
                            el: r
                        }), n.$filler = o, f.push(o);
                        for (i = 0; i < d; ++i)(o = f[i]) && (o.fill = u(f, i, h), o.boundary = l(o), o.mapper = c(o))
                    },
                    beforeDatasetDraw: function (t, e) {
                        var n = e.meta.$filler;
                        if (n) {
                            var a = t.ctx,
                                o = n.el,
                                s = o._view,
                                l = o._children || [],
                                u = n.mapper,
                                c = s.backgroundColor || i.global.defaultColor;
                            u && c && l.length && (r.canvas.clipArea(a, t.chartArea), function (t, e, n, i, a, r) {
                                var o, s, l, u, c, f, p, g = e.length,
                                    m = i.spanGaps,
                                    v = [],
                                    b = [],
                                    y = 0,
                                    x = 0;
                                for (t.beginPath(), o = 0, s = g + !!r; o < s; ++o) c = n(u = e[l = o % g]._view, l, i), f = d(u), p = d(c), f && p ? (y = v.push(u), x = b.push(c)) : y && x && (m ? (f && v.push(u), p && b.push(c)) : (h(t, v, b, y, x), y = x = 0, v = [], b = []));
                                h(t, v, b, y, x), t.closePath(), t.fillStyle = a, t.fill()
                            }(a, l, u, s, c, o._loop), r.canvas.unclipArea(a))
                        }
                    }
                }
            }, {
                26: 26,
                41: 41,
                46: 46
            }],
            52: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(27),
                    r = t(46),
                    o = t(31),
                    s = r.noop;

                function l(t, e) {
                    return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
                }
                i._set("global", {
                    legend: {
                        display: !0,
                        position: "top",
                        fullWidth: !0,
                        reverse: !1,
                        weight: 1e3,
                        onClick: function (t, e) {
                            var n = e.datasetIndex,
                                i = this.chart,
                                a = i.getDatasetMeta(n);
                            a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update()
                        },
                        onHover: null,
                        labels: {
                            boxWidth: 40,
                            padding: 10,
                            generateLabels: function (t) {
                                var e = t.data;
                                return r.isArray(e.datasets) ? e.datasets.map(function (e, n) {
                                    return {
                                        text: e.label,
                                        fillStyle: r.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                        hidden: !t.isDatasetVisible(n),
                                        lineCap: e.borderCapStyle,
                                        lineDash: e.borderDash,
                                        lineDashOffset: e.borderDashOffset,
                                        lineJoin: e.borderJoinStyle,
                                        lineWidth: e.borderWidth,
                                        strokeStyle: e.borderColor,
                                        pointStyle: e.pointStyle,
                                        datasetIndex: n
                                    }
                                }, this) : []
                            }
                        }
                    },
                    legendCallback: function (t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        for (var n = 0; n < t.data.datasets.length; n++) e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    }
                });
                var u = a.extend({
                    initialize: function (t) {
                        r.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                    },
                    beforeUpdate: s,
                    update: function (t, e, n) {
                        var i = this;
                        return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                    },
                    afterUpdate: s,
                    beforeSetDimensions: s,
                    setDimensions: function () {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: s,
                    beforeBuildLabels: s,
                    buildLabels: function () {
                        var t = this,
                            e = t.options.labels || {},
                            n = r.callback(e.generateLabels, [t.chart], t) || [];
                        e.filter && (n = n.filter(function (n) {
                            return e.filter(n, t.chart.data)
                        })), t.options.reverse && n.reverse(), t.legendItems = n
                    },
                    afterBuildLabels: s,
                    beforeFit: s,
                    fit: function () {
                        var t = this,
                            e = t.options,
                            n = e.labels,
                            a = e.display,
                            o = t.ctx,
                            s = i.global,
                            u = r.valueOrDefault,
                            c = u(n.fontSize, s.defaultFontSize),
                            d = u(n.fontStyle, s.defaultFontStyle),
                            h = u(n.fontFamily, s.defaultFontFamily),
                            f = r.fontString(c, d, h),
                            p = t.legendHitBoxes = [],
                            g = t.minSize,
                            m = t.isHorizontal();
                        if (m ? (g.width = t.maxWidth, g.height = a ? 10 : 0) : (g.width = a ? 10 : 0, g.height = t.maxHeight), a)
                            if (o.font = f, m) {
                                var v = t.lineWidths = [0],
                                    b = t.legendItems.length ? c + n.padding : 0;
                                o.textAlign = "left", o.textBaseline = "top", r.each(t.legendItems, function (e, i) {
                                    var a = l(n, c) + c / 2 + o.measureText(e.text).width;
                                    v[v.length - 1] + a + n.padding >= t.width && (b += c + n.padding, v[v.length] = t.left), p[i] = {
                                        left: 0,
                                        top: 0,
                                        width: a,
                                        height: c
                                    }, v[v.length - 1] += a + n.padding
                                }), g.height += b
                            } else {
                                var y = n.padding,
                                    x = t.columnWidths = [],
                                    w = n.padding,
                                    k = 0,
                                    C = 0,
                                    S = c + y;
                                r.each(t.legendItems, function (t, e) {
                                    var i = l(n, c) + c / 2 + o.measureText(t.text).width;
                                    C + S > g.height && (w += k + n.padding, x.push(k), k = 0, C = 0), k = Math.max(k, i), C += S, p[e] = {
                                        left: 0,
                                        top: 0,
                                        width: i,
                                        height: c
                                    }
                                }), w += k, x.push(k), g.width += w
                            } t.width = g.width, t.height = g.height
                    },
                    afterFit: s,
                    isHorizontal: function () {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    draw: function () {
                        var t = this,
                            e = t.options,
                            n = e.labels,
                            a = i.global,
                            o = a.elements.line,
                            s = t.width,
                            u = t.lineWidths;
                        if (e.display) {
                            var c, d = t.ctx,
                                h = r.valueOrDefault,
                                f = h(n.fontColor, a.defaultFontColor),
                                p = h(n.fontSize, a.defaultFontSize),
                                g = h(n.fontStyle, a.defaultFontStyle),
                                m = h(n.fontFamily, a.defaultFontFamily),
                                v = r.fontString(p, g, m);
                            d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = f, d.fillStyle = f, d.font = v;
                            var b = l(n, p),
                                y = t.legendHitBoxes,
                                x = t.isHorizontal();
                            c = x ? {
                                x: t.left + (s - u[0]) / 2,
                                y: t.top + n.padding,
                                line: 0
                            } : {
                                x: t.left + n.padding,
                                y: t.top + n.padding,
                                line: 0
                            };
                            var w = p + n.padding;
                            r.each(t.legendItems, function (i, l) {
                                var f = d.measureText(i.text).width,
                                    g = b + p / 2 + f,
                                    m = c.x,
                                    v = c.y;
                                x ? m + g >= s && (v = c.y += w, c.line++, m = c.x = t.left + (s - u[c.line]) / 2) : v + w > t.bottom && (m = c.x = m + t.columnWidths[c.line] + n.padding, v = c.y = t.top + n.padding, c.line++),
                                    function (t, n, i) {
                                        if (!(isNaN(b) || b <= 0)) {
                                            d.save(), d.fillStyle = h(i.fillStyle, a.defaultColor), d.lineCap = h(i.lineCap, o.borderCapStyle), d.lineDashOffset = h(i.lineDashOffset, o.borderDashOffset), d.lineJoin = h(i.lineJoin, o.borderJoinStyle), d.lineWidth = h(i.lineWidth, o.borderWidth), d.strokeStyle = h(i.strokeStyle, a.defaultColor);
                                            var s = 0 === h(i.lineWidth, o.borderWidth);
                                            if (d.setLineDash && d.setLineDash(h(i.lineDash, o.borderDash)), e.labels && e.labels.usePointStyle) {
                                                var l = p * Math.SQRT2 / 2,
                                                    u = l / Math.SQRT2,
                                                    c = t + u,
                                                    f = n + u;
                                                r.canvas.drawPoint(d, i.pointStyle, l, c, f)
                                            } else s || d.strokeRect(t, n, b, p), d.fillRect(t, n, b, p);
                                            d.restore()
                                        }
                                    }(m, v, i), y[l].left = m, y[l].top = v,
                                    function (t, e, n, i) {
                                        var a = p / 2,
                                            r = b + a + t,
                                            o = e + a;
                                        d.fillText(n.text, r, o), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(r, o), d.lineTo(r + i, o), d.stroke())
                                    }(m, v, i, f), x ? c.x += g + n.padding : c.y += w
                            })
                        }
                    },
                    handleEvent: function (t) {
                        var e = this,
                            n = e.options,
                            i = "mouseup" === t.type ? "click" : t.type,
                            a = !1;
                        if ("mousemove" === i) {
                            if (!n.onHover) return
                        } else {
                            if ("click" !== i) return;
                            if (!n.onClick) return
                        }
                        var r = t.x,
                            o = t.y;
                        if (r >= e.left && r <= e.right && o >= e.top && o <= e.bottom)
                            for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                                var u = s[l];
                                if (r >= u.left && r <= u.left + u.width && o >= u.top && o <= u.top + u.height) {
                                    if ("click" === i) {
                                        n.onClick.call(e, t.native, e.legendItems[l]), a = !0;
                                        break
                                    }
                                    if ("mousemove" === i) {
                                        n.onHover.call(e, t.native, e.legendItems[l]), a = !0;
                                        break
                                    }
                                }
                            }
                        return a
                    }
                });

                function c(t, e) {
                    var n = new u({
                        ctx: t.ctx,
                        options: e,
                        chart: t
                    });
                    o.configure(t, n, e), o.addBox(t, n), t.legend = n
                }
                e.exports = {
                    id: "legend",
                    _element: u,
                    beforeInit: function (t) {
                        var e = t.options.legend;
                        e && c(t, e)
                    },
                    beforeUpdate: function (t) {
                        var e = t.options.legend,
                            n = t.legend;
                        e ? (r.mergeIf(e, i.global.legend), n ? (o.configure(t, n, e), n.options = e) : c(t, e)) : n && (o.removeBox(t, n), delete t.legend)
                    },
                    afterEvent: function (t, e) {
                        var n = t.legend;
                        n && n.handleEvent(e)
                    }
                }
            }, {
                26: 26,
                27: 27,
                31: 31,
                46: 46
            }],
            53: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(27),
                    r = t(46),
                    o = t(31),
                    s = r.noop;
                i._set("global", {
                    title: {
                        display: !1,
                        fontStyle: "bold",
                        fullWidth: !0,
                        lineHeight: 1.2,
                        padding: 10,
                        position: "top",
                        text: "",
                        weight: 2e3
                    }
                });
                var l = a.extend({
                    initialize: function (t) {
                        r.extend(this, t), this.legendHitBoxes = []
                    },
                    beforeUpdate: s,
                    update: function (t, e, n) {
                        var i = this;
                        return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                    },
                    afterUpdate: s,
                    beforeSetDimensions: s,
                    setDimensions: function () {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: s,
                    beforeBuildLabels: s,
                    buildLabels: s,
                    afterBuildLabels: s,
                    beforeFit: s,
                    fit: function () {
                        var t = this,
                            e = r.valueOrDefault,
                            n = t.options,
                            a = n.display,
                            o = e(n.fontSize, i.global.defaultFontSize),
                            s = t.minSize,
                            l = r.isArray(n.text) ? n.text.length : 1,
                            u = r.options.toLineHeight(n.lineHeight, o),
                            c = a ? l * u + 2 * n.padding : 0;
                        t.isHorizontal() ? (s.width = t.maxWidth, s.height = c) : (s.width = c, s.height = t.maxHeight), t.width = s.width, t.height = s.height
                    },
                    afterFit: s,
                    isHorizontal: function () {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    draw: function () {
                        var t = this,
                            e = t.ctx,
                            n = r.valueOrDefault,
                            a = t.options,
                            o = i.global;
                        if (a.display) {
                            var s, l, u, c = n(a.fontSize, o.defaultFontSize),
                                d = n(a.fontStyle, o.defaultFontStyle),
                                h = n(a.fontFamily, o.defaultFontFamily),
                                f = r.fontString(c, d, h),
                                p = r.options.toLineHeight(a.lineHeight, c),
                                g = p / 2 + a.padding,
                                m = 0,
                                v = t.top,
                                b = t.left,
                                y = t.bottom,
                                x = t.right;
                            e.fillStyle = n(a.fontColor, o.defaultFontColor), e.font = f, t.isHorizontal() ? (l = b + (x - b) / 2, u = v + g, s = x - b) : (l = "left" === a.position ? b + g : x - g, u = v + (y - v) / 2, s = y - v, m = Math.PI * ("left" === a.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(m), e.textAlign = "center", e.textBaseline = "middle";
                            var w = a.text;
                            if (r.isArray(w))
                                for (var k = 0, C = 0; C < w.length; ++C) e.fillText(w[C], 0, k, s), k += p;
                            else e.fillText(w, 0, 0, s);
                            e.restore()
                        }
                    }
                });

                function u(t, e) {
                    var n = new l({
                        ctx: t.ctx,
                        options: e,
                        chart: t
                    });
                    o.configure(t, n, e), o.addBox(t, n), t.titleBlock = n
                }
                e.exports = {
                    id: "title",
                    _element: l,
                    beforeInit: function (t) {
                        var e = t.options.title;
                        e && u(t, e)
                    },
                    beforeUpdate: function (t) {
                        var e = t.options.title,
                            n = t.titleBlock;
                        e ? (r.mergeIf(e, i.global.title), n ? (o.configure(t, n, e), n.options = e) : u(t, e)) : n && (o.removeBox(t, n), delete t.titleBlock)
                    }
                }
            }, {
                26: 26,
                27: 27,
                31: 31,
                46: 46
            }],
            54: [function (t, e, n) {
                "use strict";
                var i = t(33),
                    a = t(34);
                e.exports = function () {
                    var t = i.extend({
                        getLabels: function () {
                            var t = this.chart.data;
                            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                        },
                        determineDataLimits: function () {
                            var t, e = this,
                                n = e.getLabels();
                            e.minIndex = 0, e.maxIndex = n.length - 1, void 0 !== e.options.ticks.min && (t = n.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = n.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = n[e.minIndex], e.max = n[e.maxIndex]
                        },
                        buildTicks: function () {
                            var t = this,
                                e = t.getLabels();
                            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                        },
                        getLabelForIndex: function (t, e) {
                            var n = this,
                                i = n.chart.data,
                                a = n.isHorizontal();
                            return i.yLabels && !a ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex]
                        },
                        getPixelForValue: function (t, e) {
                            var n, i = this,
                                a = i.options.offset,
                                r = Math.max(i.maxIndex + 1 - i.minIndex - (a ? 0 : 1), 1);
                            if (null != t && (n = i.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) {
                                t = n || t;
                                var o = i.getLabels().indexOf(t);
                                e = -1 !== o ? o : e
                            }
                            if (i.isHorizontal()) {
                                var s = i.width / r,
                                    l = s * (e - i.minIndex);
                                return a && (l += s / 2), i.left + Math.round(l)
                            }
                            var u = i.height / r,
                                c = u * (e - i.minIndex);
                            return a && (c += u / 2), i.top + Math.round(c)
                        },
                        getPixelForTick: function (t) {
                            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                        },
                        getValueForPixel: function (t) {
                            var e = this,
                                n = e.options.offset,
                                i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                                a = e.isHorizontal(),
                                r = (a ? e.width : e.height) / i;
                            return t -= a ? e.left : e.top, n && (t -= r / 2), (t <= 0 ? 0 : Math.round(t / r)) + e.minIndex
                        },
                        getBasePixel: function () {
                            return this.bottom
                        }
                    });
                    a.registerScaleType("category", t, {
                        position: "bottom"
                    })
                }
            }, {
                33: 33,
                34: 34
            }],
            55: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(46),
                    r = t(34),
                    o = t(35);
                e.exports = function (t) {
                    var e = {
                            position: "left",
                            ticks: {
                                callback: o.formatters.linear
                            }
                        },
                        n = t.LinearScaleBase.extend({
                            determineDataLimits: function () {
                                var t = this,
                                    e = t.options,
                                    n = t.chart,
                                    i = n.data.datasets,
                                    r = t.isHorizontal();

                                function o(e) {
                                    return r ? e.xAxisID === t.id : e.yAxisID === t.id
                                }
                                t.min = null, t.max = null;
                                var s = e.stacked;
                                if (void 0 === s && a.each(i, function (t, e) {
                                        if (!s) {
                                            var i = n.getDatasetMeta(e);
                                            n.isDatasetVisible(e) && o(i) && void 0 !== i.stack && (s = !0)
                                        }
                                    }), e.stacked || s) {
                                    var l = {};
                                    a.each(i, function (i, r) {
                                        var s = n.getDatasetMeta(r),
                                            u = [s.type, void 0 === e.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                        void 0 === l[u] && (l[u] = {
                                            positiveValues: [],
                                            negativeValues: []
                                        });
                                        var c = l[u].positiveValues,
                                            d = l[u].negativeValues;
                                        n.isDatasetVisible(r) && o(s) && a.each(i.data, function (n, i) {
                                            var a = +t.getRightValue(n);
                                            isNaN(a) || s.data[i].hidden || (c[i] = c[i] || 0, d[i] = d[i] || 0, e.relativePoints ? c[i] = 100 : a < 0 ? d[i] += a : c[i] += a)
                                        })
                                    }), a.each(l, function (e) {
                                        var n = e.positiveValues.concat(e.negativeValues),
                                            i = a.min(n),
                                            r = a.max(n);
                                        t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? r : Math.max(t.max, r)
                                    })
                                } else a.each(i, function (e, i) {
                                    var r = n.getDatasetMeta(i);
                                    n.isDatasetVisible(i) && o(r) && a.each(e.data, function (e, n) {
                                        var i = +t.getRightValue(e);
                                        isNaN(i) || r.data[n].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i))
                                    })
                                });
                                t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
                            },
                            getTickLimit: function () {
                                var t, e = this.options.ticks;
                                if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                                else {
                                    var n = a.valueOrDefault(e.fontSize, i.global.defaultFontSize);
                                    t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * n)))
                                }
                                return t
                            },
                            handleDirectionalChanges: function () {
                                this.isHorizontal() || this.ticks.reverse()
                            },
                            getLabelForIndex: function (t, e) {
                                return +this.getRightValue(this.chart.data.datasets[e].data[t])
                            },
                            getPixelForValue: function (t) {
                                var e = this,
                                    n = e.start,
                                    i = +e.getRightValue(t),
                                    a = e.end - n;
                                return e.isHorizontal() ? e.left + e.width / a * (i - n) : e.bottom - e.height / a * (i - n)
                            },
                            getValueForPixel: function (t) {
                                var e = this,
                                    n = e.isHorizontal(),
                                    i = n ? e.width : e.height,
                                    a = (n ? t - e.left : e.bottom - t) / i;
                                return e.start + (e.end - e.start) * a
                            },
                            getPixelForTick: function (t) {
                                return this.getPixelForValue(this.ticksAsNumbers[t])
                            }
                        });
                    r.registerScaleType("linear", n, e)
                }
            }, {
                26: 26,
                34: 34,
                35: 35,
                46: 46
            }],
            56: [function (t, e, n) {
                "use strict";
                var i = t(46),
                    a = t(33);
                e.exports = function (t) {
                    var e = i.noop;
                    t.LinearScaleBase = a.extend({
                        getRightValue: function (t) {
                            return "string" == typeof t ? +t : a.prototype.getRightValue.call(this, t)
                        },
                        handleTickRangeOptions: function () {
                            var t = this,
                                e = t.options.ticks;
                            if (e.beginAtZero) {
                                var n = i.sign(t.min),
                                    a = i.sign(t.max);
                                n < 0 && a < 0 ? t.max = 0 : n > 0 && a > 0 && (t.min = 0)
                            }
                            var r = void 0 !== e.min || void 0 !== e.suggestedMin,
                                o = void 0 !== e.max || void 0 !== e.suggestedMax;
                            void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), r !== o && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                        },
                        getTickLimit: e,
                        handleDirectionalChanges: e,
                        buildTicks: function () {
                            var t = this,
                                e = t.options.ticks,
                                n = t.getTickLimit(),
                                a = {
                                    maxTicks: n = Math.max(2, n),
                                    min: e.min,
                                    max: e.max,
                                    precision: e.precision,
                                    stepSize: i.valueOrDefault(e.fixedStepSize, e.stepSize)
                                },
                                r = t.ticks = function (t, e) {
                                    var n, a, r, o = [];
                                    if (t.stepSize && t.stepSize > 0) r = t.stepSize;
                                    else {
                                        var s = i.niceNum(e.max - e.min, !1);
                                        r = i.niceNum(s / (t.maxTicks - 1), !0), void 0 !== (a = t.precision) && (n = Math.pow(10, a), r = Math.ceil(r * n) / n)
                                    }
                                    var l = Math.floor(e.min / r) * r,
                                        u = Math.ceil(e.max / r) * r;
                                    i.isNullOrUndef(t.min) || i.isNullOrUndef(t.max) || !t.stepSize || i.almostWhole((t.max - t.min) / t.stepSize, r / 1e3) && (l = t.min, u = t.max);
                                    var c = (u - l) / r;
                                    c = i.almostEquals(c, Math.round(c), r / 1e3) ? Math.round(c) : Math.ceil(c), a = 1, r < 1 && (a = Math.pow(10, 1 - Math.floor(i.log10(r))), l = Math.round(l * a) / a, u = Math.round(u * a) / a), o.push(void 0 !== t.min ? t.min : l);
                                    for (var d = 1; d < c; ++d) o.push(Math.round((l + d * r) * a) / a);
                                    return o.push(void 0 !== t.max ? t.max : u), o
                                }(a, t);
                            t.handleDirectionalChanges(), t.max = i.max(r), t.min = i.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                        },
                        convertTicksToLabels: function () {
                            var t = this;
                            t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), a.prototype.convertTicksToLabels.call(t)
                        }
                    })
                }
            }, {
                33: 33,
                46: 46
            }],
            57: [function (t, e, n) {
                "use strict";
                var i = t(46),
                    a = t(33),
                    r = t(34),
                    o = t(35);
                e.exports = function (t) {
                    var e = {
                            position: "left",
                            ticks: {
                                callback: o.formatters.logarithmic
                            }
                        },
                        n = a.extend({
                            determineDataLimits: function () {
                                var t = this,
                                    e = t.options,
                                    n = t.chart,
                                    a = n.data.datasets,
                                    r = t.isHorizontal();

                                function o(e) {
                                    return r ? e.xAxisID === t.id : e.yAxisID === t.id
                                }
                                t.min = null, t.max = null, t.minNotZero = null;
                                var s = e.stacked;
                                if (void 0 === s && i.each(a, function (t, e) {
                                        if (!s) {
                                            var i = n.getDatasetMeta(e);
                                            n.isDatasetVisible(e) && o(i) && void 0 !== i.stack && (s = !0)
                                        }
                                    }), e.stacked || s) {
                                    var l = {};
                                    i.each(a, function (a, r) {
                                        var s = n.getDatasetMeta(r),
                                            u = [s.type, void 0 === e.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                        n.isDatasetVisible(r) && o(s) && (void 0 === l[u] && (l[u] = []), i.each(a.data, function (e, n) {
                                            var i = l[u],
                                                a = +t.getRightValue(e);
                                            isNaN(a) || s.data[n].hidden || a < 0 || (i[n] = i[n] || 0, i[n] += a)
                                        }))
                                    }), i.each(l, function (e) {
                                        if (e.length > 0) {
                                            var n = i.min(e),
                                                a = i.max(e);
                                            t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? a : Math.max(t.max, a)
                                        }
                                    })
                                } else i.each(a, function (e, a) {
                                    var r = n.getDatasetMeta(a);
                                    n.isDatasetVisible(a) && o(r) && i.each(e.data, function (e, n) {
                                        var i = +t.getRightValue(e);
                                        isNaN(i) || r.data[n].hidden || i < 0 || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i), 0 !== i && (null === t.minNotZero || i < t.minNotZero) && (t.minNotZero = i))
                                    })
                                });
                                this.handleTickRangeOptions()
                            },
                            handleTickRangeOptions: function () {
                                var t = this,
                                    e = t.options.ticks,
                                    n = i.valueOrDefault;
                                t.min = n(e.min, t.min), t.max = n(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(i.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(i.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(i.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(i.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(i.log10(t.max))) : t.minNotZero = 1)
                            },
                            buildTicks: function () {
                                var t = this,
                                    e = t.options.ticks,
                                    n = !t.isHorizontal(),
                                    a = {
                                        min: e.min,
                                        max: e.max
                                    },
                                    r = t.ticks = function (t, e) {
                                        var n, a, r = [],
                                            o = i.valueOrDefault,
                                            s = o(t.min, Math.pow(10, Math.floor(i.log10(e.min)))),
                                            l = Math.floor(i.log10(e.max)),
                                            u = Math.ceil(e.max / Math.pow(10, l));
                                        0 === s ? (n = Math.floor(i.log10(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, n)), r.push(s), s = a * Math.pow(10, n)) : (n = Math.floor(i.log10(s)), a = Math.floor(s / Math.pow(10, n)));
                                        var c = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                                        do {
                                            r.push(s), 10 == ++a && (a = 1, c = ++n >= 0 ? 1 : c), s = Math.round(a * Math.pow(10, n) * c) / c
                                        } while (n < l || n === l && a < u);
                                        var d = o(t.max, s);
                                        return r.push(d), r
                                    }(a, t);
                                t.max = i.max(r), t.min = i.min(r), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && r.reverse()
                            },
                            convertTicksToLabels: function () {
                                this.tickValues = this.ticks.slice(), a.prototype.convertTicksToLabels.call(this)
                            },
                            getLabelForIndex: function (t, e) {
                                return +this.getRightValue(this.chart.data.datasets[e].data[t])
                            },
                            getPixelForTick: function (t) {
                                return this.getPixelForValue(this.tickValues[t])
                            },
                            _getFirstTickValue: function (t) {
                                var e = Math.floor(i.log10(t));
                                return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                            },
                            getPixelForValue: function (e) {
                                var n, a, r, o, s, l = this,
                                    u = l.options.ticks.reverse,
                                    c = i.log10,
                                    d = l._getFirstTickValue(l.minNotZero),
                                    h = 0;
                                return e = +l.getRightValue(e), u ? (r = l.end, o = l.start, s = -1) : (r = l.start, o = l.end, s = 1), l.isHorizontal() ? (n = l.width, a = u ? l.right : l.left) : (n = l.height, s *= -1, a = u ? l.top : l.bottom), e !== r && (0 === r && (n -= h = i.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), r = d), 0 !== e && (h += n / (c(o) - c(r)) * (c(e) - c(r))), a += s * h), a
                            },
                            getValueForPixel: function (e) {
                                var n, a, r, o, s = this,
                                    l = s.options.ticks.reverse,
                                    u = i.log10,
                                    c = s._getFirstTickValue(s.minNotZero);
                                if (l ? (a = s.end, r = s.start) : (a = s.start, r = s.end), s.isHorizontal() ? (n = s.width, o = l ? s.right - e : e - s.left) : (n = s.height, o = l ? e - s.top : s.bottom - e), o !== a) {
                                    if (0 === a) {
                                        var d = i.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                                        o -= d, n -= d, a = c
                                    }
                                    o *= u(r) - u(a), o /= n, o = Math.pow(10, u(a) + o)
                                }
                                return o
                            }
                        });
                    r.registerScaleType("logarithmic", n, e)
                }
            }, {
                33: 33,
                34: 34,
                35: 35,
                46: 46
            }],
            58: [function (t, e, n) {
                "use strict";
                var i = t(26),
                    a = t(46),
                    r = t(34),
                    o = t(35);
                e.exports = function (t) {
                    var e = i.global,
                        n = {
                            display: !0,
                            animate: !0,
                            position: "chartArea",
                            angleLines: {
                                display: !0,
                                color: "rgba(0, 0, 0, 0.1)",
                                lineWidth: 1
                            },
                            gridLines: {
                                circular: !1
                            },
                            ticks: {
                                showLabelBackdrop: !0,
                                backdropColor: "rgba(255,255,255,0.75)",
                                backdropPaddingY: 2,
                                backdropPaddingX: 2,
                                callback: o.formatters.linear
                            },
                            pointLabels: {
                                display: !0,
                                fontSize: 10,
                                callback: function (t) {
                                    return t
                                }
                            }
                        };

                    function s(t) {
                        var e = t.options;
                        return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                    }

                    function l(t) {
                        var n = t.options.pointLabels,
                            i = a.valueOrDefault(n.fontSize, e.defaultFontSize),
                            r = a.valueOrDefault(n.fontStyle, e.defaultFontStyle),
                            o = a.valueOrDefault(n.fontFamily, e.defaultFontFamily);
                        return {
                            size: i,
                            style: r,
                            family: o,
                            font: a.fontString(i, r, o)
                        }
                    }

                    function u(t, e, n, i, a) {
                        return t === i || t === a ? {
                            start: e - n / 2,
                            end: e + n / 2
                        } : t < i || t > a ? {
                            start: e - n - 5,
                            end: e
                        } : {
                            start: e,
                            end: e + n + 5
                        }
                    }

                    function c(t) {
                        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
                    }

                    function d(t, e, n, i) {
                        if (a.isArray(e))
                            for (var r = n.y, o = 1.5 * i, s = 0; s < e.length; ++s) t.fillText(e[s], n.x, r), r += o;
                        else t.fillText(e, n.x, n.y)
                    }

                    function h(t, e, n) {
                        90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
                    }

                    function f(t) {
                        return a.isNumber(t) ? t : 0
                    }
                    var p = t.LinearScaleBase.extend({
                        setDimensions: function () {
                            var t = this,
                                n = t.options,
                                i = n.ticks;
                            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                            var r = a.min([t.height, t.width]),
                                o = a.valueOrDefault(i.fontSize, e.defaultFontSize);
                            t.drawingArea = n.display ? r / 2 - (o / 2 + i.backdropPaddingY) : r / 2
                        },
                        determineDataLimits: function () {
                            var t = this,
                                e = t.chart,
                                n = Number.POSITIVE_INFINITY,
                                i = Number.NEGATIVE_INFINITY;
                            a.each(e.data.datasets, function (r, o) {
                                if (e.isDatasetVisible(o)) {
                                    var s = e.getDatasetMeta(o);
                                    a.each(r.data, function (e, a) {
                                        var r = +t.getRightValue(e);
                                        isNaN(r) || s.data[a].hidden || (n = Math.min(r, n), i = Math.max(r, i))
                                    })
                                }
                            }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions()
                        },
                        getTickLimit: function () {
                            var t = this.options.ticks,
                                n = a.valueOrDefault(t.fontSize, e.defaultFontSize);
                            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)))
                        },
                        convertTicksToLabels: function () {
                            var e = this;
                            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                        },
                        getLabelForIndex: function (t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        fit: function () {
                            var t, e;
                            this.options.pointLabels.display ? function (t) {
                                var e, n, i, r = l(t),
                                    o = Math.min(t.height / 2, t.width / 2),
                                    c = {
                                        r: t.width,
                                        l: 0,
                                        t: t.height,
                                        b: 0
                                    },
                                    d = {};
                                t.ctx.font = r.font, t._pointLabelSizes = [];
                                var h, f, p, g = s(t);
                                for (e = 0; e < g; e++) {
                                    i = t.getPointPosition(e, o), h = t.ctx, f = r.size, p = t.pointLabels[e] || "", n = a.isArray(p) ? {
                                        w: a.longestText(h, h.font, p),
                                        h: p.length * f + 1.5 * (p.length - 1) * f
                                    } : {
                                        w: h.measureText(p).width,
                                        h: f
                                    }, t._pointLabelSizes[e] = n;
                                    var m = t.getIndexAngle(e),
                                        v = a.toDegrees(m) % 360,
                                        b = u(v, i.x, n.w, 0, 180),
                                        y = u(v, i.y, n.h, 90, 270);
                                    b.start < c.l && (c.l = b.start, d.l = m), b.end > c.r && (c.r = b.end, d.r = m), y.start < c.t && (c.t = y.start, d.t = m), y.end > c.b && (c.b = y.end, d.b = m)
                                }
                                t.setReductions(o, c, d)
                            }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
                        },
                        setReductions: function (t, e, n) {
                            var i = e.l / Math.sin(n.l),
                                a = Math.max(e.r - this.width, 0) / Math.sin(n.r),
                                r = -e.t / Math.cos(n.t),
                                o = -Math.max(e.b - this.height, 0) / Math.cos(n.b);
                            i = f(i), a = f(a), r = f(r), o = f(o), this.drawingArea = Math.min(Math.round(t - (i + a) / 2), Math.round(t - (r + o) / 2)), this.setCenterPoint(i, a, r, o)
                        },
                        setCenterPoint: function (t, e, n, i) {
                            var a = this,
                                r = a.width - e - a.drawingArea,
                                o = t + a.drawingArea,
                                s = n + a.drawingArea,
                                l = a.height - i - a.drawingArea;
                            a.xCenter = Math.round((o + r) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top)
                        },
                        getIndexAngle: function (t) {
                            return t * (2 * Math.PI / s(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                        },
                        getDistanceFromCenterForValue: function (t) {
                            var e = this;
                            if (null === t) return 0;
                            var n = e.drawingArea / (e.max - e.min);
                            return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
                        },
                        getPointPosition: function (t, e) {
                            var n = this.getIndexAngle(t) - Math.PI / 2;
                            return {
                                x: Math.round(Math.cos(n) * e) + this.xCenter,
                                y: Math.round(Math.sin(n) * e) + this.yCenter
                            }
                        },
                        getPointPositionForValue: function (t, e) {
                            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                        },
                        getBasePosition: function () {
                            var t = this.min,
                                e = this.max;
                            return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0)
                        },
                        draw: function () {
                            var t = this,
                                n = t.options,
                                i = n.gridLines,
                                r = n.ticks,
                                o = a.valueOrDefault;
                            if (n.display) {
                                var u = t.ctx,
                                    f = this.getIndexAngle(0),
                                    p = o(r.fontSize, e.defaultFontSize),
                                    g = o(r.fontStyle, e.defaultFontStyle),
                                    m = o(r.fontFamily, e.defaultFontFamily),
                                    v = a.fontString(p, g, m);
                                a.each(t.ticks, function (n, l) {
                                    if (l > 0 || r.reverse) {
                                        var c = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]);
                                        if (i.display && 0 !== l && function (t, e, n, i) {
                                                var r = t.ctx;
                                                if (r.strokeStyle = a.valueAtIndexOrDefault(e.color, i - 1), r.lineWidth = a.valueAtIndexOrDefault(e.lineWidth, i - 1), t.options.gridLines.circular) r.beginPath(), r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI), r.closePath(), r.stroke();
                                                else {
                                                    var o = s(t);
                                                    if (0 === o) return;
                                                    r.beginPath();
                                                    var l = t.getPointPosition(0, n);
                                                    r.moveTo(l.x, l.y);
                                                    for (var u = 1; u < o; u++) l = t.getPointPosition(u, n), r.lineTo(l.x, l.y);
                                                    r.closePath(), r.stroke()
                                                }
                                            }(t, i, c, l), r.display) {
                                            var d = o(r.fontColor, e.defaultFontColor);
                                            if (u.font = v, u.save(), u.translate(t.xCenter, t.yCenter), u.rotate(f), r.showLabelBackdrop) {
                                                var h = u.measureText(n).width;
                                                u.fillStyle = r.backdropColor, u.fillRect(-h / 2 - r.backdropPaddingX, -c - p / 2 - r.backdropPaddingY, h + 2 * r.backdropPaddingX, p + 2 * r.backdropPaddingY)
                                            }
                                            u.textAlign = "center", u.textBaseline = "middle", u.fillStyle = d, u.fillText(n, 0, -c), u.restore()
                                        }
                                    }
                                }), (n.angleLines.display || n.pointLabels.display) && function (t) {
                                    var n = t.ctx,
                                        i = t.options,
                                        r = i.angleLines,
                                        o = i.pointLabels;
                                    n.lineWidth = r.lineWidth, n.strokeStyle = r.color;
                                    var u = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                                        f = l(t);
                                    n.textBaseline = "top";
                                    for (var p = s(t) - 1; p >= 0; p--) {
                                        if (r.display) {
                                            var g = t.getPointPosition(p, u);
                                            n.beginPath(), n.moveTo(t.xCenter, t.yCenter), n.lineTo(g.x, g.y), n.stroke(), n.closePath()
                                        }
                                        if (o.display) {
                                            var m = t.getPointPosition(p, u + 5),
                                                v = a.valueAtIndexOrDefault(o.fontColor, p, e.defaultFontColor);
                                            n.font = f.font, n.fillStyle = v;
                                            var b = t.getIndexAngle(p),
                                                y = a.toDegrees(b);
                                            n.textAlign = c(y), h(y, t._pointLabelSizes[p], m), d(n, t.pointLabels[p] || "", m, f.size)
                                        }
                                    }
                                }(t)
                            }
                        }
                    });
                    r.registerScaleType("radialLinear", p, n)
                }
            }, {
                26: 26,
                34: 34,
                35: 35,
                46: 46
            }],
            59: [function (t, e, n) {
                "use strict";
                var i = t(1);
                i = "function" == typeof i ? i : window.moment;
                var a = t(26),
                    r = t(46),
                    o = t(33),
                    s = t(34),
                    l = Number.MIN_SAFE_INTEGER || -9007199254740991,
                    u = Number.MAX_SAFE_INTEGER || 9007199254740991,
                    c = {
                        millisecond: {
                            common: !0,
                            size: 1,
                            steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                        },
                        second: {
                            common: !0,
                            size: 1e3,
                            steps: [1, 2, 5, 10, 15, 30]
                        },
                        minute: {
                            common: !0,
                            size: 6e4,
                            steps: [1, 2, 5, 10, 15, 30]
                        },
                        hour: {
                            common: !0,
                            size: 36e5,
                            steps: [1, 2, 3, 6, 12]
                        },
                        day: {
                            common: !0,
                            size: 864e5,
                            steps: [1, 2, 5]
                        },
                        week: {
                            common: !1,
                            size: 6048e5,
                            steps: [1, 2, 3, 4]
                        },
                        month: {
                            common: !0,
                            size: 2628e6,
                            steps: [1, 2, 3]
                        },
                        quarter: {
                            common: !1,
                            size: 7884e6,
                            steps: [1, 2, 3, 4]
                        },
                        year: {
                            common: !0,
                            size: 3154e7
                        }
                    },
                    d = Object.keys(c);

                function h(t, e) {
                    return t - e
                }

                function f(t) {
                    var e, n, i, a = {},
                        r = [];
                    for (e = 0, n = t.length; e < n; ++e) a[i = t[e]] || (a[i] = !0, r.push(i));
                    return r
                }

                function p(t, e, n, i) {
                    var a = function (t, e, n) {
                            for (var i, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
                                if (a = t[(i = o + s >> 1) - 1] || null, r = t[i], !a) return {
                                    lo: null,
                                    hi: r
                                };
                                if (r[e] < n) o = i + 1;
                                else {
                                    if (!(a[e] > n)) return {
                                        lo: a,
                                        hi: r
                                    };
                                    s = i - 1
                                }
                            }
                            return {
                                lo: r,
                                hi: null
                            }
                        }(t, e, n),
                        r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
                        o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
                        s = o[e] - r[e],
                        l = s ? (n - r[e]) / s : 0,
                        u = (o[i] - r[i]) * l;
                    return r[i] + u
                }

                function g(t, e) {
                    var n = e.parser,
                        a = e.parser || e.format;
                    return "function" == typeof n ? n(t) : "string" == typeof t && "string" == typeof a ? i(t, a) : (t instanceof i || (t = i(t)), t.isValid() ? t : "function" == typeof a ? a(t) : t)
                }

                function m(t, e) {
                    if (r.isNullOrUndef(t)) return null;
                    var n = e.options.time,
                        i = g(e.getRightValue(t), n);
                    return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null
                }

                function v(t) {
                    for (var e = d.indexOf(t) + 1, n = d.length; e < n; ++e)
                        if (c[d[e]].common) return d[e]
                }

                function b(t, e, n, a) {
                    var o, s = a.time,
                        l = s.unit || function (t, e, n, i) {
                            var a, r, o, s = d.length;
                            for (a = d.indexOf(t); a < s - 1; ++a)
                                if (o = (r = c[d[a]]).steps ? r.steps[r.steps.length - 1] : u, r.common && Math.ceil((n - e) / (o * r.size)) <= i) return d[a];
                            return d[s - 1]
                        }(s.minUnit, t, e, n),
                        h = v(l),
                        f = r.valueOrDefault(s.stepSize, s.unitStepSize),
                        p = "week" === l && s.isoWeekday,
                        g = a.ticks.major.enabled,
                        m = c[l],
                        b = i(t),
                        y = i(e),
                        x = [];
                    for (f || (f = function (t, e, n, i) {
                            var a, r, o, s = e - t,
                                l = c[n],
                                u = l.size,
                                d = l.steps;
                            if (!d) return Math.ceil(s / (i * u));
                            for (a = 0, r = d.length; a < r && (o = d[a], !(Math.ceil(s / (u * o)) <= i)); ++a);
                            return o
                        }(t, e, l, n)), p && (b = b.isoWeekday(p), y = y.isoWeekday(p)), b = b.startOf(p ? "day" : l), (y = y.startOf(p ? "day" : l)) < e && y.add(1, l), o = i(b), g && h && !p && !s.round && (o.startOf(h), o.add(~~((b - o) / (m.size * f)) * f, l)); o < y; o.add(f, l)) x.push(+o);
                    return x.push(+o), x
                }
                e.exports = function () {
                    var t = o.extend({
                        initialize: function () {
                            if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                            this.mergeTicksOptions(), o.prototype.initialize.call(this)
                        },
                        update: function () {
                            var t = this.options;
                            return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), o.prototype.update.apply(this, arguments)
                        },
                        getRightValue: function (t) {
                            return t && void 0 !== t.t && (t = t.t), o.prototype.getRightValue.call(this, t)
                        },
                        determineDataLimits: function () {
                            var t, e, n, a, o, s, c = this,
                                d = c.chart,
                                p = c.options.time,
                                g = p.unit || "day",
                                v = u,
                                b = l,
                                y = [],
                                x = [],
                                w = [];
                            for (t = 0, n = d.data.labels.length; t < n; ++t) w.push(m(d.data.labels[t], c));
                            for (t = 0, n = (d.data.datasets || []).length; t < n; ++t)
                                if (d.isDatasetVisible(t))
                                    if (o = d.data.datasets[t].data, r.isObject(o[0]))
                                        for (x[t] = [], e = 0, a = o.length; e < a; ++e) s = m(o[e], c), y.push(s), x[t][e] = s;
                                    else y.push.apply(y, w), x[t] = w.slice(0);
                            else x[t] = [];
                            w.length && (w = f(w).sort(h), v = Math.min(v, w[0]), b = Math.max(b, w[w.length - 1])), y.length && (y = f(y).sort(h), v = Math.min(v, y[0]), b = Math.max(b, y[y.length - 1])), v = m(p.min, c) || v, b = m(p.max, c) || b, v = v === u ? +i().startOf(g) : v, b = b === l ? +i().endOf(g) + 1 : b, c.min = Math.min(v, b), c.max = Math.max(v + 1, b), c._horizontal = c.isHorizontal(), c._table = [], c._timestamps = {
                                data: y,
                                datasets: x,
                                labels: w
                            }
                        },
                        buildTicks: function () {
                            var t, e, n, a = this,
                                r = a.min,
                                o = a.max,
                                s = a.options,
                                l = s.time,
                                u = [],
                                h = [];
                            switch (s.ticks.source) {
                                case "data":
                                    u = a._timestamps.data;
                                    break;
                                case "labels":
                                    u = a._timestamps.labels;
                                    break;
                                case "auto":
                                default:
                                    u = b(r, o, a.getLabelCapacity(r), s)
                            }
                            for ("ticks" === s.bounds && u.length && (r = u[0], o = u[u.length - 1]), r = m(l.min, a) || r, o = m(l.max, a) || o, t = 0, e = u.length; t < e; ++t)(n = u[t]) >= r && n <= o && h.push(n);
                            return a.min = r, a.max = o, a._unit = l.unit || function (t, e, n, a) {
                                    var r, o, s = i.duration(i(a).diff(i(n)));
                                    for (r = d.length - 1; r >= d.indexOf(e); r--)
                                        if (o = d[r], c[o].common && s.as(o) >= t.length) return o;
                                    return d[e ? d.indexOf(e) : 0]
                                }(h, l.minUnit, a.min, a.max), a._majorUnit = v(a._unit), a._table = function (t, e, n, i) {
                                    if ("linear" === i || !t.length) return [{
                                        time: e,
                                        pos: 0
                                    }, {
                                        time: n,
                                        pos: 1
                                    }];
                                    var a, r, o, s, l, u = [],
                                        c = [e];
                                    for (a = 0, r = t.length; a < r; ++a)(s = t[a]) > e && s < n && c.push(s);
                                    for (c.push(n), a = 0, r = c.length; a < r; ++a) l = c[a + 1], o = c[a - 1], s = c[a], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
                                        time: s,
                                        pos: a / (r - 1)
                                    });
                                    return u
                                }(a._timestamps.data, r, o, s.distribution), a._offsets = function (t, e, n, i, a) {
                                    var r, o, s = 0,
                                        l = 0;
                                    return a.offset && e.length && (a.time.min || (r = e.length > 1 ? e[1] : i, o = e[0], s = (p(t, "time", r, "pos") - p(t, "time", o, "pos")) / 2), a.time.max || (r = e[e.length - 1], o = e.length > 1 ? e[e.length - 2] : n, l = (p(t, "time", r, "pos") - p(t, "time", o, "pos")) / 2)), {
                                        left: s,
                                        right: l
                                    }
                                }(a._table, h, r, o, s), a._labelFormat = function (t, e) {
                                    var n, i, a, r = t.length;
                                    for (n = 0; n < r; n++) {
                                        if (0 !== (i = g(t[n], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                        0 === i.second() && 0 === i.minute() && 0 === i.hour() || (a = !0)
                                    }
                                    return a ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                                }(a._timestamps.data, l),
                                function (t, e) {
                                    var n, a, r, o, s = [];
                                    for (n = 0, a = t.length; n < a; ++n) r = t[n], o = !!e && r === +i(r).startOf(e), s.push({
                                        value: r,
                                        major: o
                                    });
                                    return s
                                }(h, a._majorUnit)
                        },
                        getLabelForIndex: function (t, e) {
                            var n = this.chart.data,
                                i = this.options.time,
                                a = n.labels && t < n.labels.length ? n.labels[t] : "",
                                o = n.datasets[e].data[t];
                            return r.isObject(o) && (a = this.getRightValue(o)), i.tooltipFormat ? g(a, i).format(i.tooltipFormat) : "string" == typeof a ? a : g(a, i).format(this._labelFormat)
                        },
                        tickFormatFunction: function (t, e, n, i) {
                            var a = this.options,
                                o = t.valueOf(),
                                s = a.time.displayFormats,
                                l = s[this._unit],
                                u = this._majorUnit,
                                c = s[u],
                                d = t.clone().startOf(u).valueOf(),
                                h = a.ticks.major,
                                f = h.enabled && u && c && o === d,
                                p = t.format(i || (f ? c : l)),
                                g = f ? h : a.ticks.minor,
                                m = r.valueOrDefault(g.callback, g.userCallback);
                            return m ? m(p, e, n) : p
                        },
                        convertTicksToLabels: function (t) {
                            var e, n, a = [];
                            for (e = 0, n = t.length; e < n; ++e) a.push(this.tickFormatFunction(i(t[e].value), e, t));
                            return a
                        },
                        getPixelForOffset: function (t) {
                            var e = this,
                                n = e._horizontal ? e.width : e.height,
                                i = e._horizontal ? e.left : e.top,
                                a = p(e._table, "time", t, "pos");
                            return i + n * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right)
                        },
                        getPixelForValue: function (t, e, n) {
                            var i = null;
                            if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = m(t, this)), null !== i) return this.getPixelForOffset(i)
                        },
                        getPixelForTick: function (t) {
                            var e = this.getTicks();
                            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                        },
                        getValueForPixel: function (t) {
                            var e = this,
                                n = e._horizontal ? e.width : e.height,
                                a = e._horizontal ? e.left : e.top,
                                r = (n ? (t - a) / n : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                                o = p(e._table, "pos", r, "time");
                            return i(o)
                        },
                        getLabelWidth: function (t) {
                            var e = this.options.ticks,
                                n = this.ctx.measureText(t).width,
                                i = r.toRadians(e.maxRotation),
                                o = Math.cos(i),
                                s = Math.sin(i);
                            return n * o + r.valueOrDefault(e.fontSize, a.global.defaultFontSize) * s
                        },
                        getLabelCapacity: function (t) {
                            var e = this,
                                n = e.options.time.displayFormats.millisecond,
                                a = e.tickFormatFunction(i(t), 0, [], n),
                                r = e.getLabelWidth(a),
                                o = e.isHorizontal() ? e.width : e.height,
                                s = Math.floor(o / r);
                            return s > 0 ? s : 1
                        }
                    });
                    s.registerScaleType("time", t, {
                        position: "bottom",
                        distribution: "linear",
                        bounds: "data",
                        time: {
                            parser: !1,
                            format: !1,
                            unit: !1,
                            round: !1,
                            displayFormat: !1,
                            isoWeekday: !1,
                            minUnit: "millisecond",
                            displayFormats: {
                                millisecond: "h:mm:ss.SSS a",
                                second: "h:mm:ss a",
                                minute: "h:mm a",
                                hour: "hA",
                                day: "MMM D",
                                week: "ll",
                                month: "MMM YYYY",
                                quarter: "[Q]Q - YYYY",
                                year: "YYYY"
                            }
                        },
                        ticks: {
                            autoSkip: !1,
                            source: "auto",
                            major: {
                                enabled: !1
                            }
                        }
                    })
                }
            }, {
                1: 1,
                26: 26,
                33: 33,
                34: 34,
                46: 46
            }]
        }, {}, [7])(7)
    }),
    function (t) {
        WOW = function () {
            return {
                init: function () {
                    var e = [],
                        n = 1;

                    function i() {
                        var n = window.innerHeight,
                            i = window.scrollY;
                        t(".wow").each(function () {
                            if ("visible" != t(this).css("visibility") && (n + i - 100 > a(this) && i < a(this) || n + i - 100 > a(this) + t(this).height() && i < a(this) + t(this).height() || n + i == t(document).height() && a(this) + 100 > t(document).height())) {
                                var r = t(this).index(".wow"),
                                    o = t(this).attr("data-wow-delay");
                                if (o) {
                                    o = t(this).attr("data-wow-delay").slice(0, -1);
                                    var s = this;
                                    parseFloat(o);
                                    t(s).addClass("animated"), t(s).css({
                                        visibility: "visible"
                                    }), t(s).css({
                                        "animation-delay": o
                                    }), t(s).css({
                                        "animation-name": e[r]
                                    });
                                    var l = 1e3 * t(this).css("animation-duration").slice(0, -1);
                                    t(this).attr("data-wow-delay") && (l += 1e3 * t(this).attr("data-wow-delay").slice(0, -1));
                                    s = this;
                                    setTimeout(function () {
                                        t(s).removeClass("animated")
                                    }, l)
                                } else {
                                    t(this).addClass("animated"), t(this).css({
                                        visibility: "visible"
                                    }), t(this).css({
                                        "animation-name": e[r]
                                    });
                                    l = 1e3 * t(this).css("animation-duration").slice(0, -1), s = this;
                                    setTimeout(function () {
                                        t(s).removeClass("animated")
                                    }, l)
                                }
                            }
                        })
                    }

                    function a(t) {
                        var e = t.getBoundingClientRect(),
                            n = document.body,
                            i = document.documentElement,
                            a = window.pageYOffset || i.scrollTop || n.scrollTop,
                            r = i.clientTop || n.clientTop || 0,
                            o = e.top + a - r;
                        return Math.round(o)
                    }
                    t(".wow").each(function () {
                        t(this).css({
                            visibility: "hidden"
                        }), e[t(this).index(".wow")] = t(this).css("animation-name"), t(this).css({
                            "animation-name": "none"
                        })
                    }), t(window).scroll(function () {
                        var e, r;
                        n ? (e = window.innerHeight, r = window.scrollY, t(".wow.animated").each(function () {
                            if (e + r - 100 > a(this) && r > a(this) + 100 || e + r - 100 < a(this) && r < a(this) + 100 || a(this) + t(this).height > t(document).height() - 100) t(this).removeClass("animated"), t(this).css({
                                "animation-name": "none"
                            }), t(this).css({
                                visibility: "hidden"
                            });
                            else {
                                var n = 1e3 * t(this).css("animation-duration").slice(0, -1);
                                t(this).attr("data-wow-delay") && (n += 1e3 * t(this).attr("data-wow-delay").slice(0, -1));
                                var i = this;
                                setTimeout(function () {
                                    t(i).removeClass("animated")
                                }, n)
                            }
                        }), i(), n--) : i()
                    }), t(".wow").each(function () {
                        var n = t(this).index(".wow"),
                            i = t(this).attr("data-wow-delay");
                        i ? (i = t(this).attr("data-wow-delay").slice(0, -1), parseFloat(i), t(this).addClass("animated"), t(this).css({
                            visibility: "visible"
                        }), t(this).css({
                            "animation-delay": i + "s"
                        }), t(this).css({
                            "animation-name": e[n]
                        })) : (t(this).addClass("animated"), t(this).css({
                            visibility: "visible"
                        }), t(this).css({
                            "animation-name": e[n]
                        }))
                    })
                }
            }
        }
    }(jQuery),
    function (t) {
        t(window).on("scroll", function () {
            var e = t(".navbar");
            e.length && (e.offset().top > 50 ? t(".scrolling-navbar").addClass("top-nav-collapse") : t(".scrolling-navbar").removeClass("top-nav-collapse"))
        })
    }(jQuery),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function () {
            return t.Waves = e.call(t), t.Waves
        }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
    }("object" == typeof window ? window : this, function () {
        "use strict";
        var t = t || {},
            e = document.querySelectorAll.bind(document),
            n = Object.prototype.toString,
            i = "ontouchstart" in window;

        function a(t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t
        }

        function r(t) {
            var i, r = n.call(t);
            return "[object String]" === r ? e(t) : a(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r) && t.hasOwnProperty("length") ? t : a(i = t) && i.nodeType > 0 ? [t] : []
        }

        function o(t) {
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                a = t && t.ownerDocument;
            return e = a.documentElement, void 0 !== t.getBoundingClientRect && (i = t.getBoundingClientRect()), n = function (t) {
                return null !== (e = t) && e === e.window ? t : 9 === t.nodeType && t.defaultView;
                var e
            }(a), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }
        }

        function s(t) {
            var e = "";
            for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
            return e
        }
        var l = {
                duration: 750,
                delay: 200,
                show: function (t, e, n) {
                    if (2 === t.button) return !1;
                    e = e || this;
                    var i = document.createElement("div");
                    i.className = "waves-ripple waves-rippling", e.appendChild(i);
                    var a = o(e),
                        r = 0,
                        u = 0;
                    "touches" in t && t.touches.length ? (r = t.touches[0].pageY - a.top, u = t.touches[0].pageX - a.left) : (r = t.pageY - a.top, u = t.pageX - a.left), u = u >= 0 ? u : 0, r = r >= 0 ? r : 0;
                    var c = "scale(" + e.clientWidth / 100 * 3 + ")",
                        d = "translate(0,0)";
                    n && (d = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", u), i.setAttribute("data-y", r), i.setAttribute("data-scale", c), i.setAttribute("data-translate", d);
                    var h = {
                        top: r + "px",
                        left: u + "px"
                    };
                    i.classList.add("waves-notransition"), i.setAttribute("style", s(h)), i.classList.remove("waves-notransition"), h["-webkit-transform"] = c + " " + d, h["-moz-transform"] = c + " " + d, h["-ms-transform"] = c + " " + d, h["-o-transform"] = c + " " + d, h.transform = c + " " + d, h.opacity = "1";
                    var f = "mousemove" === t.type ? 2500 : l.duration;
                    h["-webkit-transition-duration"] = f + "ms", h["-moz-transition-duration"] = f + "ms", h["-o-transition-duration"] = f + "ms", h["transition-duration"] = f + "ms", i.setAttribute("style", s(h))
                },
                hide: function (t, e) {
                    for (var n = (e = e || this).getElementsByClassName("waves-rippling"), a = 0, r = n.length; a < r; a++) c(t, e, n[a]);
                    i && (e.removeEventListener("touchend", l.hide), e.removeEventListener("touchcancel", l.hide)), e.removeEventListener("mouseup", l.hide), e.removeEventListener("mouseleave", l.hide)
                }
            },
            u = {
                input: function (t) {
                    var e = t.parentNode;
                    if ("span" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var n = document.createElement("span");
                        n.className = "waves-input-wrapper", e.replaceChild(n, t), n.appendChild(t)
                    }
                },
                img: function (t) {
                    var e = t.parentNode;
                    if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var n = document.createElement("i");
                        e.replaceChild(n, t), n.appendChild(t)
                    }
                }
            };

        function c(t, e, n) {
            if (n) {
                n.classList.remove("waves-rippling");
                var i = n.getAttribute("data-x"),
                    a = n.getAttribute("data-y"),
                    r = n.getAttribute("data-scale"),
                    o = n.getAttribute("data-translate"),
                    u = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                u < 0 && (u = 0), "mousemove" === t.type && (u = 150);
                var c = "mousemove" === t.type ? 2500 : l.duration;
                setTimeout(function () {
                    var t = {
                        top: a + "px",
                        left: i + "px",
                        opacity: "0",
                        "-webkit-transition-duration": c + "ms",
                        "-moz-transition-duration": c + "ms",
                        "-o-transition-duration": c + "ms",
                        "transition-duration": c + "ms",
                        "-webkit-transform": r + " " + o,
                        "-moz-transform": r + " " + o,
                        "-ms-transform": r + " " + o,
                        "-o-transform": r + " " + o,
                        transform: r + " " + o
                    };
                    n.setAttribute("style", s(t)), setTimeout(function () {
                        try {
                            e.removeChild(n)
                        } catch (t) {
                            return !1
                        }
                    }, c)
                }, u)
            }
        }
        var d = {
            touches: 0,
            allowEvent: function (t) {
                var e = !0;
                return /^(mousedown|mousemove)$/.test(t.type) && d.touches && (e = !1), e
            },
            registerEvent: function (t) {
                var e = t.type;
                "touchstart" === e ? d.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function () {
                    d.touches && (d.touches -= 1)
                }, 500)
            }
        };

        function h(t) {
            var e = function (t) {
                if (!1 === d.allowEvent(t)) return null;
                for (var e = null, n = t.target || t.srcElement; n.parentElement;) {
                    if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                        e = n;
                        break
                    }
                    n = n.parentElement
                }
                return e
            }(t);
            if (null !== e) {
                if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;
                if (d.registerEvent(t), "touchstart" === t.type && l.delay) {
                    var n = !1,
                        a = setTimeout(function () {
                            a = null, l.show(t, e)
                        }, l.delay),
                        r = function (i) {
                            a && (clearTimeout(a), a = null, l.show(t, e)), n || (n = !0, l.hide(i, e)), s()
                        },
                        o = function (t) {
                            a && (clearTimeout(a), a = null), r(t), s()
                        };
                    e.addEventListener("touchmove", o, !1), e.addEventListener("touchend", r, !1), e.addEventListener("touchcancel", r, !1);
                    var s = function () {
                        e.removeEventListener("touchmove", o), e.removeEventListener("touchend", r), e.removeEventListener("touchcancel", r)
                    }
                } else l.show(t, e), i && (e.addEventListener("touchend", l.hide, !1), e.addEventListener("touchcancel", l.hide, !1)), e.addEventListener("mouseup", l.hide, !1), e.addEventListener("mouseleave", l.hide, !1)
            }
        }
        return t.init = function (t) {
            var e = document.body;
            "duration" in (t = t || {}) && (l.duration = t.duration), "delay" in t && (l.delay = t.delay), i && (e.addEventListener("touchstart", h, !1), e.addEventListener("touchcancel", d.registerEvent, !1), e.addEventListener("touchend", d.registerEvent, !1)), e.addEventListener("mousedown", h, !1)
        }, t.attach = function (t, e) {
            var i, a;
            t = r(t), "[object Array]" === n.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
            for (var o = 0, s = t.length; o < s; o++) a = (i = t[o]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(a) && (u[a](i), i = i.parentElement), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + e)
        }, t.ripple = function (t, e) {
            var n = (t = r(t)).length;
            if ((e = e || {}).wait = e.wait || 0, e.position = e.position || null, n)
                for (var i, a, s, u = {}, c = 0, d = {
                        type: "mousedown",
                        button: 1
                    }, h = function (t, e) {
                        return function () {
                            l.hide(t, e)
                        }
                    }; c < n; c++)
                    if (i = t[c], a = e.position || {
                            x: i.clientWidth / 2,
                            y: i.clientHeight / 2
                        }, s = o(i), u.x = s.left + a.x, u.y = s.top + a.y, d.pageX = u.x, d.pageY = u.y, l.show(d, i), e.wait >= 0 && null !== e.wait) {
                        setTimeout(h({
                            type: "mouseup",
                            button: 1
                        }, i), e.wait)
                    }
        }, t.calm = function (t) {
            for (var e = {
                    type: "mouseup",
                    button: 1
                }, n = 0, i = (t = r(t)).length; n < i; n++) l.hide(e, t[n])
        }, t.displayEffect = function (e) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(e)
        }, t
    }), $(document).ready(function () {
        Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init()
    });
var _this = void 0;
! function (t) {
    var e, n, i = "".concat(["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function (t) {
            return "input[type=".concat(t, "]")
        }).join(", "), ", textarea"),
        a = function (t) {
            var e = t.siblings("label, i"),
                n = t.val().length,
                i = t.attr("placeholder");
            e["".concat(n || i ? "add" : "remove", "Class")]("active")
        },
        r = function (t) {
            if (t.hasClass("validate")) {
                var e = t.val(),
                    n = !e.length,
                    i = !t[0].validity.badInput;
                if (n && i) t.removeClass("valid").removeClass("invalid");
                else {
                    var a = t.is(":valid"),
                        r = Number(t.attr("length")) || 0;
                    a && (!r || r > e.length) ? t.removeClass("invalid").addClass("valid") : t.removeClass("valid").addClass("invalid")
                }
            }
        },
        o = function () {
            var e = t(_this);
            if (e.val().length) {
                var n = t(".hiddendiv"),
                    i = e.css("font-family"),
                    a = e.css("font-size");
                a && n.css("font-size", a), i && n.css("font-family", i), "off" === e.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text("".concat(e.val(), "\n"));
                var r = n.html().replace(/\n/g, "<br>");
                n.html(r), n.css("width", e.is(":visible") ? e.width() : t(window).width() / 2), e.css("height", n.height())
            }
        };
    t(i).each(function (e, n) {
        var i = t(n),
            r = i.siblings("label, i");
        a(i), n.validity.badInput && r.addClass("active")
    }), t(document).on("focus", i, function (e) {
        t(e.target).siblings("label, i").addClass("active")
    }), t(document).on("blur", i, function (e) {
        var n = t(e.target),
            i = !n.val(),
            a = !e.target.validity.badInput,
            o = void 0 === n.attr("placeholder");
        i && a && o && n.siblings("label, i").removeClass("active"), r(n)
    }), t(document).on("change", i, function (e) {
        var n = t(e.target);
        a(n), r(n)
    }), t("input[autofocus]").siblings("label, i").addClass("active"), t(document).on("reset", function (e) {
        var n = t(e.target);
        n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid").each(function (e, n) {
            var i = t(n),
                a = !i.val(),
                r = !i.attr("placeholder");
            a && r && i.siblings("label, i").removeClass("active")
        }), n.find("select.initialized").each(function (e, n) {
            var i = t(n),
                a = i.siblings("input.select-dropdown"),
                r = i.children("[selected]").val();
            i.val(r), a.val(r)
        }))
    }), (n = t(".md-textarea-auto")).length && (e = window.attachEvent ? function (t, e, n) {
        t.attachEvent("on".concat(e), n)
    } : function (t, e, n) {
        t.addEventListener(e, n, !1)
    }, n.each(function () {
        var t = this;

        function n() {
            t.style.height = "auto", t.style.height = "".concat(t.scrollHeight, "px")
        }

        function i() {
            window.setTimeout(n, 0)
        }
        e(t, "change", n), e(t, "cut", i), e(t, "paste", i), e(t, "drop", i), e(t, "keydown", i), n()
    }));
    var s = t("body");
    if (!t(".hiddendiv").first().length) {
        var l = t('<div class="hiddendiv common"></div>');
        s.append(l)
    }
    t(".materialize-textarea").each(o), s.on("keyup keydown", ".materialize-textarea", o)
}(jQuery),
function (t) {
    t("body").on("shown.bs.modal", ".modal", function () {
        t(".modal-backdrop").length || ($modal_dialog = t(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && (t(this).addClass("modal-scrolling"), t("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && (t(this).addClass("modal-content-clickable"), t("body").addClass("scrollable")))
    }), t("body").on("hidden.bs.modal", ".modal", function () {
        t("body").removeClass("scrollable")
    })
}(jQuery),
function (t) {
    t.fn.mdbTreeview = function () {
        var e = t(this);
        if (e.hasClass("treeview")) {
            var n = e.find(".rotate");
            t.each(n, function (e) {
                t(n[e]).off("click"), t(n[e]).on("click", function () {
                    var e = t(this);
                    e.siblings(".nested").toggleClass("active"), e.toggleClass("down")
                })
            })
        }
        if (e.hasClass("treeview-animated")) {
            var i = e.find(".treeview-animated-element"),
                a = e.find(".closed");
            e.find(".nested").hide(), a.off("click"), a.on("click", function () {
                var e = t(this),
                    n = e.siblings(".nested"),
                    i = e.children(".fa-angle-right");
                return e.toggleClass("open"), i.toggleClass("down"), n.hasClass("active") ? n.removeClass("active").slideUp() : n.addClass("active").slideDown(), !1
            }), i.off("click"), i.on("click", function () {
                var e = t(this);
                e.hasClass("opened") ? e.removeClass("opened") : (i.removeClass("opened"), e.addClass("opened"))
            })
        }
        if (e.hasClass("treeview-colorful")) {
            var r = e.find(".treeview-colorful-element"),
                o = e.find(".treeview-colorful-items-header");
            e.find(".nested").hide(), o.off("click"), o.on("click", function () {
                var e = t(this),
                    n = e.siblings(".nested"),
                    i = e.children(".fa-plus-circle"),
                    a = e.children(".fa-minus-circle");
                e.toggleClass("open"), i.removeClass("fa-plus-circle"), i.addClass("fa-minus-circle"), a.removeClass("fa-minus-circle"), a.addClass("fa-plus-circle"), n.hasClass("active") ? n.removeClass("active").slideUp() : n.addClass("active").slideDown()
            }), r.off("click"), r.on("click", function () {
                var e = t(this);
                e.hasClass("opened") ? r.removeClass("opened") : (r.removeClass("opened"), e.addClass("opened"))
            })
        }
    }
}(jQuery),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).bsCustomFileInput = e()
}(this, function () {
    "use strict";
    var t = {
            CUSTOMFILE: '.custom-file input[type="file"]',
            CUSTOMFILELABEL: ".custom-file-label",
            FORM: "form",
            INPUT: "input"
        },
        e = function (e) {
            var n = "",
                i = e.parentNode.querySelector(t.CUSTOMFILELABEL);
            return i && (n = i.innerHTML), n
        },
        n = function (t) {
            if (t.childNodes.length > 0)
                for (var e = [].slice.call(t.childNodes), n = 0; n < e.length; n++) {
                    var i = e[n];
                    if (3 !== i.nodeType) return i
                }
            return t
        },
        i = function (e) {
            var i = e.bsCustomFileInput.defaultText,
                a = e.parentNode.querySelector(t.CUSTOMFILELABEL);
            a && (n(a).innerHTML = i)
        },
        a = !!window.File,
        r = function (t) {
            if (t.hasAttribute("multiple") && a) return [].slice.call(t.files).map(function (t) {
                return t.name
            }).join(", ");
            if (-1 !== t.value.indexOf("fakepath")) {
                var e = t.value.split("\\");
                return e[e.length - 1]
            }
            return t.value
        };

    function o() {
        var e = this.parentNode.querySelector(t.CUSTOMFILELABEL);
        if (e) {
            var a = n(e),
                o = r(this);
            o.length ? a.innerHTML = o : i(this)
        }
    }

    function s() {
        for (var e = [].slice.call(this.querySelectorAll(t.INPUT)).filter(function (t) {
                return !!t.bsCustomFileInput
            }), n = 0, a = e.length; n < a; n++) i(e[n])
    }
    var l = "reset",
        u = "change";
    return {
        init: function (n, i) {
            void 0 === n && (n = t.CUSTOMFILE), void 0 === i && (i = t.FORM);
            for (var a = [].slice.call(document.querySelectorAll(n)), r = [].slice.call(document.querySelectorAll(i)), c = 0, d = a.length; c < d; c++) {
                var h = a[c];
                Object.defineProperty(h, "bsCustomFileInput", {
                    value: {
                        defaultText: e(h)
                    },
                    writable: !0
                }), o.call(h), h.addEventListener(u, o)
            }
            for (var f = 0, p = r.length; f < p; f++) r[f].addEventListener(l, s), Object.defineProperty(r[f], "bsCustomFileInput", {
                value: !0,
                writable: !0
            })
        },
        destroy: function () {
            for (var e = [].slice.call(document.querySelectorAll(t.FORM)).filter(function (t) {
                    return !!t.bsCustomFileInput
                }), n = [].slice.call(document.querySelectorAll(t.INPUT)).filter(function (t) {
                    return !!t.bsCustomFileInput
                }), a = 0, r = n.length; a < r; a++) {
                var c = n[a];
                i(c), c.bsCustomFileInput = void 0, c.removeEventListener(u, o)
            }
            for (var d = 0, h = e.length; d < h; d++) e[d].removeEventListener(l, s), e[d].bsCustomFileInput = void 0
        }
    }
}), document.addEventListener("DOMContentLoaded", function () {
    bsCustomFileInput.init()
});
